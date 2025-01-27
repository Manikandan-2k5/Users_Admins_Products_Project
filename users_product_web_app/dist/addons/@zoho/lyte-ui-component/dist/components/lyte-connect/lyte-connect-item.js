Lyte.Component.register("lyte-connect-item", {
_template:"<template tag-name=\"lyte-connect-item\"> <template is=\"for\" items=\"{{points}}\" item=\"item\" index=\"index\"><template is=\"if\" value=\"{{renderPoint(item,ltPropRenderPoints)}}\"><template case=\"true\"> <span index=\"{{index}}\" onmousedown=\"{{action('mousedown')}}\" class=\"lyteConnectAnchorPoint {{item.class}}\" left=\"{{item.left}}\" top=\"{{item.top}}\" style=\"{{item.style}}\"></span> </template></template></template> <lyte-element-wrapper></lyte-element-wrapper> <template is=\"if\" value=\"{{svgCreate}}\"><template case=\"true\"><div> <template is=\"for\" items=\"{{suggestionData}}\" item=\"item\" index=\"index\"> <lyte-suggestion-element onmouseenter=\"{{action('suggest_enter',index)}}\" onmouseleave=\"{{action('suggest_leave',index)}}\" onclick=\"{{action('suggest_click',index)}}\" class=\"{{item.class}}\"> <lyte-yield yield-name=\"suggest_icon\"></lyte-yield> </lyte-suggestion-element> </template> </div></template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"for","position":[1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","dynamicValue":"item.style"}}}]}},"default":{}}]},{"type":"componentDynamic","position":[3]},{"type":"attr","position":[5]},{"type":"if","position":[5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"for","position":[0,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1,1]},{"type":"componentDynamic","position":[1]}]}]}},"default":{}}],
_observedAttributes :["ltPropItem","ltPropAnywhere","ltPropDefaultAnchors","ltPropBufferDistance","ltPropAnchorDim","ltPropIgnoreCornerPoints","ltPropReadonly","ltPropRenderPoints","ltPropSelected","ltPropSuggestionData","ltPropGroupArrange","ltPropData","points","fake_pts","dataIndex","suggestionData","svgCreate","isChild"],


	init : function(){
		var __data = this.data,
		ns = 'ltPropDefaultAnchors';

		__data[ ns ] = $L.extend( true, [], __data[ ns ] );

	},

	arr_obs : function( arg ){

		var $node = this.$node,
		fn;

		if( this.data.ltPropGroupArrange ){
			fn = 'bind_sortable';
		} else if( arg ){
			fn = 'unbind_sortable';
		} else {
			this.data.isChild && this.setData( 'ltPropItem', { data : this.data.ltPropData } );
		}

		fn && this.throwEvent( fn, $node );
	}.observes( 'ltPropGroupArrange' ).on( 'didConnect' ),

	data : function(){
		return {
			ltPropItem : Lyte.attr( 'object' ),
			ltPropAnywhere : Lyte.attr( 'boolean' ),
			ltPropDefaultAnchors : Lyte.attr( 'array' ),

			ltPropBufferDistance : Lyte.attr( 'number', { default : 15 } ),

			ltPropAnchorDim : Lyte.attr( 'object', { default : {
				width : 8,
				height : 8,
				spacing : 8
			} } ),

			ltPropIgnoreCornerPoints : Lyte.attr( 'boolean', { default : false } ),
			ltPropReadonly : Lyte.attr( 'boolean', { default : false } ),
			ltPropRenderPoints : Lyte.attr( 'boolean', { default : true } ),
			ltPropSelected : Lyte.attr( 'boolean', { default : false}),
			ltPropSuggestionData : Lyte.attr( 'array' ),

			ltPropGroupArrange : Lyte.attr( 'boolean', { default : false } ),

			ltPropData : Lyte.attr( 'object' ),

			points : Lyte.attr( 'array', { default : [] } ),
			fake_pts : Lyte.attr( 'array', { default : [] } ),
			dataIndex : Lyte.attr( 'string' ),
			suggestionData : Lyte.attr( 'array', { default : [] } ),
			svgCreate : Lyte.attr( 'boolean', { default : false }),

			isChild : Lyte.attr( 'boolean' )
		}
	},

	actions : {
		mousedown : function(){
			return !1;
		},
		suggest_enter: function(index){
			// param.classList.add('svg_hover');
			if(!_lyteUiUtils.isMobile){
				this.throwEvent('suggest_enter',this,index);
			}
		},
		suggest_leave: function(index){
			// param.classList.remove('svg_hover');
			if(!_lyteUiUtils.isMobile){
				this.throwEvent('suggest_leave',this,index);
			}
		},
		suggest_click: function(index){
			if(_lyteUiUtils.isMobile){
				this.throwEvent('suggest_enter',this,index,"touch");
			}
			this.throwEvent('suggest_click',this,index);
		}
	},
	element_selected : function(){
		let _data=this.data,suggestionData=[];
		_data.ltPropSuggestionData.forEach(function(item){
			if(["top","down","left","right"].includes(item)){
				suggestionData.push({direction:item,class:("lyteElementSuggested "+item+"_lyteElementSuggested"),type:"none",svg_id:"none"});
			}
		});
		//svgCreate is used in html for if()
		if(!_data.svgCreate){
			this.setData('svgCreate', true);
			this.setData('suggestionData',suggestionData);
		}
		if(_data.ltPropSelected){
			this.throwEvent('element_selection',this,"add");
		}else{
			var _this=this;
			$L.fastdom.measure(function(){
				$L.fastdom.mutate(function(){
					_this.throwEvent('element_selection',_this,"remove");
				});
			});
			
		}
	}.observes('ltPropSelected'),
	didConnect : function(){
		var data = this.data,
		anywhere = data.ltPropAnywhere;

		this.$node._hovered = function( evt ){

			if( data.ltPropReadonly ){
				return;
			}

			var __points = data.points;

			if( !__points.length ){
				var fake_pts = data.fake_pts;

				if( fake_pts.length ){
					this.setData( {
						points : __points = fake_pts,
						fake_pts : []
					});
				}

				if( anywhere ){
					var obj = { left : 0, top : 0, style : "", class : "lyteConnectAnywhereAnchor" };
					Lyte.arrayUtils( __points, 'push', obj );
				}
			}
			if( anywhere ){
				this.update_from_evt( $L( __points ).get( -1 ), evt );
				clearTimeout( this._leave );
				if( !this._mmove ){
					this._mmove = this.mousemove.bind( this );
					$L( this.$node ).addClass( 'lyteCustomAnchorBinded' ).on( 'mousemove', this._mmove );
				}
			}
		}.bind( this );

		this.$node._left = function(){
			
			if( data.ltPropReadonly ){
				return;
			}

			if( anywhere ){
				this._leave = setTimeout( function(){
					$L( this.$node ).removeClass( 'lyteCustomAnchorBinded' ).off( 'mousemove', this._mmove );
					delete this._mmove;
				}.bind( this ), 3000 );
			}
		}.bind( this );
	},

	mousemove : function( evt ){
		
		this.update_from_evt( $L( this.data.points ).get( -1 ), evt );
	},

	update_from_evt : function( obj, evt ){
		var bcr = this.$node.getBoundingClientRect(),
		width = bcr.width,
		height = bcr.height,
		x_value,
		y_value,
		fn = function(){
			Lyte.objectUtils( obj, 'add', 'style', 'display:none;' );
		}.bind( this ),
		diff = this.data.ltPropBufferDistance;

		if( ( this.data.ltPropItem || {} ).geom == "circle" ){

			var x_radius = width / 2,
	        y_radius = height / 2,
			x_diff = evt.clientX - bcr.left,
			y_diff = evt.clientY - bcr.top,
	        angle = Math.atan2( ( y_diff - y_radius ), ( x_diff - x_radius ) ),
	        x = x_radius + x_radius * Math.cos( angle ),
	        y = y_radius + y_radius * Math.sin( angle );

	        x_value = x / width;
	        y_value = y / height;

	        if( Math.sqrt( Math.pow( x_diff - x_radius, 2 ) + Math.pow( y_diff - y_radius, 2 ) ) + diff < x_radius  ){
				return fn();
	        }

		} else {
			var x_diff = Math.abs( evt.clientX - bcr.left ),
			y_diff = Math.abs( evt.clientY - bcr.top ),

			x_other = Math.abs( bcr.right - evt.clientX ),
			y_other = Math.abs( bcr.bottom - evt.clientY ),
			min_x = Math.min( x_diff, x_other ),
			min_y = Math.min( y_diff, y_other );

			x_value = x_diff / width;
			y_value =  y_diff / height;

			if( min_x > diff && min_y > diff ){
				return fn();
			}

			if( min_x > min_y ){
				y_value = y_diff > y_other ? 1 : 0;
				x_value = Math.max( 0, Math.min( 1, x_value ) );
			} else {
				x_value = x_diff > x_other ? 1 : 0;
				y_value = Math.max( 0, Math.min( 1, y_value ) );
			}
		}

		this.update_value( obj, [ x_value, y_value ] );
	},

	indexObs : function(){

		$L( this.$node ).attr( 'data-index', this.data.dataIndex );
	}.observes( 'dataIndex' ).on( 'didConnect' ),

	construct_points : function(){
		var data = this.data,
		item = data.ltPropItem.data,
		points = item.anchor_points || data.ltPropDefaultAnchors,
		pts = [];

		this.setData( 'ltPropDefaultAnchors', points );
		Lyte.objectUtils( item, 'add', 'anchor_points', points );

		$L.fastdom.measure( function(){
			points.forEach( function( item ){
				if( item.type == "continuous" ){
					pts.push.apply( pts, this.construct_continuous( item ) )
				} else {
					var __obj = this.enum( { class : item.class || "" }, 'ref', item );
					this.enum( item, 'ref', [ __obj ] );

					pts.push( this.update_value( __obj, item.point || item ) );
				}
			}.bind( this ) );

			this.setData( 'fake_pts', pts );
		}.bind( this ) );
	}.observes( 'ltPropItem' ),

	construct_continuous : function( __frm ){
		var __this = this,
		__data = __this.data,
		__dim = __data.ltPropAnchorDim,
		__ignore = __data.ltPropIgnoreCornerPoints,
		__arr = [],
		frm_arr = __frm.ref || ( __this.enum( __frm, 'ref', [] ).ref ),

		bcr = __this.$node.getBoundingClientRect(),
		__width = __dim.width,
		__height = __dim.height,
		__spacing = __dim.spacing,
		shape_width = bcr.width,
		shape_height = bcr.height,
		__length = shape_width * 2 + shape_height * 2,
		half_length = __length / 2,
		__count = -__width - __spacing,
		neg,
		sub_neg;

		while( true ){
			var obj = __this.enum( {}, 'ref', __frm ),
			pos = [];

			if( neg ){

				if( sub_neg ){
					
					__count += ( __height + __spacing );

					pos[ 0 ] = 0;
					pos[ 1 ] = ( shape_height - ( __count - half_length - shape_width ) ) / shape_height;
				} else {
					__count += ( __width + __spacing );

					pos[ 1 ] = 1;
					pos[ 0 ] = ( shape_width - ( __count - half_length ) ) / shape_width;

					if( __count >= ( half_length + shape_width ) ){
						sub_neg = true;
						if( __ignore ){
							__count = half_length + shape_width;
							continue;
						} else if( __count > ( half_length + shape_width ) ) {
							__count -= ( __width + __spacing );
							continue;
						}
					}
				}

				if( __count > __length ){
					break;
				}
			} else {
				if( __count >= shape_width ){
					__count += ( __height + __spacing );

					if( __count > half_length ){
						__ignore ? __count = half_length : __count -= ( __height + __spacing )
						neg = true;
						continue;
					}

					pos[ 0 ] = 1;
					pos[ 1 ] = ( __count - shape_width ) / shape_height;
				} else {
					__count += ( __width + __spacing );
					pos[ 1 ] = 0;
					pos[ 0 ] = __count / shape_width;
				}

			}

			var ret = __this.update_value( obj, pos ),
			rgx = /^(0|1)$/;

			if( __ignore && rgx.test( ret.left ) && rgx.test( ret.top ) ){
				continue;
			}

			frm_arr.push( obj );
			__arr.push( ret );
		}

		return __arr;
	},

	update_value : function( obj, item ){

		var LC = Lyte.objectUtils,
		_left = item[ 0 ],
		_top = item[ 1 ],
		fn = function(){
			if( _left == 0 ){
				return 180;
			} else if( _left == 1 ){
				return 0;
			}

			if( _top == 1 ){
				return 90;
			}

			return 270;
		};	


		LC( obj, 'add', 'style', "--leftValue:" + ( _left * 100 ) + '%;--topValue:'  + ( _top * 100 ) + '%;' );
		LC( obj, 'add', 'left', _left );
		LC( obj, 'add', 'top', _top );
		LC( obj, 'add', 'angle', fn() );

		return obj;
	},

	enum : function( obj, key, value ){

		Object.defineProperty( obj, key,  {
	        value: value,
	        enumerable: false,
	        writable: true,
	        configurable: true
	    });

		return obj;
	}
});

Lyte.Component.registerHelper( 'renderPoint', function( item, bool ){

	return bool || item.class == "lyteConnectAnywhereAnchor";
});