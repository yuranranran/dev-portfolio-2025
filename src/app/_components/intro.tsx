import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TechStack } from "./tech-stack";

export function Intro() {
  return (
    <section className="my-28">
      {/* Title */}
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        👋🏼 I’m Amy.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Intro Text */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-3xl font-medium leading-snug mt-4">
            An aspiring software engineer bridging design and code.
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            Pursuing an M.S. in Computer Science at CU Boulder. Experienced in
            frontend development (React, Next.js, Tailwind) and backend (Java).
            Crafting intuitive experiences and scalable solutions.
          </p>
          <p className="text-lg mt-2 leading-relaxed">
            Open to frontend and full-stack engineering roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-gray-800 hover:text-gray-600 text-2xl"
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
              className="text-gray-800 hover:text-gray-600 text-2xl"
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

        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl md:text-3xl font-medium leading-snug mt-4">
            An aspiring software engineer bridging design and code.
          </h2>
          <p className="text-lg mt-4 leading-relaxed">
            Pursuing an M.S. in Computer Science at CU Boulder. Experienced in
            frontend development (React, Next.js, Tailwind) and backend (Java).
            Crafting intuitive experiences and scalable solutions.
          </p>
          <p className="text-lg mt-2 leading-relaxed">
            Open to frontend and full-stack engineering roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              className="text-gray-800 hover:text-gray-600 text-2xl"
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
              className="text-gray-800 hover:text-gray-600 text-2xl"
            >
              <HiOutlineDocumentText />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
