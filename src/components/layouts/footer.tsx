import Image from "next/image";
import logo from "/public/logo.webp";
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <footer>
      <div className="footer flex">
        <div className="logo">
          <Image src={logo} width={180} height={30} alt="logo" />
          <p className="flex flex-shrink ">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="icon-container flex flex-row">
            <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div>
            <div>
              <GrLinkedinOption size={20} />
            </div>
          </div>
        </div>

        <div className="footer-links flex">
          <h3 className="flex">Company</h3>
          <ul>
            <li>About</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-links flex">
          <h3 className="flex flex-col ">Support</h3>
          <ul>
            <li>Support Carrer</li>
            <li>24h Service</li>
            <li>Quick Chat</li>
          </ul>
        </div>

        <div className="footer-links flex">
          <h3 className="flex">Contact</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Support 24h</li>
          </ul>
        </div>
      </div>

      <div className="border-transparent border-zinc-800 mt-10">
        <div className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
          <small className=" duration-200 font-mono">
            All rights reserved &copy; {new Date().getFullYear()}
          </small>

          <small className="hover:text-white duration-200">
            <a
              href="https://github.com/mhammadfarooq20/hackathon-fullstack-ecommerce"
              target="_blank"
              rel="noreferrer noopener"
            >
              Prepared by <span className="text-green-400">Hammad Farooq</span>
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
}
