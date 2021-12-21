import axios from "axios";

export const fetchPosts = () => async(dispatch,getState) => {
    
    dispatch({type:"FETCH_POSTS_REQUEST"});

    try{
        const response = await axios.get("http://worldcup.sfg.io/matches");
        console.log(response.data);
        console.log("In action.js");
        dispatch({type:"FETCH_POSTS_SUCCESS",
        payload:response.data
        });
    }
        catch(error){
            dispatch({type:"FETCH_POSTS_FAILURE",error});
        }
}
    
