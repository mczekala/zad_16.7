import React from "react";
import {
  Todo
} from "../components/Todo";
export const TodoList = props =>
  props.data.map(elem => ( <
    Todo onClick = {
      () => props.remove(elem.id)
    }
    text = {
      elem.text
    }
    key = {
      elem.id
    }
    />
  ));