import { API_URL } from "../app/(home)/page";

const MovieVideos = async ({ id }) => {
	const videos = await getVideos(id);
	return <h6>{JSON.stringify(videos)}</h6>;
};

const getVideos = async (id) => {
	// await new Promise((resolve) => {
	// 	setTimeout(resolve, 3000);
	// });
	// throw Error("something broke...");
	const response = await fetch(`${API_URL}/${id}/videos`);
	return response.json();
};

export default MovieVideos;
