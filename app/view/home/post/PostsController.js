Ext.define('Publishing.view.home.post.PostsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-posts',

    constructor: function(){
        var store = Ext.getStore('Posts');


        store.on('datachanged', this.renderPosts, this);


    },

    renderPosts: function( store ){
        var view = this.getView();

        view.suspendLayout = true;

        view.removeAll();

        store.each(function( rec ){
            view.add({
                xtype: 'container',
                html: rec.get('title')
            });
        }, this);

        view.suspendLayout = false;
        view.doLayout();

    }
    
});
