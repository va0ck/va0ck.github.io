import Marquee from "react-fast-marquee";
// https://thumbnails.roblox.com//docs/index.html

export function DevelopersMarquee(){
    return <Marquee speed={20} gradient gradientColor="rgb(3 7 18)" direction="right" autoFill className="overflow-hidden">
        <div className="relative overflow-hidden m-2 w-80 h-56 hover:-translate-y-2 duration-300 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-950">
            <h1 className="flex absolute bottom-0 pl-4 pb-3">@USERNAME</h1>
        </div>
    </Marquee>
}