// postcss.config.js
const asyncPlugin = require('some-async-plugin');

module.exports = (ctx) => ({
    plugins: {
        'nativewind': {},
        'async-plugin': {
            process: async (css) => {
                return await asyncPlugin.process(css);
            },
        },
        // Add other PostCSS plugins as needed
    },
});
