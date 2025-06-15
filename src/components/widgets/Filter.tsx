import React, { useState } from "react";

export type FilterOption = {
  label: string;
  value: string;
};

type FilterProps = {
  options: FilterOption[];

  // generic props
  id: string;
  className?: string;
};

const Filter: React.FC<FilterProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState<FilterOption>();

  return (
    <div>
      <label htmlFor={props.id}></label>
      <select name={props.id} id={props.id}>
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
