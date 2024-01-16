import { Sora } from "@next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

import Nav from "../components/Nav";
import Header from "./Header";
import TopLeftImg from "../components/TopLeftImg";

const Layout = ({ childeren }) => {
  return <div>Layout</div>;
};

export default Layout;
