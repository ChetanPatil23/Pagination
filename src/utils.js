const paginate = (followers) => {
    let itemsperpage=10;
    let pages=Math.ceil(followers.length/itemsperpage);

    const newusers=Array.from({length:pages},(_,index)=>{
        let start=itemsperpage*index;
        return followers.slice(start,start+itemsperpage);
    })
    return newusers;
}

export default paginate
