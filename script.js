function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
   let roman = "";
   if(num>=1000){
	   let times = Math.floor(num/1000);
	   while(times--) roman+='M';
	   num%=1000;
    }
   else if(num===0){
		return roman.toUpperCase();
	}
    if(num>=900){
	  roman+='CM';
	  num%=900;
	}
    else if(num===0){
		return roman.toUpperCase();
	}	
   if(num>=500){
	   let times = Math.floor(num/500);
	   while(times--) roman+='D';
	   num%=500;
    }
   else if(num===0){
		return roman.toUpperCase();
	}
  if(num>=400){
	  roman+='CD';
	  num%=400;
  }
 else if(num===0){
		return roman.toUpperCase();
 }
   if(num>=100){
	   let times = Math.floor(num/100);
	   while(times--) roman+='C';
	   num%=100;
    }
   else if(num===0){
		return roman.toUpperCase();
	}
 if(num>=90){
	 roman+='XC';
	 num%=90;
 }
else if(num==0){
		return roman.toUpperCase();
}
  if(num>=50){
	   let times = Math.floor(num/50);
	   while(times--) roman+='L';
	   num%=50;
    }
  else if(num===0){
		return roman.toUpperCase();
	}
 if(num>=40){
	 roman+='XL';
	 num%=40;
 }
  else if(num==0){
		return roman.toUpperCase();  
  }
  if(num>=10){
	   let times = Math.floor(num/10);
	   while(times--) roman+='X';
	   num%=10;
    }
  else if(num===0){
		return roman.toUpperCase();
	}
  if(num>=9){
	roman+='IX';
	 num%=9;
  }
  else if(num===0){
		return roman.toUpperCase();
	}

  if(num>=5){
	   let times = Math.floor(num/5);
	   while(times--) roman+='V';
	   num%=5;
  }
	else if(num===0){
		return roman.toUpperCase();
	}
	if(num===4){
	  roman+='IV';
		num%=4;
	}
	else if(num===0){
		return roman.toUpperCase();
	}
	
  if(num>=1){
	   let times = Math.floor(num/1);
	   while(times--) roman+='I';
	   num%=1;
  }
	else if(num===0){
		return roman.toUpperCase();
	}
	return roman.toUpperCase();;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));




// do not edit below this line
// module.exports = convertToRoman
