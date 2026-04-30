import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Muhammad Komar Portfolio',
    description: 'Frontend Engineer with 6+ years experience building scalable web applications with React.js and Next.js',
    site: context.site?.toString() || 'https://portfolio-nine-omega-39.vercel.app',
    items: [
      {
        title: 'Projects',
        link: '/projects',
        pubDate: new Date(),
        description: 'A collection of web development projects'
      },
      {
        title: 'About',
        link: '/about',
        pubDate: new Date(),
        description: 'Learn more about my experience and skills'
      },
      {
        title: 'Contact',
        link: '/contact',
        pubDate: new Date(),
        description: 'Get in touch for collaborations'
      }
    ],
    customData: `<language>en-us</language>`,
  });
}