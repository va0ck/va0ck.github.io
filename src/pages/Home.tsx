import { ToolsMarquee } from './HomeComponents/ToolsMarquee';
import { DevelopersMarquee } from './HomeComponents/DevelopersMarquee';
import { useState, useLayoutEffect } from 'react';
import { GamesMarquee } from './HomeComponents/GamesMarquee';

export function Home(){
    const [width, setWidth] = useState(0);
    const [switchToFull, setSwitchToFull] = useState(true);

    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);

            if (width < 1128){
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

        <div className='bg-fixed bg-cover bg-parallax bg-bottom'>
            <div className='flex h-40 items-center justify-start pl-10 pr-10 bg-gradient-to-t from-cyan-950 to-blue-400]'>
                <h1 className='text-5xl font-bold italic motion-preset-slide-up'>Hello, I'm Va0ck!</h1>
            </div>
        </div>

        <h1 className="text-4xl font-extrabold italic pt-6 pb-2 pl-8 pr-8 
        motion-scale-in-[0] motion-translate-x-in-[-100%] motion-translate-y-in-[0%] 
        motion-opacity-in-[0%] motion-blur-in-[20px] motion-duration-[0.76s]/scale motion-duration-[0.25s]/opacity
        ">About me! 💖</h1>
        <div className='h-32 pl-10 pr-10 flex flex-row flex-wrap justify-between items-center'>
            <article className='motion-scale-in-[0] motion-translate-x-in-[-100%] motion-translate-y-in-[0%] 
        motion-opacity-in-[0%] motion-blur-in-[20px] motion-duration-[1s]/scale motion-duration-[0.3s]/opacity'>
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
        motion-scale-in-[0] motion-translate-x-in-[-100%] motion-translate-y-in-[0%] 
        motion-opacity-in-[0%] motion-blur-in-[20px] motion-duration-[1.25s]/scale motion-duration-[0.5s]/opacity'>
            Favorite developers! ⭐
        </h1>

        <br className='pt-4'/>
        <DevelopersMarquee />
        <br className='pb-4' />

        <h1 className='text-4xl pl-8 pr-8 font-extrabold italic
        motion-scale-in-[0] motion-translate-x-in-[-100%] motion-translate-y-in-[0%] 
        motion-opacity-in-[0%] motion-blur-in-[20px] motion-duration-[1.75s]/scale motion-duration-[0.75s]/opacity'>
            Favorite games! 🎉
        </h1>
        <br className='pt-4'/>
        <GamesMarquee />
        <br className='pb-4' />

    </>)
}