import './song-list-style.css'
import {cover} from '../../components/music-card-component/coverImage'
const SongCard=({name})=>
{return( <div className='song-card-container'>
<div style={{display:'flex'}}>  
<div  ><img width='72px'height='75px' height='100%' src={cover[Math.floor(Math.random()*5)]}></img></div>
<div style={{padding:'20px'}}>{name}</div>
</div>  
<div></div>
</div>)
   

}
export default SongCard