Ext.define('Publishing.model.Post', {
    extend: 'Ext.data.Model',

    // Remember to require else Sencha will silently fail to associate the data!
    requires: ['Publishing.model.Comment'],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'userId', type: 'int' },
        { name: 'title', type: 'auto' },
        { name: 'body', type: 'auto' }

    ],

    hasMany: [{
        name: 'comments',
        model: 'Publishing.model.Comment',
        associationKey: 'comments'
    }]
});
