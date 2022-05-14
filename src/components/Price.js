import React from "react";

export default function Price(props) {
  return (
    <div>
      <div>
        {props.symbol} -{" "}
        {props.unit
          ? `$ ${props.price.toFixed(2)}`
          : `€ ${(props.price * 0.96).toFixed(2)}`}
      </div>
    </div>
  );
}
