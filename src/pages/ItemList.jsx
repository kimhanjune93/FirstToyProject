import React from "react";
import Container from "../elements/Container";
import { useSelector } from "react-redux";
import Item from "../component/Item";
import FlexGrid from "../elements/FlexGrid";
const BookList = (props) => {
  const itemList = useSelector((state) => state.item.list);

  return (
    <React.Fragment>
      <Container>
        <FlexGrid is_flex >
          {itemList.map((item, index) => {
            return <Item key={index} item={item} />;
          })}
        </FlexGrid>
      </Container>
    </React.Fragment>
  );
};

export default BookList;
