import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { skills } from '@/data/portfolio'

const groups = ['Frontend', 'Design', 'Workflow', 'Backend'] as const

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack"
          description="Alat yang saya pakai sehari-hari untuk merancang, membangun, dan merawat produk web."
        />
        <div className="grid gap-4 md:grid-cols-4">
          {groups.map((group) => (
            <Card key={group}>
              <CardHeader>
                <CardTitle>{group}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.group === group)
                  .map((skill) => (
                    <Badge key={skill.name} variant="secondary">
                      {skill.name}
                    </Badge>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
