
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RestaurantCard from "./components/RestaurantCard";

const Search = () => {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />

        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
};
export default Search;
