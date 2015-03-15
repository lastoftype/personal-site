module.exports = {
    main: {
        files: [{
            expand: true,
            cwd: '<%= config.assets.sass %>/',
            src: [
                '*.scss',
                '!mixins.scss',
                '!vendors.scss'
            ],
            dest: '<%= config.dist.css %>/',
            ext: '.css'
        }]
    },
    vendors: {
        files: [{
            expand: true,
            cwd: '<%= config.assets.sass %>/',
            src: [
                'vendors.scss',
            ],
            dest: '<%= config.dist.css %>/',
            ext: '.css'
        }]
    }
}
