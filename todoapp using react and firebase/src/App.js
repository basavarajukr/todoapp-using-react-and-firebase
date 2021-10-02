import './App.css';
import AddNewTodo from './components/AddNewTodo';
import Calendar from './components/Calendar';
import EditTodo from './components/EditTodo';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Projects from './components/Projects';
import User from './components/User';
import Todos from './components/Todos';
function App() {
  return (
   <div className="App">
     <Sidebar>
          <User/>
          <AddNewTodo/>
          <Calendar/>
          <Projects/>
     </Sidebar>
     <Main>
        <Todos/>
        <EditTodo/>
     </Main>
     
   </div>
  );
}

export default App;
