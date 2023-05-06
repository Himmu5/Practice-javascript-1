import { FC, useEffect, useMemo, useState } from "react";
import CheckMapper from "./CheckMapper";

type P = {};

const Checkbox: FC<P> = () => {
  const dummyData = [
    { todo: "I will go to college today", status: false },
    { todo: "I will cook food", status: false },
    { todo: "I am going to sleep", status: false },
    { todo: "Need some help", status: false },
    { todo: "going to sleep", status: false },
    { todo: "trying to help", status: false },
    { todo: "Need some help", status: false },
    { todo: "going to sleep", status: false },
    { todo: "trying to help", status: false },
  ];

  const [select, setSelect] =
    useState<{ todo: string; status: boolean }[]>(dummyData);

  function handleChange(index: number) {
    const data = [...select];
    data[index].status = !data[index].status;

    let start = -1;
    let end = -1;

    
    for (let i = 0; i < data.length; i++) {
      if (start == -1 && data[i].status == true) {
        start = i;
      }
      if (start != -1 && data[i].status == true) {
        end = i;
      }
    }

    for (let i = 0; i < data.length; i++) {
      if (i > start && i < end) {
        data[i].status = true;  
      }
    }
    console.log(data)
    setSelect(data);
  }


  return (
    <div className="flex justify-center items-center bg-yellow-400 h-screen ">
      <div className="bg-white p-6 shadow-xl">
        <CheckMapper dummyData={select} handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Checkbox;
