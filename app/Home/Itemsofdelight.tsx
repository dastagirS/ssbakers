"use client";
// animate on scroll imports
import AOS from 'aos'
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import "../globals.css";

export default function Itemsofdelight() {
  AOS.init()
  const [items, setItems] = useState("Cakes");


  return (
    <section className="Itemsofdelight-main">
      <h4 className="Itemsofdelight-title">Items Of Delight</h4>
      <div className="Itemsofdelight-select">
        <input
          data-aos-duration="500"
          data-aos="fade-down"
          className={items === "Cakes" ? "selected" : "unselected"}
          type={"button"}
          value={"Cakes"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
          data-aos-duration="550"
          data-aos="fade-down"
          className={items === "Dry Products" ? "selected" : "unselected"}
          type={"button"}
          value={"Dry Products"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
          data-aos-duration="600"
          data-aos="fade-down"
          className={items === "Ice Cream" ? "selected" : "unselected"}
          type={"button"}
          value={"Ice Cream"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className="Itemsofdelight-selected">
        {items === "Cakes" && (
          <div className="Itemsofdelight-cakes">
            <div className="Itemsofdelight-card">
              <img
                src="https://res.cloudinary.com/dxi9wcchp/image/upload/v1677862525/ssbakers/sweetrabdi_oggfnf.png"
                alt=""
              />
              <h5>Cakes</h5>
              <button>Know More</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
