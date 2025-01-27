// polygon, polyline
// smart guide
// markup in text
// adding notes

Lyte.Component.register("lyte-annotator", {
_template:"<template tag-name=\"lyte-annotator\"> <template is=\"if\" value=\"{{render}}\"><template case=\"true\"> <lyte-wormhole class=\"lyteAnnotatorWormhole\" on-before-append=\"{{method('beforeappend')}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"lyteAnnotatorOuterWrapper {{ltPropWrapperClass}} {{loading}}\"> <lyte-annotator-wrapper> <lyte-annotator-header> <template is=\"if\" value=\"{{ltPropHeaderYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"annotator-header\"></lyte-yield> </template><template case=\"false\"><template is=\"for\" items=\"{{ltPropButtons}}\" item=\"item\" index=\"index\"> <lyte-button lt-prop=\"{{stringify(item.properties)}}\" class=\"lyteAnnotatorButton lyteAnnotator{{item.purpose}}\" onclick=\"{{action('buttonclick',item.purpose)}}\"> <template is=\"registerYield\" yield-name=\"text\"> {{item.text}} </template> </lyte-button> </template></template></template> </lyte-annotator-header> <lyte-annotator-content onmousedown=\"{{action('mousedown',event)}}\" ontouchstart=\"{{action('mousedown',event)}}\" tabindex=\"0\" onkeydown=\"{{action('keydown',event,this)}}\"> <lyte-annotator-whiteboard-content> <lyte-whiteboard-area> <template is=\"if\" value=\"{{isImage}}\"><template case=\"true\"> <canvas ref_x=\"0\" ref_y=\"0\" class=\"lyteAnnotatorCanvas\"></canvas> </template></template> <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"lyteAnnotatorSvg\" viewBox=\"{{viewBox}}\"> </svg> <template is=\"if\" value=\"{{renderCrop}}\"><template case=\"true\"> <lyte-crop-wrapper> <lyte-crop-left></lyte-crop-left> <lyte-crop-top></lyte-crop-top> <lyte-crop-bottom></lyte-crop-bottom> <lyte-crop-right></lyte-crop-right> <lyte-crop-content></lyte-crop-content> </lyte-crop-wrapper> </template></template><template is=\"if\" value=\"{{loading}}\"><template case=\"true\"> <lyte-annotator-loading class=\"{{loading}}\"></lyte-annotator-loading> </template></template><template is=\"if\" value=\"{{ltPropSmartGuide}}\"><template case=\"true\"> <div class=\"lyteAnnotatorSmartGuides lyteConnectHorizontal lyteAnnotatorHidden\"></div> <div class=\"lyteAnnotatorSmartGuides lyteConnectVertical lyteAnnotatorHidden\"></div> </template></template> </lyte-whiteboard-area> </lyte-annotator-whiteboard-content> </lyte-annotator-content> <template is=\"if\" value=\"{{expHandlers(ltPropZoom,'&amp;&amp;',isImage)}}\"><template case=\"true\"> <lyte-annotator-footer> <div class=\"lyteAnnotatorZoom\"> <div class=\"lyteAnnotatorZoomPrev {{disablePrev}}\" onclick=\"{{action('prevZoom')}}\">-</div> <lyte-dropdown lt-prop-display-value=\"{{lbind(displayValue)}}\" lt-prop-selected=\"{{lbind(ltPropZoomLevel)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box class=\"lyteAnnotatorZoomDropdown\"> <lyte-drop-body> <template is=\"forIn\" object=\"{{ltPropZoomOptions}}\" value=\"value\" key=\"key\"> <lyte-drop-item data-value=\"{{key}}\" class=\"lyteAnnotatorZoom_{{key}}\">{{value}}</lyte-drop-item> </template> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> <div class=\"lyteAnnotatorZoomNext {{disableNext}}\" onclick=\"{{action('nextZoom')}}\">+</div> </div> </lyte-annotator-footer> </template></template><template is=\"if\" value=\"{{expHandlers(ltPropContextMenu,'&amp;&amp;',renderMenu)}}\"><template case=\"true\"> <lyte-menu lt-prop-show=\"{{lbind(menuShow)}}\" lt-prop-event=\"contextmenu\" lt-prop-query=\"lyte-annotator-wrapper\" lt-prop-yield=\"true\" lt-prop-wrapper-class=\"lyteAnnotatorMenu\" on-before-open=\"{{method('beforeMenu')}}\" on-menu-click=\"{{method('menuSelect')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-menu-body> <template is=\"forIn\" object=\"{{ltPropContextMenuOptions}}\" value=\"value\" key=\"key\"> <lyte-menu-item lt-prop-disabled=\"{{value.disabled}}\" class=\"lyteAnnotatorMenu_{{key}} {{value.show}}\" data-value=\"{{key}}\">{{value.value}}</lyte-menu-item> </template> </lyte-menu-body> </template> </lyte-menu> </template></template> </lyte-annotator-wrapper> <template is=\"if\" value=\"{{ltPropSidePanelData}}\"><template case=\"true\"> <lyte-annotator-sidepanel class=\"lyteAnnotatorSidePanel_{{ltPropPanelDirection}}\" tabindex=\"0\" onkeydown=\"{{action('side_nav',event)}}\"> <lyte-sidepanel-resize-handler ontouchstart=\"{{action('move',event)}}\" onmousedown=\"{{action('move',event)}}\">...</lyte-sidepanel-resize-handler> <template is=\"for\" items=\"{{ltPropSidePanelData}}\" item=\"item\" index=\"index\"> <div class=\"{{lyteAnnotator(item,item.active,item.direction)}}\" onclick=\"{{action('side_click',item)}}\"> <span class=\"lyteAnnotatorLabel\">{{item.value}}</span> <template is=\"if\" value=\"{{item.children}}\"><template case=\"true\"> <div class=\"lyteAnnotatorChildWrapper {{item.open}}\"> <template is=\"for\" items=\"{{item.children}}\" item=\"inner\" index=\"inn_index\"> <div class=\"{{lyteAnnotator(inner,inner.active)}}\" onclick=\"{{action('side_click',inner,item)}}\"> <span class=\"lyteAnnotatorLabel\">{{inner.value}}</span> </div> </template> </div> </template></template> </div> </template> </lyte-annotator-sidepanel> </template></template><template is=\"if\" value=\"{{expHandlers(ltPropEditorPanel,'&amp;&amp;',renderFilter)}}\"><template case=\"true\"> <lyte-annotator-editorpanel class=\"{{showFilter}}\"> <lyte-editor-resize-handler ontouchstart=\"{{action('move',event)}}\" onmousedown=\"{{action('move',event)}}\">...</lyte-editor-resize-handler> <template is=\"if\" value=\"{{renderFill}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"fill\" class=\"lyteAnnotatorFill {{showFill}}\" lt-prop-item=\"{{ltPropEditorPanelData.fill}}\" show=\"{{lbind(openFillPop)}}\" onclick=\"{{action('openPop','Fill')}}\" on-apply=\"{{method(&quot;applyFill&quot;)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderStroke}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"stroke\" class=\"lyteAnnotatorStroke {{showStroke}}\" lt-prop-item=\"{{ltPropEditorPanelData.stroke}}\" show=\"{{lbind(openStrokePop)}}\" onclick=\"{{action('openPop','Stroke')}}\" on-apply=\"{{method(&quot;applyStroke&quot;)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderBorder}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"border\" class=\"lyteAnnotatorBorder {{showBorder}}\" lt-prop-item=\"{{ltPropEditorPanelData.border}}\" show=\"{{lbind(openBorderPop)}}\" onclick=\"{{action('openPop','Border')}}\" on-apply=\"{{method(&quot;applyBorder&quot;)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderFont}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"font\" class=\"lyteAnnotatorFont {{showFont}}\" lt-prop-item=\"{{ltPropEditorPanelData.font}}\" show=\"{{lbind(openFontPop)}}\" onclick=\"{{action('openPop','Font')}}\" on-apply=\"{{method(&quot;applyFont&quot;)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderColor}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"color\" class=\"lyteAnnotatorColor {{showColor}}\" lt-prop-item=\"{{ltPropEditorPanelData.color}}\" show=\"{{lbind(openColorPop)}}\" onclick=\"{{action('openPop','Color')}}\" on-apply=\"{{method(&quot;applyColor&quot;)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderOutline}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"outline\" class=\"lyteAnnotatorOutlet {{showOutline}}\" lt-prop-item=\"{{ltPropEditorPanelData.outline}}\" onclick=\"{{action('toggleOutline',this)}}\"></lyte-annotator-item> </template></template><template is=\"if\" value=\"{{renderDashed}}\"><template case=\"true\"> <lyte-annotator-item pk=\"true\" type=\"dashed\" class=\"lyteAnnotatorDashed {{showDashed}}\" lt-prop-item=\"{{ltPropEditorPanelData.dashed}}\" show=\"{{lbind(openDashedPop)}}\" onclick=\"{{action('openPop','Dashed')}}\" on-apply=\"{{method(&quot;applyDashed&quot;)}}\"></lyte-annotator-item> </template></template> </lyte-annotator-editorpanel> </template></template> </div> </template> </lyte-wormhole> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1,1,1]},{"type":"if","position":[1,1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"for","position":[0],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"text","position":[1]}]},{"type":"componentDynamic","position":[1]}]}]}},"default":{}},{"type":"componentDynamic","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"attr","position":[1,1,3,1,1,1]},{"type":"if","position":[1,1,3,1,1,1],"cases":{"true":{"dynamicNodes":[]}},"default":{}},{"type":"attr","position":[1,1,3,1,1,3]},{"type":"attr","position":[1,1,3,1,1,5]},{"type":"if","position":[1,1,3,1,1,5],"cases":{"true":{"dynamicNodes":[{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1,3]},{"type":"componentDynamic","position":[1,5]},{"type":"componentDynamic","position":[1,7]},{"type":"componentDynamic","position":[1,9]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,1,3,1,1,6]},{"type":"if","position":[1,1,3,1,1,6],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,1,3,1,1,7]},{"type":"if","position":[1,1,3,1,1,7],"cases":{"true":{"dynamicNodes":[]}},"default":{}},{"type":"componentDynamic","position":[1,1,3,1,1]},{"type":"componentDynamic","position":[1,1,3,1]},{"type":"componentDynamic","position":[1,1,3]},{"type":"attr","position":[1,1,5]},{"type":"if","position":[1,1,5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"registerYield","position":[1,1,3,1],"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"forIn","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1,3]},{"type":"attr","position":[1,1,5]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,1,6]},{"type":"if","position":[1,1,6],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"forIn","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"for","position":[1,3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]}]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,4]},{"type":"if","position":[1,4],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,4]},{"type":"if","position":[1,4],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,5]},{"type":"if","position":[1,5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,6]},{"type":"if","position":[1,6],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,7]},{"type":"if","position":[1,7],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,8]},{"type":"if","position":[1,8],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,9]},{"type":"if","position":[1,9],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropShow","ltPropSrc","ltPropType","ltPropWrapperClass","ltPropButtons","ltPropMarkerData","ltPropSidePanelData","ltPropPanelDirection","ltPropUndo","ltPropQueueUpdateTime","ltPropUndoLimit","ltPropResetQueue","ltPropDrawType","ltPropName","ltPropShapeProperties","ltPropFakeShapeProperties","ltPropResizeHandlers","ltPropEditorPanel","ltPropEditorPanelData","ltPropPopover","ltPropZoom","ltPropZoomOptions","ltPropZoomLevel","ltPropEditorPanelMapping","ltPropSmartGuide","ltPropSmartGuideSupport","ltPropSmartBuffer","ltPropContextMenu","ltPropContextMenuOptions","disableNext","disablePrev","displayValue","isImage","undoQueue","redoQueue","__undoQueue","viewBox","aspectRatio","selectedItem","loading","render","tagging","renderCrop","selected","renderFilter","renderFill","renderStroke","renderBorder","renderFont","renderColor","renderOutline","renderDashed","showFill","showStroke","showBorder","showEditor","showFont","showColor","showOutline","showDashed","openFillPop","openStrokePop","openBorderPop","openDashedPop","openColorPop","openFontPop","renderMenu","menuShow"],


	get_selected : function(){
		return this.data.selected;
	},

	init : function(){
		var __data = this.data,
		side_panel_data = __data.ltPropSidePanelData,
		__type = __data.ltPropType;

		if( __type != "image" ){
			var __len = side_panel_data.length;

			for( var i = 0; i < __len; i++ ){
				var __cur = side_panel_data[ i ];

				if( __cur.name == "concealing_tools" ){
					Lyte.arrayUtils( side_panel_data, 'removeAt', i-- );
					__len--;
				}
			}
		} else {
			this.setData( 'isImage', true );

			if( /^[0-9]+$/.test( __data.ltPropZoomLevel ) ){
				this.disable_zoom();
			}
		}
	},

	init_func : function(){
		this[ 'setup_' + this.data.ltPropType ]();

		var resize = this.__resize = this.resize.bind( this ),
		utils = _lyteUiUtils,
		ns = 'annotator',
		__window = window;

		utils.addEvent( __window, 'resize', resize, ns );
		utils.addEvent( __window, 'orientationchange', resize, ns );
	},

	get_ratio : function(){
		return this.data.aspectRatio;
	},

	resize : function( evt, set_viewbox ){
		var __this = this,
		side_panel = __this.__sidepanel,
		wormhole = __this.__wormhole,
		__data = __this.data,
		is_zoom = __data.isImage && __data.ltPropZoom,
		zoomLevel = __data.ltPropZoomLevel;

		if( !wormhole ){
			return;
		}

		if( evt && evt.type && is_zoom && zoomLevel != 'fit_to_screen' ){
			return this.__zoom_obs( zoomLevel );
		}

		var elem = wormhole.getElementsByTagName( 'lyte-whiteboard-area' )[ 0 ],
		drawType = __data.ltPropDrawType,
		ow,
		oh,
		__content_outer = $L( elem.parentNode ),
		__bcr;

		if( set_viewbox ){
			__content_outer.css({
				width : ow = outerWidth,
				height : oh = outerHeight
			});
		}

		$L( elem ).css({
			width : "",
			height : ""
		});

		__bcr = evt == true ? __this.bcr( elem ) : void 0;

		$L.fastdom.measure( function(){
			var ratio = __this.get_ratio(),
			is_original_landscape = ratio > 1,
			bcr = __bcr || __this.bcr( elem ),
			__inner_w = set_viewbox ? ow : innerWidth,
			__inner_h = set_viewbox ? oh : innerHeight,
			is_landscape = __inner_w > __inner_h;

			$L.fastdom.mutate( function(){
				var obj = {
					width : "",
					height : ""
				},
				is_wid = is_landscape,
				__width = bcr.width,
				__height = bcr.height,
				__attr = {};

				if( is_original_landscape ){
					if( is_landscape ){
						if( ratio * __height > __width ){
							is_wid = false
						}
					}
				} else {
					if( !is_landscape ){
						if( __width / ratio <= __height ){
							is_wid = false
						} else {
							is_wid = true;
						}
					}
				}

				if( is_wid ){
					obj.width = ( __attr.width = ( __attr.height = __height ) * ratio ) + 'px';
				} else {
					obj.height = ( __attr.height = ( __attr.width = __width ) / ratio ) + 'px';
				}

				if( set_viewbox ){

					__content_outer.css({
						width : "",
						height : ""
					});

					return __this.setData( 'viewBox', '0 0 ' + __this.__owdt + ' ' + __this.__ohgt );
				}

				var $elem = $L( elem ),
				cb = "onWindowResize";

				if( drawType == "crop" ){
					var __width = parseFloat( $elem.attr( 'width' ) ),
					__height = parseFloat( $elem.attr( 'height' ) ),
					__new_width = __attr.width,
					__new_height = __attr.height,
					__content = elem.getElementsByTagName( 'lyte-crop-content' )[ 0 ],
					__style = __content.style,
					content_width = parseFloat( __style.width ),
					content_height = parseFloat( __style.height ),
					content_left = parseFloat( __style.left ),
					content_top = parseFloat( __style.top );

					$L( __content ).css({
						left : ( content_left * __new_width / __width ) + 'px',
						top : ( content_top * __new_height / __height ) + 'px',
						width : ( content_width * __new_width / __width ) + 'px',
						height : ( content_height * __new_height / __height ) + 'px'
					});

					__this.onMove( { parentNode : __content } );

					cb = "onCrop";
				}

				$elem.css( obj ).attr( __attr );

				if( is_zoom &&  /fit_to_screen/i.test( __data.ltPropZoomLevel ) ){
					__this.setData( 'displayValue', parseInt( __attr.width * 100 / __this.__owdt ) + '%' );
					__this.disable_zoom();
				}

				__this.getMethods( cb ) && __this.executeMethod( cb, evt, wormhole, __this.$node );
			});
		});

		__data.ltPropContextMenu && this.setData( 'menuShow', false );
	},

	setup_whiteboard : function( nw, nh ){
		var __outerHeight = ( this.__ohgt = outerHeight ),
		__outerWidth = ( this.__owdt = outerWidth ),
		viewBox = "0 0 " + __outerWidth + " " + __outerHeight;

		this.setData({
			viewBox : viewBox,
			aspectRatio : __outerWidth / __outerHeight,
			render : true
		});

		var cb = "onReady";
		this.getMethods( cb ) &&this.executeMethod( cb, this.__wormhole, this.$node );
	},

	__setup_image : function( img ){
		this.setData( 'aspectRatio', ( this.__owdt = img.naturalWidth ) / ( this.__ohgt = img.naturalHeight ) );
	},

	draw_canvas : function( img, width, height, start, end, dx, dy ){
		var canvas = this.__canvas,
		ctx = this.__ctx;

		canvas.width = width;
		canvas.height = height;

		ctx.fillRect( 0, 0, width, height );
		ctx.drawImage( img, start, end, width, height, dx || 0, dy || 0, width, height );

		$L( canvas ).attr({
			ref_x : start,
			ref_y : end
		});
	},

	redraw_img : function( new_x, new_y, new_width, new_height, width, height ){
		var canvas = this.__canvas,
		canvas_width = canvas.width,
		canvas_height = canvas.height,
		__x = new_x * canvas_width / width,
		__y = new_y * canvas_height / height,
		__width = new_width * canvas_width / width,
		__height = new_height * canvas_height / height,
		blur_canvas = Array.from( canvas.parentNode.getElementsByClassName( 'lyteCanvasBlurElement' ) ),
		smudge_canvas = this.__smudge,
		ref_x = parseFloat( canvas.getAttribute( 'ref_x' ) ),
		ref_y = parseFloat( canvas.getAttribute( 'ref_y' ) );

		this.data.ltPropUndo && this.pushToQueue({
			type : "crop",
			oldValue : {
				x : ref_x,
				y : ref_y,
				width : canvas_width,
				height : canvas_height
			},
			newValue : {
				x : __x,
				y : __y,
				width : __width,
				height : __height
			}
		});

		this.update_aspect( __width, __height );

		this.draw_canvas( this.__img, __width, __height, __x, __y, 0, 0 );

		if( blur_canvas.length ){
			this.crop_blur_canvas( blur_canvas, __width, __height, __x, __y, ref_x, ref_y );
		}

		if( smudge_canvas ){
			this.crop_smudge_canvas( smudge_canvas, __width, __height, __x - ref_x, __y - ref_y );
		}
	},

	crop_smudge_canvas : function( smudge_canvas, __width, __height, __x, __y ){
		var ctx = smudge_canvas.getContext( '2d' ),
		width = smudge_canvas.width,
		height = smudge_canvas.height,
		img_data = ctx.getImageData( 0, 0, smudge_canvas.width, smudge_canvas.height ),
		new_data,
		fake_canvas = document.createElement( 'canvas' ),
		fake_ctx = fake_canvas.getContext( '2d' );

		fake_canvas.width = __width;
		fake_canvas.height = __height;
		fake_ctx.drawImage( smudge_canvas, __x, __y, __width, __height, 0, 0, __width, __height );

		ctx.clearRect( 0, 0, width, height );

		smudge_canvas.width = __width;
		smudge_canvas.height = __height;

		ctx.drawImage( fake_canvas, 0, 0 );

		new_data = fake_ctx.getImageData( 0, 0, __width, __height );

		this.data.ltPropUndo && this.pushToQueue({
			type : "smudge_update",
			oldValue : img_data,
			newValue : new_data
		});
	},

	crop_blur_canvas : function( arr, __width, __height, __x, __y, ref_x, ref_y ){
		var __this = this,
		__right = __x + __width,
		__bottom = __y + __height;

		arr.forEach( function( item ){
			var $item = $L( item ),
			x = parseFloat( $item.attr( 'prev_x' ) ) + ref_x,
			y = parseFloat( $item.attr( 'prev_y' ) ) + ref_y,
			width = parseFloat( $item.attr( 'prev_width' ) ),
			height = parseFloat( $item.attr( 'prev_height' ) ),
			right = x + width,
			bottom = y + height;

			if( right < __x || x > __right || bottom < __y || y > __bottom ){
				__this.delete_single( item, {} );
			}  else {
				var new_x = Math.max( __x, x ),
				new_y = Math.max( __y, y ),
				new_right = Math.min( right, __right ),
				new_bottom = Math.min( bottom, __bottom ),
				old_obj = {
					x : x - ref_x,
					y : y - ref_y,
					width : width,
					height : height
				},
				new_obj = {
					x : new_x - __x,
					y : new_y - __y,
					width : new_right - new_x,
					height : new_bottom - new_y
				};

				__this.data.ltPropUndo && __this.pushToQueue({
					type : "crop_blur",
					id : item.id,
					delay :  true,
					oldValue : old_obj,
					newValue : new_obj
				});

				__this.redraw_blur( item, new_obj );
			}
		});
	},

	redraw_blur : function( canvas, new_obj ){
		var ctx = canvas.getContext( '2d' ),
		__canvas = this.__canvas,
		x = new_obj.x,
		y = new_obj.y,
		width = new_obj.width,
		height = new_obj.height,
		$canvas = $L( canvas ),
		__attr = $canvas.data( 'data' ).attr;

		canvas.width = __canvas.width;
		canvas.height = __canvas.height;

		$L( canvas ).attr({
			prev_x : __attr.prev_x = x,
			prev_y : __attr.prev_y = y,
			prev_width : __attr.prev_width = width,
			prev_height : __attr.prev_height = height
		});

		ctx.drawImage( __canvas, x, y, width, height, x, y, width, height );
	},

	update_aspect : function( __width, __height ){
		this.setData( 'aspectRatio', ( this.__owdt = __width ) / ( this.__ohgt = __height ) );
	},

	setup_image : function(){

		var __this = this,
		data = __this.data,
		src = data.ltPropSrc,
		img = new Image(),
		ann_ns = 'lyteAnnotator';

		__this.setData({
			loading : ann_ns + 'Loading',
			render : true
		});

		img.onload = function(){
			__this.setData( 'loading', '' );
			__this.__setup_image( img );
			__this.resize( true );
			__this.resize( void 0, true );
			__this.draw_canvas( __this.__img = img, __this.__owdt, __this.__ohgt, 0, 0 );

			var cb = "onReady";
			__this.getMethods( cb ) && __this.executeMethod( cb, __this.__wormhole, __this.$node );
		};

		img.onerror = function(){
			__this.setData( 'loading', ann_ns + 'Error' );

			var cb = "onError";
			__this.getMethods( cb ) && __this.executeMethod( cb, __this.__wormhole, __this.$node );
		};

		img.src = src;
	},

	src_obs : function( arg ){
		var canvas = this.__canvas,
		ctx = this.__ctx;

		ctx.fillRect( 0, 0, canvas.width, canvas.height );

		this.select_all();
		this.delete_selected();

		this.setData( 'ltPropResetQueue', true );

		this.setup_image();

	}.observes( 'ltPropSrc' ),

	data : function(){
		var string = "string",
		boolean = "boolean",
		object = 'object',
		array = 'array',
		number = 'number',
		__arr = [
		    {
                name : "select",
                value : "Select",
                drawType : ""
            }
		],
		highlight_common = {
		    fill : "none",
		     stroke : "#ff004e",
		    "stroke-width" : 4,
		    "stroke-opacity" : 1,
		    "stroke-linejoin" : "round",
		    "stroke-linecap" : "round",
		    "fill-opacity" : 0,
		    "stroke-dasharray" : "none"
		},
		highlight_fake_common = {
		    fill : "none",
		    stroke : "transparent",
		    "stroke-width" : 6
		},
		pen_prop = {
		    fill : "none",
		    "stroke-width" : 40,
		    "stroke-opacity" : 0.35,
		    "stroke-linejoin" : "round",
		    "stroke-linecap" : "round",
		    "fill-opacity" : 0,
		    "stroke-dasharray" : "none"
		},
		pen_fake_prop = {
		    fill : "none",
		    stroke : "transparent",
		    "stroke-width" : 24
		},
		hidden_cls = 'lyteAnnotatorHidden',
		__basic_colors = [
			{
				name : "Reddish pink",
				value : "#ff004e",
				active : ""
			},
			{
				name : "Red",
				value : "#ff3131",
				active : ""
			},
			{
				name : "Orange",
				value : "#fe9300",
				active : ""
			},
			{
				name : "Yellow",
				value : "#ffc300",
				active : ''
			},
			{
				name : "Green",
				value : '#19de5e',
				active : ""
			},
			{
				name : "Blue",
				value : "#226cfb",
				active : ""
			},
			{
				name : "Violet",
				value : '#8b23d5',
				active : ''
			},
			{
				name : "White",
				value : "#ffffff",
				active : ""
			},
			{
				name : "Black",
				value : '#000000',
				active : ''
			},
			{
				name : "No color",
				value : "none",
				active : ""
			}
		];

		__arr.push( {
		    name : "highlighting_tools",
		    value : "Highlighting tools",
		    children : [
		        {
		            name : "rectangle",
		            value : "Rectangle",
		            drawType : "rect",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        },
		        {
		            name : "ellipse",
		            value : "Ellipse",
		            drawType : "ellipse",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        },
		        {
		            name : "marker",
		            value : "Marker",
		            drawType : "polyline",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        },
		        {
		            name : "line",
		            value : "Line",
		            drawType : "line",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        },
		        {
		            name : "arrow",
		            value : "Arrow",
		            drawType : "arrow",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        },
		        {
		            name : "doubleArrow",
		            value : "Double Arrow",
		            drawType : "doublearrow",
		            shapeProperties : $L.extend( {}, highlight_common ),
		            fakeShapeProperties : $L.extend( {}, highlight_fake_common )
		        }
		    ]
		},{
		    name : "highlighter_pen",
		    value : "Highlighter pen",
		    children : [
		        {
		            name : "yellow",
		            value : "Yellow",
		            drawType : "polyline",
		            shapeProperties : $L.extend( { stroke : "yellow" }, pen_prop ),
		            fakeShapeProperties : $L.extend( {}, pen_fake_prop )
		        },
		        {
		            name : "red",
		            value : "Red",
		            drawType : "polyline",
		            shapeProperties : $L.extend( { stroke : "red" }, pen_prop ),
		            fakeShapeProperties : $L.extend( {}, pen_fake_prop )
		        }
		    ]
		},{
		    name : "text",
		    value : "Text",
		    drawType : "text"
		},{
		    name : "tagging_tools",
		    value : "Tagging tools",
		    children : [
		        {
		            name : "numbering",
		            value : "Numbering",
		            drawType : "tagging_number",
		            shapeProperties : {
		                stroke : "blue"
		            }
		        },
		        {
		            name : "correct",
		            value : "Correct",
		            drawType : "tagging_correct",
		            shapeProperties : {
		                stroke : "green"
		            }
		        },
		        {
		            name : "wrong",
		            value : "Wrong",
		            drawType : "tagging_wrong",
		            shapeProperties : {
		                stroke : "red"
		            }
		        },
		        {
		            name : "unclear",
		            value : "Unclear",
		            drawType : "tagging_unclear",
		            shapeProperties : {
		                stroke : "orange"
		            }
		        }
		    ]
		},{
		    name : "concealing_tools",
		    value : "Concealing tools",
		    children : [
		        {
		            name : "blur",
		            value : "Blur",
		            drawType : "blur"
		        },
		        {
		            name : "smudge",
		            value : "Smudge",
		            drawType : "smudge",
		            shapeProperties : {
		                "stroke-width" : 24
		            }
		        }
		    ]
		},{
		    name : "crop",
		    value : "Crop",
		    drawType : "crop"
		});

		return {

			ltPropShow : Lyte.attr( boolean, { default : false } ),
			ltPropSrc : Lyte.attr( string ),
			ltPropType : Lyte.attr( string, { default : "whiteboard" } ),

			ltPropWrapperClass : Lyte.attr( string, { default : "" } ),
			ltPropButtons : Lyte.attr( array, { default : [
				{
					text : "done",
					purpose : "apply",
					properties : {
						appearance : "primary"
					}
				},
				{
					text : "cancel",
					purpose : "cancel"
				}
			] } ),

			ltPropMarkerData : Lyte.attr( object, { default : {
				type : "marker",
				tag : "defs",
				children : [
					{
						tag : 'marker',
						attr : {
							id : "lyteArrowMarkerHead",
							markerWidth : 6,
							markerHeight : 6,
							refX : 5,
							refY : 5,
							orient : "auto",
							viewBox : "0 0 10 10"
						},
						children : [
							{
								tag : "path",
								attr : {
									d : "M 0 0 L 10 5 L 0 10 z",
									stroke : "red",
									fill : 'red'
								}
							}
						]
					},
					{
						tag : 'marker',
						attr : {
							id : "lyteArrowMarkerTail",
							markerWidth : 6,
							markerHeight : 6,
							refX : 5,
							refY : 5,
							orient : "auto",
							viewBox : "0 0 10 10"
						},
						children : [
							{
								tag : "path",
								attr : {
									d : "M 10 0 L 0 5 L 10 10 z",
									stroke : "red",
									fill : 'red'
								}
							}
						]
					}
				]
			} } ),

			ltPropSidePanelData : Lyte.attr( array, { default : __arr } ),
			ltPropPanelDirection : Lyte.attr( string, { default : "vertical" } ),
	
			ltPropUndo : Lyte.attr( boolean, { default : true } ),
			ltPropQueueUpdateTime : Lyte.attr( number, { default : 250 } ),
			ltPropUndoLimit : Lyte.attr( number, { default : 50 } ),
			ltPropResetQueue : Lyte.attr( boolean, { default : false } ),

			ltPropDrawType : Lyte.attr( string, { default : "" } ),
			ltPropName : Lyte.attr( string, { default : "" } ),

			ltPropShapeProperties : Lyte.attr( object, { default : {} } ),
			ltPropFakeShapeProperties : Lyte.attr( object, { default : {} } ),

			ltPropResizeHandlers : Lyte.attr( object, { default : {
				N : {
					width : 15,
					height : 15
				},
				S : {
					width : 15,
					height : 15
				},
				W : {
					width : 15,
					height : 15
				},
				E : {
					width : 15,
					height : 15
				},
				NE : {
					width : 15,
					height : 15
				},
				NW : {
					width : 15,
					height : 15
				},
				SE : {
					width : 15,
					height : 15
				},
				SW : {
					width : 15,
					height : 15
				}
			} } ),

			ltPropEditorPanel : Lyte.attr( boolean, { default : true } ),

			ltPropEditorPanelData : Lyte.attr( object, { default : {
					fill : {
						value : "Fill color",
						selected : "",
						colors : $L.extend( [], __basic_colors ),
						opacity : {
							text : "Opacity",
							value : 0,
							style : ""
						}
					},
					stroke : {
						value : "Border color",
						selected : "",
						disabled : "",
						colors : $L.extend( [], __basic_colors ),
						opacity : {
							text : "Opacity",
							value : 0,
							style : ""
						}
					},
					border : {
						value : "Border thickness",
						selected : "",
						disabled : "",
						values : [
							{
								name : "",
								value : "2",
								active : ""
							},
							{
								name : "",
								value : "4",
								active : ""
							},
							{
								name : "",
								value : "7",
								active : ""
							},
							{
								name : "",
								value : "10",
								active : ""
							}
						]
					},
					dashed : {
						value : "Dashed",
						selected : "",
						disabled : "",
						values : [
							{
								name : "",
								value : "4,4",
								active : ""
							},
							{
								name : "",
								value : "8,8",
								active : ""
							},
							{
								name : "",
								value : "14,14",
								active : ""
							},
							{
								name : "",
								value : "20,20",
								active : ""
							}
						]
					},
					font : {
						value : "Font size",
						selected : '',
						suffix : 'px',
						values : ( function(){
							var arr = [];

							for( var i = 12; i <= 40; i++ ){
								arr.push( i );
							}

							return arr;
						})()
					},
					color : {
						value : "Font color",
						selected : "",
						colors : ( function(){
							var __colors = $L.extend( true, [], __basic_colors );
							__colors.pop();
							__colors.splice( 7, 0, {
								name : "Brown",
								value : "#8b4513",
								active : ""
							});
							return __colors;
						})()
					},
					outline : {
						value : "Outline",
						selected : ""
					}
				} 
			} ),

			ltPropPopover : Lyte.attr( string, { default : '{"wrapperClass" : "lyteAnnotatorEditorWrapper"}' } ),

			ltPropZoom : Lyte.attr( boolean, { default : true } ),
			ltPropZoomOptions : Lyte.attr( object, { default : {
				10 : "10%",
				25 : "25%",
				50 : "50%",
				75 : "75%",
				100 : "100%",
				125 : "125%",
				150 : "150%",
				175 : "175%",
				200 : "200%",
				actual_size : "Actual size",
				fit_to_screen : "Fit to screen",
				fit_to_width : "Fit to width"
			} } ),
			ltPropZoomLevel : Lyte.attr( string, { default : "fit_to_screen" } ),
			ltPropEditorPanelMapping : Lyte.attr( object, { default : {
				rectangle : {
					fill : true,
					stroke : true,
					border : true,
					dashed : true
				},
				ellipse : {
					fill : true,
					stroke : true,
					border : true,
					dashed : true
				},
				marker : {
					stroke : true,
					border : true,
					dashed : true
				},
				line : {
					stroke : true,
					border : true,
					dashed : true
				},
				arrow : {
					stroke : true,
					border : true,
					dashed : true
				},
				doublearrow : {
					stroke : true,
					border : true,
					dashed : true
				},
				text : {
					font : true,
					outline : true,
					color : true
				},
				numbering : {
					stroke : true
				}
			} } ),
			ltPropSmartGuide : Lyte.attr( boolean, { default : true } ),
			ltPropSmartGuideSupport : Lyte.attr( array, { default : [ 'rectangle', 'ellipse', 'arrow', 'line', 'doublearrow' ] } ),
			ltPropSmartBuffer : Lyte.attr( number, { default : 10 } ),
			
			ltPropContextMenu : Lyte.attr( boolean, { default : true } ),
			ltPropContextMenuOptions : Lyte.attr( object, { default : {			
				cut : {
					value : "Cut",
					show : ""
				},
				copy : {
					value : "Copy",
					show : ""
				},
				paste : {
					value : "Paste",
					show : ""
				},
				undo : {
					value : "Undo",
					show : ""
				},
				redo : {
					value : "Redo",
					show : ""
				},
				forward : {
					value : 'Move forward',
					show : ""
				},
				backward : {
					value : "Move backward",
					show : ""
				},
				zoomin : {
					value : "Zoom in"
				},
				zoomout : {
					value : "Zoom out"
				}
			} } ),

			disableNext : Lyte.attr( string ),
			disablePrev: Lyte.attr( string ),
			displayValue : Lyte.attr( string, { default : "" } ),

			isImage : Lyte.attr( boolean ),

			undoQueue : Lyte.attr( array, { default : [] } ),
			redoQueue : Lyte.attr( array, { default : [] } ),
			__undoQueue : Lyte.attr( array, { default : [] } ),

			viewBox : Lyte.attr( string ),
			aspectRatio : Lyte.attr( number ),

			selectedItem : Lyte.attr( object ),

			loading : Lyte.attr( string, { default : "" } ),
			render : Lyte.attr( boolean, { default : false } ),

			tagging : Lyte.attr( number, { default : 1 } ),
			renderCrop : Lyte.attr( boolean ),

			selected : Lyte.attr( array, { default : [] } ),

			renderFilter : Lyte.attr( boolean ),
			renderFill : Lyte.attr( boolean ),
			renderStroke : Lyte.attr( boolean ),
			renderBorder : Lyte.attr( boolean ),
			renderFont : Lyte.attr( boolean ),
			renderColor : Lyte.attr( boolean ),
			renderOutline : Lyte.attr( boolean ),
			renderDashed : Lyte.attr( boolean ),
			showFill : Lyte.attr( string ),
			showStroke : Lyte.attr( string ),
			showBorder : Lyte.attr( string ),
			showEditor : Lyte.attr( string ),
			showFont : Lyte.attr( string ),
			showColor : Lyte.attr( string ),
			showOutline : Lyte.attr( string ),
			showDashed : Lyte.attr( string ),

			openFillPop : Lyte.attr( boolean ),
			openStrokePop : Lyte.attr( boolean ),
			openBorderPop : Lyte.attr( boolean ),
			openDashedPop : Lyte.attr( boolean ),
			openColorPop : Lyte.attr( boolean ),
			openFontPop : Lyte.attr( boolean ),

			renderMenu : Lyte.attr( boolean ),
			menuShow : Lyte.attr( boolean )
		}		
	},

	show_obs : function( arg ){
		var fn = 'remove';

		if( arg.newValue ){
			this.init_func();
			fn = 'add';
		} else {
			this.setData({
				ltPropResetQueue : true,
				render : false
			});
			this.didDestroy();

			var cb = "onHide";

			this.getMethods( cb ) && this.executeMethod( cb, this.$node );
		}

		$L( document.body )[ fn + 'Class' ]( 'lyteAnnotatorActive' );
	}.observes( 'ltPropShow' ),

	queue_reset : function( arg ){
		if( arg.newValue ){
			var data = this.data;

			data.undoQueue.splice( 0 );
			data.redoQueue.splice( 0 );
			data.__undoQueue.splice( 0 );

			this.call_queue_update( 'reset' );

			this.setData( arg.item, false );
		}
	}.observes( 'ltPropResetQueue' ),

	call_queue_update : function( frm ){
		var cb = "onQueueUpdate",
		data = this.data;

		this.getMethods( cb ) && this.executeMethod( cb, data.undoQueue, data.redoQueue, frm, this.$node );
	},

	update_view : function(){
		var __wormhole = this.__wormhole,
		elem = __wormhole.getElementsByTagName( 'lyte-crop-content' )[ 0 ],
		whiteboard = __wormhole.getElementsByTagName( 'lyte-whiteboard-area' )[ 0 ],
		__style = elem.style,
		__left = parseFloat( __style.left || 0 ),
		__width = parseFloat( __style.width || elem.offsetWidth ),
		__top = parseFloat( __style.top || 0 ),
		__height = parseFloat( __style.height || elem.offsetHeight ),
		__cur_width = parseFloat( whiteboard.getAttribute( 'width' ) ),
		__cur_height = parseFloat( whiteboard.getAttribute( 'height' ) ),
		__svg = this.__svg,
		__viewbox = __svg.viewBox.baseVal,
		x = __viewbox.x,
		y = __viewbox.y,
		width = __viewbox.width,
		height = __viewbox.height,
		new_width = width * __width / __cur_width,
		new_height = height * __height / __cur_height,
		new_x = x + ( __left * width / __cur_width ),
		new_y = y + ( __top * height / __cur_height ),
		viewBox = new_x + " " + new_y + " " + new_width + " " + new_height,
		__data = this.data,
		new_aspect = __width / __height,
		old_viewbox = __data.viewBox;

		if( old_viewbox == viewBox ){
			return false;
		}

		if( __data.ltPropUndo ){
			this.pushToQueue({
				type : "aspectRatio",
				oldValue : __data.aspectRatio,
				newValue : new_aspect
			});

			this.pushToQueue({
				type : "viewBox",
				oldValue : old_viewbox,
				newValue : viewBox
			});
		}

		this.setData({
			aspectRatio : new_aspect,
			viewBox : viewBox
		});

		if( __data.ltPropType == "image" ){
			this.select_first();
			this.redraw_img( new_x, new_y, new_width, new_height, width, height );
			this.resize();

			this.$node.ltProp( 'zoomLevel', 'fit_to_screen' );

			return;
		}
		return true;
	},

	new_image : function(){

		this.unselectAll( {}, this.get_selected() );
		this.select_first();

		var width = this.__owdt,
		height = this.__ohgt,
		wormhole = this.__wormhole,
		whiteboardArea = this.__svg.parentNode,
		obj = { 
		 	getDimension : function(){
			    return {
			        width : width,
			        height : height
			    }
			}, 
			dom : whiteboardArea, 
			attributes : ['viewbox', 'viewBox'], 
			attributes_replace : ['0 0 ' + width + ' ' + height,'0 0 ' + width + ' ' + height ], 
			styles : ['width','height' ], 
			styles_replace : [ width + 'px', height + 'px'],
			onBeforeConstruct : function( __dom ){
				$L( 'img', __dom ).css({
					width : '100%',
					height : '100%'
				});

				var __elem = $L( 'lyte-whiteboard-area', __dom ).get( 0 ),
				__style = __elem.style,
				__width = __style.width,
				__height = __style.height,
				background = __style.background;

				__elem.setAttribute( 'style', 'width:' + __width + ";height:" + __height + ";background:" + background + ";" );
			}
		},
		cb = "onBeforeImageProcess";

		if( this.getMethods( cb ) && this.executeMethod( cb, obj, wormhole, this.$node ) == false ){
			return;
		}

		return $L.screenGrab( obj );
	},

	save : function(){
		var __this = this,
		__data = __this.data;

		if( __data.ltPropType == "image" ){
			if( __data.undoQueue.length || __data.redoQueue.length ){

				var cb = "onBeforeSave",
				wormhole = __this.__wormhole,
				$node = __this.$node;

				if( __this.getMethods( cb ) && __this.executeMethod( cb, wormhole, $node ) == false ){
					return;
				}

				__this.new_image().then( function( arg ){
					__this.setData( 'ltPropSrc', arg.image.src );
					__this.focus_content();
					__this.getMethods( cb = "onSave" ) && __this.executeMethod( cb, wormhole,  $node );
				});
			}
		}
	},

	apply : function(){
		var wormhole = this.__wormhole,
		$node = this.$node;

		if( this.data.ltPropDrawType == "crop" ){
			var cb = "onBeforeCrop";

			if( this.getMethods( cb ) && this.executeMethod( cb, wormhole, $node ) == false ){
				return;
			}

			if( this.update_view() ){
				this.select_first();
				this.resize();
			}
			this.focus_content();

			this.getMethods( cb = "onCrop" ) && this.executeMethod( cb, wormhole, $node );
		} else {
			var cb = "onApply";

			if( this.getMethods( cb ) ){
				this.new_image().then( function( arg ){
					this.executeMethod( cb, arg, wormhole, this.$node );
					this.setData( 'ltPropShow', false );
				}.bind( this ) );
			} else {
				this.setData( 'ltPropShow', false );
			}
		}
	},

	cancel : function(){
		var wormhole = this.__wormhole,
		$node = this.$node;

		if( this.data.ltPropDrawType == "crop" ){
			var cb = "onBeforeCropCancel";

			if( this.getMethods( cb ) && this.executeMethod( cb, wormhole, $node ) == false ){
				return;
			}
			this.select_first();
			this.focus_content();

			this.getMethods( cb = "onCropCancel" ) && this.executeMethod( cb, wormhole, $node );
		} else {
			var cb = "onCancel";

			if( this.getMethods( cb ) && this.executeMethod( cb, wormhole, $node ) == false ){
				return;
			}

			this.setData( 'ltPropShow', false );
		}
	},

	focus_content : function(){
		$L( 'lyte-annotator-content', this.__wormhole ).focus();
	},

	select_first : function(){
		this.side_click( this.data.ltPropSidePanelData[ 0 ] || {} );
	},

	call_draw : function( evt, type, cb ){
		if( this.getMethods( cb ) ){
			return this.executeMethod( cb, type, evt, this.__wormhole, this.$node );
		}
	},

	create_element : function( obj ){
		var ns = "ht" + "tp://www.w3.org/2000/svg",
		is_normal = obj.ns,
		__tag = obj.tag,
		elem = is_normal ? document.createElement( __tag ) : document.createElementNS( ns, obj.tag ),
		children = obj.children || [],
		evt = obj.event || {},
		$elem = $L( elem ),
		__attr = obj.attr;

		this.attr( $elem.data( 'data', obj ), __attr || {} );

		if( __tag == "textarea" ){
			$elem.val( __attr.value );
		}

		for( var key in evt ){
			$elem.on( key, this[ evt[ key ] ].bind( this ) );
		}

		children.forEach( function( item ){
			elem.appendChild( this.create_element( item ) );
		}.bind( this ) );

		return elem;
	},

	randomId : function(){
		return 'LyteAnnotator' + Date.now() + parseInt( Math.random() * 1e3 )
	},

	create_tagging : function( x_pos, y_pos, ns ){
		var data = this.data,
		ns = "Tagging" + ns,
		prop = data.ltPropShapeProperties,
		__45deg = 32 * Math.cos( 45 * Math.PI / 180 ),
		__class = 'lyteTaggingPositionCircles',
		obj = {
			tag : "g",
			type : "tagging",
			name : data.ltPropName,
			sub_type : ns,
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "circle",
					attr : $L.extend( true, {
						r : 16,
						"stroke-width" : 4,
						cx : 16,
						cy : 16,
						fill : "white",
						id : this.randomId()
					}, prop ) 
				},
				{
					tag : "path",
					attr : $L.extend( true,{
						id : this.randomId(),
						fill : prop.stroke,
						transform : "translate(16,32) rotate(90)",
						d : "M16,0 L0,8 0,-8"
					}, prop )
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cx : 48,
						cy : 16,
						purpose : 0
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cx : 16 + __45deg,
						cy : 16 + __45deg,
						purpose : 45
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cy : 48,
						cx : 16,
						purpose : 90
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cx : 16 - __45deg,
						cy : 16 + __45deg,
						purpose : 135
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cy : -16,
						cx : 16,
						purpose : 270
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cx : 16 + __45deg,
						cy : 16 - __45deg,
						purpose : 315
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cy : 16,
						cx : -16,
						purpose : 180
					}
				},
				{
					tag : "circle",
					attr : {
						class : __class,
						r : 2.5,
						stroke : "#7f7f7f",
						cx : 16 - __45deg,
						cy : 16 - __45deg,
						purpose : 225
					}
				},
				{
					tag : "circle",
					attr : {
						id : this.randomId(),
						class : "lyteTaggingActive",
						r : 4,
						stroke : "#11bf58",
						cy : 48,
						cx : 16,
						fill : "white",
						active : 90
					}
				}
			]
		};

		return obj;
	},

	create_tagging_correct : function( x_pos, y_pos ){
		var obj = this.create_tagging( x_pos, y_pos, 'Correct' );

		obj.children.splice( 2, 0, {
			tag : "path",
			attr : {
				d : "M9,15 L13.4,19.5 23.2,10.7",
				"stroke-width" : 4,
				fill : 'none',
				stroke : this.data.ltPropShapeProperties.stroke
			}
		});

		return this.create( obj, void 0, 'correct' );
	},

	create_tagging_wrong : function( x_pos, y_pos ){
		var obj = this.create_tagging( x_pos, y_pos, 'Wrong' );

		obj.children.splice( 2, 0, {
			tag : "path",
			attr : {
				d : "M9,9 L23,23 M23,9 L9,23",
				"stroke-width" : 3,
				fill : 'none',
				stroke : this.data.ltPropShapeProperties.stroke
			}
		});

		return this.create( obj, void 0, 'wrong' );
	},

	create_tagging_unclear : function( x_pos, y_pos ){
		var obj = this.create_tagging( x_pos, y_pos, 'Unclear' );

		obj.children.splice( 2, 0, {
			tag : "path",
			attr : {
				d : "M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z",
				"stroke-width" : 3,
				fill : 'none',
				stroke : this.data.ltPropShapeProperties.stroke,
				transform : "translate(4, 4)"
			}
		});

		return this.create( obj, void 0, 'unclear' );
	},


	create_tagging_number : function( x_pos, y_pos ){

		var obj = this.create_tagging( x_pos, y_pos, 'Number' );

		obj.children.splice( 2, 0, {
			tag : "foreignObject",
			attr : {
				class : "lyteTaggingElement",
				width : 32,
				height : 32
			},
			children : [
				{
					tag : "input",
					attr : {
						id : this.randomId(),
						value : this.data.tagging++,
						maxlength : 2
					},
					event : {
						focus : 'textarea_focus',
						blur : 'textarea_blur'
					},
					ns : true
				}
			]
		});

		return this.create( obj, void 0, 'number' );
	},

	create_line : function( x_pos, y_pos, ignore ){
		var data = this.data,
		ns = ignore || "Line",
		ann_ns = 'lyteAnnotator',
		obj = {
			tag : "g",
			type : "line",
			sub_type : ns,
			name : data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "path",
					attr : $L.extend( true, {
						d : "M0,0 L0,0",
						class : "lyte" + ns + "Element " + ann_ns + "OriginalElem",
						id : this.randomId()
					}, data.ltPropShapeProperties )
				},
				{
					tag : "path",
					attr : $L.extend( true, {
						d : "M0,0 L0,0",
						class : "lyte" + ns + "FakeElement " + ann_ns + "FakeElem",
						id : this.randomId()
					}, data.ltPropFakeShapeProperties )
				},
				{
					tag : "rect",
					attr : {
						id : this.randomId(),
						class : ann_ns + "ResizeWrapper"
					}
				}
			],
			resize : [ 'W', 'E' ]
		};

		return ignore ? obj : this.create( obj, void 0, 'line' );
	},

	create_doublearrow : function( x_pos, y_pos ){ 
		var obj = this.create_arrow( x_pos, y_pos, 'DoubleArrow' );

		return this.create( obj, void 0, 'doublearrow' );
	},

	create_arrow : function( x_pos, y_pos, __ns ){
		var obj = this.create_line( x_pos, y_pos, __ns || "Arrow" ),
		marker_data = this.data.ltPropMarkerData,
		__id = obj.attr.id,
		ns = 'url(#',
		head = __id + '_lyteArrowMarkerHead',
		tail = __id + '_lyteArrowMarkerTail',
		__attr = obj.children[ 0 ].attr,
		__this = this;

		__attr[ "marker-end" ] = ns + head + ')';
		__attr[ "marker-start" ] = ns + tail + ')';

		if( marker_data ){
			var ext_marker = this.extend( marker_data ),
			arr = [ head, tail ];

			if( !__ns ){
				var __children = ext_marker.children;
				__children.splice( 1, 1 );
			}

			obj.children.push( ext_marker );

			ext_marker.children.forEach( function( item, index ){
				item.attr.id = arr[ index ] || '';

				item.children.forEach( function( inner ){
					inner.attr.id = __this.randomId();
				});

			});
		} 

		if( __ns ){
			return obj;
		}

		return this.create( obj, void 0, 'arrow' );
	},

	create_text : function( x_pos, y_pos ){
		var data = this.data,
		obj = {
			tag : "g",
			type : "text",
			name : data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "foreignObject",
					attr : {
						class : "lyteTextElement lyteAnnotatorOriginalElem",
						width : 150,
						height : 50,
						id : this.randomId(),
						minWidth : 50,
						minHeight : 50,
						color : "#8b23d5",
						"font-size" : "16px"
					},
					children : [
						{
							tag : "textarea",
							attr : {
								class : "lyteAnnotatorTextarea",
								id : this.randomId(),
								value : ""
							},
							event : {
								focus : 'textarea_focus',
								blur : 'textarea_blur',
								input : 'textarea_input'
							},
							ns : true
						}
					]
				},
				{
					tag : "rect",
					attr : {
						id : this.randomId(),
						class : "lyteAnnotatorResizeWrapper"
					}
				}
			],
			resize : [ 'W', 'E' ]
		};

		return this.create( obj, void 0, 'text' );
	},

	textarea_input : function( evt ){
		var elem = evt.target;

		elem.style.height = "auto";

		$L.fastdom.measure( function(){
			var height = elem.scrollHeight,
			foreignObject = elem.parentNode,
			wrap = foreignObject.nextElementSibling;

			$L.fastdom.mutate( function(){
				this.update_attr( $L( foreignObject ), 'height', height );
				this.update_attr( $L( wrap ), 'height', height );
				this.update_attr( $L( elem ), 'style', 'height:' + height + 'px' );

				this.update_wrapper( $L( foreignObject.parentNode ) );
			}.bind( this ) );

		}.bind( this ) );
	},

	textarea_focus : function( evt ){
		var elem = evt.target,
		value = elem.value,
		tagName = elem.tagName.toLowerCase(),
		foreignObject = elem.parentNode,
		type = evt.type;

		type && $L( foreignObject.parentNode ).addClass( 'lyteAnnotator' + tagName + 'Focused' );

		this.__initial_value = value;

		if( tagName == "textarea" ){

			var __data = $L( foreignObject ).data( 'data' ).attr;

			this.__initial_height = __data.height;
		}

		type && this.select_first();
	},

	textarea_blur : function( evt ){
		var elem = evt.target,
		value = elem.value,
		$elem = $L( elem ),
		ini_value = this.__initial_value,
		foreignObject = elem.parentNode,
		par_elem = foreignObject.parentNode,
		tagName = elem.tagName.toLowerCase(),
		__data = this.data,
		is_undo = __data.ltPropUndo,
		__type = evt.type;

		__type && $L( par_elem ).removeClass( 'lyteAnnotator' + tagName + 'Focused' );

		if( __type && value != ini_value ){
			is_undo && this.pushToQueue({
				type : "update",
				oldValue : ini_value,
				prop : "value",
				newValue : value,
				id : elem.id
			});
		}

		if( !value && tagName == "textarea" ){
			__data.undoQueue.pop();
			par_elem.remove();
		} else {
			var hgt = this.__initial_height;
			if( hgt ){
				var new_hgt = parseFloat( foreignObject.getAttribute( 'height' ) );

				if( is_undo && new_hgt != hgt ){
					this.pushToQueue({
						type : "update",
						oldValue : hgt,
						prop : "height",
						newValue : new_hgt,
						id : foreignObject.id
					});
					this.pushToQueue({
						type : "update",
						oldValue : hgt,
						prop : "height",
						newValue : new_hgt,
						id : foreignObject.nextElementSibling.id
					});
					this.pushToQueue({
						type : "update",
						oldValue : 'height:' + hgt + 'px',
						prop : "style",
						newValue : 'height:' + new_hgt + 'px',
						id : elem.id
					});
				}

				delete this.__initial_height;
			}

			$elem.data( 'data' ).attr.value = value;
		}

		delete this.__initial_value;
	},

	create_polyline : function( x_pos, y_pos ){
		var data = this.data,
		obj = {
			tag : "g",
			sub_type : data.ltPropDrawType,
			name : data.ltPropName,
			type : "polyline",
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "polyline",
					attr : $L.extend( true, {
						class : "lytePolylineElement lyteAnnotatorOriginalElem",
						points : "0,0 0,0",
						id : this.randomId()
					}, data.ltPropShapeProperties )
				},
				{
					tag : "polyline",
					attr : $L.extend( true, {
						class : "lytePolylineFakeElement lyteAnnotatorFakeElem",
						points : "0,0 0,0",
						id : this.randomId()
					}, data.ltPropFakeShapeProperties )
				}
			]
		};

		return this.create( obj, void 0, 'polyline' );
	},

	create_blur : function(){
		var canvas = this.__canvas,
		obj = {
			type : "blur",
			tag : "canvas",
			name : this.data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem lyteCanvasBlurElement",
				id : this.randomId(),
				width : canvas.width,
				height : canvas.height
			},
			ns : true
		};

		return this.create( obj, canvas.parentNode, 'blur' );
	},

	create_smudge : function(){

		var exts_smudge = this.__smudge;

		if( exts_smudge ){
			this.__canvas_data = exts_smudge.getContext( '2d' ).getImageData( 0, 0, exts_smudge.width, exts_smudge.height );
			return exts_smudge;
		}

		var canvas = this.__canvas,
		obj = {
			type : "smudge",
			tag : "canvas",
			name : this.data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem lyteCanvasSmudgeElement",
				id : this.randomId(),
				width : canvas.width,
				height : canvas.height
			},
			ns : true
		};

		return this.__smudge = this.create( obj, canvas.parentNode, 'smudge' );
	},

	create_rect : function( x_pos, y_pos ){
		var data = this.data,
		obj = {
			type : "rect",
			tag : "g",
			name : data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "rect",
					attr : $L.extend( true, {
						class : "lyteRectElement lyteAnnotatorOriginalElem",
						id : this.randomId()
					}, data.ltPropShapeProperties )
				},
				{
					tag : "rect",
					attr : $L.extend( true, {
						class : "lyteRectFakeElement lyteAnnotatorFakeElem",
						id : this.randomId()
					}, data.ltPropFakeShapeProperties )
				},
				{
					tag : "rect",
					attr : {
						id : this.randomId(),
						class : "lyteAnnotatorResizeWrapper"
					}
				}
			],
			resize : [ 'N', 'S', 'W', 'E', 'NW', 'NE', 'SW', 'SE' ]
		};

		return this.create( obj, void 0, 'rect' );
	},

	create_ellipse : function( x_pos, y_pos ){
		var data = this.data,
		obj = {
			tag : "g",
			type : "ellipse",
			name : data.ltPropName,
			attr : {
				class : "lyteAnnotatorElem",
				transform : "translate(" + x_pos + "," + y_pos + ")",
				id : this.randomId()
			},
			children : [
				{
					tag : "ellipse",
					attr : $L.extend( true, {
						class : "lyteEllipseElement lyteAnnotatorOriginalElem",
						id : this.randomId(),
						cx : x_pos,
						cy : y_pos,
						rx : 0,
						ry : 0
					}, data.ltPropShapeProperties )
				},
				{
					tag : "ellipse",
					attr : $L.extend( true, {
						class : "lyteEllipseFakeElement lyteAnnotatorFakeElem",
						id : this.randomId(),
						cx : x_pos,
						cy : y_pos,
						rx : 0,
						ry : 0
					}, data.ltPropFakeShapeProperties )
				},
				{
					tag : "rect",
					attr : {
						id : this.randomId(),
						class : "lyteAnnotatorResizeWrapper"
					}
				}
			],
			resize : [ 'N', 'S', 'W', 'E', 'NW', 'NE', 'SW', 'SE' ]
		};

		return this.create( obj, void 0, 'ellipse' );
	},

	create : function( obj, outlet, frm ){

		var cb = "onBeforeCreate";

		if( frm && this.getMethods( cb ) ){
			var ret = this.executeMethod( cb, obj, frm, outlet, this.$node );

			if( ret == false ){
				return;
			}

			obj = ret || obj;
		}

		var elem = this.create_element( obj );
		( outlet || this.__svg ).appendChild( elem );

		if( obj.resize ){
			this.bind_resize( obj, elem, obj.resize );
		}

		return elem;
	},

	convert_to_view : function( bcr, client_x, client_y ){
		var viewbox = this.__svg.viewBox.baseVal,
		width = viewbox.width,
		height = viewbox.height,
		__width = client_x - bcr.left,
		__height = client_y - bcr.top;

		return{
			x : viewbox.x + ( ( __width ) * width / bcr.width ),
			y : viewbox.y + ( ( __height ) * height / bcr.height )
		};
	},

	/* resize codde */

	bind_resize_evt : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		draw_element = ev.target,
		elem = draw_element.parentNode,
		bcr = this.bcr( elem.parentNode ),
		client_x = ev.clientX,
		client_y = ev.clientY,
		data = this.data,
		position = this.__position = this.convert_to_view( bcr, client_x, client_y ),
		dir;

		this.__bcr = bcr;
		this.__elem = elem;
		dir = this.__direction = ( function(){
			var direction = {
				N : {
					height : -1
				},
				S : {
					height : 1
				},
				W :  {
					width : -1
				},
				E : {
					width : 1
				}
			},
			purpose = draw_element.getAttribute( 'purpose' ).split( '' ),
			obj = {
				height : 0,
				width : 0
			};

			purpose.forEach( function( item ){
				$L.extend( obj, direction[ item ] );
			});

			return obj;
		})();

		this.__refpos = ( function( __this ){
			var data = $L( elem ).data( 'data' ),
			is_line = /line/i.test( data.type ),
			__child_attr = data.children[ is_line ? 2 : 0 ].attr,
			__width = __child_attr.width,
			__height = __child_attr.height
			obj = __this.get_transfrom( data.attr.transform );

			if( is_line ){
				var ret = __this.is_neg( data ),
				is_neg_x = ret.x,
				is_neg_y = ret.y;

				if( dir.width == 1 ){
					if( is_neg_y ){
						obj.y += __height;
					}
					if( is_neg_x ){
						obj.x += __width;
					}
				} else {
					if( !is_neg_y ){
						obj.y += __height;
					}

					if( !is_neg_x ){
						obj.x += __width;
					}
					obj.is_neg = true;
				}
			} else {
				obj.width = __width == void 0 ? ( __width = __child_attr.cx * 2 ) : __width;
				obj.height = __height == void 0 ? ( __height = __child_attr.cy * 2 ) : __height; 

				if( dir.width == -1 ){
					obj.x += __width;
					obj.width_neg = true;
				}

				if( dir.height == -1 ){
					obj.y += __height;
					obj.height_neg = true;
				}
			}

			return obj;
		})( this );

		this.__mmove = this.resize_move.bind( this );
		this.__mup = this.resize_up.bind( this );
		
		this.bind_evt( 'add', evt );
	},

	resize_move : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		elem = this.__elem,
		$elem = $L( elem ),
		type = $elem.data( 'data' ).type,
		direction = this.__direction,
		position = this.__position,
		ref_pos = this.__refpos,
		new_pos = this.convert_to_view( this.__bcr, ev.clientX, ev.clientY ),
		x_inc = new_pos.x - position.x,
		y_inc = new_pos.y - position.y,
		width_fact = direction.width,
		height_fact = direction.height,
		modified_pos = /line|tagging/.test( type ) ? new_pos : {
			x : width_fact ? ( position.x + x_inc * width_fact ) : ( ref_pos.x + ref_pos.width ),
			y : height_fact ? ( position.y + y_inc * height_fact ) : ( ref_pos.y + ref_pos.height )
		},
		obj__map = {
			text : "rect",
			arrow : "line",
			doublearrow : "line"
		};

		this[ 'draw_' + ( obj__map[ type ] || type ) ]( modified_pos, true );

		this.__position = new_pos;

		this.update_wrapper( $elem );

		evt.preventDefault();
	},

	resize_up : function( evt ){

		this.bind_evt( 'remove', evt );

		var flush = this.__flush || [],
		wormhole = this.__wormhole,
		elem = this.__elem,
		cb = "onResize";

		if( !this.__moved && $L( elem ).data( 'data' ).type == 'tagging' ){
			this.resize_move( evt );
			flush = this.__flush;
		}

		[ '__position', '__refpos', '__mup', '__mmove', '__bcr', '__elem', '__direction', '__flush', '__moved' ].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );

		wormhole.classList.remove( "lyteAnnotatorResizeSelected" );

		this.data.ltPropUndo && this.flush( flush );

		this.getMethods( cb ) && this.executeMethod( cb, elem, wormhole, this.$node );
	},

	flush : function( flush ){

		var is_undo = this.data.ltPropUndo;

		flush.forEach( function( item ){
			var prop = item.prop,
			attr = item.data.attr,
			oldValue = item.oldValue,
			newValue = attr[ prop ];

			if( oldValue == newValue ){
				return;
			}

			is_undo && this.pushToQueue({
				type : "update",
				oldValue : oldValue,
				prop : prop,
				newValue : newValue,
				id : attr.id
			});
		}.bind( this ) );
	},

	/* resize code ends */

	/* Draw code */
	bind_draw : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		draw_element = ev.target,
		bcr = this.bcr( draw_element ),
		client_x = ev.clientX,
		client_y = ev.clientY,
		data = this.data,
		type = data.ltPropDrawType,
		position = this.convert_to_view( bcr, client_x, client_y );

		this.__elem = this[ 'create_' + type ]( position.x, position.y );

		this.__refpos = this.__position =  position;
		this.__bcr = bcr;
		this.__mmove = this.draw_move.bind( this );
		this.__mup = this.draw_up.bind( this );
		
		this.bind_evt( 'add', evt );
	},

	draw_move : function( evt ){
		var position,
		data = this.data,
		type = data.ltPropDrawType,
		obj = {
			arrow : "line",
			doublearrow : "line"
		},
		ev = ( evt.touches || [ evt ] )[ 0 ];

		if( !type || /text|tagging/i.test( type ) ){
			return;
		}

		this[ 'draw_' + ( obj[ type ] || type ) ]( position = this.convert_to_view( this.__bcr, ev.clientX, ev.clientY ) );

		this.__position = position;
	},

	draw_up : function( evt ){

		this.bind_evt( 'remove', evt );

		var elem = this.__elem,
		obj = {
			text : "rect",
			arrow : "line",
			doublearrow : "line"
		},
		__data = this.data,
		__type = __data.ltPropDrawType,
		type = obj[ __type ] || __type,
		is_resize_element = /^(rect|ellipse|line)$/i.test( type ),
		$elem = $L( elem ),
		is_blur = /blur|smudge/i.test( __type ),
		cb = "onCreate",
		wormhole = this.__wormhole;

		if( is_resize_element ){
			var is_text = /^(text)$/.test( type );

			if( !this.__moved || is_text ){
				var ref_pos = this.__refpos,
				new_pos = { x : ref_pos.x + 150, y : ref_pos.y + ( /line/i.test( type ) ? 0 : 50 ) };
				this[ 'draw_' + type ]( new_pos );
				
				if( is_text ){
					this.setData( 'drawType', '' );
					this.select_first();
				}
			}

			this.update_wrapper( $elem );
		}

		!is_blur && this.select_shape( evt, elem );

		[ '__position', '__refpos', '__mup', '__mmove', '__bcr', '__elem', '__moved'].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );

		if( __type == "text" ){
			$L.fastdom.measure( function(){
				$L( elem ).find( 'textarea,input' ).focus();
			});
		}

		wormhole.classList.remove( "lyteAnnotatorDrawSelected" );

		if( __data.ltPropUndo ){
			var __obj,
			canvas_data = this.__canvas_data,
			fn = function(){
				return elem.getContext( '2d' ).getImageData( 0, 0, elem.width, elem.height );
			};

			if( canvas_data ){
				__obj = {
					type : 'smudge_update',
					delay : true,
					oldValue : canvas_data,
					newValue : fn()
				}
				delete this.__canvas_data;
			} else {
				__obj = {
					type : "create",
					data : this.extend( $elem.data( 'data' ) )
				};

				if( is_blur ){
					__obj.delay = true;
					if( ( __obj.sub_type = __type ) == "smudge" ){
						__obj.canvas_data = fn();
					}
				}
			}

			this.pushToQueue( __obj );
		}

		this.getMethods( cb ) && this.executeMethod( cb, elem, wormhole, this.$node );
	},

	extend : function( data ){
		return $L.extend( true, {}, data );
	},

	draw_polyline : function( position ){
		var $elem = $L( this.__elem.children ),
		ref_pos = this.__refpos,
		new_x = position.x - ref_pos.x,
		new_y = position.y - ref_pos.y,
		data = $elem.eq( 0 ).data( 'data' ),
		attr = data.attr,
		old_pts = attr.points,
		split = old_pts.split( ' ' ),
		current = new_x + "," + new_y,
		new_pts,
		len = $elem.length;

		if( current == $L( split ).get( -1 ) ){
			return;
		}

		new_pts = old_pts + " " + current;

		for( var i = 0; i < len; i++ ){
			this.update_attr( $elem.eq( i ), 'points', new_pts );
		}
	},

	draw_line : function( position, frm_resize ){
		var ref_pos = this.__refpos,
		x1 = ref_pos.x,
		y1 = ref_pos.y,
		x2 = position.x,
		y2 = position.y,
		min_x = Math.min( x1, x2 ),
		min_y = Math.min( y1, y2 ),
		width = Math.abs( x1 - x2 ),
		height = Math.abs( y1 - y2 ),
		transform = "translate(" + min_x + "," + min_y + ")",
		elem = this.__elem,
		$elem = $L( elem.children ),
		len = $elem.length,
		path = "M" + ( x1 - min_x ) + "," + ( y1 - min_y )  + " L" + ( x2 - min_x ) + "," + ( y2 - min_y );

		if( frm_resize && ref_pos.is_neg ){
			path = "M" + ( x2 - min_x ) + "," + ( y2 - min_y )  + " L" + ( x1 - min_x ) + "," + ( y1 - min_y );
		}

		for( var i = 0; i < len; i++ ){
			var __cur = $elem.eq( i );
			
			if( __cur.hasClass( 'lyteAnnotatorResizeHandler' ) || __cur.prop( 'tagName' ) == 'defs' ){
				continue;
			}

			if( __cur.hasClass( 'lyteAnnotatorResizeWrapper' ) ){
				this.update_attr( __cur, 'width', width, frm_resize );
				this.update_attr( __cur, 'height', height, frm_resize );
			} else {
				this.update_attr( __cur, 'd', path, frm_resize );
			}
		}

		this.update_attr( $L( elem ), 'transform', transform, frm_resize );

		this.__moved = true;
	},

	draw_tagging : function( position, frm_resize ){
		var elem = this.__elem,
		__data = $L( elem ).data( 'data' ),
		transform = this.get_transfrom( __data.attr.transform ),
		__x = transform.x,
		__y = transform.y,
		position_arr = [],
		active_circle,
		active_circle_data,
		children = elem.children,
		data_children = __data.children;

		data_children.forEach( function( item, index ){
			var __attr = item.attr,
			__class = __attr.class;

			if( /lyteTaggingPositionCircles/i.test( __class ) ){
				position_arr.push({
					x : __x + __attr.cx,
					y : __y + __attr.cy,
					elem : children[ index ],
					data : item
				});
			} else if( /lyteTaggingActive/i.test( __class ) ){
				active_circle = children[ index ];
				active_circle_data = item;	
			}
		});

		var nearest = this.find_nearest( position_arr, position ),
		near_attr = nearest.data.attr,
		purpose = nearest.data.attr.purpose,
		current_active = active_circle_data.attr.active,
		$active = $L( active_circle ),
		outer_circle = data_children[ 0 ],
		circle_attr = outer_circle.attr,
		outer_path = data_children[ 1 ],
		angle = purpose * Math.PI / 180,
		radius = circle_attr.r,
		new_transform = 'translate(' + ( circle_attr.cx + radius * Math.cos( angle ) ) + "," + ( circle_attr.cy + radius * Math.sin( angle ) ) + ") rotate(" + purpose + ")";

		this.update_attr( $active, 'active', purpose, frm_resize );
		this.update_attr( $active, 'cx', near_attr.cx, frm_resize );		
		this.update_attr( $active, 'cy', near_attr.cy, frm_resize );	
		this.update_attr( $L( children[ 1 ] ), 'transform', new_transform, frm_resize );

		this.__moved = true;

	},

	find_nearest : function( arr, pos ){
		var __x = pos.x,
		__y = pos.y,
		near,
		dist = Infinity;

		arr.forEach( function( item, index ){
			var inn_x = item.x,
			inn_y = item.y,
			distance = Math.sqrt( Math.pow( inn_x - __x, 2 ) + Math.pow( inn_y - __y, 2 ) );

			if( distance < dist ){
				dist = distance;
				near = item;
			}
		}); 

		return near;
	},

	convert_canvas : function( x, y, width, height, canvas ){
		var viewBox = this.__svg.viewBox.baseVal,
		__x  = viewBox.x,
		__y = viewBox.y,
		__width = viewBox.width,
		__height = viewBox.height,
		canvas_width = canvas.width,
		canvas_height = canvas.height;

		return {
			x : ( x - __x ) * canvas_width / __width,
			y : ( y - __y ) * canvas_height / __height, 
			width : width * canvas_width / __width,
			height : height * canvas_height / __height
		};
	},

	draw_smudge : function( position ){
		var canvas = this.__canvas,
		ctx = this.__ctx,
		x = position.x,
		y = position.y,
		fake_canvas = this.__elem,
		$fake = $L( fake_canvas ),
		fake_ctx = fake_canvas.getContext( '2d' ),
		stroke = this.data.ltPropShapeProperties[ 'stroke-width' ] || 24,
		ret = this.convert_canvas( x - stroke / 2, y - stroke / 2, stroke, stroke, canvas ),
		ret_x = ret.x,
		ret_y = ret.y,
		ret_width = ret.width,
		ret_height = ret.height;

		fake_ctx.drawImage( canvas, ret_x, ret_y, ret_width, ret_height, ret_x, ret_y, ret_width, ret_height );
	},

	draw_blur : function( position ){

		var canvas = this.__canvas,
		ctx = this.__ctx,
		ref_pos = this.__refpos,
		ref_x = ref_pos.x,
		ref_y = ref_pos.y,
		pos_x = position.x,
		pos_y = position.y,
		x = Math.min( ref_x, pos_x ),
		y = Math.min( ref_y, pos_y ),
		width = Math.abs( ref_x - pos_x ),
		height = Math.abs( ref_y - pos_y ),
		fake_canvas = this.__elem,
		$fake = $L( fake_canvas ),
		fake_ctx = fake_canvas.getContext( '2d' ),
		ret = this.convert_canvas( x, y, width, height, canvas ),
		ret_x = ret.x,
		ret_y = ret.y,
		ret_width = ret.width,
		ret_height = ret.height;

		fake_ctx.clearRect( parseFloat( $fake.attr( 'prev_x' ) ), parseFloat( $fake.attr( 'prev_y' ) ), parseFloat( $fake.attr( 'prev_width' ) ), parseFloat( $fake.attr( 'prev_height' ) ) );

		this.update_attr( $fake, 'prev_x', ret_x );
		this.update_attr( $fake, 'prev_y', ret_y );
		this.update_attr( $fake, 'prev_width', ret_width );
		this.update_attr( $fake, 'prev_height', ret_height );

		fake_ctx.drawImage( canvas, ret_x, ret_y, ret_width, ret_height, ret_x, ret_y, ret_width, ret_height );
	},

	draw_rect : function( position, frm_resize ){

		var elem = this.__elem,
		$elem = $L( elem.children ),
		ref_pos = this.__refpos,
		// width = Math.abs( position.x - ref_pos.x ),
		// height = Math.abs( position.y - ref_pos.y ),
		data = $elem.eq( 0 ).data( 'data' ),
		attr = data.attr,
		inf = Infinity,
		min_width = attr.minWidth || -inf,
		min_height = attr.minHeight ||-inf,
		max_width = attr.maxWidth || inf,
		max_height = attr.maxHeight || inf,
		len = $elem.length,
		transform,
		is_foreign = data.tag == "foreignObject",
		fn = function( cur, min, max, ref, pos, ns ){
			var __start = pos[ ns ],
			__ref = ref[ ns ],
			__wid = __start - __ref,
			abs = Math.abs( __wid ),
			diff = 0;

			if( is_foreign && ns == "x" ){
				if( ref_pos.width_neg ){
					if( __wid > 0 ){
						abs = __wid * -1;
					}
				} else {
					if( __wid < 0 ){
						abs = __wid;
					}
				}
			}

			if( abs < min ){
				diff = min - abs;
			} else if( max < abs ){
				diff = max - abs;
			}

			if( diff && !isNaN( diff ) ){
				pos[ ns ] += diff * ( abs ? ( __wid / abs ) : 0 );
				return abs + diff;
			} 
			return abs;
		},
		width = fn( width, min_width, max_width, ref_pos, position, 'x' ),
		foreign_resize = is_foreign && frm_resize,
		height = foreign_resize ? void 0 : fn( height, min_height, max_height, ref_pos, position, 'y' ),
		is_moved = !this.__moved,
		__fn = function( __cur ){
			this.update_attr( __cur, 'height', height, frm_resize, is_moved );
		},
		textarea;

		if( foreign_resize ){
			textarea = elem.getElementsByTagName( 'textarea' )[ 0 ];
			textarea.style.height = "";
			$L.fastdom.measure( function(){
				height = textarea.scrollHeight;
			});
		}

		transform = "translate(" + Math.min( ref_pos.x, position.x ) + "," + Math.min( ref_pos.y, position.y ) + ")";

		for( var i = 0; i < len; i++ ){
			var __cur = $elem.eq( i );
			
			if( __cur.hasClass( 'lyteAnnotatorResizeHandler' ) ){
				continue;
			}

			this.update_attr( __cur, 'width', width, frm_resize );
			if( foreign_resize ){
				$L.fastdom.mutate( __fn.bind( this, __cur ) );
			} else {
				this.update_attr( __cur, 'height', height, frm_resize );
			}
		}

		if( textarea ){
			$L.fastdom.mutate( __fn.bind( this, $L( textarea ) ) );
		}

		this.update_attr( $L( elem ), 'transform', transform, frm_resize );

		this.__moved = true;
	},

	draw_ellipse : function( position, frm_resize ){

		var elem = this.__elem,
		$elem = $L( elem.children ),
		ref_pos = this.__refpos,
		width = Math.abs( position.x - ref_pos.x ),
		height = Math.abs( position.y - ref_pos.y ),
		data = $elem.eq( 0 ).data( 'data' ),
		attr = data.attr,
		len = $elem.length,
		transform = "translate(" + Math.min( ref_pos.x, position.x ) + "," + Math.min( ref_pos.y, position.y ) + ")";

		for( var i = 0; i < len; i++ ){
			var __cur = $elem.eq( i );

			if( __cur.hasClass( 'lyteAnnotatorResizeHandler' ) ){
				continue;
			}

			if( __cur.hasClass( 'lyteAnnotatorResizeWrapper' ) ){
				this.update_attr( __cur, 'width', width, frm_resize );
				this.update_attr( __cur, 'height', height, frm_resize );
			} else {
				this.update_attr( __cur, 'cx', width / 2, frm_resize );
				this.update_attr( __cur, 'cy', height / 2, frm_resize );
				this.update_attr( __cur, 'rx', width / 2, frm_resize );
				this.update_attr( __cur, 'ry', height / 2, frm_resize );
			}
		}

		this.update_attr( $L( elem ), 'transform', transform, frm_resize );

		this.__moved = true;
	},

	/* Draw code ends */

	is_neg : function( __data ){
		var d = __data.children[ 0 ].attr.d.replace( /M|L/g, "" ).match( ( /(\d|\.)+/g ) ),
		y1 = parseFloat( d[ 1 ] ),
		y2 = parseFloat( d[ 3 ] ),
		x1 = parseFloat( d[ 0 ] ),
		x2 = parseFloat( d[ 2 ] );

		return {
			y : y2 - y1 < 0,
			x : x2 - x1 < 0
		}
	},

	/* Resize starts */

	update_wrapper : function( $elem ){
		var $wrapper = $L( $elem.data( 'wrapper_rect' ) );

		if( $wrapper.length == 0 ){
			return;
		}

		var attr = $wrapper.data( 'data' ).attr,
		width = attr.width,
		height = attr.height,
		__data = $elem.data( 'data' ),
		is_line = /^(line|arrow|doublearrow)$/i.test( __data.type ),
		is_neg_x,
		is_neg_y;

		if( is_line ){
			var ret = this.is_neg( __data );

			is_neg_y = ret.y;
			is_neg_x = ret.x;
		}
		
		( $elem.data( 'data' ).resize || [] ).forEach( function( item ){
			var $elem = $L( $wrapper.data( item ) ),
			resize_data = $elem.data( 'data' ),
			__attr = resize_data.attr,
			__width = __attr.width,
			__height = __attr.height,
			x_to,
			y_to,
			half_height = __height / 2,
			half_width = __width / 2,
			is_rect = resize_data.tag == "rect";

			switch( item ){
				case 'N' : {
					x_to = ( width - __width ) / 2;
					y_to = -__height;
				}
				break;
				case 'S' : {
					x_to = ( width - __width ) / 2;
					y_to = height;
				}
				break;
				case 'W' : {
					if( is_line ){
						if( is_rect ){
							y_to = ( is_neg_y ? height : 0 ) - half_height;
							x_to = ( is_neg_x ? width : 0 ) - half_width;
						}
					} else {
						x_to = -__width;
						y_to = ( height - __height ) / 2;
					}
				}
				break;
				case 'E' : {
					if( is_line ){
						if( is_rect ){
							y_to = ( is_neg_y ? 0 : height ) - half_height;
							x_to = ( is_neg_x ? 0 : width ) - half_width;
						}
					} else {
						x_to = width;
						y_to = ( height - __height ) / 2;
					}
				}
				break;
				case 'NE' : {
					x_to = width;
					y_to = -__height;
				}
				break;
				case 'NW' : {
					x_to = -__width;
					y_to = -__height;
				}
				break;
				case 'SE' : {
					x_to = width;
					y_to = height;
				}
				break;
				case 'SW' : {
					x_to = -__width;
					y_to = height;
				}
				break;
			}

			this.update_attr( $elem, 'x', x_to );
			this.update_attr( $elem, 'y', y_to );

		}.bind( this ))
	},

	bind_resize : function( obj, elem, directions ){
		var wrapper_rect = /*this.create_element({ 
			tag : 'rect',  
			attr : {
				class : "lyteAnnotatorResizeWrapper"
			}
		})*/ elem.getElementsByClassName( 'lyteAnnotatorResizeWrapper' ),
		$elem = $L( elem ),
		$wrapper = $L( wrapper_rect ),
		resizeHandlers = this.data.ltPropResizeHandlers;

		// elem.appendChild( wrapper_rect );
		$elem.data( "wrapper_rect", wrapper_rect );

		directions.forEach( function( item ){
			var dim = resizeHandlers[ item ],
			__elem = this.create_element({
				tag : "rect",
				attr : {
					class : "lyteAnnotatorResizeHandler lyteAnnotatorResize" + item,
					purpose : item,
					width : dim.width,
					height : dim.height
				}
			});
			elem.appendChild( __elem );
			$wrapper.data( item, __elem );
		}.bind( this ));
	},

	/* Resize ends */

	attr : function( $node, obj ){
		var elem = $node.get( 0 );

		for( var key in obj ){
			elem.setAttribute( key, obj[ key ] );
		}
	},

	update_attr : function( $elem, name, value, frm_resize, force_push ){
		var obj = {};
		obj[ name ] = value;

		this.attr( $elem, obj );

		var data = $elem.data( 'data' ),
		attr = data.attr,
		is_moved = this.__moved;

		if( this.data.ltPropUndo && frm_resize && ( !is_moved || force_push ) ){
			var arr = this.__flush || ( this.__flush = [] );
			arr.push({
				data : data,
				oldValue : attr[ name ],
				prop : name
			});
		}

		attr[ name ] = value;
	},

	get_transfrom : function( str ){
		var match = str.match( /translate\((.+?),(.+?)\)/ ),
		x = parseFloat( match[ 1 ] ),
		y = parseFloat( match[ 2 ] );

		return {
			x : x,
			y : y
		};
	},

	update_position : function( $elem, xInc, yInc, update_queue ){
		if( xInc || yInc ){
			var ret = this.get_transfrom( $elem.data( 'data' ).attr.transform ),
			x = ret.x + xInc,
			y = ret.y + yInc;

			this.update_attr( $elem, 'transform', 'translate(' + x + ',' + y + ')', update_queue );
		}
	},

	bind_evt : function( add, evt ){
		var doc = document,
		ns = add + "EventListener",
		is_tch = /touch/i.test( evt.type );

		doc[ ns ]( is_tch ? 'touchmove' : 'mousemove', this.__mmove, true );
		doc[ ns ]( is_tch ? 'touchend' : 'mouseup', this.__mup, true );
	},

	bcr : function( elem ){
		return elem.getBoundingClientRect();
	},

	/* Select code */

	unselectAll : function( evt, selected ){
		Array.from( selected ).forEach( function( item ){
			this.unselect( evt, selected, item );
		}.bind( this ) );
	},

	select_shape : function( evt, elem ){
		var selected = this.get_selected(),
		is_selected = selected.indexOf( elem ) + 1;

		if( evt.shiftKey ){
			if( is_selected ){
				this.unselect( evt, selected, elem );
			} else {
				this.select( evt, selected, elem );
			}
		} else {
			this.unselectAll( evt, selected );

			if( !is_selected ){
				this.select( evt, selected, elem );
			}
		}
	},

	unselect : function( evt, arr, elem, cb2, cb3 ){
		var cb = cb2 || "onBeforeUnselect",
		cb1 = cb3 || "onUnselect",
		add = "remove";

		if( evt && ( /canvas/i.test( elem.tagName ) || this.getMethods( cb ) && this.executeMethod( cb, evt, elem ) == false ) ){
			return;
		}

		if( cb2 ){
			arr.push( elem );
			add = "add";
		} else {
			var index = arr.indexOf( elem );
			arr.splice( index, 1 );
		}

		elem.classList[ add ]( 'lyteAnnotatorElementSelected' );

		evt && this.getMethods( cb1 ) && this.executeMethod( cb1, evt, elem );

		evt && this.data.ltPropEditorPanel && this.check_editorpanel( arr );
	},	

	select : function( evt, arr, elem ){
		this.unselect( evt, arr, elem, 'onBeforeSelect', 'onSelect' );
	},

	/* Select code ends*/

	/* Drag ends*/
	bind_drag : function( evt, elem ){
		var bcr = this.bcr( elem.parentNode ),
		ev = ( evt.touches || [ evt ] )[ 0 ],
		client_x = ev.clientX,
		client_y = ev.clientY,
		data = this.data;

		this.__position = this.convert_to_view( bcr, client_x, client_y );

		this.__bcr = bcr;

		this.__mmove = this.drag_move.bind( this );
		this.__mup = this.drag_up.bind( this );

		this.__buffer = {
			x_inc : false,
			x : 0,
			y : 0,
			y_inc : false
		};

		this.__initial_pos = $L( this.__elem = elem ).data( 'data' ).attr.transform;
		
		this.bind_evt( 'add', evt );
	},

	drag_move : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		position = this.__position,
		new_position = this.convert_to_view( this.__bcr, ev.clientX, ev.clientY ),
		selected = this.get_selected(),
		elem = this.__elem,
		$elem = $L( elem ),
		x_inc = new_position.x - position.x,
		y_inc = new_position.y - position.y;

		if( selected.length > 1 ){
			selected.forEach( function( item ){
				this.update_position( $L( item ), x_inc, y_inc, true );
			}.bind( this ) );
		} else {

			if( this.data.ltPropSmartGuide ){
				var is_x_inc = x_inc > 0,
				is_y_inc = y_inc > 0,
				__buffer = this.__buffer,
				is_same_x = is_x_inc == __buffer.x_inc,
				is_same_y = is_y_inc == __buffer.y_inc,
				__x = is_same_x ? __buffer.x : 0,
				__y = is_same_y ? __buffer.y : 0,
				ret,
				support = this.data.ltPropSmartGuideSupport || [];

				if( support.indexOf( $elem.data( 'data' ).name ) == -1 ){
					ret = {
						xInc : xInc,
						yInc : yInc
					};
				} else {
					/* include lyte-smartguide-utils.js mixin file */
					ret = this.smart_guide( elem, x_inc + __x, y_inc + __y, this.get_position( elem ), this.data.ltPropSmartBuffer || 10, this.__scale_x || 1, this.__scale_y || 1 );
				}

				if( ret ){
					var new_x = ret.xInc,
					new_y = ret.yInc,
					hori = ret.hori,
					vert = ret.vert,
					__class = 'lyteAnnotatorHidden';

					if( is_same_x ){
						__buffer.x = x_inc + __x - new_x;
					} else {
						__buffer.x_inc = is_x_inc;
						__buffer.x = 0;
					}

					if( is_same_y ){
						__buffer.y = y_inc + __y - new_y;
					} else {
						__buffer.y_inc = is_y_inc;
						__buffer.y = 0;
					}

					x_inc = new_x;
					y_inc = new_y;

					new_x && hori && this.__horismart[ hori.fn ]( __class ).css( hori.style );
					new_y && vert && this.__vertsmart[ vert.fn ]( __class ).css( vert.style );
				}
			}

			this.update_position( $elem, x_inc, y_inc, true );
		}

		this.__position = new_position;
		this.__moved = true;
	},

	drag_up : function( evt ){
		var flush = this.__flush || [],
		elem = this.__elem,
		wormhole = this.__wormhole,
		cb = "onDrag",
		selected = this.get_selected(),
		__data = this.data;

		this.bind_evt( 'remove', evt );

		if( !evt.shiftKey ){
			this.unselectAll( evt, selected );
			this.select_shape( evt, elem );
		}
		
		[ '__scale_x', '__scale_y', '__buffer', '__position', '__smart_data', '__initial_pos', '__mup', '__mmove', '__bcr', '__elem', '__flush', '__moved' ].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );

		wormhole.classList.remove( "lyteAnnotatorDragSelected" );

		__data.ltPropUndo && this.flush( flush );

		if( __data.ltPropSmartGuide ){
			var hidden_cls = 'lyteAnnotatorHidden';

			$L( this.__horismart ).addClass( hidden_cls );
			$L( this.__vertsmart ).addClass( hidden_cls );
		}

		this.getMethods( cb ) && this.executeMethod( cb, elem, wormhole, this.$node );
	},	

	/*Drag code ends*/


	/* Crop code */

	bind_crop_drag : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		elem = this.__elem = ev.target,
		bcr = this.bcr( elem.parentNode ),
		elem_bcr = this.bcr( elem );

		$L( elem ).css({
			width : elem_bcr.width,
			height : elem_bcr.height
		});

		this.__max_left = bcr.width - elem_bcr.width;
		this.__max_top = bcr.height - elem_bcr.height;

		this.__mmove = this.crop_move.bind( this );
		this.__mup = this.crop_up.bind( this );

		this.__client_x = ev.clientX;
		this.__client_y = ev.clientY;

		this.bind_evt( 'add', evt );
	},

	crop_move : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		elem = this.__elem,
		x_inc = this.__client_x - ( this.__client_x = ev.clientX ),
		y_inc = this.__client_y - ( this.__client_y = ev.clientY ),
		__left = parseFloat( elem.style.left || 0 ),
		__top = parseFloat( elem.style.top || 0 );

		$L( elem ).css({
			left : Math.min( this.__max_left, Math.max( 0, __left - x_inc ) ),
			top : Math.min( this.__max_top, Math.max( 0, __top - y_inc ) )
		});

		this.onMove( { parentNode : elem } );
	},

	crop_up : function( evt ){
		this.bind_evt( 'remove', evt );

		[ '__elem', '__max_top', '__max_left', '__mmove', '__mup', '__client_x', '__client_y' ].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );
	},

	bind_crop : function(){

		var __this = this,
		bcr,
		elem;

		__this.setData( 'renderCrop', true );

		elem = $L( 'lyte-crop-content', __this.__wormhole ).enableResize({
			minWidth : 50,
			minHeight : 50,
			onBeforeSelect : function( elem ){
				bcr = __this.bcr( elem.parentNode.parentNode );
			},
			onSelect : function( handler, elem ){
				var dir = $L( handler ).data( 'directions' ),
				__left = parseFloat( elem.style.left || elem.offsetLeft ),
				__top = parseFloat( elem.style.top || elem.offsetTop ),
				__width = parseFloat( elem.style.width || elem.offsetWidth ),
				__height = parseFloat( elem.style.height || elem.offsetHeight ),
				__data = elem._resizeData, // resize plugin internal variable
				max_width = 0,
				max_height = 0;

				if( dir.left ){
					max_width = __left + __width;
				} else if( dir.width ){
					max_width = bcr.width - __left;
				}

				if( dir.top ){
					max_height = __top + __height;
				} else if( dir.height ){
					max_height = bcr.height - __top;
				}

				__data.maxWidth = max_width;
				__data.maxHeight = max_height;
			},
			onMove : this.onMove
		}).get( 0 );

		this.setup_crop( elem );
	},

	setup_crop : function( elem ){
		var __width = this.__owdt,
		__height = this.__ohgt,
		content = elem.parentNode.parentNode,
		rend_width = parseFloat( content.getAttribute( 'width' ) ),
		rend_height = parseFloat( content.getAttribute( 'height' ) ),
		__x = this.__xtrans || 0,
		__y = this.__ytrans || 0,
		__inner_w = innerWidth,
		__inner_h = innerHeight,
		max_width = Math.max( 50, Math.min( rend_width - 20, __inner_w * 2 / 3 ) ),
		max_height = Math.max( 50, Math.min( rend_height - 20, __inner_h * 2 / 3 ) ),
		__obj = {
			width : max_width + 'px',
			height : max_height + 'px'
		};

		__obj.top = ( ( rend_height - max_height ) / 2 - __y ) + 'px';
		__obj.left = ( ( rend_width - max_width ) / 2 - __x ) + 'px';

		$L( elem ).css( __obj );

		this.onMove( { parentNode : elem } );
	},

	onMove : function( elem, __content, __evt ){
		// updating other four freeze elements
		var content = elem.parentNode,
		nodes = content.parentNode.children,
		__left = nodes[ 0 ],
		__top = nodes[ 1 ],
		__bottom = nodes[ 2 ],
		__right = nodes[ 3 ],
		__style = content.style,
		parsed_left = parseFloat( __style.left || content.offsetLeft ),
		parsed_top = parseFloat( __style.top || content.offsetTop );

		__left.style.width = parsed_left + 'px';

		__top.style.height = parsed_top + 'px';
		__bottom.style.left = __top.style.left = parsed_left + 'px';
		__bottom.style.height = 'calc( 100% - ' + ( parsed_top + parseFloat( __style.height ) ) + 'px)';
		__bottom.style.width = __top.style.width = __style.width;
		__right.style.width = 'calc( 100% - ' + ( parsed_left + parseFloat( __style.width ) ) + 'px)';
	},

	remove_crop : function(){
		$L( 'lyte-crop-content', this.__wormhole ).enableResize( 'destroy' );
		this.setData( 'renderCrop', false );
	},

	/* Crop code ends */

	/*Undo redo*/

	pushToQueue : function( arg ){
		var data = this.data,
		undoQueue = data.undoQueue,
		redoQueue = data.redoQueue,
		__undoQueue = data.__undoQueue,
		time = data.ltPropQueueUpdateTime,
		limit = data.ltPropUndoLimit,
		fn = function(){
			undoQueue.push( __undoQueue.splice( 0 ) );
			redoQueue.splice( 0 );

			var length = undoQueue.length;

			if( length > limit ){
				undoQueue.splice( 0, length - limit );
			}

			this.call_queue_update();
		}.bind( this );

		__undoQueue.push( arg );

		clearTimeout( this.__undotime );

		if( time == void 0 ){
			fn();
		} else {
			this.__undotime = setTimeout( fn, time );
		}
	},

	/*Undo redo*/

	side_click : function( inner, outer, ignore_close ){

		var __data = this.data,
		selected = __data.selectedItem,
		Lo = Lyte.objectUtils,
		fn = function( item, ignore ){
			if( !selected ){
				return;
			}

			var is_not_same = item != selected

			if( is_not_same ){
				Lo( selected, 'add', 'active', false );
				Lo( selected, 'add', 'open', '' );
			} else if( ignore ){
				return;
			}

			( selected.children || [] ).forEach( function( __item ){
				Lo( __item, 'add', 'active', false );
			});
		},
		drawType = inner.drawType,
		name = inner.name;

		if( outer ){
			fn( outer );
			!ignore_close && Lo( outer, 'add', 'open', "" );
			Lo( inner, 'add', 'active', true );
		} else {
			var open_value,
			direction = "";

			if( inner.children ){
				open_value = 'lyteSidepanelOpen';
				
				if( inner.open ){
					open_value = '';
				}
			}

			if( open_value ){
				var side_panel = this.__sidepanel,
				bcr = this.bcr( side_panel ),
				ww = window.innerWidth;

				if( bcr.left > ( ww - bcr.right ) ){
					direction = ' lyteLeftSidepanel';
				}
			}

			fn( inner, true );

			if( open_value != void 0 ){
				Lo( inner, 'add', 'open', open_value );
				open_value && Lo( inner, 'add', 'direction', direction );
			}

			Lo( inner, 'add', 'active', true );
			__data.selectedItem = inner;
		}

		this.$node.ltProp({
			shapeProperties : inner.shapeProperties || {},
			fakeShapeProperties : inner.fakeShapeProperties || {},
			drawType : drawType,
			name : name
		});
	},

	delete_single : function( elem, evt ){
		var cb = "onBeforeDelete";

		if( this.getMethods( cb ) && this.executeMethod( cb, elem, evt ) == false ){
			return;
		}

		this.delete( elem );

		if( this.data.ltPropUndo ){
			var sub_type = elem.tagName.toLowerCase();
			this.pushToQueue({
				type : 'delete',
				sub_type : sub_type,
				delay : /canvas/i.test( sub_type ),
				data : $L( elem ).data( 'data' )
			});
		}

		this.getMethods( cb = "onDelete" ) && this.executeMethod( cb, elem, evt );

		return true;
	},

	delete : function( elem ){
		var selected = this.get_selected(),
		index = selected.indexOf( elem ),
		data = $L( elem ).data( 'data' ),
		__data = this.data;

		if( /taggingnumber/i.test( data.sub_type ) ){
			if( ( ( ( ( ( data.children || [] )[ 2 ] || {} ).children || [] )[ 0 ] || {} ).attr || {} ).value == __data.tagging - 1 ){
				__data.tagging--;
			}
		}

		if( index + 1 ){
			selected.splice( index, 1 );
		}

		if( this.__smudge == elem ){
			delete this.__smudge;
		}

		elem.remove();
	},

	delete_selected : function( evt ){
		var selected = this.get_selected(),
		len = selected.length;

		for( var i = len - 1; i >= 0; i-- ){
			var cur = selected[ i ];
			if( this.delete_single( cur, evt ) ){
				selected.splice( i, 1 );
			}
		}

		return len;
	},

	select_all : function( evt ){
		var elems = Array.from( this.__wormhole.getElementsByClassName( 'lyteAnnotatorElem' ) ),
		selected = this.get_selected();

		elems.forEach( function( item ){
			if( item.classList.contains( 'lyteAnnotatorElementSelected' ) ){
				return;
			}
			this.select( evt, selected, item );
		}.bind( this ) );

		return elems.length;
	},

	side_move : function( evt ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		x_inc = this.__client_x - ( this.__client_x = ev.clientX ),
		y_inc = this.__client_y - ( this.__client_y = ev.clientY ),
		elem = this.__elem,
		__left = parseFloat( elem.style.left ),
		__top = parseFloat( elem.style.top ),
		width = this.__width,
		height = this.__height,
		new_left = __left - x_inc,
		new_top = __top - y_inc,
		min_left = 0,
		max_left = innerWidth - width,
		min_top = 0,
		max_top = innerHeight - height;

		$L( elem ).css({
			left : Math.max( Math.min( new_left, max_left ), min_left ),
			top : Math.max( Math.min( new_top, max_top ), min_top )
		});

		evt.preventDefault();
	},

	side_up : function( evt ){
		this.bind_evt( 'remove', evt );

		[ '__elem', '__client_x', '__client_y', '__mmove', '__mup', '__width', '__height' ].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );

		$L( this.__wormhole ).removeClass( 'lyteAnnotatorToolSelect' );
	},

	undo : function( evt, undo, redo ){
		var data = this.data,
		undoQueue = data[ ( undo || 'undo' ) + 'Queue' ],
		len = undoQueue.length;

		if( len ){
			var __last = undoQueue.pop();
			data[  ( redo || 'redo' ) + 'Queue'  ].push( __last );
			this.handle_do( __last, !undo );

			this.call_queue_update( undo );
		}
		
		return len;
	},

	redo : function( evt ){
		return this.undo( evt, 'redo', 'undo' );
	},

	handle_do : function( opr, is_undo ){
		this._undomode = true;

		this.select_first();

		if( is_undo ){
			opr = Array.from( opr ).reverse();
		}

		var obj = {},
		delay = [];

		opr.forEach( function( item ){
			var type = this.getCorrectOp( item.type, is_undo );
			if( item.delay ){
				return delay.push( {
					item : item,
					type : type
				});
			}
			this[ 'do_' + type ]( item, is_undo, obj );
		}.bind( this ) );

		delay.forEach( function( item ){
			this[ 'do_' + item.type ]( item.item, is_undo, obj );
		}.bind( this ) );

		for( var key in obj ){
		   this.update_wrapper( obj[ key ] );
		}

		delete this._undomode;
	},

	getCorrectOp : function( __type, is_undo ){
		var common_op = {
			update : "update",
			viewBox : "viewbox",
			aspectRatio : "aspectratio",
			crop : "crop",
			crop_blur : 'crop_blur',
			smudge_update : 'smudge_update'
		},
		oprs = {
			undo : {
				create : "delete",
				delete : "create"
			},
			redo : {
				create : "create",
				delete : "delete"
			}
		};

		return common_op[ __type ] || oprs[ is_undo ? 'undo' : 'redo' ][ __type ];
	},

	do_crop_blur : function( item, is_undo ){
		var value = item[ is_undo ? 'oldValue' : 'newValue' ],
		elem = $L( '#' + item.id, this.__wormhole ).get( 0 );

		this.redraw_blur( elem, value );
	},

	do_crop : function( item, is_undo ){

		var value = item[ is_undo ? 'oldValue' : 'newValue' ],
		__width = value.width,
		__height = value.height;

		this.update_aspect( __width, __height );
		this.draw_canvas( this.__img, __width, __height, value.x, value.y, 0, 0 );

		this.resize();
	},

	do_smudge_update : function( item, is_undo ){
		var canvas = this.__smudge,
		value = item[ is_undo ? 'oldValue' : 'newValue' ];


		canvas.width = value.width;
		canvas.height = value.height;

		canvas.getContext( '2d' ).putImageData( value, 0, 0 );
	},

	do_create : function( item ){
		var data = item.data,
		canvas = this.__canvas,
		outlet = /canvas/i.test( data.tag ) ? canvas.parentNode : void 0,
		elem = $L( this.create( this.extend( data ), outlet ) );


		switch( item.sub_type ){
			case 'blur' : {
				var fake_ctx = elem[ 0 ].getContext( '2d' ),
				attr = item.data.attr,
				ret_x = attr.prev_x,
				ret_y = attr.prev_y,
				ret_width = attr.prev_width,
				ret_height = attr.prev_height;

				fake_ctx.drawImage( canvas, ret_x, ret_y, ret_width, ret_height, ret_x, ret_y, ret_width, ret_height );
			}
			break;
			case 'smudge' : {
				var fake_ctx = ( this.__smudge = elem[ 0 ] ).getContext( '2d' ),
				__width = canvas.width,
				__height = canvas.height;

				fake_ctx.clearRect( 0, 0, __width, __height );
				fake_ctx.putImageData( item.canvas_data, 0, 0 );
			}
			break;
		}
		
		data.resize && this.update_wrapper( elem );
	},

	do_delete : function( item, is_undo ){
		this.delete( $L( '#' + item.data.attr.id, this.__wormhole ).get( 0 ) );
	},

	do_update : function( item, is_undo, obj ){
		var id = item.id,
		$elem = $L( '#' + id, this.__wormhole ),
		value = item[ is_undo ? 'oldValue' : 'newValue' ],
		prop = item.prop;

		this.update_attr( $elem, prop, value );

		if( prop == "value" ){
			$elem.val( value );
		}

		if( prop == "height" && $elem.prop( 'tagName' ) == "textarea" ){
			$elem.css( 'height', value );
		}

		if( $elem.hasClass( 'lyteAnnotatorResizeWrapper' ) ){
			if( !obj.hasOwnProperty( id ) ){
				obj[ id ] = $elem.parent();
			}
		}
	},

	do_aspectratio : function( item, is_undo ){
		this.setData( 'aspectRatio', item[ is_undo ? 'oldValue' : 'newValue' ] );
		this.resize();
	},

	do_viewbox : function( item, is_undo ){
		this.setData( 'viewBox', item[ is_undo ? 'oldValue' : 'newValue' ] );
	},

	draw_obs : function( arg ){
		var ns = "lyteAnnotator",
		__new = arg.newValue,
		__old = arg.oldValue,
		wormhole = this.__wormhole,
		cb = "onDrawTypeChange";

		if( __new == "crop" ){
			this.bind_crop();
		} else if( __old == "crop" ){
			this.remove_crop();
		}

		if( !arg.newValue ){
			var fn = this.__mup;
			fn && fn( {} )
		}

		$L( wormhole ).addClass( __new ? ( ns + __new ) : "" ).removeClass( __old ? ( ns + __old ) : "" );

		this.getMethods( cb ) && this.executeMethod( cb, arg, wormhole, this.$node );

	}.observes( 'ltPropDrawType' ),


	applyFill : function( color, ns ){
		var selected = this.get_selected(),
		__true = true;

		ns = ns || 'fill';

		selected.forEach( function( item ){
			var $item = $L( item ),
			__elem = $item.find( '.lyteAnnotatorOriginalElem' ),
			opacity_to_be,
			data = $item.data( 'data' );
			
			if( data.name == "numbering" ){
				var __child = $item.children();
				this.update_attr( __child.eq( 0 ), ns, color, __true, __true );
				this.update_attr( __child.eq( 1 ), 'fill', color, __true, __true );
				this.update_attr( __child.eq( 1 ), ns, color, __true, __true );
			} else {
				this.update_attr( __elem, ns, color, __true, __true );
			}

			switch( ns ){
				case 'fill' : {
					if( color == "none" ){
						opacity_to_be = '0';
					} else if( __elem.attr( ns + '-opacity' ) == '0' ) {
						opacity_to_be = '1';
					}
					opacity_to_be != void 0 && this.update_attr( __elem, ns + '-opacity', opacity_to_be, __true, __true );
				}
				break;
				case 'stroke-width' : {
					if( __elem.attr( 'stroke-dasharray' ) != 'none' ){
						this.update_attr( __elem, 'stroke-dasharray', 'none', __true, __true );
					}
				}
				break;
				case 'stroke-dasharray' : {
					this.update_attr( __elem, 'stroke-width', parseFloat( color.split( ',' )[ 0 ] ) / 2, __true, __true );
				}
			}

			if( /fill|stroke/i.test( ns ) ){
				this.update_marker( $item, 'fill', color, __true, __true );
				this.update_marker( $item, 'stroke', color, __true, __true );
			}
		}.bind( this ) );

		this.flush( this.__flush || [] );

		delete this.__flush;

		this.__editorpanel( this.get_selected() );
	},

	update_grp : function( name, value ){
		var selected = this.get_selected();

		selected.forEach( function( item ){
			var $item = $L( item ),
			__data = $item.data( 'data' );

			var __child = $item.children();

			this.update_attr( __child.eq( 0 ), name, value );

			if( __data.name == "numbering" ){
				this.update_attr( __child.eq( 1 ), name, value );
			} else {				
				if( /opacity/i.test( name ) ){
					this.update_marker( $item.find( '.lyteAnnotatorOriginalElem' ), 'opacity', value );
				}
			}
		}.bind( this ) );
	},

	update_marker : function( $item, name, value, bool1, bool2 ){
		( $item.data( 'data' ).children || [] ).forEach( function( __item ){
			if( __item.type == "marker" ){
				__item.children.forEach( function( marker ){
					marker.children.forEach( function( __marker ){
						var marker_elem = $item.find( '#' + __marker.attr.id );
						this.update_attr( marker_elem, name, value, bool1, bool2 );
					}.bind( this ) );
				}.bind( this ) );
			}
		}.bind( this ) );
	},

	font_action : function( ns ){
		var arr = this.get_selected();

		arr.forEach( function( item ){
			this[ ns ]( { target : $L( item ).find( 'textarea' ).get( 0 ) } );
		}.bind( this ) );
	},

	get_current_zoom : function(){
		var __data = this.data,
		zoomLevel = parseFloat( __data.ltPopZoomLevel );

		if( isNaN( zoomLevel ) ){
			zoomLevel = parseFloat( __data.displayValue );
		}

		return zoomLevel;
	},

	zoom_limit : function(){
		var upper_limit = Infinity,
		lower_limit = -upper_limit,
		keys = this.get_zoom_keys(),
		zoomLevel = this.get_current_zoom();

		keys.forEach( function( item ){
			if( item == zoomLevel ){
				return;
			}
			if( upper_limit > item && item > zoomLevel ){
				upper_limit = item;
			} else if( lower_limit < item && item < zoomLevel ){
				lower_limit = item;
			}
		});

		return {
			lower_limit : lower_limit,
			upper_limit : upper_limit
		};
	},

	get_zoom_keys : function(){
		var keys = [];

		Object.keys( this.data.ltPropZoomOptions ).forEach( function( item ){
			if( /^[0-9]+$/.test( item ) ){
				keys.push( parseFloat( item ) );
			}
		});

		keys.sort( function( a, b ){
			return a - b;
		});

		return keys;
	},

	actions : {

		side_nav : function( evt ){
			var code = evt.which || evt.keyCode,
			__data = this.data,
			side_data = __data.ltPropSidePanelData,
			selected = __data.selectedItem,
			is_vert = __data.ltPropPanelDirection == 'vertical',
			__index = side_data.indexOf( selected ),
			main,
			sub,
			ignore_close = true;

			switch( code ){
				case 37 : {
					is_vert ? ( sub = -1 ) : ( main = -1 );
				}
				break;
				case 38 : {
					is_vert ? ( main = -1 ) : ( sub = -1 );
				}
				break;
				case 39 : {
					is_vert ? ( sub = 1 ) : ( main = 1 );
				}
				break;
				case 40 : {
					is_vert ? ( main = 1 ) : ( sub = 1 );
				}
				break;
				case 9 : {
					var is_shift = evt.shiftKey;
					if( is_vert ){
						sub = is_shift ? -1 : 1;
					} else {
						main = is_shift ? -1 : 1;
					}
				}
				break;
				case 13 : {
					ignore_close = false;
					sub = 1;
				}
				break;
			}

			if( main ){
				this.side_click( side_data[ Math.min( side_data.length - 1, Math.max( 0, __index + main ) ) ] );
			} else if( sub ){
				var __children = selected.children;

				if( !__children || !__children.length ){
					return;
				}

				var __active = __children.filter( function( item ){
					return item.active
				})[ 0 ],
				sub___index = __children.indexOf( __active );

				if( sub___index == -1 && sub == -1 ){
					this.side_click( selected );
				} else if( !ignore_close ){
					this.side_click( __children[ Math.max( sub___index, 0 ) ] || {}, selected );
				} else {
					__new_sub = __children[ Math.min( __children.length - 1, sub___index + sub ) ];
					this.side_click( __new_sub || {}, selected, ignore_close );
				}
			}

			( main || sub ) & evt.preventDefault();
		},

		prevZoom : function(){
			this.zoomout();
		},

		nextZoom : function(){
			this.zoomin();
		},

		fontSelect : function(){
			this.font_action( 'textarea_focus' );
		},

		fontChange : function( type, __new ){
			this.update_grp( 'font-size', __new );

			this.font_action( 'textarea_input' );
		},

		opacityChange : function( type, __new ){
 			this.update_grp( type + '-opacity', __new );
		},

		opacityUpdate : function( type, __old, __new ){

			var __data = this.data;

			if( !__data.ltPropUndo ){
				return;
			}

			var selected = this.get_selected(),
			is_font = type == "font",
			ns = is_font ? 'font-size' : type + '-opacity';

			selected.forEach( function( item ){
				var $item = $L( item ),
				__elem = $item.find( '.lyteAnnotatorOriginalElem' );


				if( is_font ){
					var fontsize = __elem.data( 'data' ).attr[ 'font-size' ],
					fastdom = $L.fastdom,
					__this = this;

					if( fontsize == parseFloat( __new ) ){
						fontsize = __old;
					}

					__old =  fontsize;

					if( typeof __old == 'number' ){
						__old += ( ( __data.ltPropEditorPanelData.font.suffix || 'px' ) );
					}

					fastdom.measure( function(){
						fastdom.mutate( function(){
							window.requestAnimationFrame( function(){
								__this.textarea_blur({ target : __elem.children().get( 0 ) });
							});
						});
					});
				}

				this.pushToQueue({
					type : "update",
					oldValue : __old,
					prop : ns,
					newValue : __new,
					id : __elem.attr( 'id' )
				});

				if( type == "stroke" ){
					Array.from( $item.find( 'marker>*' ) ).forEach( function( __item ){
						this.pushToQueue({
							type : "update",
							oldValue : __old,
							prop : 'opacity',
							newValue : __new,
							id : __item.id
						});
					}.bind( this ) );
				}

			}.bind( this ) );
		},

		toggleOutline: function( __this ){
			var fn;
			if( $L( __this ).hasClass( 'lyteAnnotatorOpacityDisabled' ) ){
				fn = 'active';
			} else {
				fn = '';
			}

			this.applyFill( fn, 'outline' );
			return false;
		},

		openPop : function( name ){
			this.setData( 'open' + name + 'Pop', true );
			return false;
		},

		move : function( evt ){
			var ev = ( evt.touches || [ evt ] )[ 0 ],
			elem = this.__elem = ev.target.parentNode,
			transform = elem.style.transform,
			obj = {
				transform : "none"
			},
			off_left = elem.offsetLeft,
			off_top = elem.offsetTop,
			off_width = this.__width = elem.offsetWidth,
			off_height = this.__height = elem.offsetHeight,
			trans_fact = transform == "none" ? 0 : 0.5;

			this.__client_x = ev.clientX;
			this.__client_y = ev.clientY;

			this.__mmove = this.side_move.bind( this );
			this.__mup = this.side_up.bind( this );		

			if( /lyte-annotator-editorpanel/i.test( elem.tagName ) ){
				obj.top = off_top;
				obj.left = off_left - off_width * trans_fact;
			} else {
				obj.left = off_left;
				obj.top = off_top - off_height * trans_fact;
			}

			$L( elem ).css( obj );

			this.select_first();
			this.bind_evt( 'add', evt );

			$L( this.__wormhole ).addClass( 'lyteAnnotatorToolSelect' );
		},

		keydown : function( evt, __this ){
			var target = evt.target;

			if( target == __this ){
				var to_prevent,
				key = evt.which || evt.keyCode,
				is_ctrl = evt.ctrlKey || evt.metaKey,
				is_shift = evt.shiftKey,
				fn_name;

				if( /^(8|46)$/.test( key ) ){
					fn_name = 'delete_selected';
				} else if( key == 90 ){
					if( is_ctrl ){
						fn_name = "undo";
						if( is_shift ){
							fn_name = "redo";
						}
					} 
				} else if( is_ctrl && !is_shift ){
					switch( key ){
						case 65 : {
							fn_name = 'select_all';
						}
						break;
						case 88 : {
							fn_name = 'cut';
						}
						break;
						case 86 : {
							fn_name = 'paste';
						}
						break;
						case 67 : {
							fn_name = 'copy';
						}
						break;
					}
				} else if( !is_ctrl && !is_shift ){
					var x_fact = 0,
					y_fact = 0;

					switch( key ){
						case 37 : {
							x_fact = -1;
						}
						break;
						case 38 : {
							y_fact = -1;
						}
						break;
						case 39 : {
							x_fact = 1;
						}
						break;
						case 40 : {
							y_fact = 1;
						}
						break;
					}

					if( x_fact || y_fact ){
						this.move_selected( x_fact * 50, y_fact * 50 );
					}
				}

				if( fn_name && this[ fn_name ]( evt ) ){
					evt.preventDefault();
				}
			}
		},

		side_click : function( inner, outer ){
			this.side_click( inner, outer );
			return false;
		},

		buttonclick : function( purpose ){
			this[ purpose ]();
		},

		mousedown : function( evt ){
			var ev = evt,
			touches = ev.touches || [];

			if( touches.length > 1 ){
				return;
			}

			var target = ev.target,
			tagName = target.tagName,
			data = this.data,
			is_shift = evt.shiftKey,
			__class,
			selected = this.get_selected(),
			selectedItem = data.selectedItem,
			$target = $L( target );

			if( /lyte-whiteboard-area/i.test( tagName ) && !is_shift ){
				var type = data.ltPropDrawType;
				if( type ){
					if( type == "crop" || this.call_draw( evt, type, 'onBeforeDraw' ) == false ){
						return;
					}

					this.bind_draw( evt );
					__class = "Draw";

					this.call_draw( evt, type, 'onDraw' );
				} else if( data.isImage && data.ltPropZoom && data.ltPropZoomLevel != "fit_to_screen" ) {
					this.bind_image_drag( evt );
					__class = "ImageDrag";
				}
			} else if( $target.hasClass( 'lyteAnnotatorResizeHandler' ) || $target.hasClass( 'lyteTaggingPositionCircles' ) ){
				var elem = target.parentNode;

				if( this.call_draw( evt, type, 'onBeforeResizeSelect' ) == false ){
					return;
				}
				this.bind_resize_evt( evt );
				__class = "Resize";
				this.call_draw( evt, type, 'onResizeSelect' );

			} else if( /lyte-crop-content/i.test( tagName) ){
				__class = "CropDrag";
				this.bind_crop_drag( evt );
			} else {
				var elem = target.closest( '.lyteAnnotatorElem' ),
				is_not_text = !/textarea|input/i.test( target.tagName );

				if( elem ){
					if( is_not_text ){
						if( this.call_draw( evt, elem, 'onBeforeDragSelect' ) == false ){
							return;
						}
						this.bind_drag( evt, elem );
						__class = "Drag";

						if( is_shift ){
							this.select_shape( evt, elem );
						} else {
							if( !$L( elem ).hasClass( 'lyteAnnotatorElementSelected' ) ){
								this.select_shape( evt, elem );
							}
						}

						this.call_draw( evt, elem, 'onDragSelect' );
					} else { 
						is_shift && evt.preventDefault();
						this.select_shape( evt, elem );
						return; 
					}
				} 
			}

			if( __class ){
				this.__wormhole.classList.add( 'lyteAnnotator' + __class + "Selected" );
			} 

			if( !__class || !/^(drag|resize)$/i.test( __class ) ) {
				this.unselectAll( evt, selected );
			}

			if( selectedItem ){
				selectedItem.open && Lyte.objectUtils( selectedItem, 'add', 'open', '' );
			}

			this.setData( 'renderMenu', true );
		}
	},

	methods : {

		applyColor : function( item ){
			this.applyFill( item.value, 'color' );
		},

		applyBorder : function( item ){
			this.applyFill( item.value, 'stroke-width' );
		},

		applyDashed : function( item ){
			this.applyFill( item.value, 'stroke-dasharray' );
		},

		applyFill : function( item ){
			this.applyFill( item.value );
		},

		applyStroke : function( item ){
			this.applyFill( item.value, 'stroke' );
		},

		beforeappend : function( wormhole ){
			this.setData( 'selected', [] );

			this.__svg = $L( '.lyteAnnotatorSvg', this.__wormhole = wormhole ).get( 0 );
			this.__sidepanel = $L( 'lyte-annotator-sidepanel', wormhole ).get( 0 );
			
			var canvas,
			__data = this.data;

			if( canvas = this.__canvas = $L( 'canvas', wormhole ).get( 0 ) ){
				this.__ctx = canvas.getContext( '2d' );
			}

			if( __data.ltPropType == "whiteboard" ){
				this.resize();
			}

			if( __data.ltPropSmartGuide ){
				var elems = $L( wormhole ).find( '.lyteAnnotatorSmartGuides' );
				this.__horismart = elems.eq( 0 );
				this.__vertsmart = elems.eq( 1 );
			}
		},

		beforeMenu : function( __menu, evt ){
			var __target = evt.target,
			shape = __target.closest( '.lyteAnnotatorElem' );

			if( shape ){
				this.shape_open();
				this.__menu_elem = shape;
			} else {
				this.normal_open();
			}
		},

		menuSelect : function( ns ){
			this[ ns ]( {} );
		}
	},

	didDestroy : function(){
		var wormhole = this.__wormhole,
		utils = _lyteUiUtils,
		__window = window,
		ns = 'annotator',
		fn = this.__resize;
		
		if( wormhole ){
			wormhole.remove();
			delete this.__horismart;
			delete this.__vertsmart;
			delete this.__wormhole;
			delete this.__svg;
			delete this.data.selected;
			delete this.__sidepanel;
			delete this.__canvas;
			delete this.__ctx;
			delete this.__img;
			delete this.__smudge;
			clearTimeout( this.__editortime );
		}

		utils.removeEvent( __window, 'resize', fn, ns );
		utils.removeEvent( __window, 'orientationchange', fn, ns );

		delete this.__resize;
	},

	check_editorpanel : function( arr ){
		clearTimeout( this.__editortime );

		this.__editortime = setTimeout( function(){
			this.__editorpanel( arr );
		}.bind( this ) );
	},

	__editorpanel : function( arr ){
		var obj = {},
		__this = this,
		mapping = this.data.ltPropEditorPanelMapping,
		props = [ 'fill', 'stroke', 'color', 'font', 'outline', 'border', 'dashed' ],
		__len = props.length,
		filter_value = 'lyteAnnotatorHidden',
		sub = {
			fill : [],
			stroke : []
		};

		arr.every( function( item ){
			var __data = $L( item ).data( 'data' ),
			type = ( __data.name || __data.sub_type || __data.type ).toLowerCase(),
			cur = mapping[ type ];

			if( !cur ){
				arr = [];
				return;
			}

			for( var i = 0; i < __len; i++ ){
				var __cur_prop = props[ i ];
				if( cur[ __cur_prop ] ){
					var __arr = obj[ __cur_prop ] || ( obj[ __cur_prop ] = [] ),
					__value = __this[ 'get_' + __cur_prop ]( __data, sub[ __cur_prop ], void 0, cur );

					__this.pushIfNot( __arr, __value );
				} else {
					__this.setData( 'show' + __this.capital( __cur_prop ), filter_value );
					props.splice( i--, 1 );
					__len--;
					delete obj[ __cur_prop ];
				}
			}

			return true;
		});

		if( arr.length && props.length ){
			props.forEach( function( item ){
				__this[ 'set_' + item ]( obj[ item ], sub[ item ] );
			});
			filter_value = '';
			__this.setData( 'renderFilter', true );
		} 

		__this.setData( 'showFilter', filter_value );
	},

	capital : function( str ){
		return str.replace( /^./, function( item ){
		    return item.toUpperCase()
		});
	},

	set_fill : function( values, sub, ns, cur ){

		ns = ns || "fill";

		var selected = "",
		fill = this.data.ltPropEditorPanelData[ ns ],
		capital = this.capital( ns );

		if( !fill || !values ){
			return;
		}

		var Lo = Lyte.objectUtils,
		opacity = fill.opacity,
		to_be = $L( sub ).get( -1 );

		if( values.length == 1 ){
			selected = values[ 0 ] || '';
		} else {
			selected = "";
		}

		if( selected == 'none' ){
			selected = '';
		}

		Lo( fill, 'add', 'selected', selected );

		if( opacity ){
			// if( cur && cur.opacity ){
				Lo( opacity, 'add', 'value', to_be );
				Lo( opacity, 'add', 'hide', '' );
			// } else {
			// 	Lo( opacity, 'add', 'hide', 'lyteAnnotatorHidden' );
			// }
		}

		this.setData( 'show' + capital, '' );
		this.setData( 'render' + capital, '' );
	},

	set_stroke : function( values, sub, __void, cur ){
		this.set_fill( values, sub, 'stroke', cur );
	},

	set_color : function( values, sub, __void, cur ){
		this.set_fill( values, sub, 'color', cur );
	},

	set_font : function( values, sub, __void, cur ){
		this.set_fill( values, sub, 'font', cur );
	},

	set_outline : function( values, sub, __void, cur ){
		this.set_fill( values, sub, 'outline', cur );
	},

	set_border : function( values ){
		this.set_fill( values, void 0, 'border' );
	},

	set_dashed : function( values ){
		this.set_fill( values, void 0, 'dashed' );
	},

	pushIfNot : function( arr, value ){
		if( arr.indexOf( value ) == -1 ){
			arr.push( value );
		}
	},

	get_fill : function( data, sub ){
		var __attr = data.children[ 0 ].attr;
		this.pushIfNot( sub, __attr[ 'fill-opacity' ] );

		return __attr.fill;
	},

	get_stroke : function( data, sub ){
		var __attr = data.children[ 0 ].attr;
		this.pushIfNot( sub, __attr[ 'stroke-opacity' ] );
		
		return __attr.stroke;
	},

	get_color : function( data ){
		return data.children[ 0 ].attr.color;
	},

	get_font : function( data ){
		return data.children[ 0 ].attr[ 'font-size' ];
	},

	get_outline : function( data ){
		return data.children[ 0 ].attr.outline;
	},

	get_border : function( data ){
		return data.children[ 0 ].attr[ 'stroke-width' ];
	},

	get_dashed : function( data ){
		return data.children[ 0 ].attr[ 'stroke-dasharray' ];
	},

	modify_zoom : function( value ){
		var parsed = parseFloat( value ),
		__data = this.data,
		fact = value / 100,
		__width = this.__owdt * fact,
		__height = this.__ohgt * fact;

		$L( this.__svg ).parent().css({
			minWidth : __width,
			maxWidth : __width,
			minHeight : __height,
			maxHeight : __height,
			transform : ""
		});

		this.__xtrans = this.__ytrans = 0;
		this.resize();
	},

	zoom_obs : function( arg ){
		this.__zoom_obs( arg.newValue );
	}.observes( 'ltPropZoomLevel' ),

	__zoom_obs : function( __value ){
		if( /^[0-9]+$/.test( __value ) ){
			this.modify_zoom( __value );
		} else {
			var __new;

			switch( __value ){
				case 'fit_to_width' : {
					__new =  parseInt( innerWidth * 100 / this.__owdt );
				}
				break;
				case 'fit_to_screen' : {
					this.reset_to_fit();
				}
				break;
				case 'actual_size' : {
					__new = 100;
				}
				break;
			}

			if( __new != void 0 ){
				this.modify_zoom( __new );
				this.setData( 'displayValue', __new + '%' );
			}
		}

		this.disable_zoom();
	},

	reset_to_fit : function(){
		var parent = this.__svg.parentNode;

		$L( parent ).css({
			minWidth : '',
			maxWidth : '',
			minHeight : '',
			maxHeight : '',
			transform : ''
		});

		this.__xtrans = this.__ytrans = 0;

		this.resize();
	},

	disable_zoom : function(){
		var limit = this.zoom_limit(),
		lower = 'lyteAnnotatorButtonDisabled',
		upper = lower,
		inf = Infinity;
		
		if( limit.lower_limit != -inf ){
			lower = '';
		} 
		this.setData( 'disablePrev', lower );

		if( limit.upper_limit != inf ){
			upper = '';
		} 
		this.setData( 'disableNext', upper );
	},

	copy_to_clip : function( ns ){
		var arr = this.get_selected(),
		__data = arr.map( function( item ){
			return this.extend( $L( item ).data( 'data' ) );
		}.bind( this ) );

		this.__paste_data = __data;
		this.__paste_count = ns ? 1 : 0;
	},

	cut : function( evt, ns ){
		var __ns = ns || 'Cut',
		cb = "onBefore" + __ns,
		wormhole = this.__wormhole,
		$node = this.$node;

		if( this.getMethods( cb ) && this.executeMethod( cb, evt, wormhole, $node ) == false ){
			return;
		}

		this.select_first();

		this.copy_to_clip( ns );
		!ns && this.delete_selected();

		this.getMethods( cb = "on" + __ns ) && this.executeMethod( cb, evt, wormhole, $node );
	},

	copy : function( evt ){
		this.cut( evt, 'Copy' );
	},

	paste : function( evt ){
		var __data = this.__paste_data;
		if( !__data ){
			return;
		}

		var __count = this.__paste_count++;

		__data.forEach( function( item ){
			var extend = this.extend( item );

			this.modify_position( extend, __count );
			this.modify_id( extend );

			this.create( extend );

			this.pushToQueue({
				type : "create",
				data : this.extend( extend )
			});
		}.bind( this ) );
	},

	modify_position : function( __data, __count ){
		var __attr = __data.attr,
		transform = this.get_transfrom( __attr.transform );

		__attr.transform = "translate(" + ( transform.x + 50 * __count ) + ',' + ( transform.y + 50 * __count ) + ")";
	},

	modify_id : function( __data ){
		var __attr = __data.attr || {},
		__id = __attr.id;

		if( __id != void 0 ){
			__attr.id = this.randomId();
		}

		( __data.children || [] ).forEach( this.modify_id.bind( this ) );
	},

	bind_image_drag : function( evt ){

		var ev = ( evt.touches || [ evt ] )[ 0 ];

		this.__client_x = ev.clientX;
		this.__client_y = ev.clientY;
		this.__elem = ev.target;

		this.__mmove = this.image_move.bind( this );
		this.__mup = this.image_up.bind( this );

		this.bind_evt( 'add', evt );
	},

	image_move : function( evt, ret ){
		var ev = ( evt.touches || [ evt ] )[ 0 ],
		x_inc = this.__client_x - ( this.__client_x = ev.clientX ),
		y_inc = this.__client_y - ( this.__client_y = ev.clientY ),
		elem = this.__elem,
		__Math = Math,
		width = parseFloat( elem.getAttribute( 'width' ) ),
		height = parseFloat( elem.getAttribute( 'height' ) ),
		__width = innerWidth,
		__height = innerHeight,
		diff_x = __Math.max( width - __width + 30, 0 ) / 2,
		diff_y = __Math.max( height - __height + 30, 0 ) / 2;

		if( ret ){
			return {
				diff_x : diff_x,
				diff_y : diff_y
			};
		}

		var min_y = diff_y,
		max_y = diff_y,
		__x = this.__xtrans = __Math.min( __Math.max( -diff_x, ( this.__xtrans || 0 ) - x_inc ), diff_x ),
		__y = this.__ytrans = __Math.min( __Math.max( -diff_y, ( this.__ytrans || 0 ) - y_inc ), diff_y );

		elem.style.transform = 'translate(' + __x + 'px,' + __y + 'px)';
	},

	image_up : function( evt ){
		this.bind_evt( 'remove', evt );
		this.__wormhole.classList.remove( 'lyteAnnotatorImageDragSelected' );

		[ '__client_x', '__client_y', '__elem', '__mmove', '__mup' ].forEach( function( item ){
			delete this[ item ];
		}.bind( this ) );
	},

	move_selected : function( x_inc, y_inc ){

		this.get_selected().forEach( function( item ){
			this.update_position( $L( item ), x_inc, y_inc, true );
		}.bind( this ) );

		this.flush( this.__flush );
		delete this.__flush;
	},

	// smart guide lines

	get_position : function( elem ){
		var obj = {};

		if( this.__moved ){
			obj = this.__smart_data;

			var ret = this.get_transfrom( elem.getAttribute( 'transform' ) ),
			__cur = obj[ elem.id ];

			__cur.left = ret.x;
			__cur.top = ret.y;

		} else {
			var __width = this.__owdt,
			__height = this.__ohgt,
			svg = this.__svg,
			content = svg.parentNode,
			rend_width = parseFloat( content.getAttribute( 'width' ) ),
			rend_height = parseFloat( content.getAttribute( 'height' ) ),
			scale_x = this.__scale_x = __width / rend_width,
			scale_y = this.__scale_y = __height / rend_height,
			support = this.data.ltPropSmartGuideSupport || [];

			Array.from( svg.children ).forEach( function( item ){

				if( support.indexOf( $L( item ).data( 'data' ).name ) == -1 ){
					return;
				}

				var ret = this.get_transfrom( item.getAttribute( 'transform' ) ),
				bcr = this.bcr( item.getElementsByClassName( 'lyteAnnotatorOriginalElem' )[ 0 ] );

				obj[ item.id ] = {
					left : ret.x,
					top : ret.y,
					width : bcr.width * scale_x,
					height : bcr.height * scale_y
				};

			}.bind( this ) );

			this.__smart_data = obj;
		}

		return obj;
	},

	// context menu

	menuShow : function( arg ){
		if( !arg.newValue ){
			delete this.__menu_elem;
		}
	}.observes( 'menuShow' ),

	forward : function(){
		var __elem = this.__menu_elem;
		__elem.parentNode.appendChild( __elem );
	},

	backward : function(){
		var __elem = this.__menu_elem,
		parent = __elem.parentNode,
		__first = parent.children[ 0 ];

		if( __first ==__elem ){
			return;
		}
		
		parent.insertBefore( __elem, __first );
	},

	zoomin : function(){
		var ret = this.zoom_limit();
		this.setData( 'ltPropZoomLevel', ret.upper_limit );
	},

	zoomout : function(){
		var ret = this.zoom_limit();
		this.setData( 'ltPropZoomLevel', ret.lower_limit );
	},

	shape_open : function(){
		this.menu_check( [] );
	},

	normal_open : function(){
		this.menu_check( [ 'cut', 'copy', 'forward', 'backward' ] );
	},

	menu_check : function( ignore_list ){
		var __data = this.data,
		options = __data.ltPropContextMenuOptions,
		Lc = Lyte.objectUtils,
		hidden_cls = 'lyteAnnotatorHidden';

		for( var key in options ){

			var __cur = options[ key ],
			__new_value = '',
			disabled = false;

			if( ignore_list.indexOf( key ) + 1 ){
				Lc( __cur, 'add', 'show', hidden_cls );
				continue;
			}

			switch( key ){
				case 'paste' : {
					disabled = this.__paste_data ? false : true;
				}
				break;
				case 'undo' : {
					disabled = __data.undoQueue.length ? false : true;
				}
				break;
				case 'redo' : {
					disabled = __data.redoQueue.length ? false : true;
				}
				break;
			}

			Lc( __cur, 'add', 'show', __new_value );
			Lc( __cur, 'add', 'disabled', disabled + '' );
		}
	}
}, { mixins : [ 'lyte-smartguide-utils' ] });


Lyte.Component.registerHelper( 'lyteAnnotator', function( item, active, direction ){
	var ns = "lyteAnnotator";
	return ns + 'SideItem ' + ns + item.name + ( active ? ( " " + ns + "Active" ) : "" ) + ( ( item.children || [] ).length ? ( " " + ns + "HasChildren" ) : "" ) + ( direction || "" );
});