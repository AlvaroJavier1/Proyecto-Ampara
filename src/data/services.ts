import type { ServiceCardProps } from "../types";

export const services: ServiceCardProps[] =[
    {
        title: 'Seguro de Vida',
        description: 'Respaldo incondicional para tu familia cuando más lo necesita. ',
        icon: '🛡️',
        href: '/vida',
        coverages:[
            'Fallecimiento por cualquier causa',
            'Incapacidad total y permanente',
            'Enfermedades graves (cáncer, infarto, ACV)',
            'Asistencias funerarias',
        ],
        exclusions:[
            'Enfermedades preexistentes no declaradas',
            'Deportes de alto riesgo',
            'Suicidio (primeros 2 años',
        ],
    },
    {
        title: 'Seguro de Daños',
        description: 'Tu hogar y propiedades protegidos ante cualquier imprevisto.',
        icon: '🏠',
        href: '/danos',
        coverages:[
            'Fenomemos naturales: incendio, terremoto, inundación',
            'Rotura de tuberias',
            'Responsabilidad civil a terceros',
            'Asistencia hogar 24/7',
        ],
        exclusions:[
            'Falta de mantenimiento o desgaste natural',
            'Joyas y obras de arte (requieren clausula especial)',
            'Guerra o actos de autoridad',
        ],
    },
    {
        title: 'Seguro de Autos',
        description: 'Tu vehículo protegido en cada kilómetro del camino',
        icon: '🚗',
        href: '/auto',
        coverages:[
            'Daños materiales por colisión o vuelco',
            'Robo total',
            'Responsabilidad civil',
            'Asistencia vial 24/7',
        ],
        exclusions:[
            'Conducción bajo efectos de sustancias',
            'Uso no declarado (transporte de plataformas)',
            'Participación de carreras',
        ],
    },
]