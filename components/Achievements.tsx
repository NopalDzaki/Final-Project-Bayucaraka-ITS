import { Trophy } from "lucide-react"

type Achievement = {
  year: number
  category: string
  item: string
}

export default function Achievements() {

  const data: Achievement[] = [
    { year: 2025, category: "KRTI", item: "1st Place Racing Plane" },
    { year: 2024, category: "KRTI", item: "1st Place VTOL" }
  ]

  return (
    <section id="achievements" className="py-32 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-10">
        Wall of Achievements
      </h2>

      {data.map((a,i)=>(
        <div key={i} className="flex items-center gap-3 mb-3">
          <Trophy className="text-yellow-500"/>
          {a.item} ({a.category})
        </div>
      ))}

    </section>
  )
}