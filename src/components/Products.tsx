import React from 'react'
import { IProduct } from '../pages/store'
import { motion } from 'framer-motion'

type TProductProps = IProduct

export default function Products({ price, image, title, category }: TProductProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-slate-900/50 border border-slate-800 rounded-3xl p-4 transition-all hover:bg-slate-800/80 hover:border-slate-700 hover:shadow-2xl hover:shadow-brand-500/10"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white p-6 mb-4">
        <img
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      <div className="px-1">
        <h3 className="text-slate-100 font-semibold line-clamp-1 mb-1 group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-white">
            {price}<span className="text-brand-400 text-sm ml-0.5">$</span>
          </span>
          <div className="w-8 h-8 rounded-full bg-brand-400 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg shadow-brand-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
