import React, { useState, useEffect } from "react";
import { Container, DivCrud } from "./styles/style";
import { Header } from './components/header';
import { AddTask } from './components/add-tasks'
import { DailyTask } from './components/daily-task';
import { GeneralTask } from "./components/general-task";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Route } from 'react-router-dom';
import { TaskDetails } from './components/task-details';

const App = () => {
  const [ normaltasks, setNormaltasks ] = useState([
    {
      id: 1,
      title: "Virar Pleno",
      completed: false,
    },
    {
      id: 2,
      title: "Ganhar dinheiro",
      completed: true,
    },
  ]);


  const handleTaskClick = ( taskId ) => {
    const newTasks = normaltasks.map( task => {
      if ( task.id === taskId ) return { ...task, completed: !task.completed }

      return task;
    });
    setNormaltasks( newTasks );
  };

  const handleTaskAddition = (titleTask) => {
    const newTask = [ 
      ...normaltasks,
    {
      title: titleTask,
      id: uuidv4(),
      completed: false,
    }]

    setNormaltasks(newTask);
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = normaltasks.filter( task => task.id != taskId)

    setNormaltasks( newTasks )
  }

  useEffect( () => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
        );

        console.log(data);
    }
    fetchTasks();
  }, [])
  
  return (
    <BrowserRouter>
      <Container>              
        <DivCrud>
          <Header />
          <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={ handleTaskAddition } />
              <DailyTask normaltasks={ normaltasks } handleTaskClick={ handleTaskClick } handleTaskRemove={ handleTaskRemove }/>
            </>
          )}/>
          <Route path="/:taskTitle" exact component={TaskDetails}/>            
        </DivCrud>
        
      </Container>
    </BrowserRouter>
  )
}

export default App;

//