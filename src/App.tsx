import './App.css'

function App() {
  return (
    <div className="app">
      <div className="sidebar" role="complementary">
        <h2>Widgets</h2>
        <ul>
          <li>Widget 1</li>
          <li>Widget 2</li>
          <li>Widget 3</li>
        </ul>
      </div>
      <div className="main-content" role="main">
        <div className="canvas">
          <p>This is the canvas. Drag and drop widgets here.</p>
        </div>
        <button className="show-code-btn">Show Code</button>
      </div>
    </div>
  )
}

export default App
