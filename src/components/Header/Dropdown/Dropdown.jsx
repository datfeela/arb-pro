import { ContentHighRes } from "./ContentHighRes/ContentHighRes";
import { ContentLowRes } from "./ContentLowRes/ContentLowRes";
import s from "./Dropdown.module.scss";
import { Search } from "./Search/Search";

export const Dropdown = ({
    isBurgerActive,
    usefulList,
    aboutList,
    contacts,
    contentLowRes,
    searchBlockData,
    isSearchActive,
    toggleActivateSearch,
    color,
}) => {
    return (
        <div className={s.wrap}>
            <Search
                buttonText={searchBlockData.buttonText}
                inputPlaceholder={searchBlockData.placeholder}
                isSearchActive={isSearchActive}
                isBurgerActive={isBurgerActive}
                toggleActivateSearch={toggleActivateSearch}
                color={color}
            />
            <ContentHighRes
                isSearchActive
                isBurgerActive={isBurgerActive}
                usefulList={usefulList}
                aboutList={aboutList}
                contacts={contacts}
                color={color}
            />
            <ContentLowRes
                items={contentLowRes} 
                isBurgerActive={isBurgerActive}
                color={color} />
        </div>
    );
};
