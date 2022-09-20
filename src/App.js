import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery'


function App() {
  const [categories] = useState([
    {
      name: 'comerical',
      description: 'Photos of grocery stores, food trucks, and other commerical projects',
    },
    { name: 'portraits', description:'Portraits of people in my life'},
    { name:'food', description:'Delivious delicacies'},
    { name: 'landscape', description: ' Fields, farmhouses, waterfalls, and the beauty of nature'},
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
  <div>
    <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      />
    <main>
      <Gallery />
      <About />
    </main>
  </div>
  );
}

export default App;
