import { Link, useNavigate } from "react-router-dom";
import "./error.css";
const Error = () => {
  const navigate = useNavigate();
  return (
    <main className="main__404">
      <div className="wave"></div>

      <div className="box__404">
        <div className="text__404">
          <h1>4</h1>
          <h1>0</h1>
          <h1>4</h1>
        </div>

        <div className="description__404">
          <p className="title__404">Oops! page not found</p>
          <p className="desc__404">
            Sorry, the page you were looking for was not found. Choose one of
            the following buttons to return
          </p>
          <div className="link__404">
            <button onClick={() => navigate(-1)}>Back</button>
            <Link to={"/"}>Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Error;
