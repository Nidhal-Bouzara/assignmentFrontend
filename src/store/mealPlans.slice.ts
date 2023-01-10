import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IMeal, IMealPlan } from '../interfaces';

interface IMealPlanState {
  loading: boolean;
  meals: Record<number, IMeal>;
  originalMeals: Record<number, IMeal>;
  plans: Record<number, Omit<IMealPlan, 'meal_plans'>>;
  originalPlans: Record<number, Omit<IMealPlan, 'meal_plans'>>;
}

const initialState: IMealPlanState = {
  loading: true,
  // Used to store the original data from the API (won't be used with real api)
  originalMeals: {},
  originalPlans: {},
  meals: {},
  plans: {},
};

const mealPlansReducer = createSlice({
  name: 'mealPlans',
  initialState,
  reducers: {
    setMeals(state, action: PayloadAction<Record<number, IMeal>>) {
      state.originalMeals = action.payload;
      state.meals = action.payload;
    },
    setPlans(state, action: PayloadAction<Record<number, Omit<IMealPlan, 'meal_plans'>>>) {
      state.originalPlans = action.payload;
      state.plans = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    pushDish(state, action: PayloadAction<{ mealId: number; dish: IMeal['meals'][number] }>) {
      state.meals[action.payload.mealId].meals.push(action.payload.dish);
    },
    moveDish(state, action: PayloadAction<{ mealId: number; dragIndex: number; hoverIndex: number }>) {
      const { mealId, dragIndex, hoverIndex } = action.payload;
      const dragDish = state.meals[mealId].meals[dragIndex];
      state.meals[mealId].meals.splice(dragIndex, 1).splice(hoverIndex, 0, dragDish);
    },
    removeDish(state, action: PayloadAction<{ mealId: number; index: number }>) {
      const { mealId, index } = action.payload;
      state.meals[mealId].meals.splice(index, 1);
    },
    save(state, action) {
      console.log('Save changes.....');
    }
    

  }
})

export const { setMeals, setPlans, pushDish, moveDish, removeDish, setLoading, save } = mealPlansReducer.actions;
export default mealPlansReducer.reducer;