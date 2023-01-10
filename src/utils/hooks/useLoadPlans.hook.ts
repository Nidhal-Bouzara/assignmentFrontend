import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setMeals, setPlans } from '../../store/mealPlans.slice'
import * as api from '../../utils/api'
import MealPlansMapper from '../mealPlans.mapper'

/**
 * Loads the meal plans and meals
 */
export const useLoadPlans = () => {
  const plans = useSelector((state: any) => state.mealPlans.plans)
  const dispatch = useDispatch()
  useEffect(() => {
    if (Object.keys(plans).length) return
    dispatch(setLoading(true))
    const source = api.CancelToken.source();
    (async () => {
      const mealPlansMapper = new MealPlansMapper(await import('../../mock/meals.json' as string))
      dispatch(setMeals(await mealPlansMapper.getMeals()))
      dispatch(setPlans(await mealPlansMapper.getPlans()))
      dispatch(setLoading(false))
    })()
    return () => {
      // cancel api request
      // this does nothing in its current form
      if (source) {
        source.cancel('Operation canceled by the user.');
      }
    }
  }, [])
}