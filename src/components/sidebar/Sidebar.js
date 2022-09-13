import React from "react";
import "./sidebar.css";
import { items } from "./items";
const Sidebar = () => {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__top">
        <div className="logo" />
        <div className="sidebar__burger burger">
          <span className="burger__line burger__line_first"></span>
          <span className="burger__line burger__line_second"></span>
          <span className="burger__line burger__line_third"></span>
        </div>
      </div>
      <div className="sidebar__items">
        <div>
          {items.map((item) => (
            <div className="item">
              <div className="icon">{item.icon}</div>
              <h4 className="text">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
