import { usePlane} from "@react-three/cannon";
import { groundTexture} from "../images/texture";
import { useStore} from "../hooks/useStore";
import { shallow} from "zustand/shallow"

export function Ground(){
    const [ref]= usePlane(()=>({
        rotation:[-Math.PI/2, 0, 0],
        position:[0, -0.5, 0]
    }))

    const addCube = useStore(state => state.addCube, shallow)

    const handleClickGround = event =>{
        //Esto es para evitar que atraviese el suelo (maya)
        event.stopPropagation()
        console.log(event)
        const [x, y, z] = Object.values(event.point).map(n=>Math.ceil(n));
        addCube(x, y, z)
    }

    return(
        <mesh onClick={handleClickGround}  ref={ref} >
            <planeGeometry attach='geometry' args={[1000, 1000]} />
            <meshStandardMaterial attach="material" 
            map={groundTexture} />
        </mesh>
    )
 }