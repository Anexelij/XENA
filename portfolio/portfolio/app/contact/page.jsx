import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SocialIcons, EMAIL, WHATSAPP } from "@/components/SocialIcons";

export const metadata = { title: "Contact | Elijah Adebayo" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pb-32 md:pt-36 md:px-10">
      <Reveal>
        <h1 className="text-[9vw] md:text-[5.6vw]">Let&apos;s Work Together</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-block text-xl underline decoration-ink/20 underline-offset-8 transition-colors hover:text-orange hover:decoration-orange md:text-4xl"
        >
          {EMAIL}
        </a>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href={WHATSAPP.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline decoration-ink/20 underline-offset-4 transition-colors hover:text-orange hover:decoration-orange"
          >
            WhatsApp {WHATSAPP.label}
          </a>
          <div className="[&_a]:bg-ink [&_a:hover]:bg-orange">
            <SocialIcons />
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2} className="mt-14 max-w-4xl md:mt-20">
        <ContactForm />
      </Reveal>
    </section>
  );
}
