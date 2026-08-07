import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { PlanCard } from '@/components/ui/PlanCard'
import { plans } from '@/data/plans'

export function Planes() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
              Planes
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Elige tu protección
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Planes flexibles que se adaptan a ti. Sin letras pequeñas, sin sorpresas.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nuestros planes"
            title="Transparencia ante todo"
            subtitle="Elegí el plan que mejor se adapta a tu vida y presupuesto."
            center
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <PlanCard {...plan} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}