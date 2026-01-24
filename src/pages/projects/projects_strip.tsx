const projectNames = [
  'Formatic Trucking INC',
  'Move Your Pet',
  'Nigeria Tennis Federation',
  'BraleWood',
  'Express Elevator',
  'Lexxy FX',
]

export default function ProjectsStrip() {
  return (
    <section className='pb-12 md:pb-[80px] w-full overflow-hidden bg-white'>
      <div className='container px-4'>
        <div className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 md:gap-6 w-full'>
          {projectNames.map((name) => (
            <div
              key={name}
              className='px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer'
              style={{
                background: 'linear-gradient(90deg, rgba(54, 46, 89, 0.1) 0%, rgba(206, 63, 224, 0.1) 50%, rgba(160, 63, 252, 0.1) 100%)'
              }}>
              <span className='text-base md:text-lg font-recia font-medium text-[#1E1E1E] whitespace-nowrap'>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
