import * as api from "../services/api";
// Action Creators

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTask();
    // console.log("fetched data: ", data);
    // const action = { type: "FETCH_ALL", payload: data };
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const createTask = (post) => async (dispatch) => {
  try {
    const { data } = await api.createTask(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const updateTask = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editTask(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
