Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    requires: [
        'Publishing.view.home.Home',
        'Publishing.view.home.post.edit.Form'
    ],

    routes: {
        'home' : 'onHome',
        'home/:id' : 'onHome',
        'users' : 'onUsers'
    },

    onHome : function( id ){
        console.log('home ', id);

        if ( !this.homeView ){
            this.homeView = Ext.create('Publishing.view.home.Home');
            this.getView().down('panel[region=center]').setActiveItem(this.homeView);
        }


        if ( id ){
            if ( !this.editForm ) {
                this.editForm = Ext.factory({
                    xtype: 'editform'
                });

                this.getView().down('panel[region=center]').down('[itemId=form]').setActiveItem(this.editForm);
            }


            var store = Ext.getStore('Posts');
            if ( store.getRange().length === 0 ){
                store.on('load', Ext.bind(this.loadData, this, [id]), this, {single: true});
            }
            this.loadData(id);

        }

    },

    onUsers : function(){
        console.log('users');
        this.getView().down('panel[region=center]').setHtml('users');
    },

    loadData: function( id ){
        var model = Ext.getStore('Posts').getById(id);
        this.editForm.getViewModel().set('record', model );
    }
    
});
