import React from "react";
export const TodoForm = props => {
  return ( <
    form onSubmit = {
      props.onSubmit
    } >
    <
    input type = "text"
    value = {
      props.text
    }
    onChange = {
      props.onChange
    }
    />{" "} <
    input type = "submit"
    value = "Submit" / >
    <
    /form>
  );
};