import {useLocation} from "react-router";

export const useGetSlideNameByUrl = () => {
    const location = useLocation();
    const paths = location.pathname.split("/");

    return paths.at(-1);
};