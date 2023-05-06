import { CanvasHTMLAttributes, FC, useEffect, useRef } from "react";

type P = {} & CanvasHTMLAttributes<HTMLCanvasElement>;

const Canvas: FC<P> = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canva = canvasRef.current;
    canva.width= window.innerWidth * 2;
    canva.height = window.innerWidth * 2;
    canva.style.width = `${window.innerWidth}px`;
    canva.style.height = `${window.innerHeight}px`;


    const context = canva.getContext("2d");
    context.scale(2 , 2);
    context.lineCap = "round"
    context.strokeStyle = "black"
    context.lineWidth = 5
    context.current = context;

  }, []);

  const startDrawing = () => {
    
  };

  const finishDrawing = () => {};

  const draw = () => {};

  return (
    <div className="flex items-center justify-center h-screen">
      <canvas height={'400px'} width={"400px"} style={{border : "4px solid black "}}>

      </canvas>
    </div>
  );
};

export default Canvas;
