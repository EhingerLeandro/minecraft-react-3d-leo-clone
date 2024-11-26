// import React from 'react';
import { useStore } from "../hooks/useStore.js";
import {shallow} from "zustand/shallow";
import {Cube} from "./Cube.jsx"

export const Cubes =()=> {
  
  /* Esta versión generaba un bucle infinito
  const [cubes]= useStore(state=> [state.cubes]); */

  const cubes = useStore((state) => state.cubes, shallow);

  return cubes.map(({id, pos, texture})=>(
    //This Cube is the singular component
    <Cube key={id} 
    position={pos} 
    texture={texture}/>
  
  )) 
}

