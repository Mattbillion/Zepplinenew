import "../Styles/HeroSection.css";
export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="header">
        <h1 className="Blog-posts">Blog Posts</h1>
        <h1 className="Sub">I think so, this is it. </h1>
        <p className="Description">
          Design begins after I begin to think about how to present an
          experience most successfully, whether a button I put in can solve a
          problem. The only point in design is not ui design, if the user does
          not have a good experience at the end of the product, the design will
          be considered unsuccessful in my opinion.
        </p>
        <div className="social-links">
          <a href="#">
            <img src="./assets/Medium.png" alt="Medium" />
          </a>
          <a href="#">
            <img src="./assets/Twitter.png" alt="Twitter" />
          </a>
          <a href="#">
            <img src="./assets/Linkedin.png" alt="Linkedin" />
          </a>
        </div>
      </div>
      <div className="illustration">
        <img src="./assets/illustration.png" alt="illustration" />
      </div>
    </div>
  );
}
