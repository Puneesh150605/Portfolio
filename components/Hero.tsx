import Image from "next/image"

const Hero = () => {
  return (
    <section className="pt-20 pb-32 px-4">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16 mt-8 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-aos="fade-right">
            Crafting Digital <span className="text-teal-500">Experiences</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8" data-aos="fade-right" data-aos-delay="200">
            Hi, I'm Puneesh Hingorani. A passionate Full Stack Developer specializing in building exceptional digital
            experiences.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-left">
          <Image src="phh.png" alt="John Doe" width={800} height={800}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
