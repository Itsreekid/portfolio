import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2021",
            title: "Junior Social Media Designer",
            company: "Elios Academy",
            type: "Halftime",
            description: "Created visual content for social media platforms with a focus on consistency and brand alignment. Assisted in designing posts, stories, and basic campaigns while learning content strategy, platform algorithms, and audience engagement fundamentals."
        },
        {
            year: "2023",
            title: "Content Designer",
            company: "Favor Academy",
            type: "Remote",
            description: "Designed and structured educational content for social media, combining visuals with clear messaging to improve reach and engagement. Worked remotely with marketing and teaching teams to translate complex educational concepts into simple, shareable content."
        },
        {
            year: "2024",
            title: "Team Lead Designer",
            company: "Synta Academy",
            type: "Fulltime",
            description: "Led the design direction of the brand across all platforms. Managed and guided designers, defined visual identity, and built scalable content systems. Took ownership of content strategy, branding decisions, and execution to support growth and visibility."
        },
        {
            year: "2025+",
            title: "Senior Social media Designer",
            company: "Elios Academy",
            type: "Fulltime",
            description: "Oversaw high-level social media design strategy and brand positioning. Led creative initiatives, optimized content performance, and collaborated with marketing and leadership teams to drive engagement, conversions, and long-term brand consistency."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 3 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 3 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;