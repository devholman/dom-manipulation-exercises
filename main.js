
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1

  	alert ("yowch! don't click me so hard!")
  

})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var doubleNum = document.querySelector("#compoundInvestment")
 
  doubleNum.innerHTML = doubleNum.innerHTML * 2
  	
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === 'black'){
  		circle.style.background = 'white'
  }
  else {
  	circle.style.background = 'black'
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  	var bigCircle = document.querySelector('.circle-red')
  	var bigCircleStyles = window.getComputedStyle(bigCircle)
 	var newWidth = parseInt(bigCircleStyles.width)
 	var newHeight = parseInt(bigCircleStyles.height)

 	if(newWidth < 320){
 		bigCircle.style.width = (newWidth*2) + 'px'
 		bigCircle.style.height = (newHeight*2) + 'px'
 	}else {
 		bigCircle.style.width = 20 + 'px'
 		bigCircle.style.height = 20 + 'px'
 	}

})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  // if children of class 'exerciseItem' is active
  //pass though new array
	 // var inactiveStatus = function(listItemNode){

	 // 	if(listItemNode === "inactive"){
	 // 		return true
	 // 	} else {
	 // 		return false
	 // 	}
	 // }
	
	var listContainer = document.querySelector("#userList")
	var listItemNodes  = document.querySelectorAll("#userList li")

	// for(var i=0; i < listItemNode.length; i++){
	// 	allNodes = listItemNode[i]
	// 	if(inactiveStatus(allNodes)){
	// 		listContainer.removeChild(allNodes)
	// 	}
	// }
	for(var i=0; i < listItemNodes.length; i++){

		if(listItemNodes[i].className === "inactive"){

			listContainer.removeChild(listItemNodes[i])
		}
	}

	

  
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
})