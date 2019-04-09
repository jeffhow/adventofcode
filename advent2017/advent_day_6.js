/* global $ */

var input = [5,1,10,0,1,7,13,14,3,12,8,10,7,12,0,6];
var hist = [];
var mem = input.slice();

var iterations = 0;
var loopStartsHere = 0;

$('#day6a-ans').html( day6a() );
$('#day6b-ans').html( day6b( input.slice() ) );


function day6a(){
  iterations ++;
  var temp = mem.slice()
  hist.push( temp );
  
  //find greatest val in cycle
  var g=0;
  var i=0;
  for(var j=0; j<mem.length; j++){
    if (mem[j] > g){
      g = mem[j];
      i = j;
    }
  }

  //cycle
  mem[i] = 0;
  while(g>0){
    i++;
    if(i == mem.length){
      i=0;
    }
    mem[i]++
    g--;
  }
  
  // for(var j=i+1; j<mem.length; j++){
  //   mem[j] += 1;
  //   g--;
  //   if(g==0){
  //     g=0;
  //     break;
  //   }
  //   if(j+1 == mem.length){
  //     j=-1;
  //   }
  // }
  
  for(var j=0; j<hist.length; j++){
    if(JSON.stringify(hist[j]) == JSON.stringify(mem)){
      loopStartsHere = j;
      return hist.length;
    }
  }
  
  // var sum=0;
  // for(var k=0;k<mem.length;k++){
  //   sum+=mem[k];
  // }
  //console.log(sum);
  //console.log(JSON.stringify(mem));
  // No match found
  
  return day6a();
}

function day6b(mem){
  return iterations - loopStartsHere;
}
