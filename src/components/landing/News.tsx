import Image from 'next/image'
import news1 from '@/assets/news1.jpg'
import p3 from '@/assets/project3.jpg'
import crane from '@/assets/crane.jpg'
import { Btn, container, Eyebrow } from './ui'

const posts = [
  { img: news1, title: 'A Guide to Hassle-Free Construction Planning' },
  { img: p3, title: 'Why Green Building Is the Future of Construction' },
  { img: crane, title: 'How to Choose the Best Project Solution for You' },
]

export function News() {
  return (
    <section className={`${container} py-24`}>
      <div className="flex items-end justify-between">
        <div>
          <Eyebrow>Blog</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold">
            Latest News Posts
            <br />
            And Articles
          </h2>
        </div>
        <Btn>View All</Btn>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.title}>
            <div className="relative">
              <Image src={p.img} alt="" className="h-56 w-full rounded-2xl object-cover" />
              <span className="absolute bottom-3 right-3 rounded-full bg-ink px-3 py-1 text-xs text-ink-foreground">
                12 Oct
              </span>
            </div>
            <p className="mt-4 text-xs text-primary">Construction • Admin</p>
            <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
            <button
              type="button"
              className="mt-3 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground"
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
