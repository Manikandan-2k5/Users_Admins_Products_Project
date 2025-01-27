/**
 * Renders an avatar navigator
 * @component lyte-avatar-navigator
 * @version 3.6.0
 * @methods onSelect, onPrevious, onNext
 */


Lyte.Component.register( 'lyte-avatar-navigator', {
_template:"<template tag-name=\"lyte-avatar-navigator\" role=\"region\" aria-description=\"{{lyteUiI18n(&quot;lyte.avatar.navigator.description&quot;)}}\"> <template is=\"if\" value=\"{{showLeftArrow}}\"><template case=\"true\"> <div aria-description=\"{{lyteUiI18n(&quot;lyte.avatar.navigator.previous.nav.description&quot;)}}\" role=\"button\" tabindex=\"0\" class=\"lyteAvatarArrowCont\" onclick=\"{{action('navigatePrevious',event)}}\" onkeydown=\"{{action('navigatePreviousOnKey',event)}}\"> <template is=\"if\" value=\"{{ltPropIconYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"previousIconYield\"></lyte-yield> </template><template case=\"false\"> <span class=\"{{ltPropPreviousIconClass}}\"></span> </template></template> <span class=\"lyteVisuallyHidden\"> {{lyteUiI18n(\"lyte.avatar.navigator.previous.nav.button\")}} </span> </div> </template></template> <div class=\"lyteAvatarSetCont\" style=\"height:{{imageHeight}};\" onclick=\"{{action('selectItem',event)}}\" onkeydown=\"{{action('selectItemOnKey',event)}}\"> <template is=\"for\" items=\"{{blocks}}\" item=\"block\" index=\"blockIndex\"> <div class=\"{{block.class}}\" style=\"transform: translate({{concat(block.translate,'px')}});\" ontransitionend=\"{{action('removeClass',event,block)}}\"> <template is=\"for\" items=\"{{block.images}}\" item=\"imageObj\" index=\"imageIndex\"> <template is=\"if\" value=\"{{ltPropAvatarYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"avatarYield\" lyte-image=\"{{imageObj}}\"></lyte-yield> </template><template case=\"false\"> <lyte-avatar-navigator-item lt-prop-image=\"{{imageObj}}\"></lyte-avatar-navigator-item> </template></template> </template> </div> </template> <template is=\"if\" value=\"{{renderDummyImage}}\"><template case=\"true\"> <div class=\"lyteAvatarSet\"> <template is=\"if\" value=\"{{ltPropAvatarYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"avatarYield\" lyte-image=\"{{dummyImage}}\"></lyte-yield> </template><template case=\"false\"> <lyte-avatar-navigator-item lt-prop-image=\"{{dummyImage}}\"></lyte-avatar-navigator-item> </template></template> </div> </template></template> </div> <template is=\"if\" value=\"{{showRightArrow}}\"><template case=\"true\"> <div aria-description=\"{{lyteUiI18n(&quot;lyte.avatar.navigator.next.nav.description&quot;)}}\" role=\"button\" tabindex=\"0\" class=\"lyteAvatarArrowCont\" onclick=\"{{action('navigateNext',event)}}\" onkeydown=\"{{action('navigateNextOnKey',event)}}\"> <template is=\"if\" value=\"{{ltPropIconYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"nextIconYield\"></lyte-yield> </template><template case=\"false\"> <span class=\"{{ltPropNextIconClass}}\"></span> </template></template> <span class=\"lyteVisuallyHidden\"> {{lyteUiI18n(\"lyte.avatar.navigator.next.nav.button\")}} </span> </div> </template></template> <span class=\"lyteVisuallyHidden\" aria-live=\"polite\"> {{lyteUiI18nWithArgs('lyte.avatar.navigator.images.shown',expHandlers(displayIndex,'+',1),expHandlers(displayIndex,'+',imagesPerBlock))}} </span> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}},{"type":"text","position":[1,3,1]}]}},"default":{}},{"type":"attr","position":[3],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'height:'","imageHeight","';'"]}}}},{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'transform: translate('",{"type":"helper","value":{"name":"concat","args":["block.translate","'px'"]}},"');'"]}}}},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}]},{"type":"attr","position":[3,3]},{"type":"if","position":[3,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[5]},{"type":"if","position":[5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}},{"type":"text","position":[1,3,1]}]}},"default":{}},{"type":"text","position":[7,1]}],
_templateAttributes :{"type":"attr","position":[]},
_observedAttributes :["ltPropImages","ltPropUrlValue","ltPropAvatarYield","ltPropIconYield","ltPropImageWidth","ltPropSystemValue","ltPropSelected","ltPropSelectedClass","ltPropPreviousIconClass","ltPropNextIconClass","ltPropAltValue","ltPropAlt","ltPropCyclic","ltPropDisabledList","ltPropTooltipValue","ltPropTooltip","ltPropPreload","ltPropAriaLabelValue","blocks","imagesPerBlock","displayIndex","imageHeight","isAnimating","rangeSet","showLeftArrow","showRightArrow"],

	data: function() {
		return {
			/**
			 * @componentProperty {array} ltPropImages
			 * @default []
			 */

			"ltPropImages": Lyte.attr( 'array', { 'default': [] } ),

			/**
			 * @componentProperty {string} ltPropUrlValue
			 * @default image
			 */

			"ltPropUrlValue": Lyte.attr( 'string', { 'default': 'image' } ),

			/**
			 * @componentProperty {boolean} ltPropAvatarYield
			 * @default false
			 */

			"ltPropAvatarYield": Lyte.attr( 'boolean', { 'default': false } ),

			/**
			 * @componentProperty {boolean} ltPropIconYield
			 * @default false
			 */

			"ltPropIconYield": Lyte.attr( 'boolean', { 'default': false } ),

			/**
			 * @componentProperty {string} ltPropImageWidth=0px
			 */

			"ltPropImageWidth": Lyte.attr( 'string', { 'default': '0px' } ),

			/**
			 * @componentProperty {string} ltPropSystemValue=value
			 */

			"ltPropSystemValue": Lyte.attr( 'string', { 'default': 'value' } ),

			/**
			 * @componentProperty {object} ltPropSelected={}
			 */


			"ltPropSelected": Lyte.attr( 'object', { 'default': {} } ),

			/**
			 * @componentProperty {string} ltPropSelectedClass
			 * @default lyteAvatarSelectedItem
			 */

			"ltPropSelectedClass": Lyte.attr( 'string', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'selectedClass', 'lyteAvatarSelectedItem' ) } ),

			/**
			 * @componentProperty {string} ltPropPreviousIconClass
			 * @default lyteAvatarPrevIcon
			 */

			"ltPropPreviousIconClass": Lyte.attr( 'string', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'previousIconClass', 'lyteAvatarPrevIcon' ) } ),

			/**
			 * @componentProperty {string} ltPropNextIconClass
			 * @default lyteAvatarNextIcon
			 */

			"ltPropNextIconClass": Lyte.attr( 'string', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'nextIconClass', 'lyteAvatarNextIcon' ) } ),

			/**
			 * @componentProperty {string} ltPropAltValue
			 */

			"ltPropAltValue": Lyte.attr( 'string', { 'default': '' } ),

			/**
			 * @componentProperty {string} ltPropAlt
			 */

			"ltPropAlt": Lyte.attr( 'string', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'alt', '' ) } ),

			/**
			 * @componentProperty {boolean} ltPropIconYield
			 * @default false
			 */


			"ltPropCyclic": Lyte.attr( 'boolean', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'cyclic', true ) } ),

			/**
			 * @componentProperty {array} ltPropImages
			 * @default []
			 */

			"ltPropDisabledList": Lyte.attr( 'array', { 'default': [] } ),

			/**
			 * @componentProperty {string} ltPropTooltipValue
			 */

			"ltPropTooltipValue": Lyte.attr( 'string', { 'default': '' } ),

			/**
			 * @typedef {object} tooltip
			 * @property {top|left|bottom|right} tooltip=bottom
			 * @property {box|callout} appearance=box
			 * @property {number} margin=5
			 * @property {boolean} keeptooltip=true
			 */
			/**
			 * @componentProperty {tooltip} ltPropTooltip
			 */
			
			"ltPropTooltip": Lyte.attr( 'object', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'tooltip', 
				{ 
   					'position': 'bottom', 
   					'appearance': 'box',
   					'margin': 5,
   					'keeptooltip': true 
   				} )  
   			} ),
				/**
				 * @componentProperty {boolean} ltPropPreload=false
				 */
   			"ltPropPreload": Lyte.attr( 'boolean', { 'default': _lyteUiUtils.resolveDefaultValue( 'lyte-avatar-navigator', 'preload', false ) } ),

   			/**
			 * @componentProperty {string} ltPropAriaLabelValue
			 */

   			"ltPropAriaLabelValue": Lyte.attr( 'string', { 'default': '' } ),


			"blocks": Lyte.attr( 'array', { 'default': [] } ),
			"imagesPerBlock": Lyte.attr( 'number', { 'default': 0 } ),
			"displayIndex": Lyte.attr( 'number' ),
			"imageHeight": Lyte.attr( 'string', { 'default': 0 } ),
			"isAnimating": Lyte.attr( 'boolean', { 'default': false } ),
			"rangeSet": Lyte.attr( 'array', { 'default': [] } ),
			"showLeftArrow": Lyte.attr( 'boolean', { 'default': true } ),
			"showRightArrow": Lyte.attr( 'boolean', { 'default': true } )
		}
	},

	displayIndexObserver: function() {
		var that = this;
		// wait for blocks to render
		clearTimeout( this._tabIndexTimeoutId );

		this._tabIndexTimeoutId = setTimeout( function() {
			that.updateTabIndex();
		}, 0 );  

	}.observes( 'displayIndex' ),

	updateTabIndex: function() {
		var imageItems = $L( 'lyte-avatar-navigator-item', this.$node ),
		displayIndex = this.getData( 'displayIndex' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ),
		endIndex = displayIndex + imagesPerBlock - 1;

		imageItems.attr( 'tabindex', '-1' );
		imageItems.attr( 'aria-hidden', 'true' );

		imageItems.each( function( index, item ) {
			if( item._imageIndex >= displayIndex && item._imageIndex <= endIndex ) {
				item.setAttribute( 'tabindex', '0' );
				item.removeAttribute( 'aria-hidden' );
			}
		} );
	},

	isRTL: function() {
		return _lyteUiUtils.getRTL();
	},

	didDestroy: function() {
		delete this.prevCurBlock;
		clearTimeout( this._tabIndexTimeoutId );
	},

	getImageWidth: function() {
		var imageWidth = this.getData( 'ltPropImageWidth' );

		return window.parseFloat( imageWidth || 0 );
	},

	init: function() {
		var that = this;

		this.$node.reset = function() {
			var displayIndex, block, imagesPerBlock, images = that.getData( 'ltPropImages' );

			that.animationQueue = [];
			that.setData( 'blocks', [] );
			that.setData( 'rangeSet', [] );
			that.deleteOtherBlocks = false;
			that.curCount = that.totalCount = 0;
			that.setData( 'isAnimating', false );
			that.preventObs = false;
			delete that.prevCurBlock;

			that.setImageDimensions();
			that.setImagesPerBlock();
			displayIndex = that.getData( 'displayIndex' );
			imagesPerBlock = that.getData( 'imagesPerBlock' )

			if( displayIndex + imagesPerBlock > images.length ) {
				displayIndex = images.length - imagesPerBlock;

				if( displayIndex < 0 ) {
					displayIndex = 0;
				}

				that.setData( 'displayIndex', displayIndex );
			}

			that.setContainerWidth();
			block = that.buildImageBlock( displayIndex );
			Lyte.objectUtils( block, 'add', 'translate', 0 );
			that.preloadImages();
		}
	},

	didConnect: function() {
		this.animationQueue = [];
		this.setup();
		this.setSelectedIndex();
	},

	setup: function() {
		var displayIndex, block;

		if( !this.isEmpty() ) {
			this.setImageDataType();
			this.setImageDimensions();
			this.setImagesPerBlock();
			displayIndex = this.setDisplayIndex();
			this.setContainerWidth();
			block = this.buildImageBlock( displayIndex );
			Lyte.objectUtils( block, 'add', 'translate', 0 );
			this.preloadImages();
		}
	},

	toggleNavigationObserver: function() {
		this.toggleNavigation();
	}.observes( 'displayIndex' ),

	toggleNavigation: function() {
		var images = this.getData( 'ltPropImages' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ), shouldEnable,
		cyclic = this.getData( 'ltPropCyclic' ),
		length = images.length,
		displayIndex = this.getData( 'displayIndex' );

		shouldEnable = imagesPerBlock < images.length;

		this.setData( 'showLeftArrow', shouldEnable );
		this.setData( 'showRightArrow', shouldEnable );	

		if( !cyclic && shouldEnable ) {
			if( displayIndex === 0 ) {
				this.setData( 'showLeftArrow', false );
				this.setData( 'showRightArrow', true );
			}
			else if( displayIndex === length - imagesPerBlock ) {
				this.setData( 'showLeftArrow', true );
				this.setData( 'showRightArrow', false );
			}
		}
	},

	isEmpty: function() {
		var images = this.getData( 'ltPropImages' ) || [];

		return images.length === 0;
	},

	setImageDataType: function() {
		var images = this.getData( 'ltPropImages' );

		if( typeof images[ 0 ] === 'string' ) {
			this.setData( 'isString', true );
		}
		else {
			this.setData( 'isString', false );
		}
	},

	setImageDimensions: function() {
		var imageWidth = this.getImageWidth(), item;

		this.setDummyImage();
		item = this.$node.querySelector( 'lyte-avatar-navigator-item' );

		if( imageWidth === 0 ) {
			this.setData( 'ltPropImageWidth', $L( item ).outerWidth( true ) + 'px' );
		}
		
		this.setData( 'imageHeight', $L( item ).outerHeight( true ) + 'px' );
		this.removeDummyImage();
	},

	setDummyImage: function() {
		var images = this.getData( 'ltPropImages' ),
		image = images[ 0 ];

		this.setData( 'dummyImage', image );
		this.setData( 'renderDummyImage', true );
	},

	removeDummyImage: function() {
		this.setData( 'renderDummyImage', false );
	},

	setImagesPerBlock: function() {
		var imageWidth = this.getImageWidth(),
		containerWidth = this.getContainerWidth(), count;

		count = Math.floor( containerWidth / imageWidth );

		this.setData( 'imagesPerBlock', count );
	},

	getContainerWidth: function() {
		var container;

		container = this.getContainer();
		container.style.flex = '1';
		var width = container.getBoundingClientRect().width;
		container.style.flex = 'none';

		return window.parseFloat( width );
	},

	getContainer: function() {
		return this.$node.querySelector( '.lyteAvatarSetCont' );
	},

	setContainerWidth: function() {
		var count = this.getData( 'imagesPerBlock' ),
		imageWidth = this.getImageWidth(),
		container = this.getContainer(),
		roundedWidth;

		roundedWidth = count * imageWidth;
		this.setData( 'ltPropContainerWidth', roundedWidth + 'px' );
		container.style.width = roundedWidth + 'px';
	},

	buildImageBlock: function( index ) {
		if( !this.doesBlockExist( index ) ) {
			return this.createblock( index );
		}
		else {
			return this.getBlock( index );
		}
	},

	doesBlockExist: function( index ) {
		return !!this.getBlock( index );
	},

	getBlock: function( index ) {
		var blocks = this.getData( 'blocks' );

		index = !isNaN( index ) ? index : this.getData( 'displayIndex' );

		for( var i = 0; i < blocks.length; i++ ) {
			if( this.indexInBlock( blocks[ i ], index ) ) {
				return blocks[ i ];
			}
		}
	},

	createblock: function( index, isDisconnected, endIndex ) {
		var images = this.getData( 'ltPropImages' ), rangeInfo, block = {}, arr = [], ret;

		index = !isNaN( index ) ? index : this.getData( 'displayIndex' )

		rangeInfo = this.getRange( index );
		block.startIndex = rangeInfo.startIndex;
		block.endIndex = !isNaN( endIndex ) ? endIndex :rangeInfo.endIndex

		while( index <= block.endIndex ) {
			ret = this.buildImageObject( images[ index ], index );
			arr.push( ret );
			index++;
		}

		block.images = arr;
		block.endIndex = index - 1;
		// block.translate = 0;
		block.class = 'lyteAvatarSet';

		if( !isDisconnected ) {
			this.addNodeToCircularList( block );
		}

		this.insertAtRightPosition( block );

		return block;
	},

	getRange: function( start ) {
		var end;

		end = this.getEndIndex( start );

		return {
			startIndex: start,
			endIndex: end
		}
	},

	collapseSet: function() {
		var rangeSet = this.getData( 'rangeSet' );

		for( var i = 0; i < rangeSet.length; i++ ) {
			if( rangeSet[ i + 1 ] && rangeSet[ i ][ 1 ] + 1 === rangeSet[ i + 1 ][ 0 ] ) {
				rangeSet[ i ][ 1 ] = rangeSet[ i + 1 ][ 1 ];
				rangeSet.splice( i + 1, 1 );
				i--;
			}
		}
	},

	createDisconnectedBlock: function( index ) {
		return this.createblock( index, true );
	},

	buildImageObject: function( image, index ) {
		var isString = this.getData( 'isString' ),
		urlValue = this.getData( 'ltPropUrlValue' ),
		systemValue = this.getData( 'ltPropSystemValue' ),
		alt = this.getData( 'ltPropAlt' ),
		ariaLabelValue = this.getData( 'ltPropAriaLabelValue' ),
		tooltipValue = this.getData( 'ltPropTooltipValue' ),
		obj = {};

		if( isString ) {
			obj[ urlValue ] = image;
			obj[ systemValue ] = image;
			obj[ this.getAltValue() ] = alt || '';
			obj.id = image;
		}
		else {
			obj[ urlValue ] = image[ urlValue ];
			obj[ systemValue ] = image[ systemValue ];
			obj[ this.getAltValue() ] = this.getData( 'altValue' ) ? image[ this.getData( 'altValue' ) ] : ( alt || '' );
			obj.id = image[ systemValue ];
		}

		if( ariaLabelValue ) {
			obj[ ariaLabelValue ] = image[ ariaLabelValue ];
		}

		obj.disabled = this.isDisabled( image );
		obj._originalObj = image;
		obj.isSelected = obj[ systemValue ] === this.getSelectedValue();
		obj._imageIndex = index;

		if( tooltipValue ) {
			obj[ tooltipValue ] = image[ tooltipValue ];
		}

		return obj;
	},

	isDisabled: function( image ) {
		var systemValue = this.getData( 'ltPropSystemValue' ),
		disabledList = this.getData( 'ltPropDisabledList' );

		for( var i = 0; i < disabledList.length; i++ ) {
			if( image[ systemValue ] === disabledList[ i ][ systemValue ] ) {
				return true;
			}
		}

		return false;
	},

	getAltValue: function() {
		var altValue = this.getData( 'ltPropAltValue' );

		return altValue || 'alt';
	},

	getSelectedValue: function() {
		var selected = this.getData( 'ltPropSelected' ),
		systemValue = this.getData( 'ltPropSystemValue' );

		if( selected ) {
			return selected[ systemValue ];
		}

		return '';
	},

	addNodeToCircularList: function( block ) {
		var index, images = this.getData( 'ltPropImages' );

		index = block.startIndex - 1;

		if( index < 0 ) {
			index = images.length - 1;
		}

		var previous = this.getBlock( index );

		index = block.endIndex + 1;

		if( index >= images.length ) {
			index = 0;
		}

		var next = this.getBlock( index );

		if( previous ) {
			previous.next = block;
			block.previous = previous;
		}

		if( next ) {
			next.previous = block;
			block.next = next;
		}
	},

	insertAtRightPosition: function( block ) {
		var blocks = this.getData( 'blocks' ) || [],
		i = 0;

		while( i < blocks.length && block.startIndex > blocks[ i ].startIndex ) {
			i++;
		}

		Lyte.arrayUtils( this.getData( 'blocks' ), 'insertAt', i, block );
	},

	setDisplayIndex: function() {
		var sel = this.getData( 'ltPropSelected' ),
		images = this.getData( 'ltPropImages' ),
		systemValue = this.getData( 'ltPropSystemValue' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ),
		index;

		if( $L.isEmptyObject( sel ) ) {
			this.setData( 'displayIndex', 0 );

			return 0;
		}

		if( images.length <= imagesPerBlock ) {
			this.setData( 'displayIndex', 0 );

			return 0;
		}

		for( var i = 0; i < images.length; i++ ) {
			if( images[ i ][ systemValue ] === sel[ systemValue ] ) {
				break;
			}
		}

		index = i - Math.floor( imagesPerBlock / 2 );

		if( index < 0 ) {
			index = 0;
		}
		else if( index + imagesPerBlock > images.length ) {
			index = images.length - imagesPerBlock;
		}

		this.setData( 'displayIndex', index );

		return index;
	},

	// getSelectedNavItem: function( block ) { // this func is not used
	// 	var sel = this.getData( 'ltPropSelected' ),
	// 	systemValue = this.getData( 'ltPropSystemValue' ), node, id, that = this;

	// 	if( $L.isEmptyObject( sel ) ) {
	// 		return ;
	// 	}

	// 	for( var i = 0; i < block.length; i++ ) {
	// 		if( block[ i ][ systemValue ] === sel[ systemValue ] ) {
	// 			break;
	// 		}
	// 	}

	// 	if( !block[ i ] ) {
	// 		return ;
	// 	}

	// 	id = block[ i ].id;
	// 	node = $L( '[data-image-id="' + id + '"]' ).filter( function( index, item ) {
	// 		return item !== that.selectedNavItem;
	// 	} ).get( 0 );

	// 	return node;
	// },

	getPreviousIndex: function( index ) {
		var displayIndex = !isNaN( index ) ? index : this.getData( 'displayIndex' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ),
		images = this.getData( 'ltPropImages' ),
		res;

		if( displayIndex === 0 ) {
			res = images.length - imagesPerBlock;
		}
		else if( displayIndex - imagesPerBlock < 0 ) {
			res = 0;
		}
		else {
			res = displayIndex - imagesPerBlock;
		}

		// This is just a safety check. If imagesPerBlock > images.length and currentDisplayIndex = 0. It can become negative.
		if( res < 0 ) {
			res = 0;
		}

		return res;
	},

	getNextIndex: function( index ) {
		var displayIndex = !isNaN( index ) ? index : this.getData( 'displayIndex' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ),
		res, images = this.getData( 'ltPropImages' );

		if( displayIndex + imagesPerBlock === images.length ) {
			res = 0;
		}
		else if( displayIndex + ( 2 * imagesPerBlock ) >= images.length ) {
			res = images.length - imagesPerBlock;
		}
		else {
			res = displayIndex + imagesPerBlock;
		}

		return res;
	},

	getOutBlocks: function( indexOfFirstOutBlock, next, direction, previous ) {
		var block = this.getBlock( indexOfFirstOutBlock ), res = [], imagesPerBlock = this.getData( 'imagesPerBlock' );

		if( this.isLongMove( direction, next, previous ) ) {
			res.push( block );

			while( ( direction === 'previous' && block.startIndex > previous ) || ( direction === 'next' && 
				block.endIndex < ( previous + imagesPerBlock - 1 )
				&& block.endIndex !== this.getData( 'ltPropImages' ).length - 1
			) ) {
				res.push( block = block[ direction ] );
			}
		}
		else {
			if( this.isBlockMovingOutAndInSimultaneously( previous, next, direction ) ) {
				// remove all blocks
				res = this.getAllBlocks( direction );
				
				return res;
			}
			else {
				while( block && !this.indexInBlock( block, next ) ) {
					res.push( block );
					block = block[ direction ];
				}
			}
		}

		return res;
		
	},

	getAllBlocks: function( direction ) {
		var blocks = this.getData( 'blocks' ),
		asc = direction === 'previous' ? 1 : -1, res;

		res = blocks.slice( 0 );

		res.sort( function( blockA, blockB ) {
			return blockA.startIndex < blockB.startIndex ? asc : ( asc * -1 );
		} );

		return res;
	},

	isBlockMovingOutAndInSimultaneously: function( previous, next, direction ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' );

		if( this.isMovingAcrossBoundary( next, direction ) ) {
			// think about 5 images with block count of 3 and displayIndex is 2 and next is clicked - displayIndex 2 moves out and back in
			return ( next >= previous && next < previous + imagesPerBlock ) || ( previous >= next && previous < next + imagesPerBlock );
		}
	},

	findInBlock : function(previous, next, direction, block ){ // used to find the inBlocks for preload
		var block = block ?block :this.getBlock( previous ),
		res = [], imagesPerBlock = this.getData( 'imagesPerBlock' );

		if( this.isLongMove( direction, next, previous ) ) {
			return [];
		}
		else {
			if(this.isBlockMovingOutAndInSimultaneously( previous, next, direction ) ) {
				res.push(block[direction]);
			}
			else{
				if( this.indexInBlock( block, next ) ) {
					res.push( block );
				}
				else{
					res.push( block[direction] );
					block = block[direction];
				}
		
				while( ( ( next + imagesPerBlock - 1 ) - block.endIndex ) > 0 ) {
					block = this.getNextBlock( block, 'next' );
					res.push( block );
				}
			}
		}
		
		return res;
	},
	
	getInBlocks: function( previous, next, direction ) {
		var block = this.getBlock( previous ),
		res = [], remaining, imagesPerBlock = this.getData( 'imagesPerBlock' ),
		fnName = direction === 'next' ? 'getNextBlock': 'getPreviousBlock';

		// When long moving, a block can already be present so it doesn't have to be created. But what this does is leave some space because the next might be in the middle of the created block
		if( this.isLongMove( direction, next, previous ) ) {
			res.push( block = this.buildImageBlock( next ) );

			while( ( remaining = ( next + imagesPerBlock - 1 ) - block.endIndex ) > 0 ) {
				block = this.getNextBlock( block, 'next' );
				res.push( block );
			}
		}
		else {
			if( this.isBlockMovingOutAndInSimultaneously( previous, next, direction ) ) {
				// delete all the other blocks and keep this newly created block
				this.deleteOtherBlocks = true;
				this.setData( 'rangeSet', [] );
				res.push( this.createDisconnectedBlock( next ) );
			}
			else {
				while( !this.indexInBlock( block, next ) ) {
					block = this[ fnName ]( block, direction );
				}

				res.push( block );

				while( ( remaining = ( next + imagesPerBlock - 1 ) - block.endIndex ) > 0 ) {
					block = this.getNextBlock( block, 'next' );
					res.push( block );
				}
			}
		}

		return res;
		
	},

	isLongMove: function( direction, next, previous ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' );

		return ( direction === 'next' && next > previous + imagesPerBlock ) || ( direction === 'previous' &&  next < previous - imagesPerBlock )
	},

	isMovingToFirstIndex: function( next ) {
		return next === 0;
	},

	isMovingToLastIndex: function( next ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' ),
		length = this.getData( 'ltPropImages' ).length;

		return next === length - imagesPerBlock;
	},

	getNextBlock: function( block, direction ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' ),
		length = this.getData( 'ltPropImages' ).length,
		startIndex;

		if( block[ direction ] ) {
			return block[ direction ];
		}

		if( block.endIndex + 1 >= length ) {
			startIndex = 0;
		}
		else {
			startIndex = block.endIndex + 1;
		}

		return this.buildImageBlock( startIndex );
	},

	getPreviousBlock: function ( block, direction ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' ), length = this.getData( 'ltPropImages' ).length,
		start, res;

		if( block[ direction ] ) {
			return block[ direction ];
		}

		start = this.getStartIndex( block.startIndex - 1 ); 

		return this.buildImageBlock( start );
	},

	getStartIndex: function( end ) {
		var start, imagesPerBlock = this.getData( 'imagesPerBlock' ),
		rangeSet = this.getData( 'rangeSet' ), length = this.getData( 'ltPropImages' ).length;

		if( end === -1 ) {
			end = length - 1;
		}

		// TODO: check if previous block can start at 0 and the current calculated start can also be 0
		start = end + 1 - imagesPerBlock;

		if( start < 0 ) {
			start = 0;
		}

		for( var i = 0; i < rangeSet.length; i++ ) {
			if( end > rangeSet[ i ][ 1 ] && start <= rangeSet[ i ][ 1 ] ) {
				start = rangeSet[ i ][ 1 ] + 1;
				break;
			}
		}

		return start;
	},

	getEndIndex: function( start ) {
		var rangeSet = this.getData( 'rangeSet' ), 
		length = this.getData( 'ltPropImages' ).length,
		end, imagesPerBlock = this.getData( 'imagesPerBlock' );

		end = start + imagesPerBlock - 1;

		if( end >= length ) {
			end = length - 1;
		}

		for( var i = 0; i < rangeSet.length; i++ ) {
			if( start < rangeSet[ i ][ 0 ] && end >= rangeSet[ i ][ 0 ] ) {
				end = rangeSet[ i ][ 0 ] - 1;
				break;
			}
		}

		rangeSet.splice( i, 0, [ start, end ] );
		this.collapseSet();

		return end;
	},

	indexInBlock: function( block, index ) {
		return block.startIndex <= index && block.endIndex >= index;
	},

	slideOut: function( previous, next, blocks, direction ) {
		var imagesPerBlock = this.getData( 'imagesPerBlock' ),
		imageWidth = this.getImageWidth(),
		isRTL = this.isRTL(),
		that = this, imagesToMove, offset;

		blocks.forEach( function( block ) {
			that.addAnimationClass( block );

			if( that.isMovingAcrossBoundary( next, direction ) ) {
				imagesToMove = imagesPerBlock ;
			}
			else if( that.isLongMove( direction, next, previous ) ) {
				if( direction === 'previous' && isNaN( imagesToMove ) ) {
					offset = previous - blocks[ 0 ].startIndex;
					imagesToMove = imagesPerBlock + ( offset > 0 ? offset : 0 );
				}
				else if( direction === 'next' && isNaN( imagesToMove ) ) { 
					offset = blocks[ blocks.length - 1 ].endIndex - ( previous + imagesPerBlock - 1 );
					imagesToMove = imagesPerBlock + ( offset > 0 ? offset : 0 );
				}
			}
			else {
				imagesToMove = Math.abs( previous - next );
			}

			imagesToMove = imagesToMove * ( isRTL ? -1 : 1 ) * ( direction === 'previous' ? 1 : -1 );

			that.queueAnimates( block, block.translate + ( imagesToMove * imageWidth ) );			
		} );
	},

	slideIn: function( next, blocks, lastBlock, direction ) {
		var translateValue, imageWidth = this.getImageWidth(),
		that = this, isRTL = this.isRTL();

		blocks.forEach( function( block ) {
			if( lastBlock ) {
				that.positionBlockForAnimation( block, lastBlock, direction );
			}
			
			lastBlock = block;
			that.addAnimationClass( block );
			translateValue = ( block.startIndex - next ) * imageWidth;
			translateValue = translateValue * ( isRTL ? -1 : 1 ); 
			that.queueAnimates( block, translateValue );
		} );

		this.fireAnimations();
	},

	positionBlockForAnimation: function( blockToBePositioned, previousBlock, dir ) {
		var isRTL = this.isRTL(),
		imageWidth = this.getImageWidth(),
		translateValue = previousBlock.translate + ( isRTL && dir === 'next' ? -( this.getBlockLength( previousBlock ) * imageWidth ) : 0 ) ,
		blockLength = this.getBlockLength( ( dir === 'previous' ) ? blockToBePositioned : previousBlock ),
		multiplier = ( ( dir === 'previous' && !isRTL ) ) ? -1 : 1,
		newValue = translateValue + ( isRTL && dir !== 'previous' ? 0 : ( multiplier * ( blockLength * imageWidth ) ) );

		Lyte.objectUtils( blockToBePositioned, 'add', 'translate', newValue );
	},

	addAnimationClass: function( block ) {
		var that = this;

		window.requestAnimationFrame( function() {
			var classList = block.class.trim().split( ' ' );

			classList.push( 'lyteAvatarSlideAnim' );
			classList = classList.join( ' ' );

			Lyte.objectUtils( block, 'add', 'class', classList );
			that.setData( 'isAnimating', true );
		} );
		
	},

	getBlockLength: function( block ) {
		return block.endIndex - block.startIndex + 1;
	},

	removeAnimationClass: function( block ) {
		var classList = block.class.trim().split( ' ' ),
		index = classList.indexOf( 'lyteAvatarSlideAnim' );

		if( !!~index ) {
			classList.splice( index, 1 );
			classList = classList.join( ' ' );
			Lyte.objectUtils( block, 'add', 'class', classList );
		}

		this.setData( 'isAnimating', false );
	},

	removeCommon: function( inBlocks, outBlocks ) {
		for( var i = 0; i < outBlocks.length; i++ ) {
			if( !!~inBlocks.indexOf( outBlocks[ i ] ) ) {
				outBlocks.splice( i, 1 );
				i--;
			}
		}
	},

	queueAnimates: function( block, value ) {
		this.animationQueue.push( { block: block, value: value } );
	},

	fireAnimations: function() {
		var that = this;

		window.requestAnimationFrame( function() {
			window.requestAnimationFrame( function() {
				that.animationQueue.forEach( function( animationObj ) {
					Lyte.objectUtils( animationObj.block, 'add', 'translate', animationObj.value );
				} );

				that.animationQueue = [];
			} );
		} );
		
	},
	removeBlock : function(block){
		var blocks = this.getData("blocks");
		Lyte.arrayUtils(blocks,"removeAt",blocks.indexOf(block),1);
	},	
	getEndIndexForPreload : function(start){
		var imagesPerBlock = this.getData( 'imagesPerBlock' );
		var end;
		var length = this.getData( 'ltPropImages' ).length,
		end = start + imagesPerBlock - 1;

		if( end >= length ) {
			end = length - 1;
		}
		return end;
	},
	availableBlock : function(startIndex,endIndex){ // used to find the particular block 
		var increment = startIndex;
		var block;
		var returnValue=false;
		while(increment <= endIndex){
			block = this.getBlock(increment);
			if(!block){
				break;
			}
			if(block.startIndex === startIndex &&  block.endIndex === endIndex){
				returnValue = block;
				break;
			}
			increment++;
		}
		return returnValue;
	},
	checkConditionBeforeRemove : function(block){ // checking the condition before remove
		var imageWidth = this.getImageWidth(),
		imagesPerBlock = this.getData( 'imagesPerBlock' );
		var max =  imageWidth*(imagesPerBlock);
		var min = -imageWidth*((block.endIndex - block.startIndex)+1);
		if(block.translate  ===  undefined || 
		block.translate >= max || block.translate <= min  ){
			return true;
		}
	},
	getBlockChain : function(blocks,altblock){ //if the inBlock are [[0,1][2,3]] it returns with [0,3]
		if(!blocks.length){
			blocks = [altblock]
		}
		var startIndex=blocks[0].startIndex,endIndex=blocks[0].endIndex;
		for(var index=1;index<blocks.length;index++){
			var block =  blocks[index];
			if(block.startIndex<startIndex){
				startIndex = block.startIndex;
			}
			if(block.endIndex>endIndex){
				endIndex = block.endIndex;
			}
		}
		return{
			startIndex : startIndex,
			endIndex : endIndex
		}
	},
	getEndIndexForPrevBlock : function(blockChain,startIndex,endIndex){
		if(endIndex >= blockChain.startIndex && endIndex <= blockChain.endIndex && startIndex<blockChain.startIndex){
			while(blockChain.startIndex != endIndex){
				--endIndex;
			}
			return --endIndex;
		}
		return endIndex;
	},
	getStartIndexForNextBlock : function(blockChain,startIndex,endIndex){
		if(startIndex >= blockChain.startIndex && startIndex <= blockChain.endIndex && blockChain.endIndex<endIndex){
			while(blockChain.endIndex != startIndex){
				++startIndex;
			}
			return ++startIndex;
		}
		return startIndex;
	},
	getInAndOutBlocks : function(prevCurValue,curValue,direction){
		var blocks = Array.from(this.getData("blocks"));
		var outBlocks= [], inBlocks;
		var prevCurBlock =  direction?this.prevCurBlock[direction]:this.prevCurBlock;
		inBlocks =  this.findInBlock(prevCurValue,curValue,direction,prevCurBlock);
		for(var index=0;index<blocks.length;index++){
			if(inBlocks.indexOf(blocks[index])<0){
				if(this.checkConditionBeforeRemove(blocks[index],direction)){
					this.removeBlock(blocks[index]);
				}
				else{
					outBlocks.push(blocks[index]);
				}
			}
		}
		return {
			outBlocks : outBlocks,
			inBlocks : inBlocks
		}
	},
	connectParentChildBlocks : function(parent,child,direction){
		parent[direction] =  child;
		child.next = parent;
		child.previous =  parent;
	},
	prevBlockisReusable : function(block,inBlocks,direction){
		var prevCurBlock = direction?this.prevCurBlock[direction]:this.prevCurBlock;
		if(block && ((inBlocks.indexOf(block) < 0  && (direction === "previous" && this.isCompleteBlock(block.startIndex,block.endIndex)))
		|| (direction === "next" && block === prevCurBlock))){
			return true;
		}
		return false;
	},
	nextBlockisReusable : function(block,inBlocks,direction){
		var prevCurBlock = direction?this.prevCurBlock[direction]:this.prevCurBlock;
		if(block && ((inBlocks.indexOf(block) < 0  && (direction === "next" && this.isCompleteBlock(block.startIndex,block.endIndex)))
		|| (direction === "previous" && block === prevCurBlock))){
			return true;
		}
		return false;
	},
	isCompleteBlock : function(startIndex,endIndex){
		var imagesPerBlock = this.getData( 'imagesPerBlock' );
		if(endIndex-startIndex === imagesPerBlock-1){
			return true;
		}
		return false;
	},
	setPreviousBlock : function(startIndex,curblock,inBlocks,direction,blockChain){
		var endIndex = this.getEndIndexForPreload(startIndex);
		endIndex = this.getEndIndexForPrevBlock(blockChain,startIndex,endIndex);
		var prevBlock = this.availableBlock(startIndex,endIndex);
		if(this.prevBlockisReusable(prevBlock,inBlocks,direction)){
			this.connectParentChildBlocks(curblock,prevBlock,"previous");
		}
		else{
			var tempBlock;
			this.setData("rangeSet",[]);
			tempBlock = this.createblock( startIndex,true,endIndex);
			direction = direction? direction:"previous";
			this.connectParentChildBlocks(curblock,tempBlock,"previous");
		}
	},
	setNextBlock : function(startIndex,curblock,inBlocks,direction,blockChain){
		var endIndex = this.getEndIndexForPreload(startIndex);
		startIndex = this.getStartIndexForNextBlock(blockChain,startIndex,endIndex);
		var nextBlock = this.availableBlock(startIndex,endIndex);
		if(this.nextBlockisReusable(nextBlock,inBlocks,direction)){
			this.connectParentChildBlocks(curblock,nextBlock,"next");
		}
		else{
			var tempBlock;
			this.setData("rangeSet",[]);
			tempBlock = this.createblock(startIndex,true,endIndex);
			direction = direction?direction: "next";
			this.connectParentChildBlocks(curblock,tempBlock,"next");
		}
	},
	preloadImages: function(prevCurValue,direction) {
		var cur = this.getData( 'displayIndex' ),
		preload = this.getData( 'ltPropPreload' ),
		cyclic = this.getData( 'ltPropCyclic' ),
		next = this.getNextIndex( cur ),
		previous = this.getPreviousIndex( cur ),
		length = this.getData( 'ltPropImages' ).length,
		imagesPerBlock = this.getData( 'imagesPerBlock' ), lastBlock;
		if( length < imagesPerBlock || !preload ) {
			return ;
		}
		var outBlocks=[], inBlocks=[];
		var firstBlock, lastBlock;
		if(direction){ // this check for stop calling in didConnect
			var BlockInfo = this.getInAndOutBlocks(prevCurValue,cur,direction);
			if(BlockInfo.inBlocks.length === 0){
				BlockInfo.inBlocks =  [this.createDisconnectedBlock(cur)];
			}
			outBlocks = BlockInfo.outBlocks;
			inBlocks = BlockInfo.inBlocks;
			firstBlock = inBlocks[0];
			lastBlock = inBlocks[inBlocks.length-1];
		}
		else{
			firstBlock = this.getBlock(cur);
			lastBlock = this.getBlock(cur);
		}
		var blockChain = this.getBlockChain(inBlocks,firstBlock);
		if( (cyclic || ( cur !== 0 && !cyclic ) )) {
			this.setPreviousBlock(previous,firstBlock,inBlocks,direction,blockChain);
		}
		if( cyclic || ( cur !== ( length - imagesPerBlock ) && !cyclic ) ) {
			this.setNextBlock(next,lastBlock,inBlocks,direction,blockChain);
		}
		if( direction === 'previous' ) {
			// this.sort( inBlocks );
			inBlocks.reverse();
			this.sort( outBlocks );
		}
		this.prevCurBlock = {previous:firstBlock,next:lastBlock};
		return{
			inBlocks : inBlocks,
			outBlocks:outBlocks
		}
	},

	sort: function( arr ) {
		arr.sort( function( a, b ) {
			if( a.startIndex > b.startIndex ) {
				return 1;
			}
			else if( a.startIndex < b.startIndex ) {
				return -1;
			}
			else {
				return 0;
			}
		} )
	},

	removeSelectedClass: function() {
		var sel = this.getData( 'ltPropSelectedClass' );
		var previousItems =  $L("."+sel,this.$node);
		if(previousItems.length) {
			for(var index=0;index<previousItems.length;index++){
				previousItems[index].ltProp( 'selectedClass', '' );
			}
		}
	},

	addSelectedClass: function( navItem ) {
		var sel = this.getData( 'ltPropSelectedClass' );

		if( navItem ) {
			var imageId = navItem.getAttribute("data-image-id");
			var selectedItems = $L("[data-image-id='"+imageId+"']",this.$node);
			for(var index=0;index<selectedItems.length;index++){
				selectedItems[index].ltProp( 'selectedClass', sel );
			}
		}
	},

	toggleSelectedClass: function( oldValue, newValue, preventClassRemove ) {

		// TODO: Is this required?
		if( !preventClassRemove ) {
			this.removeSelectedClass();
		}

		this.addSelectedClass( this.getNavItem( newValue ) );
	},

	getNavItem: function( sel ) {
		var systemValue = this.getData( 'ltPropSystemValue' ),
		val = sel[ systemValue ];

		return this.$node.querySelector( '[data-image-id="' + val + '"]' );
	},

	fireOnSelect: function( event, navItem ) {
		var sel = this.getData( 'ltPropSelected' );

		if( this.getMethods( 'onSelect' ) ) {
			this.executeMethod( 'onSelect', event, sel, navItem );
		}
	},

	fireNavigationCallback: function( event, direction ) {
		if( direction === 'previous' ) {
			if( this.getMethods( 'onPrevious' ) ) {
				this.executeMethod( 'onPrevious', event, this, this.isVisible() );
			}
		}
		else {
			if( this.getMethods( 'onNext' ) ) {
				this.executeMethod( 'onNext', event, this, this.isVisible() );
			}
		}
	},

	isVisible: function() {
		var selIndex = this.selectedIndex,
		displayIndex = this.getData( 'displayIndex' ), 
		imagesPerBlock = this.getData( 'imagesPerBlock' );

		if( !isNaN( selIndex ) ) {
			return selIndex >= displayIndex && selIndex < displayIndex + imagesPerBlock;
		}

		return false;
	},

	isMovingAcrossBoundary: function( next, direction ) {
		return ( direction === 'previous' && this.isMovingToLastIndex( next ) ) || ( direction === 'next' && this.isMovingToFirstIndex( next ) );
	},

	getAnimatingBlocks: function( next, previous, direction, indexOfFirstOutBlock ) {
		var outBlocks, inBlocks;

		outBlocks = this.getOutBlocks( indexOfFirstOutBlock, next, direction, previous );
		inBlocks = this.getInBlocks( previous, next, direction );

		if( direction === 'previous' ) {
			inBlocks.reverse();
			outBlocks.reverse();
		}

		this.removeCommon( inBlocks, outBlocks );

		this.curCount = 0;
		this.totalCount = inBlocks.length + outBlocks.length;

		return {
			outBlocks: outBlocks,
			inBlocks: inBlocks
		}
	},

	animateBlocks: function( next, previous, inBlocks, outBlocks, direction ) {
		var lastBlock = direction === 'previous' ? outBlocks[ 0 ] : outBlocks[ outBlocks.length - 1 ];
		//var preload = this.getData("ltProPreload");

		this.slideIn( next, inBlocks, lastBlock, direction );
		this.slideOut( previous, next, outBlocks, direction );
	},

	selectedObserver: function( change ) {
		this.setSelectedIndex();

		if( this.preventObs ) {
			return ;
		}

		var previous = this.getData( 'displayIndex' ),
		images = this.getData( 'ltPropImages' ),
		next = this.setDisplayIndex(),
		imagesPerBlock = this.getData( 'imagesPerBlock' ),
		direction, event = {};

		if( images.length > imagesPerBlock ) {
			if( previous > next ) {
				direction = 'previous';
				this.moveToSelected( event, next, previous, direction, previous + imagesPerBlock - 1 );
			}
			else if( previous < next ) {
				direction = 'next';
				this.moveToSelected( event, next, previous, direction, previous );
			}
		}

		this.toggleSelectedClass( change.oldValue, change.newValue );
	}.observes( 'ltPropSelected' ),

	setSelectedIndex: function() {
		var images = this.getData( 'ltPropImages' ) || [],
		sel = this.getData( 'ltPropSelected' ), i;

		if( sel ) {
			for( i = 0; i < images.length; i++ ) {
				if( images[ i ] === sel ) {
					this.selectedIndex = i;
					break;
				}
			}
		}
	},

	moveToSelected: function( event, next, previous, direction, indexOfFirstOutBlock ) {
		var blocksInfo, imagesPerBlock = this.getData( 'imagesPerBlock' );

		if( this.getData( 'ltPropPreload' ) ) {
			blocksInfo = this.preloadImages( previous, direction );
		}
		else{
			blocksInfo = this.getAnimatingBlocks( next, previous, direction, indexOfFirstOutBlock );
		}

		this.animateBlocks( next, previous, blocksInfo.inBlocks, blocksInfo.outBlocks, direction );
		this.fireNavigationCallback( event, direction );
	},

	imagesObserver: function() {
		this.animationQueue = [];
		this.setData( 'blocks', [] );
		this.setData( 'rangeSet', [] );
		this.deleteOtherBlocks = false;
		this.curCount = this.totalCount = 0;
		this.setData( 'isAnimating', false );
		this.preventObs = false;
		delete this.prevCurBlock;

		this.setData( 'showLeftArrow', true );
		this.setData( 'showRightArrow', true );
		this.setup();
		this.toggleNavigation();
	}.observes( 'ltPropImages.[]' ),

	selectItem: function( event ) {
		var target = event.target,
		navItem = $L( target ).closest( 'lyte-avatar-navigator-item' ).get( 0 ),
		oldValue = this.getData( 'ltPropSelected' ), newValue ;

		if( !navItem ) {
			return ;
		}

		if( navItem.hasAttribute( 'disabled' ) ) {
			return ;
		}

		
		this.preventObs = true;
		this.setData( 'ltPropSelected', newValue = navItem.ltProp( 'image' )._originalObj );
		this.toggleSelectedClass( oldValue, newValue );
		this.preventObs = false;
		this.fireOnSelect( event, navItem );
	},

	navigatePrevious: function( event ) {
		if( this.getData( 'isAnimating' ) ) {
			return ;
		}

		var previous = this.getData( 'displayIndex' ),
		imagesPerBlock = this.getData( 'imagesPerBlock' ), 
		next = this.getPreviousIndex(), blocksInfo, inBlocks, outBlocks, direction = 'previous';

		this.setData( 'displayIndex', next );
		// this.preloadImages(direction);
		if(this.getData("ltPropPreload")){
			blocksInfo = this.preloadImages(previous, direction);
		}
		else{
			blocksInfo = this.getAnimatingBlocks( next, previous, direction, previous + imagesPerBlock - 1 );
		}
		this.animateBlocks( next, previous, blocksInfo.inBlocks, blocksInfo.outBlocks, direction );
		
		this.fireNavigationCallback( event, direction );
	},

	navigateNext: function( event ) {
		if( this.getData( 'isAnimating' ) ) {
			return ;
		}

		var previous = this.getData( 'displayIndex' ), 
		next = this.getNextIndex(), outBlocks, inBlocks, blocksInfo, direction = 'next';

		this.setData( 'displayIndex', next );
		if(this.getData("ltPropPreload")){
			blocksInfo = this.preloadImages(previous, direction);
		}
		else{
			blocksInfo = this.getAnimatingBlocks( next, previous, direction, previous );
		}
		this.animateBlocks( next, previous, blocksInfo.inBlocks, blocksInfo.outBlocks, direction );
		this.fireNavigationCallback( event, direction );
	},

	actions: {

		// TODO: Think about merging the two navigates into a single function
		navigatePrevious: function( event ) {
			this.navigatePrevious( event );
		},

		navigateNext: function( event ) {
			this.navigateNext( event );
		},

		navigatePreviousOnKey: function( event ) {
			var keyCode = event.keyCode,
			SPACE_KEY = 32,
			ENTER_KEY = 13;

			if( keyCode === SPACE_KEY || keyCode === ENTER_KEY ) {
				this.navigatePrevious( event );
			}
		},

		navigateNextOnKey: function( event ) {
			var keyCode = event.keyCode,
			SPACE_KEY = 32,
			ENTER_KEY = 13;

			if( keyCode === SPACE_KEY || keyCode === ENTER_KEY ) {
				this.navigateNext( event );
			}
		},

		removeClass: function( event, block ) {
			var blocks = this.getData( 'blocks' ), ind;
			var preload = this.getData("ltPropPreload");
			this.removeAnimationClass( block );
			this.curCount++;
			if( !preload && this.deleteOtherBlocks ) {
				if( this.curCount === this.totalCount ) {
					this.curCount = this.totalCount = 0;
					this.deleteOtherBlocks = false;
					Lyte.arrayUtils( blocks, 'removeAt', 0, blocks.length - 1 );
				}
			}
		},

		selectItemOnKey: function( event ) {
			var keyCode = event.keyCode,
			SPACE_KEY = 32,
			ENTER_KEY = 13;

			if( keyCode === SPACE_KEY || keyCode === ENTER_KEY ) {
				this.selectItem( event );
			}
		},

		selectItem: function( event ) {
			this.selectItem( event );
		}
	}
} );
Lyte.Component.register( 'lyte-avatar-navigator-item', {
_template:"<template tag-name=\"lyte-avatar-navigator-item\"> <img src=\"{{src}}\" onload=\"{{action('hideIcon',event)}}\" title=\"\" alt=\"{{alt}}\" lt-prop-title=\"{{title}}\" lt-prop-tooltip-config=\"{{config}}\"> <div class=\"lyteAvatarLoadingCont\"> <template is=\"if\" value=\"{{ltPropLoadingIconYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"loadingIconYield\"></lyte-yield> </template><template case=\"false\"> <div class=\"{{ltPropLoadingIconClass}}\"></div> </template></template> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"attr","position":[3,1]},{"type":"if","position":[3,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropImage","ltPropLoadingIconYield","ltPropLoadingIconClass","ltPropSelectedClass"],

	data: function() {
		return {
			'ltPropImage': Lyte.attr( 'object', {} ),
			'ltPropLoadingIconYield': Lyte.attr( 'boolean', { 'default': false } ),
			'ltPropLoadingIconClass': Lyte.attr( 'string', { 'default': 'lyteAvatarLoading' } ),
			'ltPropSelectedClass': Lyte.attr( 'string', { 'default': '' } )
		};
	},

	imageObserver: function() {
		this.setSelected();
		this.setImageAttributes();
	}.observes( 'ltPropImage' ),

	init: function() {
		this.setParentComponent();
		this.setImageAttributes();
		this.setMetaInfo();
	},

	setMetaInfo: function() {
		var imageObject = this.getData( 'ltPropImage' );

		imageObject._node = this.$node;
		this.$node._imageIndex = imageObject._imageIndex
	},

	didConnect: function() {
		this.setSelected();
		this.setARIAProps();
	},

	setARIAProps: function() {
		var imageObj = this.getData( 'ltPropImage' ),
		parent = this.parent.component,
		ariaValue = parent.getData( 'ltPropAriaLabelValue' );

		if( ariaValue ) {
			this.$node.setAttribute( 'aria-label', this.getData( 'ltPropImage' )[ ariaValue ] );
		}

		this.$node.setAttribute( 'role', 'button' );
	},

	addSelectedClass: function() {
		var sel = this.getData( 'ltPropSelectedClass' ),
		imageObj = this.getData( 'ltPropImage' );

		if( sel ) {
			this.$node.classList.add( sel );
			this.selClass = sel;
			imageObj.isSelected = true;
			this.$node.setAttribute( 'aria-current', 'true' );
		}
		else {
			this.$node.classList.remove( this.selClass );
			this.selClass = '';
			imageObj.isSelected = false;
			this.$node.removeAttribute( 'aria-current' );
		}

	}.observes( 'ltPropSelectedClass' ),

	setParentComponent: function() {
		var parent = $L( this.$node ).closest( 'lyte-avatar-navigator' );

		this.parent = parent.get( 0 );
	},

	getLoadingIcon: function() {

		return this.$node.querySelector( '.lyteAvatarLoadingCont' );
	},

	setSelected: function() {
		var parent = this.parent.component,
		cls = parent.getData( 'ltPropSelectedClass' ),
		imageObj = this.getData( 'ltPropImage' );

		if( imageObj.isSelected ) {
			this.setData( 'ltPropSelectedClass', cls );
		}
	},

	setImageAttributes: function() {
		var parent = this.parent.component, 
		urlValue = parent.getData( 'ltPropUrlValue' ),
		tooltipValue = parent.getData( 'ltPropTooltipValue' ),
		imageObj = this.getData( 'ltPropImage' ) || {},
		isString = parent.getData( 'isString' ),
		id = ( imageObj || {} ).id,
		altValue = parent.getAltValue(),
		disabled = ( imageObj || {} ).disabled,
		config = parent.getData( 'ltPropTooltip' );

		if( imageObj[ urlValue ] ) {
			this.setData( 'src', imageObj[ urlValue ] );
		}

		if( !isNaN( id ) ) {
			this.$node.setAttribute( 'data-image-id', id );
		}

		this.setData( 'alt', imageObj[ altValue ] );

		if( imageObj.disabled ) {
			this.$node.setAttribute( 'aria-disabled', 'true' );
			this.$node.setAttribute( 'disabled', 'true' );
		}

		if( tooltipValue && ( imageObj || {} )[ tooltipValue ] ) {
			this.setData( 'title', imageObj[ tooltipValue ] );
		}

		this.setData( 'config', config ); 
	},

	actions: {
		hideIcon: function( event ) {
			if( !this.$node ) {
				return ;
			}

			var loadingIcon = this.getLoadingIcon();

			loadingIcon.style.display = 'none';
		}
	}
} );