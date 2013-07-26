17. Link with Image tag and call javascript functions 

	<%= link_to image_tag('cancel.png'), {:action => 'remove', :id => question.id}, :title=>'Delete', :class=>'action', :onclick=>"removeQuestion("+ question.id +");return false;"%>
Ext.define('MyForm', {
    extend: 'Ext.form.Panel',

    height: 250,
    bodyPadding: 10,
    title: 'Custom Load Mask',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items:[
                {html:'You can pass in the loadMask text as its first parameter. If you pass true as the second parameter, the loadMask will be on the form\'s body, and not over the entire form. Click the buttons on the toolbar'}
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            text: 'setLoading(\'Sending...\', true);',
                            handler: function(){
                            me.setLoading('Sending...', true);
                            },
                            scope: me
                        },
                        {
                            xtype: 'button',
                            text: 'setLoading(false);',
                            handler: function(){
                            me.setLoading(false);
                            },
                            scope: me
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});

Ext.onReady(function(){
    var f = new MyForm({renderTo: Ext.getBody()});
});