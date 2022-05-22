import myImg from "./Seif-Nageh.jpg";
import Email from "./Icon.png";
import LinkedIn from "./linkedin.png";
import Phone from "./phone-solid.svg";
import "./MainContent.css";

export default function MainContent() {
  return (
    <main className="main-content">
      <img src={myImg} alt="Seif Nageh" />
      <h1>Seif Nageh</h1>
      <p>Front-End Developer</p>
      <a href="tel:01151251902" target="_blank" rel="noreferrer">
        <img src={Phone} alt="Call Me" />
        Call Me
      </a>
      <div className="container">
        <a
          href="mailto:seifldin.attallah@gmail.com?Subject=subject message"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Email} alt="Email Me" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/seif-nageh-6751111b5/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="Visit Me" />
          LinkedIn
        </a>
      </div>
    </main>
  );
}
