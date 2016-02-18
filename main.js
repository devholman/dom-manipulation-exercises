
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

	
	var listContainer = document.querySelector("#userList")
	var listItemNodes  = document.querySelectorAll("#userList li")

	for(var i=0; i < listItemNodes.length; i++){

		if(listItemNodes[i].className === "inactive"){

			listContainer.removeChild(listItemNodes[i])
		}
	}
})

document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squareContainer = document.querySelector("#reverse-squares .answer-box")
  var allSquareBoxes = document.querySelectorAll("#reverse-squares .answer-box span")

  console.log(allSquareBoxes)

  squareContainer.innerHTML = ''

  for(var i = allSquareBoxes.length-1; i >= 0; i--){

  		console.log(allSquareBoxes[i])

  		squareContainer.appendChild(allSquareBoxes[i])
  }
 

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7

  var taskBox = document.querySelectorAll("#tasks li")


var reverseString = function (input){
	var newString = ''
	for(var i = input.length-1; i>=0; i--){
		var char = input.charAt(i)
		newString += char
	}
	return newString
}

var newArray = []
for(var i  = 0; i<taskBox.length; i++){
	var newStringArray = reverseString(taskBox[i].innerHTML)
	taskBox[i].innerHTML = newStringArray
	newArray.push(newStringArray)

	console.log(newArray)
}	

})


document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
     var imageEl = document.querySelector("#city-img")
   var imageURLArray = imageEl.src.split('/')
   var arrayLength = imageURLArray.length
   var currentImageNumber = imageURLArray[arrayLength-1]
   var numberCharLength = currentImageNumber.length
   var trueImageNumber = parseInt(currentImageNumber)

   if(trueImageNumber < 10){
     trueImageNumber = trueImageNumber + 1
   }
   else{
     trueImageNumber = 1
   }

  // trueImageNumber - (trueImageNumber % 3) +1

   var theEnd= imageEl.src.slice(0, imageEl.src.length -numberCharLength) + trueImageNumber
   imageEl.src = theEnd
})
