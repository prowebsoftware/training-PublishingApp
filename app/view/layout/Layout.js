
Ext.define("Publishing.view.layout.Layout",{
    extend: "Ext.panel.Panel",

    xtype: 'layout',

    requires: [
        'Publishing.view.home.post.Posts',
        'Publishing.view.layout.LayoutController',
        'Publishing.view.layout.LayoutModel'
    ],

    controller: "layout-layout",
    viewModel: {
        type: "layout-layout"
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        region: 'center',
        xtype: 'posts',
        flex: 1
    },{
        xtype: 'panel',
        region: 'east',
        xtype: 'editform',
        title: 'Edit Post',
        reference: 'editform',
        flex: 1,
        bodyPadding: 10
    }]
});
