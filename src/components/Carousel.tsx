import { useState, useEffect, useCallback, useRef } from 'react'

interface Props {
  images: { src: string; alt: string }[]
}

export default function Carousel({ images }: Props) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval>>()
  const [perView, setPerView] = useState(3)

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, images.length - perView)

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex])
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex])

  // Auto-play
  useEffect(() => {
    if (lightbox) return
    timerRef.current = setInterval(next, 4000)
    return () => clearInterval(timerRef.current)
  }, [next, lightbox])

  // Keyboard for lightbox
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i! + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i! - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [lightbox, images.length])

  return (
    <>
      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-card shadow-lg">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${index * (100 / perView)}%)` }}>
            {images.map((img, i) => (
              <div key={i} className="flex-shrink-0 cursor-pointer px-1" style={{ width: `${100 / perView}%` }}
                onClick={() => setLightbox(i)}>
                <img src={img.src} alt={img.alt} className="h-72 w-full rounded-card object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        {index > 0 && (
          <button onClick={prev} className="absolute -left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary shadow transition hover:scale-110 max-lg:left-3">
            ‹
          </button>
        )}
        {index < maxIndex && (
          <button onClick={next} className="absolute -right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary shadow transition hover:scale-110 max-lg:right-3">
            ›
          </button>
        )}

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${i === index ? 'scale-125 bg-primary' : 'bg-black/20 hover:bg-black/40'}`} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setLightbox(null)}>
          <button className="absolute right-6 top-4 text-4xl text-white transition hover:text-primary" onClick={() => setLightbox(null)}>×</button>
          <button className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! - 1 + images.length) % images.length) }}>‹</button>
          <img src={images[lightbox].src} alt={images[lightbox].alt} className="max-h-[85vh] max-w-[80vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i! + 1) % images.length) }}>›</button>
          <p className="absolute bottom-4 text-sm text-white/60">{lightbox + 1} / {images.length}</p>
        </div>
      )}
    </>
  )
}
