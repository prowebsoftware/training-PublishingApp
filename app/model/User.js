Ext.define('Publishing.model.User', {
    extend: 'Ext.data.Model',

    requires: ['Publishing.model.Address'],

    hasMany:[{
        name: 'posts',
        model: 'Publishing.model.Post',
        associatedKey: 'posts'
    }],

    hasOne: [{
        //name: 'address', // not required as getAddress auto created.
        model: 'Publishing.model.Address',
        associationKey: 'address'
    }]
});
