import logo from "../assets/images/logo.svg";
import facebookLogo from "../assets/images/icon-facebook.svg";
import twitterLogo from "../assets/images/icon-twitter.svg";
import pinterestLogo from "../assets/images/icon-pinterest.svg";
import instagramLogo from "../assets/images/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="py-10 text-white bg-neutral-veryDarkViolet">
      <div className="container px-5 mx-auto text-center max-w-[75rem] md:flex md:items-start md:justify-between">
        <img
          className="mx-auto mb-10 md:mr-auto md:mb-0 md:ml-0 invert brightness-0"
          src={logo}
          alt=""
        />

        {/* <!-- Footer Links --> */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-20">
          {/* <!-- Features Section --> */}
          <div>
            <h2 className="mb-4 text-lg font-bold">Features</h2>
            <ul className="space-y-2">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>

          {/* <!-- Resources Section --> */}
          <div>
            <h2 className="mb-4 text-lg font-bold">Resources</h2>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          {/* <!-- Company Section --> */}
          <div>
            <h2 className="mb-4 text-lg font-bold">Company</h2>
            <ul className="space-y-2">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* <!-- Social Icons --> */}
          <div className="flex justify-center space-x-4">
            <img src={facebookLogo} alt="Facebook" className="size-6" />
            <img src={twitterLogo} alt="Twitter" className="size-6" />
            <img src={pinterestLogo} alt="Pinterest" className="size-6" />
            <img src={instagramLogo} alt="Instagram" className="size-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
