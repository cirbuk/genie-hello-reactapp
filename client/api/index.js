import axios from 'axios';

const helloWorld = async (data) => {
  const { name, color, bgColor } = data;
  const result = await axios.post(`/api/hello/`, { params: { name, color, bgColor } });
  if (result.status === 200) {
    return result.data;
  } else {
    return { result }
  }
}

export {
  helloWorld
}