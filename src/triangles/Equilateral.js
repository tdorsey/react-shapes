import React from "react";

const Equilateral = props => {
  const { width, height, bgColor, content } = props;
  return (
    <div
      style = {{
        width:  200,
        height: 200,
        backgroundColor:  "green",
		color:  "black"
      }}
    >
      {content}
    </div>
  );
};

export default Equilateral;
