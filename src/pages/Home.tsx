import './Home.css'

export function Home(){
    return (<>
        <title>Home - Va0ck</title>

        <div className='bg-fixed bg-cover bg-parallax bg-bottom'>
            <div className='flex h-40 items-center justify-start pl-20 bg-gradient-to-t from-cyan-950 to-blue-400]'>
                <h1 className='text-5xl motion-preset-slide-up'>Hello, I'm Va0ck!</h1>
            </div>
        </div>

        <div className='h-48 pl-20 pr-20 flex flex-row flex-wrap justify-between items-center'>
            <article>
                <h1 className='motion-preset-slide-left motion-duration-1000'>Who am I?</h1>
                <p className='motion-preset-slide-left motion-duration-1200'>I'm just a coder who does it as a hobby.</p>
            </article>
            <article>
                <p>YOOOOOOOOOOOOO WHAT'S GOOD. THIS SITE STILL IN PROGRESSIOSES!
                    
                </p>
            </article>
        </div>
    </>)
}