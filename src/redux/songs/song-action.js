export const filterSong = (text) => ({
  type: "FILTER_SONGS",
  payload: text,
});

export const filterChosenSong=(id)=>
({
   type:"FILTER_SELECTED_SONG",
   payload:id
})