var carousel = (function (w, d) {

	var body = d.body;
	var carouselItems = d.querySelectorAll(".carousel-image");
	var carouselSelectors = d.querySelectorAll(".carousel-selector a");
	var carouselIndex = 0;
	var timeMilliseconds = 3000;

	function load() {
		w.setInterval(function () {

			selectImage(carouselIndex);

			carouselIndex = ++carouselIndex % carouselItems.length;

		},timeMilliseconds);
	}

	function selectImage(index) {
		carouselIndex = index;
		clearImages();
		showImage(index);
	}

	function showImage(index) {
		carouselItems[index].classList.add("selected");
		carouselSelectors[index].classList.add("selected");
	}

	function clearImages() {
		for (var i = carouselItems.length - 1; i >= 0; i--) {
			(function (i) {
				carouselItems[i].classList.remove("selected");
				carouselSelectors[i].classList.remove("selected");
			})(i)
		}
	}

	return {
		load : load,
		selectImage : selectImage
	}

})(window, document)