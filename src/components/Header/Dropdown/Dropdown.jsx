import { ContentHighRes } from "./ContentHighRes/ContentHighRes";
import { ContentLowRes } from "./ContentLowRes/ContentLowRes";
import s from "./Dropdown.module.scss";
import { Search } from "./Search/Search";

export const Dropdown = ({
    page,
    isBurgerActive,
    usefulList,
    aboutList,
    contacts,
    contentLowRes,
    searchBlockData,
    isSearchActive,
    toggleActivateSearch,
    color,
    secondaryColor,
}) => {
    const IsLowResContentPresentForMidRes = page === "invincibility" || page === "basicStrategies";
    const IsHighResContentPresentForMidRes = page === "invincibility" || page === "basicStrategies";
    const IsHighResContentPresentForLowRes = page === "invincibility";

    return (
        <div className={s.wrap}>
            <Search
                buttonText={searchBlockData.buttonText}
                inputPlaceholder={searchBlockData.placeholder}
                isSearchActive={isSearchActive}
                isBurgerActive={isBurgerActive}
                toggleActivateSearch={toggleActivateSearch}
                color={color}
                secondaryColor={secondaryColor}
            />
            <ContentHighRes
                isSearchActive
                isBurgerActive={isBurgerActive}
                usefulList={usefulList}
                aboutList={aboutList}
                contacts={contacts}
                color={color}
                isWithMidResolution={IsHighResContentPresentForMidRes}
                isWithLowResolution={IsHighResContentPresentForLowRes}
            />
            {page !== "invincibility" && (
                <ContentLowRes
                    items={contentLowRes}
                    isBurgerActive={isBurgerActive}
                    color={color}
                    isWithMidResolution={IsLowResContentPresentForMidRes}
                />
            )}
        </div>
    );
};
