"use client"

import { useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"

type Props = {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({ isDark, toggleTheme }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 py-4 px-6 flex justify-between items-center glass">

      <div className="font-bold">BAYUCARAKA</div>

      <div className="flex items-center gap-4">

        <button onClick={toggleTheme}>
          {isDark ? <Sun /> : <Moon />}
        </button>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </nav>
  )
}