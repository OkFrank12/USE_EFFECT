import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import img1 from ""
// import img2 from ""
// import img3 from ""
// import img4 from ""

const Hero = () => {
  const [counter, setCounter] = useState<number>(0);

  // const images = [img1, img2, img3, mg]

  const onAdd = () => {
    setCounter(counter + 1);
  };

  const onRemove = () => {
    setCounter(counter - 1)
  }
  useEffect(() => {
    setInterval(() => {
      setCounter(el => {
        return el + 1;
      })
    }, 5000);
  }, []);
  return (
    <div>
      <div onClick={onAdd}>+</div>
      <div>{counter}</div>
      <div onClick={onRemove}>-</div>
    </div>
  );
};

export default Hero;

const Container = styled.div``;

const Main = styled.div``;
