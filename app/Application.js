/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.define('Publishing.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Publishing',

    defaultToken: 'home',

    stores: [
        // TODO: add global / shared stores here
        'Posts'
    ],
    
    launch: function () {
        // TODO - Launch the application


    }
});
