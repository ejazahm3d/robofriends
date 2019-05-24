/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Card = props => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${props.id}?200*200`} alt="photo" />
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
