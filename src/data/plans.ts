import type { PlanCardProps } from '@/types'

export const plans: PlanCardProps[] = [
{
    name: 'Básico',
    price: 29,
    currency: '$',
    period: '/mes',
    ctaLabel: 'Empezar con Básico',
    features: [
        { text: 'Cobertura de vida esencial', included: true },
        { text: 'Asistencia funeraria', included: true },
        { text: 'Orientación médica telefónica', included: true },
        { text: 'Incapacidad permanente', included: false },
        { text: 'Enfermedades graves', included: false },
        { text: 'Soporte prioritario', included: false },
    ],
},
{
    name: 'Familiar',
    price: 59,
    currency: '$',
    period: '/mes',
    ctaLabel: 'Elegir Familiar',
    highlighted: true,
    features: [
        { text: 'Cobertura de vida esencial', included: true },
        { text: 'Asistencia funeraria', included: true },
        { text: 'Orientación médica telefónica', included: true },
        { text: 'Incapacidad permanente', included: true },
        { text: 'Enfermedades graves', included: true },
        { text: 'Soporte prioritario', included: false },
    ],
},
{
    name: 'Premium',
    price: 99,
    currency: '$',
    period: '/mes',
    ctaLabel: 'Elegir Premium',
    features: [
        { text: 'Cobertura de vida esencial', included: true },
        { text: 'Asistencia funeraria', included: true },
        { text: 'Orientación médica telefónica', included: true },
        { text: 'Incapacidad permanente', included: true },
        { text: 'Enfermedades graves', included: true },
        { text: 'Soporte prioritario', included: true },
    ],
},
]