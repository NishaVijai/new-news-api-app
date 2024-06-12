import { useState } from 'react';
import NavBar from './components/NavBar';
import NewsBoard from './components/NewsBoard';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <section>
      <NavBar setCategory={setCategory} />
      <NewsBoard category={category} />
    </section>
  );
};

export default App;
