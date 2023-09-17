import Routes from "routes/Routes"
import "./App.css"
import { AppProvider } from "contexts/AppContext"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <AppProvider>
      <main className="font-Poppins relative select-none">
        <div>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{ style: { borderRadius: "0px", background: "#000000", color: "#fff" } }}
          />
        </div>
        <Routes />
      </main>
    </AppProvider>
  )
}

export default App
