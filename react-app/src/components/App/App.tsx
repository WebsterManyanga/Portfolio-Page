import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import {useState} from 'react';

function App() {

  const [flip, setFlip] = useState(false);

  return (
    <>
      <Header cardFlip={setFlip}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
