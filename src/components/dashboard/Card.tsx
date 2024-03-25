import axios from "../../config/axios";
import { API_PATH } from "../../constants/api.constant";
import { generateUrl } from "../../helper/auth.helper";
import { AuthStoreUser, useAuthStore } from "../../store/auth.store";

type Props = {
  id: number;
  name: string;
  price: number;
  image: string;
  subscribe: boolean;
  setTrigger: (value: number) => void;
};

function Card(props: Props) {
  const user: AuthStoreUser | null = useAuthStore((state) =>
    state.user ? state.user.data : null
  );
  const toggleSubscription = async (subscribe: boolean, id: number) => {
    if (subscribe) {
      await axios.post(`${generateUrl(API_PATH.SUBSCRIPTION_CANCEL)}`, {
        userId: user?.id,
        magazineId: id,
      });
    } else {
      await axios.post(`${generateUrl(API_PATH.SUBSCRIPTION_ACTIVATE)}`, {
        userId: user?.id,
        magazineId: id,
      });
    }
    props.setTrigger(Math.random());
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="p-8 rounded-t-lg m-auto"
        src={props.image}
        height={100}
        width={250}
        alt="Magazine image"
      />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <div className="flex items-center mt-2.5 mb-5"></div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Rs. {props.price}
          </span>
          <button
            className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              props.subscribe
                ? "bg-red-400 hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 "
                : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            }`}
            onClick={() => toggleSubscription(props.subscribe, props.id)}
          >
            {props.subscribe ? "Cancel Subscription" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
