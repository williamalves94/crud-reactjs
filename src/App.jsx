import React from "react";
import { Container, DivCrud } from "./styles/style";
import { Header } from './components/header';
import { InputAndButton } from './components/inputAndButton'

const App = () => {
  
  return (
      <Container>        
        <DivCrud>
          <Header />
          <InputAndButton />
        </DivCrud>
        
      </Container>
  )
}

export default App;
