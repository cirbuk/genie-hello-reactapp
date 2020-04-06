import axios from 'axios';

const helloWorld = async (data) => {
  const { name, color, bgColor } = data;
  const result = await axios.post(`/api/hello/`, { params: { name, color, bgColor } });
  console.log("result hello world", result);
}

export {
  helloWorld
}