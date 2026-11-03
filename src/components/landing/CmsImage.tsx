import Image from 'next/image'
import type { Media } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type Props = {
  media?: number | string | Media | null
  alt?: string
  className?: string
  priority?: boolean
  sizes?: string
}

export function CmsImage({ media, alt, className, priority, sizes }: Props) {
  if (!media || typeof media !== 'object' || !media.url) return null
  return (
    <Image
      src={getMediaUrl(media.url, media.updatedAt)}
      alt={media.alt || alt || ''}
      width={media.width || 1600}
      height={media.height || 900}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  )
}
