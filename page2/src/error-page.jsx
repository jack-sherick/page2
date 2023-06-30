import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>This Page Doesn't Exist</h1>
      <p>You took a wrong turn （＞人＜)</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}