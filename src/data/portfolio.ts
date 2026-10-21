export const profile = {
  name: 'Di Pratama',
  role: 'Frontend Developer',
  location: 'Jakarta, Indonesia',
  email: 'hello@dipratama.dev',
  headline: 'Membangun antarmuka yang cepat, rapi, dan nyaman dipakai.',
  subheadline:
    'Saya merancang dan mengembangkan pengalaman web modern dengan React, TypeScript, dan sistem desain yang konsisten.',
  about: [
    'Halo, saya Di. Saya frontend developer yang fokus pada antarmuka yang aksesibel, berkinerja tinggi, dan mudah dirawat. Saya senang mengubah brief desain menjadi produk yang terasa ringan, jelas, dan siap produksi.',
    'Saya terbiasa bekerja di siklus produk: merancang struktur komponen, merapikan state, dan menjaga kualitas visual di berbagai ukuran layar. Passion saya ada di detail kecil: spacing, hierarki, transisi, dan pengalaman keyboard.',
  ],
  cvUrl: '/cv.pdf',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:hello@dipratama.dev',
  },
} as const

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export const skills = [
  { name: 'React', group: 'Frontend' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Vite', group: 'Frontend' },
  { name: 'shadcn/ui', group: 'Frontend' },
  { name: 'React Router', group: 'Frontend' },
  { name: 'UI/UX Design', group: 'Design' },
  { name: 'Figma', group: 'Design' },
  { name: 'Accessibility', group: 'Design' },
  { name: 'Git', group: 'Workflow' },
  { name: 'REST API', group: 'Workflow' },
] as const

export const projects = [
  {
    id: 'lumen-dashboard',
    title: 'Lumen Dashboard',
    description:
      'Dashboard analitik untuk tim produk. Fokus pada tabel yang mudah dibaca, filter cepat, dan visualisasi yang tidak berisik.',
    image: '/projects/lumen.svg',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'northstar-commerce',
    title: 'Northstar Commerce',
    description:
      'Storefront e-commerce dengan katalog, keranjang, dan checkout yang ringan. Didesain mobile-first dengan alur belanja yang jelas.',
    image: '/projects/northstar.svg',
    tech: ['React', 'Vite', 'shadcn/ui', 'React Router'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'atelier-notes',
    title: 'Atelier Notes',
    description:
      'Aplikasi catatan kolaboratif dengan editor bersih, tag, dan pencarian instan. Menekankan keyboard shortcut dan dark mode.',
    image: '/projects/atelier.svg',
    tech: ['React', 'TypeScript', 'Lucide', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'harbor-design-system',
    title: 'Harbor Design System',
    description:
      'Pustaka komponen internal untuk tim frontend. Token warna, spacing, dan dokumentasi pola UI yang konsisten.',
    image: '/projects/harbor.svg',
    tech: ['React', 'CVA', 'Storybook', 'Accessibility'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
] as const

export const experiences = [
  {
    id: 'exp-1',
    role: 'Frontend Developer',
    company: 'Studio Aruna',
    period: '2023 — Sekarang',
    description:
      'Membangun antarmuka produk SaaS, merapikan design system, dan meningkatkan performa halaman utama hingga Core Web Vitals hijau.',
  },
  {
    id: 'exp-2',
    role: 'UI Engineer',
    company: 'Kala Digital',
    period: '2021 — 2023',
    description:
      'Mengubah desain Figma menjadi komponen reusable, menangani responsive layout, dan berkolaborasi dengan backend untuk integrasi API.',
  },
  {
    id: 'edu-1',
    role: 'S.Kom. Informatika',
    company: 'Universitas Nusantara',
    period: '2017 — 2021',
    description:
      'Fokus pada rekayasa perangkat lunak, desain interaksi, dan proyek akhir berupa aplikasi web untuk manajemen kelas.',
  },
] as const
