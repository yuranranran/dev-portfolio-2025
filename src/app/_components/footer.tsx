import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="pt-10 pb-16 flex flex-col lg:flex-row items-center justify-between">
          {/* Branding */}
          <p className="text-center lg:text-left text-sm text-gray-500 dark:text-gray-400">
            © 2025 Amy Yuran Liu. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a
              href="https://github.com/yuranranran"
              className="text-gray-600 hover:text-black hover:underline dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yuran-liu"
              className="text-gray-600 hover:text-black hover:underline dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              className="text-gray-600 hover:text-black hover:underline dark:text-gray-300 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
