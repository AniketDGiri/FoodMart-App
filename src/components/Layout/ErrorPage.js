import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <h1>This is the Error Page</h1>;
};

export default ErrorPage;
