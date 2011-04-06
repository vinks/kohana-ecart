Ext.ns('App');

/**
 * Combobox with population on form load
 */
App.PopCombo = Ext.extend(Ext.form.ComboBox, {

    triggerAction	: 'all',
    mode		: 'local',
    displayField	: 'name',
    valueField		: 'id',
    hiddenName		: 'category',
							
    /**
     * @cfg {Object} paramNames
     * Defines names that are used for "value" and "records" members 
     * (defaults to {value:"value", records:"records"})
     */
    paramNames		: {
	value		: 'value',
	records		: 'records'
    },
    
    initComponent:function() {
	
	// create config object
	var config = {};
	
	// build config
        this.buildConfig(config);
	
	// apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));
	
        App.PopCombo.superclass.initComponent.apply(this, arguments);
	
    }, // eo function initComponent
    
    buildConfig:function(config) {
	
        this.buildStore(config);
	this.buildListeners(config);
	
    }, // eo function buildConfig
    
    buildStore: function(config) {
	config.store = new Ext.data.SimpleStore({
	    fields: this.buildFields()
	});
    }, // eo function createStore
    
    buildFields: function() {
        return [];
    }, // eo function buildFields
    
    buildListeners: function(config) {
	
	config.listeners = {
	    select  : {scope: this, fn: this.onSelect}
	};
	
    }, // eo function buildListeners
    
    onSelect: function(combo, record, index) {
	
    }, // eo function onSelect
 
    setValue: function(value) {
	
	var val = value;
	
	if ('object' === typeof value && '[object Object]' === Object.prototype.toString.call(value)) {
	    if(undefined !== value[this.paramNames['records']]) {
		this.store.loadData(value[this.paramNames['records']]);
	    }
	    val = value[this.paramNames['value']];
	}
	
	App.PopCombo.superclass.setValue.call(this, val);
	
    } // eo function setValue
 
}); // eo extend
//
// register xtype
Ext.reg('popcombo', App.PopCombo); 


/**
 * Combobox with remote store
 */
App.RemoteCombo = Ext.extend(Ext.form.ComboBox, {
    
    mode		: 'remote',
    minChars		: 0,
    valueField		: 'id',  
    displayField	: 'name',  
    hiddenName		: '_id',
    emptyText		: Lng.Common.messageText.emptycombo,
    triggerAction	: 'all',
    forceSelection	: true,
    
    initComponent:function() {
	
	// create config object
	var config = {};
	
	// build config
        this.buildConfig(config);
	
	// apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));
	
        App.RemoteCombo.superclass.initComponent.apply(this, arguments);
	
    }, // eo function initComponent
    
    buildConfig:function(config) {
	
        this.buildStore(config);
	this.buildListeners(config);
	
    }, // eo function buildConfig
    
    buildStore: function(config) {
	config.store = new Ext.data.JsonStore({
	    totalProperty   : 'total',
	    root	    : 'data',
	    url		    : this.comboUrl,
	    scope	    : this,
	    fields	    : this.buildFields(),
	    listeners	    : {
		exception   : this.onLoadException.createDelegate(this)
	    }
	});
    }, // eo function createStore
    
    buildFields: function() {
        return [];
    }, // eo function buildFields
    
    buildListeners: function(config) {
	
	config.listeners = {
	    select  : {scope: this, fn: this.onSelect}
	};
	
    }, // eo function buildListeners
    
    onSelect: function(combo, record, index) {}
    
}); // eo extend
//
// Register xtype
Ext.reg('remotecombo', App.RemoteCombo);


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
 * Menu Add Button
 */
