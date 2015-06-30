/**
 * Developer: Ksenia Kartvelishvili
 * Date: 26.06.2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _, Localizer, Promise */

define(['core/utils/helpers', './loading/views/LoadingView'],
    function (helpers, LoadingView) {
        'use strict';

        return Marionette.Behavior.extend({
            initialize: function (options, view) {
                helpers.ensureOption(options, 'region');

                this.loadingViewOptions = {
                    text: options.text || Localizer.get('PROCESS.COMMON.DEFAULTLOADING')
                };
                view.loading = {
                    setLoading: this.setLoading.bind(this)
                };
            },

            setLoading: function (visible) {
                if (_.isBoolean(visible)) {
                    if (visible) {
                        this.view[this.options.region].show(new LoadingView(this.loadingViewOptions));
                    } else {
                        this.view[this.options.region].reset();
                    }
                } else if (_.isObject(visible)) {
                    this.setLoading(true);
                    Promise.resolve(visible).bind(this).then(function () {
                        //noinspection JSPotentiallyInvalidUsageOfThis
                        this.setLoading(false);
                    }, function () {
                        //noinspection JSPotentiallyInvalidUsageOfThis
                        this.setLoading(false);
                    });
                } else {
                    helpers.throwError('Invalid argument format.', 'FormatError');
                }
            }
        });
    });