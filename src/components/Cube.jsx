import{useBox} from "@react-three/cannon";
import * as textures from "../images/texture";
import {useState} from "react";
import {useStore} from "../hooks/useStore";
import {shallow} from "zustand/shallow";


export const Cube = ({id, position, texture})=>{
    
    const removeCube = useStore(state => state.removeCube, shallow)
    const activeTexture = textures[`${texture}Texture`]
    const [isHovered, setIsHovered] = useState(false)
    
    const [ref] = useBox(()=>({
        type: "Static",
        position
    }))

    return(
        <mesh ref={ref}
        onClick ={e=>{
            e.stopPropagation()
            if(e.shiftKey){
                const [x, y ,z] = ref.current.position
                removeCube(x, y, z)
            }
        }}
        onPointerMove={e=>{
            e.stopPropagation()
            setIsHovered(true)
        }}
        onPointerOut={(e)=>{
            e.stopPropagation()
            setIsHovered(false)
        }}>
            <boxGeometry attach="geometry" />
            <meshStandardMaterial
            color={isHovered? "gray" : "white"}
            transparent 
            map={activeTexture} 
            attach="material" />
        </mesh>
    )
}

