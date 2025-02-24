import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import Container from "../components/container";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="mb-3">
      <Container>
        <hr />
        <div className="flex items-center gap-10 lg:justify-between mt-5">
          <span className="max-md:text-xs md:font-semibold">
            © 2024 Copyright: Mohammad Javad Majlesi
          </span>
          <IconContext.Provider value={{ size: "30px" }}>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mjmajlesi"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://t.me/Mj_majlesi"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-javad-majlesi-0ab27331a/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
