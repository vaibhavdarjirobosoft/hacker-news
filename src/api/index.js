const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';

const getTops = async () => {
    const response = await fetch(`${BASE_URL}/topstories.json`);
    const data = await response.json();
    return data;
};

const getNewest = async () => {
    const response = await fetch(`${BASE_URL}/newstories.json`);
    const data = await response.json();
    return data;
};

const getAsks = async () => {
    const response = await fetch(`${BASE_URL}/askstories.json`);
    const data = await response.json();
    return data;
};

const getJobs = async () => {
    const response = await fetch(`${BASE_URL}/jobstories.json`);
    const data = await response.json();
    return data;
};

const getShows = async () => {
    const response = await fetch(`${BASE_URL}/showstories.json`);
    const data = await response.json();
    return data;
};

const getItem = async (id) => {
    const response = await fetch(`${BASE_URL}/item/${id}/.json`);
    const data = await response.json();
    return data;
};
export {
    getTops,
    getNewest,
    getAsks,
    getJobs,
    getShows,
    getItem
};
