module.exports = {
    options: {
        preserveComments: 'some'
    },
    jsfiles: {
        files: [{
            expand: true,
            cwd: '<%= config.dist.js %>/',
            src: [
                'main.js'
            ],
            dest: '<%= config.dist.js %>/',
            ext: '.min.js'
        }]
    }
}
