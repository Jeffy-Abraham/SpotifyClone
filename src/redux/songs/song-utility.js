export const filterbyName=(text,array)=>
{   

   console.log(text)
 var filteredArray= array.filter(songs=>
        {   console.log(text)
            return ((songs.songName).toLowerCase().includes(text))
        })
    return filteredArray

}