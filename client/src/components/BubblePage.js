import React, { useState, useEffect } from "react";
import { apiAuth } from '../utils/auth'
import CardColors from './CardColors';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import '../styles/styles.scss'

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    apiAuth()
      .get('/colors')
      .then((res) => setColorList(res.data))
  }, [])

  if (!colorList) {
    return <span data-testid='loading'>loading</span>
  }

  return (
    <>
    <div className="App">
      <ColorList data-testid="colorList"
      colors={colorList}
      updateColors={setColorList} 
      />
      <Bubbles data-testid="bubbles"
      colors={colorList} />
      </div>
    </>
  );
};

export default BubblePage;
