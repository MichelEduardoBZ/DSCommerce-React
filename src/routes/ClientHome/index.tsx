import { Outlet } from "react-router-dom";
import HeaderClient from "../../componente/HeaderClient";

export default function ClientHome() {
  return (
    <>
      <HeaderClient />
      <Outlet />
    </>
  );
}
