import Image from "next/image"

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
            <Image src="/photo.jpg" alt="John Doe" width={400} height={400} className="rounded-lg shadow-lg" />

          </div>
          <div className="md:w-1/2 md:pl-8" data-aos="fade-left">
            <p className="text-lg mb-4">
              Hi, I'm Puneesh Hingorani, a passionate full-stack developer with over 5 years of experience in creating innovative
              web applications. I specialize in React, Node.js, and modern web technologies.
            </p>
            <p className="text-lg mb-4">
              My journey in tech started when I built my first website at the age of 15. Since then, I've been
              constantly learning and evolving my skills to stay at the forefront of web development.
            </p>
            <p className="text-lg mb-4">
              When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with
              new cooking recipes. I believe in the power of technology to make the world a better place, and I'm always
              excited to take on new challenges and create impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

