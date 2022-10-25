import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import Whoami from './components/Whoami';
import Programming from './components/Programming';
import CGI from './components/CGI';
import Lines from './components/Lines';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='container align-items-center'>
        <Header></Header>
        <Hero></Hero>
        <Whoami></Whoami>
        <Programming></Programming>
        <CGI></CGI>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
    </>
  );
}

export default App;
