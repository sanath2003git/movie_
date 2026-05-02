import './App.css'

function App() {
  return (
    <>
      <div>
      <h1>Movie App</h1>
      <p>Welcome to React Journey</p>
      </div>
      <Text display="hello" />
      <Text display="world" />
    </>
      
  )
}
function Text({display}){
  return(
    <div>
      <p>
        {display}
      </p>
    </div>
  );
}

export default App
