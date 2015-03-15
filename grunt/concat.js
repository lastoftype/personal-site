module.exports = {
    extras: {
        src: [
            'app/bower_components/FitText.js/jquery.fittext.js',
            'app/assets/js/main.js'
        ],
        dest: '<%= config.dist.js %>/main.js',
    }
}
