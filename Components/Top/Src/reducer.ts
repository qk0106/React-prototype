import { ADD_CLICK_COUNT } from "TopContainer";

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
