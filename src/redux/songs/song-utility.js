export const filterbyName=(text,array)=>
{   

   
 var filteredArray= array.filter(songs=>
        {   console.log(text)
            return (((songs.songName).toLowerCase()).includes(text.toLowerCase())||(songs.artist.toLowerCase()).includes(text.toLowerCase))
        })
    return filteredArray

}
export const filterChosenSong=(id,array)=>
{
   
  var a= array.filter(song=>{
        return (song.songId!==id)
    })
    console.log(a)
    return a
}