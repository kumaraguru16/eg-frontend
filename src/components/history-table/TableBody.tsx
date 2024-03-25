import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { generateUrl } from "../../helper/auth.helper";
import { API_PATH } from "../../constants/api.constant";
import { AuthStoreUser, useAuthStore } from "../../store/auth.store";
function TableBody() {
  const [subscriptionHistory, setSubscriptionHistory] = useState<any[]>([]);
  const user: AuthStoreUser | null = useAuthStore((state) =>
    state.user ? state.user.data : null
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${generateUrl(API_PATH.SUBSCRIPTION_HISTORY)}?userId=${user?.id}`
        );
        setSubscriptionHistory(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <tbody>
      {subscriptionHistory.map((history) => (
        <tr className="bg-white dark:bg-gray-800">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {history.user.name}
          </th>
          <td className="px-6 py-4">{history.magazine.name}</td>
          <td className="px-6 py-4">Rs.{history.magazine.price}</td>
          <td className="px-6 py-4">
            <button
              type="button"
              className={`focus:outline-none text-white focus:ring-4 font-light rounded-lg text-sm px-5 py-1 ${
                history.deletedAt
                  ? "bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-600 dark:focus:ring-red-900"
                  : "bg-green-500 hover:bg-green-600 focus:ring-green-300 ark:bg-green-400 dark:hover:bg-green-600 dark:focus:ring-green-800"
              }`}
              disabled
            >
              {history.deletedAt ? "Not Valid" : "Valid"}
            </button>
          </td>
          <td className="px-6 py-4">
            {history.deletedAt
              ? new Date(history.deletedAt).toLocaleString()
              : new Date(history.subscriptionValid).toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
