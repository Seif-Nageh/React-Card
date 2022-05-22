import "./Footer.css";
import Facebook from "./FacebookIcon.png";
import Instagram from "./InstagramIcon.png";
import Github from "./GitHubIcon.png";

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.facebook.com/seif.nageh"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Facebook} alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/seifnageh/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Instagram} alt="Instagram" />
      </a>
      <a
        href="https://github.com/Seif-Nageh/Seif-Nageh"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Github} alt="Github" />
      </a>
    </footer>
  );
}
