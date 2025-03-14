import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center h-[50px] px-5 shadow-md bg-gray-500 text-white justify-between">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/favourites">Favorites</Link>
      </span>
    </nav>
  )
};

export default Navigation;