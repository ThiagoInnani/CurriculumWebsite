import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-600">
      <h1 className="text-4xl font-bold">Te amo</h1>
      <pre className="text-xl font-mono leading-none mt-4 text-center">
        {`
******     ******
**      ** **      **
**        **        **
**                  **
**              **
**          **
**      **
**  **
**
          `}
      </pre>
      <h2 className="text-3xl font-bold mt-4">Milena</h2>
    </div>
  );
}

export default App;
