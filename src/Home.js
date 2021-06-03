import React, { useEffect, useState } from "react";
import Block from "./Block";
import Header from "./Header";

const Home = () => {
  const [data, setData] = useState([]);
  const [sI, setSI] = useState();
  const [eI, setEI] = useState();
  const [cnt, setCnt] = useState(1);
  const [time, setTime] = useState(4000);
  const [nOfB, setNOFB] = useState(20);
  const [message, setMessage] = useState();
  const generateData = () => {
    let arr = [];
    for (let i = 0; i < nOfB; i++) {
      let obj = { height: (parseInt((Math.random() + 1) * 100) % 101) + 10 };
      arr.push(obj);
    }
    console.table(arr);
    return arr;
  };

  const shuffleData = () => {
    setData([...generateData()]);
    setEI();
    setSI();
    setCnt(1);
  };

  useEffect(() => {
    setData([...generateData()]);
  }, []);

  const bubbleSort = () => {
    console.log("Bubble Sort");
    setMessage({
      title: "Smallest First",
      des: "See,smallest is being placed first on there place.",
    });
    let arr = [...data];
    // setTimeout(() => {
    for (let i = 0; i < nOfB; i++) {
      setTimeout(() => {
        for (let j = i; j < nOfB; j++) {
          //   setTimeout(() => {
          if (arr[i].height > arr[j].height) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log("swap : ", i, j);
            setCnt((prev) => prev + 1);
            setSI((pre) => i);
            setEI((pre) => j);
            setData([...arr]);
          }
          //   }, time * j);
        }
      }, time * i);
    }
  };

  const actions = [
    {
      name: "Bubble",
      func: bubbleSort,
    },
    {
      name: "Insertion",
      func: bubbleSort,
    },
    {
      name: "Merge",
      func: bubbleSort,
    },
    {
      name: "Quick",
      func: bubbleSort,
    },
    {
      name: "Heap",
      func: bubbleSort,
    },
  ];

  return (
    <div>
      <Header actions={actions} shuffleData={shuffleData}></Header>
      {message ? (
        <div className="message">
          <div className="text-light">{message.title}</div>
          <div className="text-secondary"> {message.des}</div>
        </div>
      ) : null}
      <div className="blocks-container p-1">
        {data.map((dat, i) => (
          <Block
            {...dat}
            index={i}
            key={i + Math.random()}
            shine={i === sI || i === eI}
          ></Block>
        ))}
      </div>
      <div className="status">
        {sI ? (
          <div>
            Swapping Index : <span className="text-primary">{sI}</span> with{" "}
            <span className="text-success">{eI}</span>
          </div>
        ) : (
          "Start Swapping"
        )}
        <div>{cnt}</div>
      </div>
    </div>
  );
};

export default Home;
