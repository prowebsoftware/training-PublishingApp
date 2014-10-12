Ext.define('Publishing.view.home.post.PostsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-posts',

    requires: [

    ],

    onRowClick: function( table, record, tr, rowIndex ){
        this.getViewModel().set('editrecord', record);

        var form = this.getView().findParentByType('layout').down('editform');

        form.getViewModel().set( 'record', record );
        form.getForm().loadRecord( record );
    }
    
});
