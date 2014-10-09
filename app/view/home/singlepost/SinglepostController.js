Ext.define('Publishing.view.home.singlepost.SinglepostController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.home-singlepost-singlepost',

    init: function(){

        this.callParent( arguments );

        this.getView().on('click', this.onClick, this);
    },

    onClick: function(){
        var record = this.getView().getViewModel().data.record;
        this.redirectTo('home/'+record.getId());
    }
    
});
