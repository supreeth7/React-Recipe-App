import React from "react";
import style from "./recipe.module.css";

const Recipe = (props) => {
  return (
    <div className={style.recipe}>
      <img src={props.image} />
      <h1>{props.title}</h1>
      <p>{props.cal}</p>
      <ol>
        {props.ing.map((ingridient) => (
          <li>{ingridient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
