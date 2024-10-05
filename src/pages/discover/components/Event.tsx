import data from "../data.json"

const EventDetials = ({ id }: { id: string }) => {
  const event = data.topics.find(data => data.id === id)

  if (event)
    return (
      <>
        <div className="flex items-center justify-start gap-60">
          <div className="relative flex size-[70px] items-center justify-center rounded-full bg-[#FFFFE4] sm:size-[140px] lg:left-[10rem] lg:size-[200px]">
            <img src={event?.logo} alt="" className="z-50 w-[45px] sm:w-[100px] lg:w-[150px]" />
          </div>
          <h1 className="text-center text-2xl font-extrabold text-[#0B539B] sm:text-3xl md:text-4xl">{event.title}</h1>
        </div>
        {[event.event1, event.event2].map(({ location, event, impact, effect, video }) => (
          <>
            <section className="itmes-center my-20 flex flex-nowrap justify-center gap-5 px-10 *:flex-1">
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
                className="h-[380px] w-[500px] rounded-[20px] bg-gray-300"
              ></iframe>
            </section>
          </>
        ))}
        <p className="mx-10 my-10 h-[1px] bg-blue-300"></p>
      </>
    )
  else {
    return <div className="text-[20px] font-bold  text-center  text-red-800">can't find this topic</div>
  }
}

export default EventDetials
