import { MetadataRoute } from 'next'

const posts = [
  'executive-leadership-mental-health-keynote-c-suite-engagement-strategies',
  'free-mental-health-apps-vs-avalochat-comprehensive-comparison',
  'healthcare-worker-burnout-keynote-speaking-frontline-mental-wellness',
  'how-to-deliver-authentic-mental-health-keynotes-that-transform-audiences',
  'mental-health-ai-chatbots-avalochat-human-connection-vs-automation',
  'mental-health-first-aid-workplace-keynote-training-integration',
  'mental-health-stigma-workplace-keynote-speakers-guide-breaking-barriers',
  'remote-work-mental-health-virtual-keynote-engagement-techniques',
  'single-parent-family-operating-system-solo-household-management-strategies',
  'toddler-protein-deficiency-signs-igf-one-early-intervention-nutrition',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.adammoen.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.adammoen.me/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.adammoen.me/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.adammoen.me/book-chapter-1',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.adammoen.me/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://www.adammoen.me/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((slug) => ({
      url: `https://www.adammoen.me/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
