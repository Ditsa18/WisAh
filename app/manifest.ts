import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/siteConfig'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'WisdomAhead',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F0EBE1',
    theme_color: '#1D1A17',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
