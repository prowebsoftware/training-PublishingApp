Ext.define('Publishing.view.layout.LayoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.layout-layout',

    requires: [
        'Publishing.view.home.post.edit.Form',
        'Publishing.view.users.Users'
    ],

    showUsers: function(){
        var window = Ext.create('Publishing.view.users.Users', {
        });

        window.show();
    }
    
});
