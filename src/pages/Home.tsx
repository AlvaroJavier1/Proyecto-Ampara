import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { PlanCard } from '@/components/ui/PlanCard'
import { services } from '@/data/services'
import { plans } from '@/data/plans'

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          //style={{ backgroundImage: 'url(https://alvarojavier1.github.io/Proyecto-Ampara/assets/img/seguros.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/75 to-primary-dark/60" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-6"
          >
            Ampara Seguros
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            Protegemos lo que
            <span className="text-accent"> más amas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Aseguramos tu presente para que el futuro sea tuyo. Planes de vida,
            hogar y auto con un enfoque moderno y humano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/planes" className="btn-primary text-base px-8 py-4">
              Ver nuestros planes
            </Link>
            <Link
              to="/contacto"
              className="border-2 border-white/60 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Cotizar ahora
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-2xl"
        >
          ↓
        </motion.div>
      </section>

      {/* STATS */}
      <section className="bg-primary py-10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { value: '10K+', label: 'Clientes protegidos' },
            { value: '15+', label: 'Años de experiencia' },
            { value: '3',   label: 'Tipos de cobertura' },
            { value: '24/7', label: 'Asistencia disponible' },
          ].map((stat) => (
            <ScrollReveal key={stat.label}>
              <div>
                <div className="text-3xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section-padding">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Nuestros seguros"
            title="Tu mundo, asegurado."
            subtitle="Unimos la calidez humana con una protección total para tus seres queridos, propiedades y vehículos."
            center
          />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-surface-dark text-white py-20 px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              ¿Listo para proteger tu futuro?
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Un asesor te guía hacia el plan que mejor se adapta a tu vida y presupuesto.
            </p>
            <Link to="/contacto" className="btn-primary text-base px-10 py-4">
              Hablar con un asesor
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* PLANES */}
      <section className="section-padding bg-surface">
        <ScrollReveal>
          <SectionTitle
            eyebrow="Planes"
            title="Elige tu protección"
            subtitle="Planes flexibles que se adaptan a ti. Sin letras pequeñas, sin sorpresas."
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
    </>
  )
}