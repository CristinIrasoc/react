import React from "react";
import {ISongInfo, Song} from "../Song/Song";
import styles from "./Playlist.module.scss";
import { IPrimary, IProps } from "../../slices/Song";
import { SliceLike, SliceZone, SliceZoneLike } from "@prismicio/react";
import {components} from "../../slices";
const songList =[
    {
        imageLink:"./assets/h.jpg",
        title: "Haunted",
        album:"Laura Les",
        duration: "1:42"
    },
    {
        imageLink:"./assets/gone.jpg",
        title: "Gone",
        album:"Rose",
        duration: "3:27"
    },
    {
    imageLink:"./assets/body.jpg",
    title: "Body",
    album:"Rosenfeld",
    duration: "2:27"
    },
];
interface IPlaylist {
    slices: SliceZoneLike<SliceLike<string>>
    setSong: (data: IPrimary) => void;
}
export const Playlist = (props: IPlaylist) =>
{
return ( 
<div className={styles.playlist}>

    <div className={styles["table-header"]}>
    
<span className={styles["song-nr"]}>
    #
</span>
<span className={styles["song-cover"]}>
    Cover
</span>
<span className={styles["song-title"]}>
    Title
</span>
<span className={styles["song-album"]}>
    Album
</span>
<span className={styles["song-duration"]}>
    Duration
</span>
    </div>
    <div id="songs-wrapper" className={styles["songs"]}> 
    {/* <Song index={1} songInfo={songList[0]} /> 
    {songList.map(function(details,index)
    {
        return <Song index={index + 1} songInfo={details} />

    }) */}
    <SliceZone slices={props.slices} components={components} />
    </div>
</div>
);
};