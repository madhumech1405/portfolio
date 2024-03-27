/* eslint-disable jsx-a11y/alt-text */
import HeroImg from "../assests/hero.png"
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

export default function Hero() {
  const config={
    subtitle:"im full stack developer",
    social:{
      twitter:'https://twitter.com/madhusudhananJ5',
      facebook:"https://www.facebook.com/profile.php?id=100010157941391",
      linkedin:"https://www.linkedin.com/in/madhusudhanan-j-13907a199/"
    }
  }
  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
       <div className="w-1/2 flex flex-col">
        <h1 className="md:w-1/2 text-white text-4xl font-hero-font">
            hi,<br/>
            im a <span className="text-black">j</span> MADHU
            <p className="text-2xl">{config.subtitle}</p>
        </h1>

    <div className="flex ">
      <a href={config.social.twitter}className="pr-5 hover:text-white"  ><AiOutlineTwitter size={40} /> </a>
      <a href={config.social.facebook} className="pr-5 hover:text-white"><AiOutlineFacebook size={40}/> </a>
      <a href={config.social.linkedin} className="hover:text-white"><AiOutlineLinkedin size={40}/> </a>
    </div>
      
      </div>
      <img className="md:w-1/3 "  src={HeroImg}/>
    </section>
  )
}
