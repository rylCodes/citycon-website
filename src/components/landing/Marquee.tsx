const rows = [
  {
    cls: 'bg-ink text-ink-foreground rotate-2 top-6',
    text: 'CRAFTSMANSHIP ✺ CONCRETE CONSTRUCTION ✺ BUILDING ✺ ',
  },
  {
    cls: 'bg-primary text-primary-foreground -rotate-2 top-20',
    text: 'ARCHITECTURE & BUILDING ✺ MATERIAL RECYCLING ✺ TOOLS AND EQUIPMENT ✺ BUILDING CONSTRUCTION ✺ ',
  },
]

export function Marquee() {
  return (
    <section className="relative h-40 overflow-hidden">
      {rows.map((r) => (
        <div key={r.text} className={`absolute -left-10 -right-10 py-3 ${r.cls}`}>
          <div className="flex w-max animate-marquee whitespace-nowrap text-2xl font-bold">
            {r.text.repeat(6)}
          </div>
        </div>
      ))}
    </section>
  )
}
