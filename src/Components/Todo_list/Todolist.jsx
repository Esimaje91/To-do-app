import React from "react";
import "./Todolist.scss";

export default function Todolist() {
  return (
    <div className="Todolist">
      <div className="Todolist__row">
        <div className="Todolist__item">Buy New Laptop</div>
        <div className="Todolist__delete">Del</div>
      </div>

      <div className="Todolist__row">
        <div className="Todolist__item">Create a new website</div>
        <div className="Todolist__delete">Del</div>
      </div>

      <div className="Todolist__row">
        <div className="Todolist__item">Buy New Ipad</div>
        <div className="Todolist__delete">Del</div>
      </div>

      <div className="Todolist__row">
        <div className="Todolist__item">Buy New Car</div>
        <div className="Todolist__delete">Del</div>
      </div>

      <div className="Todolist__row">
        <div className="Todolist__item">Read my bible</div>
        <div className="Todolist__delete">Del</div>
      </div>
    </div>
  );
}
