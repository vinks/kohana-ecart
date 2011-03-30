Ext.enableGarbageCollector = true;
Ext.BLANK_IMAGE_URL = base_url + 'js/ext-' + ext_version + '/resources/images/default/s.gif';

Ext.onReady(function(){

    var loginForm = Ext.extend(Ext.form.FormPanel, {

	width		: 'auto',
	autoHeight	: true,
	labelAlign	: 'right',
	labelWidth	: 175,
	autoScroll	: true,
	frame		: true,
	border		: false,
	layout		: 'form',
	buttonAlign	: 'center',

	initComponent: function () {

	    var config = {
		monitorValid: true,

		items: [{
		    xtype	: 'component',
		    autoEl	: {},
		    html	: '<div class="title">' + Lng.Global.appname + '</div>'
		},{
		    xtype	: 'fieldset',
		    bodyStyle	:'padding:10px 0 0',
		    items : [{
			xtype		: 'textfield',
			id		: 'logFocus',
			allowBlank	: false,
			msgTarget	: 'side',
			name		: 'username',
			fieldLabel	: Lng.LoginForm.labelText.login,
			tabIndex	: 1
		    },
		    new Ext.ux.PasswordField({
			name		:'password',
			allowBlank	: false,
			msgTarget	:'side',
			showCapsWarning	: true,
			fieldLabel	: Lng.LoginForm.labelText.password,
			tabIndex	: 2
		    })]
		}],

		buttons: [{
		    text	: Lng.LoginForm.buttonText.login,
		    id		: 'loginbutton',
		    iconCls	: 'icon-tick',
		    formBind	: true,
		    scope	: this,
		    handler	: this.doLogin
		},{
		    text	: Lng.LoginForm.buttonText.clear,
		    buttonAlign	: 'center',
		    iconCls	: 'icon-reset',
		    handler	: function() {
			this.ownerCt.ownerCt.getForm().reset();
		    }
		}],

		keys: [{
		    key: [Ext.EventObject.ENTER], scope: this, handler: function() {
			if (this.getForm().isValid()) this.doLogin();
		    }
		}]

	    };

	    // apply config
	    Ext.apply(this, Ext.apply(this.initialConfig, config));

	    // call parent
	    loginForm.superclass.initComponent.apply(this, arguments);

	}, // eo function initComponent

	onRender: function () {
	    // call parent
	    loginForm.superclass.onRender.apply(this, arguments);
	    this.getForm().waitMsgTarget = this.getEl();
	    
	}, // eo function onRender

	doLogin: function() {
	    
	    this.getForm().submit({
		url	: base_url + 'admin/auth/login',
		scope	: this,
		success	: this.onSuccess,
		failure	: this.onFailure,
		waitMsg	: Lng.LoginForm.login
	    }, this);
	    
	} // eo function doLogin

	,onSuccess: function (form, action) {
	    window.location.href = base_url + 'admin';
	} // eo function onSuccess

	,onFailure: function (form, action) {
	    var responseObj = Ext.decode(action.response.responseText);
	    this.showError(action.result.error || responseObj.errormsg);
	} // eo function onSuccess

	,showError: function (msg, title) {
	    title = title || Lng.LoginForm.messageText.auth_err;
	    Ext.Msg.show({
		title	: title,
		msg	: msg,
		modal	: true,
		icon	: Ext.Msg.ERROR,
		buttons	: Ext.Msg.OK
	    });
	}

    }); // eo extend
    //register xtype
    Ext.reg('LoginForm', loginForm);

    var LoginWindow = new Ext.Window({
	id		: 'login-win',
        width		: 500,
	autoHeight	: true,
        shim		: false,
        draggable	: true,
        animCollapse	: false,
        border		: false,
	minimizable	: false,
	maximizable	: false,
	closable	: false,
	constrainHeader	: true,
	layout		: 'fit',
	buttonAlign	: 'left',
	items: {
	    id	    : 'login-form',
	    xtype   : 'LoginForm'
	}
    });

    LoginWindow.show();

    Ext.EventManager.onWindowResize(function() {
	LoginWindow.center();
    });

});