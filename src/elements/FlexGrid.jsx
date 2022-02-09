import React from "react";
import styled from "styled-components";

const FlexGrid = (props) => {
  const {
    is_flex,
    justify,
    width,
    height,
    margin,
    padding,
    border,
    bg,
    alignItems,
    _onClick,
    children,
    flexDirection,
  } = props;

  const styles = {
    is_flex: is_flex,
    justify: justify,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    border: border,
    bg: bg,
    alignItems: alignItems,
    flexDirection:flexDirection,
  };

  return (
    <FlexGridWrap {...styles} onClick={_onClick}>
      {children}
    </FlexGridWrap>
  );
};

FlexGrid.defaultProps = {
  is_flex: false,
  justify: "flex-start",
  flexDirection:"row",
  width: "auto",
  margin: 0,
  padding: 0,
  border: 0,
  bg: "transparent",
  alignItems: "center",
  _onClick: () => {},
};

const FlexGridWrap = styled.div`
  display: ${(props) => (props.is_flex ? `flex; flex-direction: ${props.flexDirection}` : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "flex-start")};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  width: ${(props) => props.width};
  margin: ${(props) => (props.margin ? props.margin : "auto")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  flex-wrap: wrap;
  border: ${(props) => (props.border ? props.border : "")};
  background-color: ${(props) => (props.bg ? props.bg : "transparent")};
  &:hover {
    cursor: pointer;
  }
`;

export default FlexGrid;
