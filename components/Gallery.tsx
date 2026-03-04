export default function Gallery() {

  const gallery = [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  ]

  return (
    <section id="gallery" className="py-32 max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold mb-12">
        Mission Logs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {gallery.map((img,i)=>(
          <img
            key={i}
            src={img}
            className="rounded-2xl"
          />
        ))}

      </div>

    </section>
  )
}