import IntroText from "./intro-text";

export function Intro() {
  return (
    <section className="my-40">
      {/* Title */}
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        👋🏼 I’m Amy.
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Intro Text for SDE */}
        <IntroText
          header="An aspiring software engineer bridging design and code."
          details="Pursuing an M.S. in Computer Science at CU Boulder. 
          Experienced in frontend development (React, Next.js, Tailwind) and 
          backend (Java). Crafting intuitive experiences and scalable solutions. 
          Open to frontend and full-stack engineering roles."
        ></IntroText>
        {/* Image */}
        <div>
          <img
            src="assets/home/intro-img-c.png"
            alt="yuran-intro-shot"
            className="h-auto max-w-full"
          />
        </div>
        {/* Intro Text for UIUX & Product Design */}
        <IntroText
          header="UX Designer with 2 years of expereince in Microsoft and Google."
          details="Pursuing an M.S. in"
        ></IntroText>
      </div>
    </section>
  );
}
