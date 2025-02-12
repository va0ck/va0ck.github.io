//Home
import RobloxLogo from "../assets/icons/Navbar/Roblox_Logo.svg"
import GithubLogo from "../assets/icons/Navbar/github-mark-white.svg"

export function Works(){
    
    return <>
        <title>Works - Va0ck</title>
        
        <div className='bg-fixed bg-cover bg-works bg-bottom'>
            <div className='flex h-40 items-center justify-start pl-10 pr-10 bg-gradient-to-t from-cyan-950 to-blue-400]'>
                <h1 className='text-5xl font-bold italic motion-preset-slide-up'>Works!</h1>
            </div>
        </div>

        <h1 className="text-4xl font-extrabold italic pt-6 pb-2 pl-8 pr-8 
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">Open Examples & Modules! 🛠️</h1>

        <div className="pr-6 pl-6 flex flex-row flex-wrap
         motion-translate-x-in-[0%] motion-translate-y-in-[14%] motion-blur-in-[10px] motion-duration-[0.5s]/blur">
            <a href="https://va0ck.com/folder-net/" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-neutral-800
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={GithubLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">FolderNet</h1>
                </div>
            </a>
        </div>


        <h1 className="text-4xl font-extrabold italic pt-6 pb-2 pl-8 pr-8 
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">Clients & Past Works! 🗃️</h1>

        <div className="pr-6 pl-6 flex flex-row flex-wrap
         motion-translate-x-in-[0%] motion-translate-y-in-[14%] motion-blur-in-[10px] motion-duration-[0.5s]/blur
        ">
            <a href="https://www.roblox.com/games/94222366715596/Robloxian-Physical" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-neutral-950
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={RobloxLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Roblox Physical</h1>
                </div>
            </a>
            <a href="https://www.roblox.com/games/18195981126/ended-2024-Epic-Event-Lobby" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-neutral-950
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={RobloxLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Epic Event 2024</h1>
                </div>
            </a>
        </div>
    </>
}