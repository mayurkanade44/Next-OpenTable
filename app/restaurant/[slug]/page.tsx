import RestaurantNavbar from "./components/RestaurantNavbar";
import Images from "./components/Images";
import Description from "./components/Description";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  slug: string;
  images: string[];
  description: string;
}

const fetchRestaurant = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!restaurant) throw new Error;

  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurant(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug} />
        <div className="mt-4 border-b pb-6">
          <h1 className="font-bold text-6xl">{restaurant.name}</h1>
        </div>
        <Rating />
        <Description description={restaurant.description} />
        <Images images={restaurant.images}/>
        <Reviews />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};
export default RestaurantDetails;
