/**
 * Developer: Grigory Kuznetsov
 * Date: 17.07.2015
 * Copyright: 2009-2016 Comindware®
 *       All Rights Reserved
 * Published under the MIT license
 */

"use strict";

import { moment } from '../../libApi';
import template from './templates/timeEditor.hbs';
import BaseLayoutEditorView from './base/BaseLayoutEditorView';
import TimeView from './impl/dateTime/views/TimeView';

const defaultOptions = {
};

/**
 * @name TimeEditorView
 * @memberof module:core.form.editors
 * @class Редактор времени. Поддерживаемый тип данных: <code>String</code> в формате ISO8601
 * (например, '2015-07-20T10:46:37Z').
 * @extends module:core.form.editors.base.BaseEditorView
 * @param {Object} options Options object. Doesn't have it's own options.
 * All the properties of {@link module:core.form.editors.base.BaseEditorView BaseEditorView} class are also supported.
 * */
Backbone.Form.editors.Time = BaseLayoutEditorView.extend(/** @lends module:core.form.editors.TimeEditorView.prototype */{
    initialize: function (options) {
        options = options || {};
        if (options.schema) {
            _.extend(this.options, defaultOptions, _.pick(options.schema, _.keys(defaultOptions)));
        } else {
            _.extend(this.options, defaultOptions, _.pick(options || {}, _.keys(defaultOptions)));
        }

        this.timeModel = new Backbone.Model({
            value: this.value,
            enabled: this.getEnabled(),
            readonly: this.getReadonly()
        });
        this.listenTo(this.timeModel, 'change:value', this.__change, this);

        this.timeView = new TimeView({
            model: this.timeModel
        });
    },

    regions: {
        timeRegion: '.js-time-region'
    },

    className: 'l-field l-field_time',

    template: template,

    templateHelpers: function () {
        return this.options;
    },

    __change: function () {
        this.__value(this.timeModel.get('value'), true, true);
    },

    setValue: function (value) {
        this.__value(value, true, false);
        this.timeModel.set('value', value);
    },

    onRender: function () {
        this.timeRegion.show(this.timeView);
    },

    __value: function (value, updateUi, triggerChange) {
        if (this.value === value) {
            return;
        }
        this.value = value;

        if (triggerChange) {
            this.__triggerChange();
        }
    },

    getValue: function () {
        return this.value === null ? this.value : moment(this.value).toISOString();
    },

    __setEnabled: function (enabled) {
        BaseLayoutEditorView.prototype.__setEnabled.call(this, enabled);
        this.timeModel.set({enabled: this.getEnabled()});
    },

    __setReadonly: function (readonly) {
        BaseLayoutEditorView.prototype.__setReadonly.call(this, readonly);
        this.timeModel.set({readonly: this.getReadonly()});
    }
});

export default Backbone.Form.editors.Time;
