import {PointerLockControls} from "@react-three/drei";
import {useThree} from "@react-three/fiber";

export function FPV (){
    const {camera, gl} =useThree();

    return (
    /*This pointerLock... allows to lock the pointer in the center of the screen,
    so when the pointer tries to be moved, it only changes the view,
    this only works to create a first person experience.*/
    <PointerLockControls
    args={[camera, gl.domElement]}/>  
    )
}