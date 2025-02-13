import IntroText from "./intro-text";
import Title from "./title";
import Container from "./container";

export function Intro() {
  return (
    <section className="">
      {/* Title */}
      <Title title="👋🏼 I'm Amy."></Title>
      {/* Intro Text for SDE */}
      <IntroText
        header="I build things to fultill user needs and slove pain points."
        details="2 year User Interface and Experience Designer experience at Google and Microsft. 
          Currently, pursuing an M.S. in Computer Science at CU Boulder. 
          Proficient in frontend development (React, Next.js, Tailwind) and 
          backend (Java). Crafting intuitive experiences and scalable solutions."
      ></IntroText>
    </section>
  );
}
