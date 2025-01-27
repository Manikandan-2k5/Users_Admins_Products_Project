
/*
 * Specially written for handling daylight saving time
 * All the handlings are done using lyte moment plugin
 * Not for IE
 */

 /**
  * This component is used to select date and time from input field
  * @version 3.44.0
  * @dependency lyte-dropdown
  *  components/lyte-dropdown.js
  *  theme/compiledCSS/default/ltr/lyte-ui-dropdown.css
  * @dependency lyte-calendar
  *  components/lyte-calendar.js
  *  theme/compiledCSS/default/ltr/lyte-ui-calendar.css
  *  plugins/lyte-moment.js
  * @utility focus,blur
  * @methods onDateChange, onCalendarOpen, onBeforeCalendarOpen, onPosition, onCalendarClose, onBeforeCalendarClose, onFocus, onBlur, onViewChange, onNavigate, beforeRender, afterRender, onBeforeValidate, onDropOptionsConstruct
  */

Lyte.Component.register("lyte-datetime-input", {
_template:"<template tag-name=\"lyte-datetime-input\"> <div class=\"lyteDateTimeInputWrapper\"> <input type=\"text\" lyte-purpose=\"date\" class=\"lyteDateTimeDate\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" value=\"{{lbind(dateValue)}}\" onfocus=\"{{action('focus',event,this)}}\" onblur=\"{{action('blur',event,this)}}\" oninput=\"{{action('input',event,this)}}\" onkeydown=\"{{action('keydown',event,this)}}\"> <template is=\"if\" value=\"{{expHandlers(ltPropType,'==',&quot;datetime&quot;)}}\"><template case=\"true\"><template is=\"if\" value=\"{{ltPropDropdown}}\"><template case=\"true\"> <lyte-dropdown class=\"lyteDateInputDropdown\" lt-prop-selected=\"{{lbind(selected)}}\" lt-prop=\"{{ltPropDropdownProperties}}\" on-before-show=\"{{method('beforeShow')}}\" on-option-selected=\"{{method('timeselect')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-button> <input type=\"text\" lyte-purpose=\"time\" class=\"lyteDateTimeTime\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" value=\"{{lbind(timeValue)}}\" onfocus=\"{{action('focus',event,this)}}\" onblur=\"{{action('blur',event,this)}}\" oninput=\"{{action('input',event,this)}}\" onkeydown=\"{{action('keydown',event,this)}}\"> <template is=\"if\" value=\"{{timezone}}\"><template case=\"true\"> <span class=\"lyteDateTimezone\">{{timezone}}</span> </template></template> </lyte-drop-button> <lyte-drop-box class=\"lyteDaterangeInputDropdown\"> <template is=\"if\" value=\"{{ltPropHeaderYield}}\"><template case=\"true\"> <lyte-drop-head> <lyte-yield yield-name=\"timeheader\"></lyte-yield> </lyte-drop-head> </template></template> <lyte-drop-body> <template is=\"if\" value=\"{{ltPropTimeYield}}\"><template case=\"true\"><template is=\"for\" items=\"{{dropdown}}\" item=\"item\" index=\"index\"> <lyte-drop-item tabindex=\"-1\" data-timezone=\"{{item.timezone}}\" data-value=\"{{item.format}}\"> <lyte-yield yield-name=\"dropYield\" item-value=\"{{item}}\"></lyte-yield> </lyte-drop-item> </template></template><template case=\"false\"> <template is=\"for\" items=\"{{dropdown}}\" item=\"item\" index=\"index\"> <lyte-drop-item tabindex=\"-1\" data-timezone=\"{{item.timezone}}\" data-value=\"{{item.format}}\"> <span class=\"lyteDateValue\">{{item.time}}</span> <template is=\"if\" value=\"{{item.timezone}}\"><template case=\"true\"> <span class=\"lyteDateTimezoneValue\">{{item.timezone}}</span> </template></template> </lyte-drop-item> </template> </template></template> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> </template><template case=\"false\"> <div> <input type=\"text\" lyte-purpose=\"time\" class=\"lyteDateTimeTime\" disabled=\"{{ltPropDisabled}}\" readonly=\"{{ltPropReadonly}}\" value=\"{{lbind(timeValue)}}\" onfocus=\"{{action('focus',event,this)}}\" onblur=\"{{action('blur',event,this)}}\" oninput=\"{{action('input',event,this)}}\" onkeydown=\"{{action('keydown',event,this)}}\"> <template is=\"if\" value=\"{{timezone}}\"><template case=\"true\"> <span class=\"lyteDateTimezone\">{{timezone}}</span> </template></template> </div> </template></template></template></template> </div> <template is=\"if\" value=\"{{ltPropBindToBody}}\"><template case=\"true\"> <lyte-wormhole class=\"lyteDateTimeInputWormhole lyteDateTimeInputHidden\" on-before-append=\"{{method('beforeAppend')}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <lyte-calendar lt-prop=\"{{ltPropCalendarProperties}}\" lt-prop-yield=\"{{ltPropCalendarYield}}\" lt-prop-format=\"{{ltPropDateFormat}}\" lt-prop-min-date=\"{{minDate}}\" lt-prop-max-date=\"{{maxDate}}\" lt-prop-current-date=\"{{lbind(dateValue)}}\" on-date-selected=\"{{method('dateselect')}}\" on-navigate=\"{{method('navigate','onNavigate')}}\" on-view-change=\"{{method('navigate','onViewChange')}}\"> <template is=\"registerYield\" yield-name=\"footer\" from-parent=\"\"></template> </lyte-calendar> </template> </lyte-wormhole> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"if","position":[3,1],"cases":{"true":{"dynamicNodes":[{"type":"insertYield","position":[1,1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[3,3,1]},{"type":"if","position":[3,3,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"for","position":[0],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"insertYield","position":[1,1]},{"type":"componentDynamic","position":[1]}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]}]}},"default":{}},{"type":"componentDynamic","position":[3,3]},{"type":"componentDynamic","position":[3]}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropValue","ltPropDateFormat","ltPropTimeFormat","ltPropMaxDate","ltPropMinDate","ltPropType","ltPropDateProperties","ltPropTimeProperties","ltPropCalendarProperties","ltPropDropdownProperties","ltPropDropdown","ltPropCalendarYield","ltPropTimeYield","ltPropHeaderYield","ltPropBoundary","ltPropOffset","ltPropInterval","ltPropPosition","ltPropPreventEmpty","ltPropAllowKeys","ltPropI18n","ltPropAppearance","ltPropDisabled","ltPropReadonly","ltPropAria","ltPropDateAriaAttributes","ltPropTimeAriaAttributes","dateValue","timeValue","timezone","minDate","maxDate","dropdown","lastDate","selected","minDate","maxDate"],


	init : function(){
		var _this = this,
		data = this.data,
		date = data.ltPropValue,
		moment,
		cb = "beforeRender";

		[ 'focus', 'blur' ].forEach( function( item ){
			_this.$node[ item ] = function( arg ){
				$L( 'input', _this.$node ).get( arg ? 1 : 0 )[ item ]();
			};
		});

		this.$node.setCss = function(){
			var child = _this.childComp;
			if( child && !$L( child ).hasClass( 'lyteDateTimeInputHidden' ) ){
				_this.setCss();
			}
		};

		switch( date ){
			case "now" : {
				moment = $L.moment();
			}
			break;
			case "startOfDay" : {
				moment = $L.moment().startOf( 'day' );
			}
			break;
		}

		if( moment ){
			this.setData( 'ltPropValue', this.min_max_val( moment ).format() );
		}

		this.force_datechange( true, true );

		this.getMethods( cb ) && this.executeMethod( cb, this.$node );
	},

	min_max_obs : function( arg ){
		var data = this.data,
		minDate = data.ltPropMinDate,
		maxDate = data.ltPropMaxDate,
		format = data.ltPropDateFormat;


		if( minDate ){
			this.setData( 'minDate', $L.moment( new Date( minDate ) ).format( format ) );
		}

		if( maxDate ){
			this.setData( 'maxDate', $L.moment( new Date( maxDate ) ).format( format ) );
		}

		if( arg ){
			delete data.lastDate;

			var ns = '_from_min_obs';

			this[ ns ] = true;

			this.modify_value( 0, $L( 'input', this.$node ).get( 0 ) );

			if( this[ ns ] ){
				delete this[ ns ];
				this.const_drop();
			}
		} 

	}.observes( 'ltPropMinDate', 'ltPropMaxDate' ).on( 'init' ),

	date_prop_obs : function( arg ){
		if( /date/i.test( this.data.ltPropType ) ){
			this.update_attr( 0, arg, 'ltPropDateProperties' );
		}
	}.observes( 'ltPropDateProperties.*' ).on( 'didConnect' ),

	time_prop_obs : function( arg ){
		if( /time/i.test( this.data.ltPropType ) ){
			this.update_attr( -1, arg, 'ltPropTimeProperties' );
		}
	}.observes( 'ltPropTimeProperties.*' ).on( 'didConnect' ),

	app_obs : function( arg ){
		arg = arg || { newValue : this.data.ltPropAppearance };

		var caps = _lyteUiUtils.capitalize;

		$L( this.$node ).addClass( 'lyteDateTimeInput' + caps( arg.newValue ) ).removeClass( 'lyteDateTimeInput' + caps( arg.oldValue ) );

	}.observes( 'ltPropAppearance' ).on( 'didConnect' ),

	update_attr : function( index, arg, name ){
		var input = $L( 'input', this.$node ).get( index ),
		__old,
		__new;

		if( arg && arg.path ){
			 var key = arg.path.replace( /^\./, '' ),
        	 newValue = arg.newValue;

        	 __new = {};
        	 _lyteUiUtils[ key ] = newValue;

        	 __old = {};
		} else {
			__new = this.data[ name ];
			__old = ( arg || { oldValue : {} } ).oldValue;
		}

		_lyteUiUtils.setAttribute( input, __new, __old );
	},

	data : function(){

		var str = "string",
		bool = "boolean",
		obj = "object";

		return {

			/**
			 * @componentProperty {string} ltPropValue=""
			 * @version 3.44.0
			 */
			ltPropValue : Lyte.attr( str, { default : "" } ),
			/**
			 * @componentProperty {string} ltPropDateFormat="MM/DD/YYYY"
			 * @version 3.44.0
			 */
			ltPropDateFormat : Lyte.attr( str, { default : "MM/DD/YYYY" } ),
			/**
			 * @componentProperty {string} ltPropTimeFormat="hh:mm A"
			 * @version 3.44.0
			 */
			ltPropTimeFormat : Lyte.attr( str, { default : "hh:mm A" } ),
			/**
			 * @componentProperty {string} ltPropMaxDate=""
			 * @version 3.44.0
			 */
			ltPropMaxDate : Lyte.attr( str, { default : "" } ),
			/**
			 * @componentProperty {string} ltPropMinDate=""
			 * @version 3.44.0
			 */
			ltPropMinDate : Lyte.attr( str, { default : "" } ),
			/**
			 * @componentProperty { datetime | default } ltPropType="datetime"
			 * @version 3.44.0
			 */
			ltPropType : Lyte.attr( str, { default : "datetime" } ),

			/**
			 * @componentProperty {object} ltPropDateProperties
			 * @default {}
			 * @version 3.44.0
			 */

			ltPropDateProperties : Lyte.attr( obj, { default : {}, watch : true } ),
			/**
			 * @componentProperty {object} ltPropTimeProperties
			 * @default {}
			 * @version 3.44.0
			 */
			ltPropTimeProperties : Lyte.attr( obj, { default : {}, watch : true } ),
			/**
			 * @componentProperty {string} ltPropCalendarProperties={}
			 * @component lyte-calendar
			 * @version 3.44.0
			 */
			ltPropCalendarProperties : Lyte.attr( str, { default : '{}' } ),
			/**
			 * @componentProperty {string} ltPropCalendarProperties={"freeze":false}
			 * @component lyte-dropdown
			 * @version 3.44.0
			 */
			ltPropDropdownProperties : Lyte.attr( str, { default : '{"freeze" : false}' } ),
			/**
			 * @componentProperty {boolean} ltPropDropdown=false
			 * @version 3.44.0
			 */
			ltPropDropdown : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropCalendarYield=false
			 * @version 3.44.0
			 */
			ltPropCalendarYield : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropTimeYield=false
			 * @version 3.44.0
			 */
			ltPropTimeYield : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropHeaderYield=false
			 * @version 3.44.0
			 */
			ltPropHeaderYield : Lyte.attr( bool, { default : false } ),
			/**
			 * @typedef boundDef
			 * @property {number} left
			 * @property {number} right
			 * @property {number} top
			 * @property {number} bottom
			 */

			/**
			 * @componentProperty {boundDef} ltPropBoundary
			 * @default {}
			 * @version 3.44.0
			 */
			ltPropBoundary : Lyte.attr( obj, { default : {} } ),
			/**
			 * @typedef offDef
			 * @property {number} left
			 * @property {number} right
			 * @property {number} top
			 * @property {number} bottom
			 */

			/**
			 * @componentProperty {offDef} ltPropOffset
			 * @default {}
			 * @version 3.44.0
			 */
			ltPropOffset : Lyte.attr( obj, { default : {} } ),
			/**
			 * @componentProperty {number} ltPropInterval=30
			 * @version 3.44.0
			 */
			ltPropInterval : Lyte.attr( 'number', { default : 30 } ),
			/**
			 * @componentProperty { top | bottom } ltPropPosition=bottom
			 * @version 3.44.0
			 */
			ltPropPosition : Lyte.attr( str, { default : "bottom" } ),
			/**
			 * @componentProperty {boolean} ltPropPreventEmpty=true
			 * @version 3.44.0
			 */
			ltPropPreventEmpty : Lyte.attr( bool, { default : true } ),
			/**
			 * @componentProperty {boolean} ltPropAllowKeys=true
			 * @version 3.44.0
			 */
			ltPropAllowKeys : Lyte.attr( bool, { default : true } ),
			/**
			 * @componentProperty {boolean} ltPropI18n=false
			 * @version 3.44.0
			 */
			ltPropI18n : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty { flat | box } ltPropAppearance="box"
			 * @version 3.44.0
			 */
			ltPropAppearance : Lyte.attr( str, { default : "box" } ),
			/**
			 * @componentProperty {boolean} ltPropDisabled=false
			 * @version 3.44.0
			 */
			ltPropDisabled : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropReadonly=false
			 * @version 3.44.0
			 */
			ltPropReadonly : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {boolean} ltPropAria=false
			 * @version 3.44.0
			 */
			ltPropAria : Lyte.attr( bool, { default : false } ),
			/**
			 * @componentProperty {object} ltPropDateAriaAttributes
			 * @default {}
			 * @version 3.44.0
			 */
			ltPropDateAriaAttributes : Lyte.attr( obj, { default : {}, watch : true } ),
			/**
			 * @componentProperty {object} ltPropTimeAriaAttributes
			 * @default {}
			 * @version 3.44.0
			 */
			ltPropTimeAriaAttributes : Lyte.attr( obj, { default : {}, watch : true } ),

			dateValue : Lyte.attr( str, { default : "" } ),
			timeValue : Lyte.attr( str, { default : "" } ),
			timezone : Lyte.attr( str ),

			minDate : Lyte.attr( str ),
			maxDate : Lyte.attr( str ),

			dropdown : Lyte.attr( 'array', { default : [] } ),
			lastDate : Lyte.attr( str ),
			selected : Lyte.attr( str ),

			minDate : Lyte.attr( str ),
			maxDate : Lyte.attr( str )

		}
	},

	aria_obs : function( arg ){
		var data = this.data;

		if( data.ltPropAria ){
			var inputs = $L( 'input', this.$node ),
			fn = function( name, index ){
				if( !arg || arg == name ){
					_lyteUiUtils.setAttribute( inputs.get( index ), data[ name ] || {}, arg ? arg.oldValue : {} );
				}
			};

			fn( 0, 'ltPropDateAriaAttributes' );
			if( /time/i.test( data.ltPropType ) ){
				fn( 1, 'ltPropTimeAriaAttributes' );
			}

		}
	}.observes( 'ltPropDateAriaAttributes', 'ltPropTimeAriaAttributes' ).on( 'didConnect' ),

	arg_indv_obs : function( arg ){
		if( !arg.path ){
            return;
        }

        var data = this.data;

        if( data.ltPropAria ){
        	var key = arg.path.replace( /^./, '' ),
	        newValue = arg.newValue,
	        obj = {};

	        obj[ key ] = newValue || ( newValue == void 0 ? false : newValue );

	        _lyteUiUtils.setAttribute( $L( 'input', this.$node ).get( arg.item == 'ltPropDateAriaAttributes' ? 0 : 1 ), obj, {} );
        }

	}.observes( 'ltPropDateAriaAttributes.*', 'ltPropTimeAriaAttributes.*' ),

	disabled_obs : function( arg ){

		var $node = $L( this.$node ),
		
		fn = function( ns ){
			var value = this.data[ ns ];
			$L( this.$node )[ value ? 'addClass' : 'removeClass' ]( "lyteDateTimeInput" + ( ns.replace( 'ltProp', '' ) ) );
		}.bind( this );

		if( arg ){
			fn( arg.item );
		} else {
			fn( 'ltPropDisabled' );
			fn( 'ltPropReadonly' );

			var cb = 'afterRender';

			this.getMethods( cb ) && this.executeMethod( cb, this.$node );
		}

	}.observes( 'ltPropDisabled', 'ltPropReadonly' ).on( 'didConnect' ),

	const_drop : function(){
		var data = this.data,
		__moment = $L.moment,
		date = data.ltPropValue,
		fn = function( date, last ){
			if( date == last ){
				return true;
			}

			if( last == void 0 ){
				return false;
			}

			return __moment( new Date( date ) ).format( 'DD-MM-YYYY' ) == __moment( new Date( last ) ).format( 'DD-MM-YYYY' );
		};

		if( fn( date, data.lastDate ) ){
			return;
		}

		data.lastDate = date;

		var moment = __moment( new Date( date ) );

		if( !moment.validate() ){
			moment = __moment( data.dateValue, data.ltPropDateFormat );
			if( !moment.validate() ){
				return;
			}
		}

		var interval = data.ltPropInterval,
		minDate = data.ltPropMinDate,
		maxDate = data.ltPropMaxDate,
		options = [],
		format = data.ltPropTimeFormat,
		is_dst = moment.dstPoint(),
		start = moment.__start,
		end = moment.__end,
		start_dst,
		end_dst,
		check_dst = is_dst && is_dst.value < 0,
		ns = data.ltPropI18n ? "i18N" : "format",
		cb = "onDropOptionsConstruct";

		if( check_dst ){
			end_dst = is_dst.moment.getDObj().getTime() + 1
			start_dst = end_dst + ( is_dst.value * 60 * 1e3 );
		}

		if( minDate ){
			var _mom = __moment( new Date( minDate ) );

			if( _mom.fromNow( start ).past ){
				start = _mom;
			}

		}

		if( maxDate ){
			var _mom = __moment( new Date( maxDate ) );

			if( end.fromNow( _mom ).past ){
				end = _mom;
			}
		}

		if( this.getMethods( cb ) ){
			options = this.executeMethod( cb, start, end, this.$node ) || [];
		}

		if( !options.length ){
			while( true ){
				if( end && end.fromNow( start ).timestamp <= 0 ){
					var __value = start[ ns ]( format ),
					timestamp = start.getDObj().getTime(),
					obj = {
						time : __value,
						format : 'time_' + timestamp
					};

					if( check_dst ){
						if( start_dst <= timestamp && timestamp <= end_dst ){
							obj.timezone = is_dst.timeZoneOld;
						}
					}

					options.push( obj );

					start.add( interval, 'minutes' );
				} else {
					break;
				}
			}
		}

		if( !this.check_options( options ) ){
			this.setData( 'dropdown', options );
		}

		return is_dst;
	},

	check_options : function( options ){
		var ret = false,
		origial = this.data.dropdown;

		if( origial.length != options.length ){
			return false;
		}

		origial.every( function( item, index ){
			var other = options[ index ];
			ret = ( item.time == other.time ) && ( item.timezone == other.timezone ) && ( item.format == other.format );

			return !ret;
		});


		return ret;
	},


	obs : function( arg ){
		delete this._from_min_obs;
		this.force_datechange( arg );

		var cb = "onDateChange";
		this.getMethods( cb ) && this.executeMethod( cb, arg, this.$node );

	}.observes( 'ltPropValue' ),

	force_datechange : function( arg, ignore_drop ){
		var data = this.data,
		value = data.ltPropValue,
		drop = data.ltPropDropdown,
		ns = data.ltPropI18n ? 'i18N' : "format";

		if( value ){
			var moment = $L.moment( new Date( value ) );

			if( moment.validate() ){

				var __date_to = moment[ ns ]( data.ltPropDateFormat ),
				__time_to = moment[ ns ]( data.ltPropTimeFormat ); 

				this.setData({
					dateValue : __date_to,
					timeValue : __time_to
				});

				if( !arg ){
					return;
				}

				var dst,
				ts_value = "";

				if( drop && !ignore_drop ){
					dst = this.const_drop();
				} 

				if( dst == void 0 ){
					dst = moment.dstPoint();
				}

				if( dst && dst.value < 0 ){
					var end = dst.moment.getDObj().getTime() + 1e3,
					start = end + dst.value * 60 * 1e3,
					__time = moment.getDObj().getTime();

					if( start <= __time && __time < end ){
						ts_value = dst.timeZoneOld;
					}
				}
				this.setData( 'timezone', ts_value );
				this.setData( 'selected', "time_" + moment.getDObj().getTime() );
			}

		} else {
			if( drop && arg && !ignore_drop ){
	   		 	this.const_drop();
			}
		}
	},

	validate : function( return_moment, from_input ){
		var data = this.data,
		date = data.dateValue,
		time = data.timeValue,
		date_format = data.ltPropDateFormat,
		time_format = data.ltPropTimeFormat,
		moment = $L.moment( date + ' ' + time, date_format + ' ' + time_format, { i18n : data.ltPropI18n } ),
		final = '',
		dst = moment.dstPoint(),
		cb = "onBeforeValidate";

		if( dst && dst.value < 0 ){
			var tz = data.timezone,
			__start = dst.moment.getDObj().getTime(),
			__end = __start - dst.value * 60 * 1e3,
			cur = moment.getDObj().getTime();

			if( !tz && ( cur < __start && ( cur - dst.value * 60 * 1e3 ) > __start ) ){
				moment.subtract( dst.value, 'minutes' );
			}
		}

		if( data.ltPropPreventEmpty && from_input != 1 ){

			if( !moment.validate() && date ){
				moment = $L.moment( date, date_format );
			} 

			if( !moment.validate() && time ){
				moment = $L.moment( time, time_format );
			}
		}

		if( return_moment ){
			return moment;
		}

		if( moment && moment.validate() ){
			final = this.min_max_val( moment ).format();

			if( data.ltPropValue == final ){
				this.force_datechange();
			}
		} 

		if( this.getMethods( cb ) && !from_input ){
			var ret = this.executeMethod( cb, final, date, time, from_input == 0, this.$node );

			if( ret != void 0 ){
				final = ret;
			}
		}

		this.$node.ltProp( 'value', final );
	},


	didDestroy : function(){
	
		if( this.data.ltPropBindToBody ){
			this.$node.ltProp( 'bindToBody', false );
			this.childComp.remove();
			delete this.childComp;
		}
	},

	modify_value : function( fact, target ){
		var start = target.selectionStart,
		field = this.fix_selection( start, target, true );

		if( field ){
			var data = this.data,
			moment = this.validate( 1 ),
			obj = {
				year : "fullYear",
				hour : "hours",
				minute : "minutes",
				second : "seconds"
			},
			type = field.format.type;

			if( type == "meridian" ){
				type = "hour";
				if( moment.format( 'A' ) == "AM" ){
					fact = 12;
				} else {
					fact = -12;
				}
			} else if( type == "minute" ){
				fact *= data.ltPropInterval;
			}

			fact && moment.modify( fact, obj[ type ] || type );

			if( moment.validate() ){
				
				moment = this.min_max_val( moment );

				this.setData( 'ltPropValue', moment.format() );
				return true;
			}
		}

		return false;
	},

	min_max_val : function ( moment ){
		var data = this.data,
		minDate = data.ltPropMinDate,
		maxDate = data.ltPropMaxDate;

		if( minDate ){
			var __moment = $L.moment( new Date( minDate ) );

			if( __moment.fromNow( moment ).past ){
				moment = __moment;
			}
		}

		if( maxDate ){
			var __moment = $L.moment( new Date( maxDate ) );

			if( moment.fromNow( __moment ).past ){
				moment = __moment;
			}
		}

		return moment;
	},

	close : function(){
		if( this.hideDate() ){
			this.$node.focus();
			this.modify_value( 0, $L( 'input', this.$node ).get( 0 ) );
		}
	},

	methods : {

		navigate : function( cb, evt ){

			if( $L( evt.target ).closest( '.lyteCalCurrentDate', this.$node ).length ){
				
				this.setData( 'dateValue', $L.moment().format( this.data.ltPropDateFormat ) );
				return this.close();
			}

			this.$node.setCss();

			if( this.getMethods( cb ) ){
				this.executeMethod.apply( this, arguments );
			}
		},

		beforeAppend : function( elem ){
			this.childComp = elem;
		},

		dateselect : function(){
			this.close();
		},

		beforeShow : function(){

			var time_prop = this.data.ltPropTimeProperties;

			if( ( time_prop.readOnly || time_prop.readonly || this.data.ltPropReadonly ) && !this.data.ltPropAllowKeys ){
				return false;
			}

			if( this._first ){
				return;
			}
			this._first = true;
			this.const_drop();
		},

		timeselect : function(){
			var $elem = $L( arguments[ 3 ] ),
			time = arguments[ 1 ].replace( 'time_', '' );

			this.setData( 'ltPropValue', $L.moment( Number( time ) ).format() );
		}
	},

	actions : {
		focus : function( evt, _this ){

			var start = _this.selectionStart,
			end = _this.selectionEnd,
			value = _this.value;

			if( start == 0 &&  value && value.length == end ){
				if( this.getInput( _this ) == "date" ){
					this.showDate();
				}
				this.fix_selection( 0, _this );;
			}

			this.focus_blur( 'addClass', 'onFocus', evt );
		},

		blur : function( evt, _this ){

			this.validate( void 0, 0 );
			this.focus_blur( 'removeClass', 'onBlur', evt );
		},

		keydown :  function( evt, _this ){

			if( _this.readOnly && !this.data.ltPropAllowKeys ){
				return;
			}

			var prevent,
			keyCode = evt.keyCode || evt.which,
			target = _this,
			tab_fun = function( is_shift ){
				var new_value,
				start = target.selectionStart,
				end = target.selectionEnd;

				if( is_shift && start == 0 && this.getInput( target ) == "time" ){	
					target = $L( 'input', this.$node ).get( 0 );
					
					this.$node.focus();
					this.showDate();
					start = target.value.length + 2;
				}

				if( is_shift ){
					new_value = start - 2;
				} else {
					new_value = end + 2;
				}

				prevent = this.fix_selection( new_value, target );
			}.bind( this ),
			fact;

			switch( keyCode ){
				case 9 : {
					tab_fun( evt.shiftKey );

					if( !prevent ){
						this.hideDate();
					} 
				}
				break;
				case 37 : {
					tab_fun( true );

					if( !prevent ){
						this.fix_selection( 0, target );
					}

					prevent = this.__start != this.__end;
				}
				break;
				case 38 : {
					fact = 1;
				}
				break;
				case 39 : {
					tab_fun( false );

					if( !prevent ){
						this.fix_selection( target.value.length, target );
					}

					prevent = this.__start != this.__end;
				}
				break;
				case 40 : {
					fact = -1;
				}
			}

			if( fact ){
				var is_drop = this.data.ltPropDropdown,
				child = is_drop && $L( '.lyteDateInputDropdown', this.$node ).get( 0 ).component.childComp,
				is_closed =  $L( child ).hasClass( 'lyteDropdownHidden' );


				if( !( is_drop && child && !is_closed ) ){
					var start = target.selectionStart;

					if( this.modify_value( fact, target ) ){
						this.fix_selection( start, target );
					}
					prevent = true;
				}
			}

			if( prevent ){
				evt.preventDefault();
			}
		},

		input : function( evt, _this ){
			var purpose = this.getInput( _this );

			this.setData( purpose + 'Value', _this.value );

			this.setData( "timezone", "" );
			this.validate( void 0 ,1 );
		}
	},

	focus_blur : function( fn, cb, evt ){

		$L( this.$node )[ fn ]( 'lyteDateInputFocused' );
		this.getMethods( cb ) && this.executeMethod( cb, evt, this.$node );
	},

	getInput : function( _this ){
		return $L( _this ).attr( 'lyte-purpose' );
	},

	hideDate : function(){
		var elem = this.childComp,
		$elem = $L( elem ),
		cb = 'onCalendarClose',
		cb1 = "onBeforeCalendarClose",
		hiddenClass = 'lyteDateTimeInputHidden';

		if( $elem.hasClass( hiddenClass ) || ( this.getMethods( cb1 ) && this.executeMethod( cb1, elem, this.$node ) == false ) ){
			return;
		}

		$elem.addClass( hiddenClass );
		$L( this.$node ).removeClass( 'lyteDateInputOpened' );

		this.getMethods( cb ) && this.executeMethod( cb, elem, this.$node );

		this.revert();

		return true;
	},

	showDate : function( evt ){

		if( !evt ){

			var date_prop = this.data.ltPropDateProperties;
			if( ( date_prop.readOnly || date_prop.readonly || this.data.ltPropReadonly ) && !this.data.ltPropAllowKeys ){
				return;
			}
			this.$node.ltProp( 'bindToBody', true );
		}

		var elem = this.childComp,
		hiddenClass = 'lyteDateTimeInputHidden',
		$elem = $L( elem ),
		cb;

		if( $elem.hasClass( hiddenClass ) ){
			if( this.__scroll_close && evt && this.check_boundary() ){
				delete this.__scroll_close;
				return this.showDate();
			} else if( evt ){
				return;
			}

			var before_cb = "onBeforeCalendarOpen";
			cb = "onCalendarOpen";

			if( this.getMethods( before_cb ) && this.executeMethod( before_cb, elem, this.$node ) == false ){
				return;
			}

			$elem.removeClass( hiddenClass );
		}

		this.setCss( evt, cb );
	},

	fix_selection : function( start, input, return_field ){

		var _this = this,
		data = _this.data,
		moment,
		value,
		format,
		__i18n = data.ltPropI18n,
		ns = __i18n ? 'i18N' : "format",
		i18n = { i18n : __i18n };

		if( this.getInput( input ) == "date" ){
			value = data.dateValue; 
			format = data.ltPropDateFormat;
		} else {
			value = data.timeValue; 
			format = data.ltPropTimeFormat;
		}

		moment = $L.moment( value, format, i18n );

		fn = function( moment, split ){
		 	var len = split.length,
		 	finished = 0,
		 	prev = 0;

		 	for( var i = 0; i < len; i++ ){
		 		var cur = split[ i ],
		 		format = cur.format.val,
		 		converted = moment[ ns ]( format ),
		 		__start = finished + cur.index - prev,
		 		__end = __start + converted.length;

		 		if( __start <= start && start <= __end ){
		 			if( return_field ){
		 				return cur;
		 			}
		 			return {
		 				start : __start,
		 				end : __end
		 			}
		 		}

		 		finished = __end;
		 		prev = cur.index + format.length;
		 	}

		 };

		 if( moment.validate() ){
		 	 this.__start = this.__end = start;

		 	var split = moment.parseFormat( format ),
		 	first_match = fn( moment, split );

		 	if( return_field ){
		 		return first_match;
		 	}

		 	if( first_match ){
		 		this.__start = input.selectionStart = first_match.start;
		 		this.__end = input.selectionEnd = first_match.end;
		 		return true;
		 	}

		 	return false;
		 }
		 return false;

	},

	check_boundary : function( bcr ){
		bcr = bcr || this.$node.getBoundingClientRect();

		var boundary = this.data.ltPropBoundary,
		fn = function( value ){
			var to_set = boundary[ value ];

			if( value != void 0 ){
				return to_set;
			}
			return bcr[ value ];
		};

		if( fn( 'left' ) > bcr.left || fn( 'top' ) > bcr.top || fn( 'right' ) < bcr.right || fn( 'bottom' ) < bcr.bottom ){

			if( this.hideDate() ){
				this.__scroll_close = true;
				return false;
			}
		}

		return true;
	},

	setCss : function( frm_scroll, __cb ){
		var fastdom = $L.fastdom,
		_this = this,
		elem = _this.childComp,
		$elem = $L( elem );

		if( !elem ){
			return;
		}

		fastdom.clear( _this.__fd );

		_this.__fd = fastdom.measure( function(){
			var offset = _this.data.ltPropOffset,
			height = elem.offsetHeight,
			w_height = innerHeight - ( offset.bottom || 0 ),
			_top_val = offset.top || 0,
			is_rtl = _lyteUiUtils.getRTL(),
			pos = _this.data.ltPropPosition,
			bcr = _this.$node.getBoundingClientRect(),
			top_space = bcr.top - _top_val,
			bottom_space =  w_height - bcr.bottom,
			__left = is_rtl ? 'right' : 'left',
			obj = {
				top : "",
				bottom : "",
				left : "",
				right : ""
			},

			x_scroll = window.pageXOffset,
			y_scroll = window.pageYOffset,

			_top = function(){
				obj.top = y_scroll + bcr.top;
				obj.transform = "translateY(-100%)";

				var temp = ns;
				ns = other;
				other = temp;
			},
			_bottom = function(){
				obj.top = y_scroll + bcr.bottom;
				obj.transform = "";
			},
			ns = "lyteDateInputRangeBottom",
			other = "lyteDateInputRangeTop",
			fn = function( $node ){
				$node.addClass( ns ).removeClass( other );
			},
			input = $L( 'input', _this.$node ).get( 0 ),
			start = input.selectionStart;

			obj[ __left ] = bcr[ __left ] + x_scroll;

			 if( pos == "top" ){
			 	if( top_space > height || top_space > bottom_space ){
			 		_top();
			 	} else {
			 		_bottom();
			 	}
			 } else {
			 	if( bottom_space > height || bottom_space > top_space ){
			 		_bottom();
			 	} else{
			 		_top();
			 	}
			 }

			 fastdom.mutate( function(){

				 fn( $elem.css( obj ) );
				 fn( $L( _this.$node ).addClass( 'lyteDateInputOpened' ) );

				 _this.fix_selection( start, $L( 'input', _this.$node ).get( 0 ) );

				 var cb;

				 if( frm_scroll ){
				 	if( _this.check_boundary( bcr ) ){
				 		cb = "onPosition";
				 	}
				 } else {
				 	cb = "onPosition";
				 }

				 function __fn( ns ){
				 	_this.getMethods( ns ) && _this.executeMethod( ns, elem, _this.$node );
				 }

				 cb && __fn( cb );
				 __cb && __fn( __cb );
			});	
		});
	},

	revert : function(){
		var calendar = $L( "lyte-calendar", this.childComp ).get( 0 ),
		date = this.data.dateValue,
		fn;

		if( calendar ){
			if( date && $L.moment( date, this.data.ltPropDateFormat ).validate() ){
				fn = "revertToSelected";
			} else{
				fn = 'revertToToday';
			}

			window.requestAnimationFrame( calendar[ fn ].bind( calendar ) );
		}
	}

});


