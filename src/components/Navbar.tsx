import {
  Contact,
  Home,
  Library,
  Linkedin,
  Menu,
  SquareUser,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 lg:border-b lg:border-gray-700 backdrop-blur z-50 ">
      <div className="md:hidden p-4">
        <Drawer>
          <div className="w-full border  dark:border-gray-700 p-2 rounded flex justify-between">
            <DrawerTrigger className="">
              <Menu className="text-black dark:text-white" />
            </DrawerTrigger>
            <ModeToggle />
          </div>
          <DrawerContent>
            <ul className="items-center  text-2xl w-full  dark:#0E1015 dark:text-slate-400 p-4 lg:flex ">
              <Link to={"/"}>
                {" "}
                <DrawerHeader className="flex items-center ">
                  <Home />
                  Homepage
                </DrawerHeader>
              </Link>
              <Link to={"/about-me"}>
                <DrawerHeader className="flex items-center">
                  <SquareUser />
                  About me
                </DrawerHeader>
              </Link>
              <Link to={"/contact"}>
                <DrawerHeader className="flex items-center">
                  <Contact />
                  Contact
                </DrawerHeader>
              </Link>
              <Link to={"/blog"}>
                <DrawerHeader className="flex items-center">
                  <Library />
                  Blog
                </DrawerHeader>
              </Link>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
      <ul className=" text-sm w-full gap-4 dark:#0E1015 dark:text-slate-400 py-4 px-40 hidden md:flex max-w-[85rem] mx-auto">
        <p className="text-4xl font-extrabold text-green-500 ">CiMoran</p>
        <div className="flex items-center w-full gap-4 justify-end">
          <li className="nav-item">Homepage</li>

          <li className="nav-item">About me</li>

          <li className="nav-item">Contact</li>

          <li className="nav-item">Blog</li>

          <li className="hover:text-blue-400 cursor-pointer">
            <Linkedin />
          </li>
          <li>
            <ModeToggle />
          </li>
        </div>
      </ul>
    </nav>
  );
}
