import React from "react";

const Block = (props) => {
  return (
    <div
      style={{
        backgroundColor: `rgb(${props.height * 1},${props.height * 2},${
          props.height * 3
        })`,
        padding: "1px",
        height: `${props.height * 4}px`,
        width: "100%",
        animation: props?.shine ? "shine 2s linear" : "none",
      }}
      className="block m-1"
    >
      <div
        style={{
          backgroundColor: `#15151550`,
          width: "100%",
          textAlign: "center",
          borderTop: "1px solid #15151520",
        }}
      >
        {props.height}
      </div>
    </div>
  );
};

export default Block;
