// eslint-disable-next-line
import React from "react";
import styled from "styled-components";
// import Button
import { Badge, Button } from "./UI";

export const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -8px;
`;

export const RecipeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%
  padding: 8px 0;
  position: relative;

  & + & {
    border-top: 1px solid #f2f6fa;
  }

  @media (max-width: 768px) {
    width: 33%;
  }

  @media (max-width: 576px) {
    width: 50%;
  }
`;

export const RecipeActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 10px;
  padding: 8px 16px;
  margin-top: 8px;
  width: 90%;
  height: calc(100% - 20px);
  position: absolute;
  justify-content: space-between;
  bottom: 5px;
`;

export const RecipeBadge = styled(Badge)`
  min-height: 32px;
  font-size: 12px;
  text-transform: capitalize;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  // arial font family with fallbacks
  font-family: arial, sans-serif;
  padding: 6px 12px;
`;

export const RecipeButton = styled(Button)`
  font-weight: 700;
  border-radius: 20px;
  font-size: 12px;
  min-height: 32px;
`;

export const RecipeTitle = styled.h4`
  font-size: 15px;
  color: #ffffff;
  text-transform: capitalize;
  font-weight: 500;
  /* flex: 1 1 auto; */
`;

export const RecipeImage = styled.div`
  border-radius: 4px;
  position: relative;
  width: 44px;
  height: 44px;
  overflow: hidden;
  width: 90%;
  height: 250px;
  border-radius: 10px;

  // gradient overlay
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 90%);
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
