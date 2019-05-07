(function() {

	// data 
	const model = [
		{
			name: 'Andreas',
			image: 'images/andreas.jpg',
			alt: 'Andreas eating grass',
			count: 0
		},
		{
			name: 'Arrow',
			image: 'images/arrow.jpg',
			alt: 'Arrow playing ball',
			count: 0
		},
		{
			name: 'Brian',
			image: 'images/brian.jpg',
			alt: 'Brian playing in the field',
			count: 0
		},
		{
			name: 'Bruno',
			image: 'images/bruno.jpg',
			alt: 'Bruno with a cabbage cap',
			count: 0
		},
		{
			name: 'Carter',
			image: 'images/carter.jpg',
			alt: 'Carter eating',
			count: 0
		},
		{
			name: 'Ryan',
			image: 'images/ryan.jpg',
			alt: 'Ryan being cute',
			count: 0
		},
		{
			name: 'Scott',
			image: 'images/scott.jpg',
			alt: 'Scott being cute',
			count: 0
		}
	];
	
	const octopus = {
		// selRabbit: (rab) => {
		// 	const result = model.find(rabbit => rabbit.name === rab);
		// 	tv.render(result);
		// },

		init: ()=> {
			const target = document.querySelector('.bun-list');
			target.addEventListener('click', (evt)=> {
				const text = evt.target.textContent;
				const select = (rab) => {
					const result = model.find(rabbit => rabbit.name === rab);
					tv.render(result);
				}
				select(text);
			});
			// tv.init();
			octopus.clickedRab();
		},

		clickedRab: () => {
			const display = document.querySelector('.sub-body');
			display.addEventListener('click', (evt)=> {
				const spanCount = evt.path[0].alt;
				const imgSel = (img) => {
					const result = model.find(rabbit => rabbit.name === img);
					result.count++;
					tv.render(result);
				}
				imgSel(spanCount);
			});
		}
	}

	const tv = {
		display: document.querySelector('.sub-body'),
		
		// init: ()=> {
		// 	tv.display.addEventListener('click', octopus.clickedRab(evt));
		// },

		render: (cat)=> {
			tv.display.innerHTML = `
			<figure class="bunny-figure">
            	<img src=${cat.image} alt=${cat.alt}>
            	<figcaption>${cat.name}</figcaption> 
            	<h5 class="counter">Number of times clicked: <span class="count">${cat.count}</span></h5>
          	</figure>`;
		}
	}
	octopus.init();
})();

document.addEventListener('DOMContentLoaded', function () {
	const display = document.querySelector('.sub-body');
	display.innerHTML = `<p>Click on any of the items on your left to see the images and details of those list items`;
});