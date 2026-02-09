import './App.css'
import {SlidesPage} from './pages/slides/SlidesPage'
import {lazy} from 'react'
import {SplashScreen} from './pages/splash/SplashScreen.tsx'
import {Navigate, Route, Routes} from 'react-router'
import StoresPage from "@/pages/stores/StoresPage.tsx";
import StorePage from "@/pages/stores/StorePage.tsx";

const OffersSlide = lazy(
    () => import("@/pages/slides/OffersSlide/OffersSlide.tsx"),
);
const ProfileSlide = lazy(
    () => import("./pages/slides/ProfileSlide/ProfileSlide.tsx"),
);

function App() {

    return (
        <Routes>
            <Route index element={<SplashScreen/>} path={"/"}/>

            <Route element={<Navigate to="/app/slides/offers"/>} path="/app"/>

            <Route path='app'>
                <Route element={<StoresPage/>} path='/stores'/>
                <Route element={<StorePage/>} path='/store/:id'/>
                <Route element={<SlidesPage/>} path={"slides"}>
                    <Route element={<OffersSlide/>} path={"offers"}/>
                    <Route element={<ProfileSlide/>} path={"profile"}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
