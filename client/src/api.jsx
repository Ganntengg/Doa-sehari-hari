import axios from "axios";

const base = import.meta.env.VITE_BASEURL;

const semuaDoa = async () => {
  const api = await axios.get(`${base}/api/all`);
  return api.data;
};

const detailDoa = async (id) => {
  const api = await axios.get(`${base}/api/detail/${id}`);
  return api.data;
};

const cariDoa = async (query) => {
  const api = await axios.get(`${base}/api/search?doa=Doa%20${query}`);
  return api.data;
};

export { semuaDoa, detailDoa, cariDoa };
