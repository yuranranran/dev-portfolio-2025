import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

interface IntroTextProps {
  header: string;
  details: string;
}

const IntroText: React.FC<IntroTextProps> = ({ header, details }) => {
  return (
    <div className="md:w-1/2 p-4">
      <h2 className="text-2xl md:text-3xl font-medium leading-snug mt-4">
        {header}
      </h2>
      <p className="text-lg mt-4 leading-relaxed">{details}</p>
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
  );
};

export default IntroText;
