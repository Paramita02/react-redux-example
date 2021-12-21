
const initialState = {
    items:[],
    loading:false,
    error:null
}

//const initialState = []
const postReducer = (state = initialState,action) =>{
    console.log("Action::"+action);
    switch(action.type){
        case 'FETCH_POSTS_REQUEST' :
            return {
                ...state,
                loading:true,
                error:null
            };
        
            case 'FETCH_POSTS_SUCCESS' :
            return {
                ...state,
                loading:false,
                items:action.payload.filter((e)=>
                    e.home_team_country === "USA" || e.away_team_country === 'USA')
            };
            case 'FETCH_POSTS_FAILURE' :
            return {
                ...state,
                loading:false,
                error:action.error
                
            };
        
        default:
            return state;
        }
        
}

export default postReducer;