var voterid=confirm("You have voterid?");
var age=parseInt(prompt("Enter your age"));

if(voterid==true && age>18){
	console.log("eligible for vote")
}
else{
	console.log("not eligible")
}