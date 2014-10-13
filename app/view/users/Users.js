
Ext.define("Publishing.view.users.Users",{
    extend: "Ext.window.Window",

    controller: "users-users",
    viewModel: {
        type: "users-users"
    },

    xtype: 'users',

    requires: [
        'Publishing.view.users.UsersController',
        'Publishing.view.users.UsersModel',
        'Publishing.model.User',
        'Publishing.view.users.edit.Form'
    ],

    title: 'Users',
    //modal: true,
    height: 500,
    width: 800,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [{  // Let's put an empty grid in just to illustrate fit layout
        xtype: 'grid',
        flex: 1,
        border: false,
        columns: [{
            header: 'Name',
            dataIndex: 'name',
            flex: 1
        }],                 // One header just for show. There's no data,
        bind: {
            store: '{users}'
        },
        listeners: {
            rowclick: 'userRowClick'
        }
    },{
        xtype: 'container',
        flex: 2,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'usersform',
            reference: 'usersform',
            flex: 3
        },{
            xtype: 'grid',
            title: 'User Posts',
            bind: '{userposts}',
            reference: 'usersposts',
            flex: 2.5,
            hideHeaders: true,
            columns: [{
                //header: false,
                dataIndex: 'title',
                flex: 1
            }]
        }]
    }]
});
