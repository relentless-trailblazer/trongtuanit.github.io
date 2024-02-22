import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn, userLoggedOut } from './userSlice';

const useUser = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);
  const userInfo = useSelector((state) => state.user.userInfo);
  const isAdmin = useSelector((state) => state.user.isAdmin);
  const isAnonymousCustomer = useSelector((state) => state.user.isAnonymousCustomer);

  const login = (username, password) => {
    dispatch(userLoggedIn({ username, password }));
  };

  const logout = () => {
    dispatch(userLoggedOut());
  };

  return {
    isAdmin,
    isAnonymousCustomer,
    accessToken,
    userInfo,
    login,
    logout,
  };
};

export default useUser;
