/**
 * This component is used to search and filter elements from existing rendered DOM
 * @component lyte-search
 * @version 1.0.0
 * @methods onValueChange,onFocus,onBlur,onBeforeSearch,onSearch
 * @utility setValue
 * @dependency lyte-input
 *  components/lyte-input.js
 *  theme/compiledCSS/default/ltr/lyte-ui-input.css
 * @import lyte-input
 * @ignoreMethods
 * @ignoreUtils revertToSelected,revertToToday
 * @ignoreProperties ltPropRows,ltPropCols,ltPropTextAreaResize,ltPropMax,ltPropMin,ltPropStep,ltPropTimeFormat,ltPropHourInterval,ltPropDefaultTime,ltPropMinuteInterval,ltPropDropdown,ltPropShowInterval,ltPropStartTime,ltPropEndTime,ltPropFillRows,ltPropNumberOfRows,ltPropMinDate,ltPropMaxDate,ltPropStartWeekDay,ltPropMonthHeaderFormat,ltPropYear,ltPropFormat,ltPropStartDate,ltPropEndDate,ltPropCurrentDate,ltPropBindToBody,ltPropCalendarClass,ltPropHeaderType,ltPropDropdownDisabled,ltPropDropdownShow,ltPropDropdownCallout,ltPropDropdownFreeze,ltPropDropdownId,ltPropDropdownClass,ltPropPosition,ltPropBoundary,ltPropWheel,ltPropYield,ltPropAnimate,ltPropPreventSelection,ltPropPreventKeys
 */

