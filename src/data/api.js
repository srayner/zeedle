import axios from "axios";

class Api {
  baseUri = "http://localhost:8000";

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

  updateBoard(board) {
    return axios.patch(
      this.baseUri + "/boards/" + board.id,
      {
        title: board.title,
        columnIds: board.columnOrder,
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

  getColumns(boardId) {
    return axios.get(this.baseUri + "/columns?boardId=" + boardId, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  updateColumn(column) {
    const data = {
      id: column.id,
      title: column.title,
      taskIds: column.taskIds
    };
    return axios.patch(this.baseUri + "/columns/" + column.id, data, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  addList(title) {
    return axios.post(
      this.baseUri + "/columns",
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
    return axios.delete(this.baseUri + "/columns/" + id, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const api = new Api();
export default api;
