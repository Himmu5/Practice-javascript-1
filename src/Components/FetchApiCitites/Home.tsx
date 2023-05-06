import { ChangeEvent, FC, useEffect, useState } from "react";
import Input from "./Input";
import { fetchCities } from "./Api";
import { City } from "./type";

type P = {};

const Home: FC<P> = () => {
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState<City[]>([]);
  const [data , setData ] = useState<City[]>([])

  useEffect(() => {
    fetchCities().then((res) => {
      setCities(res);
    });
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setData(filterArray());
  }

  function filterArray() {
    let temp = [...cities];
    temp = temp.filter((I) => {
      return I.city.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });
    // console.log("Temp ",temp);
    return  temp.length == 0 ? [] : temp
    
  }

  console.log("Cities ", data);

  return (
    <div className=" text-2xl text-center flex flex-col justify-center items-center my-10">
      <Input value={query} onChange={handleChange} />
      <div className="flex text-sm flex-col ">
        {data.map((obj) => {
          return <div className="px-4 py-2 bg-white ">{obj.city}</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
