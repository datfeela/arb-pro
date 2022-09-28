import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const ArticleTitle = ({ title, ...props }) => {
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

    return <h2 className={props.size === "medium" ? "titleMd" : "title"}>{titleText}</h2>;
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
            : `${Theme.fontColor}`};
`;
