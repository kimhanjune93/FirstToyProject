import React from "react";
import FlexGrid from "../elements/FlexGrid";
import Text from "../elements/Text";
const Item = (props) => {
  const item = props.item;
  return (
    <FlexGrid is_flex flexDirection="column" width="200px">
      <Text>상품명: {item.name}</Text>
      <Text>사이즈: {item.size}</Text>
      <Text>가 격: {item.price}</Text>
    </FlexGrid>
  );
};

export default Item;
