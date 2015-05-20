/**
 * Plugin: "update_item" (selectize.js)
 * Copyright (c) 2014 Brian Lacy
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Lacy <blacy@netdocuments.com>
 */

// By default, "multiple" type inputs don't close on click. This plugin
// lets "multiple" inputs behave more like "single" inputs.

Selectize.define('multi_close', function(options) {
    var self = this;

    options.text = options.text || function (option) {
        return option[this.settings.labelField];
    };

    /**
	 * Triggered when the main control element
	 * has a mouse down event.
	 *
	 * @param {object} e
	 * @return {boolean}
	 */
    
    this.setup = (function () {
        var original = self.setup;

        return function () {
            original.apply(this, arguments);
            this.$control.on('mousedown touchstart', function (e) {
                
                console.log("multi_close:mousedown|touchstart");

                if (self.isFocused) {
                    // retain focus by preventing native handling. if the
                    // event target is the input it should not be modified.
                    // otherwise, text selection within the input won't work.
                    if (e.target !== self.$control_input[0]) {
                        if (self.settings.mode === 'multi') {
                            // toggle dropdown
                            self.isOpen ? self.close() : self.open();
                        }
                    }
                }
                
            });
        };

    })();
    
});
