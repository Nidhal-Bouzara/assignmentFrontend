import React, { useState } from "react";
import { RecipeItem, RecipeTitle, RecipeImage, RecipeActions, RecipeButton, RecipeBadge } from "../../components/Recipe";
import { Badge, Button } from "../../components/UI";
import { ReactComponent as AddCircle } from "remixicon/icons/System/add-circle-fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { pushDish } from "../../store/mealPlans.slice";

const Recipe = React.memo(({ name, image, mealId, ...rest }) => {
  const { dish, selected } = useSelector(state => ({
    dish: Object.values(state.mealPlans.originalMeals).flatMap(meal => meal.meals).find(dish => dish.recipe === rest.id),
    selected: Object.values(state.mealPlans.meals).find(({id}) => id === mealId).meals.findIndex(dish => dish.recipe === rest.id) > -1,
  }))
  const dispatch = useDispatch();
  return (
    <RecipeItem>
      <RecipeImage>
        <img src={image} alt={name} />
      </RecipeImage>
      <RecipeActions>
        {selected ? (
          <RecipeBadge>Selected</RecipeBadge>
        ) : dish == null ? (
          <RecipeBadge style={{ backgroundColor: '#FAA0A0' }}>N/A</RecipeBadge>
        ) : (
          <RecipeButton onClick={() => dispatch(pushDish({ mealId, dish }))} type="button">
            <AddCircle />
            <span>Select</span>
          </RecipeButton>
        )}
        <RecipeTitle>{name}</RecipeTitle>
      </RecipeActions>
    </RecipeItem>
  )
});

export default Recipe;
