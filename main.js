
class Animal {
  constructor(img, names) {
    this.img = img;
    this.names = names;
  }

};

let namesArr = ['bunny', 'cuteMer', 'cute', 'mer', 'merli', 'merl', 'merlin']

const bunny = new Animal('images/bunny.jpg', 'bunny');
const cuteMer = new Animal('images/cute mer.jpg', 'cute Mer');
const cute = new Animal('images/cute.jpg', 'cute');
const mer = new Animal('images/mer.jpg', 'mer');
const merli = new Animal('images/merli.jpg', 'merli');
const merl = new Animal('images/merl.jpg', 'merl');
const merlin = new Animal('images/merlin.jpg', 'merlin');

let objArr = [bunny, cuteMer, cute, mer, merli, merl, merlin];

// destructuring the arr

namesArr = objArr;

for (const name of namesArr) {
  let num = 0;
  const elem = document.createElement('ul');
  elem.textContent = name;

  // elem.addEventListener('click', (function(evt) {
  //   evt.target.innerHTML
  //   num++;
  // })()
  // );
}