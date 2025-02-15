import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, Desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2 className="font-bold text-3xl">No Task Available</h2>;

  if(mainTask.length>0){
  renderTask = mainTask.map((t, i) => {
    return (
      <li key={i}>
        <div className="flex bg-blue-200 p-6 rounded-lg  items-center justify-between mb-5">
          <h5 className="text-3xl font-bold">{t.title}</h5>
          <p className="text-xl ">{t.Desc}</p>
          <button className="bg-red-500 p-3 rounded font-semibold" onClick={()=>{
            deleteHandler(i)
            }}>Delete</button>
        </div> 
       
      </li>
     
    );
  });
  }
  return (
    <>
      <div>
        <h1 className="bg-black w-full text-white text-5xl font-bold px-7 py-9 text-center  ">
          Get Things done!
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <form onSubmit={submitHandler}>
          <input
            className="border-2 px-6 py-3 m-5 border-gray-600 text-2xl font-semibold rounded-lg"
            type="text"
            placeholder="Enter Your Title "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="border-2 px-6 py-3 m-5 border-gray-800 text-2xl font-semibold rounded-lg"
            type="text"
            placeholder="Enter Your Desccription"
            value={Desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button className="px-5 py-3 bg-slate-700 text-white text-1xl font-bold active:scale-95 hover:bg-slate-600 rounded">
            Add Task
          </button>
        </form>
      </div>
      <hr />
      <div className="p-8 bg-slate-200 m-5 rounded-lg">
       <ul>
         {renderTask}
         </ul>
     </div>
    </>
  );
};

export default App;
