export * from './projects'
export * from './education'
export * from './career'

export const name = 'Zhennan Deng'
export const headline = 'Computer Programming Student at Algonquin College'
export const introduction =
  "Hi there! I'm Zhennan(Daniel) Deng, a Computer Programming student at Algonquin College with a strong academic background and hands-on experience in software development. Passionate about building practical applications and solving real-world problems."
export const email = 'danieldeng0411@outlook.com'
export const githubUsername = 'DanielDeng411' // You can replace this with your actual GitHub username if you have one

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi there! I'm Zhennan(Daniel) Deng, currently pursuing a Computer Programming diploma at Algonquin College, Ottawa. I hold a Bachelor’s degree in Auditing from Nanjing Auditing University and have interned in both software engineering and web developing.",
  'I love developing systems that solve real problems—like a Book Cataloging System and a Recipe Manager I built using Java, PHP, and SQL. I’m particularly interested in backend development, database management, and building secure, efficient software.',
  "This site is where I share my learning journey, technical projects, and thoughts on programming and technology. Let's connect and build something awesome together!",
]

// blog
export const blogHeadLine = "What I've been thinking about."
export const blogIntro =
  "I write about programming, real-world projects, and the journey of becoming a software developer."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/zhennan-deng-b8a03a31a/',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
