import { getImgPath } from "@/utils/image";
import Image from "next/image";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-9">
                <h1>Ahmed abidi</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1 className="hero-h1" aria-label="A Graphic Designer, Video Editor, Content Manager">A <span className="typewriter"></span></h1>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl">
             I’m Ahmed Abidi, a passionate and creative designer with experience in graphic design, 
             video editing, and content management. I focus on creating visually strong, engaging, 
             and strategic content that helps brands communicate clearly and stand out in digital spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
