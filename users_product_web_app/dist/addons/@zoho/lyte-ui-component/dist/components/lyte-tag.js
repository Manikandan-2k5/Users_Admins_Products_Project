Lyte.Component.register( "lyte-tag", {
_template:"<template tag-name=\"lyte-tag\"> <lyte-dropdown on-before-show=\"{{method('preventOpen')}}\" on-before-add=\"{{method('validate')}}\" on-add=\"{{method('onItemSelected')}}\" on-remove=\"{{method('onItemRemoved')}}\" on-before-remove=\"{{method('storeRemovedItem')}}\" lt-prop-type=\"multisearch\" lt-prop-no-result=\"{{ltPropNoResult}}\" lt-prop-options=\"{{standardizedOptions}}\" lt-prop-user-value=\"{{ltPropUserValue}}\" lt-prop-system-value=\"{{ltPropSystemValue}}\" lt-prop-selected-list=\"{{standardizedList}}\" lt-prop-disabled=\"{{ltPropDisabled}}\" lt-prop=\"{{stringify(ltPropDropdown)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-button> <div class=\"lyteMultiSelect\"> <ul class=\"lyteMultipleSelect\"> <template is=\"if\" value=\"{{ltPropButtonYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"button\" lyte-options-selected=\"{{standardizedList}}\"></lyte-yield> </template><template case=\"false\"> <template is=\"for\" items=\"{{standardizedList}}\" item=\"item\" index=\"index\"> <li data-value=\"{{item[ltPropSystemValue]}}\"> <span class=\"lyteTagItem\">{{item[ltPropUserValue]}}</span> <lyte-drop-remove class=\"lyteCloseIcon\"></lyte-drop-remove> </li> </template> </template></template> <li class=\"lyteTagInputLi\"> <input placeholder=\"{{ltPropPlaceholder}}\" class=\"lyteDropdownTextField\" type=\"text\" oninput=\"{{action('searchItemsOnInput',event)}}\" onblur=\"{{action('searchItemsOnBlur',event)}}\" onkeydown=\"{{action('handleOtherKeys',event)}}\" disabled=\"{{ltPropDisabled}}\"> </li> </ul> </div> </lyte-drop-button> <template is=\"if\" value=\"{{ltPropBoxYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"box\" lyte-options=\"{{lyteOptions}}\"></lyte-yield> </template><template case=\"false\"> <lyte-drop-box> <lyte-drop-body> <template is=\"for\" items=\"{{lyteOptions}}\" item=\"item\" index=\"index\"> <template is=\"if\" value=\"{{lyteUiOptGroupCheck(item)}}\"><template case=\"true\"> <lyte-drop-group> <lyte-drop-label>{{lyteUiReturnOnlyKey(item)}}</lyte-drop-label> <template is=\"for\" items=\"{{lyteUiReturnValueBy(item,lyteUiReturnOnlyKey(item))}}\" item=\"subitem\" index=\"indexval\"> <lyte-drop-item data-value=\"{{subitem[ltPropSystemValue]}}\"> <lyte-tag-label> {{subitem[ltPropUserValue]}} </lyte-tag-label> <template is=\"if\" value=\"{{subitem[ltPropDescriptionValue]}}\"><template case=\"true\"> <lyte-tag-description> {{subitem[ltPropDescriptionValue]}} </lyte-tag-description> </template></template> </lyte-drop-item> </template> </lyte-drop-group> </template><template case=\"false\"> <lyte-drop-item data-value=\"{{item[ltPropSystemValue]}}\"> <lyte-tag-label> {{item[ltPropUserValue]}} </lyte-tag-label> <template is=\"if\" value=\"{{item[ltPropDescriptionValue]}}\"><template case=\"true\"> <lyte-tag-description> {{item[ltPropDescriptionValue]}} </lyte-tag-description> </template></template> </lyte-drop-item> </template></template> </template> </lyte-drop-body> </lyte-drop-box> </template></template> </template> </lyte-dropdown> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1,1,1,1]},{"type":"if","position":[1,1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,3]}]}]}},"default":{}},{"type":"attr","position":[1,1,1,3,1]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"for","position":[1,3],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}],
_observedAttributes :["ltPropOptions","ltPropUserValue","ltPropSystemValue","ltPropDescriptionValue","ltPropSearchKeys","ltPropSelectedList","ltPropDelimiters","ltPropNoResult","ltPropDropdown","ltPropPlaceholder","ltPropEvent","ltPropCaseSensitive","ltPropAddNewItems","ltPropBoxYield","ltPropButtonYield","ltPropExternalSearch","ltPropPreventDuplicate","ltPropType","ltPropDisabled","ltPropAutoComplete","ltPropDuplicateClass","standardizedList","standardizedOptions","randId"],

	data: function() {
		return {
			'ltPropOptions': Lyte.attr( 'array', { 'default': [] } ),

			'ltPropUserValue': Lyte.attr( 'string', { 'default': 'name' } ),

			'ltPropSystemValue': Lyte.attr( 'string', { 'default': 'value' } ),

			'ltPropDescriptionValue': Lyte.attr( 'string', { 'default': '' } ),

			'ltPropSearchKeys': Lyte.attr( 'array', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'searchKeys', [] ) 
			} ),

			'ltPropSelectedList': Lyte.attr( 'array', { 'default': [] } ),

			'ltPropDelimiters': Lyte.attr( 'array', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'delimiters', [ ',', 'Enter' ] ) 
			} ),

			'ltPropNoResult': Lyte.attr( 'string', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'noResult', _lyteUiUtils.i18n( 'no.results.found' ) ) 
			} ),

			'ltPropDropdown': Lyte.attr( 'object', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'dropdown', {} ) 
			} ),

			'ltPropPlaceholder': Lyte.attr( 'string', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'placeholder', '' ) 
			} ),

			// ltPropEvent can be: input or click
			'ltPropEvent': Lyte.attr( 'string', {
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'event', 'input' )
			} ),

			'ltPropCaseSensitive': Lyte.attr( 'boolean', { 
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'caseSensitive', true )
			} ),

			'ltPropAddNewItems': Lyte.attr( 'boolean', {
				'default': _lyteUiUtils.resolveDefaultValue( 'lyte-tag', 'addNewItems', true )
			} ),

			'ltPropBoxYield': Lyte.attr( 'boolean', {
				'default': false
			} ),

			'ltPropButtonYield': Lyte.attr( 'boolean', {
				'default': false
			} ),

			'ltPropExternalSearch': Lyte.attr( 'boolean', { 
				'default': false 
			} ),

			'ltPropPreventDuplicate': Lyte.attr( 'boolean', { 
				'default': false 
			} ),

			'ltPropType': Lyte.attr( 'string', {
				'default': 'dropdown'
			} ),

			'ltPropDisabled': Lyte.attr( 'boolean', {
				'default': false
			} ),

			'ltPropAutoComplete': Lyte.attr( 'boolean', { 
				'default': true
			} ),

			'ltPropDuplicateClass': Lyte.attr( 'string', {
				'default': ''
			} ),

			'standardizedList': Lyte.attr( 'array', {
				'default': []
			} ),

			'standardizedOptions': Lyte.attr( 'array', {
				'default': []
			} ),

			'randId': Lyte.attr( 'number', {
				'default': 0
			} )
		}		
	},

	addDisabledClass: function() {
		var disabled = this.getData( 'ltPropDisabled' );

		if( disabled ) {
			this.$node.classList.add( 'lyteTagDisabled' );
		}
		else {
			this.$node.classList.remove( 'lyteTagDisabled' );
		}

	}.observes( 'ltPropDisabled' ).on( 'didConnect' ),

	didConnect: function() {
		var that = this;

		this.setInputWidthBasedOnPlaceHolder();
		this.getDropBox().classList.add( 'lyteTagDropdown' );
		this.toggleDropIcon();

		this.$node.reset = function() {
			that.setData( 'ltPropSelectedList', [] );
			that.setData( 'standardizedList', [] );
		}

		this.$node.updateOptions = function( optionsArr ) {
			var variableToStoreInside = 'standardizedOptions'; 

			that.standardizeObject( optionsArr, variableToStoreInside ); 
		}

		this.$node.updateList = function( selectedList ) {
			var variableToStoreInside = 'standardizedList'; 

			that.standardizeObject( selectedList, variableToStoreInside ); 
		}
	},

	setInputWidthBasedOnPlaceHolder: function() {
		var placeholder = ( this.getData( 'ltPropPlaceholder' ) || '' ).trim(),
		input = this.getInput();

		if( placeholder.length === 0 ) {
			this.setInputWidthForZeroContent();
		}
		else {
			input.style.width = placeholder.length + 'ch';
		}
	},

	setInputWidthForZeroContent: function() {
		var input = this.getInput();

		input.style.width = '5ch';
	},

	toggleDropIcon: function() {
		var options = this.getData( 'standardizedOptions' ) || [];

		if( options.length === 0 ) {
			this.getDropdown().classList.add( 'lyteTagRemoveIcon' );
		}
		else {
			this.getDropdown().classList.remove( 'lyteTagRemoveIcon' );
		}
	},

	filterItems: function( value ) {
		if( this.isInputType() ) {
			return ;
		}

		var visibleItems = this.getVisibleItems( value );

		this.hideItems();
		this.showItems( visibleItems );
		this.toggleNoResults();
	},

	hideItems: function() {
		var box = this.getDropBox(),
		items = box.querySelectorAll( 'lyte-drop-item' ),
		groups = box.querySelectorAll( 'lyte-drop-group' );

		items.forEach( function( item ) {
			item.classList.add( 'lyteTagHidden' );
		} );

		groups.forEach( function( group ) {
			group.classList.add( 'lyteTagGroupHidden' );
		} );
	},

	showItems: function( resultArray ) {
		var that = this;

		resultArray = resultArray || this.getDropBox().querySelectorAll( 'lyte-drop-item' );

		resultArray.forEach( function( item ) {
			item.classList.remove( 'lyteTagHidden' );
			that.showOptGroup( item );
		} );
	},

	showOptGroup: function( item ) {
		var parent = item.parentElement;

		if( item.classList.contains( 'lyteDropdownActive' ) ) {
			return ;
		}

		if( parent && parent.tagName === 'LYTE-DROP-GROUP' ) {
			parent.classList.remove( 'lyteTagGroupHidden' );
		}
	},

	getVisibleItems: function( value ) {
		var result = this.filterOptions( value ), visibleItems = [], that = this;

		result.forEach( function( arrItem ) {
			visibleItems.push( that.getDropItem( arrItem ) );
		} ); 

		return visibleItems;
	},

	filterOptions: function( value ) {
		var options = this.getData( 'standardizedOptions' ) || [], that = this;

		return this.linearize( options ).filter( function( option ) {
			return that.isValid( option, value );
		} );
	},

	linearize: function( options ) {
		var res = [];

		for( var i = 0; i < options.length; i++ ) {
			if( this.isOptGroup( options[ i ] ) ) {
				res = res.concat( options[ i ][ this.getOptGroupKey( options[ i ] ) ] );
			}
			else {
				res.push( options[ i ] );
			}
		}

		return res;
	},

	isOptGroup: function( group ) {
		if( typeof group === 'string' ) {
			return false;
		}

		group = group || {};

		return Object.keys( group ).length === 1;
	},

	isValid: function( option, value ) {
		var keys = this.getData( 'ltPropSearchKeys' ) || [], that = this;

		if( keys.length === 0 ) {
			keys.push( this.getData( 'ltPropUserValue' ) );
		}

		return keys.some( function( key ) {
			return that.doesMatch( option[ key ], value );
		} );
	},

	doesMatch: function( objectValue, value ) {
		objectValue = this.resolveCase( objectValue );
		value = this.resolveCase( value );

		return !!~objectValue.indexOf( value );
	},

	resolveCase: function( str ) {
		var isCaseSensitive = this.getData( 'ltPropCaseSensitive' );

		if( !isCaseSensitive ) {
			str = ( str || '' ).toLowerCase();
		}

		return str;
	},

	getDropItem: function( arrItem ) {
		var sysValue = this.getData( 'ltPropSystemValue' ),
		dataValue = arrItem[ sysValue ];

		return this.getDropBox().querySelector( 'lyte-drop-item[data-value="' + dataValue + '"]' );
	},

	toggleNoResults: function() {
		if( this.hasVisibleItems() ) {
			this.hideNoResults();
		}
		else {
			this.showNoResults();
		}
	},

	hasVisibleItems: function() {
		return this.getDropBox().querySelectorAll( 'lyte-drop-item:not(.lyteTagHidden):not(.lyteDropdownActive)' ).length > 0;
	},

	showNoResults: function() {
		var noResults = this.getNoResults();

		noResults.style.display = 'block';
	},

	hideNoResults: function() {
		var noResults = this.getNoResults();

		noResults.style.display = 'none';
	},

	getNoResults: function() {
		return this.getDropBox().querySelector( '.lyteDropdownNoResult' );
	},

	addToSelected: function( sel ) {
		var sysValue = this.getData( 'ltPropSystemValue' ),
		userValue = this.getData( 'ltPropUserValue' );

		if( !this.shouldAddTag( sel[ sysValue ], sel[ userValue ] ) ) {
			return ;
		}

		this.preventListObserver = true;
		this.pushIntoList( sel );

		// Manually add to standardized list because we have prevented inference observer which causes entire list re render

		this.addToStandardizedList( sel );
		this.preventListObserver = false;

		return true;
	},

	pushIntoList: function( sel ) {
		var stringType = this.getData( 'stringType' ),
		sysValue = this.getData( 'ltPropSystemValue' ),
		valueToPush = stringType ? sel[ sysValue ] : sel;

		Lyte.arrayUtils( this.getData( 'ltPropSelectedList' ), 'push', valueToPush );
	},

	addToStandardizedList: function( sel ) {
		Lyte.arrayUtils( this.getData( 'standardizedList' ), 'push', sel );
	},

	clearInput: function() {
		var input = this.getInput(), that = this;

		input.value = '';

		setTimeout( function() {
			that.filterItems( '' );	
		}, 0 );
	},

	processInput: function( isBlur ) {
		var tags = this.getTags(),
		length = tags.length, that = this;

		if( !isBlur 
			&& length === 1 
			&& !this.isDelimiter( this.lastTypedChar() ) 
		) {
			this.filterItems( tags[ 0 ] );
		}
		else {
			tags.forEach( function( tag, index )  {
				that.filterItems( tag );
				that.buildTag( tag );
			} );

			this.showItems();
			this.toggleNoResults();
		}
	},

	getTags: function() {
		var rdelimiter = this.buildDelimiterRegex(),
		value = this.getInputValue(), result = [];

		value.split( rdelimiter ).forEach( function( item ) {
			item = item.trim();

			if( item.length ) {
				result.push( item );
			}
		} );

		return result;
	},

	buildDelimiterRegex: function() {
		var separators = this.getData( 'ltPropDelimiters' ) || [],
		res = '[';

		separators.forEach( function( item ) {

			if( item.toLowerCase() === 'enter' ) {
				item = '\n';
			}
			res += item;
		} );

		res += ']'

		return new RegExp( res, 'g' );
	},

	isDelimiter: function( key ) {
		var delimiters = this.getData( 'ltPropDelimiters' );

		return !!~delimiters.indexOf( key );
	},

	lastTypedChar: function() {
		return this.getNonTrimmed().slice( -1 );
	},

	getNonTrimmed: function() {
		return this.getInput().value;
	},

	buildTag: function( value ) {
		var box = this.getDropBox(),
		// TODO: Maybe this has something to do with lyteDropdownSelection
		firstItem = this.getHighLightedItem(),
		userValue = this.getData( 'ltPropUserValue' ),
		shouldBuildItem = this.getData( 'ltPropAddNewItems' ),
		canAutoComplete = this.getData( 'ltPropAutoComplete' ),
		isAlreadySelected,
		sel;

		if( firstItem && ( canAutoComplete || !this.isAutoCompleted( firstItem, value ) ) ) {
			sel = this.getObjFromOptions( firstItem );
		}
		else if( shouldBuildItem ) {
			sel = this.buildObjManually( value );
		}

		if( sel ) {
			isAlreadySelected = this.isAlreadySelected( sel[ userValue ] );

			if( this.addToSelected( sel ) ) {
				/* You can only add a duplicate item through observer or by typing in a duplicate item.
				You can't select an already selected item - so don't have to add in  onitemselected */
				this.addDuplicateItemInfo( sel, isAlreadySelected );
				this.callAddMethod( sel, isAlreadySelected );
			}

			/* We need to reposition dropdown because items that are not present in the options list can be added and that would not fire the setCss
			No more mutationObserver to detect these changes */
			this.repositionDropdown();
		}

		this.clearInput();
	},

	addDuplicateItemInfo: function( obj, isAlreadySelected ) {
		var duplicateClass = this.getData( 'ltPropDuplicateClass' ),
		addedTag;

		if( duplicateClass && isAlreadySelected ) {
			addedTag = this.getAddedTagElement( obj );

			addedTag.classList.add( duplicateClass );
			addedTag.setAttribute( 'data-duplicate', 'true' );
		}
	},

	isAutoCompleted: function( item, value ) {
		var itemObj = this.getObjFromOptions( item ) || {},
		userValue = this.getData( 'ltPropUserValue' );

		return itemObj[ userValue ] !== value;
	},

	getObjFromOptions: function( item ) {
		var options = this.getData( 'standardizedOptions' ),
		dataValue = item.getAttribute( 'data-value' );

		return this.findObjInArray( options, dataValue );
	},

	findObjInArray: function( arr, value ) {
		arr = arr || [];
		value = ( value || '' ).trim();

		var sysValue = this.getData( 'ltPropSystemValue' );

		for( var i = 0; i < arr.length; i++ ) {

			if( this.isOptGroup( arr[ i ] ) ) {
				var ret = this.findObjInArray( arr[ i ][ this.getOptGroupKey( arr[ i ] ) ], value );

				if( ret ) {
					return ret;
				}
			}

			else if( ( arr[ i ][ sysValue ] + "" ) === value ) {
				return arr[ i ];
			}
		}
	},

	getOptGroupKey: function( arr ) {
		return Object.keys( arr || {} )[ 0 ];
	},

	buildObjManually: function( value ) {
		var userValue = this.getData( 'ltPropUserValue' ),
		sysValue = this.getData( 'ltPropSystemValue' ), obj = {};

		if( this.getMethods( 'onTagCreation' ) ) {
			obj = this.executeMethod( 'onTagCreation', value );
		}
		else {
			obj[ userValue ] = value;
			obj[ sysValue ] = value + this.generateId();
		}

		return obj;
	},
	
	generateId: function() {
		var id = this.getData( 'randId' );

		this.setData( 'randId', id + 1 );
		
		return id;
	},

	repositionDropdown: function() {
		this.getDropdown().resetPosition();
	},

	toggleDropdown: function() {
		var value = this.getInputValue();

		if( value.length === 0 ) {
			this.hideDropdown();
		}
		else {
			this.showDropdown();
		}
	},

	showDropdown: function() {
		if( this.getData( 'ltPropEvent' ) !== 'input' ) {
			return ;
		}

		this.getDropdown().open();
	},

	hideDropdown: function() {
		if( this.getData( 'ltPropEvent' ) !== 'input' ) {
			return ;
		}

		this.getDropdown().close();
	},

	setInputWidth: function() {
		var value = this.getInputValue(),
		placeholder = ( this.getData( 'ltPropPlaceholder' ) || '' ).trim(),
		input = this.getInput();

		if( value.length < placeholder.length ) {
			this.setInputWidthBasedOnPlaceHolder();
		}
		else if( value.length === 0 ) {
			this.setInputWidthForZeroContent();
		}
		else {
			input.style.width = value.length + 'ch';
		}
	},

	getDropBox: function() {
		return this.getDropdown().component.getDropBox();
	},

	getDropdown: function() {
		return this.$node.querySelector( 'lyte-dropdown' );
	},

	focusInput: function() {
		this.getInput().focus();
	},


	getInput: function() {
		return this.$node.querySelector( '.lyteDropdownTextField' ) || this.$node.querySelector( '.lyteTagTextField' );
	},

	getInputValue: function() {
		return this.getInput().value.trim();
	},

	getHighLightedItem: function() {
		return this.getDropBox().querySelector( 'lyte-drop-item.lyteDropdownSelection:not(.lyteTagHidden):not(.lyteDropdownActive)' ) || this.getDropBox().querySelector( 'lyte-drop-item:not(.lyteTagHidden):not(.lyteDropdownActive)' );
	},

	// TODO: Fix these crappy inference algorithms

	selectedTypeInference: function() {
		if( this.preventListObserver ) {
			return ;
		}

		if( this.stopSelectedStandardization ) {
			return ;
		}

		var selectedList = this.getData( 'ltPropSelectedList' ), variableToStoreInside = 'standardizedList';

		this.inferType( selectedList );

		if( !this.typeInferred ) {
			return ;
		}

		this.standardizeObject( selectedList, variableToStoreInside ); 

		this.stopSelectedStandardization = true;
	}.observes( 'ltPropSelectedList.[]' ).on( 'init' ),

	optionsTypeInference: function() {
		var options = this.getData( 'ltPropOptions' ), variableToStoreInside = 'standardizedOptions';

		if( this.stopOptionsStandardization ) {
			return ;
		}

		this.inferType( options );

		if( !this.typeInferred ) {
			return ;
		}

		this.standardizeObject( options, variableToStoreInside );

		this.stopOptionsStandardization = true;
	}.observes( 'ltPropOptions.[]' ).on( 'init' ),

	inferType: function( arr ) {
		var firstItem = ( arr || [] )[ 0 ], key;

		if( !firstItem ) {
			return ;
		}

		if( this.isOptGroup( firstItem ) ) {
			key = this.getOptGroupKey( firstItem );
			firstItem = firstItem[ key ];
		}

		this.setData( 'stringType', typeof firstItem === 'string' );
		this.typeInferred = true;
	},

	standardizeObject: function( arr, variableToStoreInside ) {
		var options = arr || [], res = [], userValue = this.getData( 'ltPropUserValue' ),
		sysValue = this.getData( 'ltPropSystemValue' ), obj;


		if( !this.getData( 'stringType' ) ) {
			this.setData( variableToStoreInside, this.cloneArray( arr ) );
			return ;
		}

		for( var i = 0; i < options.length; i++ ) {
			if( this.isOptGroup( options[ i ] ) ) {
				res[ this.getOptGroupKey( options[ i ] ) ] = this.standardize( options[ i ][ this.getOptGroupKey( options[ i ] ) ] );
			}
			else {
				obj = {};
				obj[ userValue ] = options[ i ];
				obj[ sysValue ] = options[ i ];

				res.push( obj );
			}
		}

		this.setData( variableToStoreInside, res ); 

	},

	cloneArray: function( arr ) {
		return arr.slice( 0 );
	}, 

	standardize: function( arr ) {
		var userValue = this.getData( 'ltPropUserValue' ), sysValue = this.getData( 'ltPropSystemValue' ), res = [], obj;

		arr = arr || [];

		for( var i = 0; i < arr.length; i++ ) {
			obj = {};
			obj[ userValue ] = arr[ i ][ userValue ];
			obj[ sysValue ] = arr[ i ][ sysValue ];

			res.push( obj );
		}

		return res;
	},

	toggleIcon: function() {
		this.toggleDropIcon();
	}.observes( 'ltPropOptions.[]' ),

	searchAvailableOptions: function( event ) {
		var that = this,
		// TODO: Fix this with ARIA
		isBlur = event.type === 'blur' /* && ( event.relatedTarget && event.relatedTarget.tagName !== 'LYTE-DROP-BODY' ) */;

		setTimeout( function() {
			that.processInput( isBlur );
			that.toggleDropdown();
		}, 0 );
		

		this.setInputWidth();
	},

	makeApiRequest: function( event ) {
		var that = this,
		// TODO: Fix this with ARIA
		isBlur = event.type === 'blur',
		promise;

		if( this.getMethods( 'onInput' ) ) {
			promise = this.executeMethod( 'onInput', event );
		}

		promise.then( function() {
			// that.processInput( isBlur );
			that.toggleDropdown();
		} );

		this.setInputWidth();
	},

	isAlreadySelected: function( typedLabel ) {
		typedLabel = ( typedLabel || '' ).trim();

		var selectedList = this.getData( 'standardizedList' ) || [],
		userValue = this.getData( 'ltPropUserValue' );

		for( var i = 0; i < selectedList.length; i++ ) {
			if( selectedList[ i ][ userValue ] === typedLabel ) {
				return selectedList[ i ];
			}
		}
	},

	shouldAddTag: function( dataValue, typedLabel ) {
		var preventDuplicates = this.getData( 'ltPropPreventDuplicate' ),
		parentWantsToPrevent;

		if( this.getMethods( 'onBeforeAdd' ) ) {
			parentWantsToPrevent = this.executeMethod( 'onBeforeAdd', dataValue ) === false;
		}

		if( parentWantsToPrevent || ( preventDuplicates && this.isAlreadySelected( typedLabel ) ) ) {
			if( this.getMethods( 'onItemRejected' ) ) {
				this.executeMethod( 'onItemRejected', typedLabel );
			}

			return false;
		}

		return true;
	},

	callAddMethod: function( obj, isAlreadySelected ) {
		var stringType = this.getData( 'stringType' ),
		sysValue = this.getData( 'ltPropSystemValue' ),
		valueToPass = stringType ? obj[ sysValue ] : obj;

		if( this.getMethods( 'onAdd' ) ) {
			this.executeMethod( 'onAdd', valueToPass, this.getAddedTagElement( obj ), !!isAlreadySelected );
		}
	},

	getAddedTagElement: function( addedItem ) {
		var sysValue = this.getData( 'ltPropSystemValue' ),
		dataValue = addedItem[ sysValue ],
		selectedItems = this.$node.querySelectorAll( 'li[data-value]' );

		for( var i = selectedItems.length - 1; i > -1; i-- ) {
			if( selectedItems[ i ].getAttribute( 'data-value' ) === ( dataValue + '' ) ) {
				return selectedItems[ i ];
			}
		}
	},

	callRemoveMethod: function() {
		var stringType = this.getData( 'stringType' ),
		userValue = this.getData( 'ltPropUserValue' ),
		isAlreadySelected = this.isAlreadySelected( this.removedItemLabel );

		if( this.getMethods( 'onRemove' ) ) {
			this.executeMethod( 'onRemove', this.removedItem, !!isAlreadySelected );
		}
	},

	removeLastSelectedItem: function() {
		var selectedItems = this.$node.querySelectorAll( '[data-value]' );

		if( selectedItems.length === 0 ) {
			return ;
		}

		selectedItems[ selectedItems.length - 1 ].querySelector( 'lyte-tag-remove' ).click();
	},

	isInputType: function() {
		return this.getData( 'ltPropType' ) === 'input';
	},

	removeFromList: function() {
		// TODO: Think about immutability and how you can leverage it to reduce the code here
		var removedItem = this.removedItem,
		selectedList = this.getData( 'ltPropSelectedList' ) || [],
		stringType = this.getData( 'stringType' ),
		index;


		for( var i = 0; i < selectedList.length; i++ ) {
			if( selectedList[ i ] === removedItem ) {
				index = i;
				break;
			}
		}

		if( !isNaN( index ) ) {
			this.preventListObserver = true;
			Lyte.arrayUtils( selectedList, 'removeAt', index, 1 );

			// We are not going to use the observer to sync our standardizedList and ltPropSelectedList(inferenceObserver does it)
			// because that sync destroys all the elements and creates a new list
			// Lyte.arrayUtils( this.getData( 'standardizedList' ), 'removeAt', index, 1 );
			this.preventListObserver = false;
		}
	},

	addToList: function( obj ) {
		var stringType = this.getData( 'stringType' );


		this.preventListObserver = true;
		this.pushIntoList( obj );
		this.preventListObserver = false;
	},

	searchItems: function( event ) {
		var makeRequest = this.getData( 'ltPropExternalSearch' );

		if( makeRequest ) {
			this.makeApiRequest( event );
		}
		else {
			this.searchAvailableOptions( event );
		}
	},

	changeDuplicateInfo: function( itemThatGotRemoved ) {
		var duplicateRemoved = itemThatGotRemoved.getAttribute( 'data-duplicate' ) === 'true',
		labelThatGotRemoved = itemThatGotRemoved.textContent.trim(),
		firstDuplicateElement;
		
		if( duplicateRemoved ) {
			return ;
		}

		firstDuplicateElement = this.firstDuplicateElement( labelThatGotRemoved );

		this.removeDuplicateInfo( firstDuplicateElement );
	},

	removeDuplicateInfo: function( item ) {
		var duplicateClass = this.getData( 'ltPropDuplicateClass' );

		if( !item ) {
			return ;
		}

		item.removeAttribute( 'data-duplicate' );

		if( duplicateClass ) {
			item.classList.remove( duplicateClass );
		}
	},

	firstDuplicateElement: function( labelThatGotRemoved ) {
		var selectedItems = this.$node.querySelectorAll( 'li[data-value]' );

		for( var i = 0; i < selectedItems.length; i++ ) {
			if( selectedItems[ i ].textContent.trim() === labelThatGotRemoved ) {
				return selectedItems[ i ];
			}
		}
	},

	actions: {
		searchItemsOnBlur: function( event ) {
			if( !_lyteUiUtils._lyteTag.ignoreBlur ) {
				this.searchItems( event );
			}

			_lyteUiUtils._lyteTag.ignoreBlur = false;
		},

		searchItemsOnInput: function( event ) {
			this.searchItems( event );
		},

		handleOtherKeys: function( event ) {
			var key = event.key,
			value = this.getInputValue(),
			highLightedItem = this.getHighLightedItem();

			// TODO: Need to remove key === 'Enter'
			if( ( key === ' ' || key === 'Enter' ) && this.isDelimiter( key ) && !highLightedItem && value.length !== 0 ) {
				this.buildTag( this.getInputValue() );
				event.preventDefault();
			}
		}
	},

	methods: {
		storeRemovedItem: function( event, removedValue ) {
			var stringType = this.getData( 'stringType' ),
			obj = this.findObjInArray( this.getData( 'standardizedList' ), removedValue ),
			sysValue = this.getData( 'ltPropSystemValue' ),
			userValue = this.getData( 'ltPropUserValue' );

			this.removedItem = stringType ? obj[ sysValue ] : obj;
			this.removedItemLabel = obj[ userValue ];
		},
		// Fired only when the user selects an item from the list with the mouse or keyboard
		validate: function( event, dataValue, totalSelected, dropdownComponent, dropItem ) {
			this._isAlreadySelected = this.isAlreadySelected( dropItem.textContent.trim() );

			return this.shouldAddTag( dataValue, dropItem.textContent.trim() );
		},

		onItemSelected: function( event, selectedValue, totalSelected, dropComponent, dropItem ) {
			var selectedObj = this.findObjInArray( this.getData( 'standardizedOptions' ), selectedValue );

			this.addToList( selectedObj );
			this.toggleNoResults();
			this.clearInput();
			this.hideDropdown();
			this.callAddMethod( selectedObj, this._isAlreadySelected );
		},

		onItemRemoved: function( event, currentRemovedItem, totalSelected, dropdownComponent, removalMethod, dropItem ) {
			this.changeDuplicateInfo( dropItem );
			this.removeFromList();
			this.toggleNoResults();
			this.clearInput();
			this.hideDropdown();
			this.callRemoveMethod();
		},

		preventOpen: function( event ) {
			var preventOpenThroughCallback;

			this.focusInput();

			if( this.isInputType() ) {
				return false;
			}

			if( this.getMethods( 'onBeforeShow' ) ) {
				preventOpenThroughCallback = this.executeMethod( 'onBeforeShow', event ) === false;
			}

			if( preventOpenThroughCallback ) {
				return false;
			}
			
			if( this.getData( 'ltPropEvent' ) !== 'input' ) {
				return ;
			}

			var value = this.getInputValue(),
			options = this.getData( 'standardizedOptions' );

			if( value.length === 0 || options.length === 0 ) {
				return false;
			}
		}
	}
} );

_lyteUiUtils._lyteTag = {
	isTagItemClicked: function( element ) {
		var box = $L( element ).closest( 'lyte-drop-box' ).get( 0 ),
		dropdown, tag; 

		if( box ) {
			dropdown = box.origindd;
			tag = $L( dropdown ).closest( 'lyte-tag' ).get( 0 );
		}

		if( tag ) {
			return true;
		}

		return false;
	}
};

document.addEventListener( 'mousedown', function( event ) {
	var target = event.target;

	_lyteUiUtils._lyteTag.ignoreBlur = _lyteUiUtils._lyteTag.isTagItemClicked( target );
}, true );