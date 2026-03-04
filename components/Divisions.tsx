import { Plane, Zap, Users } from "lucide-react"

export default function Divisions() {

  const divisions = [
    { title: "VTOL", icon: Plane },
    { title: "Racing", icon: Zap },
    { title: "Official", icon: Users }
  ]

  return (
    <section id="divisions" className="py-32">

      <h2 className="text-4xl text-center font-bold mb-16">
        Strategic Divisions
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {divisions.map((d,i)=>{

          const Icon = d.icon

          return (
            <div key={i} className="glass p-10 rounded-2xl text-center">
              <Icon className="w-10 h-10 mx-auto mb-4 text-blue-500"/>
              <h3 className="text-xl font-bold">{d.title}</h3>
            </div>
          )

        })}

      </div>

    </section>
  )
}