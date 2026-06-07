// import { useEffect, useState } from "react";

// function Todo() {
//    let [tasks, setTask] = useState([]);
//    let a = false;

//     function addtask() {
//         var taskInput = document.getElementById('task').value;

//         if (taskInput == '') {
//           a = true;
//           console.log(a);
//           alert('Please enter a task');
//           return;
//         }
//         else{
//           a = false;
//           console.log(a);

//           const newTasks = [...tasks, taskInput]; //... are special operators it remember previous record  // create updated array

//           setTask(newTasks);                        // update state
//           console.log(newTasks);

//           localStorage.setItem('tasks', JSON.stringify(newTasks)); // save updated tasks
//         }
//     }

// useEffect(() => {
//    var storedTasks = JSON.parse(localStorage.getItem('tasks'));
//    setTask(storedTasks || []);
// }, []);

//     return (
//         <div>
//             <h1>Todo List</h1>
//             <input type="text" id="task" placeholder="Add a new task" />
//             <button onClick={addtask}>Add</button>

//         {a==true ? <p className="error" style={{color:'red'}}>Please enter a task</p> : ''}

//             <h3>Fetch Tasks:</h3>
//             <ul>
//                 {tasks.map((data, index) => (
//                     <li key={index}>{data}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Todo;