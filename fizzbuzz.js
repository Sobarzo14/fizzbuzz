$('#fizzbuzz').click(function fizzbuzz() {
	
	for (var i = 1; i <= 100; i++) {
	// let fb = ''
	// var template = '<li>' + fb + '</li>' 
		if (i % 3 == 0){
			// fb = 'Fizz'
			if (i % 5 ==0) {
				// fb = 'FizzBuzz'
				$('ul').append('<li>FizzBuzz</li>')
			}
			$('ul').append('<li>Fizz</li>')
		}
		else if (i % 5 == 0) {
			// fb = 'Buzz'
			$('ul').append('<li>Buzz</li>')
		}
		else {
			// fb = i
			$('ul').append('<li>'+ i +'</li>')
		}
	}
})
