import axios from "axios";

export class Api {
    constructor() {
        this.baseAxios = axios.create({
            baseURL: "https://localhost:7166"
        });
    }

    getTasks() {
        return this.baseAxios.get("/ToDo");
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(error => {
        //     console.error(error);
        // });
    };

    deleteTask(YOUR_TASK_ID) {
        return this.baseAxios.delete("/ToDo/DeleteTask", { taskId: YOUR_TASK_ID });
    };

    addTask(data) {
        return this.baseAxios.post("/ToDo/AddToDoItem", data);
    };
}




//input alanları oluştur des tittle vb 

//axios ile post atıcaksın bu input alanındaki verileri gönder
//update, delete e bak

