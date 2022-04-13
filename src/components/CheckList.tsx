import React, { useState } from "react";

interface propsType {
  title: string;
  items: Array<string>;
  filters: Set<string>;
  setFilters: Function;
}

export default function CheckList({ title, items, filters, setFilters }: propsType) {
  const [isVisible, setIsVisible] = useState(false);
  const handleAnchorClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as Element;
    if (target.className !== "anchor") {
      return;
    }

    setIsVisible(!isVisible);
  };

  const handleItemClick = (event: any) => {
    const isChecked = event.target.checked;
    const copiedFilters = new Set(filters);

    if (isChecked) {
      copiedFilters.add(event.target.id);
    } else {
      copiedFilters.delete(event.target.id);
    }

    setFilters(copiedFilters);
  };

  const showItems = (items: Array<string>) => {
    return items.map(item =>
      <li key={item}><input type="checkbox" id={item} checked={filters.has(item)} onChange={(event) => handleItemClick(event)} /><label htmlFor={item}>{item}</label> </li>
    );
  };

  return (
    <>
      <div id="list" className="dropdown-check-list" onClick={(event) => handleAnchorClick(event)}>
        <span className="anchor">{title}{filters.size !== 0 && `(${filters.size})`}</span>
        {isVisible &&
          <ul id="items" className="items" >
            {showItems(items)}
          </ul>
        }
      </div>
    </>
  );
}
