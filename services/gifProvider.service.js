const gifProviderConfig = require('../config/gifProviderConfig')
const axios = require("axios");

REQUEST_TYPE = {
    TRENDING: 'trending',
    SEARCH: 'search',
};
exports.sendRequest = async (limit, offset, search_key) => {
    try {
        const url = getUri(limit, offset, search_key);
        let res = await axios.get(url);
        if (res.status !== 200) {
            return false;
        }
        return (res.data)
    } catch (e) {
        throw e;
    }
}

getUri = (limit, offset = 0, search_key = undefined) => {
    const request_type = (search_key) ? REQUEST_TYPE.SEARCH : REQUEST_TYPE.TRENDING;
    const uri = gifProviderConfig.baseUrl + request_type +
        "?api_key=" + gifProviderConfig.apiKey +
        "&limit=" + limit +
        "&offset=" + offset +
        "&rating=g";
    return (request_type === REQUEST_TYPE.TRENDING) ? uri : (uri + "&q=" + search_key);
}