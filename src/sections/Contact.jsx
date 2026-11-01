import Reveal from "../components/Reveal";
import CopyEmailButton from "../components/CopyEmailButton";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <Reveal className="contact-top">
          <p className="eyebrow">
            <span className="live-dot" />
            NEXT CHAPTER
          </p>
          <span>GOOD WORK STARTS WITH A CONVERSATION.</span>
        </Reveal>
        <Reveal as="a" className="contact-title" href={profile.emailHref}>
          Let’s build
          <br />
          something <em>great.</em>
          <span aria-hidden="true">↗</span>
        </Reveal>
        <div className="contact-bottom">
          <a href={profile.emailHref}>{profile.email} ↗</a>
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
}
