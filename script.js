const emptyBoxes = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

function dragStart() {
  this.className += ' hold';
  this.style.opacity = 0.5;
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList += ' hovered';
}

function dragLeave() {
  this.classList = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
  this.children[0].style.opacity = 1;
}

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of emptyBoxes) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}
