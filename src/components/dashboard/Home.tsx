import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Home;
