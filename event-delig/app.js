const list = document.getElementById('list')

list?.addEventListener('click', (e) => {
  if (e?.target?.matches("li")) {
    e.target.classList.toggle('yellow')
  }
})

document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  list.classList.toggle('active')
  list.style.top = e.clientY + 'px';
  list.style.left = e.clientX + 'px';
})


function ContexMenuImp() {

  let self = this;

  self.showAnchor = ko.observable(false);
  self.showDocZone = ko.observable(false);
  self.showItemDefi = ko.observable(false);

  self.enableFor = function (enableFor) {
    console.log(enableFor)
  }
}


ko.applyBindings(new ContexMenuImp(), document.getElementById('contextMenuImp'))

const createResizableTable = function (table) {
  const cols = table.querySelectorAll('th');
  Array.from(cols).forEach(function (col) {
    const resizer = document.createElement('div');
    resizer.classList.add('resizer');

    // Set the height
    resizer.style.height = `${table.offsetHeight}px`;

    col.appendChild(resizer);

    createResizableColumn(col, resizer);
  })
};

const createResizableColumn = function (col, resizer) {
  let x = 0;
  let w = 0;

  const mouseDownHandler = function (e) {
    x = e.clientX;

    const styles = window.getComputedStyle(col);
    w = parseInt(styles.width, 10);

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    resizer.classList.add('resizing');
  };

  const mouseMoveHandler = function (e) {
    const dx = e.clientX - x;
    col.style.width = `${w + dx}px`;
  };

  const mouseUpHandler = function () {
    resizer.classList.remove('resizing');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  };

  resizer.addEventListener('mousedown', mouseDownHandler);
};

createResizableTable(document.getElementById('resizeMe')); 
