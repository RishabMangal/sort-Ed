import React from "react";

const Header = (props) => {
  const btnType = ["primary", "dark", "light", "info", "danger"];
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="row mx-0 m-1 p-1 text-primary bg-dark"
      >
        <h1 className="display-4 col">sort-Ed !</h1>
        <button className="btn btn-success mr-2" onClick={props.shuffleData}>
          New Data
        </button>
      </div>
      <div className="btns-container">
        {props?.actions.map((action, i) => (
          <button
            key={i + Math.random()}
            className={"btn btn-" + btnType[i]}
            onClick={action.func}
          >
            {action.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
