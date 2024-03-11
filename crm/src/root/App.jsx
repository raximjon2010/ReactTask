// import Register from "../Componets/register/register"
// import Reset from "../Componets/resetPasword/Reset"
import Analitika from "../componets/Analitika"
import AnalitikaProvider from "../context/Analitika"
function App() {
  return (
    <div>
      {/* <Register/> */}
      {/* <Reset/> */}
      <AnalitikaProvider><Analitika/></AnalitikaProvider>
      </div>
  )  
}

export default App
