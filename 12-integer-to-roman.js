/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    
   var numLen = num.toString().length;
    var quotient,reminder = 0;
    var finalString ="";
    var roman =["I","II","III","IV","V","VI","VII","VIII","IX"];
    var hundreds =[0,1,10,100,1000];
    var value =num;
    do{
        
        value = hundreds[numLen]*parseInt(num/hundreds[numLen])
        if(value>3999){
            return 0;
        }
        
        if(value >=1 && value <=9){
            finalString +=roman[value-1];
            break;
        }
        else if(value >=1000 && value <=3999){
            finalString +=repeat("M",parseInt(value/1000));
        }
        else if(value >=900 && value <=999){
            finalString +="CM";
        }
        else if(value >=500 && value <=899){
            finalString +="D";
            finalString +=repeat("C",parseInt((value-500)/100));
        }
        else if(value >=400 && value <=499){
            finalString +="CD";    
        }
        else if(value >=100 && value <=399){
            finalString +=repeat("C",parseInt(value/100)); 
        }
        else if(value >=90 && value <=99){
            finalString +="XC";   
        }
        else if(value >=50 && value <=89){
            finalString +="L"; 
            finalString +=repeat("X",parseInt((value-50)/10));   
        }
        else if(value >=40 && value <=49){
            finalString +="XL";    
        }
        else if(value >=10 && value <=39){ 
            finalString +=repeat("X",parseInt(value/10));   
        }
        num = num-value ;
        numLen--;
        
    }while(num > 0)
        
        
    return finalString;    
    
};

var repeat = function(letter,num) {
    var repeatString ="";
    //repeatString = letter.repeat(num)
    if(num == 0){
        return repeatString;
    }
    while(num){
        repeatString +=letter;
        num--;
    }
    return repeatString;
};