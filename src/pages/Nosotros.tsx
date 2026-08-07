import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Nosotros() {
  return (
    <div className="pt-16">
      <section className="bg-primary text-white py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quiénes somos
            </span>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Una empresa que protege familias
            </h1>
            <p className="text-white/70 text-xl max-w-2xl">
              Desde 2009 acompañamos a miles de salvadoreños con soluciones de seguro simples, honestas y accesibles.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <SectionTitle
              eyebrow="Nuestra misión"
              title="Proteger lo que más importa"
              subtitle="Creemos que toda familia merece acceso a una protección de calidad, sin complicaciones ni letra pequeña."
            />
            <p className="text-gray-600 leading-relaxed">
              En Ampara Seguros trabajamos cada día para ofrecerte planes transparentes,
              atención personalizada y respuesta rápida cuando más nos necesitás.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '10K+', label: 'Clientes protegidos' },
                { value: '15+',  label: 'Años de experiencia' },
                { value: '98%',  label: 'Clientes satisfechos' },
                { value: '24/7', label: 'Asistencia disponible' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}