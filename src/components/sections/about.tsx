import { MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/data/portfolio'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="Tentang saya"
          description="Latar belakang, cara kerja, dan apa yang membuat saya betah di frontend."
        />
        <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr]">
          <Card>
            <CardContent className="space-y-4 text-base leading-7 text-muted-foreground">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Nama</p>
                <p className="font-medium">{profile.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Peran</p>
                <p className="font-medium">{profile.role}</p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Lokasi</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
