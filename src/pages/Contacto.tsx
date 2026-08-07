import { useState } from "react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { SectionTitle } from "@/components/ui/SectionTitle"
import type { ContactFormData } from "@/types"

export function Contacto() {
    const [form, setFrom] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })

    const [sent, setSent] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFrom({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form data:', form)
        setSent(true)
    }

    return (
        <div className="pt-16">
            <section className="bg-primary text-white py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <ScrollReveal>
                        <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
                            Contacto
                        </span>
                        <h1 className=" text-5xl md:text-6xl font-display font-bold mb-6">
                            Hablemos
                        </h1>
                        <p className="text-white/70 text-xl max-w-2xl">
                            Un asesor te guía hacia el plan que mejor se adapta a tu vida y presupuesto.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <ScrollReveal>
                    <SectionTitle
                        eyebrow="Escríbemos"
                        title="¿En qué te podemos ayudar?"
                    />

                    {sent ? (
                        <div className=" bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-2xl font-display text-primary mb-2">¡Mensaje enviado!</h3>
                            <p className="text-gray-600">Un asesor te contactará pronto.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nombre completo
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-primary/30 focus:border-primary transition"
                                    placeholder="tu@correo.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Teléfono (opcional)
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:primary/30 focus:border-primary transition"
                                    placeholder="+503 0000-0000"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Seguro de interés
                                </label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                                >
                                    <option value="">Seleccioná una opción</option>
                                    <option value="">Seguro de Vida</option>
                                    <option value="">Seguro de Daños</option>
                                    <option value="">Seguro de Auto</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mensaje
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                                    placeholder="Contanos en qué te podemos ayudar"
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full py-4">
                                Enviar mensaje
                            </button>
                        </form>
                    )}
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="space-y-8">
                        <SectionTitle
                            eyebrow="Información"
                            title="Estamos aquí para vos"
                        />
                        {[
                            { icon: '📧', label: 'Email', value: 'info@amparaseguros.com' },
                            { icon: '📞', label: 'Teléfono', value: '+503 2200-0000' },
                            { icon: '📍', label: 'Dirección', value: 'San Salvador, El Salvador' },
                            { icon: '🕐', label: 'Horario', value: 'Lunes a Viernes, 8am - 6pm' },
                        ].map((item) => (
                            <div key={item.label} className="flex items-start gap-4">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                        {item.label}
                                    </div>
                                    <div className="text-gray-800 mt-0.5">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
                </div>
            </section>
        </div>
    )
}