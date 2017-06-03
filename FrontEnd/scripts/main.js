requirejs.config({
	paths: {
    	Backbone:'../lib/js/backbone',
    	underscore:'../lib/js/underscore',
    	jquery:'../lib/js/jquery',
        text:'../lib/js/text',
        Router:'router',
        Config:'config',
        less:'../lib/js/less'
    },
     shim: {
        'backbone': {
            deps: ['underscore', 'jquery']
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['less','Router']);