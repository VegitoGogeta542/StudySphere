import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="stacked-card">
        <div className="stack-layer"></div>
        <div className="stack-layer"></div>
        <div className="stack-layer"></div>
        <div className="card dynamic">
          <span className="learn-more">● LEARN MORE</span>
          <h3>→ DYNAMIC</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem doloremque vitae minima.
          </p>
          <button>LET'S GO</button>
        </div>
      </div>
      <div className="card data-driven">
        <h3>DATA DRIVEN</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem doloremque vitae minima.
        </p>
      </div>
      <div className="card dutiful">
        <h3>DUTIFUL</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem doloremque vitae minima.
        </p>
      </div>
      <div className="card demure">
        <h3>DEMURE</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem doloremque vitae minima.
        </p>
      </div>
    </div>
  );
};

export default Cards;
