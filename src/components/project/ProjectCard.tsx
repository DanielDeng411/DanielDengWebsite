"use client"

import { ArrowRightIcon, HashIcon, Globe, Smartphone, FileCode2, Server, Brain, Code } from 'lucide-react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { Favicon } from 'favicon-stealer'

// Map tags to Lucide icons
const tagIconMap: { [key: string]: JSX.Element } = {
  'Web App': <Globe className="w-6 h-6 text-blue-500" />,
  'Mobile App': <Smartphone className="w-6 h-6 text-green-500" />,
  'Flutter': <Smartphone className="w-6 h-6 text-cyan-500" />,
  'Java': <FileCode2 className="w-6 h-6 text-orange-500" />,
  'PHP': <Server className="w-6 h-6 text-purple-500" />,
  'AI': <Brain className="w-6 h-6 text-pink-500" />,
}

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const utmLink = `${project.link.href}?utm_source=${utm_source}`
  const Component = titleAs ?? 'h2'

  // Try to find the first tag that has a matching icon
  const matchedTag = project.tags.find(tag => tagIconMap[tag])
  const ProjectIcon = matchedTag ? tagIconMap[matchedTag] : <Favicon url={project.link.href} />

  return (
    <li className='group relative flex flex-col items-start h-full'>
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              {ProjectIcon}
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <Link
          href={utmLink}
          target='_blank'
          rel='noopener noreferrer'
          className='absolute inset-0 z-20'
        >
          <ArrowUpRight size={32} weight="duotone" className="absolute top-4 right-4 h-4 w-4 group-hover:text-primary group-hover:cursor-pointer" />
        </Link>
      </div>
    </li>
  )
}
