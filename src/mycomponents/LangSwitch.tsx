'use client'

import React from 'react'

interface LangSwitchProps {
    checked: boolean
    onChange: (checked: boolean) => void
    className?: string
}

export const LangSwitch: React.FC<LangSwitchProps> = ({ checked, onChange, className }) => {
    return (
        <button
            onClick={() => onChange(!checked)}
            className={`w-14 h-8 flex items-center rounded-full px-1 transition-colors duration-300 
        ${checked ? 'bg-blue-500' : 'bg-gray-300'} ${className || ''}`}
        >
            <div
                className={`w-6 h-6 flex items-center justify-center rounded-full bg-white text-xs font-bold shadow transition-transform duration-300
          ${checked ? 'translate-x-6' : 'translate-x-0'}
        `}
            >
                {checked ? '中' : '英'}
            </div>
        </button>
    )
}
