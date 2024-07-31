import instance from "../../AxiosInstance/axiosinstance";

// let feedBacks;

// await instance.get("FeedBack/GetUserFeedBack").then((res)=>{
//     feedBacks=[...res.data]
// })


async function getFeedBack(){
    let data;
await instance.get("FeedBack/GetUserFeedBack").then((res)=>{
   data=[...res.data];
})
return data
}

const feedBacks=await getFeedBack();

function ratings(state=feedBacks,action,data){
    if(action.type==="AddRatingData"){
        return [...state,action.data];
    }else{
        return [...state];
    }
    
}

export default ratings;
