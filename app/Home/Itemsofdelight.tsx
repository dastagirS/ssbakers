"use client";


import {  useState } from "react";
import "../globals.css";


export default function Itemsofdelight() {

  const [items, setItems] = useState("Cakes");


  return  (
    <section className="Itemsofdelight-main">
      <h4 className="Itemsofdelight-title">Items Of Delight</h4>
      <div className="Itemsofdelight-select">
        <input
          className={items === "Cakes" ? "selected" : "unselected"}
          type={"button"}
          value={"Cakes"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
          className={items === "Dry Products" ? "selected" : "unselected"}
          type={"button"}
          value={"Dry Products"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
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
  )
};
