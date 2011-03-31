Ext.namespace('App.Catalog');

/**
 * Catalog Categories Tree
 */
App.Catalog.Categories = Ext.extend(App.AbstractTreePanel, {
    treeUrl:		base_url + 'admin_catalogd',
    useTbar:		true
});
//
//register xtype
Ext.reg('catalogcategories', App.Catalog.Categories);

/**
 * Catalog Products Grid
 */
App.Catalog.Products = Ext.extend(App.AbstractGridPanel, {
    
});
//
//register xtype
Ext.reg('catalogproducts', App.Catalog.Products);

/**
 * Catalog Panel
 */
App.Catalog.Panel = Ext.extend(App.AbstractPanel, {

    buildItems:function(config) {
        config.items = [{
	    title	    : Lng.Catalog.Titles.categories,
	    xtype	    : 'catalogcategories',
	    region	    : 'west',
	    layout	    : 'fit',
	    width	    : 260,
	    split	    : true,
	    collapsible	    : true,
	    autoScroll	    : true,
	    margins	    : '5 0 5 5',
	    cmargins	    : '5 5 5 5'
        },{
	    title	    : Lng.Catalog.Titles.products,
	    //xtype	    : 'catalogproducts',
	    region	    : 'center',
	    layout	    : 'fit',
	    margins	    : '5 5 5 0',
	    cmargins	    : '5 5 5 0'
        }];
    } // eo function buildItems

});
//
//register xtype
Ext.reg('catalogpanel', App.Catalog.Panel);