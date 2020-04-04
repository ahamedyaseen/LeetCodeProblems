/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let myObj ={};
    let sPos = 0;
    let lString=1;
    let temp =1;
    if(s.length==0){
      return 0;
    }
    for(var i=0;i<s.length;i++){
      if(myObj[s[i]]==undefined){
        
        myObj[s[i]] =1;
      }else{
        if(lString<Object.keys(myObj).length){
          lString = Object.keys(myObj).length;
        } 
        
        i=sPos;
        sPos = sPos+1;
        //console.log(myObj)
        myObj ={};
      }
       if(lString<Object.keys(myObj).length){
          lString = Object.keys(myObj).length;
        } 
    }
    console.log(myObj);
    return lString;
}