( function(){
	var __daterange_resize = function( evt ){

		var target = ( evt || {} ).target;

		Array.from( document.body.getElementsByTagName( 'lyte-datetime-input' ) ).forEach( function( item ){

			if( !target ){
				item.setCss();
			} else if( target && target.contains( item ) ){
				item.component.showDate( evt );
			}
		});
	};

	_lyteUiUtils.addEvent( window, 'scroll', __daterange_resize, 'dateinput' );

	_lyteUiUtils.addEvent( window, 'resize', function(){
		clearTimeout( __daterange_resize.__resize );
		__daterange_resize.__resize = setTimeout( __daterange_resize, 20 );
	}, 'dateinput' );

	_lyteUiUtils.addEvent( window, 'orientationchange', function(){
		clearTimeout( __daterange_resize.__resize );
		__daterange_resize.__resize = setTimeout( __daterange_resize, 500 );
	}, 'dateinput' );

	_lyteUiUtils.addEvent( document, 'click', function( evt ){

		var target = evt.target,
		elems = Array.from( document.body.getElementsByClassName( 'lyteDateInputOpened' ) ),
		closest = target.closest( "lyte-datetime-input" );

		elems.forEach( function( item ){
			var comp = item.component,
			childComp = comp.childComp;

			if( childComp.contains( target ) ){
				return;
			}

			var drop = target.closest( 'lyte-drop-box' );

			if( drop ){
				if( childComp.contains( drop.origindd ) ){
					return;
				}
			}

			if( item.contains( target ) ){
				var input = item.children[ 0 ];
				comp.fix_selection( input, input.selectionStart );
			}

			comp.hideDate();
		});

		if( closest ){
			var comp = closest.component;

			comp.fix_selection( target.selectionStart, target );

			if( elems.indexOf( closest ) + 1 ){
				return;
			}
			if( comp.getInput( target ) == "date" ){
				comp.showDate();
			}
		}

	}, true );

})();


 /**
  * @syntax No yielded
  * <lyte-datetime-input>
  * </lyte-datetime-input>
  */

 /**
   * @syntax Time yield
   * @attribute ltPropTimeYield
   * <lyte-datetime-input lt-prop-time-yield = true>
   *     <template is = "registerYield" yield-name = "dropYield">
   *		{{itemValue.time}}
   *     </template>
   * </lyte-datetime-input>
   */

 /**
   * @syntax Calendar footer yield
   * @attribute ltPropCalendarYield
   * <lyte-datetime-input lt-prop-calendar-yield = true>
   *     <template is = "registerYield" yield-name = "footer">
   *       Some footer content
   *	 </template>
   * </lyte-datetime-input>
   */

 /**
   * @syntax header yield
   * @attribute ltPropHeaderYield
   * <lyte-datetime-input lt-prop-header-yield = true>
   *     <template is = "registerYield" yield-name = "timeheader">
   *       some header
   *	 </template>
   * </lyte-datetime-input>
   */