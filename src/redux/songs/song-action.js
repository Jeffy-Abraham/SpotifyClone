import Axios from 'axios'

export const filterSong = (text) => ({
  type: "FILTER_SONGS",
  payload: text,
});


export const filterChosenSong=(id)=>
({
   type:"FILTER_SELECTED_SONG",
   payload:id
})




export const makeApiReq = () => {

  return (dispatch) => {
 
    Axios.get(
     'https://spotify-clone-react-app.s3-eu-west-1.amazonaws.com/data.json'
    )
      .then((data ) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
};