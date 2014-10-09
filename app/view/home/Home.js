
Ext.define("Publishing.view.home.Home",{
    extend: "Ext.panel.Panel",

    requires: [
        'Publishing.view.home.HomeController',
        'Publishing.view.home.HomeModel'
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
        xtype: 'panel',
        title: 'Posts',
        flex: 1
    },{
        xtype: 'panel',
        title: 'Edit Post',
        flex: 1
    }]
});
