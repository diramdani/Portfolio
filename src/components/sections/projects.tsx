import { ExternalLink, FolderGit2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { projects } from '@/data/portfolio'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Proyek unggulan"
          description="Beberapa karya yang mewakili cara saya merancang antarmuka dan menyusun kode."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="h-full">
              <img
                src={project.image}
                alt={`Thumbnail ${project.title}`}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1.5">
                {project.tech.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink data-icon="inline-start" />
                    Live Demo
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <FolderGit2 data-icon="inline-start" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
