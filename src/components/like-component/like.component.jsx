import React from 'react'
import ActiveLike from '../../assests/active-like.png'
import Likey from '../../assests/like.png'
const Like=({LikeStatus})=>
{
return(
    <img src={LikeStatus?ActiveLike:Likey} width="18px" />
)

}
export default Like