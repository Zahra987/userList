
import './App.css';
import Main from "./components/main";
const users = [
    1,2,3,4,5,6,7,8,9
]
function App() {
  return (
   <Main users={users} />
  );
}

export default App;
