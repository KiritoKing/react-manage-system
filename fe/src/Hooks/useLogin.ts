import { useEffect } from "react";
import { selectLogin, setLogin } from "Redux/loginSlice";
import { useAppDispatch, useAppSelector } from "Redux/store";

const useLogin = (): boolean => {
  const isLogin = useAppSelector(selectLogin);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null && !isLogin) {
      console.log("read from storage:", user);
      dispatch(setLogin(user));
    }
  }, [isLogin]);
  return isLogin;
};

export default useLogin;
