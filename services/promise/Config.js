﻿define(['module/lib'], function () {
    Promise.config({
        warnings: false,
        longStackTraces: true,
        cancellation: true
    });
});