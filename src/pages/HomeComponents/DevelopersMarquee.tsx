import { getAvatarThumbnailByUserIds, getUserByUserId, robloxThumbnailsAvatarApi, robloxUserApi } from "../../hooks/RobloxApi"

import Marquee from "react-fast-marquee";
import PlaceHolder from "../../assets/images/placeholder-1024x1024.png"

// https://users.roblox.com//docs/index.html
// https://thumbnails.roblox.com//docs/index.html

interface DEVELOPERS_BACKGROUNDS_TABLE {
    id: number,
    bgStyle: string
}
const DEVELOPERS_SET: DEVELOPERS_BACKGROUNDS_TABLE[] = [
    //Favorites
    {
        id: 35123490, //ZELNUS [Favorite Main Developer!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 4545223, //UNROOT [Favorite Ui Developer!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 16574047, //TheEpicTwin [Favorite CFrame Developer!
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },

    //Cool Developers
    {
        id: 4397833, //Quenty [Nevermore Developer!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 83348, //Osyris [Roblox Typescript!!!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 68136726, //JohnnyMorganz [LuaU Language Server!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },

    //Really Cool Developers
    {
        id: 308165, //sleitnick [GOT ME INTO OSS WITH KNIT!!! :D]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 56140227, //Kampfkarren [SUPER DUPER HELPFUL REACT MAN!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 74972628, //Fluorlite [SUPER DUPER COOL BUILDER!!!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },

    //Awesome Scripters
    {
        id: 18659509, //hlelo_wolrd [Networking Module inspo! :O]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 2155311, //EgoMoose [Made Viewport portals! :O]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 51635158, //lrogerorrit [Raycast and CFrame man! :O]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 25691148, //TheNexusAvenger [Auto Datastore Removal & Wrap Uis! :O]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },

    //Code @ Roblox
    {
        id: 2231221, //TheGamer101 [Code @ Roblox which allowed me to learn springs!!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 1628829780, //MintyUltra [Code samples @ Roblox!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 1569334068, //DevelopmentDeadline [Code sampels @ Roblox!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },

    //Awesome developers.
    {
        id: 1741242, //Den_S [No devlogs but cool developer for TPT2!!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 80484191, //Szymon227G [Created GRACE and awesome devlogs!!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 2040318, //ChampionBuilder [Creating cool games! Fusion UI!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
    {
        id: 48016706, //NohahDev [Creating cool games! Fusion UI!]
        bgStyle: 'bg-blue-950 hover:bg-blue-850'
    },
]

interface DEVELOPERS_FETCHED_TABLE {
    userId: number,
    username: string,
    rblxLink: string,
    imgFetched: string,
    cardBgStyle?: string
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

                    if (ifDeveloperAlreadyExist == false){
                        const newAppendTable: DEVELOPERS_FETCHED_TABLE = {
                            userId: gottenDeveloperTable.targetId,
                            username: developerUserFetchedData.name,
                            rblxLink: `https://www.roblox.com/users/${gottenDeveloperTable.targetId}`,
                            imgFetched: gottenDeveloperTable.imageUrl,
                            cardBgStyle: developerCardStyle
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

    console.log(`FETCHED DEVELOPERMARQUEE:`);
    console.log(DEVELOPERS_FETCHED);
}

export function DevelopersMarquee(){
    //Grab data here and not in main Marquee. [TO AVOID LIKE MULTIPLE FETCHING EVERY RE-RENDER.

    return <Marquee speed={20} gradient gradientColor="rgb(3 7 18)" direction="right" autoFill className="overflow-hidden">
        {DEVELOPERS_FETCHED.map((getValue, getKey) => (
            <a href={getValue.rblxLink} key={getKey} target='_blank'>
                <div className="relative overflow-hidden m-2 w-80 h-56 hover:-translate-y-2 duration-300 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-950">
                    <img src={getValue.imgFetched} className="flex w-60 mt-0"/>
                    <h1 className="z-10 flex absolute bottom-0 pl-4 pb-3">@{getValue.username}</h1>
                </div>
            </a>
        ))}
        {DEVELOPERS_FETCHED.length == 0 ? (
            <div className="relative overflow-hidden m-2 w-80 h-56 hover:-translate-y-2 duration-300 rounded-3xl cursor-pointer text-2xl font-bold bg-blue-950">
                <img src={PlaceHolder} className="flex w-60 mt-0"/>
                <h1 className="z-10 flex absolute bottom-0 pl-4 pb-3">ERROR: NONE LOADED!</h1>
            </div>
        ): (<></>)}
    </Marquee>
}