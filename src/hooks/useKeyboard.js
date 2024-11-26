import {useState, useEffect} from "react"

/*This object is a constant that will serve as 
an orientation map */
const ACTION_KEYBOARD_MAP={
    KeyW:"moveForward",
    KeyS:"moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space:"jump",
    Digit1:"dirt",
    Digit2:"grass",
    Digit3: "gravel",
    Digit4:"leocraft",
    Digit5:"log",
    Digit6:"magma",
    Digit7:"rawWood",
    Digit8: "wood" 
}

export const useKeyboard = ()=>{
    const [actions, setActions]= useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        grass: false,
        dirt: false,
        magma: false,
        wood: false,
        rawWood: false,
        gravel: false,
        log: false,
        leocraft:false
    })

    /*useEffect is used to handle the mounting and unmounting in the app,
     and also to clean the listener before every re-rendering*/
    useEffect(()=>{
        //this function is activated when the key is pushed
        const handleKeyDown = event =>{
            const {code}= event;
            const action = ACTION_KEYBOARD_MAP[code]
            if(action){
                setActions(prevActions=>({
                    ...prevActions, 
                    [action]:true
                }))
            }
        }
        //This function is activated when a key is released
        const handleKeyUp = event =>{
            const {code}= event;
            const action = ACTION_KEYBOARD_MAP[code]
            //Here the if checks if there's something inside action
            if(action){
                setActions(prevActions=>({
                    ...prevActions,
                    [action]:false
                }))
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp)
        return()=>{
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        }
    },[])

    return actions;
}

