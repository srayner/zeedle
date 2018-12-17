import axios from "axios";

class Api {
  baseUri = "http://localhost:8000";

  getHeaders = () => {
    const headers = {
      "Content-Type": "application/json"
    };
    const token = localStorage.getItem("token");
    if (token) {
      headers.Authorization = "Bearer " + token;
    }
    return headers;
  };

  getOptions = () => {
    return {
      mode: "no-cors",
      headers: this.getHeaders()
    };
  };

  signup(data) {
    return axios.post(this.baseUri + "/user/signup", data, this.getOptions());
  }

  login(data) {
    return axios.post(this.baseUri + "/user/login", data, this.getOptions());
  }

  getBoards() {
    const options = this.getOptions();
    console.log(options);
    return axios.get(this.baseUri + "/boards", this.getOptions());
  }

  getBoard(boardId) {
    return axios.get(this.baseUri + "/boards/" + boardId, this.getOptions());
  }

  addBoard(title) {
    return axios.post(
      this.baseUri + "/boards",
      {
        title,
        listIds: []
      },
      this.getOptions()
    );
  }

  updateBoard(board) {
    return axios.patch(
      this.baseUri + "/boards/" + board.id,
      {
        title: board.title,
        listIds: board.listIds,
        starred: board.starred
      },
      this.getOptions()
    );
  }

  getTasks() {
    return axios.get(this.baseUri + "/tasks", this.getOptions());
  }

  updateTask(task) {
    return axios.patch(
      this.baseUri + "/tasks/" + task.id,
      {
        title: task.title,
        description: task.description
      },
      this.getOptions()
    );
  }

  addTask(title) {
    return axios.post(
      this.baseUri + "/tasks",
      {
        title: title
      },
      this.getOptions()
    );
  }

  deleteTask(id) {
    return axios.delete(this.baseUri + "/tasks/" + id, this.getOptions());
  }

  getLists(boardId) {
    return axios.get(
      this.baseUri + "/lists?boardId=" + boardId,
      this.getOptions()
    );
  }

  updateList(list) {
    const data = {
      id: list.id,
      title: list.title,
      taskIds: list.taskIds
    };
    return axios.patch(
      this.baseUri + "/lists/" + list.id,
      data,
      this.getOptions()
    );
  }

  addList(title) {
    return axios.post(
      this.baseUri + "/lists",
      {
        title: title,
        taskIds: []
      },
      this.getOptions()
    );
  }

  deleteList(id) {
    return axios.delete(this.baseUri + "/lists/" + id, this.getOptions());
  }
}

const api = new Api();
export default api;
