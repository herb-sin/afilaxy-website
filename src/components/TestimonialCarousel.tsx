import { useState, useEffect, useCallback, useRef } from 'react'

interface Props {
  images: { src: string; alt: string }[]
}

/**
 * Carrossel para depoimentos (prints de tweets) de altura variável.
 * Diferente do Carousel genérico: mostra um depoimento por vez, sem
 * cortar a imagem (sem object-cover) e anima a altura do contêiner
 * conforme o tamanho natural de cada print.
 */
export default function TestimonialCarousel({ images }: Props) {
  const [index, setIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [height, setHeight] = useState<number>()
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

  const measure = useCallback(() => {
    const el = trackRef.current?.children[index] as HTMLElement | undefined
    if (el) setHeight(el.offsetHeight)
  }, [index])

  useEffect(() => { measure() }, [measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Auto-play
  useEffect(() => {
    if (lightbox) return
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [next, lightbox])

  // Teclado para o lightbox
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [lightbox, next, prev])

  return (
    <>
      <div className="relative mx-auto max-w-md">
        <div
          className="overflow-hidden rounded-card bg-white shadow-lg transition-[height] duration-300 ease-in-out"
          style={{ height }}
        >
          <div ref={trackRef} className="flex items-start transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {images.map((img, i) => (
              <div key={i} className="w-full flex-shrink-0 cursor-zoom-in" onClick={() => setLightbox(true)}>
                <img src={img.src} alt={img.alt} className="w-full" loading="lazy" onLoad={measure} />
              </div>
            ))}
          </div>
        </div>

        {/* Setas */}
        <button onClick={prev} aria-label="Depoimento anterior"
          className="absolute -left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow transition hover:scale-110 max-lg:-left-3">
          ‹
        </button>
        <button onClick={next} aria-label="Próximo depoimento"
          className="absolute -right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow transition hover:scale-110 max-lg:-right-3">
          ›
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button key={i} aria-label={`Ir para depoimento ${i + 1}`} onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${i === index ? 'scale-125 bg-primary' : 'bg-black/20 hover:bg-black/40'}`} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 backdrop-blur-sm" onClick={() => setLightbox(false)}>
          <button className="absolute right-6 top-4 text-4xl text-white transition hover:text-primary" onClick={() => setLightbox(false)}>×</button>
          <button className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40"
            onClick={(e) => { e.stopPropagation(); prev() }}>‹</button>
          <img src={images[index].src} alt={images[index].alt} className="max-h-[85vh] max-w-[80vw] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-3xl text-white transition hover:bg-white/40"
            onClick={(e) => { e.stopPropagation(); next() }}>›</button>
          <p className="absolute bottom-4 text-sm text-white/60">{index + 1} / {images.length}</p>
        </div>
      )}
    </>
  )
}
