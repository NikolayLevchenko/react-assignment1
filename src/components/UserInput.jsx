import React from "react";

const userInput = props => {
  const myStyle = {
    backgroundColor: "white",
    font: "inherrit",
    border: "1px solid blue"
  };

  return (
    <div>
      <input
        type="text"
        style={myStyle}
        onChange={props.changedName}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
