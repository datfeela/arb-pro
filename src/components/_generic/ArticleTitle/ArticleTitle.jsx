import styled from "styled-components";
import { Theme } from "../../../assets/styled/theme";

export const ArticleTitle = ({ title, ...props }) => {
    const titleText =
        title && title[0]
            ? title.map((item) => {
                  return (
                      <>
                          <Span color={item.color ? item.color : "black"}>{item.text}</Span>
                          {item.br && item.br === true && <br />}
                      </>
                  );
              })
            : "";

    return <h2 className="title">{titleText}</h2>;
};

const Span = styled.span`
    color: ${(props) =>
        props.color === "white"
            ? "#fff"
            : props.color === "red"
            ? `${Theme.redColor}`
            : props.color === "darkGreen"
            ? `${Theme.darkGreenColor}`
            : `${Theme.fontColor}`};
`;
