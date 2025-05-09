import { Suspense } from "react";
import Header from "@/components/header";
import { Route, Routes } from "react-router-dom";

import Home from "./main/Home";
import Loading from "@/components/loading";

export default function App(){
    return <>
        <Header/>

        {/* HashRouters! */}
        <div className="z-0">
            <Suspense fallback={<Loading/>}>
                <Routes>
                    {/* Manual */}
                    <Route index element={<Home />}/>

                    {/* Prob manual as well, Idk how to turn TSX to slugs. */}
                </Routes>
            </Suspense>
        </div>
    </>
}