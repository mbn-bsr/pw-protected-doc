
function myFunc(){
    let passwrd = '1234';
    let userInput;
    for(let i=7;i>0;i--){
        userInput = prompt('Please enter the password!');
        if(userInput===passwrd) {
            alert ('you are right!');
            document.getElementById('toShow').innerHTML= 'Secret Information';
            return;
        }
        else if(userInput==null){
            document.getElementById('toShow').innerHTML= 'Sorry! You cannot access the confidential information!';
            return;
        }
        else{
            alert('Wrong! Try again! You have only '+ i +' more chances!');
        }
    }
document.getElementById('toShow').innerHTML= 'Sorry! You cannot access the confidential information!';

}
myFunc();
