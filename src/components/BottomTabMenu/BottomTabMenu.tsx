import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useGetSlideNameByUrl} from "@/components/BottomTabMenu/hooks/useGetSlideNameByUrl.ts";
import {
    BottomTabsMenuStyled,
    BottomTabsMenuTitleTabStyled
} from "@/components/BottomTabMenu/styles/BottomTabsMenu.styled.ts";
import {Store, User} from "lucide-react";
import {TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";


export type KeysTab =
    | "offers"
    | "profile";

export const BottomTabMenu = () => {
    const navigate = useNavigate();
    const pathName = useGetSlideNameByUrl();
    const [selectedKey, setSelectedKey] = useState<KeysTab>(
        (pathName as KeysTab) || "offers",
    );


    const handleSelectionChange = (key: React.Key) => {
        const newKey = key as KeysTab;

        setSelectedKey(newKey);
        navigate(`/app/slides/${newKey}`);
    };


    return (
        <BottomTabsMenuStyled
            aria-label="Tabs variants"
            color="primary"
            defaultValue={selectedKey}
            onValueChange={handleSelectionChange}
        >
            <TabsList style={{height: 60, gap: 3}}>
                <TabsTrigger value='offers'>
                    <BottomTabsMenuTitleTabStyled selected={selectedKey === "offers"}>
                        <Store className="icon" size={16}/>
                        <div className="title">Лента</div>
                    </BottomTabsMenuTitleTabStyled>
                </TabsTrigger>
                <TabsTrigger value='profile'>
                    <BottomTabsMenuTitleTabStyled selected={selectedKey === "profile"}>
                        <User className="icon" size={16}/>
                        <div className="title">Профиль</div>
                    </BottomTabsMenuTitleTabStyled>
                </TabsTrigger>
            </TabsList>
        </BottomTabsMenuStyled>
    );
}