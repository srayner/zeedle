import axios from "axios";

class Api {
  baseUri = "http://localhost:8000";

  options = {
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    }
  };

  signup(data) {
    return axios.post(this.baseUri + "/user/signup", data, this.options);
  }

  login(data) {
    return axios.post(this.baseUri + "/user/login", data, this.options);
  }

  getBoards() {
    return axios.get(this.baseUri + "/boards", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getBoard(boardId) {
    return axios.get(this.baseUri + "/boards/" + boardId, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  addBoard(title) {
    return axios.post(
      this.baseUri + "/boards",
      {
        title,
        listIds: []
      },
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
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
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  getTasks() {
    return axios.get(this.baseUri + "/tasks", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  updateTask(task) {
    return axios.patch(
      this.baseUri + "/tasks/" + task.id,
      {
        title: task.title,
        description: task.description
      },
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  addTask(title) {
    return axios.post(
      this.baseUri + "/tasks",
      {
        title: title
      },
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  deleteTask(id) {
    return axios.delete(this.baseUri + "/tasks/" + id, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  getLists(boardId) {
    return axios.get(this.baseUri + "/lists?boardId=" + boardId, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  updateList(list) {
    const data = {
      id: list.id,
      title: list.title,
      taskIds: list.taskIds
    };
    return axios.patch(this.baseUri + "/lists/" + list.id, data, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  addList(title) {
    return axios.post(
      this.baseUri + "/lists",
      {
        title: title,
        taskIds: []
      },
      {
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  deleteList(id) {
    return axios.delete(this.baseUri + "/lists/" + id, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const api = new Api();
export default api;
