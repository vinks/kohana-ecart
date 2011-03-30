Ext.namespace('Ext.ux');

Ext.ux.PasswordField = function(config) {
    // call parent constructor
    Ext.ux.PasswordField.superclass.constructor.call(this, config);
    this.showCapsWarning = config.showCapsWarning || true;
};

Ext.extend(Ext.ux.PasswordField, Ext.form.TextField, {
        /**
         * @cfg {String} inputType The type attribute for input fields -- e.g. text, password (defaults to "password").
         */
        inputType: 'password',
        // private
        onRender: function(ct, position) {
            Ext.ux.PasswordField.superclass.onRender.call(this, ct, position);

            // create caps lock warning box
            var id = Ext.id();
            this.alertBox = Ext.DomHelper.append(document.body,{
                tag: 'div',
                style: 'width: 10em',
                children: [{
                    tag: 'div',
                    style: 'text-align: center; color: red;',
                    html: 'Внимание! Включен Caps Lock.',
                    id: id
                }]
            }, true);
            Ext.fly(id).boxWrap();
            this.alertBox.hide();
        },
        initEvents: function() {
            Ext.ux.PasswordField.superclass.initEvents.call(this);

            this.el.on('keypress', this.keypress, this);
        },
        keypress: function(e) {
            var charCode = e.getCharCode();
            if(
                (e.shiftKey && charCode >= 97 && charCode <= 122) ||
                (!e.shiftKey && charCode >= 65 && charCode <= 90)
            ){
                if (this.showCapsWarning) {
                    this.showWarning(e.target);
                }
            } else {
                this.hideWarning();
            }
        },
        showWarning: function(el) {
           // this.alertBox.alignTo(el, 'l-r', [5, 0]);
            this.alertBox.show();
        },
        hideWarning: function() {
            this.alertBox.hide();
        }
    }
);