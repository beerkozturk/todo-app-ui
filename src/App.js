import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Api } from "./helpers/baseAxios";
import React, { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const api = new Api();
  const [todo, setTodo] = useState([]);

  useEffect(() => {

    api.getTasks().then(response => {
      console.log(response);
      debugger
      setTodo(response.data);

    }).catch(error => {
      console.error(error);
    });
  }, []);


  const addNewToDoItem = (newToDoData) => {

    // baseAxios.post('/ToDo/AddToDoItem', newToDoData)
    //   .then(response => {
    //     console.log('New ToDo item added:', response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error adding new ToDo item:', error);
    //   });
  };

  // const getTasks = () => {
  //   axios.get('https://localhost:7166/ToDo')
  //     .then(response => {
  //       console.log(response);
  //       debugger
  //       setTodo(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  const deleteTask = (taskId) => {
    // axios.delete(`/api/tasks/${taskId}`)
    //   .then(response => {
    //     console.log(response.data);
    //     getTasks();
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  };

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
                      <label className="form-label" htmlFor="form1">Title</label>
                      <input type="text" id="form1" className="form-control" />
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form2">Description</label>
                      <input type="text" id="form2" className="form-control" />
                    </div>

                    <div className="col-12">
                      <button type="submit" onClick={() => addNewToDoItem()} className="btn btn-primary">Save</button>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-warning">Get tasks</button>
                    </div>
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
                          <td>{item.isComplated == true ? 'Tamamlandi √' : 'Henüz Tamamlanmadi X'}</td>
                          <td>
                            <button type="button" onClick={() => deleteTask(item.id)} className="btn btn-danger">Delete</button>
                            <button type="button" className="btn btn-success ms-1">Finished</button>
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
