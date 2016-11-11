module.exports = {
    settings: {
        'import/resolver': {
            webpack: {
                config: 'js/build/webpack.app.development.config.js'
            }
        }
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "amd": true,
        "es6": true,
        "jquery": true
    },
    "globals": {
        "__DEV__": true,
        "Backbone": true,
        "Handlebars": true,
        "Localizer": true,
        "Ajax": true,
        "Marionette": true,
        "_": true,
        "describe": true,
        "it": true,
        "beforeEach": true,
        "afterEach": true
    },
    "rules": {
        "new-cap": 0,
        "no-continue": 0,
        "import/no-amd": 0,
        "import/no-dynamic-require": 0,
        "import/newline-after-import": 0,
        "quote-props": 0,
        "no-console": 0,
        "arrow-parens": 0,
        "global-require": 0,
        "prefer-rest-params": 0,
        "no-param-reassign": 0,
        "no-underscore-dangle": ["error", { "allowAfterThis": true, "allowAfterSuper": true }],
        "react/jsx-quotes": 0,
        "react/jsx-no-bind": 0,
        "linebreak-style": "off",
        "no-return-assign": 0,
        "jsx-quotes": [2, "prefer-double"],
        "indent": [2, 4, { "SwitchCase": 0, "VariableDeclarator": 1 }],
        "prefer-arrow-callback": 0,
        "comma-dangle": 0,
        "func-names": 0,
        "spaced-comment": 0,
        "prefer-const": 0,
        "space-before-function-paren": 0,
        "array-bracket-spacing": 0,
        "object-curly-spacing": 0,
        "strict": 0,
        "arrow-body-style": 0,
        "object-shorthand": 0,
        "no-useless-constructor": 0,
        "no-trailing-spaces": 0,
        "no-unused-vars": 0,
        "max-len": [2, 160, 4, {
            "ignoreUrls": true,
            "ignoreComments": false
        }],
        "react/jsx-indent-props": 0,
        "react/jsx-closing-bracket-location": 0
    }
};
