/*global beforeEach afterEach describe it flush expect fixture element MockInteractions sinon*/

describe('activity-exemptions', function() {
	beforeEach(function() {
		element = fixture('basic'); //eslint-disable-line no-global-assign
	});

	it('should instantiate the element', function() {
		expect(element.is).to.equal('activity-exemptions');
	});

	it('should select all checkboxes', function(done) {
		element.userData = [
			{'Identifier': 1, 'FirstName':'Benjamin', 'LastName':'Liam', 'IsExempt':true},
			{'Identifier': 2, 'FirstName':'Isabella', 'LastName':'Madison', 'IsExempt':true},
			{'Identifier': 3, 'FirstName':'Ethan', 'LastName':'Avery', 'IsExempt':false},
			{'Identifier': 4, 'FirstName':'David', 'LastName':'Aubrey', 'IsExempt':true}
		];

		flush(function() {
			var items = Polymer.dom(element.root).querySelectorAll('.row-user');

			expect(items.length).to.equal(4);

			var checkbox = Polymer.dom(element.root).querySelector('d2l-checkbox');
			checkbox = checkbox.$$('input');
			checkbox.addEventListener('click', function() {
				flush(function() {
					items.forEach(function(row) {
						expect(row.querySelector('d2l-checkbox').checked).to.equal(true);
					}, this);
					done();
				});
			});
			MockInteractions.tap(checkbox);
		});
	});

	it('should de-select all checkboxes', function(done) {
		element.userData = [
			{'Identifier': 1, 'FirstName':'Benjamin', 'LastName':'Liam', 'IsExempt':true},
			{'Identifier': 2, 'FirstName':'Isabella', 'LastName':'Madison', 'IsExempt':true},
			{'Identifier': 3, 'FirstName':'Ethan', 'LastName':'Avery', 'IsExempt':false},
			{'Identifier': 4, 'FirstName':'David', 'LastName':'Aubrey', 'IsExempt':true}
		];

		// Manually set all checkboxes to checked
		flush(function() {
			var checkboxes = Polymer.dom(element.root).querySelectorAll('d2l-checkbox');
			checkboxes.forEach(function(element) {
				element.checked = true;
			});

			// Verify that all checkboxes are indeed checked
			flush(function() {
				var items = Polymer.dom(element.root).querySelectorAll('.row-user');
				items.forEach(function(element) {
					expect(element.querySelector('d2l-checkbox').checked).to.equal(true);
				}, this);
			});

			// Click the '(de)select all' checkbox, and verify that all rows are unselected
			flush(function() {
				var items = Polymer.dom(element.root).querySelectorAll('.row-user');
				expect(items.length).to.equal(4);
				var checkbox = Polymer.dom(element.root).querySelector('d2l-checkbox').$$('input');
				checkbox.addEventListener('click', function() {
					flush(function() {
						items.forEach(function(element) {
							expect(element.querySelector('d2l-checkbox').checked).to.equal(false);
						}, this);
						done();
					});
				});
				MockInteractions.tap(checkbox);
			});
		});
	});

	it('should map the data from the exemptions and classlist call correctly', function(done) {
		element.rawClasslist = [
			{'Identifier':1, 'FirstName':'Benjamin', 'LastName':'Liam'},
			{'Identifier':2, 'FirstName':'Isabella', 'LastName':'Madison'},
			{'Identifier':3, 'FirstName':'Ethan', 'LastName':'Avery'},
			{'Identifier':4, 'FirstName':'David', 'LastName':'Aubrey'}
		];

		element.rawExemptions = [
			{'UserId':1, 'IsExempt':true},
			{'UserId':2, 'IsExempt':true},
			{'UserId':4, 'IsExempt':true}
		];

		element._mapUserData();
		expect( element.userData ).to.deep.equal(
			[
				{'Identifier':1, 'FirstName':'Benjamin', 'LastName':'Liam', 'IsExempt':true},
				{'Identifier':2, 'FirstName':'Isabella', 'LastName':'Madison', 'IsExempt':true},
				{'Identifier':3, 'FirstName':'Ethan', 'LastName':'Avery', 'IsExempt':false},
				{'Identifier':4, 'FirstName':'David', 'LastName':'Aubrey', 'IsExempt':true}
			]
		);
		done();
	});

	it('should handle zero students', function(done) {
		element.userData = [];
		flush(function() {
			expect(element.is).to.equal('activity-exemptions');
			var items = Polymer.dom(element.root).querySelectorAll('.row-user');
			expect(items.length).to.equal(0);
			done();
		});
	});

	describe('activity-exemptions exempt count', function() {
		beforeEach(function() {
			element.userData = [
				{'Identifier':1, 'IsExempt':true},
				{'Identifier':2, 'IsExempt':true},
				{'Identifier':3, 'IsExempt':false},
				{'Identifier':4, 'IsExempt':true}
			];

		});
		it('should show how many users are exempted', function(done) {
			flush(function() {
				var exemptionsCount = Polymer.dom(element.root).querySelector('#exemptions-count');
				expect(exemptionsCount.innerText.trim()).to.equal('Exemptions: 3');
				done();
			});
		});

		it('should update exemptions count when the data changes', function(done) {
			flush(function() {
				var user = element.userData[0];
				user.IsExempt = false;
				element.set('userData.0', {});
				element.set('userData.0', user);
				flush(function() {
					var exemptionsCount = Polymer.dom(element.root).querySelector('#exemptions-count');
					expect(exemptionsCount.innerText.trim()).to.equal('Exemptions: 2');
					done();
				});
			});
		});

		it('should handle zero students', function(done) {
			element.userData = [];
			flush(function() {
				var exemptionsCount = Polymer.dom(element.root).querySelector('#exemptions-count');
				expect(exemptionsCount.innerText.trim()).to.equal('Exemptions: 0');
				done();
			});
		});
	});

	describe('activity-exemptions (un)exempt buttons', function() {
		var server;
		beforeEach(function() {
			var responseHeaders = {
				json: { 'Content-Type': 'application/json' }
			};

			server = sinon.fakeServer.create();
			server.respondWith(
				'POST',
				/\/exemptmythings/, [
					200,
					responseHeaders.json,
					'{"success":true}'
				]
			);

			element.userData = [
				{'Identifier': 1, 'FirstName':'Benjamin', 'LastName':'Liam', 'IsExempt':true},
				{'Identifier': 2, 'FirstName':'Isabella', 'LastName':'Madison', 'IsExempt':false},
				{'Identifier': 3, 'FirstName':'Ethan', 'LastName':'Avery', 'IsExempt':false},
				{'Identifier': 4, 'FirstName':'David', 'LastName':'Aubrey', 'IsExempt':true}
			];
		});
		afterEach(function() {
			server.restore();
		});

		it('should mark users exempt if they are not already exempted', function(done) {

			flush(function() {
				var checkbox = Polymer.dom(element.root).querySelector('d2l-checkbox').$$('input');
				var items = Polymer.dom(element.root).querySelectorAll('.row-user');
				var exemptButton = Polymer.dom(element.root).querySelectorAll('d2l-button')[0];
				var exemptAjax = Polymer.dom(element.root).querySelector('#createExemption');
				exemptAjax.url = '/exemptmythings';
				var responseHandler = sinon.spy();
				exemptAjax.addEventListener('request', responseHandler);

				MockInteractions.tap(checkbox);
				flush(function() {
					exemptButton.addEventListener('click', function() {
						flush(function() {
							expect(items.length).to.equal(4);
							items.forEach(function() {
								expect(responseHandler.callCount).to.be.equal(2);
							}, this);
							done();
						});
					});
					MockInteractions.tap(exemptButton);
				});
			});
		});

		it('should mark exempted users unexempt', function(done) {
			flush(function() {
				var checkbox = Polymer.dom(element.root).querySelector('d2l-checkbox').$$('input');
				var items = Polymer.dom(element.root).querySelectorAll('.row-user');
				var unexemptButton = Polymer.dom(element.root).querySelectorAll('d2l-button')[1];
				var exemptAjax = Polymer.dom(element.root).querySelector('#createExemption');
				exemptAjax.url = '/exemptmythings';
				var responseHandler = sinon.spy();
				exemptAjax.addEventListener('request', responseHandler);

				MockInteractions.tap(checkbox);
				flush(function() {
					unexemptButton.addEventListener('click', function() {
						flush(function() {
							expect(items.length).to.equal(4);
							items.forEach(function() {
								expect(responseHandler.callCount).to.be.equal(2);
							}, this);
							done();
						});
					});
					MockInteractions.tap(unexemptButton);
				});
			});
		});
	});
});
