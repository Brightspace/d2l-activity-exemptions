const options = {
	credentials: 'include',
	headers: new Headers({
		'Access-Control-Allow-Origin': '*'
	}),
	mode: 'cors'
};

/* @polymerBehavior D2L.PolymerBehaviors.ActivityExemptions.LoadMoreExemptionsBehavior */
const LoadMoreExemptionsBehavior = {
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
			value: []
		},
		page: {
			type: Number,
			value: 0
		}
	},
	ready: function() {
		Promise.all([
			fetch(this.classlistUrl, options)
				.then( r => r.json() )
				.then( d => this.__loadPagedData(d) ),
			fetch(this.exemptionsUrl, options)
				.then( r => r.json() )
				.then( b => this.exemptions = b )
		])
			.then( () => {
				this.__mapUserData();
			})
			.catch( () => {
				this.$.toast.text = this.localize('lblCouldNotLoad');
				this.$.toast.show();
			});
	},
	loadMore: function() {
		let url = this.classlistUrl;

		if ( this.bookmark ) {
			url += `?bookmark=${this.bookmark}`;
		}

		fetch(url, options)
			.then( r => r.json() )
			.then( d => {
				this.__loadPagedData(d);
				this.__mapUserData();
			});
	},
	__mapUserData: function() {
		this.set('userData', this.classlistItems.map(
			(user)=>{
				user.IsExempt = this.exemptions.some( e => {
					return e.UserId === user.Identifier;
				});
				return user;
			}
		));
	},
	__loadPagedData: function(pagedData) {
		this.page++;
		this.bookmark = pagedData.PagingInfo.Bookmark;
		this.hasMoreItems = pagedData.PagingInfo.HasMoreItems;
		this.push( 'classlistItems', ...pagedData.Items );
	}
};

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.ActivityExemptions = window.D2L.PolymerBehaviors.ActivityExemptions || {};

/* @polymerBehavior */
window.D2L.PolymerBehaviors.ActivityExemptions.LoadMoreExemptionsBehavior = LoadMoreExemptionsBehavior;
