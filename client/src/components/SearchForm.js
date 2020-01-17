import React from "react";
import { useForm } from "../hooks/useForm";

export default function SearchForm(props) {
  const [values, clearForm] = useForm("player", {
    username: ""
  });
  return (
    <div className="search">
      <form>
        <input
          id="name"
          onChange={props.handleChanges}
          value={props.value}
          placeholder="Search..."
          type="text"
          name="username"
        />
        <button onClick={clearForm}>Clear Search</button>
      </form>
    </div>
  );
}
