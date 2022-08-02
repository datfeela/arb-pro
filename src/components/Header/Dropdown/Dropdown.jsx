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
}) => {
    return (
        <div className={s.wrap}>
            <Search
                buttonText={searchBlockData.buttonText}
                inputPlaceholder={searchBlockData.placeholder}
                isSearchActive={isSearchActive}
                isBurgerActive={isBurgerActive}
                toggleActivateSearch={toggleActivateSearch}
            />
            <ContentHighRes isSearchActive isBurgerActive={isBurgerActive} usefulList={usefulList} aboutList={aboutList} contacts={contacts} />
            <ContentLowRes items={contentLowRes} isBurgerActive={isBurgerActive} />
        </div>
    );
};
