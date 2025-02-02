//Home
import RobloxLogo from "../assets/icons/Navbar/Roblox_Logo.svg"
import DevforumLogo from "../assets/icons/Navbar/Roblox_Devforum_Logo.svg"
import GithubLogo from "../assets/icons/Navbar/github-mark-white.svg"
import DiscordLogo from "../assets/icons/Navbar/discord-icon.svg"
//Socials
import YoutubeLogo from "../assets/icons/Socials/Youtube.svg"
import TrialsWikiLogo from "../assets/icons/Socials/TheTrialsWiki.webp"

//Other Socials
import GuildedLogo from "../assets/icons/Socials/Guilded.png"
import XLogo from "../assets/icons/Socials/X_logo_2023_(white).png"
import BlueskyLogo from "../assets/icons/Socials/Bluesky.svg"

//Content
export function Socials(){
    return <>
        <title>Socials - Va0ck</title>
        
        <div className='bg-fixed bg-cover bg-socials bg-top'>
            <div className='flex h-40 items-center justify-start pl-10 pr-10 bg-gradient-to-t from-cyan-950 to-blue-400]'>
                <h1 className='text-5xl font-bold italic motion-preset-slide-up'>Socials!</h1>
            </div>
        </div>

        <h1 className="text-4xl font-extrabold pt-6 pb-2 pl-8 pr-8 italic
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">THESE ARE MY ONLY SOCIALS I USE!</h1>
        
        <p className="pl-8 pr-8 pt-4 text-3xl font-bold italic
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">Main Socials!✨</p>
        <div className="p-4 flex flex-row flex-wrap justify-center
        motion-translate-x-in-[0%] motion-translate-y-in-[14%] motion-blur-in-[10px] motion-duration-[0.5s]/blur
        ">
            {/* ROBLOX CONTACTS LIST */}
            <a href="https://www.roblox.com/users/844029031/profile" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-neutral-950
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={RobloxLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Roblox @va0ck</h1>
                </div>
            </a>
            <a href="https://devforum.roblox.com/u/va0ck" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-blue-950
                hover:drop-shadow-[0_0_2em_rgba(173,216,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={DevforumLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Devforum @va0ck</h1>
                </div>
            </a>
            
             {/* MAIN CONTACTS LIST */}
            <a href="https://github.com/va0ck" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-neutral-800
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={GithubLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Github @va0ck</h1>
                </div>
            </a>
            <a href="https://discordapp.com/users/1023691601006051378" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-blue-950
                hover:drop-shadow-[0_0_2em_rgba(0,0,255,0.1)] duration-300
                hover:font-extrabold italic
                flex justify-center items-center flex-col">
                    <img src={DiscordLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Discord @va0ck</h1>
                </div>
            </a>
            <a href="https://www.youtube.com/@va0ck" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-red-800
                hover:drop-shadow-[0_0_2em_rgba(255,0,0,0.1)] duration-300
                italic
                flex justify-center items-center flex-col">
                    <img src={YoutubeLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Youtube @va0ck</h1>
                </div>
            </a>
            <a href="https://the-trials.fandom.com/wiki/User:Va0ck" target="_blank">
                <div className="w-72 h-40 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-red-950
                hover:drop-shadow-[0_0_2em_rgba(255,0,0,0.1)] duration-300
                italic hover:font-extrabold
                flex justify-center items-center flex-col">
                    <img src={TrialsWikiLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Trials Wiki @va0ck</h1>
                </div>
            </a>
        </div>

        <p className="pl-8 pr-8 pt-4 pb-8 text-3xl font-bold italic
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">Other Socials!🏖️</p>

        <div className="p-4 flex flex-row flex-wrap justify-center
        motion-translate-x-in-[0%] motion-translate-y-in-[14%] motion-blur-in-[10px] motion-duration-[0.5s]/blur
        ">
            <a href="https://www.guilded.gg/u/va0ck" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-yellow-800
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                italic
                flex justify-center items-center flex-col">
                    <img src={GuildedLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Guilded @va0ck</h1>
                </div>
            </a>
            <a href="https://x.com/va0ckRBLX" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-gray-800
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                italic hover:font-extrabold
                flex justify-center items-center flex-col">
                    <img src={XLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">X @va0ckRBLX</h1>
                </div>
            </a>
            <a href="https://bsky.app/profile/va0ck.com" target="_blank">
                <div className="w-72 h-40 p-4 m-3 bg-black rounded-xl 
                hover:-translate-y-2 hover:bg-sky-800
                hover:drop-shadow-[0_0_2em_rgba(255,255,255,0.1)] duration-300
                italic hover:font-extrabold
                flex justify-center items-center flex-col">
                    <img src={BlueskyLogo} className="h-16 w-16"/>
                    <h1 className="text-2xl pt-2">Bluesky @va0ck.com</h1>
                </div>
            </a>
        </div>
    </>
}