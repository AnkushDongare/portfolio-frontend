import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf";
import Image from "../../src/assets/Image.jpeg"; // Import the image file

export default function HomeHero() {
  return (
    <section className="text-gray-700 py-20 px-8">
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center">
        <div className="lg:order-2">
          <img src={Image} alt="Ankush Dongre" className="w-80" />
        </div>
        <div className="flex flex-col space-y-4 justify-center items-center text-center lg:order-1">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Hi, I’m Ankush Dongre.
          </h1>
          <p className="text-lg lg:text-xl font-semibold">
            I am a Web Developer, UX Designer, Web Master, SEO and
            WordPress/WooCommerce Developer.
          </p>
          <div className="hidden pt-3 sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Want to know more about me? Go to{" "}
              <Link to="/about" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                About me page <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <a
              href={resume}
              download="Resume"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-indigo-600 focus-visible:outline-offset-2 focus-visible:ring focus-visible:ring-indigo-300"
            >
              Download Resume
            </a>
            <Link
              to="/projects"
              className="text-sm font-semibold leading-6 text-gray-900 px-6"
            >
              See my projects <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
