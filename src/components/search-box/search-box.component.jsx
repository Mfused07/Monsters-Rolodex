import React from "react";
import "./search-box.styles.css";
//its a functional component it gets some data in form of props
//and returns some html
//NOTE : if you dont need internal state or life cycle mthods
//then use ftnal comp as it is easier smaller and easy to test

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder} //keep it dynamic to search multi things
    onChange={handleChange}
  />
);
