import {grass, dirt, gravel, log, magma, 
        rawWood, wood, leocraft} from "./image";

import {NearestFilter, RepeatWrapping, 
        TextureLoader} from "three";

const groundTexture = new TextureLoader().load(grass);
const grassTexture = new TextureLoader().load(grass);
const dirtTexture = new TextureLoader().load(dirt);
const gravelTexture = new TextureLoader().load(gravel);
const logTexture = new TextureLoader().load(log);
const magmaTexture = new TextureLoader().load(magma);
const rawWoodTexture = new TextureLoader().load(rawWood);
const woodTexture = new TextureLoader().load(wood);
const leocraftTexture = new TextureLoader().load(leocraft);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

grassTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
gravelTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
magmaTexture.magFilter = NearestFilter;
rawWoodTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
leocraftTexture.magFilter = NearestFilter;

groundTexture.repeat.set(1000, 1000);

 export {groundTexture, grassTexture, dirtTexture, gravelTexture, logTexture,
         magmaTexture, rawWoodTexture, woodTexture, leocraftTexture };
    