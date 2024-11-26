import {create} from "zustand";
import {nanoid} from "nanoid";

const initialWorld =[{
    id: nanoid(), pos:[-2, 0, -8], texture:"leocraft"
},
{
    id: nanoid(), pos:[-1, 0, -7], texture:"wood"
},
{
    id: nanoid(), pos:[-1, 1, -7], texture:"leocraft"
},
{
    id: nanoid(), pos:[0, 0, -6], texture:"wood"
},
{
    id: nanoid(), pos:[0, 1, -6], texture:"wood"
},
{
    id: nanoid(), pos:[0, 2, -6], texture:"leocraft"
},]

export const useStore = create(set=>({
    texture:"dirt",
    cubes:initialWorld,
    addCube:(x, y, z)=>{
        set(state=>({
            cubes:[...state.cubes,
                {id:nanoid(),
                texture:state.texture,
                pos:[x, y, z]}
            ]
        })
        )
    },
    removeCube:(x, y, z)=>{
        set(state=>({
            cubes: state.cubes.filter(cube=>{
                const[X, Y, Z] = cube.pos
                return X!==x || Y!==y || Z!==z
            })
        }))
    },
    setTexture: (texture)=>{
        set(() => ({ texture }));
    },
    saveWorld: ()=>{},
    resetWorld: ()=>{ 
        set(()=>({cubes: initialWorld}))
    },
    emptyWorld: ()=>{
        set(()=>({cubes: []}))
    }
}))