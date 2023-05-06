import { FC } from "react";

type P ={}

const Home:FC<P> = ()=>{

    const comments = [
        {text:"Love this!" , id:523423},
        {text:"Super good!" , id:823423},
        {text:"You are the best!" , id:2039842},
        {text:"Ramen in my fav food ever!" , id:123523},
        {text:"Nice Nice Nice!" , id:542328},
    ]

    const data =comments.some((e)=>{
        return e.text == "Himanshu"
    })
    console.log(data)

    const findMethod = comments.find((e)=>{
        return e.id === 823423;
    })

    console.table(findMethod);


    const getIndex = comments.findIndex((e)=>{
        return e.id === 542328;
    })
    console.log(" Here is the Index " , getIndex);

    return <div>
        
    </div>
}

export default Home;

