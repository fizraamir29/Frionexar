import Image from "next/image"

const offices = [
  {
    city: "Florida",
    image: "/images/florida.jpg",
    address: "560 Village Blvd., Suite 120 #3,",
    address2: "West Palm Beach, FL-33409,",
    country: "United States",
  },
  {
    city: "Manchester",
    image: "/images/manchester.jpg",
    address: "73 Meadway, Bramhall",
    address2: "Stockport, Manchester - SK7 1LX,",
    country: "United Kingdom",
  },
  {
    city: "Dubai",
    image: "/images/dubai.jpg",
    address: "Building 11, Level 7, Bay Square,",
    address2: "Business Bay, Dubai - 23304,",
    country: "United Arab Emirates",
  },
  {
    city: "Karachi",
    image: "/images/karachi.jpg",
    address: "54C, Kashmir Road, Block 2,",
    address2: "PECHS, Karachi, Sindh - 75400,",
    country: "Pakistan",
  },
]

export function OfficeLocations() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Our global office locations
          </h2>
          <p className="text-gray-600">
            Find your team among 350 specialists in 4 offices from 3 countries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offices.map((office) => (
            <div key={office.city} className="group">
              <div className="relative h-52 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={office.image || "/placeholder.svg"}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">{office.city}</h3>
              <div className="text-sm text-gray-600 leading-relaxed">
                <p>{office.address}</p>
                <p>{office.address2}</p>
                <p>{office.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
