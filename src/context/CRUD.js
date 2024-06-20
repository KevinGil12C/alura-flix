import { createContext, useContext, useState } from "react";

export const VideosContext = createContext()

export default function VideosProvider({children}){

}
export function useVideosContext(){
    const {video, setVideo} = useContext(VideosContext)
    const {categoria, setCategoria} = useContext(VideosContext)

}