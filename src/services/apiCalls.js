import axios from "axios";

// console.log(process.env);

const apiCalls = async (configParams) => {
  const { method, url, headers, data } = configParams;

  const res = await axios({
    method: method,
    url: url,
    headers: { ...headers, "Content-Type": "application/json" },
    data: data || null,
  });

  // console.log(res);

  return { status: res.status, data: res.data };
};

export default apiCalls;
