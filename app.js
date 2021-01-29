
var count=0;

function lower() {
	count-=1;
	if(count<0)
		counter.style.color="red";
	if(count>0)
		counter.style.color="green";
	if(count==0)
		counter.style.color="gray";
	document.getElementById('counter').innerHTML=count;
}

function upper() {
	count+=1
	if(count<0)
		counter.style.color="red";
	if(count>0)
		counter.style.color="green";
	if(count==0)
		counter.style.color="gray";
	document.getElementById('counter').innerHTML=count;
}