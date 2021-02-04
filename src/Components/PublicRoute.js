import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsLoggedIn } from '../Redux/Auth//auth-selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/login',
  ...routeProps
}) {
  const isLoggedInUser = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedInUser && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
