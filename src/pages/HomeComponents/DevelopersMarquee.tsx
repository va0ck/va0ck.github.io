import { getAvatarThumbnailByUserIds, getUserByUserId, robloxThumbnailsAvatarApi, robloxUserApi } from "../../hooks/RobloxApi.tsx"

import Marquee from "react-fast-marquee";
import PlaceHolder from "../../assets/images/placeholder-1024x1024.png"

// https://users.roblox.com//docs/index.html
// https://thumbnails.roblox.com//docs/index.html

interface DEVELOPERS_BACKGROUNDS_TABLE {
    id: number,
    bgStyle: string,
    invertTextColor?: boolean
    backwardsInvertColor?: boolean
}
const DEVELOPERS_SET: DEVELOPERS_BACKGROUNDS_TABLE[] = [
    //Favorites
    {
        id: 35123490, //ZELNUS [Favorite Main Developer!]
        bgStyle: 'bg-blue-950 hover:bg-blue-700'
    },
    {
        id: 4545223, //UNROOT [Favorite Ui Developer!]
        bgStyle: 'bg-zinc-950 hover:bg-yellow-500'
    },
    {
        id: 16574047, //TheEpicTwin [Favorite CFrame Developer!
        bgStyle: 'bg-rose-950 hover:bg-rose-800'
    },

    //Cool Developers
    {
        id: 4397833, //Quenty [Nevermore Developer!]
        bgStyle: 'bg-green-800 hover:bg-green-500'
    },
    {
        id: 83348, //Osyris [Roblox Typescript!!!]
        bgStyle: 'bg-red-900 hover:bg-red-600'
    },
    {
        id: 68136726, //JohnnyMorganz [LuaU Language Server!]
        bgStyle: 'bg-cyan-900 hover:bg-cyan-600'
    },

    //Really Cool Developers
    {
        id: 308165, //sleitnick [GOT ME INTO OSS WITH KNIT!!! :D]
        bgStyle: 'bg-black hover:bg-red-600',
        invertTextColor: true
    },
    {
        id: 56140227, //Kampfkarren [SUPER DUPER HELPFUL REACT MAN!]
        bgStyle: 'bg-red-500 hover:bg-blue-500'
    },
    {
        id: 74972628, //Fluorlite [SUPER DUPER COOL BUILDER!!!]
        bgStyle: 'bg-white hover:bg-rose-400',
        backwardsInvertColor: true
    },

    //Awesome Scripters
    {
        id: 18659509, //hlelo_wolrd [Networking Module inspo! :O]
        bgStyle: 'bg-black hover:bg-white',
        invertTextColor: true
    },
    {
        id: 2155311, //EgoMoose [Made Viewport portals! :O]
        bgStyle: 'bg-orange-700 hover:bg-orange-400'
    },
    {
        id: 51635158, //lrogerorrit [Raycast and CFrame man! :O]
        bgStyle: 'bg-slate-600 hover:bg-teal-500'
    },
    {
        id: 25691148, //TheNexusAvenger [Auto Datastore Removal & Wrap Uis! :O]
        bgStyle: 'bg-sky-800 hover:bg-sky-400',
        invertTextColor: true
    },

    //Code @ Roblox [FINISH EDIT EVERYTHING BELOW HERE.]
    {
        id: 2231221, //TheGamer101 [Code @ Roblox which allowed me to learn springs!!]
        bgStyle: 'bg-black hover:bg-white',
        invertTextColor: true
    },
    {
        id: 1628829780, //MintyUltra [Code samples @ Roblox!]
        bgStyle: 'bg-gray-300 hover:bg-black',
        backwardsInvertColor: true,
    },
    {
        id: 1569334068, //DevelopmentDeadline [Code sampels @ Roblox!]
        bgStyle: 'bg-rose-500 hover:bg-gray-300',
        invertTextColor: true
    },

    //Awesome developers.
    {
        id: 1741242, //Den_S [No devlogs but cool developer for TPT2!!]
        bgStyle: 'bg-blue-500 hover:bg-cyan-500'
    },
    {
        id: 80484191, //Szymon227G [Created GRACE and awesome devlogs!!]
        bgStyle: 'bg-neutral-950 hover:bg-yellow-600'
    },
    {
        id: 2040318, //ChampionBuilder [Creating cool games! Fusion UI!]
        bgStyle: 'bg-blue-700 hover:bg-red-500'
    },
    {
        id: 48016706, //NohahDev [Creating cool games! Fusion UI!]
        bgStyle: 'bg-green-900 hover:bg-blue-500'
    },
]

