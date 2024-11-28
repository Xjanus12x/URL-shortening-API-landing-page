import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/hamburger-menu.svg";
import Modal from "./Modal";
import { useState } from "react";
import Button from "./Button";
import useWindow from "../hooks/useWindow";
export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { width } = useWindow();
  return (
    <nav className="flex justify-between p-5 sm:items-center">
      <img src={logo} alt="Company Logo" />
      <ul className="hidden sm:flex sm:items-center sm:gap-5">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <li>
          <Button className="rounded-full" label="Sign Up" />
        </li>
      </ul>
      <button
        className="size-8 sm:hidden"
        title="Menu"
        aria-label="Menu"
        onClick={() => setToggleMenu(true)}
      >
        <img src={hamburgerMenu} alt="Hamburger menu" aria-hidden />
      </button>
      {toggleMenu && width <= 640 && (
        <Modal
          onClose={() => {
            setToggleMenu(false);
          }}
        />
      )}
    </nav>
  );
}
