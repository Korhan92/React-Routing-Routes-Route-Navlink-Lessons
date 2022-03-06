import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import PostList from './components/PostList';
import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import { Link,NavLink, Routes, Route } from 'react-router-dom'
import PersonDetail from './components/PersonDetail';

function App() {
  return (
    <div className="App">
      {/* App.js for Fetching
      <UserList/>
      <hr/>
      <PostList/> */}
      {/* <PersonList/>
      <PersonAdd/> */}

<Routes>
        <Route index element={<h1>Main Page with Index props</h1>} />
        <Route path='/Link1' element={<h1>Link1 Page</h1>} />
        <Route path='/Link2' element={<h1>Link2 Page</h1>} />
       

      </Routes>
      
      <Link to='/' style={{ color: "black" }}>Home Page</Link> | {"  "}
      <Link to='/Link1' style={{ color: "black" }}>  First Link</Link> | {"  "}
      <Link to='/Link2' style={{ display: "block", color: "black" }}>  Second Link</Link>
      <Link to='/PersonList' style={{ color: "black" }}>PersonList</Link> | {"  "}
      <Link to='/PersonAdd' style={{ color: "black" }}>PersonAdd</Link> | {"  "}
      <Link to='/PersonAll' style={{ color: "black" }}>Person All Components</Link>
      <NavLink to="/ActiveLink" style={({isActive})=>{
        return {margin:"1rem 0",color:isActive ? "red" : "gray"}
      }}>Active Link Test</NavLink>
     {/* <NavLink  to="/ActiveLink" className={(isActive)=>{return isActive ? "class1":"class2"}}></NavLink> */}
      <Routes>
         <Route path='/ActiveLink' element={<h1>Active Link Test</h1>} />
        <Route path='/PostList' element={<PersonList/>} />
        <Route path='/PersonAdd' element={<PersonAdd/>} />
        <Route path='/PersonAll' element={<>
        <h1>All Elements</h1>
        </>} />
        <Route path='PersonDetail/:personId' element={<PersonDetail/>}/>

      <Route path='*' element={<h1>There is nothing here!<br/><b>404 Not FOund</b></h1>}/>
      </Routes>

    </div>
  );
}

export default App;
