module.exports = {
    main: {
    	expand: true,
    	flatten: true,
        src: '<%= config.app.dir %>/*.html',
        dest: '<%= config.dist.dir %>/'
    }
}
