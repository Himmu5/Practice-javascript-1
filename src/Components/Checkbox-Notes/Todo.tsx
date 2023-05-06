import { FC } from "react";

type P = {
  item: { todo: string , status:boolean };
  handleChange: (indx: number) => void;
  indx: number;
};

const Todo: FC<P> = ({ item, handleChange, indx }) => {
    let extraClass = "";
    if(item.status){
        extraClass = " line-through "
    }
  return (
    <div>
      <div className="  flex items-center gap-1 border-black border-b-2">
        <input
          type="checkbox"
          checked={item.status}
          onChange={() => handleChange(indx)}
          className=" border border-l-2"
        />
        <div className="p-2  w-60 border-l-2 border-black">
          <p className={""+extraClass}>{item.todo}</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
