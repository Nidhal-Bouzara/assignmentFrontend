import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useLoadPlans } from '../../utils/hooks/useLoadPlans.hook';
import PlansLoading from './PlansLoading';

const Plan = React.lazy(() => import('./Plan'));

const Plans = React.memo(() => {
  // handles loading the plans on first load
  useLoadPlans()
  const { plans, loading } = useSelector(state => ({plans: state.mealPlans.plans, loading: state.mealPlans.loading }))

  if (loading) {
    return <PlansLoading/>;
  }

  return (
    <Suspense fallback={<PlansLoading/>}>
      {Object.values(plans).map(plan => 
        <Plan key={`plan_${plan.id}`} plan={plan} />
      )}
    </Suspense>
  );
});

export default Plans;
