import Link from "next/link";

type ProjectLayoutProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const ProjectLayout = ({ title = "Projects", subtitle, children }: ProjectLayoutProps) => (
  <main className="container mx-auto px-6 md:px-12">
    {/* Header Section */}
    <header className="py-10 border-b border-gray-300">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 text-center">{subtitle}</p>
      )}
    </header>

    {/* Breadcrumb (Optional) */}
    <nav className="py-4">
      <Link href="/" className="text-blue-600 hover:underline">
        Home
      </Link>{" "}
      / <span className="text-gray-500">Projects</span>
    </nav>

    {/* Main Content Section */}
    <div className="py-10">{children}</div>

    {/* Footer Section */}
    <footer className="py-6 border-t border-gray-300 text-center">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  </main>
);

export default ProjectLayout;
