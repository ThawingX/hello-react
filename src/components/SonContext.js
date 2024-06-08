import { useContext } from "react";
import { Context } from "../App";

function Son(props) {
  const value = useContext(Context);
  return <div>{value}</div>;
}
export default Son;
