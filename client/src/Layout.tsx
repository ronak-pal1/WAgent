import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex-1 h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
