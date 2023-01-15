                                                                          






var  numberOfWon=0; 
var  numberOfWon2=0; 
var firstPersonName;
var secondPersonName;       
var numberOfLost=0;


for(i=1;i<=8;i++){

    if(i==1)
    {
        var firstPersonName =  prompt("first person name");
    }
    else if(i==2)
    {
        var secondPersonName =  prompt("second person name");
    }
    else{

        if(i%2==0)
        {
            var gussing_Number =  parseInt(prompt(firstPersonName+" Please Enter a number  from 1 to 6"));

            var random_Number =  Math.floor(Math.random()*6+1);
    
            if(gussing_Number==random_Number){

                console.log(firstPersonName+" win");
                numberOfWon++;
            }
            else
            {
                console.log(firstPersonName+" are lost.Random number was "+random_Number);
            }
        
        }
        else
        {
            var gussing_Number =  parseInt(prompt(secondPersonName+" Please Enter a number  from 1 to 6"));

            var random_Number =  Math.floor(Math.random()*6+1);
    
            if(gussing_Number==random_Number){

                console.log(secondPersonName+" win");
                numberOfWon++;
            }
            else
            {
                console.log(secondPersonName+" are lost.Random number was "+random_Number);
            }
        




        }
  
    }

   
}

document.write(firstPersonName+" win = "+numberOfWon +"</br>");
document.write(secondPersonName+" win = "+numberOfWon2);