Lyte.Component.register("lyte-search",{
_template:"<template tag-name=\"lyte-search\"> <lyte-input lt-prop-auto-update=\"{{ltPropAutoUpdate}}\" lt-prop-tab-index=\"{{ltPropTabIndex}}\" lt-prop-id=\"{{ltPropId}}\" lt-prop-wrapper-style=\"{{ltPropWrapperStyle}}\" lt-prop-class=\"{{ltPropClass}}\" lt-prop-autofocus=\"{{ltPropAutofocus}}\" lt-prop-autocomplete=\"{{ltPropAutocomplete}}\" lt-prop-type=\"{{ltPropType}}\" lt-prop-name=\"{{ltPropName}}\" lt-prop-placeholder=\"{{ltPropPlaceholder}}\" lt-prop-width=\"{{ltPropWidth}}\" lt-prop-height=\"{{ltPropHeight}}\" onkeyup=\"{{action('keyup',event,this)}}\" lt-prop-style=\"{{ltPropStyle}}\" lt-prop-value=\"{{lbind(ltPropValue)}}\" onkeypress=\"{{action('keypress',event,this)}}\" lt-prop-appearance=\"{{ltPropAppearance}}\" lt-prop-direction=\"{{ltPropDirection}}\" lt-prop-disabled=\"{{ltPropDisabled}}\" lt-prop-readonly=\"{{ltPropReadonly}}\" on-value-change=\"{{method('valuechange')}}\" on-focus=\"{{method('focus')}}\" on-blur=\"{{method('blurEvent')}}\" lt-prop-input-title=\"{{ltPropInputTitle}}\" lt-prop-pattern=\"{{ltPropPattern}}\" lt-prop-maxlength=\"{{ltPropMaxlength}}\" oninput=\"{{action('input',event)}}\" lt-prop-close-icon=\"{{ltPropCloseIcon}}\" is-search=\"true\" lt-prop-update-delay=\"{{ltPropUpdateDelay}}\" lt-prop-aria=\"{{ltPropAria}}\" lt-prop-aria-attributes=\"{{ltPropAriaAttributes}}\" lt-prop-focus=\"{{lbind(ltPropFocus)}}\" class=\"lyteSearchInput\" lt-prop=\"{{ltPropInput}}\"></lyte-input> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}],
_observedAttributes :["ltPropAutocomplete","ltPropPlaceholder","ltPropAutofocus","ltPropDisabled","ltPropStyle","ltPropMaxlength","ltPropReadonly","ltPropId","ltPropClass","ltPropType","ltPropName","ltPropWidth","ltPropHeight","ltPropValue","ltPropAppearance","ltPropDirection","ltPropQuerySelector","ltPropMinLength","ltPropMethod","ltPropWrapperStyle","ltPropTabIndex","ltPropAjaxRequest","ltPropAutoUpdate","ltPropPattern","ltPropInputTitle","ltPropCloseIcon","ltPropUpdateDelay","ltPropSearchDelay","ltPropCaseSensitive","ltPropComponent","ltPropTrim","ltPropFocus","ltPropDiacritic","ltPropMaintainState","ltPropPreventEmptyKeys","ltPropMultipleSearch","ltPropIgnoreChildren","ltPropInput","ltPropDontHideOnEmpty","ltPropAria","ltPropAriaAttributes","timeout","ltPropCheckFromParent"],


   init : function(){
       /**
        * @method beforeRender
        * @version 1.0.1
        */
        this.getMethods( 'beforeRender' ) && this.executeMethod( 'beforeRender', this.$node );
    },
    didConnect : function(){

        this.$node.setValue = function( value, evt ) {
            this.$node.ltProp( 'value', value );
            this.pressFunc( value || '', evt || {} );
            clearTimeout( this.data.timeout )
            clearTimeout( this._iptime );
            delete this._minlengthfail;
        }.bind( this );
       /**
        * @method afterRender
        * @version 1.0.1
        */
        this.getMethods( 'afterRender' ) && this.executeMethod( 'afterRender', this.$node );

        [ 'focus', 'blur', 'click', 'select' ].forEach( function( item ){
            this.$node[ item ] = function( arg ){
                this.$node.querySelector( 'lyte-input' )[ item ]( arg );
            }.bind( this )
        }.bind( this ) )

         $L.fastdom.measure( function(){
            var fg = _lyteUiUtils.getRTL();
            if( fg ) {
               $L.fastdom.mutate( function(){
                  this.$node.classList.add( 'lyteRTL' )
               }.bind( this ) )
            }
          }.bind( this ) );

         var comp =  this.data.ltPropComponent, query = this.data.ltPropQuerySelector;
         if( comp == "accordion" ) {
              query.related  = "lyte-accordion-item";
         } else if( comp == "tree" ){
            query.related = ".lyteTreeBodyDiv lyte-yield:not(.noChildClass) lyte-tree-icon";
         }
    },

    didDestroy : function(){
        clearTimeout( this.data.timeout )
        clearTimeout( this._iptime );
        delete this.$node.setValue;
        delete this.$node.focus;  delete this.$node.blur;  delete this.$node.click;  delete this.$node.select;
    },

     data : function (){
        var default_values = _lyteUiUtils.getDefault( 'lyte-search' ),
        __string = "string",
        __boolean = "boolean",
        __number = "number",
        __object = "object",
        __value;

          return {
             ltPropAutocomplete : Lyte.attr( __string, { default : default_values.autocomplete || 'off' }),
             ltPropPlaceholder : Lyte.attr(__string, { default : default_values.search || '' }),
             ltPropAutofocus : Lyte.attr( __boolean, { default : default_values.autofocus || false }),
             ltPropDisabled : Lyte.attr( __boolean, { default : false }),
             ltPropStyle : Lyte.attr( __string,{ default : default_values.style || '' }),
             ltPropMaxlength : Lyte.attr( __number, { default : default_values.maxlength || 25 }),
             ltPropReadonly : Lyte.attr( __boolean, { default : false }),
             ltPropId : Lyte.attr( __string, { default : default_values.id || 'inputId' }),
             ltPropClass : Lyte.attr( __string, { default : default_values.class || '' }),
             ltPropType : Lyte.attr( __string, { default : 'search'}),
             ltPropName : Lyte.attr( __string, { default : '' }),
             ltPropWidth : Lyte.attr( __string, { default : default_values.width || '100%' }),
             ltPropHeight  : Lyte.attr( __string, { default : default_values.height || '' }),
             ltPropValue : Lyte.attr( __string, { default : ''}),
             ltPropAppearance : Lyte.attr( __string, { default : default_values.appearance || 'flat' }),
             ltPropDirection : Lyte.attr( __string,{ default : default_values.direction || 'vertical'}),
             /**
              * @typedef {object} searchQuery
              * @property {string} scope
              * @property {string} search
              * @property {string} target
              */

             /**
              * @componentProperty {searchQuery} ltPropQuerySelector
              * @version 1.0.0
              * @default {}
              */
             ltPropQuerySelector : Lyte.attr( __object, { default : {} }),
             /**
              * @componentProperty {number} ltPropMinLength=1
              * @version 1.0.0
              */
             ltPropMinLength : Lyte.attr( __number, { default : ( __value = default_values.minLength ) == void 0 ? 1 : __value }),
             /**
              * @componentProperty {startsWith | endsWith | contains} ltPropMethod=contains
              * @version 1.0.0
              */
             ltPropMethod : Lyte.attr( __string, { default : default_values.method || 'contains' }),
             ltPropWrapperStyle : Lyte.attr( __string, { default : default_values.wrapperStyle || '' }),
             ltPropTabIndex : Lyte.attr( __string, { default : default_values.tabIndex || '0' }),
             /**
              * @experimental ltPropAjaxRequest
              */
             ltPropAjaxRequest : Lyte.attr( __object, { default : {}}),
             ltPropAutoUpdate : Lyte.attr( __boolean, { default : true}),
             ltPropPattern : Lyte.attr( __string, { default : default_values.pattern || '.+' }),
             ltPropInputTitle : Lyte.attr( __string, { default : '' }),
             ltPropCloseIcon : Lyte.attr( __boolean, { default : default_values.closeIcon || false } ),
             ltPropUpdateDelay : Lyte.attr( __number, { default : default_values.hasOwnProperty( 'updateDelay' ) ? default_values.updateDelay : 250 } ),
             ltPropSearchDelay : Lyte.attr( __number, { default : default_values.hasOwnProperty( 'searchDelay' ) ? default_values.searchDelay : 100 } ),
             /**
              * @componentProperty {boolean} ltPropCaseSensitive=false
              * @version 2.2.10
              */
             ltPropCaseSensitive : Lyte.attr( __boolean, { default : default_values.caseSensitive || false } ),
             /**
              * @componentProperty {string} ltPropComponent
              * @version 2.0.0
              */
             ltPropComponent : Lyte.attr( __string, { default : undefined } ),
             /**
              * @componentProperty {boolean} ltPropTrim=false
              * @version 2.2.6
              */
             ltPropTrim : Lyte.attr( __boolean, { default : default_values.trim || false } ),
             ltPropFocus : Lyte.attr( __boolean, { default : default_values.focus || false } ),

             /**
              * @componentProperty {boolean} ltPropDiacritic=false
              * @version 3.12.0
              */

             ltPropDiacritic : Lyte.attr( __boolean, { default : default_values.diacritic || false } ),

             /**
              * @componentProperty {boolean} ltPropMaintainState=true
              * @version 3.16.3
              */

             ltPropMaintainState : Lyte.attr( __boolean, { default : ( __value = default_values.maintainState ) == void 0 ? true : __value } ),

             /**
              * @componentProperty {boolean} ltPropPreventEmptyType=false
              * @version 3.19.3
              */

             ltPropPreventEmptyKeys : Lyte.attr( __boolean, { default : default_values.preventEmptyKeys || false } ),

            /**
              * @componentProperty {boolean} ltPropMultipleSearch=false
              * @version 3.25.0
              */

             ltPropMultipleSearch : Lyte.attr( __boolean, { default : default_values.multipleSearch || false } ),

             /**
              * @componentProperty {boolean} ltPropIgnoreChildren=false
              * @version 3.27.0
              */

              ltPropIgnoreChildren : Lyte.attr( __boolean, { default : default_values.ignoreChildren || false } ),

             /**
              * @componentProperty {string} ltPropInput='{}'
              * @version 3.39.0
              */

              ltPropInput : Lyte.attr( __string, { default : default_values.input || '{}' } ),

              /**
                * @componentProperty {string} ltPropInput='{}'
                * @version 3.64.0
                */

              ltPropDontHideOnEmpty : Lyte.attr( __boolean, { default : default_values.aria || false } ),

             // aria
             ltPropAria : Lyte.attr( __boolean, { default : default_values.aria || false } ),
             ltPropAriaAttributes : Lyte.attr( __object, { default : default_values.ariaAttributes || {}, watch : true } ),

             //system data
             timeout : Lyte.attr( __number, { default : undefined}),
             ltPropCheckFromParent : Lyte.attr( __boolean, { default : false})

           }
       },

      methods : {
         blurEvent : function(arg1){
           this.getMethods( 'onBlur' ) && this.executeMethod( 'onBlur', arg1, this.$node );
        },

        focus :function( arg1 ){
            this.getMethods( 'onFocus' ) && this.executeMethod( 'onFocus', arg1, this.$node );
        },

        valuechange : function( arg1 ){
            this.getMethods( 'onValueChange' ) && this.executeMethod( 'onValueChange', arg1, this.$node );
        }
      },

// Function for finding textContents when data were not properly given for DOM search
      searchList : function( nodeName ){
              var searchList=[];
              var target=[],
              query=this.getData('ltPropQuerySelector')
              if(typeof query =="string")
                  {
                      query=JSON.parse(query);
                  }
              for(var i=0;i<nodeName.childElementCount;i++)
                {
                  var _children = nodeName.children[ i ];

                  while( _children.childElementCount)
                     {
                        var returnedVal=this.searchList.call(this, _children);
                        searchList=searchList.concat(returnedVal[0]);
                        target=target.concat(returnedVal[1]);
                        break;
                     }
                  if(! _children.childElementCount)
                      {
                        var valueToPush = _children.textContent;
                        if( this.data.ltPropDiacritic ){
                          valueToPush = _lyteUiUtils.convert_diacritics( valueToPush );
                        }
                        searchList.push( valueToPush );
                        if(query.target)
                          {
                            var scope = this.getScope( typeof query.scope == 'string' ? document.body.querySelector( query.scope.trim() ) : query.scope ),
                            targetList= scope.querySelectorAll( query.target ),
                            node= _children;
                            while(node != scope)
                              {
                                var flag=false;
                                for(var j=0;j<targetList.length;j++)
                                  {
                                      if(node==targetList[j])
                                         {
                                            target.push(node);
                                            flag=true;
                                            break;
                                         }
                                  }
                                if(flag)
                                    {
                                        break;
                                    }
                                 else
                                   {
                                      node=node.parentElement;
                                   }
                              }
                          }
                        else
                          {
                            target.push( _children );
                          }
                    }
                }
              return [searchList,target];
         },

     actions : {
        "on-ip-clear" : function( evt ){
              this.$node.setValue( '', { type : 'clear' } );
              /**
               * @method onClear
               * @version 2.2.9
               */
              this.getMethods( 'onClear' ) && this.executeMethod( 'onClear', this.$node );
          },
         "keypress":function( event ){
               var keyCode = event.keyCode
               if(!( keyCode >= 37 && keyCode <= 40 ) && keyCode != 13 ) {
                  event.stopPropagation()
                }
            },
        //filtering process  checks
        "keyup":function( event, lyteInput ){
              var keyCode = event.which || event.keyCode,
              prevent = this.data.ltPropPreventEmptyKeys;

              if( [ 37,13,38,39,40,27 ].indexOf( keyCode ) > -1 ) {
                return
              }

              clearTimeout( this._iptime );

              if( prevent ){
                 if( this._iptime == void 0 ){
                      return;
                 }
                 delete this._iptime;
              }

              clearTimeout( this.data.timeout )

              var val = event.target.value,
              minLength = this.data.ltPropMinLength,
              isPassed = val.length >= minLength;

              if( isPassed ){
                 delete this._minlengthfail;
              } else {
                  if( prevent && this._minlengthfail ){
                     return;
                  }
                  this._minlengthfail = true;
                  if( /^8|91|17|46$/i.test( keyCode ) ){
                    isPassed = true;
                  }
              }

              if( isPassed ){
                    var dly = this.data.ltPropSearchDelay
                      if( dly != undefined ) {
                          this.timeout = setTimeout( this.pressFunc.bind( this ), dly, val, event )
                       } else {
                         this.pressFunc.call(this, val, event )
                       }
                }
            },
        'input' :  function( evt ) {
              var delay = this.data.ltPropSearchDelay,
              minLength = this.data.ltPropMinLength,
              value = evt.target.value;
              clearTimeout( this._iptime );

              if( value.length >= minLength ){
                if( delay == undefined ){
                   this.pressFunc( value, event );
                } else {
                   // this._iptime = setTimeout( this.pressFunc.bind( this ), 250, value, evt );

                   this._iptime = setTimeout( function(){
                        delete this._iptime;
                        this.pressFunc( value, evt );
                   }.bind( this ), 250 );
                }
              }
          }
        },

        fNcase : function( str ){
            if( !this.data.ltPropCaseSensitive ){
              str = str.toLowerCase();
            }
            if( this.data.ltPropTrim ){
              str = str.trim();
            }
            return str;
        },

         multi_search : function( value, evt ){
           var data = this.data,
           query = data.ltPropQuerySelector,
           scope = $L( query.scope ),
           search = Array.from( scope.find( query.search ) ),
           dia = data.ltPropDiacritic,
           visible = [],
           hidden = [],
           _this = this;

           value = _this.fNcase( value );

           search.forEach( function( item ){
               var target = $L( item ).closest( query.target, scope ).get( 0 ),
               txt_value = _this.fNcase( item.textContent );

               if( dia ){
                  txt_value = _lyteUiUtils.convert_diacritics( txt_value );
               }

               if( !value || _this.switchfn( data.ltPropMethod, value, txt_value ) ){
                  visible.push( target );
               } else {
                  hidden.push( target );
               }
           });

           if( this.getMethods( 'onSearch' ) && this.executeMethod( 'onSearch', visible, this.$node, evt, value, hidden ) == false ){
              return;
           }

           this.common_hide( visible, hidden, evt );
        },

        common_hide : function( visible, hidden, evt ){
          function fn( arr, cls ){
              arr.forEach( function( item ){
                  $L( item )[ cls ]( 'lyteSearchHidden' );
              });
           }

           fn( hidden, 'addClass' );
           fn( visible, 'removeClass' );

           if( evt != "ignore" ){
              this.getMethods( 'onAfterSearch' ) && this.executeMethod( 'onAfterSearch', visible, evt, this.$node );
            }
        },

        check_label : function( visible, hidden, related, label, target_visible, target_hidden, evt, value ){
          var visible_groups = [],
          hidden_groups = [],
          cb = 'onSearch',
          fn 

          Array.from( related ).forEach( function( item ){
              var label_dom = item.querySelector( label );
              if( label_dom ){
                  var is_visible = visible.indexOf( label_dom ) + 1;

                  if( is_visible ){
                      var len = hidden.length;

                      for( var i = 0; i < len; i++ ){
                          var cur = hidden[ i ];
                          if( item.contains( cur ) ){
                            visible.push( cur );
                            target_visible.push( target_hidden[ i ] );
                            target_hidden.splice( i, 1 );
                            hidden.splice( i--, 1 );
                            len--;
                          }
                      }

                      visible_groups.push( item );
                  } else {
                     var len = visible.length;

                     for( var i = 0; i < len; i++ ){
                        var cur = visible[ i ];
                        if( item.contains( cur ) ){
                            visible.push( label_dom );
                            var index = hidden.indexOf( label_dom );
                            hidden.splice( index, 1 );
                            target_visible.push( target_hidden[ index ] );
                            target_hidden.splice( index, 1 );
                            break;
                        }
                     }

                     if( i == len ){
                        hidden_groups.push( item );
                     } else{
                        visible_groups.push( item );
                     }
                  }

              }
          });

          if( this.getMethods( cb ) && this.executeMethod( cb, visible, this.$node, evt, value, hidden ) == false ){
               return;
          }

          this.common_hide( visible_groups, hidden_groups, "ignore" );
          this.common_hide( visible, hidden, evt );

        },

        filteringArray : function(searchList, targetList, val, searchComp, evt, related, label ){
            var method = this.getData('ltPropMethod'), visibleList = [], hiddenList = [],
            target_visible = [],
            target_hidden = [];

            val = this.fNcase( val );
            if( val.length )
                {

                  var __len = searchList.length;

                  for( var i = 0; i < __len; i++ ){
                      var current = searchComp[ i ],
                      current_target = targetList[ i ];

                      if( this.switchfn( method, val, this.fNcase( searchList[ i ].trim() ) ) ){
                          visibleList.push( current );
                          target_visible.push( current_target );
                      } else {
                          hiddenList.push( current );
                          target_hidden.push( current_target );
                      }
                  }
                }
             else
                {
                   visibleList = Array.apply( Array, searchComp );
                   target_visible = Array.from( targetList );
                }

                if( label ){
                    return this.check_label( visibleList, hiddenList, related, label, target_visible, target_hidden, evt, val );
                }

              if( this.getMethods( 'onSearch' ) && this.executeMethod( 'onSearch', visibleList, this.$node, evt && evt.type == 'clear'? {} : evt, val, hiddenList ) == false ){
                 return;
              }
             if( this.data.ltPropSearchDelay == undefined ) {
                this.hideProcess( searchList, targetList, method, val, related, evt, hiddenList, visibleList );
             } else {
                $L.fastdom.mutate( this.hideProcess.bind( this, searchList, targetList, method, val, related, evt, hiddenList, visibleList ) )
             }
        },

        switchfn : function( method, val, str ){
          var check;
          switch( method )
            {
              case 'contains' : {
                  check = str.indexOf( val ) >= 0
                  break;
               }
               case 'startsWith' : {
                    check = str.indexOf( val ) == 0;
                    break;
               }
               case 'endsWith' : {
                    var ind = str.lastIndexOf( val );
                    if( ind != -1 ){
                      check = ( ind  + val.length ) == str.length;
                    }
                    break;
               }
            }
            return check;
        },

        hideProcess : function( searchList, targetList, method, val, related, evt, hiddenList, visibleList ){
            var query = this.data.ltPropQuerySelector, 
            val = this.fNcase( val ),
            hidden_class = 'lyteSearchHidden',
            component = this.data.ltPropComponent;

            for( var i = 0; i < searchList.length; i++ ) {
               this.additionalHand( targetList[ i ],  this.switchfn( method, val, this.fNcase( searchList[i].trim() ) ) );
            }

           for( var i = 0; i < related.length; i++ ) {

            var __current = related[ i ];

              if( component == "accordion" && __current._state == undefined ){
                 if( !__current.querySelector( 'lyte-accordion-body' ) ){
                    if( !val ){
                      __current.classList.remove( hidden_class );
                    } else{
                      __current.classList.add( hidden_class );
                    }
                    continue;
                 }
                 __current._state = __current.classList.contains( 'lyteAccordionActive' );
              } else if( component == "tree" ){
                if( __current._state == undefined ){
                   __current._state = __current.classList.contains( 'lyteIconOpened' );
                }
                continue;
              }
              if( __current.querySelectorAll( query.target || query.search ).length == __current.querySelectorAll( '.' + hidden_class ).length ) {
                  __current.classList.add( hidden_class );
              } else {
                  __current.classList.remove( hidden_class );
              }
           }

           if( component ){
              var map = {
               accordion : "accfilter",
               tree : 'treefilter',
               duallistbox : "listboxfilter"
             };

             if( map[ component ] ){
                $L.fastdom.measure( this[ map[ component ] ].bind( this, visibleList, hiddenList, val, evt && evt.type == 'clear' ) );
              }
           }

           /**
            * @method onAfterSearch
            * @version 3.86.0
            */

           if( this.getMethods( 'onAfterSearch' ) ){
              this.executeMethod( 'onAfterSearch', visibleList, evt, this.$node );
           }
         },

        listboxfilter : function( vis, hid, value, clear ){
          var query = this.data.ltPropQuerySelector,
          scope = $L( this.getScope( query.scope ) ),
          _length = vis.length,
          toOpen = [];


          for( var i = 0; i < _length; i++ ){
             var parent = $L( vis[ i ] ).closest( '.lyteListBoxLeftWrap' ).parent().closest( '.lyteListBoxLeftWrap', scope );

             if( parent.length ){
                if( parent.hasClass( 'lyteSearchHidden' ) ){
                    var search = parent.find( query.search ).get( 0 ),
                    index = hid.indexOf( search );
                    if( index != -1 ){
                       vis.push( search );
                       hid.splice( index, 1 );
                       _length++;
                       parent.removeClass( 'lyteSearchHidden' );
                    }
                }

                var open_index = toOpen.indexOf( parent.get( 0 ) );
                 if( open_index == -1 ){
                    toOpen.push( parent.get( 0 ) );
                 }
             }
          }

          toOpen.forEach( function( item ){
              var jobj = $L( item );
              if( jobj.children( '.lyteListboxParentElementClose' ).length ){
                 jobj.find( 'lyte-lb-collapse' ).get( 0 ).click();
              }
          })
        },

        accfilter : function( vis, hid, value, clear ){
            var scope = $L( this.getScope( this.data.ltPropQuerySelector.scope ) ),
            item = 'lyte-accordion-item',
            active = 'lyteAccordionActive';

            for( var i = 0; i < vis.length; i++ ){
              var close1 = $L( vis[ i ] ).closest( item, scope )
              for( var j = 0; j < hid.length; j++ ){
                 var close2 = $L( hid[ j ] ).closest( item, scope )
                 if( close1[ 0 ] == close2[ 0 ] ){
                    Lyte.arrayUtils( hid, 'removeAt', j );
                    j--; continue;
                 }
              }
              if( vis[ i + 1 ] ) {
                 var close2 = $L( vis[ i + 1 ] ).closest( item, scope );
                 if( close1[ 0 ] == close2[ 0 ] ){
                    Lyte.arrayUtils( vis, 'removeAt', i + 1 );
                    i--;
                 }
              }
            }
            // scope[ 0 ].component.getAllHeights();
            $L.fastdom.mutate( function(){
                for( var i = 0; i < vis.length; i++ ){
                   var isclose = false, close = $L( vis[ i ] ).closest( item );
                   isclose = !close.hasClass( active );
                   if( !value && this.data.ltPropMaintainState ){
                     if( close[ 0 ]._state != undefined ){
                        isclose = !isclose && !close[ 0 ]._state;
                        if( clear ){
                           delete close[ 0 ]._state;
                        }
                     } else{
                       isclose = !isclose
                     }
                   }
                   if( isclose ){
                      close.click();
                   }
                }

                for( var j = 0; j < hid.length; j++ ){
                    var close = $L( hid[ j ] ).closest( item )
                    if( clear ){
                      !close[ 0 ]._state && close.hasClass( active ) && close.click();
                    } else {
                       close.hasClass( active ) && close.click();
                    }
                }
            }.bind( this ))
        },

        treeinremove : function( arr ){
            for( var i = 0; i < arr.length; i++ ){
              if( arr[ i + 1 ] ){
                 var cur =  this.closest( arr[ i ], '.lyteTreeBodyDiv' )[ 0 ], next = this.closest( arr[ i + 1 ], '.lyteTreeBodyDiv' )[ 0 ];
                 if( cur.contains( next ) ){
                    Lyte.arrayUtils( arr, 'removeAt', i + 1 );
                 } else if(next.contains( cur ) ){
                    Lyte.arrayUtils( arr, 'removeAt', i );
                    i--;
                 }
              }
          }
        },

        closest : function( dom, query ){
           if( dom.closest ){
              return $L( dom.closest( query ) );
           }
           return $L( dom ).closest( query );
        },

        treefilter : function( visible, hidden, value, clear ){
            var data = this.data,
            scope = $L( this.getScope( data.ltPropQuerySelector.scope ) ).get( 0 ),
            vis_len = visible.length,
            hid_len = hidden.length,
            query = '.lyteTreeBodyDiv',
            hidden_class = "lyteSearchHidden";

            for( var i = 0; i < vis_len; i++ ){
                var cur = this.closest( visible[ i ], query ),
                _dom = cur.get( 0 );

                for( var j = 0; j < hid_len; j++ ){
                    var cur_close = this.closest( hidden[ j ], query ),
                    hid_dom = cur_close.get( 0 );

                    if( _dom.contains( hid_dom ) || hid_dom.contains( _dom ) ){
                       if( data.ltPropIgnoreChildren ){
                          cur_close.removeClass( hidden_class );
                       } else {
                          cur_close.addClass( hidden_class );
                       }
                       hidden.splice( j, 1 );
                       j--;
                       hid_len--;
                    }
                }
            }

            for( var i = 0; i < vis_len; i++ ){
                var cur = visible[ i ];
                this.removeClse( cur, scope );
                if( value ){
                    // scope.ltProp( 'stateAttr', this.closest( cur, 'lyte-tree-body' ).attr( 'data-index' ) );
                    scope.openRecursive( this.closest( cur, 'lyte-tree-body' ).get( 0 ) );
                }
            }

            if( value || data.ltPropDontHideOnEmpty ){
                hidden.forEach( function( item ){
                    this.closest( item, query ).addClass( hidden_class );
                }.bind( this ));
            } else {
                this.hiderecurse( $L( 'lyte-yield:not(.noChildClass) lyte-tree-icon', scope ), clear, scope );
            }

            this.last_tree_element( visible, hidden, scope );
        },

        last_tree_element : function( visible, hidden, scope ){

          var class_name = 'lyteTreeBodyDivLastVisibleElem',
          query = 'lyteTreeBodyDiv',
          search_class = "lyteSearchHidden",
          fn = function( item ){
             var elem = $L( item ).closest( '.' + query, scope ),
             fn_name = "addClass";

             if( elem.length ){

                 if( elem.hasClass( search_class ) ){
                    fn_name = "removeClass";
                 } else {
                    if( elem.next( '.' + query + ":not(." + search_class + ")" ).length ){
                        fn_name = "removeClass";
                    }
                 }

                 elem[ fn_name ]( class_name );
                 fn( elem.parent() );
             }
          };

          visible.concat( hidden ).forEach( fn );
        },

        removeClse : function( target, scope ){
           // var scope = $L( this.data.ltPropQuerySelector.scope );
            var el = $L( target ).closest( '.lyteSearchHidden', scope );
            if( el.length ){
               el.removeClass( 'lyteSearchHidden' );
               this.removeClse( target, scope );
            }
        },

        hiderecurse : function( elem, flag, scope ){
           for( var i = elem.length - 1; i >= 0; i-- ) {
              var icon = elem.eq( i ),
              hasClass = icon.hasClass( 'lyteIconOpened' ),
              __state = icon[ 0 ]._state,
              body = icon.closest( 'lyte-tree-body' ).get( 0 ),
              fn = '';

              if( flag && __state != void 0 ){
                if( __state && !hasClass ){
                  fn = 'openTree';
                } else if( !__state && hasClass ){
                  fn = 'closeTree';
                }
              } else if( hasClass ){
                 fn = 'closeTree';
              }

              if( fn ){
                setTimeout( scope[ fn ].bind( scope, body ), 20 );
              }

              delete icon[ 0 ]._state;
           }
        },

        additionalHand : function( target, check ){
            var comp = this.data.ltPropComponent;
            if( check ){
                  if( comp == 'dropdown' ){
                    var clo = $L( target ).closest( 'lyte-drop-box' )[ 0 ]
                    if( clo ) {
                      clo.classList.contains( 'lyteDropdownHidden' ) && ( clo.origindd ? clo.origindd.toggle() : $L( clo ).closest( 'lyte-dropdown' ).get( 0 ).toggle() )
                    }
                  }
                 target.classList.remove( 'lyteSearchHidden' );
            } else if( comp != "tree" ) {
               if( target.classList.contains( 'lyteSearchHidden' ) ){
                  return;
                }
               target.classList.add( 'lyteSearchHidden' );
            }
        },

        pressFunc : function ( val, evt ){
             if( this.getMethods( 'onBeforeSearch' ) && this.executeMethod( 'onBeforeSearch', evt, this ) == false ){
                return
              }

             if( this.data.ltPropMultipleSearch ){
               this.multi_search( val, evt );
               return
             } 

             var content = [], searchList = [], target = [], query = this.data.ltPropQuerySelector, related,
             dia = this.data.ltPropDiacritic;
             var scope = typeof query.scope == 'string' ? document.body.querySelector( query.scope.trim() ) : query.scope;
             scope = this.getScope( scope );
             if( query.search ) {
               searchList = scope.querySelectorAll( query.search.trim() )
             }
             target = query.target ? scope.querySelectorAll( query.target.trim() ) : searchList
             if( !query.search ) {
                   var returnedVal = this.searchList.call( this, scope );
                    content = returnedVal[ 0 ];
                    target = returnedVal[ 1 ];
                    searchList = target.slice();
             } else {
                for( var j = 0; j < searchList.length; j++ ) {
                    var valueToPush = searchList[ j ].textContent;

                    if( dia ){
                       valueToPush = _lyteUiUtils.convert_diacritics( valueToPush );
                    }

                    content[ j ] = valueToPush;
                }
             }

            if( dia ){
              val = _lyteUiUtils.convert_diacritics( val );
            }

            related =  query.related && ( query.search || query.target ) ? related = scope.querySelectorAll( query.related ) : [];
            this.filteringArray.call(this, content, target, val, searchList, evt, related, query.label )
            this._prevVal = val;
        },

        getScope : function( scope ){
             scope = this.getMethods( 'dynamicScope' ) ? this.executeMethod( 'dynamicScope', this.$node ) : scope;
             if( this.data.ltPropCheckFromParent ){
                scope = this.$node.parentNode;
             }
             return scope;
        }
  });
/**
 * @syntax nonYielded
 * <lyte-search></lyte-search>
 */
