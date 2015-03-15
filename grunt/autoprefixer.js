module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9']
    },
    main: {
        src: '<%= config.dist.css %>/main.css',
        dest: '<%= config.dist.css %>/main.css'
    },
    vendor: {
        src: '<%= config.dist.css %>/vendors.css',
        dest: '<%= config.dist.css %>/vendors.css'
    },
}
