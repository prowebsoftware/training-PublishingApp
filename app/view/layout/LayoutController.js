Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    routes: {
        'home' : 'onHome',
        'users' : 'onUsers'
    },

    onHome : function(){
        console.log('home');
        this.getView().down('panel[region=center]').setHtml('home');
    },

    onUsers : function(){
        console.log('users');
        this.getView().down('panel[region=center]').setHtml('users');
    }
    
});
