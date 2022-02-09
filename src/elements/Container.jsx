import React from "react";
import styled from "styled-components";
const Container = (props) => {
  const { margin, padding, children, maxWidth } = props;
  const styles = {
    margin: margin,
    padding: padding,
    maxWidth: maxWidth,
  };
  return (
    <>
      <ContainerWrap {...styles}>{children}</ContainerWrap>
    </>
  );
};
Container.defaultProps = {
  margin: "0 auto",
  padding: 0,
  maxWidth: "1180px",
};

const ContainerWrap = styled.div`
  height: auto;
  max-width: ${(props) => props.maxWidth};
  margin: ${(props) => props.margin};
`;
export default Container;
