module.exports = {
    minify: {
        expand: true,
        cwd: '<%= config.dist.css %>/',
        src: ['*.css'],
        dest: '<%= config.dist.css %>/',
        ext: '.css'
    }
}
