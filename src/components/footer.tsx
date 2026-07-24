import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import Container from "../components/container";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-800/50">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <span className="text-sm text-slate-400">
            © {new Date().getFullYear()} Mohammad Javad Majlesi. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mjmajlesi"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-700 transition-all duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://t.me/Mj_majlesi"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#1e98d5] hover:border-brand-400/50 hover:bg-slate-700 transition-all duration-200"
              aria-label="Telegram"
            >
              <FaTelegramPlane size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-javad-majlesi-0ab27331a/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#1e98d5] hover:border-brand-400/50 hover:bg-slate-700 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
