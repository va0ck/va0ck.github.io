import { Separator } from "@/components/ui/separator"

export default function Home(){
    return <>
        <title>Home</title>

        <div className="relative place-items-center">
            <div className="mt-10 w-full max-w-sm md:max-w-xl lg:max-w-2xl">
                <div className="flex flex-col">
                    <h1 className="text-3xl">va0ck</h1>
                </div>

                <Separator className="my-4"/>

                <h2 className="text-xl">skills</h2>
                <p>- luau: 2018-current</p>
                <p>- typescript: 2024-current</p>
                <p>- react native: 2025-current</p>

                <Separator className="my-4"/>

                <h2 className="text-xl">experience</h2>
                <p className="mt-2">2023</p>
                <p>- epic event 2023</p>

                <p className="mt-2">2024</p>
                <p>- folder-net</p>
                <p>- epic event 2024</p>
                <p>- robloxian physical [remaking]</p>

                <p className="mt-2">2025</p>
                <p>- none yet</p>
            </div> 
        </div>
    </>
}