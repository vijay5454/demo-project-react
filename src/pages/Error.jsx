import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <div className="section-center">
        <h1>Error 404</h1>
        <Link to="/">Sorry Back to Home</Link>
      </div>
    </section>
  );
};

export default Error;
