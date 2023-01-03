const GifProviderService = require("./gifProvider.service");
const Gif = require("../models/gif");
const PaginationHelper = require("../helpers/pagination.helper");
//Get Gifs from Gif Provider
exports.getGifs = async (page, size, search_key) => {
    const result = [];
    try {
        const {limit, offset} = PaginationHelper.getPagination(page, size);
        const response = await getGifsFromProvider(limit, offset, search_key);
        for (const item of response.data) {
            const url = item.images.downsized_medium?.url;
            result.push(new Gif(item.type, item.id, url))
        }
        const totalItems = response.pagination.total_count;
        return PaginationHelper.getPagingData({rows: result, totalItems: totalItems}, page, limit);
    } catch (e) {
        return false;
    }
}

async function getGifsFromProvider(limit, offset, search_key = undefined) {
    try {
        return await GifProviderService.sendRequest(limit, offset, search_key)
    } catch (e) {
        throw e;
    }
}