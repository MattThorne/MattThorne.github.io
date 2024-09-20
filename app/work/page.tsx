import { Work } from 'app/components/work'

export const metadata = {
  title: 'Work',
  description: 'See  my recent work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-4xl mb-8 tracking-tighter">Work</h1>
      <Work />
    </section>
  )
}
