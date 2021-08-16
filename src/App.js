import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Carousel from "./pages/Carousel";
import ListingPage from "./pages/ListingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={Carousel} />
        <Route exact path="/anime" component={ListingPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
