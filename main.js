$(function() {
	const model = [
		{
			name: 'Bunny',
			img: 'images/bunny.jpg',
			count: ''
		}

		// {
		// 	name: 'Cute Merl',
		// 	img: 'images/cute mer.jpg',
		// 	count: ''
		// },
	];

	const octopus = {
		init: function(num) {
			const thisRab = model[num];
			const andreas = document.querySelector('.andreas')
			andreas.addEventListener('click', function(thisRab) {
				return function() {
					view.render(thisRab);
				};
			})
		}
	};

	const view = {
		render: function(rabbit) {
			const subBody = document.querySelector('.sub-body');
			subBody.innerHTML = `
			<figure class="bunny-figure">
	            <img src="images/bunny.jpg" alt="Bunny eating grass">
	            <figcaption>Andreas</figcaption> 
	            <h5 class="counter">clicked: <span class="count"></span></h5>
          	</figure>`;
			octopus.init();
		}
	}
}());

