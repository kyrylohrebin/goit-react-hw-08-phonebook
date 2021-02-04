import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Components/Container/Container';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar';
import authOperations from './Redux/Auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Loader from './Components/Loader/Loader';

const RegisterView = lazy(() =>
  import('./Views/RegisterView' /* webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./Views/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './Views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<Loader />}>
          <PublicRoute exact path="/register" restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Suspense>
      </Switch>
    </Container>
  );
}
