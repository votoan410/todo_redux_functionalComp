import * as api from "../services/api";
import TODO_ACTIONS_TYPES from "./actionTypes";
// Action Creators

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTask();
    // console.log("fetched data: ", data);
    // const action = { type: "FETCH_ALL", payload: data };
    dispatch({ type: TODO_ACTIONS_TYPES.FETCH_TODO, payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.createTask(task);

    dispatch({ type: TODO_ACTIONS_TYPES.CREATE_TODO, payload: data });
  } catch (error) {
    console.log("fetch data error: ", error);
  }
};

export const updateTask = (id, task) => async (dispatch) => {
  try {
    const { data } = await api.editTask(id, task);
    dispatch({ type: TODO_ACTIONS_TYPES.UPDATE_TODO, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// async await will return a promise
export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.deleteTask(id);

    dispatch({ type: TODO_ACTIONS_TYPES.DELETE_TODO, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
