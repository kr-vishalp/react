import React,{useState} from 'react'

function Usestate1() {

    const [count1, setCount1] = useState(0)
    // function fiveinc(){
    //     for(var i=0;i<5;i++){
    //         setCount1(count1+1);
    //     }
    // }   when  we call this function at that time we are not able to count inc 5 time 
    // its only inc 1 time 
    // we can not direct access hooks in function or condition 
    // but if we remember precount then its posible 

    function fiveinc(){
        for(var i=0;i<5;i++){
            setCount1(prevcount =>prevcount+1)
        } // now its inc 5 time 
    }
  return (
    <div>
     <div>{count1}</div>
    
     <botton onClick={()=>setCount1(count1+1)}>click for inc</botton>
     <botton onClick={()=>setCount1(count1-1)}>click for dec</botton>
     <botton onClick={()=>fiveinc()}>click for 5inc</botton>
   </div>
  )
}

export default Usestate1