export const timeSince=(date)=> {
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }
  
  export const SORT_BY = {
    dateAsc: "date_asc",
    dateDesc: "date_desc",
    likeAsc: "like_asc",
    likeDesc: "like_desc"
  }
  
  export const PROFILE=[
    {
      name :"Rihanna",
      imgURL:"https://images.unsplash.com/photo-1675021617002-a2ecab7d58ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
    },
    {
      name :"Selena Gomez",
      imgURL:"https://images.unsplash.com/photo-1674376906038-a18fed600a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name :"Malala",
      imgURL:"https://images.unsplash.com/photo-1675164388740-4461facd2b03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
      name :"Nirmala Sitharaman",
      imgURL:"https://images.unsplash.com/photo-1675261560626-da81bdd02aab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
      name :"Michelle Obama",
      imgURL:"https://images.unsplash.com/photo-1675262621570-d07e3b0bf87d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
  ]
  
  export const LOCAL_KEY="commentWidget";
  
  export const randomNumber=()=>{
    return Math.floor(Math.random() * 5);
  }