const limitDefaultValue = 10;
exports.getPagination = (page, size) => {
    const limit = size ? +size : limitDefaultValue;
    const offset = page ? (page-1) * limit : 0;
    return {limit, offset};
};
exports.getPagingData = (items, page, limit) => {
    const {totalItems: totalItems, rows: data} = items;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    return {totalItems, totalPages, currentPage, data};
};