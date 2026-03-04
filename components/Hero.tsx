import { Plane } from "lucide-react"

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center">

      <Plane className="w-20 h-20 text-blue-500 mb-6"/>

      <h1 className="text-7xl font-black gradient-text">
        BAYUCARAKA
      </h1>

      <p className="mt-6 text-gray-500 max-w-xl">
        UAV research team from ITS focusing on autonomous aerial technology.
      </p>

    </header>
  )
}