import { Link } from "react-router-dom";
import Image from "../../src/assets/Image.jpeg"; // Import the image file
import resume from "../assets/resume.pdf";

const AboutPage = () => {
  return (
    <section className="text-gray-700 py-20 px-8">
      <div className="flex flex-col justify-center items-center">
        <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          About me
        </p>
        <img src={Image} alt="Ankush Dongre" className="w-80" />
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold pt-4">
          Hi, I’m Ankush Dongre.
        </h1>
        <p className="text-lg lg:text-xl font-semibold pt-4">
          I am a Web Developer, UX Designer, Web Master, SEO and
          WordPress/WooCommerce Developer.
        </p>
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
    </section>
    // <div className="py-20 px-8">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="lg:text-center">
    //       <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
    //         About Me
    //       </h2>
    //       <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
    //         Hi, I'm Ankush Dongre
    //       </p>
    //       <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
    //         Write a brief introduction about yourself, your passions, and what
    //         you do. Share your skills, experience, and what makes you unique.
    //       </p>
    //     </div>

    //     <div className="mt-10">
    //       <div className="flex justify-center">
    //         <img
    //           src={ProfileImage}
    //           alt="Profile"
    //           className="rounded-full h-40 w-40 object-cover"
    //         />
    //       </div>
    //       <div className="mt-5 text-center">
    //         <h3 className="text-lg leading-6 font-medium text-gray-900">
    //           Web Developer
    //         </h3>
    //         <p className="mt-2 text-sm text-gray-500">India</p>
    //       </div>
    //     </div>

    //     <div className="mt-12 prose prose-indigo text-gray-500">
    //       <p>
    //         Write a more detailed description about yourself, your background,
    //         education, work experiences, and any notable achievements. Keep it
    //         engaging and showcase your personality.
    //       </p>
    //     </div>

    //     {/* Add any other sections like skills, achievements, hobbies, etc. */}

    //     <div className="mt-10">
    //       <h3 className="text-lg leading-6 font-medium text-gray-900">
    //         Contact Me
    //       </h3>
    //       <div className="mt-5 prose prose-indigo text-gray-500">
    //         <p>
    //           If you want to get in touch with me or collaborate on a project,
    //           feel free to reach out through the contact information below:
    //         </p>
    //         <p>Email: your.email@example.com</p>
    //         <p>Phone: (123) 456-7890</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutPage;
