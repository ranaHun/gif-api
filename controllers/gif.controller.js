const GifService = require("../services/gif.service")
exports.get = async (req, res) => {
    try {
        const {page, size, search_key} = req.query;
        const response = await GifService.getGifs(page, size, search_key);
        const httpCode = (response) ? 200 : 500;
        res.status(httpCode).send(response);
    } catch (e) {
        res.status(500).send({message: "Internal server error."});
    }
}
