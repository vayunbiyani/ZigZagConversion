/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function(s, numRows) {
    if(numRows==1){
        return s
    }
    var result=""
    for(let i=0;i<numRows;i++){
       var temp=true
       var j=i
       while(j<s.length){
           result=result.concat(s[j])
           if(i==0||i==numRows-1){
               j+=(numRows-1)*2
               continue
           }
           if(temp){
               j+=(numRows-1-i)*2
           }else{
               j+=2*i
           }
           temp=!temp
       }
    }
    return result
};
