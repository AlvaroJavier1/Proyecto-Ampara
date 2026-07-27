import { motion } from 'framer-motion'
import type { PlanCardProps } from '../../types'

export function PlanCard ({ name, price, currency, period, features, highlighted, ctaLabel }: PlanCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.03}}
            transition={{ duration: 0.2}}
            className={`relative rounded-2xl p-8 flex flex-col h-full ${
                highlighted
                    ? 'bg-primary text-white shadow-2xl shadow-primary/30 ring-2 ring-primary'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100'
            }`}
        >
            {highlighted && (
                <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow'> 
                    Más popular
                </span>
            )}
            <div className='mb-6'>
                <h3 className={`text-xl font-semibold mb-2 ${highlighted ? 'text-white' : 'text-primary'}`}>
                    {name}
                </h3>
                <div className='flex items-end gap-1'>
                    <span className={`text-sm ${highlighted ? 'text-white/70' : 'text-gray-500'}`}>{currency}</span>
                    <span className='text-5xl font-display font-bold'>{price}</span>
                    <span className={`text-sm pb-1 ${highlighted ? 'text-white/70' : 'text-gray-500'}`}>{period}</span>
                </div>
            </div>

            <ul className='space-y-3 mb-8 flex-grow'>
                {features.map((f) =>(
                    <li key={f.text} className='flex items-center gap-3 text-sm'>
                        <span className={f.included
                        ? (highlighted ? 'text-accent' : 'text-primary-light')
                        : (highlighted ? 'text-white/30' : 'text-gray-300')
                    }>
                        {f.included ? '✓' : '✕'}
                    </span>
                    <span className={!f.included ? (highlighted ? 'text-white/50' : 'text-gray-400') : ''}>
                        {f.text}
                    </span>
                    </li>
                ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${highlighted
                ? 'bg-accent text-primary hover:bg-accent-hover shadow-lg'
                : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
            }`}
            >
                {ctaLabel}
            </button>
        </motion.div>
    )
}