"use client";
import { useEffect } from "react";

export interface IError {
  error: any;
  reset: () => void;
}

const Error = (props: IError) => {
  const { error, reset } = props;

  useEffect(() => {
    console.log("error", error); //For internal use to log the exact error
  }, [error]);

  return (
    <div className="text-center m-12">
      <h1>Something went wrong</h1>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try Again
      </button>
    </div>
  );
};

export default Error;
