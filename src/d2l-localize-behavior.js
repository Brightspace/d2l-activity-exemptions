import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
/**
 * Behavior for localization.
 *
 * @polymerBehavior
 */
const LocalizeBehavior = {
	properties: {
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
	},
	__computeLanguage: function(resources, locale) {
		locale = locale.toLowerCase();
		if (resources[locale]) {
			return locale;
		}

		const lang = locale.split('-')[0];
		if (resources[lang]) {
			return lang;
		}

		return 'en';
	}
};
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.ActivityExemptions = window.D2L.PolymerBehaviors.ActivityExemptions || {};

/** @polymerBehavior D2L.PolymerBehaviors.ActivityExemptions.LocalizeBehavior */
window.D2L.PolymerBehaviors.ActivityExemptions.LocalizeBehavior = [
	AppLocalizeBehavior,
	LocalizeBehavior
];
