import { registerMiddleware } from "ReduxMiddlewareManager";

import { doFetch } from "FetchHelper";
import { registerSharedResource } from "ReduxSharedResourceManager";
import {
    INIT_COUNTRY_OPTIONS,
    FETCH_COUNTRY_OPTIONS_SUCCESS,
    fetchCountryOptionsSuccess
} from "./action";

const registerCountryOptions = () => {
    const countryOptions = (countryOptions = [], action) => {
        switch (action.type) {
            case FETCH_COUNTRY_OPTIONS_SUCCESS:
                countryOptions = action.countryOptions;
                return countryOptions;
            default:
                return countryOptions;
        }
    };
    registerSharedResource({ countryOptions });
};

const getCountryOptionsData = async () => {
    const data = await doFetch("https://react.semantic-ui.com/app.58ed96854ba9bd9ac420.js", "text");
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

registerMiddleware(actionHandlerMiddleware);
