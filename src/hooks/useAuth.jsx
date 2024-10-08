import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
} from '../Redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    user,
  };
};