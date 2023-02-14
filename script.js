(function() {
	let input=document.querySelector("#input");
let buttons=document.querySelector(".calculator__keys");
let clear=document.querySelector("#clr");
let equal=document.querySelector("#ans");

buttons.forEach(function(button){
button.addEventListener('click',function(e){
let value=e.target.dataset.num;
input.value+=value;
});
    

});


	
})();

