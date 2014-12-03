/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.Loader.setConfig({

    enabled: true,
    disableCaching: false,
    paths: {
        //Contains the Deferred library used for promises
        'Ext.ux' : 'Ext.ux'
    }
});

Ext.define('Publishing.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Publishing',

    defaultToken: 'home',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application


    }
});
