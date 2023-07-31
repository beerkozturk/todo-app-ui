import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import TodoService from './services/todoService';

function App() {
  const [todo, setTodo] = useState([]);
  const title = useRef();
  const description = useRef();

  const todoService = new TodoService();

  useEffect(() => {
    todoService.getTasks().then(response => {
      setTodo(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);


  const addItem = () => {
    const titleValue = title?.current?.value?.trim();
    const descriptionValue=description?.current?.value?.trim();
    if(titleValue!="" && descriptionValue!=""){
      const newTodo={
        id:0,
        title:titleValue,
        description:descriptionValue,
        isComplated:false
      }
      console.log(newTodo);
      todoService.AddNewToDoItem(newTodo).then(response=>{
        console.log(response);
      }).catch(err=>{
        console.log(err);
      });
    }else{
      alert("önce dolu gir")
    }
  };
  
  
  const deleteTask = (taskId) => {
     
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
                      <input ref={title} type="text" id="form1" className="form-control" />
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="form2">Description</label>
                      <input ref={description} type="text" id="form2" className="form-control" />
                    </div>

                    <div style={{width:"100%",display:"flex",marginTop:"20px",justifyContent:"center"}}>
                      <a onClick={() => addItem()} className="btn btn-primary">Save</a>
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
