import React from "react";
import { newExpression } from "@babel/types";

export default function reducer(state, action) {
  switch (action.type) {
    case "MODIFY":
      return action.newArr;
    case "TOGGLE-COMPLETED":
      return state.map(element =>
        element.id === action.id
          ? { ...element, completed: !element.completed }
          : element
      );
    case "CLEAR-COMPLETED":
      return state.filter(element => element.completed === false);
    case "HANDLE-SUBMIT":
      return [action.newValue, ...state];
    default:
      return state;
  }
}

export const toDoList = [
  {
    item: "task 1",
    completed: false,
    id: 3892987543
  },
  {
    item: "task 2",
    completed: true,
    id: 3892987581
  },
  {
    item: "task 3",
    completed: false,
    id: 3292987584
  }
]