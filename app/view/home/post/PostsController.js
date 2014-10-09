Ext.define('Publishing.view.home.post.PostsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-posts',

    requires: [
        'Publishing.view.home.singlepost.Singlepost'
    ],

    constructor: function(){
        var store = Ext.getStore('Posts');


        store.on('datachanged', this.renderPosts, this);


    },

    renderPosts: function( store ){
        var view = this.getView();

        console.log('Here...');

        view.suspendLayout = true;

        view.removeAll();

        var posts = [];

        store.each(function( rec ){
            var singlepost = Ext.factory({
                xtype: 'singlepost'
            });

            posts.push(singlepost);

            singlepost.getViewModel().set('record', rec);
        }, this);

        view.add( posts );

        view.suspendLayout = false;
        view.doLayout();

    }
    
});
