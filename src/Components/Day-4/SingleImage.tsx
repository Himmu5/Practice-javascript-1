import { FC, useState } from "react";

type P = {
  imgUrl: string;
  Text: string;
};

const SingleImage: FC<P> = ({ imgUrl, Text }) => {
  let extraClass = "";
  const [select, setSelect] = useState(false);
  console.log(select);
  function selectItem() {
    setSelect(!select);
  }

  if(select) {
    extraClass += " scale-125 ";
  }

  return (
    <div
      className={"relative flex justify-center items-center " + extraClass}
      onClick={selectItem}
    >
      <h1 className={"font-bold text-4xl text-white absolute "}>{Text}</h1>
      <img src={imgUrl} className="h-full" alt="" />
    </div>
  );
};

export default SingleImage;
