import React from "react";

import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-extrabold ">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        className="w-100 border text-white text-xl font-bold border-b-green-300 px-8 py-2 bg-green-400"
        onClick={() => navigate(-1)}
      >
        &larr; Go back
      </button>
    </div>
  );
};

export default ErrorPage;
