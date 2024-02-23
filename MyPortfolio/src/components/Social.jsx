import IconButton from "./IconButton";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook as FaMeta } from "react-icons/fa"; // Correct import for Meta icon, assuming you meant Facebook
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


function Social() {
  return (
    <>
      <div className="flex flex-row items-center justify-center h-full gap-12 xl:flex-col">
        <Link to="https://github.com/abbasi303">
        <IconButton text="abbasi303" >
          <FaGithub size={60} />
        </IconButton>
        </Link>
        
        <Link to="https://www.facebook.com/ussayedshakeel.abbasi">
        <IconButton text="Ussayed Shakeel Abbasi" color="bg-blue-500" >
          <FaMeta size={60} />
        </IconButton>
        </Link>

        <Link to="https://www.instagram.com/ussayed_012/">
        <IconButton
          text="ussayed_012"
          color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
        >
          <GrInstagram size={60} />
        </IconButton>
        </Link>

        <Link to="https://twitter.com/usa_abbasi303">
        <IconButton text="usa_abbasi303" color="bg-black" >
          <FaXTwitter size={60} />
        </IconButton>
        </Link>
      </div>
    </>
  );
}

export default Social;
