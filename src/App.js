
// import components
import Nav from './components/Nav'
import Footer from "./components/Footer";

//import react router dom
import {Route, Switch} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Single from './pages/Single'
import Works from './pages/Works'

//styles
import GlobalStyles from './styles/GlobalStyles';
import {Site} from './styles/Common'

function App() {
  return (
    <>
      <GlobalStyles />
      <Site>
        <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/works" component={Works} />
            <Route path="/works/:id" component={Single} />
          </Switch>
        <Footer />
      </Site>
      
    </>
  );
}


export default App;
