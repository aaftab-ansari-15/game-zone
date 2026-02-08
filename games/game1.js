const button = document.getElementById('randomNumber');
const randomNumberBox = document.getElementById('randomNumberBox');
const messegeBox = document.getElementById('messageBox');

button.addEventListener('click', () => {
	const getInput = document.getElementById('guessTheNumber').value;

	if (getInput === null || !getInput) {	
		messegeBox.innerText = "Enter the number first to start the game";
	}
	else {
  		let count = 0;
		messegeBox.innerText = "";
	  	const intervalId = setInterval(() => {
	    	randomNumberBox.innerText = Math.floor(Math.random() * 5);
	    	count++;
	    
	    	if (count >= 5) {
	      		clearInterval(intervalId); // Essential to stop the timer
	      
	      		const finalNumber = Math.floor(Math.random() * 5);
	      		randomNumberBox.innerText = finalNumber;	  	  
	  	  
	  	  		if (getInput == finalNumber){
	  	  			messegeBox.innerText = "Congratulations you won!!!";
	      		} else {
	  	  			messegeBox.innerText = "Sorry, Try again you failed!!!";
	      		} 
	    	}	
	  	}, 500);
}});

