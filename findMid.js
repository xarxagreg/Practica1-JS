
function findMid(array){
    let media=array[0]
    for(let i=1; i<=array.length-1; i++){

        media=array[i]+media;
    }
    return (media/array.length).toFixed(2);
}


export{findMid};
