import { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
const Modal = ({ onClose }: { onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return ReactDOM.createPortal(
    <div className="absolute inset-0" onClick={onClose}>
      <nav className="h-full">
        <div className="px-5 py-10">
          <ul className="mt-10 space-y-8 font-bold text-center text-white rounded-lg p-7 bg-primary-darkViolet">
            <li>Features</li>
            <li>Pricing</li>
            <li >Resources</li>
            <li className="pt-8 border-t border-t-netural-gray">Login</li>
            <li className="grid">
              <Button className="rounded-full" label="Sign Up" />
            </li>
          </ul>
        </div>
      </nav>
    </div>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
