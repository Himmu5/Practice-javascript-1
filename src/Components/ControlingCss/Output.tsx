import { FC, memo } from "react";

type P = {
  color: string;
  padd:number,
  blurVal:number
};

const Output: FC<P> = ({ color , padd , blurVal }) => {
    console.log(color);
//     function ascii_to_hexa(str:string)
//   {
// 	var arr1 = [];
// 	for (var n = 0, l = str.length; n < l; n ++) 
//      {
// 		var hex = Number(str.charCodeAt(n)).toString(16);
// 		arr1.push(hex);
// 	 }
// 	return arr1.join('');
//    }
//   let colorHax = ascii_to_hexa(color);
//    console.log(colorHax);

  return (
    <div className={`border-4  max-w-4xl mx-auto my-20 w-full`} style={{background:color , padding:padd}}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" style={{ filter:`blur(${blurVal}px)` }} className="w-full" alt="" />
    </div>
  );
};

export default memo(Output);
