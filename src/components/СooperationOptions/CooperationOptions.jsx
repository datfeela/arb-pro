import { useContext } from "react";
import s from "./CooperationOptions.module.scss";
import { AppContext } from "../../context";
import { ArticleTitle } from "../_generic/ArticleTitle/ArticleTitle";
import { Option } from "./Option/Option";
import { Form } from "./Form/Form";

export const CooperationOptions = () => {
    const data = useContext(AppContext).state.cooperation;
    let isReversed = false;
    const blocks = data.blocks.map((block) => {
        const reversed = isReversed;
        isReversed = !isReversed;
        return <Option key={block.id} data={block} reversed={reversed} />;
    });

    return (
        <div className={s.wrap}>
            <div className={s.wrapInner}>
                <div className={s.titleWrap}>
                    <ArticleTitle title={data.title} />
                </div>
                <div className={s.blocksWrap}>{blocks}</div>
                <Form
                    title={data.form.title}
                    fields={data.form.fields}
                    btnText={data.form.submitBtn}
                    submitDesc={data.form.submitDesc}
                    addInfo={data.form.circleInfo}
                />
            </div>
        </div>
    );
};
