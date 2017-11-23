const countryOptions = (countryOptions = 0, action) => {
    return [
        { key: "cn", value: "cn", flag: "cn", text: "China" },
        { key: "au", value: "au", flag: "au", text: "Australia" },
        { key: "us", value: "us", flag: "us", text: "USA" }
    ];
};

export const sharedStateReducer = {
    countryOptions
};
