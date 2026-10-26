import WorkGrid from "@/components/WorkGrid";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Work | Elijah Adebayo" };

export default function WorkPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pb-32 md:pt-36 md:px-10">
      <Reveal>
        <h1 className="mb-3 text-[5rem] leading-none md:text-[9rem]">Work</h1>
        <p className="mb-6 max-w-[30rem] text-xl text-ink/70">One standout from each discipline. Pick a category to see everything I&apos;ve made in it.</p>
      </Reveal>
      <WorkGrid />
    </section>
  );
}
