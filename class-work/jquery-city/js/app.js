// 1. Create .click() handlers for each of the 
//			thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of 
//		#bigimage to correspond to image that was clicked


/*$('#first').click(first)
$('#second').click(second)
$('#third').click(third)
$('#fourth').click(fourth)

function first () {
	$('#bigimage').attr('src', img/1.jpg)
}

function second () {
	$('#bigimage').attr('src', img/2.jpg)
}

function third () {
	$('#bigimage').attr('src', img/3.jpg)
}

function fourth () {
	$('#bigimage').attr('src', img/4.jpg)
}
*/


function changeImage () {
	console.log(this)

//function changeImage () {
//Need to obtain src attribute from
//	specific image clicked
	var src = $(this).attr('src')
	$('#bigimage').attr('src', src)
}

$('.thumb').click(changeImage)



















