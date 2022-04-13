module.exports = {
    ci: {
        collect: {
            /* Add configuration here */
            staticDistDir: './src',
            numberOfRuns: 3
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', {minScore: 1}],
                'categories:accessibility': ['error', {minScore: 1}]
            }
        },
        upload: {
            /* Add configuration here */
            target: 'temporary-public-storage'
        },
    },
};