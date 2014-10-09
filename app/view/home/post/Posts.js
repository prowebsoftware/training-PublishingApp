
Ext.define("Publishing.view.home.post.Posts",{
    extend: "Ext.panel.Panel",

    xtype: 'posts',

    autoScroll: true,

    requires: [
        'Publishing.view.home.post.PostsController',
        'Publishing.view.home.post.PostsModel'
    ],

    controller: "home-post-posts",
    viewModel: {
        type: "home-post-posts"
    },

    title: 'Posts'
});
