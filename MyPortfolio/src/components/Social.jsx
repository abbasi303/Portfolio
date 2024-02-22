import IconButton from "./IconButton"
import { FaGithub } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Social() {

  return (
    <>
      <div className="flex flex-row items-center justify-center h-full gap-12 xl:flex-col">
        <IconButton text="Github">
          <FaGithub size={60} />
        </IconButton>
        <IconButton text="Meta" color="bg-blue-500">
          <FaMeta size={60} />
        </IconButton>
        <IconButton
          text="/constgenius"
          color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500"
        >
          <GrInstagram size={60} />
        </IconButton>
        <IconButton text="Twitter" color="bg-black">
          <FaXTwitter size={60} />
        </IconButton>
        <IconButton text="@constGenius" color="bg-red-500">
          <IoLogoYoutube size={60} />
        </IconButton>
      </div>
    </>
  )
}

export default Social