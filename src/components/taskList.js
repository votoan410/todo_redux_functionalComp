import React, { useState, useEffect } from "react";
import http from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, getTasks } from "../actions/todoActions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("redux state: ", tasks);
    dispatch(getTasks());
  }, []);

  // const getTask = () => {
  //   http.get(endpoint).then((res) => {
  //     setState(res);
  //   });
  // };

  // useEffect(() => {
  //   getTask();
  // }, []);

  // DOM structure selector
  const DomSelectors = {
    root: "task__list",
    taskSection: {
      taskContainer: "task__container",
      taskEntry: "task__entry",
      markedTaskEntry: "task__entry-marked",
      title: "task__title",
      edit: "task__edit",
      deleteTask: "task__delete",
    },
  };

  // if (state?.data) {
  //   console.log(state.data);
  // }
  const FOO = () => {
    return 5;
  };
  // action is an object = {type , payload}
  // reducer function => new state depending on the action type and previous state
  // dispatch take in the action object and send it to the reducer to update the store state
  const deleteClick = (id) => {
    if (id) {
      const trimmedId = id?.substring(11);
      console.log("delete clicked: ", trimmedId);
      dispatch(deleteTask(trimmedId));
    }
  };

  const styleLined = { textDecoration: "line-through", cursor: "grab" };
  const styleWOLined = { cursor: "grab" };

  return tasks?.map((task) => {
    return (
      <>
        <section
          className={DomSelectors.taskSection.taskEntry}
          //   style={task.completed ? "text-decoration: line-through;" : null}
        >
          <div
            className={DomSelectors.taskSection.title}
            style={task.completed ? styleLined : styleWOLined}
            id={`div-${task.id}`}
          >
            {/* substring(12) */}
            <h3
              id={`title-click-${task.id}`}
              // style="cursor:grab"
              onClick={(event) => console.log(event.target.id)}
            >
              {task.title}
            </h3>
          </div>
          <div
            className={DomSelectors.taskSection.edit}
            // style={task.completed ? "display: none" : null}
          >
            {/* substring(9) for edit */}
            <svg
              id={`btn-edit-${task.id}`}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="EditIcon"
              aria-label="fontSize small"
            >
              <path
                id={`btn-edit-${task.id}`}
                fill="#ffffff"
                d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959
                        0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
              ></path>
            </svg>
          </div>
          <div
            className={DomSelectors.taskSection.deleteTask}
            id={`btn-delete-${task.id}`}
            onClick={(event) => {
              deleteClick(event.target.id);
            }}
          >
            <svg
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="DeleteIcon"
              aria-label="fontSize small"
            >
              <path
                id={`btn-delete-${task.id}`}
                fill="#ffffff"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
              ></path>
            </svg>
          </div>
        </section>
      </>
    );
  });
};

export default TaskList;
