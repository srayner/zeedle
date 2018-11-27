import axios from "axios";

class Api {
  baseUri = "http://localhost:8000";

  getTasks() {
    return axios.get(this.baseUri + "/tasks", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
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

  getColumns() {
    return axios.get(this.baseUri + "/columns", {
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
}

const api = new Api();
export default api;
