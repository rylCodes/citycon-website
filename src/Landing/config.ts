import type { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Landing: GlobalConfig = {
  slug: 'landing',
  label: 'Landing Page',
  access: { read: anyone, update: authenticated },
  hooks: {
    afterChange: [
      ({ doc, req: { context } }) => {
        if (!context.disableRevalidate) revalidatePath('/')
        return doc
      },
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Hero',
          name: 'hero',
          fields: [
            {
              name: 'heading',
              type: 'text',
              defaultValue: 'Your Trusted Construction Partner',
              admin: {
                description: 'Leave blank to use the default static heading.',
              },
            },
            {
              name: 'subheading',
              type: 'textarea',
              defaultValue:
                'We provide sustainable construction solutions with a strong team of experienced professionals.',
            },
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
          ],
        },
        {
          label: 'About',
          name: 'about',
          fields: [
            {
              name: 'heading',
              type: 'text',
              defaultValue:
                'The Largest Privately Held Real Estate Investors And Managers In The World',
            },
            {
              name: 'mission',
              type: 'textarea',
              defaultValue:
                'To deliver high-quality buildings on time and within budget while keeping safety first.',
            },
            {
              name: 'vision',
              type: 'textarea',
              defaultValue:
                'To be the most trusted name in construction, shaping skylines and communities.',
            },
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'expertWorkers', type: 'text', defaultValue: '85+' },
            { name: 'projectsDone', type: 'text', defaultValue: '1500+' },
          ],
        },
        {
          label: 'Services',
          fields: [
            {
              name: 'services',
              type: 'array',
              minRows: 1,
              defaultValue: [
                'Building Construction',
                'Residential Construction',
                'Commercial Construction',
                'Architecture Design',
                'Renovation Planning',
                'Structural Engineering',
              ].map((title) => ({
                title,
                description:
                  'From design to delivery, we manage every step of your project with precision and transparent communication.',
              })),
              fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
                { name: 'image', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
        {
          label: 'Stats',
          fields: [
            {
              name: 'stats',
              type: 'array',
              maxRows: 4,
              defaultValue: [
                { value: '48+', label: 'Completed Projects' },
                { value: '52+', label: 'Projects In Development' },
                { value: '2.3b+', label: 'Total Projects Cost' },
                { value: '18m+', label: 'Square Feet Of Property' },
              ],
              fields: [
                { name: 'value', type: 'text', required: true },
                { name: 'label', type: 'text', required: true },
              ],
            },
          ],
        },
        {
          label: 'Testimonial',
          name: 'testimonial',
          fields: [
            {
              name: 'quote',
              type: 'textarea',
              defaultValue:
                'They know their business and their approach, professional efforts and manner of doing business works well as a team player with the owners and their other consultants.',
            },
            { name: 'name', type: 'text', defaultValue: 'Ralph Edwards' },
            { name: 'role', type: 'text', defaultValue: 'Project Manager' },
          ],
        },
        {
          label: 'FAQ',
          name: 'faq',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            {
              name: 'items',
              type: 'array',
              defaultValue: [
                'What kind of construction services does your firm offer?',
                'How do I get a cost estimate for my construction project?',
                'What are the materials used in your projects?',
                'What types of projects have you completed in the past?',
                'How long does a typical project take to finish?',
              ].map((question) => ({
                question,
                answer:
                  'We provide a free, detailed estimate after a site visit and review of your plans and requirements.',
              })),
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },
          ],
        },
      ],
    },
  ],
}
