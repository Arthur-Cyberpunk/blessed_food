import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  BoxCopy,
  BoxLinks,
  BoxName,
  BoxSocialMedia,
  ButtonSign,
  FooterFood,
} from "./styles";

const Footer = () => {
  return (
    <FooterFood>
      <div>
        <BoxName>
          <p>
            Flavor<span>Verse</span>
          </p>
        </BoxName>

        <BoxLinks>
          <p>QUICK LINKS</p>

          <div>
            <a href="#home">Home</a>
            <a href="#home">About</a>
            <a href="#home">Services</a>
            <a href="#home">Contact</a>
            <a href="#home">Chiefs</a>
          </div>
        </BoxLinks>

        <BoxLinks>
          <p>LEGAL</p>
          <div>
            <a href="#home">Terms and Conditions</a>
            <a href="#home">License Agreement</a>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Copyright Information</a>
            <a href="#home">Cookies Policy</a>
          </div>
        </BoxLinks>

        <BoxSocialMedia>
          <p>SOCIAL MEDIA</p>
          <div>
            <a href="#home">
              <FaFacebook />
            </a>

            <a href="#home">
              <FaInstagram />
            </a>
            <a href="#home">
              <FaTwitter />
            </a>
            <a href="#home">
              <FaYoutube />
            </a>
          </div>

          <ButtonSign>
            <span>Sign in</span>
          </ButtonSign>
        </BoxSocialMedia>
      </div>

      <BoxCopy className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">ArthurDev &copy; 2023</span>
      </BoxCopy>
    </FooterFood>
  );
};

export default Footer;
