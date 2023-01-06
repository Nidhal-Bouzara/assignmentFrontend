import React, { useState } from "react";
import { RecipeItem, RecipeTitle, RecipeImage, RecipeActions, RecipeButton, RecipeBadge } from "../../components/Recipe";
import { Badge, Button } from "../../components/UI";
import { ReactComponent as AddCircle } from "remixicon/icons/System/add-circle-fill.svg";

const Recipe = React.memo(({ name, image, selected }) => (
  <RecipeItem>
    <RecipeImage>
      <img src={image} alt={name} />
    </RecipeImage>
    <RecipeActions>
      {selected ? (
        <RecipeBadge>Selected</RecipeBadge>
      ) : (
        <RecipeButton type="button">
          <AddCircle />
          <span onClick={() => alert("HEJ")}>Select</span>
        </RecipeButton>
      )}
      <RecipeTitle>{name}</RecipeTitle>
    </RecipeActions>
  </RecipeItem>
));

export default Recipe;
