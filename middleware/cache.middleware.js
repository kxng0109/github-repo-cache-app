import redisClient from "../db/dbConnect.js";
import setResponse from "../utils.js";

export default async (req, res, next) => {
	try {
		const { username } = req.params;
		const data = await redisClient.get(username);
		if (data !== null) {
			return res.send(setResponse(username, data));
		}
		next();
	} catch (err) {
		throw err;
	}
};