// ==========================================================================
// Project:   PickerPaneProb - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals PickerPaneProb */

// This page describes the main user interface for your application.  
PickerPaneProb.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'labelView button'.w(),
    
    labelView: SC.LabelView.design({
      layout: { centerX: 0, centerY: 0, width: 400, height: 18 },
      textAlign: SC.ALIGN_CENTER,
      tagName: "h1", 
      value: "Please press the button to show a PickerPane"
    }),

    button: SC.ButtonView.design({
	  layout: { centerX: 0, centerY: 40, width: 100, height: 30 },
	  title: 'Popup',
	  action: 'button_click'
    }),

	_tagCloudPopup: SC.PickerPane.create({
		layout: { width: 100, height: 400 },
		contentView: this._tagCloudView
	}),


	button_click: function() {
		var l = this.get('layer');
		if (l == null) return;
		var height = l.offsetHeight;
		var width = l.offsetWidth;
		var top = l.offsetTop;
		
		this._tagCloudPopup.set('layout', { width: width * 0.7, height: document.height * 0.8 - top });

		this._tagCloudPopup.popup(this, SC.PICKER_POINTER, [1,2,1]);
	}

  })

});
