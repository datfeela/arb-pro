import { useContext } from "react";
import s from "./Team.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Member } from "./Member/Member";

export const Team = () => {
    const data = useContext(AppContext).state.layouts.strategy.team;

    const items1 = data.members.slice(0, 3).map((item) => <Member key={item.id} id={item.id} name={item.name} desc={item.desc} doubleImg={true} />);
    const items2 = data.members.slice(3).map((item) => <Member key={item.id} id={item.id} name={item.name} desc={item.desc} />);

    return (
        <div className={s.wrap + " wrap"}>
            <div className={"wrapInner"}>
                <div className={s.titleWrap}>
                        <ArticleTitle title={data.title} />
                </div>
            </div>

            <div className={s.content}>
                <div className={"wrapInner"}>
                    <div className={s.members1}>{items1}</div>
                </div>

                <div className={"wrapInner"}>
                    <div className={s.members2}>{items2}</div>
                </div>
            </div>  
        </div>
        
    );
};
