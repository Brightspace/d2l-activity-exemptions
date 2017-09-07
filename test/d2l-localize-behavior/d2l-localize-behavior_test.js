/*global describe beforeEach it expect fixture*/
describe('d2l-localize-behavior', function() {

	beforeEach(function() {
		document.documentElement.lang = '';
		document.documentElement.removeAttribute('data-lang-default');
	});

	[
		{
			label: 'English',
			code: 'en',
			expected: 'Select / Unselect All'
		}
	].forEach(function(val) {
		it('should render in ' + val.label, function() {
			document.documentElement.lang = val.code;
			var elem = fixture('localize-test');
			expect(elem.innerText).to.eql(val.expected);
		});
	});

	it('should handle uppercase language', function() {
		document.documentElement.lang = 'EN';
		var elem = fixture('localize-test');
		expect(elem.innerText).to.eql('Select / Unselect All');
	});

	it('should fall back to base language for unknown regional locale', function() {
		document.documentElement.lang = 'EN-XX';
		var elem = fixture('localize-test');
		expect(elem.innerText).to.eql('Select / Unselect All');
	});

	it('should fall back to org default language', function() {
		document.documentElement.lang = '';
		document.documentElement.setAttribute('data-lang-default', 'en');
		var elem = fixture('localize-test');
		expect(elem.innerText).to.eql('Select / Unselect All');
	});

	it('should fall back English for unknown language', function() {
		document.documentElement.lang = 'XX';
		var elem = fixture('localize-test');
		expect(elem.innerText).to.eql('Select / Unselect All');
	});

});