import Routes from "routes/Routes"
import "./App.css"
import { AppProvider } from "contexts/AppContext"

function App() {
  return (
    <AppProvider>
      <main className="font-Poppins relative select-none">
        <Routes />
      </main>
    </AppProvider>
  )
}

export default App
