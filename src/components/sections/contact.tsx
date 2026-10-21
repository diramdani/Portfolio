import { BriefcaseBusiness, FolderGit2, Mail, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/data/portfolio'

type FormState = {
  name: string
  email: string
  message: string
}

const initialForm: FormState = { name: '', email: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error('Lengkapi semua kolom sebelum mengirim.')
      return
    }

    setSubmitting(true)
    window.setTimeout(() => {
      toast.success('Pesan terkirim. Saya akan membalas secepatnya.')
      setForm(initialForm)
      setSubmitting(false)
    }, 600)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Mari kolaborasi"
          description="Kirim pesan untuk proyek, peluang kerja, atau sekadar ngobrol soal frontend."
        />
        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="size-4" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a className="text-sm hover:underline" href={profile.socials.email}>
                  {profile.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BriefcaseBusiness className="size-4" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  className="text-sm hover:underline"
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/dipratama
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderGit2 className="size-4" />
                  GitHub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  className="text-sm hover:underline"
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/dipratama
                </a>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Formulir kontak</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Nama lengkap"
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Ceritakan singkat tentang proyek atau kebutuhan Anda."
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, message: event.target.value }))
                    }
                  />
                </div>
                <Button type="submit" disabled={submitting}>
                  <Send data-icon="inline-start" />
                  {submitting ? 'Mengirim...' : 'Kirim pesan'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
