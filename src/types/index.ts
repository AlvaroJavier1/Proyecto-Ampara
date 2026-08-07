export interface NavLink {
    label: string;
    path: string;
}

export interface ServiceCardProps{
    title: string;
    description: string;
    icon: string;
    href: string;
    coverages?: string[];
    exclusions?: string[];
}

export interface PlanFeature {
    text: string;
    included: boolean;
}

export interface PlanCardProps {
    name: string;
    price: number;
    currency: string;
    period: string;
    features: PlanFeature[];
    highlighted?: boolean;
    ctaLabel: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    plan?: string;
}