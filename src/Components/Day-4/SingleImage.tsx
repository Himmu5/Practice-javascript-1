import { FC, useState } from "react";

type P = {
  imgUrl: string;
  Text: string;
};

const SingleImage: FC<P> = ({ imgUrl, Text }) => {
  let extraClass = "";
  const [select, setSelect] = useState(false);

  function selectItem() {
    setSelect(!select);
  }

  if(select) {
    extraClass = " flex-1  ";
  }

  return (
    <div
      className={"relative flex justify-center items-center duration-300  ease-in transition-all " + extraClass}
      onClick={selectItem}
    >
      <h1 className={"font-bold text-4xl text-white absolute "}>{Text}</h1>
      <img src={imgUrl} className="h-full object-cover " alt={Text}/>
    </div>
  );
};

export default SingleImage;
