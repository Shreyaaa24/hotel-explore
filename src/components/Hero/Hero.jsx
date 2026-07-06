import "./Hero.css";

function Hero() {
  const handleExplore = () => {
    const hotelSection = document.getElementById("hotels");

    if (hotelSection) {
      hotelSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="overlay">
        <h1>Find Your Perfect Stay</h1>
        <p>
          Discover luxury hotels, budget stays, and unforgettable experiences.
        </p>

        <button onClick={handleExplore}>
          Explore Hotels
        </button>
      </div>
    </section>
  );
}

export default Hero;