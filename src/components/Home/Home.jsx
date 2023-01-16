 import React,{useState} from 'react'
import "./Home.css";
import Task from '../Task/Task';
import { useEffect } from 'react';

const Home = () => {

  const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [] ;
  // We have done parse to again change from string to array.
  // If any array founds in localStorage then gets printed else not.

  const [tasks , settasks] = useState(initialArray);
  // this empty array is removed and if tasks are present then a will render else b.
  const [title ,settitle] = useState("");
  const [description ,setdescription] = useState("");
  // initial value is given empty array in useState function.

  // console.log(title ,description);
  // Now we don't hv to do document.elementById , insteaad of that we hv use usestate variables.
 
  const deleteTask =(index) => {
      const filteredArr = tasks.filter((val ,i) => {
        return i !== index;
      })
      settasks(filteredArr);
      console.log(filteredArr);
      // filteredArr gives the tasks that are left in the array after removing the tasks.
  } 
  const submithandler = (e) => {
    e.preventDefault();

    settasks([...tasks,{
      title, description
    },])
    settitle("")
    setdescription("")

    // First added the tasks that are present initially & then after tasks are added manually
    console.log(tasks)
    // tasks array elements get come after the ADD button. 
  };

  useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks))
  },[tasks]) 

  // in dependencies the tasks is added every time using useeffect and deletion of tasks is handled automatically.

   //tasks is array or object and in localStorage tasks array after stringify will be stored.

  return (
    <div className="container">
      <h1 >Everyday Notes Section</h1>
      <form onSubmit={submithandler} >
        <input type="text" placeholder='Notes Heading...' value={title} onChange={(e) =>
          settitle(e.target.value)} />
        <textarea placeholder='Notes Desc...' value={description} onChange={(e) =>
          setdescription(e.target.value)}></textarea>
        <button type="submit" >Click me!!! Notes added..</button>

        {tasks.map((item,index) => {
          // Here item or the first parameter says the first task in array
          // Every task has two things one is title and other is description.
           return <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask}
           index ={index} />
        })}
        {/* When we use map function we hv to give unique key */}
        {/* Map function in Javascript written in curly brackets any jaascript line should be written in curly brackets*/}
      </form>
    </div>
  )
}

export default Home