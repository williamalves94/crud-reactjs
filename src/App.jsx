import React, { useState } from "react";
import { Container, DivCrud } from "./styles/style";
//import { Header } from './components/header';
import { InputAndButton } from './components/inputAndButton'
import { DailyTask } from './components/daily-task';
import { GeneralTask } from "./components/general-task";

const App = () => {
  const [ normaltasks, setNormaltasks ] = useState([
    {
      id: 1,
      title: "Ser Pleno",
      completed: false,
    },
    {
      id: 2,
      title: "Ganhar dinheiro",
      completed: true,
    },
  ]);
  
  return (
      <Container>        
        <DivCrud>
          <InputAndButton />
          <DailyTask normaltasks={ normaltasks }/>
          <GeneralTask normaltasks={ normaltasks }/>
        </DivCrud>
        
      </Container>
  )
}

export default App;

//<Header />
//