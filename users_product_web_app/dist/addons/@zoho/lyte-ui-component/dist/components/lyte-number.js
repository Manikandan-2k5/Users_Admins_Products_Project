/**
 * Lyte number is used to get number input from user
 * @component lyte-number
 * @version 2.2.3
 * @utility focus,blur,click,select
 * @methods beforeRender,afterRender,onValueChange,onBeforePaste,onFocus,onBlur
 */


 // todo ==> prefix / suffix add, thousand separator

Lyte.Component.register("lyte-number", {
_template:"<template tag-name=\"lyte-number\"> <template is=\"if\" value=\"{{ltPropLabel}}\"><template case=\"true\"> <label for=\"{{ltPropId}}\" class=\"lyteLabel\">{{ltPropLabel}}</label> </template></template> <div class=\"lyteField\"> <input type=\"text\" name=\"{{ltPropName}}\" class=\"{{ltPropClass}}\" id=\"{{ltPropId}}\" placeholder=\"{{ltPropPlaceholder}}\" value=\"{{lbind(ltPropValue)}}\" onkeydown=\"{{action('keydown',event,this)}}\" onpaste=\"{{action('paste',event,this)}}\" oninput=\"{{action('input',event,this)}}\" onfocus=\"{{action('focus',event,this)}}\" onblur=\"{{action('blur',event,this)}}\" onwheel=\"{{action('wheel',event,this)}}\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" style=\"{{ltPropStyle}}\" title=\"{{ltPropInputTitle}}\" pattern=\"{{ltPropPattern}}\" autocomplete=\"{{ltPropAutocomplete}}\" tabindex=\"{{ltPropTabIndex}}\"> </div> <template is=\"if\" value=\"{{expHandlers(ltPropError,'&amp;&amp;',errorMessage)}}\"><template case=\"true\"> <span class=\"lyteNumberErrorMessage\">{{errorMessage}}</span> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]}]}},"default":{}},{"type":"attr","position":[3,1],"attr":{"style":{"name":"style","dynamicValue":"ltPropStyle"}}},{"type":"attr","position":[5]},{"type":"if","position":[5],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}],
_observedAttributes :["ltPropValue","ltPropMaxlength","ltPropName","ltPropClass","ltPropId","ltPropPlaceholder","ltPropIgnoreSymbols","ltPropStep","ltPropInverse","ltPropWheel","ltPropMax","ltPropMin","ltPropAutofocus","ltPropDisabled","ltPropReadonly","ltPropStyle","ltPropInputTitle","ltPropPattern","ltPropUpdateDelay","ltPropLabel","ltPropAutocomplete","ltPropAppearance","ltPropDirection","ltPropValidateOnInput","ltPropAutoUpdate","ltPropDecimal","ltPropIncrement","ltPropAria","ltPropAriaAttributes","ltPropRemoveAtCursor","ltPropFireOnInit","ltPropValidateOnEmpty","ltPropRestrict","ltPropInputWrapperClass","ltPropTabIndex","ltPropValidation","ltPropMandatory","ltPropTriggerValidation","ltPropErrorMessage","ltPropDefaultErrorMessage","ltPropError","ltPropClearValidation","errorMessage"],


	didConnect : function(){
		[ 'focus', 'blur', 'click', 'select' ].forEach( function( item ){
	        this.$node[ item ] = function( arg ){
	            this.$node.querySelector( 'input' )[item]( arg );
	        }.bind( this )      
	    }.bind( this ) ) 
		if( this.data.ltPropAutofocus ){
			this.$node.focus();
		}
		this.getMethods( 'afterRender' ) && this.executeMethod( 'afterRender', this.$node );
	},

	init : function(){
		this.getMethods( 'beforeRender' ) && this.executeMethod( 'beforeRender', this.$node );
	},

	didDestroy : function(){
		clearTimeout( this._time );
	},

	data : function(){
		return {
			/**
			 * @componentProperty {string} ltPropValue=''
			 * @version 2.2.3
			 */

			ltPropValue : Lyte.attr( 'string', { default : '' } ),
			/**
			 * @componentProperty {number} ltPropMaxlength
			 * @version 2.2.3
			 */
			ltPropMaxlength : Lyte.attr( 'number', { default : undefined } ),
			/**
			 * @componentProperty {string} ltPropName
			 * @version 2.2.3
			 */
			ltPropName : Lyte.attr( 'string', { default : undefined } ),
			/**
			 * @componentProperty {string} ltPropClass
			 * @version 2.2.3
			 */
			ltPropClass : Lyte.attr( 'string', { default : undefined } ),
			/**
			 * @componentProperty {string} ltPropId
			 * @version 2.2.3
			 */
			ltPropId : Lyte.attr( 'string', { default : undefined } ),
			/**
			 * @componentProperty {string} ltPropPlaceholder=''
			 * @version 2.2.3
			 */
			ltPropPlaceholder:Lyte.attr('string',{default :''}),
			/**
			 * @componentProperty {boolean} ltPropIgnoreSymbols=false
			 * @version 2.2.3
			 */
			ltPropIgnoreSymbols : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {number} ltPropStep=1
			 * @version 2.2.3
			 */
			ltPropStep : Lyte.attr( 'number', { default : 1 } ),
			/**
			 * @componentProperty {boolean} ltPropInverse=false
			 * @version 2.2.3
			 */
			ltPropInverse : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropWheel=true
			 * @version 2.2.3
			 */
			ltPropWheel : Lyte.attr( 'boolean', { default : true } ),
			/**
			 * @componentProperty {number} ltPropMax
			 * @version 2.2.3
			 */
			ltPropMax : Lyte.attr( 'number', { default : undefined } ),
			/**
			 * @componentProperty {number} ltPropMin
			 * @version 2.2.3
			 */
			ltPropMin : Lyte.attr( 'number', { default : undefined } ),
			/**
			 * @componentProperty {boolean} ltPropAutofocus=false
			 * @version 2.2.3
			 */
			ltPropAutofocus : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropDisabled=false
			 * @version 2.2.3
			 */
			ltPropDisabled : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropReadonly=false
			 * @version 2.2.3
			 */
			ltPropReadonly : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {string} ltPropStyle=''
			 * @version 2.2.3
			 */
			ltPropStyle : Lyte.attr( 'string', { default : '' } ),
			/**
			 * @componentProperty {string} ltPropInputTitle=''
			 * @version 2.2.3
			 */
			ltPropInputTitle : Lyte.attr( 'string', { default : undefined } ),
			/**
			 * @componentProperty {string} ltPropPattern='.+'
			 * @version 2.2.3
			 */
			ltPropPattern : Lyte.attr( 'string', { default : '.+' } ),
			/**
			 * @componentProperty {number} ltPropUpdateDelay=250
			 * @version 2.2.3
			 */
			ltPropUpdateDelay : Lyte.attr( 'number', { default : 250 } ),
			/**
			 * @componentProperty {string} ltPropLabel=''
			 * @version 2.2.3
			 */
			ltPropLabel : Lyte.attr( 'string', { default : '' } ),
			/**
			 * @componentProperty {on | off} ltPropAutocomplete=off
			 * @version 2.2.3
			 */
			ltPropAutocomplete : Lyte.attr( 'string', { default : 'off' } ),
			/**
			 * @componentProperty {box | flat} ltPropAppearance=box
			 * @version 2.2.3
			 */
			ltPropAppearance : Lyte.attr( 'string', { default : 'box' } ),
			/**
			 * @componentProperty {vertical | horizontal} ltPropDirection=vertical
			 * @version 2.2.3
			 */
			ltPropDirection : Lyte.attr( 'string', { default : 'vertical' } ),
			/**
			 * @componentProperty {boolean} ltPropValidateOnInput=false
			 * @version 2.2.3
			 */
			ltPropValidateOnInput : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropAutoUpdate=true
			 * @version 2.2.3
			 */
			ltPropAutoUpdate : Lyte.attr( 'boolean', { default : true } ),
			/**
			 * @componentProperty {string} ltPropDecimal=.
			 * @version 2.2.8
			 */
			ltPropDecimal : Lyte.attr( 'string', { default : '.' } ),
			/**
			 * @componentProperty {boolean} ltPropIncrement=true
			 * @version 2.2.9
			 */
			ltPropIncrement : Lyte.attr( 'boolean', { default : true } ),

			// aria
			/**
			 * @componentProperty {boolean} ltPropAria=false
			 * @version 3.1.0
			 */
            ltPropAria : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {object} ltPropAriaAttributes
			 * @default {}
			 * @version 3.1.0
			 */            
            ltPropAriaAttributes : Lyte.attr( 'object', { default : {}, watch : true } ),

            /**
			 * @componentProperty {object} ltPropRemoveAtCursor=false
			 * @version 2.2.15
			 */    
            ltPropRemoveAtCursor : Lyte.attr( 'boolean', { default : false } ),

			//test
			/**
			 * @componentProperty {object} ltPropFireOnInit=false
			 * @version 2.2.3
			 */    
			ltPropFireOnInit : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {object} ltPropValidateOnEmpty=true
			 * @version 2.2.3
			 */    
			ltPropValidateOnEmpty : Lyte.attr( 'boolean', { default : true } ),
			/**
			 * @componentProperty {string} ltPropRestrict
			 * @version 3.52.0
			 */ 
			ltPropRestrict : Lyte.attr( 'string' ),
			/**
			 * @componentProperty {string} ltPropInputWrapperClass
			 * @version 3.57.0
			 */ 
			ltPropInputWrapperClass : Lyte.attr( 'string', { default : "" } ),
			/**
			 * @componentProperty {string} ltPropTabIndex="0"
			 * @version 3.80.0
			 */ 
			ltPropTabIndex : Lyte.attr( 'string', { default : "0" } ),
			/**
			 * @componentProperty {string} ltPropValidation=""
			 * @version 3.86.0
			 */ 
			ltPropValidation : Lyte.attr( 'string', { default : "" } ),
			/**
			 * @componentProperty {boolean} ltPropMandatory=false
			 * @version 3.86.0
			 */ 
			ltPropMandatory : Lyte.attr( 'boolean',  { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropTriggerValidation=false
			 * @version 3.86.0
			 */ 
			ltPropTriggerValidation : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @typedef errorDef
			 * @property {string} minmax
			 * @property {string} mandatory
			 * @property {string} maxlength
			 * @property {string} pattern
			 */

			/**
			 * @componentProperty {errorDef} ltPropErrorMessage="{}"
			 * @version 3.86.0
			 */ 
			ltPropErrorMessage : Lyte.attr( 'object', { default : {} } ),
			/**
			 * @componentProperty {string} ltPropDefaultErrorMessage="Invalid input"
			 * @version 3.80.0
			 */ 
			ltPropDefaultErrorMessage : Lyte.attr( 'string', { default : "Invalid input" } ),

			// ltPropAutoCorrectDuration : Lyte.attr( 'number', { default : void 0 } ),
			/**
			 * @componentProperty {boolean} ltPropError=false
			 * @version 3.80.0
			 */ 
			ltPropError : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropClearValidation=false
			 * @version 3.80.0
			 */ 
			ltPropClearValidation : Lyte.attr( 'boolean', { default : false } ),


			errorMessage : Lyte.attr( 'string', { default : "" } )
		}		
	},

	valueObs : function( arg ){
		if( this._init ){
			return;
		}
		var isInit = !arg;
		if( !arg ){
			arg = { newValue : this.data.ltPropValue || '' };
		} else {
			arg.newValue = arg.newValue || "";
		}
		if( this._allowCallback ){
			delete this._allowCallback;
			this.getMethods( 'onValueChange' ) && this.executeMethod( 'onValueChange', arg, this.$node );
			return;
		}
		var newVal = arg.newValue, remove;

		if( isInit && !this.data.ltPropFireOnInit ){
			this._init = true;
		}

		remove = this.validate( newVal );
		if( remove ){
			this._valueUpdate( '' );
			delete this._init;
			return
		}
		newVal = this.maxLenValidation( newVal );
		if( ( this.data.ltPropValidateOnEmpty && !arg.newValue ) || arg.newValue ){
			newVal = this.maxMinCheck( newVal, true );
		}
		if( arg.newValue != newVal ){
			this._valueUpdate( newVal );
		} else if( !this._init ) {
			if( isInit && arg.newValue == newVal ){
				return;
			}
			this.getMethods( 'onValueChange' ) && this.executeMethod( 'onValueChange', arg, this.$node );
		}
		delete this._init;

	}.observes( 'ltPropValue' ).on( 'didConnect' ),

	maxMinOns : function(){
		this._valueUpdate( this.maxMinCheck( this.data.ltPropValue || '', true ) );
	}.observes( 'ltPropMax', 'ltPropMin' ),

	wrp_class_obs : function( arg ){
		var __data = this.data;
		arg = arg || { newValue : __data.ltPropInputWrapperClass };

		$L( this.$node ).addClass( arg.newValue ).removeClass( arg.oldValue || "" );

	}.observes( 'ltPropInputWrapperClass' ).on( 'didConnect' ),

	appearanceObs : function(){
		var __remove = "remove",
		__add = "add",
		__classList = this.$node.classList;

		if( /box/i.test( this.data.ltPropAppearance ) ){
			__remove = "add";
			__add = "remove";
		}

		__classList[ __add ]( 'lyteInput' );
		__classList[ __remove ]( 'lyteInputBox' );

	}.observes( 'ltPropAppearance' ).on( 'didConnect' ),

	directionObs : function(){
		var __remove = "remove",
		__add = "add",
		__classList = this.$node.classList;

		if( /vertical/i.test( this.data.ltPropDirection ) ){
			__add = "remove";
			__remove = "add";
		}

		__classList[ __add ]( 'horizontal' );
		__classList[ __remove ]( 'vertical' );
	}.observes( 'ltPropDirection' ).on( 'didConnect' ),

	disAbs : function(){
        this.$node.classList[ this.data.ltPropDisabled ? 'add' : 'remove' ]( 'lyteNumberDisabled' );
    }.observes( 'ltPropDisabled' ).on( 'didConnect' ),

    readAbs : function(){
        this.$node.classList[ this.data.ltPropReadonly ? 'add' : 'remove' ]( 'lyteNumberReadonly' );
    }.observes( 'ltPropReadonly' ).on( 'didConnect' ),

	increment : function( _this, isIncrement ){
		var value = _this.value || '0',
		newVal = ( Number( value ) + this.data.ltPropStep * ( isIncrement ? 1 : -1 ) ).toString();
		if( newVal == Infinity || newVal == -Infinity ){
			return;
		}

		var validation = this.data.ltPropValidation;

		if( !validation ){
			newVal = this.maxLenValidation( newVal );
			newVal = this.maxMinCheck( newVal, true );
		}

		_this.value = newVal;
		_this.selectionEnd = newVal.length;
		_this.selectionStart = newVal.length;
		this.data.ltPropAutoUpdate && this.valueUpdate( _this, validation == 'input' );
	},

	check_restrict : function( text, frm_paste ){
		var restrict = this.data.ltPropRestrict;

		if( restrict ){
			var regex = new RegExp( restrict, 'g' );
			if( frm_paste ){
				var __index = regex.exec( text );
				if( __index ){
					return text.slice( 0, __index.index );
				}
			} else {
				return text.replace( regex, "" );
			}
		}

		return text;
	},

	actions : {
		keydown : function( evt, _this ){
			var keyCode = evt.which || evt.keyCode, prevent,
			start = _this.selectionStart,
			end = _this.selectionEnd,
			inc = this.data.ltPropIncrement;

			if( keyCode == 8 ){
				if( start == end && end == 0 ){
					return;
				}
				this._prevent = true;
			} else if( inc && keyCode == 38 ){
				this.increment( _this, !this.data.ltPropInverse );
				prevent = true;
			} else if( inc && keyCode == 40 ){
				this.increment( _this, this.data.ltPropInverse );
				prevent = true;
			} 
			if( prevent ){
				evt.preventDefault();
			}
		},

		wheel : function( evt, _this ){
			var __data = this.data;
			if( __data.ltPropWheel && this._focused && !__data.ltPropDisabled && !__data.ltPropReadonly ){
				var __inverse = __data.ltPropInverse;

				if( evt.deltaY > 10 ){
					this.increment( _this, !__inverse );
				} else if( evt.deltaY < -10 ){
					this.increment( _this, __inverse );
				}
				evt.preventDefault();
			}
		},

		paste : function( evt, _this ){
			evt.preventDefault();

			var clip = evt.clipboardData || window.clipboardData,
			oldValue = _this.value,
			start = _this.selectionStart,
			end = _this.selectionEnd,
			__data = this.data,
			decimal = __data.ltPropDecimal,
			pasteText = this.check_restrict( clip.getData( 'text' ).trim().replace(/^(\'|\")|(\'|\")$/, '').replace( new RegExp('\[\^0-9e\\+\\-\\' + decimal + '\]', 'g' ), '' ), true ),
			newVal = oldValue.slice( 0, start ) + pasteText + oldValue.slice( end ),
			remove = this.validate( newVal ),
			num_value = Number( oldValue ),
			paste_len = pasteText.length,
			__inf = Infinity,
			validation = __data.ltPropValidation;

			if( remove ){
				newVal = this.convertToNo( newVal );
			}
			if( num_value == __inf || num_value == -__inf ){
				return;
			}
			if( this.getMethods( 'onBeforePaste' ) ){
				var ret = this.executeMethod( 'onBeforePaste', _this.value, clip.getData( 'text' ), newVal );
				if( ret != undefined ){
					newVal = ret;
					if( ret == false ){
						return;
					}
				} 
			}
			if( num_value == __inf || num_value == -__inf ){
				return;
			}

			if( !validation ){
				newVal = this.maxLenValidation( newVal );
				if( newVal || ( !newVal && __data.ltPropValidateOnEmpty ) ){
					newVal = this.maxMinCheck( newVal, true );
				}
			}

			_this.value = newVal;
			_this.selectionStart = end + paste_len;
			_this.selectionEnd = end + paste_len;

			__data.ltPropAutoUpdate && this._valueUpdate( _this.value, validation == 'input' );
		},

		input : function( evt, _this ){
			var prevent;
			if( this._prevent ){
				delete this._prevent;
				this.data.ltPropAutoUpdate && this.valueUpdate( _this );
				prevent = true;
			}
			var value = _this.value,
			oldValue = value,
			start = _this.selectionStart,
			end = _this.selectionEnd,
			remove = !prevent && this.validate( value ),
			minLenCheck,
			validation = this.data.ltPropValidation;

			if( remove ){
				__allow = true;
				if( /insertText/i.test( evt.inputType ) ){
					var evt_data = evt.data,
					newvalueISNo = parseFloat( evt_data ),
					__length = evt_data.length;

					if( !isNaN( newvalueISNo ) ){
						newvalueISNo = newvalueISNo.toString(); 
						value = value.slice( 0, end - __length ) + newvalueISNo + value.slice( end );
						end = end - __length + 1 + newvalueISNo.length;
					} else {
						value = value.slice( 0, end - __length ) + value.slice( end );
						end = end - __length + 1;
					}

					if( __allow = this.validate( value ) ){
						end--;
					}
				}

				if( __allow ){
					value = value.slice( 0, start - __length ) + value.slice( end );
				}
			} else {
				value = this.check_restrict( value );

				if( !validation ){
					var nw = this.maxLenValidation( value, start, end );
					if( nw != value ){
						if( this.data.ltPropRemoveAtCursor ){
							minLenCheck = true;
						}
						value = nw;
					}
					nw = this.maxMinCheck( value, this.data.ltPropValidateOnInput );
					if( nw != value ){
						value = nw;
						minLenCheck = false;
					}
				}
			}
			_this.value = value;
			if( remove ){
				_this.selectionStart = Math.min( end - 1, value.length );
				_this.selectionEnd = Math.min( end - 1, value.length )
			} else {
				if( oldValue != value ){
					if( minLenCheck ){
						_this.selectionStart = _this.selectionEnd = start - 1;
					} else {
						_this.selectionStart = _this.selectionEnd = value.length;
					}
				} else {
					_this.selectionStart = Math.min( start, value.length );
					_this.selectionEnd = Math.min( end, value.length );
				}
			}

			this.data.ltPropAutoUpdate && this.valueUpdate( _this, validation == 'input' );
		},

		focus : function( evt, _this ){
			this._focused = true;
			this.$node.classList.add( 'lyteInputFocus' );
			this.getMethods( 'onFocus' ) && this.executeMethod( 'onFocus', evt, this.$node );
		},

		blur : function( evt, _this ){
			delete this._focused; 
			this.$node.classList.remove( 'lyteInputFocus' );

			var validation = this.data.ltPropValidation;
			
			if( !validation && ( _this.value || ( !_this.value && this.data.ltPropValidateOnEmpty ) ) ){
				_this.value = this.maxMinCheck( _this.value, true );
			}

			this._valueUpdate( _this.value, true );

			if( validation == "blur" ){
				this.do_validation();
			}

			this.getMethods( 'onBlur' ) && this.executeMethod( 'onBlur', evt, this.$node );
		}
	},

	valueUpdate : function( _this, validate ){
		_this = _this || this.$node.getElementsByTagName( 'input' )[ 0 ];

		var __fn = function(){
			this._valueUpdate( _this.value );
			validate && this.do_validation();
		}.bind( this ),
		delay = this.data.ltPropUpdateDelay;

		if( delay == undefined ){
			__fn();
		} else {
			clearTimeout( this._time );
			this._time = setTimeout( __fn, delay );
		}
	},

	_valueUpdate : function( value, force ){

		var __old = value,
		cb = "onBeforeValueUpdate",
		new_value;

		if( force ){
			var endDotRegex = new RegExp( "\\" + this.data.ltPropDecimal + "$" );
			if( /e$/i.test( value ) ){
				value = value.replace( /e$/, '' );
			}
			if( endDotRegex.test( value ) ){
				value = value.replace( endDotRegex, '' );
			}
		}

		/**
		 * @method onBeforeValueUpdate
		 * @version 3.80.0
		 */

		if( this.getMethods( cb ) && ( new_value = this.executeMethod( cb, __old, value, this.$node ) ) == false ){
			return;
		}

		if( typeof new_value == 'string' ){
			value = new_value;
		}

		if( value != this.data.ltPropValue ){
			this._allowCallback = true;
			this.$node.ltProp( 'value', value );
		}
	},

	validate : function( value ){
		var numberRegex = /\d+/,
		eRegex = /e/ig,
		plusOrMinus = /(\+|\-)/g,
		decimal = this.data.ltPropDecimal,
		dotRegex = new RegExp("\\" + decimal, 'g'),
		eRegexIndex,
		remove;

		if( eRegex.test( value ) ){
			if( value.match( eRegex ).length > 1 ){
				remove = true;
			} if( /^e/i.test( value ) ){
				remove = true;
			} else {
				eRegexIndex = /e/ig.exec( value ).index;
				value = value.replace( eRegex, '' );
			}
		} 
		if( plusOrMinus.test( value ) ) {
			if( value.match( plusOrMinus ).length > 1 ){
				remove = true;
			} else if( !/^(\+|\-)/g.test( value ) ){
				remove = true;
			} else {
				value = value.replace( plusOrMinus, '' );
			}
		} 
		if( dotRegex.test( value ) ){
			if( value.match( dotRegex ).length > 1 || ( eRegexIndex != undefined && eRegexIndex < value.indexOf( decimal ) ) ){
				remove = true;
			} else if( ( /^(\+|\-)/g.test( value ) && value.indexOf( decimal ) == 1 && eRegexIndex == 2  ) || ( !/^(\+|\-)/g.test( value ) && value.indexOf( decimal ) == 0 && eRegexIndex == 1 ) ){ 
 				remove = true;
			} else {
				value = value.replace( dotRegex, '' );
			}
		}
		if( !remove && value.length ){
			remove = !/^\d+$/.test( value );
		}
		return remove;
	},

	maxLenValidation : function( value, start, end ){
		var maxLen = this.data.ltPropMaxlength,
		length = value.length, dotIndex,
		decimal = this.data.ltPropDecimal,
		removeAt = this.data.ltPropRemoveAtCursor;

		if( maxLen == undefined ){
			return value;
		}
		if( !this.data.ltPropIgnoreSymbols ){
			maxLen = maxLen + ( /^(\+|\-)/.test( value ) ? 1 : 0 );
			if( new RegExp("\\" + decimal ).test( value ) ){
				dotIndex = new RegExp("\\" + decimal, 'g').exec( value ).index;
				maxLen++;
			}
			if( /e/i.test( value ) ){
				var index = /e/i.exec( value ).index,
				power = value.slice( index + 1 ),
				parsedPow = parseInt( power );
				if( power.length ){
					length--;
					//if( dotIndex != undefined ){
						var lenAfterDot = dotIndex != undefined ? value.slice( dotIndex + 1, index ).length : 0;
						if( lenAfterDot <= parsedPow ){
							if( dotIndex != undefined ){
								length--;
								maxLen--;
							}
							length -= lenAfterDot;
						} 
						length -= power.length;
						length += parsedPow;
						if( length > maxLen ){
							if( parsedPow > ( length - maxLen ) ){
								return value.slice( 0, index ) + 'e' + ( parsedPow - ( length - maxLen ) );
							} else {
								if( removeAt && start != undefined && value.length > maxLen ){
									value = value.split( /e/i )[ 0 ];
									value = value.slice( 0, start - 1 ) + value.slice( end );
								} else {
									value = value.split( /e/i )[ 0 ].match( new RegExp('.{0,' + maxLen + '}') )[ 0 ];
								}

							}
						} 
						return value;
					// }
				} else {
					maxLen++;
				}
			} 
		}
		if( removeAt && start != undefined && value.length > maxLen ){
			return value.slice( 0, start - 1 ) + value.slice( end );
		}
		return value.match( new RegExp('.{0,' + maxLen + '}') )[ 0 ];
	},

	maxMinCheck : function( value, allowMin ){
		var initial = value,
		max = this.data.ltPropMax,
		min = this.data.ltPropMin,
		parsedValue = Number( value.replace( new RegExp("\\" + this.data.ltPropDecimal ), '.' ) ),
		maxMinVal = this.getMethods( 'onBeforeMaxMinValidation' )

		if( max == undefined && min == undefined ){
			return value;
		} 
		if( max != undefined ){
			if( max < parsedValue ){
				value = max;
				/**
				 * @method onBeforeMaxMinValidation
				 * @version 2.2.9
				 */				
				var callbackvalue = maxMinVal ? this.executeMethod( 'onBeforeMaxMinValidation', 'max', initial, value, this.$node ) : value;
				value = callbackvalue == undefined ? value : callbackvalue;
			}
		}  
		if( allowMin && min != undefined  ){
			if( min > parsedValue ){
				value = min;
				value = min;
				var callbackvalue = maxMinVal ? this.executeMethod( 'onBeforeMaxMinValidation', 'min', initial, value, this.$node ) : value;
				value = callbackvalue == undefined ? value : callbackvalue;
			} else if( parsedValue == 0 && value == '' ){
				value = Math.max( parsedValue, min );
				var callbackvalue = maxMinVal ? this.executeMethod( 'onBeforeMaxMinValidation', 'min', initial, value, this.$node ) : value;
				value = callbackvalue == undefined ? value : callbackvalue;
			}
		}
		return value.toString().replace( /\./, this.data.ltPropDecimal );	
	},

	removeTwice : function( text, regex ){
		var split = text.split( regex );
		if( split.length > 1 ){
			var pop = split.shift(),
			eVal = regex.exec( text )[ 0 ];
			text = pop + eVal + split.join( '' );
		}

		return text;
	},

	convertToNo : function( newVal ){
		var decimal = this.data.ltPropDecimal,
		dotRegex = new RegExp("\\" + decimal ),
		eRegex = /e/i,
		dotIndex,
		eIndex;

		newVal = this.removeTwice( newVal, dotRegex );
		
		newVal = this.removeTwice( newVal, eRegex );
		newVal = this.removeTwice( newVal, /\+|\-/i );

		if( dotRegex.test( newVal ) && eRegex.test( newVal ) ){
			dotIndex = dotRegex.exec( newVal ).index;
			eIndex = eRegex.exec( newVal ).index;
			if( dotIndex > eIndex || Math.abs( dotIndex - eIndex ) == 1 ){
				newVal = newVal.replace( dotIndex > eIndex ? eRegex : dotRegex, '' );
			}
		}

		if( /^e/i.test( newVal ) ){
			newVal = newVal.replace( /e/i, '' );
		}

		if( /\+|\-/.test( newVal ) && !/^(\+|\-)/.test( newVal ) ) {
			if( ( eIndex != undefined && /\+|\-/.exec( newVal ).index != eIndex + 1 ) || eIndex == undefined ){
				newVal = newVal.replace( /\+|\-/g, '' );
			}
		}

		return newVal;	
	},

     attrObs : function( arg ){
        this.data.ltPropAria && _lyteUiUtils.setAttribute( this.$node.querySelector( 'input' ), this.data.ltPropAriaAttributes || {}, arg ? arg.oldValue : {} )
     }.observes( 'ltPropAriaAttributes', 'ltPropAriaAttributes.{}', 'ltPropType' ).on( 'didConnect' ),

     single_obs : function( arg ){
        var key = arg.path.replace( /^\./, '' ),
        newValue = arg.newValue,
        data = this.data;

        if( data.ltPropAria ){
            var obj = {};
            obj[ key ] = newValue;

            _lyteUiUtils.setAttribute( $L( 'input', this.$node ).get( 0 ), obj, {} );
        }

     }.observes( 'ltPropAriaAttributes.*' ),

     trigger_obs : function( arg ){
     	if( arg.newValue ){
     		var __item = arg.item;

     		if( /clear/i.test( __item ) ){
     			this.error_decision();
     		} else {
     			this.do_validation();
     		}
     		this.setData( __item, !1 );
     	}
     }.observes( 'ltPropTriggerValidation', 'ltPropClearValidation' ),

     error_decision : function( value, msg, type ){
     	this.setData({
 			errorMessage : msg,
 			ltPropError : !!msg

 		});

 		$L( this.$node )[ ( msg ? 'add' : 'remove' ) + 'Class' ]( 'lyteErrorInput' );

 		if( msg ){
 			/**
			 * @method onError
			 * @version 3.86.0
			 */
 			var cb = "onError";
 			this.getMethods( cb ) && this.executeMethod( cb, type, value, this.$node );
 		} else if( msg == "" ){
 			/**
			 * @method onValidInput
			 * @version 3.86.0
			 */
 			var cb = "onValidInput";
 			this.getMethods( cb ) && this.executeMethod( cb, value, this.$node );
 		}
     },

     do_validation : function(){
     	var __data = this.data,
     	message = __data.ltPropErrorMessage || {},
     	def_message = __data.ltPropDefaultErrorMessage,
     	value = __data.ltPropValue || "",
     	validateEmpty = __data.ltPropValidateOnEmpty,
     	__allow = value || validateEmpty,
     	maxMin = __allow ? this.maxMinCheck( value, true ) : value,
     	final_msg,
     	__pattern = __data.ltPropPattern,
     	// __dur = __data.ltPropAutoCorrectDuration,
     	__fn = this.error_decision.bind( this, value );

     	if( value != maxMin ){
     		return __fn( message.minmax || def_message, 'maxmin' );
     	}

     	var maxlen = this.maxLenValidation( value );

 		if( maxlen != value ){
 			return __fn( message.maxlength || def_message, 'maxlength' );
 		}

 		if( __pattern && __allow ){
 			var rgx = new RegExp( __pattern, 'g' );

 			if( !rgx.test( value ) ){
 				return __fn( message.pattern || def_message, 'pattern' );
 			}
 		}

     	if( __data.ltPropMandatory && !value ){
     		return __fn( message.mandatory || def_message, 'mandatory' );
     	}

     	return __fn( "" );
     }
});


/**
 * @syntax nonYielded
 * <lyte-number></lyte-number>
 */