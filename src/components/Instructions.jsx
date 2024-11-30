import React, {useState} from 'react';
import {useStore} from  "../hooks/useStore";

function Instructions() {
    const resetWorld = useStore(state=> state.resetWorld)
    const emptyWorld = useStore(state=> state.emptyWorld)
    const [isOpen, setIsOpen] = useState(false)

    const handleClean = (e) =>{
        e.stopPropagation()
        resetWorld()
    }
    const handleEmpty = (e) =>{
        e.stopPropagation()
        emptyWorld()
    }

    const handleInfo=(e)=>{
      e.stopPropagation()
      setIsOpen(true)
    }

    function InfoTab() {
      return(
        <div className="info">
          <div style={{textAlign:"center", 
            fontSize:"25px", 
            marginBottom:"15px"}}>Information</div>
          
          <div>1- Select other blocks using the keyboard<br></br>upper numbers.</div><br></br>
          <div>2- Use A, W, S, D to move around.</div><br></br>
          <div>3- Use ESC to exit first person view.</div><br></br>
          <div>4- Remove Block = Shift + Click.</div><br></br>
          <div>5- Jump or Fly with space.</div><br></br>
          <div>
            <button style={{marginLeft:"90%"}} 
              className="button"
                onClick={(e)=> {
                e.stopPropagation();
                setIsOpen(false);
            }}>x</button>
          </div>
          
        </div>
      )
    }

  return (
    <div className="instructions">
        <button className="button" onClick={handleClean}>Reset World</button>
        <button className="button" onClick={handleEmpty}>Clean World</button>
        <button className="button" onClick={handleInfo}>Game Info</button>
        {isOpen ? <InfoTab/> : null}
    </div>
  )
}

export default Instructions