import { FC , useRef } from "react";
import Child from "./ChildRef";

type P ={}
export type R ={
    log:()=>void;
}

const Parent:FC<P> = ()=>{
    const ref = useRef<R>(null);
    
    
    return <div className="bg-red-500 " onClick={ref.current?.log!}>
        <Child ref={ref} />
    </div>
}

export default Parent;