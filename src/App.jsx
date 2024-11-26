import {Canvas} from "@react-three/fiber"; 
import {Sky } from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import {Ground} from "./components/Ground";
import {FPV as Fpv} from "./components/FPV";
import {Player} from "./components/Player";
import {Cubes} from "./components/Cubes.jsx";
import {TextureSelector} from "./components/TextureSelect.jsx"
import Instructions from "./components/Instructions.jsx"

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}/>
        <ambientLight intensity={0.5} />
        <Fpv/>
        <Physics>
          <Cubes/>
          {/*The player component involves the sphere*/}
          <Player/>
          <Ground/>
        </Physics>
      </Canvas>
      <TextureSelector/>
      <Instructions/>
      <div className="pointer">+</div>
    </>
  )
}

export default App
