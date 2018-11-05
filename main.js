let counter = 0;
let flag = true
let carouselArr = $(".carousel-item")
let mainWidth = $($('.carousel')[0]).width()
let mainOffset = $($('.carousel')[0]).position().left
for(let i=0;i<carouselArr.length;i++){
	$(carouselArr[i]).attr('id',i).css('left',mainOffset+mainWidth)
}
$(`#${counter}`).css('left',mainOffset)
$('#prevButton').on('click',function left(){
	if(flag === true){
		flag = false
		for(let i=0;i<$(carouselArr[counter]).siblings().length;i++){
			if($($(carouselArr[counter]).siblings()[i]).hasClass("carousel-item")){
				$($(carouselArr[counter]).siblings()[i]).hide().css('left',mainOffset+mainWidth)
			}
		}
		$(`#${counter}`).css('left',mainOffset-mainWidth)
		if(counter === 0){
			counter = carouselArr.length
		}
		counter--
		$(`#${counter}`).show((function(){flag=true})).css('left',mainOffset)
	}
})
$('#nextButton').on('click',function right(){
	if(flag === true){
		flag = false
		for(let i=0;i<$(carouselArr[counter]).siblings().length;i++){
			if($($(carouselArr[counter]).siblings()[i]).hasClass("carousel-item")){
				$($(carouselArr[counter]).siblings()[i]).hide().css('left',mainOffset-mainWidth)
			}
		}
		$(`#${counter}`).css('left',mainOffset+mainWidth)
		if(counter === 0){
			counter = carouselArr.length
		}
		counter--
		$(`#${counter}`).show((function(){flag=true})).css('left',mainOffset)
	}
})