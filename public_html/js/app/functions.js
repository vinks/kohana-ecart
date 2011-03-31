/**
 * Function addTab
 * Adds or gets tab from center panel
 * 
 * @param {String}	Tab iitle
 * @param {String}	Tab id
 * @param {String}	Tab item xtype
 */
function addTab(title, id, xtype) {

    var center = Ext.getCmp('center-area');

    var tab = center.items.find(function (i) {
	return i.id === id;
    });

    if (!tab) {

	var p = center.add({
	    id		: id,
	    title	: title,
	    border	: false,
	    closable	: true,
	    layout	: 'fit',
	    region	: 'center',
	    items	: { xtype: xtype}
	});

	//p.makeDockable();

	center.setActiveTab(p);
	center.doLayout();
	
	tab = p;
    } else {
	center.setActiveTab(tab);
    }
    
    return tab;
}


