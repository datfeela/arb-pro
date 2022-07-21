import { ArticleTitle } from "../../_generic/ArticleTitle/ArticleTitle";
import { Carousel } from "./Carousel/Carousel";
import s from "./Slider.module.scss";

export const Slider = ({ data }) => {
    return (
        <div className={s.wrap}>
            <div className={s.articleWrap}>
                <ArticleTitle title={data.title} />
            </div>
            <Carousel slides={data.slides}/>
        </div>
    );
};

