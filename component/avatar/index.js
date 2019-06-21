Component({
    externalClasses: ['iw-class'],

    properties: {
        // circle || square
        shape: {
            type: String,
            value: 'circle'
        },
        // small || large || default
        size: {
            type: String,
            value: 'default'
        },
        src: {
            type: String,
            value: ''
        }
    }
});
