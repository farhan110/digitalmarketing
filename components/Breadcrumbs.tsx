import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/seo'

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)).replace(/</g, '\\u003c') }} />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/65">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path} className="hover:text-white hover:underline">{item.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
