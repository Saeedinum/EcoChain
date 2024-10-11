import data from "../data.json"

const EventDetials = ({ id }: { id: string }) => {
  const event = data.topics.find(data => data.id === id)

  if (event)
    return (
      <section>
        <div className="flex items-center justify-evenly">
          <h1 className="text-center text-xl font-extrabold text-[#0B539B] sm:text-3xl md:text-2xl lg:text-4xl">{event.title}</h1>
          <div className="relative flex size-[70px] items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:left-[10rem] lg:size-[200px]">
            <img src={event?.logo} alt="" className="z-50 w-[45px] sm:w-[100px] lg:w-[150px]" />
          </div>
        </div>
        {[event.event1, event.event2].map(({ location, event, impact, effect, video }) => (
          <>
            <section className="itmes-center my-20 flex flex-nowrap justify-center gap-5 px-10 *:flex-1 max-lg:flex-col max-md:text-sm">
              <div className="*:*:-ml-5 *:ml-5 *:mt-2">
                <p className="text-gray-600">
                  <span className="font-bold text-black">Location:</span> {location}
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-black">Event:</span> {event}
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-black">Impact:</span> {impact}
                </p>
                <p className="text-gray-600">
                  <span className="block font-bold text-black">Effect on Population:</span> {effect}
                </p>
              </div>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube-nocookie.com/embed/${video}?controls=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="min-h-[200px] w-full rounded-[20px] bg-gray-300 sm:min-h-[300px] md:min-h-[380px] lg:w-[500px]"
              ></iframe>
            </section>
          </>
        ))}
        <p className="mx-10 my-10 h-[1px] bg-blue-300"></p>
      </section>
    )
  else {
    return <div className="text-center text-[20px] font-bold text-red-800">can't find this topic</div>
  }
}

export default EventDetials
