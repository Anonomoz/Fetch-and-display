function initBadge() {
	// TODO: perform fetch request and update the DOM
fetch('https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json')
	.then(response => {
		if (!response.ok) {
			throw new Error ('Response not ok');
		}
		return response.json();
	})
	.then(data => {
		console.log('Data :', data);
		document.getElementById('badge-count').textContent = data.count
	})
	.catch(error => {
		console.log('Error: ', error);
		document.getElementById('badge-count').textContent = 'Error loading data';
	});
}

// Sample usage - do not modify
initBadge();
