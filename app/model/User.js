Ext.define('Publishing.model.User', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'street',
        mapping: function(data){
            return data.address.street;
        }
    },{
        name: 'city',
        mapping: function(data){
            return data.address.city;
        }
    },{
        name: 'zipcode',
        mapping: function(data){
            return data.address.zipcode;
        }
    },{
        name: 'suite',
        mapping: function(data){
            return data.address.suite;
        }
    }
    ],

    hasMany:[{
        name: 'posts',
        model: 'Publishing.model.Post',
        associatedKey: 'posts'
    }]
});
