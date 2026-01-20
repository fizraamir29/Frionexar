"use client"

export function TextUsSidebar() {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1">
      {[...Array(6)].map((_, i) => (
        <button
          key={i}
          className="bg-[#2dd86b] text-white text-xs font-medium py-6 px-2 rounded-r-md hover:bg-green-600 transition-colors"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Text Us
        </button>
      ))}
    </div>
  )
}
