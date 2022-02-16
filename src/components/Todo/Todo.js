import React from "react";
import DeleteButton from "../DeleteButton";

const Todo = ({ description, status, date, setTodos }) => {
  return (
    <tr>
      <td>{ description }</td>
      <td>{ status }</td>
      <td>{ date }</td>
      <td><DeleteButton description={ description } setTodos={ setTodos } /></td>
    </tr>
  )
};

export default Todo;
