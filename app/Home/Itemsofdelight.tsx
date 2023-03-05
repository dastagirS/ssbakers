"use client";
import { useState } from "react";
import "../globals.css";

export default function Itemsofdelight() {
  const [items, setItems] = useState("cakes");
  console.log(items);
  return (
    <section className="Itemsofdelight-main">
      <h4 className="Itemsofdelight-title">Items Of Delight</h4>
      <div className="Itemsofdelight-select">
        <input
          type={"button"}
          value={"Cakes"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
          type={"button"}
          value={"Dry Products"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
        <input
          type={"button"}
          value={"Ice Cream"}
          onClick={(e) => setItems((e.target as HTMLInputElement).value)}
        />
      </div>
      <div className="Itemsofdelight-selected">
        {items === "cakes" && (
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
