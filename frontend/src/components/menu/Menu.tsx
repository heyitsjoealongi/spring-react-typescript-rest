// React -%- ////
import React from "react";

// Packages -%- ////
import styled from "@emotion/styled";

// Components -%- ////
import BasicMenu from "../../components/menu/items/BasicMenu";

// Integrations -%- ////
const menuItems = [
  {
    id: 0,
    menu_item_title: "Title",
  },
  {
    id: 1,
    menu_item_title: "Title Two",
  },
  {
    id: 2,
    menu_item_title: "Title Three",
  },
  {
    id: 3,
    menu_item_title: "Title Four",
  },
  {
    id: 4,
    menu_item_title: "Title Five",
  },
  {
    id: 6,
    menu_item_title: "Title Six",
  },
];

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////
const MenuFlex = styled.div`
  display: flex;
  flexDirection: row;
  flexWrap: nowrap;
  flexFlow: row nowrap;
  justifyContent: flex-start;
  alignItems: flex-start;
  alignContent: flex-start;
  height: auto;
  width: 100%;
  margin: 10px auto;
  padding: 0;
  gap: 10px;
  background: none;
  border: none;
`;

const MenuFlexItem = styled.div`
  order: 0;
  flex: none;
  align-self: flex-start;
  height: auto;
  width: auto;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
`;

// Application -%- ////
export default function Menu() {
  return (
    <>
      <MenuFlex>
        {menuItems.map((data) => (
          <MenuFlexItem key={data?.id}>
            <BasicMenu menu_item_title={data?.menu_item_title} />
          </MenuFlexItem>
        ))}
      </MenuFlex>
    </>
  );
}

// System -%- ////
