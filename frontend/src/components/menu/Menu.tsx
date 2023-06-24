// React -%- ////
import * as React from 'react';

// Packages -%- ////
import styled from "@emotion/styled";

// Components -%- ////
import AppBar from "../menu/AppBar"
import BasicMenu from "../../components/menu/items/BasicMenu";

// Integrations -%- ////
const appBar = {
  app_bar_title: "Frontend",
}
const basicMenus = [
  {
    id: 0,
    basic_menu_title: "BM One",
    basic_item_link: "/",
  },
  {
    id: 1,
    basic_menu_title: "BM Two",
    basic_item_link: "/",
  },
  {
    id: 2,
    basic_menu_title: "BM Three",
    basic_item_link: "/",
  },
  {
    id: 3,
    basic_menu_title: "BM Four",
    basic_item_link: "/",
  },
  {
    id: 4,
    basic_menu_title: "BM Five",
    basic_item_link: "/",
  },
  {
    id: 6,
    basic_menu_title: "BM Six",
    basic_item_link: "/",
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
  width: 60%;
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
    <AppBar app_bar_title={appBar?.app_bar_title} app_bar_menu={basicMenus}/>
      <MenuFlex>
        {basicMenus.map((data) => (
          <MenuFlexItem key={data?.id}>
            <BasicMenu basic_menu_title={data?.basic_menu_title} basic_item_link={data?.basic_item_link} />
          </MenuFlexItem>
        ))}
      </MenuFlex>
    </>
  );
}

// System -%- ////
