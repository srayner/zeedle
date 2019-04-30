import axios from "axios";
import store from "../store";

function jwtIsExpired(jwt) {
  const payload = JSON.parse(atob(jwt.split(".")[1]));
  const expires = new Date(payload.exp * 1000);
  const now = new Date();
  return expires <= now;
}

axios.interceptors.request.use(function(config) {
  const token = store.getState().user.token;
  const refreshToken = store.getState().user.refreshToken;
  if (
    !config.url.endsWith("/user/login") &&
    !config.url.endsWith("/user/refresh") &&
    refreshToken &&
    jwtIsExpired(refreshToken)
  ) {
    store.dispatch({ type: "LOGOUT" });
  }
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

  verify(data) {
    return axios.post(this.baseUri + "/user/verify", data);
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

  updateUser(user) {
    return axios.patch(this.baseUri + "/user", user);
  }

  getTasks(boardId) {
    return axios.get(this.baseUri + "/tasks?boardId=" + boardId);
  }

  updateTask(task) {
    return axios.patch(this.baseUri + "/tasks/" + task.id, {
      title: task.title,
      description: task.description
    });
  }

  addTask({ title, boardId }) {
    return axios.post(this.baseUri + "/tasks", { title, boardId });
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

  addList({ title, boardId }) {
    console.log(title, boardId);
    return axios.post(this.baseUri + "/lists", { title, boardId, taskIds: [] });
  }

  deleteList(id) {
    return axios.delete(this.baseUri + "/lists/" + id);
  }
}

const api = new Api();
export default api;
