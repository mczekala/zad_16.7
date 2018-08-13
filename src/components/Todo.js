import React from "react";
export const Todo = props => <
  p onClick = {
    props.onClick
  } > {
    props.text
  } < /p>;