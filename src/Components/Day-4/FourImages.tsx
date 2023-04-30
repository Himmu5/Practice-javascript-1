import { FC } from "react";
import SingleImage from "./SingleImage";
import { UI_Data } from "../UI-Data/Day-4-Data";

type P = {};

const FourImages: FC<P> = () => {
  return (
    <div className="flex h-screen ">
      {UI_Data.map((item) => {
        return <SingleImage imgUrl={item.imgUrl} Text={item.Text} />;
      })}
    </div>
  );
};

export default FourImages;
