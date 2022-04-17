import React, { useState } from "react";
import styled from "styled-components";

interface propsType {
  title: string;
  items: Array<string>;
  filters: Set<string>;
  setFilters: Function;
  width: number;
  height: number;
}

const ListContainer = styled.div<{ width: number, height: number }>`
  display: inline-block;
  font-size: 12px;
  margin-right: 8px;
`;

const ListBox = styled.div<{ width: number, height: number }>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  &::after {
    position: absolute;
    top: 30%;
    right: 10px;
    padding: 3px;
    border-left: 1px solid black;
    border-top: 1px solid black;
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
    content: "";
  };
`;

const ItemsContainer = styled.ul<{ width: number, height: number }>`
  display: block;
  position: absolute;
  z-index: 99;
  box-sizing: border-box;
  width: ${props => props.width}px;
  margin: 0;
  padding: 0px;
  border: 1px solid var(--grey);
  border-top: none;
  background-color: var(--white);
`
const ItemList = styled.li`
  list-style: none;
`;
export default function CheckList({ title, items, filters, setFilters, width, height }: propsType) {
  const [isVisible, setIsVisible] = useState(false);
  const handleAnchorClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as Element;
    if (!target.className.includes("anchor")) {
      return;
    }

    setIsVisible(!isVisible);
  };

  const handleItemClick = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <ItemList key={item}><input type="checkbox" id={item} checked={filters.has(item)} onChange={(event) => handleItemClick(event)} /><label htmlFor={item}>{item}</label> </ItemList>
    );
  };

  return (
    <>
      <ListContainer id="list" className="dropdown-check-list" onClick={(event) => handleAnchorClick(event)} width={width} height={height}>
        <ListBox className="anchor" width={width} height={height}>{title}{filters.size !== 0 && `(${filters.size})`}</ListBox>
        {isVisible &&
          <ItemsContainer id="items" className="items" width={width} height={height}>
            {showItems(items)}
          </ItemsContainer>
        }
      </ListContainer>
    </>
  );
}
