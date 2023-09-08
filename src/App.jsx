import React, { useState } from "react";
import { Container, DivCrud } from "./styles/style";
import { Header } from './components/header';
import { InputAndButton } from './components/inputAndButton'
import { DailyTask } from './components/daily-task';

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
          <DailyTask normaltasks={ normaltasks }/>
        </DivCrud>
        
      </Container>
  )
}

export default App;

//<Header />
//<InputAndButton />