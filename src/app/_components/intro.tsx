export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 h-screen">
      <section className="container md:w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          I'm Amy, software engineer.
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5">
          A statically generated blog example using
        </h4>
      </section>
      <img src="assets/home/intro-img-c.png" alt="yuran-intro-shot" className="h-1/2"/>
    </section>
  );
}
