import axios from "axios";

const url = "http://localhost:3000/todos";

// export default axios.create({
//   baseURL: "http://localhost:3000/",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

export const fetchTask = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(axios.get(url));
    }, 2000);
  });

export const createTask = (newTask) => axios.post(url, newTask);
export const editTask = (id, updateTask) =>
  axios.patch(`${url}/${id}`, updateTask);
export const deleteTask = (id) => axios.delete(`${url}/${id}`);
