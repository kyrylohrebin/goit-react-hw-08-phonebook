import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/Auth//auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/contacts',
  ...routeProps
}) {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedInUser ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
