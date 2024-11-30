import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/" className="z-20">
      <h1
        className={`text-2xl  flex items-center text-yellow-400 font-extralight tracking-wider`}
      >
        <img src="/icons/qmgt.png" className="w-10 mr-2" alt="Aurum Logo" />
        au<span className="text-smoke  font-light ">rum</span>
      </h1>
    </Link>
  );
};

export default Title;
