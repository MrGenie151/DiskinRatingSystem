$(document).ready(function(){
	$("#rating").change(function() {
		let rating = $("#rating").val()
		$("#ratingDisp").text("Rating: " + $("#rating").val())
		let age = 17 - (10 - rating)
		$("#age").text("Ages: " + age + "+")
		$("#ratingImg").attr("src","rating-images/rating"+ rating +".svg.png")
	})
}); 