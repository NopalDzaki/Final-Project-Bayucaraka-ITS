export default function About() {

  const stats = [
    { value: 5, label: "Divisi" },
    { value: "50+", label: "Awards" },
    { value: 11, label: "Tahun" }
  ]

  return (
    <section id="about" className="max-w-6xl mx-auto py-32 px-6">

      <h2 className="text-4xl font-bold mb-10">
        The Face of Bayucaraka ITS
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {stats.map((s) => (
          <div key={s.label} className="glass p-6 text-center rounded-xl">
            <div className="text-3xl font-bold text-blue-500">{s.value}</div>
            <div className="text-xs">{s.label}</div>
          </div>
        ))}

      </div>

    </section>
  )
}