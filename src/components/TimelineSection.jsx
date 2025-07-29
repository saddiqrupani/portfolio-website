export const TimelineSection = () => {
  const timeline = [
    {
      title: "Delta Air Lines – Co-op",
      period: "2024 – Present",
      description:
        "Worked on automating workflows and supporting data-driven tools while gaining experience in a large-scale tech environment.",
      logo: "/logos/delta.png", // Place logo in public/logos
    },
    {
      title: "Georgia Tech – Teaching Assistant",
      period: "2024 – Present",
      description:
        "Assist students with data structures, algorithms, and object-oriented programming by guiding them through concepts and debugging.",
      logo: "/logos/gatech.png",
    },
    {
      title: "Coldstone Creamery - Manager",
      period: "2022 - 2024",
      description:
        "Managing daily operations, optimizing workflows, and enhancing customer experiences while leading a team.",
      logo: "/logos/coldstone.png",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Experience <span className="text-primary">Timeline</span>
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-center md:items-start"
                >
                  <div
                    className={`md:w-1/2 px-4 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-background p-6 rounded-lg shadow-lg border border-gray-200 flex items-start gap-4">
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        className="w-10 h-10 object-contain flex-shrink-0"
                      />
                      <div className="text-left md:text-inherit">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="block text-sm text-muted-foreground">{item.period}</span>
                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-6 h-6 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 border-4 border-background"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