interface DEVELOPERS_FETCHED_TABLE {
    userId: number,
    username: string,
    rblxLink: string,
    imgFetched: string,
    cardBgStyle?: string,
}
const DEVELOPERS_FETCHED :DEVELOPERS_FETCHED_TABLE[] = []
let hasRun = false;

function valueExistsInNestedArray(arr: DEVELOPERS_FETCHED_TABLE[], value: number): boolean {
    for (const item of arr) {
      if (Array.isArray(item)) {
        if(item.userId === value){
            return true;
        }
      }
    }
    return false;
}
export function DevelopersMarqueeFetchData(){
    if(hasRun){
        return
    }
    hasRun = true;

    const DEVELOPERS_IDs: number[] = []
    DEVELOPERS_SET.forEach((val) => {
        DEVELOPERS_IDs.push(val.id);
    })

    //We're going to use AvaliableThumbnails as the deciding factor.
    //to either include or exclude the developer.
    const grabAvaliableThumbnails = getAvatarThumbnailByUserIds(DEVELOPERS_IDs);
    
    //GrabsAllCompletedUserids
    grabAvaliableThumbnails.then((fetchedDeveloperTables: robloxThumbnailsAvatarApi[]) => {
        fetchedDeveloperTables.forEach((gottenDeveloperTable: robloxThumbnailsAvatarApi) => {

            //Grabs developer profile if avaliable.
            if (gottenDeveloperTable.state == "Completed") {
                const getDeveloperUserProfile = getUserByUserId(gottenDeveloperTable.targetId);
                getDeveloperUserProfile.then((developerUserFetchedData: robloxUserApi) => {
                    const ifDeveloperAlreadyExist = valueExistsInNestedArray(DEVELOPERS_FETCHED, developerUserFetchedData.id);
                    const developerCardStyle = DEVELOPERS_SET.find((item) => item.id === gottenDeveloperTable.targetId)?.bgStyle;
                    const ifInvertTextColor = DEVELOPERS_SET.find((item) => item.id === gottenDeveloperTable.targetId)?.invertTextColor;
                    const ifInvertTextColor2 = DEVELOPERS_SET.find((item) => item.id === gottenDeveloperTable.targetId)?.backwardsInvertColor;
                    let defaultNoInvertText = '';

                    if (ifInvertTextColor){
                        defaultNoInvertText = 'hover:text-black'
                    }
                    if (ifInvertTextColor2){
                        defaultNoInvertText = 'text-black hover:text-white'
                    }

                    if (ifDeveloperAlreadyExist == false){
                        const newAppendTable: DEVELOPERS_FETCHED_TABLE = {
                            userId: gottenDeveloperTable.targetId,
                            username: developerUserFetchedData.name,
                            rblxLink: `https://www.roblox.com/users/${gottenDeveloperTable.targetId}`,
                            imgFetched: gottenDeveloperTable.imageUrl,
                            cardBgStyle: "relative overflow-hidden m-2 w-80 h-56 hover:-translate-y-2 duration-300 rounded-3xl cursor-pointer text-2xl font-bold "+developerCardStyle+" "+defaultNoInvertText,
                        }
    
                        DEVELOPERS_FETCHED.push(newAppendTable);
                    }
                }).catch((error) => {
                    console.error('Promise rejected [DeveloperUserPromise] with error: ' + error);
                })
            }
        })
    }).catch((error) => {
        console.error('Promise rejected [DevelopersThumbnailsPromsie] with error: ' + error)
    })

    if (DEVELOPERS_FETCHED.length >= 1){
        return true;
    } else {
        return false;
    }
}

export function DevelopersMarquee(){
    //Original 20 speed.
    return <Marquee speed={20} gradient gradientColor="rgb(3 7 18)" direction="right" autoFill className="overflow-hidden">
        {DEVELOPERS_FETCHED.map((getValue, getKey) => (
            <a href={getValue.rblxLink} key={getKey} target='_blank'>
                <div className={getValue.cardBgStyle}>
                    <img src={getValue.imgFetched} className="flex w-60 mt-0 -ml-6"/>
                    <h1 className="z-10 flex absolute bottom-0 pl-4 pb-3">@{getValue.username}</h1>
                </div>
            </a>
        ))}
        {DEVELOPERS_FETCHED.length == 0 ? (
            <div className="relative overflow-hidden m-2 w-80 h-56 hover:-translate-y-2 duration-300 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-950">
                <img src={PlaceHolder} className="flex w-60 mt-0 -ml-6"/>
                <h1 className="z-10 flex absolute bottom-0 pl-4 pb-3">ERROR: NONE LOADED!</h1>
            </div>
        ): (<></>)}
    </Marquee>
}