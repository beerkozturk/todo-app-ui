import baseAxios from "../helpers/baseAxios";

export default class TodoService {
    AddNewToDoItem(newToDoData) {
        return baseAxios.post('/ToDo', newToDoData);
    };
    getTasks() {
        return baseAxios.get('/ToDo');
    };

}