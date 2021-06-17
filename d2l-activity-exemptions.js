import '@brightspace-ui/core/components/alert/alert-toast.js';
import '@brightspace-ui/core/components/button/button.js';
import '@brightspace-ui/core/components/offscreen/offscreen.js';
import '@brightspace-ui/core/components/inputs/input-checkbox.js';
import '@brightspace-ui/core/components/inputs/input-checkbox-spacer.js';
import '@brightspace-ui/core/components/inputs/input-search.js';
import '@polymer/polymer/polymer-legacy.js';
import 'd2l-table/d2l-table-wrapper.js';
import 'd2l-simple-overlay/d2l-simple-overlay.js';
import './localize-behavior.js';
import './mixins/d2l-load-more.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
/*
 * @polymer
 * @customElement
 * @extends PolymerElement
 * @appliesMixin D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehavior
 */
class D2LActivityExemptions extends mixinBehaviors(
	[
		D2L.PolymerBehaviors.D2LActivityExemptions.LocalizeBehavior,
		D2L.Polymer.Mixins.D2LActivityExemptions.LoadMoreExemptionsBehavior,
	],
	PolymerElement
) {
	static get is() {
		return 'd2l-activity-exemptions';
	}
	static get properties() {
		return {
			autoload: {
				type: Boolean,
				value: false
			},
			exemptionCount: {
				type: String,
				computed: 'getUserExemptionCount(userData.*)'
			},
			exemptionsUpdateUrl: {
				type: String
			}
		};
	}
	static get template() {
		return html`
	  <style include="d2l-table-style">
		:host {
		  display: block;
		  padding-bottom: 40px;
		}

		d2l-alert-toast {
		  width: 350px;
		  margin-left: calc(50vw - 175px);
		  text-align: center;
		}

		d2l-input-search {
		  width: 250px;
		  display: inline;
		  float: right;
		}

		div[role=main] {
		  width: 100%;
		}

		.toggle-exemption-buttons {
		  padding-right: 25px;
		}

		.bottom-buttons {
		  padding-top: 10px;
		}
	  </style>

	  <div role="main">
		<d2l-button
		  id="exemptBtn"
		  class="toggle-exemption-buttons"
		  aria-label$="[[localize('ariaExempt')]]"
		  primary=""
		  on-click="exemptSelected"
		>
		  [[localize('btnExempt')]]
		</d2l-button>

		<d2l-button
		  id="unexemptBtn"
		  class="toggle-exemption-buttons"
		  aria-label$="[[localize('ariaUnexempt')]]"
		  on-click="unexemptSelected"
		>
		  [[localize('btnUnexempt')]]
		</d2l-button>

		<d2l-input-search id="search" placeholder="[[localize('lblSearchPlaceholder')]]">
		</d2l-input-search>

		<div id="exemptions-count">
		  <p>[[exemptionCount]]</p>
		</div>

		<d2l-table-wrapper>
			<table class="d2l-table" id="classlist" aria-label$="[[localize('ariaTableSummary')]]">
				<thead>
					<tr>
						<th>
							<d2l-input-checkbox
								aria-label$="[[localize('ariaSelectUnselectAll')]]"
								id="select-all"
								aria-label$="[[localize('ariaSelectUnselectAll')]]"
								on-change="selectAll">
							</d2l-input-checkbox>
						</th>
						<th>[[localize('lblDisplayName')]]</th>
						<th>[[localize('lblOrgDefinedId')]]</th>
						<th>[[localize('lblExemptStatus')]]</th>
					</tr>
				</thead>
				<tbody>
					<template id="userListRows" is="dom-repeat" items="[[userData]]" observe="IsExempt isSelected">
						<tr class="row-user" data="[[item]]" selected$="[[_getSelected(item.isSelected)]]">
							<td>
								<d2l-input-checkbox
									class="checkbox-user"
									checked=[[item.isSelected]]
									on-click="_toggleSelectedStatus"
									aria-label$="[[getCheckboxAriaLabel(item.IsExempt, item.DisplayName)]]">
								</d2l-input-checkbox>
							</td>
							<th class="userfullname">[[item.DisplayName]]</th>
							<th>[[item.OrgDefinedId]]</th>
							<th class="exemptStatus">
								<template is="dom-if" if="[[item.IsExempt]]">[[localize('lblExempt')]]</template>
								<template is="dom-if" if="[[!item.IsExempt]]"><d2l-offscreen>[[localize('lblNotExempt')]]</d2l-offscreen></template>
							</th>
						</tr>
					</template>
				</tbody>
			</table>
		</d2l-table-wrapper>

		<template is="dom-if" if="[[hasMoreItems]]">
		  <d2l-button
			class="toggle-exemption-buttons bottom-buttons"
			role="button"
			aria-label$="[[localize('ariaLoadMore')]]"
			on-click="loadMore"
		  >
			[[localize('btnLoadMore')]]
		  </d2l-button>
		</template>

		<d2l-button
		  class="toggle-exemption-buttons bottom-buttons"
		  role="button"
		  aria-label$="[[localize('ariaExempt')]]"
		  primary=""
		  on-click="exemptSelected"
		>
		  [[localize('btnExempt')]]
		</d2l-button>

		<d2l-button
		  class="toggle-exemption-buttons bottom-buttons"
		  role="button"
		  aria-label$="[[localize('ariaUnexempt')]]"
		  on-click="unexemptSelected"
		>
		  [[localize('btnUnexempt')]]
		</d2l-button>

		<d2l-alert-toast id="toast" ></d2l-alert-toast>
	  </div>
	`;
	}

	ready() {
		super.ready();
		this.$.search.addEventListener('d2l-input-search-searched', this.doSearch.bind(this));
		if (this.autoload) {
			this.load();
		}
	}

	_getSelected(isSelected) {
		return !!isSelected;
	}

	load() {
		this.loadInitialList();
		this.$.exemptBtn.focus();
	}

	doSearch(e) {
		this.set('searchTerm', e.detail.value);
		const options = {
			headers: new Headers({
				'Access-Control-Allow-Origin': '*'
			}),
			method: 'GET',
			mode: 'cors'
		};
		let url = this.classlistUrl;
		url += `&searchTerm=${this.searchTerm}`;

		fetch(url, options)
			.then(r => r.json())
			.then(d => {
				this.set('classlistItems', []);
				this.__loadPagedData(d);
				this.__mapUserData();
				this._clearCheckboxes();
			});
	}

	exemptSelected() {
		this._toggleExemption(true);
	}

	getUserExemptionCount() {
		const count = this.userData.filter(u => u.IsExempt).length;

		// count.toString() is required due to localize returning '' when count is 0
		return this.localize(
			'lblExemptionCount',
			'exemptionCount',
			count.toString()
		);
	}
	_toggleSelectedStatus(event) {
		event.model.set('item.isSelected', !event.model.get('item.isSelected'));
	}

	selectAll(e) {
		this.root
			.querySelectorAll('.checkbox-user')
			.forEach(element => {
				element.checked = e.target.checked;
			});
		this.userData.forEach((user, index) => this.set(`userData.${index}.isSelected`, e.target.checked));
	}

	getCheckboxAriaLabel(isExempt, displayName) {
		var labelText = isExempt ? 'ariaSelectExemptUser' : 'ariaSelectNotExemptUser';

		return this.localize(labelText, 'fullName', displayName);
	}

	showSaveToast(isExempt, numChanged) {
		var actionText = isExempt ? 'toastExempt' : 'toastUnexempt';

		this.$.toast.open = false;
		this.$.toast.subtext = this.localize(actionText, 'count', numChanged);
		this.$.toast.open = true;
	}

	_clearCheckboxes() {
		this.root
			.querySelector('#select-all')
			.checked = false;
		this.root
			.querySelectorAll('.checkbox-user[checked]')
			.forEach(element => {
				element.checked = false;
			});
		this.userData.forEach((user, index) => this.set(`userData.${index}.isSelected`, false));
	}

	_toggleExemption(isExempt) {
		var userList = Array.from(this.$.classlist.querySelectorAll('.row-user'));
		var filteredSelection = userList.filter(
			element =>
				element.querySelector('.checkbox-user').checked &&
			element.data['IsExempt'] !== isExempt
		);
		var token = D2L.LP.Web.Authentication.Xsrf.GetXsrfToken();
		const options = {
			headers: new Headers({
				'Content-Type': 'application/json',
				'X-Csrf-Token': token
			}),
			method: isExempt ? 'POST' : 'DELETE',
			mode: 'cors'
		};

		var allPromises = filteredSelection.map(element => {
			return fetch(
				`${this.exemptionsUpdateUrl}&userId=${element.data.Identifier}`,
				options
			)
				.then(() => {
					const row = this.userData.findIndex(function(el) {
						if (el.Identifier === element.data.Identifier) return el;
					});
					this.set(`userData.${row}.IsExempt`, isExempt);
				});
		});

		Promise.all(allPromises).then(() => {
			this.showSaveToast(isExempt, allPromises.length);
		})
			.catch(() => {
				this.$.toast.open = false;
				this.$.toast.subtext = this.localize('toastCouldNotLoad');
				this.$.toast.open = true;
			})
			.finally(() => {
				this.refreshExemptions();
				this.$.userListRows.render();
			});
	}

	unexemptSelected() {
		this._toggleExemption(false);
	}

	_getFullName(firstName, lastName) {
		return `${firstName} ${lastName}`;
	}
}
customElements.define(D2LActivityExemptions.is, D2LActivityExemptions);
