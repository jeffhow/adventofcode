var lengths =[165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153];
var skip=0;
var list=[];

for(var i=0;i<256;i++){
  list[i] = i;
}

function knots(){
  var index=0;
  for(var i=0;i<lengths.length;i++){
    if(index+lengths[i] < list.length){
      var temp = list.slice(index, index+lengths[i]);
      var args = [index, temp.length].concat(temp.reverse());
      Array.prototype.splice.apply(list, args);
    }else{
      var back = list.slice(index);
      var backlength = back.length;
      
      var front = list.slice(0, (index+lengths[i] - list.length+1));
      var frontlength = front.length;

      var temp = back.concat(front); //console.log("NEW: "+temp); 
      temp.reverse();
      
      back = temp.slice(backlength); //something is wrong here. splitting the list wrong? adding to wrong side??
      front = temp.slice(0, backlength); //(index+lengths[i] - list.length));
      
      var args = [index, backlength].concat(front);
      Array.prototype.splice.apply(list,args); // add the back
      
      args = [0, frontlength].concat(back);
      Array.prototype.splice.apply(list,args); //add the front
    }

    if(index+lengths[i]+skip > list.length-1){
      index = index + lengths[i] + skip - list.length+1;
    }else{
      index = index + lengths[i] + skip;
    }
      
      skip++;

  }
}

