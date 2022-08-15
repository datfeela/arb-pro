import { Case } from "./Case/Case";
import s from "./CasesScreen.module.scss";

export const CasesScreen = ({ content }) => {
    const items = content.items.map((item) => (
        <Case
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.desc}
            was={item.was}
            result={item.result}
            linkText={content.linkText}
            linkHref={item.linkHref}
            wasTitle={content.wasTitle}
            resultTitle={content.resultTitle}
        />
    ));

    return <div className={s.wrap}>{items}</div>;
};
