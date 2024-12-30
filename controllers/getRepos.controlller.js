import axios from "axios";
import redisClient from "../db/dbConnect.js";
import setResponse from "../utils.js";

const getRepos = async (req, res, next) => {
	const { username } = req.params;
	try {
		console.log("fetching data");
		const { data } = await axios.get(
			`https://api.github.com/users/${username}`,
		);

		const repos = data.public_repos;

		//set data to redis
		redisClient.setEx(username, 3600, `${repos}`);

		res.send(setResponse(username, repos));
	} catch (err) {
		console.error(err);
		res.status(500);
	}
};

export default getRepos;