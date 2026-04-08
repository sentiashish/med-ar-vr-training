import type { ReactNode } from 'react'

type PageSectionProps = {
  title: string
  description: string
  children?: ReactNode
}

export function PageSection({ title, description, children }: PageSectionProps) {
  return (
    <section className="page-section">
      <div className="section-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </section>
  )
}
