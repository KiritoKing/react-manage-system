import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HistoryItem, setStack } from "Redux/historySlice";
import { selectList } from "Redux/listSlice";
import { useAppDispatch, useAppSelector } from "Redux/store";

const useStack = (): void => {
  const loc = useLocation();
  const list = useAppSelector(selectList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const paths = loc.pathname.split("/");
    const stack: HistoryItem[] = [];
    console.log(paths);
    for (const path of paths) {
      if (path === "") stack.push({ title: "主页", path: "/" });
      else if (path === "home")
        stack.push({ title: "学生列表", path: "/home" });
      else if (path === "student")
        stack.push({ title: "个人资料", path: "/home/student" });
      else {
        const title = list.find((item) => item.key === path)?.name;
        if (title !== undefined)
          stack.push({ title, path: `/home/student/${path}` });
      }
    }
    dispatch(setStack(stack));
  }, []);
};

export default useStack;
