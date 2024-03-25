import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "../../config/axios";
import { generateUrl } from "../../helper/auth.helper";
import { API_PATH } from "../../constants/api.constant";
import { AuthStoreUser, useAuthStore } from "../../store/auth.store";

type Magazine = {
  name: string;
  id: number;
  price: number;
  image: string;
  subscription: boolean;
};

function Cards() {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const user: AuthStoreUser | null = useAuthStore((state) =>
    state.user ? state.user.data : null
  );

  const [trigger, setTrigger] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${generateUrl(API_PATH.MAGAZINE_LIST)}?userId=${user?.id}`
        );
        setMagazines(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [trigger]);
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center">
      {magazines.map((magazine, index) => (
        <Card
          key={index}
          id={magazine.id}
          name={magazine.name}
          image={magazine.image}
          price={magazine.price}
          subscribe={magazine.subscription}
          setTrigger={setTrigger}
        />
      ))}
    </div>
  );
}
export default Cards;
