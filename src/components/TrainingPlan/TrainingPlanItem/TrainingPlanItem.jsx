import { SvgSelector } from "../../_generic/SvgSelector/SvgSelector";
import s from "./TrainingPlanItem.module.scss";

export const TrainingPlanItem = ({ data, id }) => {
    const { title, desc, tags, areTagsWithDesc, textWithIcons } = { ...data };
    const tagsElements =
        tags &&
        tags.length > 0 &&
        tags.map((item) => (
            <div className={s.tag + (areTagsWithDesc ? " " + s.tag_withDesc : "")}>
                <span className={s.tag__title}>{item.title}</span>
                {areTagsWithDesc && <span className={s.tag__desc}>{item.desc && item.desc}</span>}
            </div>
        ));
    const textWithIconsElements =
        textWithIcons &&
        textWithIcons.length > 0 &&
        textWithIcons.map((item) => (
            <div className={s.textWithIcon}>
                <div className={s.textWithIcon__header}>
                    <SvgSelector type={item.icon} />
                    <span className={s.textWithIcon__title}>{item.title}</span>
                </div>
                {item.desc && <span className={s.textWithIcon__desc}>{item.desc}</span>}
            </div>
        ));

    return (
        <div className={s.wrap + " wrap"}>
            <div className={s.header}>
                <span className={s.numCircle}>{id + 1}</span>
                <span className={s.title}>{title}</span>
            </div>
            <span className={s.desc}>{desc && desc}</span>
            {tagsElements && <div className={s.tags + (areTagsWithDesc ? " " + s.tags_withDesc : "")}>{tagsElements}</div>}
            <div className={s.textWithIconsEls}>{textWithIconsElements}</div>
        </div>
    );
};
