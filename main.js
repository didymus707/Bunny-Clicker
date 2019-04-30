(function() {

	// data 
	const model = [
		{
			name: 'Andreas',
			image: 'images/andreas.jpg',
			count: 0
		},
		{
			name: 'Arrow',
			image: 'images/arrow.jpg',
			count: 0
		},
		{
			name: 'Brian',
			image: 'images/brian.jpg',
			count: 0
		},
		{
			name: 'Bruno',
			image: 'images/bruno.jpg',
			count: 0
		},
		{
			name: 'Carter',
			image: 'images/arter.jpg',
			count: 0
		},
		{
			name: 'Ryan',
			image: 'images/ryan.jpg',
			count: 0
		},
		{
			name: 'Scott',
			image: 'images/scott.jpg',
			count: 0
		}
	];
	
	const octopus = {
		init: ()=> {
			const target = document.querySelector('.bun-list');
			target.addEventListener('click', function(evt) {
				console.log(evt);
			});
			// tv.render(model[0]);
		}
	}

	const tv = {
		render: (cat)=> {
			const display = document.querySelector('.sub-body');
			display.innerHTML = `
			<figure class="bunny-figure">
            	<img src=${cat.image} alt="Bunny eating grass">
            	<figcaption>${cat.name}</figcaption> 
            	<h5 class="counter">clicked: <span class="count">${cat.count}</span></h5>
          	</figure>`;
		}
	}
	octopus.init();
})();