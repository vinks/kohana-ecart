Ext.ns('App');

/**
 * Submit Button
 */
App.SubmitButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_submit,
    iconCls		: 'icon-submit',
    initComponent:function() {
        App.SubmitButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('submitbutton', App.SubmitButton);


/**
 * Chancel Button
 */
App.CancelButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_chancel,
    iconCls		: 'icon-chancel',
    initComponent:function() {
        App.CancelButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('cancelbutton', App.CancelButton);


/**
 * Add Button
 */
App.AddButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_add,
    iconCls		: 'icon-add',
    initComponent:function() {
        App.AddButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('addbutton', App.AddButton);


/**
 * Edit Button
 */
App.EditButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_edit,
    iconCls		: 'icon-edit',
    initComponent:function() {
        App.EditButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('editbutton', App.EditButton);


/**
 * Delete Button
 */
App.DeleteButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_delete,
    iconCls		: 'icon-delete',
    initComponent:function() {
        App.DeleteButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('deletebutton', App.DeleteButton);


/**
 * Collapse Button
 */
App.CollapseButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_collapse,
    iconCls		: 'icon-collapse',
    initComponent:function() {
        App.CollapseButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('collapsebutton', App.CollapseButton);


/**
 * Expand Button
 */
App.ExpandButton = Ext.extend(Ext.Button, {
    text		: Lng.Common.buttonText.btn_expand,
    iconCls		: 'icon-expand',
    initComponent:function() {
        App.ExpandButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('expandbutton', App.ExpandButton);


/**
 * Form Panel
 */
App.AbstractFormPanel = Ext.extend(Ext.form.FormPanel, {
    
    defaultType		: 'textfield',
    frame		: true,
    width		: 300,
    height		: 200,
    labelWidth		: 75,
    submitUrl		: null,


    initComponent:function() {

	// create config object
	var config = {
	    defaults:{anchor:'-10'}
	};

	// build config
	this.buildConfig(config);

	// apply config
	Ext.apply(this, Ext.apply(this.initialConfig, config));

	// call parent
	App.AbstractFormPanel.superclass.initComponent.call(this);

    }, // eo function initComponent


    buildConfig:function(config) {
	
	this.buildItems(config);
	this.buildButtons(config);
	this.buildTbar(config);
	this.buildBbar(config);
	
    }, // eo function buildConfig


    buildItems:function(config) {
	config.items = undefined;
    }, // eo function buildItems


    buildButtons:function(config) {
	config.buttons = [{
	    xtype	: 'submitbutton',
	    scope	: this,
	    handler	: this.onSubmit
	},{
	    xtype	: 'cancelbutton',
	    scope	: this,
	    handler	: this.onCancel
	}];
    }, // eo function buildButtons


    buildTbar:function(config) {
	config.tbar = undefined;
    }, // eo function buildTbar


    buildBbar:function(config) {
	config.bbar = undefined;
    }, // eo function buildBbar


    onSubmit:function() {
	Ext.MessageBox.alert('Submit', this.submitUrl);
    }, // eo function onSubmit


    onCancel:function() {
	this.el.mask('This form is canceled');
    } // eo function onCancel
 
}); // eo extend App.AbstractFormPanel


/**
 * Tree Panel
 */
App.AbstractTreePanel = Ext.extend(Ext.tree.TreePanel, {
    
    rootId		: 1,
    rootText		: 'Tree Root',
    rootVisible		: true,
    rootCls		: null,
    useTbar		: false,
    useTools		: true,
    
    initComponent: function() {
	
	// create config object
	var config = {};

	// build config
	this.buildConfig(config);

	// apply config
	Ext.apply(this, Ext.apply(this.initialConfig, config));

	// call parent
	App.AbstractGridPanel.superclass.initComponent.call(this);
	
    }, // eo function initComponent
    
    onRender: function() {	
	App.AbstractTreePanel.superclass.onRender.apply(this, arguments);
    }, // eo function onRender
    
    buildConfig: function(config) {
	
        this.buildRoot(config);
        this.buildLoader(config);
        this.buildListeners(config);
	this.buildTbar(config);
	
    }, // eo function buildConfig

    buildRoot: function(config) {
	
	config.root = new Ext.tree.AsyncTreeNode({
	    id		    : this.rootId,
	    expanded	    : true,
	    text	    : this.rootText,
	    hidden	    : this.rootVisible,
	    iconCls	    : this.rootCls,
	    allowDrag	    : false
	});
	
    }, // eo function buildRoot

    buildLoader: function(config) {
	
	config.loader = new Ext.tree.TreeLoader({
	    url		    : this.treeUrl,
	    preloadChildren : true,
	    listeners	    : {
		beforeload:{scope:this, fn:function(loader, node) {
		    loader.baseParams.path = this.getPath(node);
		}}
	    }
	});
	
    }, // eo function buildLoader
        
    buildListeners: function(config) {
	
	config.listeners = {
	    beforenodedrop  : { scope: this, fn: this.onBeforeNodeDrop },
	    movenode	    : { scope: this, fn: this.onMoveNode },
	    click	    : { scope: this, fn: this.onClick },
	    dblclick	    : { scope: this, fn: this.onDblClick }
	};
	
    }, // eo function buildLoader
    
    buildTbar: function(config) {
	if (this.useTbar)
	{
	    config.tbar = [{
		xtype	    : 'tbbutton',
            	text	    : Lng.Common.buttonText.btn_menu,
		ref	    : '../btn_menu',
            	menu: [{
		    xtype   : 'addbutton',
		    scope   : this,
		    handler : this.onAdd
		},{
		    xtype   : 'editbutton',
		    scope   : this,
		    handler : this.onEdit
		},{
		    xtype   : 'addbutton',
		    scope   : this,
		    handler : this.onDelete
		}]
	    }];
	
	    if (this.useTools)
	    {
		config.tbar.push('->',{
		    xtype   : 'collapsebutton',
		    scope   : this,
		    handler : this.onCollapse
		},{
		    xtype   : 'expandbutton',
		    scope   : this,
		    handler : this.onExpand
		});
	    }
	    
	} else {
	    config.tbar = undefined;
	}
    }
    
}); // eo extend


/**
 * Grid Panel
 */
App.AbstractGridPanel = Ext.extend(Ext.grid.GridPanel, {
    
    gridUrl		    : null,
    forceLoad		    : true,
    
    initComponent: function() {
	
	// create config object
	var config = {};
	
	// build config
        this.buildConfig(config);
	
	// apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));
	
	// call parent
        App.AbstractGridPanel.superclass.initComponent.call(this);
	
    }, // eo function initComponent
    
    buildConfig:function(config) {
	
        this.buildStore(config);
        this.buildColumns(config);
        this.buildView(config);
	
    }, // eo function buildConfig
    
    onRender:function() {
	
	// call parent
	App.AbstractGridPanel.superclass.onRender.apply(this, arguments);
	
	// store autoload
	if (this.forceLoad) {
	    this.store.load({
		params:{start:0, limit:30}
	    });
	}
    }, // eo function onRender
    
    buildStore: function(config) {
	config.store = new Ext.data.JsonStore({
	    totalProperty   : 'total',
	    root	    : 'data',
	    url		    : this.gridUrl,
	    remoteSort	    : true,
	    scope	    : this,
	    fields	    : this.buildFields(),
	    listeners	    : {
		exception   : this.onLoadException.createDelegate(this),
		load	    : this.onLoadSuccess.createDelegate(this)
	    }
	});
    }, // eo function createStore
    
    
    buildFields: function() {
        return [];
    }, // eo function buildFields
    
    
    buildColumns: function(config) {
        config.columns = [];
    }, // eo function buildColumns
    
    
    buildView: function(config) {
	config.view = new Ext.grid.GridView({
	    forceFit	    : true,
	    enableRowBody   : true,
	    ignoreAdd	    : true,
	    emptyText	    : Lng.Common.messageText.emptygridText
	});
    }, // eo function buildView
    
    
    onLoadException: function (dp, type, action, options, response, arg) {
	var responseObj = Ext.decode(response.responseText);
	this.onFailure(responseObj.errormsg);
    }, // eo function onLoadException
    
    
    onLoadSuccess: function(store, records, options) {}, // eo function onLoadSuccess
    
    
    onFailure: function(msg, title, fn) {
	
	title = title || Lng.Common.messageText.error;
	
	Ext.Msg.show({
	    title	    : title,
	    msg		    : msg,
	    modal	    : true,
	    icon	    : Ext.Msg.ERROR,
	    buttons	    : Ext.Msg.OK,
	    fn		    : fn || null
	});
    } // eo function onFailure
    
}); // eo extend

