import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
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
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#">Chiefs</a>
          </div>
        </BoxLinks>

        <BoxLinks>
          <p>LEGAL</p>
          <div>
            <a>Terms and Conditions</a>
            <a>License Agreement</a>
            <a>Privacy Policy</a>
            <a>Copyright Information</a>
            <a>Cookies Policy</a>
          </div>
        </BoxLinks>

        <BoxSocialMedia>
          <p>SOCIAL MEDIA</p>
          <div>
            <a>
              <FaFacebook />
            </a>

            <a>
              <FaInstagram />
            </a>
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
          </div>

          <ButtonSign>
            <span>Sign in</span>
          </ButtonSign>
        </BoxSocialMedia>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">Blessed &copy; 2023</span>
      </div>
    </FooterFood>
  );
};

export default Footer;
