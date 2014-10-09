
Ext.define("Publishing.view.layout.Layout",{
    extend: "Ext.panel.Panel",

    requires: [
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
        region: 'north',
        height: 100,
        html: 'header'
    },{
        xtype: 'panel',
        region: 'center',
        layout: {
            type: 'card'
        },
        itemId: 'mainContent'
    }]
});
