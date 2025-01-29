import { Link } from 'react-router-dom';
import { ToolsMarquee } from '../components/HomeMarquee';
import { useState, useLayoutEffect } from 'react';

export function Home(){
    const [width, setWidth] = useState(0);
    const [switchToFull, setSwitchToFull] = useState(true);

    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);

            if (width < 1142){
                setSwitchToFull(true);
            } else {
                setSwitchToFull(false);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        
        return () => window.removeEventListener('resize', updateSize);
    }, [width]);

    return (<>
        <title>Home - Va0ck</title>

        <div className='bg-fixed bg-cover bg-home bg-bottom'>
            <div className='flex h-40 items-center justify-start pl-10 pr-10 bg-gradient-to-t from-cyan-950 to-blue-400]'>
                <h1 className='text-5xl font-bold italic motion-preset-slide-up'>Hello, I'm Va0ck!</h1>
            </div>
        </div>

        <h1 className="text-4xl font-extrabold italic pt-6 pb-2 pl-8 pr-8 
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity
        ">About me! 💖</h1>
        <div className='h-32 pl-10 pr-10 flex flex-row flex-wrap justify-between items-center'>
            <article className='motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity'>
                <p className="text-lg">A hobby coder who does coding for fun.</p>
                <p className="text-lg">I do coding with Typescript, LuaU, Java, and more! :3</p>
            </article>
            {switchToFull ? (
                <div className="w-full">
                    <ToolsMarquee />
                </div>
            ) : (
                <div className="w-1/2">
                    <ToolsMarquee />
                </div>
                
            )}
        </div>
        

        {switchToFull ? (
            <div className='pt-36'/>
        ):(
            <div className='pt-2'/>
        )}


        <h1 className='text-4xl pl-8 pr-8 font-extrabold italic
        motion-translate-x-in-[-10%] motion-translate-y-in-[0%] motion-blur-in-[10px] motion-duration-[0.3s]/opacity'>
            Questions and Answers! ⭐
        </h1>
        <div className='pt-3 pl-10 pr-10 flex flex-row flex-wrap justify-between items-center
            motion-translate-x-in-[0%] motion-translate-y-in-[14%] motion-blur-in-[10px] motion-duration-[0.5s]/blur
        '>
            <article>
                <p className='text-2xl pb-2 font-bold italic'>Are you for hire?</p>
                <li className='pb-4'>Nope, if I need work I'll look for it.</li>

                <p className='text-2xl pb-2 font-bold italic'>What do you mainly use for Roblox?</p>
                <ul>
                    <li className="text-sky-500"><a href='https://github.com/jsdotlua/react-lua' target='_blank'>React-Lua</a></li>
                    <li className="text-sky-500"><a href='https://github.com/chriscerie/roact-spring' target='_blank'>React-Spring</a></li>
                    <li>Private Modules</li>
                    <li className='text-sky-500'><a href="https://youtu.be/28z_064N-lc?si=L-FH-LndT1Acn1dm&t=520" target='_blank'>Modified CrusherFire Loader</a></li>
                    <li className="text-sky-500 pb-2"><Link to="/works">Public Custom Modules [OSS Section]</Link></li>
                </ul>
                <p className='text-lg pb-2 font-bold italic'>[I can work with other modules as well!]</p>
                <ul>
                    <li className="text-sky-500"><a href='https://elttob.uk/Fusion' target='_blank'>Fusion</a></li>
                    <li className="text-sky-500"><a href='https://roblox-ts.com/' target='_blank'>RobloxTS</a></li>
                    <li className='pb-4'>And willing to learn other ones!</li>
                </ul>
            </article>

            <article>
                <p className='text-2xl pb-2 font-bold italic'>What do you do outside of Roblox?</p>
                <ul>
                    <li>Website Development!</li>
                    <li className='pb-4'>Cross-Platform App Development!</li>
                </ul>

                <p className='text-2xl pb-2 font-bold italic'>What about things you don't know?</p>
                <p>I'm pretty much willing to learn anything.</p>
                <p>If you use Nevermore, Flamework, or anything,</p>
                <p className='pb-4'>I'm cool with learning it. 👍</p>

                <p className='text-2xl pb-2 font-bold italic'>What do you use for reference?</p>
                <p>Generally these three things which I really love.</p>
                <ul>
                    <li className="text-sky-500"><a href='https://www.roblox.com/games/12606338918/PENTHOUSES-STOCK-CRASH' target='_blank'>UI Reference [Unroot | STOCK CRASH 📈]</a></li>
                    <li className="text-sky-500"><a href='https://www.roblox.com/games/8473958692/The-Trials-PHASE-2' target='_blank'>Vanilla Building Style [Zelnus | The Trials]</a></li>
                    <li className="text-sky-500 pb-4"><a href='https://www.roblox.com/users/74972628/profile' target='_blank'>PBR Building Style [Fluorlite | Roblox Profile]</a></li>
                </ul>
            </article>

            <article>
                <p className='text-2xl pb-2 font-bold italic'>Are you hiring on your personal projects?</p>
                <p>I don't plan on it, I usually love learning things solo.</p>
                <p className='pb-4'>If I do need someone though, I'll contact them first.</p>

                <p className='text-2xl pb-2 font-bold italic'>Does ChaChaBenjo have ligma?</p>
                <p className='pb-10'>He does, no doubt...</p>

                <p className='text-2xl pb-2 font-bold italic'>Anything I need to know before DMing you?</p>
                <p>Please follow with these two sites says.</p>
                <p>I rather get straight into business instead of waiting.</p>
                <ul>
                    <li className='text-sky-500'><a href="https://nohello.net/" target='_blank'>Don't just say hello please, just straight to business.</a></li>
                    <li className='text-sky-500 pb-4'><a href="https://dontasktoask.com/" target='_blank'>Don't ask to ask, just straight to the question you have.</a></li>
                </ul>
            </article>
        </div>
    </>)
}