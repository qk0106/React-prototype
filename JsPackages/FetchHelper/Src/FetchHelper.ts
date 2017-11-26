export const doFetch = async (url, cb) => {
    // console.log("fetching");
    let res = await fetch(url);
    let data = await res[cb]();
    return data;
};
