export interface Pokemon {
    name: string;
    url: string;
}

export interface PokeInfo {
    name:string;
    weight:number;
    height:number;
    sprites:{
        front_default:string;
        back_default:string;
        other:{
            "official-artwork":{
                front_default:string;
            }        
        }
    }
}

export interface PokeProps {
    mainImg: string;
    subImg1: string;
    subImg2: string;
    name: string;
    height: number;
    weight: number;
}