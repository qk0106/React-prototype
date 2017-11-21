import { ADD_CLICK_COUNT } from "TopSubContainer"; // To get Action Types

const clickCounter = (clickCounter = 0, action) => {
    switch (action.type) {
        case ADD_CLICK_COUNT:
            return ++clickCounter;
        default:
            return clickCounter;
    }
};

export const reducer = {
    clickCounter
};
