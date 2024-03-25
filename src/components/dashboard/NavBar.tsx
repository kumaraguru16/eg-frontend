import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

function NavBar() {
  const signedOut = useAuthStore((state) => state.signedOut);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signedOut();
    navigate("/");
  };
  return (
    <header className=" p-4  sticky top-0 z-50">
      <nav className="bg-white px-10 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white cursor-pointer"
              onClick={() => navigate("/")}
            >
              Magazine
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 cursor-pointer"
                  aria-current="page"
                  onClick={() => navigate("/history-table")}
                >
                  Subscription History
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
