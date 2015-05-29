/**
 * Developer: Ksenia Kartvelishvili
 * Date: 04.03.2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _ */

define([
        'module/lib',
        './base/BaseCollectionEditorView',
        './impl/radioGroup/views/RadioButtonView',
        './impl/radioGroup/collections/RadioGroupCollection'
    ],
    function (lib, EditorBaseCollectionView, RadioButtonView, RadioGroupCollection) {
        'use strict';

        var defaultOptions = {
            radioOptions: [{ id: '', displayText: '' }]
        };

        Backbone.Form.editors.RadioGroup = EditorBaseCollectionView.extend({
            initialize: function (options) {
                if (options.schema) {
                    _.extend(this.options, defaultOptions, _.pick(options.schema, _.keys(defaultOptions)));
                } else {
                    _.extend(this.options, defaultOptions, _.pick(options || {}, _.keys(defaultOptions)));
                }
                this.collection = new RadioGroupCollection(this.options.radioOptions);
            },

            className: 'fd-radio-group',

            childView: RadioButtonView,

            collectionEvents: {
              'select:one': '__onSelectChild'
            },

            childViewOptions: function () {
                return {
                    selected: this.getValue(),
                    enabled: this.getEnabled()
                };
            },

            __onSelectChild: function (model) {
                this.__value(model.get('id'), true);
            },

            setValue: function (value) {
                this.__value(value, false);
            },

            __value: function (value, triggerChange) {
                if (this.value === value) {
                    return;
                }
                this.value = value;
                this.collection.findWhere({ id: value }).select();
                if (triggerChange) {
                    this.__triggerChange();
                }
            }
        });

        return Backbone.Form.editors.RadioGroup;
    });