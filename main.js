(function() {

	// data 
	const model = [
		{
			name: 'Andreas',
			image: 'images/andreas.jpg',
			alt: 'Andreas eating grass',
			count: 0,
			selected: false
		},
		{
			name: 'Arrow',
			image: 'images/arrow.jpg',
			alt: 'Arrow playing ball',
			count: 0,
			selected: false
		},
		{
			name: 'Brian',
			image: 'images/brian.jpg',
			alt: 'Brian playing in the field',
			count: 0,
			selected: false
		},
		{
			name: 'Bruno',
			image: 'images/bruno.jpg',
			alt: 'Bruno with a cabbage cap',
			count: 0,
			selected: false
		},
		{
			name: 'Carter',
			image: 'images/carter.jpg',
			alt: 'Carter eating',
			count: 0,
			selected: false
		},
		{
			name: 'Ryan',
			image: 'images/ryan.jpg',
			alt: 'Ryan being cute',
			count: 0,
			selected: false
		},
		{
			name: 'Scott',
			image: 'images/scott.jpg',
			alt: 'Scott being cute',
			count: 0,
			selected: false
		}
	];
	
	const octopus = {
		target: document.querySelector('.bun-list'),

		init: ()=> {
			tv.init();
			listView.init();
			listView.render(model);
		},

		currentRab: ()=> {
			octopus.target.addEventListener('click', (evt) => {
				const text = evt.target.textContent;
				const listPath = evt.path[1].children;
				const listSel = evt.target;
				
				// matching the item selected with the right details
				const select = (rab) => {
					const result = model.find(rabbit => rabbit.name === rab);
					result.selected = true;
					listSel.classList.add('current');
					tv.render(result);
				}
				select(text);

				// setting up selection for current element
				const listSelect = () => {
					for (const list of listPath) {
						if (list.classList.contains('current')) {
							list.classList.remove('current');
							listSel.classList.add('current');							
						}
					}
				}
				listSelect();
			});
		},

		// setting the count increment and display function
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

		init: ()=> {
			octopus.clickedRab();
		},

		render: (rab)=> {
			tv.display.innerHTML = `
			<figure class="bunny-figure">
            	<img src=${rab.image} alt=${rab.alt}>
            	<figcaption>${rab.name}</figcaption> 
            	<h5 class="counter">Number of times clicked: <span class="count">${rab.count}</span></h5>
          	</figure>`;
		}
	}

	const listView = {
		display: document.querySelector('.bun-list'),

		init: ()=> {
			octopus.currentRab();
		},

		render: (rabs)=> {
			listView.display.innerHTML = "";
			rabs.forEach(el => {
				listView.display.innerHTML += `<li>${el.name}</li>`
			});
		}
		// listView.render(model);
	}
	octopus.init();
})();

document.addEventListener('DOMContentLoaded', function () {
	const display = document.querySelector('.sub-body');
	display.innerHTML = `<p>Click on any of the items on your left to see the images and details of those list items</p><br><p>Click on the display area also to increase the number of times the display area was clicked</p><br><p>Click on the info area to change anything, both in the list and the display area</p>`;
});