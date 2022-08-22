import React from "react";
import OrderAz from "./OrderAz/OrderAz";
import OrderPoblacion from "./OrderPoblacion/OrderPoblacion";

export default function Ordenamientos() {
  return (
    <div>
      <div>
        <OrderAz />
      </div>
      <div>
        <OrderPoblacion />
      </div>
    </div>
  );
}
