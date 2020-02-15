import React, { useState } from 'react';

import Layout from './components/Layout/Layout';
import Banner from './components/Banner/Banner';
import Button from './components/Button/Button';

import Controls from './components/Controls/Controls';

import './App.css';

function App({ ...props }) {
  
  const {
    title="Messing with React",
    imageUrl = [
      "https://wallpaperaccess.com/full/187163.jpg",
      "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
      "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg"
    ],
    btnName="Say hello to my little friend",
    myEvent= () => {
      setIsClicked(isClicked = true);
    },

    changeImagePrev = () => {
      let beginningArr = isFirst !== 0 ? goNext(isFirst -1) : null;
      return beginningArr;
    },

    changeImageNext = () => {
        console.log("CLICKED NEXT");
        goNext(isFirst + 1)
    }

  } = props

  let [isClicked, setIsClicked ] = useState(false);
  let [isFirst, goNext] = useState(0);

  return (
    <div className="App">
        <Layout>
          <Banner image={`${imageUrl[isFirst]}`} title={ title }>
            <Button text={ isClicked ? "clicked" : btnName } click={ myEvent } />
            <Controls 
              controlA = { changeImageNext }
              controlB = { changeImagePrev }
            />
          </Banner>
        </Layout>
    </div>
  );
}

export default App;
