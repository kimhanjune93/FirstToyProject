import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
// 도서 list
const GET_ITEM_LIST = "GET_ITEM_LIST";

const getItemList = createAction(GET_ITEM_LIST, (itemList) => ({ itemList }));

const initialState = {
  list: [
    { id: 1, name: "item1", price: 1000, size: "L" },
    { id: 2, name: "item2", price: 2000, size: "S" },
    { id: 3, name: "item3", price: 3000, size: "M" },
    { id: 4, name: "item4", price: 4000, size: "M" },
    { id: 5, name: "item5", price: 5000, size: "M" },
    { id: 6, name: "item6", price: 6000, size: "M" },
    { id: 7, name: "item7", price: 7000, size: "M" },
    { id: 8, name: "item8", price: 8000, size: "M" },
    { id: 9, name: "item9", price: 9000, size: "M" },
    { id: 10, name: "item10", price: 10000, size: "M" },
    { id: 11, name: "item11", price: 11000, size: "M" },
    { id: 12, name: "item12", price: 12000, size: "M" },
  ],
};

const testMiddleware = () => {
  return function (dispatch, getState, { history }) {
    console.log("aaaa");
    apis
      .getTest()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_ITEM_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.itemList;
      }),
  },
  initialState
);
const actionCreators = {
  getItemList,
  testMiddleware,
};

export { actionCreators };
