import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../Redux/Auth/auth-selectors';
import authOperations from '../../Redux/Auth/auth-operations';
import s from './UserMenu.module.css';
import Button from '@material-ui/core/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Welcome, {name}</span>
      <Button
        className={s.button}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
