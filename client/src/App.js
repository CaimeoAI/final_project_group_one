import ForumComponent from './components/Forum/ForumComponent'
import NavBar from './components/NavBar';


function App() {
  return (
    <div className='flex flex-row w-[100vw] h-[100vh]  '>
      <NavBar/>
      <ForumComponent />
    </div>
  );
}

export default App;
