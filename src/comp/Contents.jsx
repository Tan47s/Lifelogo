import Hero from "../assets/hero.png"
import "./Contents.css"

export const Contents = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h3>"Doctors dress the wound, God heals it."</h3>
        <h1>Well-Being Requires a Safe Space to Heal</h1>

        <p>
        Mental health is the foundation of a healthy life. Together, through
        compassion, professional support, and faith, we help you find hope,
        build resilience, and take meaningful steps toward lasting well-being.
       </p>

       <div className="buttons">
        <button>Contact us</button>
        <button>Our Services</button>
       </div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
}