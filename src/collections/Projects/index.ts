import type { CollectionConfig } from 'payload'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { revalidateProject, revalidateProjectDelete } from './hooks/revalidate'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'year', 'order', 'featured'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'category', type: 'text', defaultValue: 'Residential' },
    { name: 'year', type: 'text', defaultValue: '2024' },
    { name: 'summary', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    {
      name: 'cardPosition',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      admin: { description: 'Which side the white info card sits on.' },
    },
    { name: 'order', type: 'number', defaultValue: 0, admin: { position: 'sidebar' } },
    { name: 'featured', type: 'checkbox', defaultValue: true, admin: { position: 'sidebar' } },
  ],
  hooks: {
    afterChange: [revalidateProject],
    afterDelete: [revalidateProjectDelete],
  },
}
