import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const ArticleTitle = ({ title, ...props }) => {
    let titleClass = "title";
    if (props.size === 'medium') titleClass += " title_md";
    if (props.size === 'small') titleClass += " title_sm";

    const titleText =
        title && title[0]
            ? title.map((item, index) => {
                  return (
                      <>
                          <Span key={index} border={item.border} color={item.color ? item.color : "black"}>
                              {item.text}
                          </Span>
                          {item.br && item.br === true && <br />}
                      </>
                  );
              })
            : "";
    
    if (props.h1) return <h1 className={titleClass}>{titleText}</h1>;
    return <h2 className={titleClass}>{titleText}</h2>;
};

const Span = styled.span`
    color: ${(props) =>
        props.color === "white"
            ? "#fff"
            : props.color === "red"
            ? `${Theme.redColor}`
            : props.color === "darkGreen"
            ? `${Theme.darkGreenColor}`
            : props.color === "lightGreen"
            ? `${Theme.lightGreenColor}`
            : props.color === "pink"
            ? `${Theme.pinkColor}`
            : `${Theme.fontColor}`};
`;
