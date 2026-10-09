import Hero from '../components/Hero';

function HomePage() {
  return (
    <div>
      <Hero 
        title="Welcome to ComponentCorner"
        subtitle="Quality tech for your everyday setup."
        cta="Shop Now"
      />

      <div className="main-content">
        <section className="why-shop">
          <h2>Why Shop with Us?</h2>

          <p className="why-intro">
            ComponentCorner makes it easy to find useful tech products
            at great prices.
          </p>

          <div className="benefits">
            <div className="benefit-card">
              <h3>Quality Products</h3>
              <p>
                Find reliable tech products designed for your everyday needs.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Great Prices</h3>
              <p>
                Shop useful technology without breaking your budget.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Easy Shopping</h3>
              <p>
                Browse products and manage your cart with a simple experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;