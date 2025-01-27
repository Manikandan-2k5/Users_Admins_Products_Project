/**
 * This component is used to render a audio content in the document
 * @component lyte-voicenote
 * @version 3.29.0
 * @dependency lyte-dropdown
 * 	components/lyte-dropdown.js
 *  theme/compiledCSS/default/ltr/lyte-ui-dropdown.css
 * @dependency lyte-popover
 *  components/lyte-popover.js
 *  theme/compiledCSS/default/ltr/lyte-ui-popover.css
 *  components/lyte-wormhole
 * @dependency lyte-multislider
 *  components/lyte-multislider
 * 	theme/compiledCSS/default/ltr/lyte-ui-slider.css
 * @methods onVolumeChange, onProgress, onPause, onPlay
 **/


Lyte.Component.register("lyte-voicenote", {
_template:"<template tag-name=\"lyte-voicenote\"> <template is=\"if\" value=\"{{renderPrefetch}}\"><template case=\"true\"> <div class=\"lyteVoiceNotePrefetchContainer\"> <div class=\"lyteVoiceNotePrefetchPlayIcon\" onclick=\"{{action('prefetch')}}\"> <div class=\"lyteCircleLoader\"> <span class=\"lyteCircleInnerLoader\"></span> </div> </div> <div class=\"lyteVoiceNotePrefetchLoadBarWrap\"> <template is=\"if\" value=\"{{ltPropLoadingMessage}}\"><template case=\"true\"> <span class=\"lyteVoiceNotePrefetchMessage\">{{ltPropLoadingMessage}}</span> </template></template> <span class=\"lyteVoiceNotePrefetchLoadingBar\"></span> </div> </div> </template><template case=\"false\"> <span class=\"lyteVoiceNotePausePlayIcon {{state}}\" onclick=\"{{action('toggle')}}\"></span> <audio onpause=\"{{action('pause')}}\" onplay=\"{{action('play')}}\" onvolumechange=\"{{action('changeVolume',event)}}\" onloadedmetadata=\"{{action('meta',event)}}\" ontimeupdate=\"{{action('update',event)}}\" preload=\"{{ltPropPreload}}\" onprogress=\"{{action('progress',this)}}\"> <template is=\"for\" items=\"{{ltPropSrc}}\" item=\"item\" index=\"index\"> <source onerror=\"{{action('error',event)}}\" src=\"{{item.src}}\" type=\"{{expHandlers(item.type,'||',&quot;audio/mpeg&quot;)}}\" label=\"{{item.label}}\"> </template> </audio> <div class=\"lyteVoiceNoteProgress\" tabindex=\"0\" onkeydown=\"{{action('keydown',event)}}\" onclick=\"{{action('progressClick',event)}}\"> <span class=\"lyteVoiceNoteCompletion\"></span> <span class=\"lyteVoiceNotePreload\" style=\"{{progressLoad}}\"></span> <span class=\"lyteVoiceNoteHandler\" lt-prop-tooltip-class=\"lyteVoiceNoteTooltip\" onmousedown=\"{{action('mousedown',event)}}\" lt-prop-title=\"{{elapsedTime}}\" lt-prop-tooltip-config=\"{&quot;showdelay&quot;:500,&quot;hidedelay&quot; : 500, &quot;position&quot; : &quot;bottom&quot;}\"></span> </div> </template></template> <time class=\"lyteVoiceNoteElapsedTime\" datetime=\"{{elapsedFormat}}\">{{elapsedTime}}</time> <template is=\"if\" value=\"{{elapsedTime}}\"><template case=\"true\"><span class=\"lyteVoiceNoteTimeSeparate\">/</span></template></template> <time class=\"lyteVoiceNoteDurationSpan\" datetime=\"{{datetimeFormat}}\">{{duration}}</time> <template is=\"if\" value=\"{{ltPropVolumeControl}}\"><template case=\"true\"> <div class=\"lyteVoiceNoteVolumeController\"> <span class=\"lyteVoiceNoteVolumeControl {{randomClass}}{{if(muted,' lyteVoiceNoteMuteIcon','')}}{{fullVolume}}\" onclick=\"{{action('togglePop')}}\"></span> <lyte-popover lt-prop-scrollable=\"true\" lt-prop=\"{{ltPropPopover}}\" lt-prop-show=\"{{lbind(popShow)}}\" lt-prop-origin-elem=\".{{randomClass}}\" lt-prop-content-padding=\"\"> <template is=\"registerYield\" yield-name=\"popover\"> <lyte-popover-content class=\"lyteVoiceNotePopover\"> <div class=\"lyteVoiceNoteVolumeSlider\"> <span class=\"lyteVoiceNoteVolumeIcon{{if(muted,' lyteVoiceNoteMuteIcon','')}}{{fullVolume}}\" onclick=\"{{action('onMute')}}\"></span> <lyte-multislider lt-prop-max=\"1\" lt-prop-fill-color=\"#ddd\" lt-prop-height=\"2px\" lt-prop-yield=\"true\" lt-prop-width=\"60px\" lt-prop-handler=\"lyteCircle\" lt-prop-value=\"[ { &quot;value&quot; : {{ltPropVolume}}, &quot;min&quot; : 0, &quot;max&quot; : 1 } ]\" on-change=\"{{method('setVolume')}}\" lt-prop-color=\"[&quot;#61A6E8&quot; ]\"></lyte-multislider> </div> </lyte-popover-content> </template> </lyte-popover> </div> </template></template><template is=\"if\" value=\"{{ltPropPlaybackRate}}\"><template case=\"true\"> <lyte-dropdown class=\"lyteVoiceNotePlaybackRate\" lt-prop-selected=\"{{lbind(ltPropPlaybackRate)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-box class=\"lyteVoiceNotePlaybackRateDropbox\"> <lyte-drop-body> <template is=\"for\" items=\"{{ltPropPlaybackOptions}}\" item=\"item\" index=\"index\"> <lyte-drop-item data-value=\"{{item.value}}\">{{item.label}}</lyte-drop-item> </template> </lyte-drop-body> </lyte-drop-box> </template> </lyte-dropdown> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3,1]},{"type":"if","position":[1,3,1],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[3]},{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[1]}]},{"type":"attr","position":[5]},{"type":"attr","position":[5,3],"attr":{"style":{"name":"style","dynamicValue":"progressLoad"}}},{"type":"attr","position":[5,5]}]}},"default":{}},{"type":"attr","position":[3]},{"type":"text","position":[3,0]},{"type":"attr","position":[5]},{"type":"if","position":[5],"cases":{"true":{"dynamicNodes":[]}},"default":{}},{"type":"attr","position":[7]},{"type":"text","position":[7,0]},{"type":"attr","position":[9]},{"type":"if","position":[9],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"registerYield","position":[1,3,1],"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"componentDynamic","position":[1,1,3]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,3]}]}},"default":{}},{"type":"attr","position":[10]},{"type":"if","position":[10],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropSrc","ltPropVolumeControl","ltPropVolume","ltPropPreload","ltPropPopover","ltPropPlaybackRate","ltPropPlaybackOptions","ltPropPrefetch","ltPropPrefetchOptions","ltPropRefresh","ltPropLoadingMessage","renderPrefetch","prefetchLoading","state","duration","datetimeFormat","elapsedTime","elapsedFormat","progressLoad","muted","popShow","randomClass","fullVolume"],


	init : function(){
		var __data = this.data;

		if( __data.ltPropPrefetch ){
			__data.renderPrefetch = true;
		}
	},

	didConnect : function(){

		if( this.data.renderPrefetch ){
			return;
		}

		this._audio = this.$node.querySelector( "audio" );
		this._hander = this.$node.getElementsByClassName( "lyteVoiceNoteHandler" )[ 0 ];
		this._completion = this.$node.getElementsByClassName( 'lyteVoiceNoteCompletion' )[ 0 ];
		this._defaultVolume = 0.5;

		this.setData( 'fullVolume', this.data.ltPropVolume == 1 ? ' lyteVoiceNoteFullVolumeIcon' : "" );
	},

	didDestroy : function(){
		delete this._audio;
		delete this._hander;
		delete this._completion;
		delete this._defaultVolume;

		if( this.__preloaded ){
			var src = this.data.ltPropSrc[ 0 ];
			src && URL.revokeObjectURL( src.src );
		}
	},

	rateChange : function( arg ){
		var __data = this.data;
		if( __data.renderPrefetch ){
			return;
		}

		if( arg && arg.item == "renderPrefetch" ){
			this.didConnect();
		}

		this._audio.playBackRate = __data.ltPropPlaybackRate || 1;
	}.observes( 'ltPropPlaybackRate', 'renderPrefetch' ).on( 'didConnect' ),

	left : function(){
		return _lyteUiUtils.getRTL() ? "right" : "left";
	},

	data : function(){
		return {
			/**
			 * @componentProperty {Object[]} ltPropSrc
			 * @default []
			 * @version 3.29.0
			 */
			ltPropSrc : Lyte.attr( "array", { default : [] } ),
			/**
			 * @componentProperty {boolean} ltPropVolumeControl=true
			 * @version 3.29.0
			 */
			ltPropVolumeControl : Lyte.attr( "boolean", { default : true}),
			/**
			 * @componentProperty {number} ltPropVolume=1
			 * @version 3.29.0
			 */
			ltPropVolume : Lyte.attr( "number", { default : 1}),

			/**
			 * @componentProperty {boolean} ltPropShow=true
			 * @version 3.54.0
			 */

			ltPropPreload : Lyte.attr( 'string', { default : 'metadata' } ),
			/**
			 * @componentProperty {string} ltPropPopover={"freeze" : false, "showCloseButton" : false}
			 * @component lyte-popover
			 * @version 3.29.0
			 */
			ltPropPopover : Lyte.attr( 'string', { default : '{"freeze" : false, "showCloseButton" : false}' } ),
			/**
			 * @componentProperty {number} ltPropPlaybackRate=1
			 * @version 3.29.0
			 */
			ltPropPlaybackRate : Lyte.attr( 'number', { default : 1 } ),

			/**
			 * @typedef optionsDef
			 * @property {string} label
			 * @property {string} value
			 */

			/**
			 * @componentProperty {optionsDef[]} ltPropPlaybackOptions
			 * @default [{"la[{"label":"0.25x","value":0.25},{"label":"0.5x","value":0.5},{"label":"0.75x","value":0.75},{"label":"1x","value":1},{"label":"1.25x","value":1.25},{"label":"1.5x","value":1.5},{"label":"1.75x","value":1.75}]bel":"0.25x","value":0.25},{"label":"0.5x","value":0.5},{"label":"0.75x","value":0.75},{"label":"1x","value":1},{"label":"1.25x","value":1.25},{"label":"1.5x","value":1.5},{"label":"1.75x","value":1.75}]
			 * @version 3.29.0
			 */

			ltPropPlaybackOptions : Lyte.attr( 'array', { default : [
				{
					label : "0.25x",
					value : 0.25
				},
				{
					label : "0.5x",
					value : 0.5
				},
				{
					label : "0.75x",
					value : 0.75
				},
				{
					label : "1x",
					value : 1
				},
				{
					label : "1.25x",
					value : 1.25
				},
				{
					label : "1.5x",
					value : 1.5
				},
				{
					label : "1.75x",
					value : 1.75
				}
			] } ),

			/**
			 * @componentProperty {boolean} ltPropPrefetch
			 * @version 3.54.0
			 */

			ltPropPrefetch : Lyte.attr( 'boolean' ),
			/**
			 * @componentProperty {object} ltPropPrefetchOptions
			 * @default {"method":"GET","mode":"cors","credentials":"include"}
			 * @version 3.54.0
			 */
			ltPropPrefetchOptions : Lyte.attr( 'object', { default : {
					method:'GET',
					mode:'cors',
					credentials:'include'
				}  
			}),
			/**
			 * @componentProperty {boolean} ltPropRefresh=false
			 * @version 3.54.0
			 */
			ltPropRefresh : Lyte.attr( 'boolean', { default : false } ),
			/**
			 * @componentProperty {string} ltPropLoadingMessage=''
			 * @version 3.54.0
			 */
			ltPropLoadingMessage : Lyte.attr( 'string', { default : "" } ),

			// system data

			renderPrefetch : Lyte.attr( 'boolean', { default : false } ),
			prefetchLoading : Lyte.attr( 'string', { default : '' } ),

			state : Lyte.attr( "string", { default : "paused" } ),
			duration : Lyte.attr( "string", { default : "0.00" } ),
			datetimeFormat : Lyte.attr( "string", { default : "" } ),
			elapsedTime : Lyte.attr( "string", { default : "0.00" } ),
			elapsedFormat : Lyte.attr( "string", { default : "" } ),
			progressLoad : Lyte.attr( 'string', { default : "width:0" } ),
			muted : Lyte.attr( 'boolean', { default : false } ),
			popShow : Lyte.attr( 'boolean', { default : false } ),
			randomClass : Lyte.attr( 'string', { default : "lyteVoice" + Date.now() } ),

			fullVolume : Lyte.attr( 'string', { default : "" } )
		}		
	},
	read_duration : function( sec_check ){
		var abs = Math.round( sec_check ),
		secs = abs % 60,
		mins_check = parseInt( abs / 60 ),
		mins = mins_check % 60,
		hrs = parseInt( mins_check / 60 );

		return{
			sec : secs,
			min : mins,
			hr : hrs
		};
	},

	display_format : function( arg, obj ){
		var str = '',
		___sec = arg.sec;

		if( arg.hr ){
			str += ( arg.hr + ( obj.hr || ":" ) );
		}

		str += ( ( arg.min || 0 ) + ( obj.min || ":" ) );
		str += ( ( ___sec > 9 ? ___sec : ( '0' + ___sec )  ) + ( obj.sec || '' ) );

		return str;
	},

	update_time : function( evt ){
		var elem = evt.target,
		bcr = this._bcr || elem.getBoundingClientRect(),
		left = this.left(),
		width = bcr.width,
		diff = Math.min( Math.abs( evt.clientX - bcr[ left ] ), width ),
		audio = this._audio,
		duration = audio.duration;

		if( isNaN( duration ) ){
			return;
		}

		audio.currentTime = Math.max( 0, Math.min( duration - 1, ( duration * ( diff / width ) ).toFixed( 2 ) ) ); 
	},

	mousemove : function( ev ){
		var touches = ev.touches || [],
		length = touches.length,
		evt = touches[ 0 ] || ev;

		if( length > 1 ){
			return;
		}

		if( length ){
			ev.preventDefault();
		}

		var bcr = this._bcr,
		clientX = Math.min( Math.max( bcr.left, evt.clientX ), bcr.right ),
		node = this._hander,
		tooltip = node.tooltip;

		if( tooltip && tooltip.refresh ){
            tooltip.refresh( { clientX : evt.clientX }, tooltip.tooltipSpan );
        }

		this.update_time( { clientX : clientX } );

	},

	mouseup : function( evt ){

		var isTch = ( evt.touches || [] ).length;

		this.bind_evt( 'removeEventListener', isTch );
		if( this._downstate ){
			this.play();
		}

		this.$node.classList.remove( 'lyteVoiceNoteSlideDown' );

		delete this._move;
		delete this._up;
		delete this._bcr;
		delete this._downstate;
	},

	bind_evt : function( fn, isTch ){
		var doc = document;

		doc[ fn ]( isTch ? 'touchmove' : 'mousemove', this._move, true );
		doc[ fn ]( isTch ? 'touchend' : 'mouseup', this._up, true );
	},

	set_format : function( time, name1, name2 ){
		var format = this.read_duration( time );

		this.setData( name1, this.display_format( format, {} ) );
		this.setData( name2, "PT" + this.display_format( format, { hr : "H", min : "M", sec : "S" } ) );
	},

	play : function(){
		var audio = this._audio,
		_this = this,
		fn = function(){
			delete _this._happening;
			var final = _this._final,
			cb = 'onPlay';
			_this.getMethods( cb ) && _this.executeMethod( cb, _this.$node );

			if( final ){
				delete _this._final;
				_this[ final ]();
			}
		};

		if( this._happening ){
			this._final = 'play';
		} else if( audio.paused ){
			this._happening = true;
			audio.play().then( fn ).catch( fn );
		}
	},

	pause : function(){
		if( this._happening ){
			this._final = 'pause';
		} else {
			this._audio.pause();
			var cb = 'onPause';
			this.getMethods( cb ) && this.executeMethod( cb, this.$node );
		}
	},

	progress : function(){
		if( this.data.ltPropPreload == "auto" ){
			var elem = this._audio,
			range = 0,
			buffer = elem.buffered,
			time = elem.currentTime,
			__length = ( buffer || [] ).length;

			if( __length > 0 ){
				while( ( range < __length ) && !( buffer.start( range ) <= time && time <= buffer.end( range ) ) ){
			        range += 1;
			    }
			    if( range < __length ){
			    	var duration = elem.duration,
			    	loadStartPercentage = buffer.start( range ) / duration,
				    loadEndPercentage = buffer.end( range ) / duration,
				    loadPercentage = loadEndPercentage - loadStartPercentage;

				    this.setData( 'progressLoad', 'width:' + ( ( isNaN( loadPercentage ) ? 0 : loadPercentage ) * 100 )+ '%' );
			    }
			}
		}
	},

	refresh_obs : function( arg ){
		if( arg.newValue ){
			this.prefetch();
			this.setData( arg.item, false );
		}
	}.observes( 'ltPropRefresh' ),

	class_obs : function( arg ){
		$L( this.$node ).addClass( arg.newValue ).removeClass( arg.oldValue );
	}.observes( 'prefetchLoading' ),

	prefetch : function(){
		var __fetch = window.fetch,
		__this = this,
		__data = __this.data,
		ns = 'prefetchLoading',
		__ns = 'lyteVoiceNotePrefetch',
		renderPrefetch = 'renderPrefetch',
		__error = function( err ){
			__this.setData( ns, __ns + "Error" );

			var cb = "onPrefetchError";

			/**
			 * @method onPrefetchError
			 * @version 3.54.0
			 */
			
			if( __this.getMethods( cb ) && __this.executeMethod( cb, err, __this.$node ) == false ){
				return;
			}

			var msg = err.message;

			if( /Access\-Control\-Allow\-Origin/i.test( msg || "" ) || !msg ){
				__this.setData( renderPrefetch, false );
				__this.play();
			}

		},
		src = __data.ltPropSrc[ 0 ] || {};

		if( __this.__preloaded ){
			return;
		}

		if( __fetch ){

			var cb = "onBeforePrefetch";

			/**
			 * @method onBeforePrefetch
			 * @version 3.54.0
			 */

			if( __this.getMethods( cb ) && __this.executeMethod( cb, __this.$node ) == false ){
				return;
			}

			__this.setData( ns, __ns + 'Loading' );
			__fetch( src.src || "", __data.ltPropPrefetchOptions ).then( function( res ){
				if( /^2..$/.test( res.status ) ){
					return res.blob();
				} else {
					__error( {} );
				}
			}).then( function( blob ){

				if( !blob ){
					return;
				}
				
				__this.setData( ns, __ns + 'Success' );

				var __url = URL.createObjectURL( blob ),
				cb = "onPrefetchSuccess";

				/**
				 * @method onPrefetchSuccess
				 * @version 3.54.0
				 */
				
				Lyte.objectUtils( src, 'add', 'src', __url );
				__this.getMethods( cb ) && __this.executeMethod( cb, __url, __this.$node );

				__this.setData( renderPrefetch, !( __this.__preloaded = true ) );

				// __this.play();
			}.bind( __this ) ).catch( __error );
		}
	},

	actions : {

		prefetch : function(){
			this.prefetch();
		},

		togglePop : function(){
			this.setData( 'popShow', !this.data.popShow );
		},

		error : function( evt ){
			var cb = "onError",
			ns = "lyteVoiceNote";

			$L( this.$node ).addClass( ns + "Error" ).removeClass( ns + 'MetaLoaded' );

			this._audio.pause();

			/**
			 * @method onError
			 * @version 3.54.0
			 */

			this.getMethods( cb ) && this.executeMethod( cb, evt, this.$node );
		},

		keydown : function( evt ){
			var keycode = evt.which || evt.keyCode,
			audio = this._audio,
			duration = audio.duration,
			currentTime = audio.currentTime;

			if( !/^3(7|9)$/.test( keycode ) ){
				return;
			}

			evt.preventDefault();

			this._state = !audio.paused;

			this.pause();

			audio.currentTime = Math.max( 0, Math.min( duration - 1, currentTime + ( 5 * ( keycode == 37 ? -1 : 1 ) ) ) );
		},

		pause : function(){
			this.setData( "state", "paused" );
			return false;
		},

		play : function(){
			this.setData( "state", "" );
			return false;
		},

		progress : function(){
			this.progress();
		},

		mousedown : function( ev ){

			var touches = ev.touches || [],
			length = touches.length,
			isTch = length != 0,
			evt = touches[ 0 ] || ev,
			audio = this._audio;

			if( length > 1 ){
				return;
			}

			if( this._downstate = !audio.paused ){
				this.pause();
			}

			this._move = this.mousemove.bind( this );
			this._up = this.mouseup.bind( this );
			this._bcr = evt.target.parentNode.getBoundingClientRect();

			this.bind_evt( "addEventListener", isTch );
			ev.preventDefault();

			this.$node.classList.add( 'lyteVoiceNoteSlideDown' );

		},

		progressClick : function( evt ){
			var elem = evt.target;
			if( elem == this._hander ){
				return;
			}
			this._state = !this._audio.paused;

			this.pause();

			this.update_time( evt );
		},

		meta : function( evt ){
			var audio = this._audio;
			if( !audio ){
				return false;
			}
			var duration = audio.duration,
			ns = "lyteVoiceNote";
			this.set_format( duration, 'duration', 'datetimeFormat' );

			$L( this.$node ).removeClass( ns + 'Error' ).addClass( ns + 'MetaLoaded' );

			return false;
		},

		toggle : function(){
			var audio = this._audio,
			fn = "pause";

			if( audio.paused ){
				fn = "play";
			}

			this[ fn ]();
			return false;
		},

		update : function( evt ){

			this.progress();

			var audio = this._audio,
			time = audio.currentTime,
			duration = audio.duration,
			handle = this._hander,
			tooltip = handle.tooltip;

			if( isNaN( duration ) ){
				return;
			}

			if( tooltip && tooltip.refresh ){
				tooltip.refresh( {}, tooltip.tooltipSpan );
			}

			handle.style[ this.left() ] = this._completion.style.width = ( time / duration * 100 ) + '%';

			$L( this.$node )[ ( audio.ended ? 'add' : "remove" ) + "Class" ]( "lyteVoiceNoteCompleted" );

			if( this._state ){
				this.play();
			}
			delete this._state;

			this.set_format( time, 'elapsedTime', 'elapsedFormat' );

			this.getMethods('onProgress') && this.executeMethod( 'onProgress', audio, time, duration, evt,this.$node);
		},

		onMute : function(){
			var audio = this._audio;

			audio.muted = !audio.muted
		},

		changeVolume : function( evt ){
			var audio = this._audio,
			__data = this.data,
			new_vol,
			is_muted = audio.muted,
			vol = audio.volume,
			mute,
			cb = 'onVolumeChange';

			if( vol > 0 && __data.muted ) {
				mute = audio.muted = false;
				vol = new_vol = audio.volume;
			} else if( !is_muted && vol == 0 ) {
				vol = new_vol = audio.volume = this._defaultVolume;
			} else if( is_muted ){
				mute = true;
				vol = new_vol = 0;
			}

			if( new_vol != void 0 ){
				this.setData( 'ltPropVolume', new_vol );
			}

			if( mute != void 0 ){
				this.setData( 'muted', mute );
			}

			this.getMethods( cb ) && this.executeMethod( cb, audio, evt ,this.$node );

			this.setData( 'fullVolume', vol == 1 ? ' lyteVoiceNoteFullVolumeIcon' : "" );
		}

	},
	methods : {
		setVolume : function ( handlerIndex , currentValue, event, MultiSliderElement ){
			var audio = this._audio;
			
			if( currentValue.value == 0 ){
				audio.muted = true;	
			}
			audio.volume = currentValue.value;
		}
	}
});