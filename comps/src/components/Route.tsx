import useNavigation from "../hooks/use-navigation";

function Route({ path, children }: any) {
  const { currentPath }: any = useNavigation();
  return currentPath === path ? children : null;
}
export default Route;
