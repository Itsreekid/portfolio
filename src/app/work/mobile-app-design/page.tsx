import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import workData from "@/data/work-data.json";

export default async function MobileAppDesignPage() {
  const project = workData.workData.find((p: any) => p.slug === "mobile-app-design");

  if (!project) {
    notFound();
  }

  return (
    <section>
      <div className="bg-softGray py-16 xl:py-32">
        <div className="container">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>{project.title}</h2>
            <p className="text-xl text-orange-500">( Project )</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            <div>
              <Image
                src={getImgPath(project.image)}
                alt={project.title}
                width={570}
                height={414}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
              <p className="text-gray-700 mb-6">
                This is a detailed overview of the {project.title} project. It showcases the design and development process for a mobile application aimed at providing an intuitive user experience.
              </p>
              <div className="mb-6">
                <strong>Client:</strong> {project.client}
              </div>
              <div className="mb-6">
                <strong>Category:</strong> Mobile App Design
              </div>
              <div className="mb-6">
                <strong>Technologies:</strong> Figma, Adobe XD, Sketch
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h4 className="text-lg font-semibold mb-2">Research</h4>
                <p className="text-gray-600">Conducted user research and analyzed market trends to understand the target audience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h4 className="text-lg font-semibold mb-2">Design</h4>
                <p className="text-gray-600">Created wireframes, mockups, and high-fidelity designs using design tools.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h4 className="text-lg font-semibold mb-2">Prototype</h4>
                <p className="text-gray-600">Developed interactive prototypes to test usability and gather feedback.</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Screenshots</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder for additional images */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Screenshot 1</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Screenshot 2</span>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <span className="text-gray-500">Screenshot 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}