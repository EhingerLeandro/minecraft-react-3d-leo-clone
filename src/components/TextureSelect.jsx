import React from 'react'
import * as images from "../images/image.js";
import {useStore} from "../hooks/useStore.js";
import {useState, useEffect} from "react";
import {useKeyboard} from "../hooks/useKeyboard.js";
import {shallow} from "zustand/shallow"

export function TextureSelector() {

    const [visible, setVisible] = useState(false);
    const texture = useStore(state => state.texture, shallow);
    const setTexture = useStore(state => state.setTexture, shallow);

    const { dirt, wood, rawWood, log, gravel,
      magma, leocraft, grass} = useKeyboard()
        

    useEffect(()=>{
        const visibility = setTimeout(()=>{
            setVisible(false);
        }, 2000)
        setVisible(true);
        return ()=> clearTimeout(visibility)
    }, [texture])

    useEffect(()=>{
        const options = {dirt, wood, rawWood, log, gravel,
            magma, leocraft, grass };

        const selectedTexture = Object.entries(options)
            .find(([texture, isEnabled]) => isEnabled)
            
        if(selectedTexture){
            const [textureName] = selectedTexture
            setTexture(textureName);
        }
        
        console.log(selectedTexture)

    }, [dirt, wood, rawWood,  log, gravel,
         magma, leocraft, grass])


    if(!visible){
        return null
    }

    return(
        <div className="palette">
            {
                Object.entries(images).map(([imageKey, imageSource], index)=>(
                    <img className={ texture === imageKey? "pickedBlock" :"pictureBlock"} 
                    key={imageKey}
                    src={imageSource}
                    alt={imageKey}/>
                ))
            }
        </div>
    )

}

