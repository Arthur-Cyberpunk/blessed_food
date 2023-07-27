import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  BoxLegal,
  BoxLinks,
  BoxName,
  BoxSocialMedia,
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

        <BoxLegal>
          <p>LEGAL</p>
          <div>
            <p>Terms and Conditions</p>
            <p>License Agreement</p>
            <p>Privacy Policy</p>
            <p>Copyright Information</p>
            <p>Cookies Policy</p>
          </div>
        </BoxLegal>

        <BoxSocialMedia>
          <p>SOCIAL MEDIA</p>
          <div>
            <p>
              <FaFacebook size={18} />
            </p>

            <p>
              <FaInstagram size={18} />
            </p>
            <p>
              <FaTwitter size={18} />
            </p>
            <p>
              <FaYoutube size={18} />
            </p>
          </div>

          {/* <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    /> */}
        </BoxSocialMedia>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">CodeWave &copy; 2023</span>
      </div>
    </FooterFood>
  );
};

export default Footer;
