const allItem = document.getElementsByTagName('LI');
for (let i = 0; i < allItem.length; i++) {
	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'delete';
	span.appendChild(txt);
	allItem[i].appendChild(span);
}

const deleteButtons = document.getElementsByClassName('delete');
for (let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].onclick = function () {
		const div = this.parentElement;
		div.style.display = 'none';
	}
}

const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function onAddClick() {
	const li = document.createElement('li');
	const inputValue = document.getElementById('title').value;
	const t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		document.getElementById('list').appendChild(li);
	}
	document.getElementById('title').value = '';

	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'delete';
	span.appendChild(txt);
	li.appendChild(span);

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].onclick = function () {
			const div = this.parentElement;
			div.style.display = "none";
		}
	}
}