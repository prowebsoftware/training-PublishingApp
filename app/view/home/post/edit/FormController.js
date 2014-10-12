Ext.define('Publishing.view.home.post.edit.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-post-edit-form',

    onSave: function() {
        var form = this.getView().getForm(), // get the basic form
            record = form.getRecord(); // get the underlying model instance

        if (form.isValid()) {

            record.store.sync({
                success: function() {
                    Ext.Msg.alert('Success', 'Saved successfully.');
                },
                failure: function() {
                    Ext.Msg.alert('Failure', 'Failed to save!.');
                }
            });

        }else{
            Ext.Msg.alert('Valid!', 'The form is not valid!');
        }
    },

    onDelete: function(){
        var form = this.getView().getForm(), // get the basic form
            record = form.getRecord(), // get the underlying model instance
            store = record.store,
            me = this;

        record.store.remove( record );
        store.sync({
            success: function() {
                Ext.Msg.alert('Success', 'Deleted successfully.');
                me.getView().reset();
            },
            failure: function() {
                Ext.Msg.alert('Failure', 'Failed to delete!.');
            }
        });
    }
    
});