import { useRef } from "react";

function useOnDraw(){

    const canvasRef = useRef(null);

    function setCanvasRef(ref:any){
        if(!canvasRef) return ;
        canvasRef.current = ref;
        initMouseListener();
    }

    function initMouseListener(){
        const mouseMoveListener = (e:any) => {
            console.log({x:e.clientX , y :e.clientY});
        }
        window.addEventListener('mousemove' , mouseMoveListener)
    }

    return setCanvasRef;

}
export default useOnDraw;