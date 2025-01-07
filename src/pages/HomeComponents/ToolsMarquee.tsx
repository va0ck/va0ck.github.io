import Marquee from "react-fast-marquee";

import reactImg from "../../assets/icons/Home/react.svg"
import expoImg from "../../assets/icons/Home/expo.svg"
import tailwindImg from "../../assets/icons/Home/tailwindcss.svg"
import jsImg from "../../assets/icons/Home/javascript.svg"
import tsImg from "../../assets/icons/Home/typescript.svg"
import rblxTsImg from "../../assets/icons/Home/robloxts.svg"
import luauImg from "../../assets/icons/Home/luau.png"
import viteImg from "../../assets/icons/Home/vite.svg"

export function ToolsMarquee(){
    return <Marquee speed={10} gradient gradientColor="rgb(3 7 18)" autoFill className="overflow-hidden">
        <div className="home_image_wrapper">
            <a href="https://react.dev/" target='_blank'>
                <img src={reactImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#00d8ff] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://expo.dev/" target='_blank'>
                <img src={expoImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_rgba(255,255,255,1.0)] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://tailwindcss.com/" target='_blank'>
                <img src={tailwindImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#06b6d4] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>
                <img src={jsImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#F1DD35] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://www.typescriptlang.org/" target='_blank'>
                <img src={tsImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#3178C6] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://roblox-ts.com/" target='_blank'>
                <img src={rblxTsImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#EE4B2B] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://luau.org/" target='_blank'>
                <img src={luauImg} alt=""  className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#0ea7fb] duration-300"/>
            </a>
        </div>
        <div className="home_image_wrapper">
            <a href="https://vite.dev/" target='_blank'>
                <img src={viteImg} alt="" className="hover:rotate-12 hover:drop-shadow-[0_0_1.25em_#41d1ff] duration-300"/>
            </a>
        </div>
    </Marquee>
}