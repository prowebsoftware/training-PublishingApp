Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    require: ['Publishing.home.Home'],

    routes: {
        'home' : 'onHome',
        'users' : 'onUsers'
    },

    onHome : function(){
        console.log('home');

        var view = Ext.create('Publishing.view.home.Home');
        this.getView().down('panel[region=center]').setActiveItem(view);

    },

    onUsers : function(){
        console.log('users');
        this.getView().down('panel[region=center]').setHtml('users');
    }
    
});
