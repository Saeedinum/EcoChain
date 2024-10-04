import { Link } from "react-router-dom"
import earthLogo from "/src/assets/global/earth.svg"

const Logo: React.FC = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img src={earthLogo} alt="logo " className="" />
      <h1 className="bg-gradient-to-b from-[#528FCC] to-[#86A41E] bg-clip-text text-2xl font-bold text-transparent">
       EcoChain
      </h1>
    </Link>
  )
}

export default Logo
