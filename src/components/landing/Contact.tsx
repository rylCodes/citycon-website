import Image from 'next/image'
import { Clock, Mail, MapPin, Phone, Play } from 'lucide-react'
import p2 from '@/assets/project2.jpg'
import { Btn, container, Eyebrow } from './ui'

const info = [
  { Icon: Phone, title: 'Call Us', text: '+1 (555) 120-4567' },
  { Icon: Mail, title: 'Our Email Us', text: 'info@citycon.com' },
  { Icon: Clock, title: 'Opening Hours', text: 'Mon–Fri 8am–6pm' },
  { Icon: MapPin, title: 'Location', text: '24 Builder St, NY' },
]

export function Contact() {
  return (
    <section id="contact" className={`${container} pb-24`}>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold">Let&apos;s Work Together</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
            {info.map(({ Icon, title, text }) => (
              <div key={title} className="flex gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="grid grid-cols-2 gap-4 text-sm">
          <p className="col-span-2 text-muted-foreground">
            Have a project in mind? Fill out the form and our team will get back to you within 24
            hours.
          </p>
          {['Name', 'Email', 'Phone', 'Subject'].map((f) => (
            <input
              key={f}
              placeholder={f}
              className="rounded-xl border border-border bg-surface px-4 py-3"
            />
          ))}
          <textarea
            placeholder="Message"
            className="col-span-2 h-24 rounded-xl border border-border bg-surface px-4 py-3"
          />
        </form>
      </div>
      <div className="relative mt-12 h-[520px] overflow-hidden rounded-[32px]">
        <Image src={p2} alt="Building" className="h-full w-full object-cover" />
        <div className="absolute right-10 top-10 flex items-center gap-6 rounded-2xl bg-background p-5">
          <p className="max-w-[180px] text-sm font-semibold">
            Free consultation with our project experts
          </p>
          <Btn>Contact Us</Btn>
        </div>
        <span className="absolute bottom-10 right-10 grid h-20 w-20 place-items-center rounded-full bg-ink text-ink-foreground">
          <Play fill="currentColor" />
        </span>
      </div>
    </section>
  )
}
