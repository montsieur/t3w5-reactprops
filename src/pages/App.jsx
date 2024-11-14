// import logo from '../logo.svg';
import '../stylesheets/App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';

function App() {
  return (
    <div className="App">
        <Header />
        <FoodList />
        <Footer />
    </div>
  );
}

export default App;
