import { ActualForm } from "./ActualForm/ActualForm";
import s from "./Form.module.scss";

export const Form = ({ title, fields, btnText, submitDesc, addInfo, yaMetricsFn }) => {
    return (
        <div className={s.wrap}>
            <div className={s.wrapAbsolute}>
                <div className={s.leftWrap}>
                    <h3 className={s.title}>{title}</h3>
                    <ActualForm fields={fields} btnText={btnText} submitDesc={submitDesc} yaMetricsFn={yaMetricsFn} />
                </div>
                <div className={s.rightWrap}>
                    <div className={s.circle}>
                        <div className={s.content}>
                            <span className={s.contentTitle}>{addInfo.title}</span>
                            <span className={s.contentText}>{addInfo.desc}</span>
                        </div>
                    </div>
                    <img className={s.img} src="StrategicPlanning/Cooperation/form150res.png" alt="" />
                </div>
            </div>
        </div>
    );
};
