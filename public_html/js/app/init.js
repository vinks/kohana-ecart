Ext.enableGarbageCollector = true;
Ext.BLANK_IMAGE_URL = base_url + 'js/ext-' + ext_version + '/resources/images/default/s.gif';

Ext.onReady(function() {
    
    var viewport = new Ext.Viewport({
	layout	    : 'border',
	renderTo    : Ext.getBody(),
	items	    : [{
	    region	    : 'north',
	    id		    : 'toolbar-area',
	    xtype	    : 'app_toolbar',
	    margins	    : '0 0 5 0',
	    height	    : 65,
	    cls		    : 'toolbar-area'
	},{
	    id		    : 'center-area',
	    xtype	    : 'ddtabpanel',
	    enableTabScroll : true,
	    plugins	    : [new Ext.ux.TabCloseMenu(), new Ext.ux.TabScrollerMenu({maxText: 15, pageSize: 5})],
	    region	    : 'center',
	    items	    : [{
		id	: 'default_tab',
		title	: Lng.Global.home,
		border	: false,
		layout	: 'fit',
		region	: 'center',
		items	: []
	    }],
	    margins	: '0 5 0 0',
	    activeTab   : 0
	}]
    }); // eo viewport
    
    
});
