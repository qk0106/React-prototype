export const doFetch = async url => {
    // console.log("fetching");
    let res = await fetch(url);
    let data = await res.json();
    return data;
};
