import { FC, forwardRef ,useImperativeHandle } from "react";

type P ={ } 

const Child:FC<P> = forwardRef((props , ref)=>{
    
    useImperativeHandle(ref, () => ({
        log : () => {
          console.log("child function");
        }
      }));

    return <div>
        Hello Parent
    </div>
})

export default Child;