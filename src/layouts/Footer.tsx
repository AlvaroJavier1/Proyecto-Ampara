import { Link } from "react-router-dom";

export function Footer(){
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grip-cols-3 gap-10 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🛡️</span>
                            <span className="font-display text-xl font-bold">Ampara Seguros</span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Protegemos lo que más amas, con planes personalizados y atencion humana.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-accent">
                            Nuestros Seguros
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            {[
                                ['Seguro de Vida', '/vida'],
                                ['Seguro de Daños', '/danos'],
                                ['Seguro de Auto', '/auto'],
                                ['Ver planes' , '/planes'],
                            ].map(([label, path]) => (
                                <li key={path}>
                                    <Link to={path} className="hover:text-white transition-colors">{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-sm tracking-wide uppercase text-accent">
                            Contacto
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>📧 info@amparaseguros.com</li>
                            <li>📞 +503 0000-0000</li>
                            <li>📍 San Salvador, El Salvador</li>
                        </ul>
                    </div>

                    <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
                        © {new Date().getFullYear()} Ampara Seguros. Todos los derechos reservados.
                    </div>

                </div>
            </div>
        </footer>
    )
}