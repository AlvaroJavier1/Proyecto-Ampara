import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Vida() {
    const coverages = [
        'Fallecimiento por cualquier causa',
        'Incapacidad total y permanente',
        'Enfermedades graves (cáncer, infarto, ACV)',
        'Asistencias funerarias',
        'Orientación médica telefónica 24/7',
    ]

    const exclusions = [
        'Enfermedades preexistentes no declaradas',
        'Deportes de alto riesgo',
        'Suicidio (primeros 2 años)',
        'Guerra o actos de terrorismo',
    ]


    return (
        <div className="pt-16">
            <section className="bg-primary text-white py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
                            Nuestros seguros
                        </span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
                            Seguro de Vida
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl">
                            Respaldo incondicional para tu familia cuando más lo necesita.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <ScrollReveal>
                        <SectionTitle
                            eyebrow="Coberturas"
                            title="¿Qué cubre?"
                        />
                        <ul className="space-y-4">
                            {coverages.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-primary-light text-xl mt-0.5">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <SectionTitle
                            eyebrow="Exclusiones"
                            title="¿Qué no cubre?"
                        />
                        <ul className="space-y-4">
                            {exclusions.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-red-400 text-xl mt-0.5">✕</span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.3}>
                    <div className="mt-16 text-center">
                        <Link to="/contacto" className="btn-primary text-base px-10 py-4">
                            Cotizar seguro de vida
                        </Link>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}