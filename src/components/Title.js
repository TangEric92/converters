import React from "react";

const Title = props => {
  const { title, emoji } = props;

  return (
    <h1>
      <span role="img" aria-label="money">
        {emoji}
      </span>
      {title}
      <span role="img" aria-label="money">
        {emoji}
      </span>
    </h1>
  );
};

export default Title;
