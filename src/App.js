
import "./App.css"

function App() {

  const arr=["Services", "Projects", "About"]

  return (
    <div className="App">
      <div className='container'>

        <div className='navbar'>
          <h4>LOGOBAKERY</h4>

          <div className="mid">

            {arr.map((e)=>{
              return <Arr arr= {e}/>
            })}
          </div>
          <button className="right">Contact</button>
        </div>
      </div>
  
    </div>
  );
}
function Arr(props){
  return <a href="/">{props.arr}</a>
}

export default App;
