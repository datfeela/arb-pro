import { useContext } from "react";
import s from "./Team.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Member } from "./Member/Member";

export const Team = () => {
    const data = useContext(AppContext).state.team;

    const items = data.members.map((item) => <Member key={item.id} id={item.id} name={item.name} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.members}>{items}</div>
            </div>
        </div>
    );
};
