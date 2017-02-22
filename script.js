$(document).ready(function(){
	var operators = ['+','-','*','/','.'];
	var inputs="";
	var answer="";

//updating the screen
	function update(){
		$('#screen').html(inputs);
	}
	//clear only the last entry
	function clearEntry(){
		inputs= inputs.slice(0,-1);
		update();
	}
	// clear all the screen
	function clearAll(){
		inputs="";
		$update();
	}

// function checker(){
// 	var lastChar = $('#screen').text().slice(-1);
// 	for(var i = 0; i < operators.length; i++){
// 		if(operators[i] == lastChar){	
// 			$('#screen').text('Error');
// 		}
// 	}

// }
//preventing two consecutive operands

	$('.operands').on('click',function(){
		var lastChar = $('#screen').text().slice(-1);
		if(operators.includes(lastChar)===true){
			clearEntry();
			//  inputs = inputs.slice(0,inputs.length-1);
		}
	});

	//getting numbers and operators
	$('button').on('click',function(){
		inputs += this.id;
		var firstChar =inputs.slice(0,1);
		//preventing invalid first input
		if(firstChar.includes('/')==true || firstChar.includes('*')==true ){
			clearAll();
		}else
			update();
	});
	//getting the answer
	$('.total').on('click', function(){
			// checker();
			if(inputs.includes(".")){
				inputs=(eval(inputs)).toFixed(2);
				update();
			}else{
				inputs=eval(inputs);
		 	// $('#screen').html(inputs);
		 		update();
			}		
	});
	//
	$('.ce').on('click',function(){
		clearEntry();
	});

	$('.ac').on('click',function(){
		inputs = "";
		update();
	});
	

})