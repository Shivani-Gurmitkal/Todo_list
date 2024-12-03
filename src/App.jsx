import { useForm } from "react-hook-form";
import Card from "./Card";
import { useState } from "react";

function App(){
  let [tasks, setTasks] = useState([]);
  let {register, handleSubmit, reset} = useForm();

  let options = {
    weekday: "long",
    year: "numeric",
  };

  function taskHandler(data){
    let currentDate = new Date().toLocaleDateString('en', options); 
    setTasks([...tasks, { ...data, date: currentDate }]); 
    reset();
  }
  return (
    <>

    <form action="" className="mt-5 flex justify-center gap-3" onSubmit={handleSubmit(taskHandler)}>
      <input {...register('title')} type="text" placeholder="Title" className="p-3 rounded-md border outline-none"/>
      <input {...register('desc')} type="text" placeholder="Description" className="p-3 rounded-md border outline-none" />
      <input type="submit" value="Add Task" className="bg-black text-white rounded-md p-3 px-4"/>
    </form>

    <div className="w-full h-screen mt-32">
      {
        tasks.length > 0 ? (tasks.map((task, index) => (<Card key={index} title={task.title} desc={task.desc} date={task.date} />))) : <h1 className="text-center font-bold text-xl">No Tasks</h1>
      }
    </div>

    </>
  )
}

export default App;