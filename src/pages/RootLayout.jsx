import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export default RootLayout;
