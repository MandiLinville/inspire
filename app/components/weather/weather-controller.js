(function () {

	var weatherService = new WeatherService();


	new Vue({
		el: '#weather',
		data: {
			displayC: false,
			weather: {}
		},
		mounted: function () {
			weatherService.getWeather(this.setWeather)
		},
		methods: {
			setWeather: function (weather) {
				this.weather = weather;
			},
			toggle: function(){
				this.displayC = !this.displayC
			}
		},
		computed: {
			degreesC: function () {
				if (!this.weather.main) return;
				return this.weather.main.temp - 273.15 + ' degrees celsius'
			},
			degreesF: function () {
				if (!this.weather.main) return;
				return (this.weather.main.temp - 273.15) * 9 / 5 + 32 + ' degrees fahrenheit'
			},
			displayTemp: function(){
				if(this.displayC) return this.degreesC;
				return (this.degreesF) 
			}
		}
	})
} ())
