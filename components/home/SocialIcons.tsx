import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="relative z-10 flex justify-center gap-6 mb-8">
      <a
        href="https://www.instagram.com/shakeyscakesandevents"
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://web.facebook.com/shakeyscakes/?_rdc=1&_rdr#"
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.tiktok.com/@shakeyscakesandevents"
        target="_blank"
        rel="noopener noreferrer"
        className="text-rose-700 hover:text-primary text-4xl transition-all duration-300 ease-in-out transform hover:scale-125"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
    </div>
  );
}
