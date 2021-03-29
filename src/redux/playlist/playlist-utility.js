import {getMonth} from '../../data'
export const getPlayListDetail=(id,playlists)=>

{
    var arr=(playlists.filter(playlist=>
        {
            return playlist.PlayList_id===id
        }))
    

        return arr[0]

}

export const pushSongtoarray=(currentPlayLists,payload)=>{
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    payload['DateAdded']=day + " " + getMonth(month) + " " + year
    console.log(payload)
    currentPlayLists['Songs']=[...currentPlayLists['Songs'],payload]
    
    return currentPlayLists 
}