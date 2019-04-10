import axios from "axios";
import store from "../store";

axios.interceptors.request.use(function(config) {
  const token = store.getState().app.token;
  config.mode = "no-cors";
  config.headers.Accept = "application/json";
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

class Api {
  baseUri = "http://localhost:8000";

  signup(data) {
    return axios.post(this.baseUri + "/user/signup", data);
  }

  login(data) {
    return axios.post(this.baseUri + "/user/login", data);
  }

  getBoards() {
    return axios.get(this.baseUri + "/boards");
  }

  getBoard(boardId) {
    return axios.get(this.baseUri + "/boards/" + boardId);
  }

  addBoard(title) {
    return axios.post(this.baseUri + "/boards", {
      title,
      listIds: [],
      starred: false,
      colour: "#b04632",
      visibility: "Private"
    });
  }

  updateBoard(board) {
    return axios.patch(this.baseUri + "/boards/" + board.id, {
      title: board.title,
      listIds: board.listIds,
      starred: board.starred,
      colour: board.colour,
      visibility: board.visibility
    });
  }

  deleteBoard(boardId) {
    return axios.delete(this.baseUri + "/boards/" + boardId);
  }

  getTasks() {
    return axios.get(this.baseUri + "/tasks");
  }

  updateTask(task) {
    return axios.patch(this.baseUri + "/tasks/" + task.id, {
      title: task.title,
      description: task.description
    });
  }

  addTask(title) {
    return axios.post(this.baseUri + "/tasks", {
      title: title
    });
  }

  deleteTask(id) {
    return axios.delete(this.baseUri + "/tasks/" + id);
  }

  getLists(boardId) {
    return axios.get(this.baseUri + "/lists?boardId=" + boardId);
  }

  updateList(list) {
    const data = {
      id: list.id,
      title: list.title,
      taskIds: list.taskIds
    };
    return axios.patch(this.baseUri + "/lists/" + list.id, data);
  }

  addList(title) {
    return axios.post(this.baseUri + "/lists", {
      title: title,
      taskIds: []
    });
  }

  deleteList(id) {
    return axios.delete(this.baseUri + "/lists/" + id);
  }
}

const api = new Api();
export default api;
