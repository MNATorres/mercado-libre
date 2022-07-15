import "./App.css";
import Header from "./componentes/Header/Header";
import { ChakraProvider, Switch, Stack } from "@chakra-ui/react";
import Banner from "./componentes/Banner/Baner";
import Main from "./componentes/Main/Main";



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
      </ChakraProvider>
      <Banner />
      <Main />
      
        
    <Switch size="md" />
    
  
    </div>
  );
}

export default App;
