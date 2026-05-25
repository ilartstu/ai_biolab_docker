import React from "react";

const OptionItem = (props) => {
  return (
    <option value={props.dates.date}>{props.dates.date}</option>
  )
}

export default OptionItem;
