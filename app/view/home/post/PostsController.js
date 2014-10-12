Ext.define('Publishing.view.home.post.PostsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-posts',

    requires: [

    ],

    onRowClick: function( table, record, tr, rowIndex ){
        var form = this.getView().findParentByType('layout').down('editform');

        form.getViewModel().set( 'record', record );
        form.getForm().loadRecord( record );

        var grid = this.getView().findParentByType('layout').down('comments');
        Publishing.model.Comment.getProxy().setUrl('http://localhost:3000/posts/'+record.get('id')+'/comments');
        grid.getStore().load();
    }
    
});
