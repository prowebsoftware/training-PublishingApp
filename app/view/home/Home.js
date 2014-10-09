
Ext.define("Publishing.view.home.Home",{
    extend: "Ext.panel.Panel",

    requires: [
        'Publishing.view.home.HomeController',
        'Publishing.view.home.HomeModel',
        'Publishing.view.home.post.Posts'
    ],

    controller: "home-home",
    viewModel: {
        type: "home-home"
    },

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'posts',
        flex: 1
    },{
        xtype: 'panel',
        itemId: 'form',
        flex: 1,
        layout: {
            type: 'card'
        }
    }]
});
