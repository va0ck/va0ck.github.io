export default function Loading(){
    return <>
        <div className="flex-col gap-4 w-full h-screen -mt-16 flex items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            >
                <div
                className="w-16 h-16 border-4 border-transparent animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
                ></div>
            </div>
        </div>
    </>
}