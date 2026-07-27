interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    center?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center = false }: SectionTitleProps) {
    const align = center? 'text-center' : 'text-left';

    return (
        <div className={`mb-12 ${align}`}>
            {eyebrow &&(
                <span className="inline-block text-primary-light font-semibold text-sm tracking-widest uppercase mb-3">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight mb-4">
                {title}
            </h2>
            {subtitle &&(
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    )
}