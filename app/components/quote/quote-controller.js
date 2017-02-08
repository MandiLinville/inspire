(function () {

	//Get your QuoteService

	var qc = this;
	var quoteService = new QuoteService();


	new Vue({
		el: '#quote',
		data: {
			quote: {},
			displayAuthor: false
		},
		mounted: function () {
			quoteService.getQuote(this.setQuote)
		},
		methods: {
			setQuote: function (quote) {
				this.quote = quote;
			},
			toggle: function () {
				this.displayAuthor = !this.displayAuthor
			}
			}
	})
		
	})()