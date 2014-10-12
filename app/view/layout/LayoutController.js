Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    requires: [
        'Publishing.view.home.post.edit.Form'
    ],

    routes: {
        'home' : 'onHome',
        'home/:id' : 'onHome',
        'users' : 'onUsers'
    },

    onHome : function( id ){
        console.log('home ', id);



    }
    
});
