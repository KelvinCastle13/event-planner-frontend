import axios from "axios";
import { Header } from "./Header";
import { EventsPage } from "./EventsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <EventsPage />
      <Footer />
    </div>
  )
}

export default App;