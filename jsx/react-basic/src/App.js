// Project root component.

const count = 100

function getName() {
  return 'Jack'
}

// APP -> index.js -> public/index.html(root)
function App() {
  return (
    <div className="App">
      This is App.
      
      {/* Passing a string by using quotes */}
      {'This is message'}
      
      {/* Javascript variable */}
      {count}
      
      {/* Function call */}
      {getName()}
      
      {/* Method call */}
      {new Date().getDate()}

      {/* Using Javascript object*/}
      <div style={{color: 'red'}}>This is div.</div>
    </div>
  );
}

export default App;
