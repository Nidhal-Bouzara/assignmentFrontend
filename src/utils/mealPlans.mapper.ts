import { IMeal, IMealPlan } from "../interfaces";

/**
 * Handles mapping the meal plans
 */
export default class MealPlansMapper {
  private data: IMealPlan[] = []
  constructor(file: { default: IMealPlan[]}) {
    this.data = this.format(file);
  }

  private format(mealPlans: { default: IMealPlan[] }): IMealPlan[] {
    return mealPlans.default.filter((plan) => plan.contains_alternatives).map(mealPlan => {
      Object.values(mealPlan.meal_plans).forEach(meal => {
        meal.planId = mealPlan.id
      })
      return mealPlan
    })
  }
  
  public async getMeals(): Promise<Record<number, IMeal>> {
    const meals: Record<number, IMeal> = {};
    this.data.forEach((plan) => {
      Object.values(plan.meal_plans).forEach((meal) => {
        
        meals[meal.id] = meal;
      });
    });
    return meals;
  }

  public async getPlans(): Promise<Record<number, Omit<IMealPlan, 'meal_plans'>>> {
    const plans: Record<number, Omit<IMealPlan, 'meal_plans'>> = {};
    this.data.forEach(({meal_plans, ...plan}) => {
      plans[plan.id] = plan;
    });
    return plans;
  }
}