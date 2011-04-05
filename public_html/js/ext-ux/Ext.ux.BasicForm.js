Ext.namespace('Ext.ux');

/**
 * Creates new BasicForm plugin
 * @constructor
 * @param {Object} config A config object
 */
Ext.ux.BasicForm = function(config) {
    Ext.apply(this, config);

    // call parent
    Ext.ux.BasicForm.superclass.constructor.call(this);
}; // eo constructor


Ext.extend(Ext.ux.BasicForm, Ext.util.Observable, {

    autoHide: true
    /**
     * @cfg {String} cancelIconCls Icon class for cancel button
     */
    ,cancelIconCls: 'icon-cancel'

    /**
     * @cfg {String} cancelText Text for cancel button
     */
    ,cancelText: 'Cancel'
    
    /**
     * @cfg {String} submitIconCls Icon class for submit button
     */
    ,submitIconCls: 'icon-submit'
    
    /**
     * @cfg {String} submitText Text for submit button
     */
    ,submitText: 'Submit'
    
    /**
     * @cfg {String} submitText Text for submit button
     */
    ,submitWaitText: 'Saving data...'
    
    /**
     * @cfg {Boolean} showButtons false to not show OK and Cancel buttons. (defaults to true)
     */
    ,showButtons:true

    /**
     * @cfg {Object} defaultFormConfig Default configuration of form
     * @private
     */
    ,defaultFormConfig: {
	defaultType : 'textfield',
	border	    : false,
	frame	    : true,
	autoHeight  : true,
	labelWidth  : 100,
	defaults    : { anchor : '-10' }
    }

    /**
     * @cfg {Object} defaultWindowConfig Default configuration of widnow
     * @private
     */
    ,defaultWindowConfig: {
	border	    : false,
	width	    : 480,
	autoHeight  : true,
	layout	    : 'fit',
	closeAction : 'hide',
	modal	    : true,
	maximizable : true,
	shadow	    : false
    }

    /**
     * @cfg {Number} focusDefer Time in ms before the first form field is focused
     * @private
     */
    ,focusDefer:200

    /**
     * @cfg {Object} formConfig Additional configuration options for form
     * Overrides defaultFormConfig
     */

    /**
     * @cfg {String} iconCls icon to use for title of the popup window
     */
    
    /**
     * @cfg {String} title Title to use for popup window
     */
    
    /**
     * @cfg {String} submitUrl post url for form data
     */

    /**
     * @cfg {Object} windowConfig Additional configuration options for window.
     * Overrides defaultWindowConfig.
     */
	
    /**
     * Main init function
     * @private
     */
    ,init:function(grid) {
	// initial (re)configuration
	this.reconfigure();
	this.addEvents('saved', 'chancel', 'failure');
    } // eo function init
	
    /**
     * Creates form configuration. Form is created later in show function
     * @private
     */
    ,createFormConfig:function() {

	// run only once 
	if(this.form) {
	    return;
	}

	// create form *config* object - it does NOT instantiate the form
	this.form = Ext.apply({
	    xtype:'form'
	    ,items:this.buildItems()
	    ,buttons:(function() {
		if(this.showButtons) {
		    return [{
			 text	    :this.submitText
			,iconCls    :this.submitIconCls
			,scope	    :this
			,handler    :this.onSubmit
			,formBind   :true
		    },{
			 text	    :this.cancelText
			,iconCls    :this.cancelIconCls
			,scope	    :this
			,handler    :this.onCancel
		    }];
		} else {
		    return [];
		}
	    }).createDelegate(this)()

	    // ok on enter
	    ,keys:[{
		 key	    : [10,13] // enter
		,scope	    : this
		,stopEvent  : true
		,fn	    : this.onSubmit
	    },{
		 key	    : [27] // escape
		,scope	    : this
		,stopEvent  : true
		,fn	    : this.onCancel
	    }]
	}, this.formConfig, this.defaultFormConfig); // eo form config
	
	

    } // eo function createFormConfig
    
    
    /**
     * Create form items
     * @public
     */
    ,buildItems: function() {
	return [];
    }
	
    /**
     * Destroys components we've created
     * @private
     */
    ,onDestroy:function() {
	if(this.window) {
	    this.window.destroy();
	    this.window = null;
	    this.form = null;
	}
	else if(this.form) {
	    if('function' === typeof this.form.destroy) {
		this.form.destroy();
	    }
	    this.form = null;
	}
    } // eo function onDestroy
	
    /**
     * Submit button click handler
     */
    ,onSubmit: function() {
	if(this.form.getForm().isValid()) {
	    this.form.getForm().submit({
		url	: this.submitUrl,
		scope	: this,
		success	: this.onSuccess,
		failure	: this.onFailure,
		waitMsg	: this.submitWaitText
	    });
	}
    } // eo function onSubmit
    
    ,onSuccess: function (form, action) {
	var responseObj = Ext.decode(action.response.responseText);
	
        this.fireEvent('saved', responseObj);
	
	if(this.autoHide) {
	    this.window.hide(null);
	}
    } // eo function onSubmit
    
    ,onFailure: function (form, action) {
	this.fireEvent('failure', action.response);
    } // eo function onFailure
	
    /**
     * Cancel button handler
     */
    ,onCancel: function() {
	if(this.autoHide) {
	    this.window.hide(null);
	}
    } // eo function onCancel
	
    /**
     * Reconfigures the plugin - deletes old form and creates new one
     * Runs also after grid reconfigure call
     * @private
     */
    ,reconfigure:function() {
	// destroy old window and form
	this.onDestroy();

	// create new form configuration
	// form will be instantiated and rendered in show function
	this.createFormConfig();
    } // eo function reconfigure
    

    ,getPanel:function() {
	if(this.window) {
	    return this.window;
	}
	
	if(this.formCt) {
	    var panel = Ext.getCmp(this.formCt);
	    if(panel) {
		panel.add(this.form);
		panel.doLayout();
	    }
	    else {
		panel = Ext.fly(this.formCt);
		if(panel) {
		    panel = new Ext.Panel({
			 renderTo:panel
			,items:this.form
		    });
		}
	    }
	}
	else {
	    var config = Ext.apply({}, this.defaultWindowConfig);
	    config = Ext.apply(config, this.windowConfig);
	    
	    Ext.applyIf(config, {
		 title:this.title
		,iconCls:this.iconCls
		,items:this.form
		,listeners:{
		    show:{scope:this, delay:this.focusDefer, fn:function() {
			this.form.startMonitoring();
			var basicForm = this.form.getForm();

			// focus first form field on window show
			if (basicForm.items.getCount() > 0)
			    basicForm.items.itemAt(0).focus();

			// mark fields invalid if any
			basicForm.isValid();
		    }}
		    ,hide:{scope:this, fn:function() {
			this.form.stopMonitoring();
		    }}
		}
	    });
	    
	    var window = new Ext.Window(config);
	    this.form = window.items.itemAt(0);
	    return window;
	}
	
	panel.on({
	    show:{scope:this, delay:this.focusDefer, fn:function() {
		this.form.startMonitoring();
		var basicForm = this.form.getForm();
		

		// focus first form field on window show
		if (basicForm.items.getCount() > 0)
		    basicForm.items.itemAt(0).focus();

		// mark fields invalid if any
		basicForm.isValid();
	    }}
	    ,hide:{scope:this, fn:function() {
		this.form.stopMonitoring();
	    }}
	});
	
	this.form = panel.items.itemAt(0);
	return panel;

    } // eo function getPanel

	
    /**
     * Shows the record form in the window
     * @param {Ext.Element/DOMElement/String} animEl window show animation element
     */
    ,show: function(animEl) {

	// lazy create window
	if(!this.window) {
	    this.window = this.getPanel();
	}

	// show window
	this.window.show(animEl);

    } // eo function show
 
}); // eo extend

// register xtype
Ext.reg('basicform', Ext.ux.BasicForm); 
