module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            staticDistDir: './',
            numberOfRuns: 3
        },

        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage'
        },
    },
};