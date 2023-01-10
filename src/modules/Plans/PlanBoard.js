import React from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { Board } from "../../components/Board";
import Meal from "./Meal";

const PlanBoard = React.memo(({ planId, stata }) => {
  const meals = useSelector(state => {
    return Object.values(state.mealPlans.meals).filter(meal => meal.planId === planId)
  })
  return (
    <Board>
      {meals.map(meal => 
        <Meal 
        id={meal.id}
        meal={meal} 
        planId={planId}
        key={`meal_${meal.id}`}
        />
        )}
    </Board>
  );
});

export default DragDropContext(HTML5Backend)(PlanBoard);
