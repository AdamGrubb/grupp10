import { useNavigate, Link } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="error-page" className="flex flex-col ">
      <div className="text-center Error">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="btnError mt-2 rounded-full"
        >
          To Homepage
        </button>
      </div>
    </div>
  );
};
