
Ext.define("Publishing.view.home.post.edit.Form",{
    extend: "Ext.form.Panel",

    xtype: 'editform',

    requires: [
        'Publishing.view.home.post.edit.FormController',
        'Publishing.view.home.post.edit.FormModel'
    ],

    controller: "home-post-edit-form",
    viewModel: {
        type: "home-post-edit-form"
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Title',
        bind: '{record.title}',
        height: 30
    }]
});
