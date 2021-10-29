
import './App.css';
import Header from "./merge/src/Components/header"
import Timer from "./merge/src/Components/Timer"
import Nav from "./merge/src/Components/nav"
import Stages from "./merge/src/Components/Stages"
import CountDown from "./merge/src/Components/countDown/coundown"
import Footer from "./merge/src/Components/footer/footer"

function App() {
  return (
    <div className="App">
<Nav />
<Header />
<CountDown timeTillDate="8 31 2019, 9:00 am" timeFormat="MM DD YYYY, h:mm a" />
<Timer />
<Stages />
<Footer/>
    </div>
  );
}

export default App;
