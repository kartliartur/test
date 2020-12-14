let app = new Vue({
	el: '#search',
	data: {
		in_value: '',
		suggestions: ['asd', 'asd2', 'asd3']
	},
	computed: {
		matches() {
			return this.suggestions.filter((item) => {
				return item.indexOf(this.in_value) >= 0;
			});
		}
	}
});