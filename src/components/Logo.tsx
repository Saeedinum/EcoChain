import { Link } from "react-router-dom"
import earthLogo from "/ecochain.png"

const Logo: React.FC = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img src={earthLogo} alt="logo " className="size-[30px] sm:size-[40px]" />
      <h1 className="bg-gradient-to-b from-[#528FCC] to-[#86A41E] bg-clip-text text-xl font-bold text-transparent sm:text-2xl">EcoChain</h1>
    </Link>
  )
}

export default Logo
