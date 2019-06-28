import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';

function LocalizeBehavior() {
	debugger
	return class extends AppLocalizeBehavior(PolymerElement) {
		static get properties() {
			return {
				language: {
					type: String,
					computed: '__computeLanguage(resources, locale)'
				},
				locale: {
					type: String,
					value: function() {
						return document.documentElement.lang
							|| document.documentElement.getAttribute('data-lang-default')
							|| 'en-us';
					}
				},
				localize: {
					type: Function,
					computed: '__computeLocalize(language, resources, formats)'
				},
				resources: {
					value: function() {
						const enUS = {
							'btnExempt': 'Exempt',
							'ariaExempt': 'Exempt Selected Users',
							'btnUnexempt': 'Unexempt',
							'ariaUnexempt': 'Unexempt Selected Users',
							'btnLoadMore': 'Load More',
							'ariaLoadMore': 'Load More Users',
							'ariaTableSummary': 'The list of users that can have their exemption status modified.',
							'ariaTableCaption': 'Exempt from activity',
							'lblExemptStatus': 'Exempt Status',
							'lblFirstNameLastName': 'First Name Last Name',
							'lblOrgDefinedId': 'Org Defined Id',
							'ariaSelectUnselectAll': 'Select / Unselect All',
							'lblExemptionCount': 'Exemptions: {exemptionCount}',
							'lblExempt': 'Exempt',
							'lblNotExempt': 'Not Exempt',
							'lblUnexempt': 'Unexempt',
							'ariaSelectUser': 'Select {lastName}, {firstName}',
							'lblCouldNotLoad': 'Could not load activity exemption data.',
							'lblExemptSuccess': `Saved successfully. {itemCount, plural,
								=0 {Nothing saved}
								one {1 user exempted}
								other {{itemCount} users exempted}
							}.`,
							'lblUnexemptSuccess': `Saved successfully. {itemCount, plural,
								=0 {Nothing saved}
								one {1 user unexempted}
								other {{itemCount} users unexempted}
							}.`
						};

						return {
							'en': enUS
						};
					}
				}
			}
		}

		__computeLanguage() {
			this.locale = this.locale.toLowerCase();
			if (this.resources[this.locale]) {
				return this.locale;
			}

			const lang = locale.split('-')[0];
			if (this.resources[lang]) {
				return lang;
			}

			return 'en';
		}
	}
}

window.D2L = window.D2L || {};
window.D2L.Polymer = window.D2L.Polymer || {};
window.D2L.Polymer.Mixins = window.D2L.Polymer.Mixins || {};
window.D2L.Polymer.Mixins.D2LActivityExemptions = window.D2L.Polymer.Mixins.D2LActivityExemptions || {};
window.D2L.Polymer.Mixins.D2LActivityExemptions.LocalizeBehavior = LocalizeBehavior;

