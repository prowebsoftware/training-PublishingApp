
Ext.define("Publishing.view.home.post.Posts",{
    extend: "Ext.panel.Panel",

    xtype: 'posts',

    requires: [
        'Publishing.view.home.post.PostsController',
        'Publishing.view.home.post.PostsModel'
    ],

    autoScroll: true,

    controller: "home-post-posts",
    viewModel: {
        type: "home-post-posts"
    },

    title: 'Posts',

    layout: {
        type: 'vbox',
        align: 'stretch'
    }
});
