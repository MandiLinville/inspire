(function () {

	//Your ImageService is a global constructor function what can you do here if you new it up?


	var imgc = this;
	var imageService = new ImageService();


	new Vue({
		el: '#image',
		data: {
			image: {}
		},
		mounted: function () {
			imageService.getImage(this.setImage)
		},
		methods: {
			setImage: function (image) {
				this.image = image;
				var b = document.getElementById('body')
				b.style.backgroundImage = `url('${image.url}')`
			}
		}
	})
} ())