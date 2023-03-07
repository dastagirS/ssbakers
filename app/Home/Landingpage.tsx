import '../globals.css'

export default function Landingpage() {
  return (
    <section className="landing-title">
      <div className="landing-art">
        <div className="big-circle">
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1678207182/ssbakers/happy-birthday-3925931_xyfnft.jpg"
            alt=""
          />
        </div>
        <div className="small-circle">
          <img
            src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677693606/ssbakers/Attractive_girl_eating_a_cake_and_licking_her_finger_v0hi5f.png"
            alt="Attractive girl eating a cake and licking her finger"
          />
        </div>
      </div>
      <div className="landing-main">
        <span>
          <h4>
            Cakes<p>For the special moments</p>
          </h4>
        </span>
        <div className="landing-ratings-btn">
          <button>Order now</button>
          <span>
            <h5>
              {/* <Icon name="ic:sharp-star" /> */}
              4.7/5 Ratings
            </h5>
            <h6>4k+ Review</h6>
          </span>
        </div>
      </div>
    </section>
  );
}
