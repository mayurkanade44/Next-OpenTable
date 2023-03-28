import Navbar from "@/app/components/Navbar";
import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavbar";
import Images from "./components/Images";
import Description from "./components/Description";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";

const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavbar />
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milesstone Grill</h1>
            </div>
            <Rating />
            <Description />
            <Images />
            <Reviews />
            {/* REVIEWS */}
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
};
export default RestaurantDetails;
