Ext.define('Publishing.store.Posts', {
    extend: 'Ext.data.Store',
    model: 'Publishing.model.Post',


    autoLoad: true,

    proxy: {
        type: 'rest',
        api: {
            read: 'http://jsonplaceholder.typicode.com/posts?userId=1'
        },
        reader: {
            type: 'json'
        },

        // Disable all query string params on the proxy manually
        pageParam: false,
        startParam: false,
        limitParam: false,
        noCache: false

    }
});