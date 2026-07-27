import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { ServiceCardProps } from '../../types'

export function ServiceCard({ title, description, icon, href, coverages } : ServiceCardProps){
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -4}}
            transition={{duration: 0.2}}
            className='bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full'
        >
            <div className='text-5xl mb-5'>{icon}</div>
            <h3 className='text-2xl font-display text-primary mb-3'>{title}</h3>
            <p className='text-gray-600 mb-6 flex-grow'>{description}</p>

            {coverages && coverages.length > 0 && (
                <ul className='space-y-2 mb-6'>
                    {coverages.slice(0,3).map((item) => (
                        <li key={item} className='flex items-start gap-2 text-sm text-gray-700'>
                            <span className='text-primary-light mt-0.5'>✓</span>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            <Link
                to={href} className='inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors'
            >
                Saber más
            </Link>
        </motion.div>
    )
}