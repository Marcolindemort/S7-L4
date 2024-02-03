function loadingImages(callback) {
	callback();
}

loadingImages(() => {
	const button = document.getElementById("firstBtn");
	button.addEventListener("click", () => {
		fetch("https://api.pexels.com/v1/search?query=videogames", {
			method: "GET",
			headers: { Authorization: "cmkSRf0JUHd2HODLVm5eRkbDkCoiU9w6fQD0Kbp9MYHC449UcCrdpZKJ" },
		})
			.then((response) => response.json())
			.then((imgObj) => {
				console.log(imgObj);
				const photos = imgObj.photos;
				console.log(photos);
				photos.forEach((image, index) => {
					const img = document.querySelectorAll("img");
					img[index].src = image.src.landscape;
					const id = document.querySelectorAll("small");
					id[index].innerHTML = image.id;
				});
			})
			.catch((error) => console.log(error));
	});
});

function loadingSecondaryImages(callback) {
	callback();
}

loadingSecondaryImages(() => {
	const button = document.getElementById("secondBtn");
	button.addEventListener("click", () => {
		fetch("https://api.pexels.com/v1/search?query=batman", {
			method: "GET",
			headers: { Authorization: "cmkSRf0JUHd2HODLVm5eRkbDkCoiU9w6fQD0Kbp9MYHC449UcCrdpZKJ" },
		})
			.then((response) => response.json())
			.then((imgObj) => {
				console.log(imgObj);
				const photos = imgObj.photos;
				console.log(photos);
				photos.forEach((image, index) => {
					const img = document.querySelectorAll("img");
					img[index].src = image.src.landscape;
					const id = document.querySelectorAll("small");
					id[index].innerHTML = image.id;
				});
			})
			.catch((error) => console.log(error));
	});
});

function hideCard(callback) {
	callback();
}

hideCard(() => {
	const buttons = document.getElementsByClassName("hide");
	for (const button of buttons) {
		button.addEventListener("click", () => {
			const div = button.closest(".col-md-4");
			div.classList.add("d-none");
		});
	}
});
