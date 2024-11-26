import {useSphere} from "@react-three/cannon";
import {useFrame, useThree} from "@react-three/fiber";
import {Vector3} from "three";
import {useEffect, useRef} from "react";
import {useKeyboard} from "../hooks/useKeyboard";

const CHARACTER_SPEED = 2;
const CHARACTER_JUMP_FORCE = 4;

export const Player = ()=>{
    const{moveBackward, moveForward, jump,
        moveLeft, moveRight} = useKeyboard();

    //Here it access the CONTEXT (general) of three.js 
    const {camera}= useThree();
    /*This part creates a sphere (not graphically),
    it has physics but is invisible*/
    const [ref, api]= useSphere(()=>({
        mass: 1,
        type: "Dynamic",
        position: [0, 10, 0],
        // material: { friction: 1000, restitution: 0 }
    }) )

    const pos = useRef([0, 0, 0])
    useEffect(()=>{
        /*This is related to the sphere api and it transfers the information 
        about the position to "pos" which is inside an useRef */
        api.position.subscribe( p =>{
            pos.current= p
        })
    },[api.position])

    const vel = useRef([0, 0, 0])
    useEffect(()=>{
        api.velocity.subscribe( v =>{
            vel.current= v
        })
    },[api.velocity])

    useFrame(()=>{
        camera.position.copy(
            new Vector3(
                pos.current[0],
                pos.current[1],
                pos.current[2]
            )
        )
    })

    const direction = new Vector3();
    const frontVector = new Vector3(
        0, 
        0, 
        (moveBackward? 1: 0) - (moveForward? 1: 0))
    const sideVector = new Vector3(
        (moveLeft? 1: 0) - (moveRight? 1: 0),
        0,
        0)

    direction.subVectors(frontVector, sideVector)
    .normalize()
    .multiplyScalar(CHARACTER_SPEED)
    .applyEuler(camera.rotation);

    api.velocity.set(
        direction.x,
        vel.current[1],
        direction.z
    )

    if(jump /*&&  Math.abs(vel.current[1]) <0.05*/){
        api.velocity.set(
            vel.current[0],
            CHARACTER_JUMP_FORCE,
            vel.current[2]
        )
    }

} 

