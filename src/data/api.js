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

  getColumns() {
    return axios.get(this.baseUri + "/columns", {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

const api = new Api();
export default api;
