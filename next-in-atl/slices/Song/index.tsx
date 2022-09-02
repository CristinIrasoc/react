import React from 'react'
import {PrismicRichText} from '@prismicio/react'
import style from "./Song.module.scss";
interface IRichText{
  type:string;
  text:string;
  spans:string;
}
export interface IPrimary{
  title: string;
  artist: string;
  cover: IImage;
  songLink:{
    link_type: string;
    url: string;
  };
}
interface IImage{
  dimension: {
    width: number;
    height: number;
  };
  alt: string|null;
  copyright: string|null;
  url: string;
  
}
 export interface IProps {
  slice:{primary:IPrimary};
}

const Song = ({ slice }:IProps) => {
  console.log(slice);

  return (

        <div className={style["melody"]}>
        <span className={style["song-nr"]}>
            1
        </span>
        <img src={slice.primary.cover.url} className={style["song-cover"]}>
           </img>
        <span className={style["song-title"]}>
           {slice.primary.title}
        </span>
        <span className={style["song-album"]}>
        {slice.primary.artist}
        </span>
        <span className={style["song-duration"]}>
        -
        </span>
    </div>
  ); 
}
  


export default Song