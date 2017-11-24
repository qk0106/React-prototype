import { addMiddleware } from "redux-dynamic-middlewares";
import {
    INIT_COUNTRY_OPTIONS,
    FETCH_COUNTRY_OPTIONS_SUCCESS,
    fetchCountryOptionsSuccess
} from "./action";
import { doFetchText } from "FetchHelper";
import { registerSharedState } from "ReduxSharedStateManager";

const registerCountryOptions = () => {
    const initCountryOptions = [];
    const countryOptions = (countryOptions = initCountryOptions, action) => {
        switch (action.type) {
            case FETCH_COUNTRY_OPTIONS_SUCCESS:
                return action.countryOptions;
            default:
                return countryOptions;
        }
    };
    registerSharedState({ countryOptions });
};

const getCountryOptionsData = async () => {
    const data = await doFetchText("https://react.semantic-ui.com/app.fa4f9df2677ed6cad825.js");
    const reg = /\;t\.countryOptions=(.+)},\/\*\!\*+/;
    let str = data.match(reg)[1];
    str = str.replace(/key\:/g, '"key":');
    str = str.replace(/value\:/g, '"value":');
    str = str.replace(/flag\:/g, '"flag":');
    str = str.replace(/text\:/g, '"text":');
    const countryOptions = JSON.parse(str);
    return countryOptions;
};

const actionHandlerMiddleware = ({ dispatch }) => next => async action => {
    next(action);
    const type = action.type;
    const instanceId = action.instanceId;
    if (type === INIT_COUNTRY_OPTIONS) {
        registerCountryOptions();
        const countryOptions = await getCountryOptionsData();
        dispatch(fetchCountryOptionsSuccess(instanceId)({ countryOptions }));
    }
};

addMiddleware(actionHandlerMiddleware);
