"use client"

import { Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-20 border-t border-blue-500/10 glass mt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-blue-500/5">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-4xl font-black italic text-blue-600/30 mb-2">
              #GarudakuJayaSelalu
            </p>
          </div>

          <div className="flex space-x-4">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-slate-400 hover:text-blue-500 transition transform hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}