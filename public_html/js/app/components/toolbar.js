Ext.namespace('App.Toolbar');

App.Toolbar.Panel = Ext.extend(Ext.Panel, {

    html: [
	'<div id="html-header">',
	'<div class="maintitle">' + Lng.Global.appname + '</div>',
	'</div>'
    ]

    ,initComponent: function () {

	var config = {
	    bbar: [{
            	xtype	: 'tbbutton',
            	text	: Lng.Toolbar.buttonTitle.cms,
		ref	: '../btn_cms',
            	menu: [{
		    text    : Lng.Toolbar.buttonTitle.categories_pages,
		    handler : function (f) {}
            	},{
		    text    : Lng.Toolbar.buttonTitle.static_blocks,
		    handler : function (f) {}
            	},{
		    text    : Lng.Toolbar.buttonTitle.page_comments,
		    handler : function (f) {}
		},{
		    text    : Lng.Toolbar.buttonTitle.polls,
		    handler : function (f) {}
		},{
		    text    : Lng.Toolbar.buttonTitle.polls,
		    handler : function (f) {}
		}]
            },{
            	xtype	: 'tbbutton',
            	text	: Lng.Toolbar.buttonTitle.catalog,
		ref	: '../btn_catalog',
            	menu: [{
		    text    : Lng.Toolbar.buttonTitle.product_catalog,
		    handler : function (f) {}
            	},{
		    text    : Lng.Toolbar.buttonTitle.product_attributes,
		    handler : function (f) {}
            	},{
		    text    : Lng.Toolbar.buttonTitle.attributes,
		    handler : function (f) {}
		},{
		    text    : Lng.Toolbar.buttonTitle.value_sets,
		    handler : function (f) {}
		},{
		    text    : Lng.Toolbar.buttonTitle.product_brands,
		    handler : function (f) {}
		},{
		    text    : Lng.Toolbar.buttonTitle.tags,
		    handler : function (f) {}
		}]
            }]
	};

	// apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));

        // call parent
        App.Toolbar.Panel.superclass.initComponent.apply(this, arguments);

    }

    ,onRender: function () {
        // call parent
    	App.Toolbar.Panel.superclass.onRender.apply(this, arguments);

    } // eo function onRender

    ,doLogOut: function() {
	Ext.MessageBox.confirm(Lng.Toolbar.messageText.logout, Lng.Toolbar.messageText.logout_question,
	    function(btn) {
		if (btn == 'yes') {
		    //doLogout();
		}
	    }
	);
    } // eo function doLogOut
});
//register xtype
Ext.reg('app_toolbar', App.Toolbar.Panel);
