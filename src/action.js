import axios from "axios";

export const fetchPosts = async () => {    
    
    const response =await  axios.get("http://worldcup.sfg.io/matches");

    console.log(response.data);

    return {
        type : "FETCH_POSTS",
        payload:response.data
    }
        
}
    
