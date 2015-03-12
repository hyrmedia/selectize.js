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

Selectize.define('update_item', function(options) {
    var self = this;

    options.text = options.text || function (option) {
        return option[this.settings.labelField];
    };

    this.updateItem = function (value, data) {
        var self = this;
        var $item, i, idx;
        var caret = self.caretPos;

        $item = (typeof value === 'object') ? value : self.getItem(value);
        value = $item.attr('data-value');
        i = self.items.indexOf(value);

        if (i == -1) {
            return false;
        }

        // Found the item; update the Option
        self.updateOption(value, data);

        // Clear/reset the selector input
        self.setTextboxValue('');
        self.setCaret(caret);
        self.refreshOptions(false);

        return true;
    }
});