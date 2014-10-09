
Ext.define("Publishing.view.home.singlepost.Singlepost",{
    extend: "Ext.panel.Panel",

    xtype: 'singlepost',

    requires: [
        'Publishing.view.home.singlepost.SinglepostController',
        'Publishing.view.home.singlepost.SinglepostModel'
    ],

    height: 100,

    controller: "home-singlepost-singlepost",
    viewModel: {
        type: "home-singlepost-singlepost"
    },

    bind: {
        title: '{record.title}'
    },


    items: [{
        xtype: 'container',
        bind: {
            html: '{record.body}'
        }
    }]
});
