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
            
          <div>- Use ESC to exit first person view</div>
          <div>- Choose other block using F1 - F8</div>
          <div>- Remove Block = Shift + Click</div>
          <div>- Jump or Fly with space</div>
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