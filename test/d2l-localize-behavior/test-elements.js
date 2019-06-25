import '../../src/d2l-localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
	is: 'test-localize',
	behaviors: [ D2L.PolymerBehaviors.ActivityExemptions.LocalizeBehavior ],
	ready: function() {
		dom(this.root).appendChild(
			document.createTextNode(
				this.localize('ariaSelectUnselectAll')
			)
		);
	}
});
