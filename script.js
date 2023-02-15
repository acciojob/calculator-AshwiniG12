function insert(num){
			document.form1.textview.value = document.form1.textview.value + num; 
		}

		 
		//Here, we create a backspace() function to remove the number at the end of the numeric series in textview.  

		function backspace(){
			let back = document.form1.textview.value;
			/* remove the element from total length. then - 1 */
			document.form1.textview.value = back.substring(0, back.length-1); 
		}



		// Use equal() function to return the result based on passed values.
		function equal(){
			let calculation = document.form1.textview.value;
			if(calculation){
				document.form1.textview.value = eval(calculation);
			}
		}
		