App.MenuAddButton = Ext.extend(Ext.menu.Item, {
    text		: Lng.Common.buttonText.btn_add,
    iconCls		: 'icon-add',
    initComponent:function() {
        App.MenuAddButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('menuaddbutton', App.MenuAddButton);


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
 * Menu Edit Button
 */
App.MenuEditButton = Ext.extend(Ext.menu.Item, {
    text		: Lng.Common.buttonText.btn_edit,
    iconCls		: 'icon-edit',
    initComponent:function() {
        App.MenuEditButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('menueditbutton', App.MenuEditButton);


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
 * Menu Delete Button
 */
App.MenuDeleteButton = Ext.extend(Ext.menu.Item, {
    text		: Lng.Common.buttonText.btn_delete,
    iconCls		: 'icon-delete',
    initComponent:function() {
        App.MenuDeleteButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('menudeletebutton', App.MenuDeleteButton);


/**
 * Collapse Button
 */
App.CollapseButton = Ext.extend(Ext.Button, {
    qtip		: Lng.Common.buttonText.btn_collapse,
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
    qtip		: Lng.Common.buttonText.btn_expand,
    tooltip		: Lng.Common.buttonText.btn_expand,
    overflowText	: Lng.Common.buttonText.btn_expand,
    iconCls		: 'icon-expand',
    initComponent:function() {
        App.ExpandButton.superclass.initComponent.apply(this, arguments);
    } // eo function initComponent
}); // eo extend
//
// Register xtype
Ext.reg('expandbutton', App.ExpandButton);


/**
 * Panel
 */
App.AbstractPanel = Ext.extend(Ext.Panel, {
    
    layout		: 'border',
    border		: false,
    
    initComponent: function() {
 
        // create config object
        var config = {};
 
        // build config
        this.buildConfig(config);
 
        // apply config
        Ext.apply(this, Ext.apply(this.initialConfig, config));
 
        // call parent
        App.AbstractPanel.superclass.initComponent.call(this);
 
    }, // eo function initComponent
    
    buildConfig: function(config) {
        this.buildItems(config);
    }, // eo function buildConfig
    
    buildItems: function(config) {
        config.items = undefined;
    } // eo function buildItems
    
});


/**
 * Tree Panel
 */
App.AbstractTreePanel = Ext.extend(Ext.tree.TreePanel, {
    
    rootId		: 'root',
    rootText		: 'Tree Root',
    rootCls		: 'folder',
    rootVisible		: true,
    
    useTbar		: false,
    useTools		: true,
    treeUrl		: null,
    
    lines		: true,
    
    initComponent: function() {
	
	// create config object
	var config = {};

	// build config
	this.buildConfig(config);

	// apply config
	Ext.apply(this, Ext.apply(this.initialConfig, config));

	// call parent
	App.AbstractTreePanel.superclass.initComponent.call(this);
	
    }, // eo function initComponent
    
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
	    iconCls	    : this.rootCls,
	    draggable	    : false
	});
	
    }, // eo function buildRoot

    buildLoader: function(config) {
	
	config.loader = new Ext.tree.TreeLoader({
	    url		    : this.treeUrl,
	    preloadChildren : true,
	    listeners	    : {
		loadexception: this.onLoadException.createDelegate(this),
		beforeload: {scope: this, fn: function(loader, node) {
		    loader.baseParams.path = this.getPath(node);
		}}
	    }
	});
	
    }, // eo function buildLoader

    /**
     * returns path of node
     * @private
     */
    getPath: function(node) {

	var path, p, a;

	// get path for non-root node
	if(node !== this.root) {
	    p = node.parentNode;
	    a = [node.text];
	    while(p && p !== this.root) {
		a.unshift(p.text);
		p = p.parentNode;
	    }
	    a.unshift(this.root.attributes.path || '');
	    path = a.join(this.pathSeparator);
	}

	// path for root node is it's path attribute
	else {
	    path = node.attributes.path || '';
	}

	// a little bit of security: strip leading / or .
	// full path security checking has to be implemented on server
	path = path.replace(/^[\/\.]*/, '');
	return path;
    }, // eo function getPath
        
    buildListeners: function(config) {
	
	config.listeners = {
	    beforenodedrop  : {scope: this, fn: this.onBeforeNodeDrop},
	    movenode	    : {scope: this, fn: this.onMoveNode},
	    click	    : {scope: this, fn: this.onClick},
	    dblclick	    : {scope: this, fn: this.onDblClick}
	};
	
    }, // eo function buildListeners
    
    onClick: function(node, event) {
	if (this.useTbar)
	{
	    var menu = this.btn_menu.menu.items;
	    
	}
    },
    
    buildTbar: function(config) {
	if (this.useTbar)
	{
	    config.tbar = [{
		xtype	    : 'tbbutton',
            	text	    : Lng.Common.buttonText.btn_menu,
		ref	    : '../btn_menu',
            	menu: [{
		    xtype   : 'menuaddbutton',
		    scope   : this,
		    handler : this.onAdd
		},{
		    xtype   : 'menueditbutton',
		    scope   : this,
		    handler : this.onEdit
		},{
		    xtype   : 'menudeletebutton',
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
    },
    
    onLoadException: function (loader, node, response) {
	if (response.statusText == 'error') {
	    var msg = $(response.responseText).find("h1").html();
	    this.onFailure(msg, response.statusText + ' ' + response.status);
	} else {
	    this.onFailure(Ext.decode(response.responseText).errormsg);
	}
    }, // eo function onLoadException 
    
    onFailure: function(msg, title, fn) {
	
	title	= title || Lng.Common.messageText.error;
	msg	= Ext.util.Format.ellipsis(msg, 2000);
	
	Ext.Msg.show({
	    title	    : title,
	    msg		    : msg,
	    modal	    : true,
	    fixCursor	    : true,
	    icon	    : Ext.Msg.ERROR,
	    buttons	    : Ext.Msg.OK,
	    minWidth	    : 1200 > String(msg).length ? 360 : 800,
	    fn		    : fn || null
	});
    }, // eo function onFailure
    
    onAdd: function(btn) {
	
	// Check if Ext.ux.BasicForm
	if (this.basicForm)
	{
	    // Show form window
	    this.basicForm.show(btn.getEl());
	    
	    // Center form window on browser window resize
	    Ext.EventManager.onWindowResize(function(){
		this.basicForm.window.center();
	    });
	    
	    // Set parent_id
	    if (this.getSelectionModel().getSelectedNode())
	    {
		this.basicForm.form.getForm().setValues({
		    'id'	: 0,
		    'parent_id'	: this.getSelectionModel().getSelectedNode().attributes.id
		});
	    }
	    
	    // Add new tree node on 'saved' event
	    this.basicForm.on('saved', function(response)
	    {
		var parent = this.getNodeById(response.data.parent_id) || this.getRootNode();
		
		parent.appendChild(this.loader.createNode({
		    id	    : response.data.id,
		    text    : response.data.name,
		    loaded  : true
		}));
		
		this.basicForm.purgeListeners();
		
	    }, this);
	    
	    // Show error on 'failure' event
	    this.basicForm.on('failure', function(response)
	    {	
		if (response.statusText == 'error') {
		    var msg = $(response.responseText).find("h1").html();
		    this.onFailure(msg, response.statusText + ' ' + response.status);
		} else {
		    this.onFailure(Ext.decode(response.responseText).errormsg);
		}
		
		this.basicForm.purgeListeners();
		
	    }, this);
	    
	}
    }, // eo function onAdd
    
    onEdit: function(btn) {
	
	// Check if Ext.ux.BasicForm
	if (this.basicForm)
	{
	    // If edited node been selected
	    if (this.getSelectionModel().getSelectedNode())
	    {
		// Show form window
		this.basicForm.show(btn.getEl());

		// Center form window on browser window resize
		Ext.EventManager.onWindowResize(function(){
		    this.basicForm.window.center();
		});
		
		var node = this.getSelectionModel().getSelectedNode();
		
		// Populate form with loaded data
		this.basicForm.form.getForm().load({
		    url	    : this.treeUrl + '/get',
		    params  : { id: node.attributes.id },
		    method  : 'post',
		    waitMsg : Lng.Common.messageText.loadingwait
		});

		// Add new tree node on 'saved' event
		this.basicForm.on('saved', function(response) {
		    node.setText(response.data.name);
		}, this);

		// Show error on 'failure' event
		this.basicForm.on('failure', function(response)
		{	
		    if (response.statusText == 'error') {
			var msg = $(response.responseText).find("h1").html();
			this.onFailure(msg, response.statusText + ' ' + response.status);
		    } else {
			this.onFailure(Ext.decode(response.responseText).errormsg);
		    }
		}, this);
	    }
	    
	}
	
    } // eo function onEdit
    
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
		exception   : this.onLoadException.createDelegate(this)
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
	if (response.statusText == 'error') {
	    var msg = $(response.responseText).find("h1").html();
	    this.onFailure(msg, response.statusText + ' ' + response.status);
	} else {
	    this.onFailure(Ext.decode(response.responseText).errormsg);
	}
    }, // eo function onLoadException
    
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


