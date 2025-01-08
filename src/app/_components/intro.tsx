import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] max-w-screen-lg mx-auto px-6 md:px-12">
      {/* Intro Text */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hello 👋🏼, I’m{" "}
          <span className="text-primary">Amy</span>.
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium leading-snug mt-4">
          Software engineer bridging design and code.
        </h2>
        <p className="text-lg mt-4 leading-relaxed">
          Pursuing an M.S. in Computer Science at CU Boulder. Experienced in frontend development (React, Next.js, Tailwind) and backend (Java). Crafting intuitive experiences and scalable solutions.
        </p>
        <p className="text-lg mt-2 leading-relaxed">
          Open to frontend and full-stack engineering roles.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6 mt-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-blue-500 hover:text-blue-700 text-2xl"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourgithub"
            className="text-gray-800 hover:text-gray-600 text-2xl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="/resume.pdf"
            className="text-green-600 hover:text-green-800 text-2xl"
          >
            <HiOutlineDocumentText />
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="md:w-1/2 p-4 flex justify-center">
        <img
          src="assets/home/intro-img-c.png"
          alt="yuran-intro-shot"
          className="h-auto max-w-full"
        />
      </div>
    </section>
  );
}
