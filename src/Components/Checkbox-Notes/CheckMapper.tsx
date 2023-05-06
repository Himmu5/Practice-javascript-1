import { FC } from "react";
import Todo from "./Todo";

type P = {
    dummyData:{todo: string;status:boolean}[],
    handleChange:(i:number)=>void
};

const CheckMapper: FC<P> = ({dummyData , handleChange}) => {
  return (
    <div>
      {dummyData.map((item , indx) => {
        return (
          <Todo indx={indx} item={item} handleChange={handleChange} />
        );
      })}
    </div>
  );
};

export default CheckMapper;
