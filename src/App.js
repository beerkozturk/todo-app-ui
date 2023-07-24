import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    axios.get('https://localhost:7166/ToDo')
      .then(response => {
        console.log(response);
        debugger
        setTodo(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  /*const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = {
      task: task,
      status: 'In progress'
    };

    axios.post('/api/tasks', data)
       .then(response => {
         // İstek başarılıysa yapılacak işlemler
         console.log(response.data);
         getTasks(); // Yeniden görevleri getir
         setTask(''); // Görev girişini sıfırla
       })
       .catch(error => {
         // Hata durumunda yapılacak işlemler
         console.error(error);
       });
   };
 
   const markAsFinished = (taskId) => {
     axios.put(`/api/tasks/${taskId}`, { status: 'Finished' })
       .then(response => {
         // İstek başarılıysa yapılacak işlemler
         console.log(response.data);
         getTasks(); // Yeniden görevleri getir
       })
       .catch(error => {
         // Hata durumunda yapılacak işlemler
         console.error(error);
       });
   };
 
   const deleteTask = (taskId) => {
     axios.delete(`/api/tasks/${taskId}`)
       .then(response => {
         // İstek başarılıysa yapılacak işlemler
         console.log(response.data);
         getTasks(); // Yeniden görevleri getir
       })
       .catch(error => {
         // Hata durumunda yapılacak işlemler
         console.error(error);
       });
   };*/

  return (
    <div className="App">

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">

                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <div className="col-12">
                    <div className="form-outline">
                      <input type="text" id="form1" className="form-control" />
                      <label className="form-label" htmlFor="form1">Enter a task here</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-warning">Get tasks</button>
                  </div>
                </form>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Is Complated</th>
                      <th scope="col">Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todo.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.description}</td>
                          <td>{item.isComplated == true ? 'Tamamlandı √' : 'Henüz Tamamlanmadı X'}</td>
                          <td>
                            <button type="submit" className="btn btn-danger">Delete</button>
                            <button type="submit" className="btn btn-success ms-1">Finished</button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
