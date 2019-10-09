// const options = {
// 	credentials: 'include',
// 	headers: new Headers({
// 		'Access-Control-Allow-Origin': '*',
// 	}),
// 	method: 'GET',
// 	mode: 'cors'
// };
const options = {
	headers: new Headers({
		'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjUzN2IyYzhiLTk5NDQtNDdhZi05MWQ2LTU5ZmNkYTQxNTFiMyJ9.eyJzdWIiOiIxNjkiLCJ0ZW5hbnRpZCI6IjBjZGY0NDQ4LTczZmItNGIxMy1hNWI0LTE4Nzc2OTFmOWI2NiIsInNjb3BlIjoiKjoqOioiLCJqdGkiOiJjNjI3MGZlMy1hZjIyLTRhMzAtYmUwNy1kMjZjZWZlNDIwZmMiLCJpc3MiOiJodHRwczovL2FwaS5icmlnaHRzcGFjZS5jb20vYXV0aCIsImF1ZCI6Imh0dHBzOi8vYXBpLmJyaWdodHNwYWNlLmNvbS9hdXRoL3Rva2VuIiwiZXhwIjoxNTcwNjM5NTk3LCJuYmYiOjE1NzA2MzU5OTd9.fP-kOxl-EmexkEtXk-vFJt0_whLx74_a7vTJ9RHFItcqUmYHoQxP83olqCUHD-vpchoNsIgaBwVL0l4z5x2CggR68CvdbDf76xIEq23MOf9ddOGHdyH21PGrDSt-Qt4N4SJv29T3yKWJvmKBmJSlCgohk9u-kZ_RAIrFnutiLEB4zYAgvFT3fq-OhfSfWVQ9g6rrz53qt0vv03whZtO8SM7XJFJCC1VHyjh7CtHeqVG5cdnKYUVXoUcCZPLAMt2plWXQoLyHfHyzq_EFM5OqOJ-NdQX48bNLWtQItSBD_BIWbiaXBQJG7xRwXNWehln1DOtU77Qp2JJlFDDG2HnpQQ'
	}),
	method: 'GET',
	mode: 'cors'
};

const LoadMoreExemptionsBehaviorImpl = {
	properties: {
		bookmark: {
			type: String
		},
		classlistUrl: {
			type: String
		},
		exemptions: {
			type: Array
		},
		exemptionsUrl: {
			type: String
		},
		hasMoreItems: {
			type: Boolean
		},
		classlistItems: {
			type: Array,
			value: []
		},
		userData: {
			type: Array,
			value: [],
			notify: true
		},
		page: {
			type: Number,
			value: 0
		},
		searchTerm: {
			type: String
		}
	},
	ready() {
		Promise.all([
			fetch(this.classlistUrl, options)
				.then(r => r.json())
				.then(d => this.__loadPagedData(d)),
			fetch(this.exemptionsUrl, options)
				.then(r => r.json())
				.then(b => this.exemptions = b)
		])
			.then(() => {
				this.__mapUserData();
			})
			.catch(() => {
				this.$.toast.subtext = this.localize('toastCouldNotLoad');
				this.$.toast.open = true;
			});
	},

	loadMore() {
		let url = this.classlistUrl;

		if (this.searchTerm) {
			url += `&searchTerm=${this.searchTerm}`;
		}
		if (this.bookmark) {
			url += `&bookmark=${this.bookmark}`;
		}

		fetch(url, options)
			.then(r => r.json())
			.then(d => {
				this.__loadPagedData(d);
				this.__mapUserData();
			});
	},

	refreshExemptions() {
		fetch(this.exemptionsUrl, options)
			.then(r => r.json())
			.then(b => {
				this.exemptions = b;
				this.__mapUserData();
			});
	},

	__mapUserData() {
		this.set('userData', this.classlistItems.map(
			(user)=>{
				user.IsExempt = this.exemptions.some(e => {
					return e.UserId === user.Identifier;
				});
				return user;
			}
		));
	},

	__loadPagedData(pagedData) {
		this.page++;
		this.bookmark = pagedData.PagingInfo.Bookmark;
		this.hasMoreItems = pagedData.PagingInfo.HasMoreItems;
		this.push('classlistItems', ...pagedData.Items);
	}
};

window.D2L = window.D2L || {};
window.D2L.Polymer = window.D2L.Polymer || {};
window.D2L.Polymer.Mixins = window.D2L.Polymer.Mixins || {};
window.D2L.Polymer.Mixins.D2LActivityExemptions = window.D2L.Polymer.Mixins.D2LActivityExemptions || {};
window.D2L.Polymer.Mixins.D2LActivityExemptions.LoadMoreExemptionsBehavior = LoadMoreExemptionsBehaviorImpl;
