import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"      

function App(){
    return <div className="text-center">
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
    </div>
}
export default App;