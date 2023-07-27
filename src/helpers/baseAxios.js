import axios from "axios";
import { baseAxios } from "axios";

//import baseAxios from "../helpers/baseAxios"; şu şekilde importla
const baseAxios = axios.create({
    baseURL: "/https://localhost:7166"
});

baseAxios.get("/GetTasks")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });



const addNewToDoItem = (newToDoData) => {
    // Make the POST request to the server
    baseAxios.post('/ToDo/AddToDoItem', newToDoData)
        .then(response => {
            console.log('New ToDo item added:', response.data);
        })
        .catch(error => {
            console.error('Error adding new ToDo item:', error);
        });
};

axios.post('https://example.com/api/data', postData)
    .then(response => {
        console.log('Post request success:', response.data);
    })
    .catch(error => {
        console.error('Error making post request:', error);
    });

//input alanları oluştur des tittle vb 
//db ye veri kaydetmeye çalış 
//axios ile post atıcaksın bu input alanındaki verileri gönder
//update, delete e bak
// employeedetail.cs nin içinde var delete falan oraya bak 

export default baseAxios;