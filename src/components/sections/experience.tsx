import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { experiences } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Pengalaman & pendidikan"
          description="Ringkasan perjalanan profesional yang membentuk cara saya membangun produk."
        />
        <ol className="relative space-y-4 border-l border-border pl-6">
          {experiences.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute top-5 -left-[31px] size-3 rounded-full border-2 border-background bg-foreground" />
              <Card>
                <CardHeader>
                  <p className="text-xs tracking-wide text-muted-foreground uppercase">
                    {item.period}
                  </p>
                  <CardTitle>{item.role}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
