import { navLinks } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

export function Navbar(){
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.addEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    <span className={`font-display text-xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white'
                    }`}>
                        Ampara Seguros
                    </span>
                </Link>

                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map(({ label, path }) =>(
                        <li key={path}>
                            <NavLink
                                to={path}
                                className={({ isActive}) =>
                                    `text-sm font-medium transition-colors ${
                                        isActive ? 'text-accent' : scrolled ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <Link to="/contacto" className="hidden md:inline-flex btn-primary text-sm">
                    Obtener cotización
                </Link>

                <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
                    aria-label="Abrir menú"
                >
                    <div className="space-y-1.5 w-6">
                        <span className={`block h-0.5 bg-current transition-transform &{menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
                        <span className={`block h-0.5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`}/>
                        <span className={`block h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
                    </div>
                </button>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0}}
                        animate={{ opacity: 1, height: 'auto'}}
                        exit={{ opacity: 0, height: 0}}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                    >
                        <ul className="px-6 py-4 space-y-3">
                            {navLinks.map(({ label, path}) => (
                                <li key={path}>
                                    <NavLink to={path} onClick={() => setMenuOpen(false)} className={({ isActive }) => `block py-2 text-sm font-medium ${isActive ? 'text-primary font-semibold' : 'text-gray-700'}`
                                }
                                >
                                    {label}
                                </NavLink>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link to="/contacto" onClick={() => setMenuOpen(false)} className="btn-primary w-full text-center block"
                                >
                                    Obtener cotización
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}