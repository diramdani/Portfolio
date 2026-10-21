import { BriefcaseBusiness, FolderGit2, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { profile } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. Semua hak dilindungi.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FolderGit2 />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={profile.socials.email} aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
      </div>
      <Separator />
    </footer>
  )
}
