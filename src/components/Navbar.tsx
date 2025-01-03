import './Navbar.css'
import RobloxLogo from '../assets/icons/Roblox_Logo.svg'
import DevforumLogo from '../assets/icons/Roblox_Devforum_Logo.svg'
import GithubLogo from '../assets/icons/github-mark-white.svg'
import DiscordLogo from '../assets/icons/discord-icon.svg'

const Navbar = () => {
    return (<nav className='nav'>
        <a href="/" className="site-title hover:drop-shadow-[0_0_2em_rgba(255,255,255,1)] duration-300">Va0ck</a>
        <ul className='links'>
            <li><a href="/works">Works</a></li>
            <li><a href="/oss">OSS</a></li>
        </ul>

        <ul className='socials'>
            <li>
                <a href="https://www.roblox.com/users/844029031/profile" target='_blank'>
                    <img src={RobloxLogo} className="h-8 hover:rotate-90 hover:drop-shadow-[0_0_2em_rgba(255,255,255,1)] duration-300"/>
                </a>
            </li>
            <li>
                <a href="https://devforum.roblox.com/u/va0ck" target='_blank'>
                    <img src={DevforumLogo} className="h-8 hover:rotate-45 hover:drop-shadow-[0_0_2em_rgba(173,216,255,1)] duration-300"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/va0ck" target='_blank'>
                    <img src={GithubLogo} className="h-8 hover:rotate-45 hover:drop-shadow-[0_0_2em_rgba(255,255,255,1)] duration-300"/>
                </a>
            </li>
            <li>
                <a href="https://discordapp.com/users/1023691601006051378" target='_blank'>
                    <img src={DiscordLogo} className="h-8 hover:rotate-45 hover:drop-shadow-[0_0_2em_rgba(0,0,255,1)] duration-300"/>
                </a>
            </li>
        </ul>
    </nav>)
}

export default Navbar