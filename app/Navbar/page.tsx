'use client'
import Link from "next/link";
import "../globals.css";

export default function page() {
  const startfromtop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <div className="navbar✌️">
      <input type="checkbox" id="dropdown" />
      <label htmlFor="dropdown" className="nav-ham">
        <img
          src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677520702/ssbakers/ss_humburgir_hdts6u.png"
          alt="ssbakers hamburger"
        />
      </label>
      <Link href={"/"} className="nav-logo">
        <img
          src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677519905/ssbakers/ss_logo_ohe3qb.png"
          alt="ssbakers logo"
        />
      </Link>
      <div className="nav-links">
        <img
          src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1678017007/ssbakers/cupcake_uj46ha.png"
          alt="cupcake"
        />
        <li>Home</li>
        <li>Our Collection</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Customize Cakes</li>
        <Link onClick={startfromtop} className="nav-btn" href={"/Franchise"}>
          Franchise
        </Link>
      </div>
    </div>
  );
}
