$(document).ready(function () {
	$('form').submit(function(){
		event.preventDefault()
		let int = parseInt($('#interger').val(), 10);
		if (int) {
			for (var i = 1; i <= int; i++) {
				if (i % 3 == 0) {
					if (i % 5 == 0) {
						$('ul').append('<li>'+'FizzBuzz'+'</li>')
						return
					}
					$('ul').append('<li>'+'Fizz'+'</li>')
				}
				else if (i % 5 == 0) {
					$('ul').append('<li>'+'Buzz'+'</li>')
				}
				else{
					$('ul').append('<li>'+i+'</li>')
				}
			}
		}
	})
})