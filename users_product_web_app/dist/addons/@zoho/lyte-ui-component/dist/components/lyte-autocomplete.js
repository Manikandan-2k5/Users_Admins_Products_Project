/**
 * This component is used to show and search list of suggestions for the given input value
 * @component lyte-autocomplete
 * @version 1.0.0
 * @utility toggle,focus,blur,click,select,setValue
 * @dependency lyte-input
 *  /components/lyte-input.js
 *  /theme/compiledCSS/default/ltr/lyte-ui-input.css
 * @dependency lyte-dropdown
 *  /components/lyte-dropdown.js
 *  /theme/compiledCSS/default/ltr/lyte-ui-dropdown.css
 * @import lyte-input
 * @ignoreProperties ltPropRows,ltPropCols,ltPropTextAreaResize,ltPropMax,ltPropMin,ltPropStep,ltPropTimeFormat,ltPropHourInterval,ltPropDefaultTime,ltPropMinuteInterval,ltPropDropdown,ltPropShowInterval,ltPropStartTime,ltPropEndTime,ltPropFillRows,ltPropNumberOfRows,ltPropMinDate,ltPropMaxDate,ltPropStartWeekDay,ltPropMonthHeaderFormat,ltPropYear,ltPropFormat,ltPropStartDate,ltPropEndDate,ltPropCurrentDate,ltPropBindToBody,ltPropCalendarClass,ltPropHeaderType,ltPropDropdownDisabled,ltPropDropdownShow,ltPropDropdownCallout,ltPropDropdownFreeze,ltPropDropdownId,ltPropDropdownClass,ltPropPosition,ltPropBoundary,ltPropWheel,ltPropYield,ltPropAnimate,ltPropPreventSelection,ltPropPreventKeys,ltPropCalendarProperties,ltPropDropdownProperties
 * @ignoreMethods onTimeChange,onDateChange,onValueChange,onPositionChanged,onHide,onBeforeHide,onShow,onBeforeShow,onScroll,onNavigate,onViewdateChange,onViewChange,onBeforeCalendarClose,onCalendarClose,onCalendarOpen,onFocus,onBlur,onClear,beforeRender,afterRender
 * @ignoreUtils focus,blur,click,select,revertToToday,revertToSelected
 * @import lyte-dropdown
 * @ignoreProperties ltPropShow,ltPropRemoveMultiple,ltPropYield,ltPropOptions,ltPropUserValue,ltPropSystemValue,ltPropIconClass,ltPropPlaceholder,ltPropNoResult,ltPropMaxCount,ltPropInputClass,ltPropAjaxRequest,ltPropDisplayValue,ltPropDisabledList,ltPropTooltip,ltPropBoxClass,ltPropIsOpen,ltPropFixPositionOnOpen
 * @ignoreMethods onShow,onBeforeShow,onHide,onBeforeHide,beforeSelect,onBeforeRemove,onBeforeAdd,onOptionSelected,onAdd,onRemove,onPositionChanged,onScroll,onChange
 * @ignoreUtils toggle
 */

Lyte.Component.register("lyte-autocomplete",{
_template:"<template tag-name=\"lyte-autocomplete\"> <lyte-dropdown lt-prop=\"{{stringify(ltPropDropdown)}}\" lt-prop-set-pos=\"{{ltPropSetPos}}\" lt-prop-type=\"{{ltPropDropType}}\" lt-prop-yield=\"true\" lt-prop-freeze=\"{{ltPropFreeze}}\" lt-prop-callout=\"{{ltPropCallout}}\" lt-prop-position=\"{{ltPropPosition}}\" lt-prop-hover=\"{{ltPropHover}}\" lt-prop-disabled=\"{{ltPropDisabled}}\" lt-prop-boundary=\"{{ltPropBoundary}}\" lt-prop-tabindex=\"{{ltPropTabindex}}\" lt-prop-animate=\"{{ltPropAnimate}}\" lt-prop-active-element=\"{{ltPropActiveElement}}\" on-option-selected=\"{{method('valSet')}}\" on-show=\"{{method('show')}}\" on-hide=\"{{method('hide')}}\" on-before-show=\"{{method('beforeShow')}}\" on-before-hide=\"{{method('beforeHide')}}\" on-add=\"{{method('add')}}\" on-remove=\"{{method('remove')}}\" on-position-changed=\"{{method('positionChanged')}}\" on-scroll=\"{{method('scroll')}}\" lt-prop-selected=\"{{lbind(ltPropSelected)}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <lyte-drop-button onkeyup=\"{{action('keyup',event)}}\"> <lyte-input lt-prop=\"{{stringify(ltPropInput)}}\" lt-prop-maxlength=\"{{ltPropMaxlength}}\" lt-prop-auto-update=\"{{ltPropAutoUpdate}}\" on-value-change=\"{{method('valuechange')}}\" lt-prop-tab-index=\"{{ltPropTabIndex}}\" lt-prop-id=\"{{ltPropId}}\" lt-prop-wrapper-style=\"{{ltPropWrapperStyle}}\" lt-prop-class=\"{{ltPropClass}}\" lt-prop-autofocus=\"{{ltPropAutofocus}}\" lt-prop-autocomplete=\"{{ltPropAutocomplete}}\" lt-prop-type=\"{{ltPropType}}\" lt-prop-name=\"{{ltPropName}}\" lt-prop-placeholder=\"{{ltPropPlaceholder}}\" lt-prop-value=\"{{lbind(ltPropValue)}}\" lt-prop-width=\"100%\" lt-prop-height=\"{{ltPropHeight}}\" lt-prop-style=\"{{ltPropStyle}}\" lt-prop-appearance=\"{{ltPropAppearance}}\" lt-prop-direction=\"vertical\" lt-prop-disabled=\"{{ltPropDisabled}}\" lt-prop-readonly=\"{{ltPropReadonly}}\" lt-prop-pattern=\"{{ltPropPattern}}\" rows=\"{{ltPropRows}}\" cols=\"{{ltPropCols}}\" title=\"{{ltPropInputTitle}}\" lt-prop-text-area-resize=\"{{ltPropTextAreaResize}}\" lt-prop-input-title=\"{{ltPropInputTitle}}\" on-focus=\"{{method('focus')}}\" on-blur=\"{{method('blurEvent')}}\" oninput=\"{{action('input',event)}}\" lt-prop-update-delay=\"{{ltPropUpdateDelay}}\" lt-prop-aria=\"{{ltPropAria}}\" lt-prop-aria-attributes=\"{{ltPropAriaAttributes}}\" lt-prop-focus=\"{{ltPropFocus}}\"></lyte-input> <template is=\"if\" value=\"{{expHandlers(ltPropType,'==','search')}}\"><template case=\"true\"> <div class=\"closeIconWrapper lyteAutoCompCloseIconWrapper\" onclick=\"{{action('resetValue',event)}}\" style=\"{{if(ltPropValue,'display: block;','display: none;')}}\"> <span class=\"closeIcon lyteAutoCompCloseIcon\"></span> </div> <span class=\"iconSeparator\" style=\"{{if(ltPropValue,'display: block;','display: none;')}}\"></span> </template></template> </lyte-drop-button> <template is=\"if\" value=\"{{expHandlers(ltPropYield,'==',false)}}\"><template case=\"true\"> <lyte-drop-box class=\"{{ltPropDropdownClass}} lyteautocompleteDropdown\" id=\"{{ltPropDropdownId}}\"> <lyte-drop-body> <template is=\"for\" items=\"{{ltPropContent}}\" item=\"list\" index=\"indexVal\"><template is=\"if\" value=\"{{lyteUiOptGroupCheck(list)}}\"><template case=\"true\"> <lyte-drop-group elemorder=\"{{indexVal}}\"> <lyte-drop-label>{{lyteUiReturnOnlyKey(list)}}</lyte-drop-label> <template is=\"for\" items=\"{{lyteUiReturnOnlyValue(list)}}\" item=\"list1\" index=\"indexVal1\"><template is=\"if\" value=\"{{expHandlers(lyteUiIsObject(list1),'==',false)}}\"><template case=\"true\"> <lyte-drop-item grporder=\"{{indexVal}}\" elemorder=\"{{indexVal1}}\" data-value=\"{{list1}}\"> <lyte-autocomplete-label keywords=\"{{list1}}\">{{list1}}</lyte-autocomplete-label> </lyte-drop-item> </template><template case=\"false\"> <lyte-drop-item grporder=\"{{indexVal}}\" elemorder=\"{{indexVal1}}\" data-value=\"{{list1[ltPropLabel]}}\" class=\"{{list1.class}}\"> <lyte-autocomplete-label keywords=\"{{list1[ltPropKeyWords]}}\">{{list1[ltPropLabel]}}</lyte-autocomplete-label> <template is=\"if\" value=\"{{list1[ltPropDescription]}}\"><template case=\"true\"> <lyte-autocomplete-description><span class=\"lyteAutoSeparator\">,</span> {{list1[ltPropDescription]}}</lyte-autocomplete-description> </template></template> </lyte-drop-item> </template></template></template> </lyte-drop-group> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(lyteUiIsObject(list),'==',false)}}\"><template case=\"true\"> <lyte-drop-item elemorder=\"{{indexVal}}\" data-value=\"{{list}}\"> <lyte-autocomplete-label keywords=\"{{list}}\">{{list}}</lyte-autocomplete-label> </lyte-drop-item> </template><template case=\"false\"> <lyte-drop-item elemorder=\"{{indexVal}}\" data-value=\"{{list[ltPropLabel]}}\" class=\"{{list1.class}}\"> <lyte-autocomplete-label keywords=\"{{list[ltPropKeyWords]}}\">{{list[ltPropLabel]}}</lyte-autocomplete-label> <template is=\"if\" value=\"{{list[ltPropDescription]}}\"><template case=\"true\"> <lyte-autocomplete-description><span class=\"lyteAutoSeparator\">,</span> {{list[ltPropDescription]}}</lyte-autocomplete-description> </template></template> </lyte-drop-item> </template></template></template></template></template> </lyte-drop-body> </lyte-drop-box> </template><template case=\"false\"> <lyte-yield yield-name=\"yield\"></lyte-yield> </template></template> </template> </lyte-dropdown> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropValue","'display: block;'","'display: none;'"]}}}},{"type":"attr","position":[3],"attr":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropValue","'display: block;'","'display: none;'"]}}}}]}},"default":{}},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"for","position":[1,3],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,2]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"text","position":[1,1,0]},{"type":"componentDynamic","position":[1,1]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,2]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]}},"default":{}}]}},"default":{}}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"insertYield","position":[1]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}],
_observedAttributes :["ltPropAutocomplete","ltPropPlaceholder","ltPropAutofocus","ltPropMaxlength","ltPropReadonly","ltPropId","ltPropClass","ltPropType","ltPropName","ltPropWidth","ltPropValue","ltPropContent","ltPropLabel","ltPropDescription","ltPropStyle","ltPropAppearance","ltPropDirection","ltPropExternalSearch","ltPropYield","ltPropHeight","ltPropHighlight","ltPropHighlightClass","ltPropKeyWords","ltPropMinLength","ltPropErrorClass","ltPropDropdownWidth","ltPropDropdownHeight","ltPropDropdownClass","ltPropDropdownId","ltPropMethod","ltPropWrapperStyle","ltPropTabIndex","ltPropTabindex","ltPropFreeze","ltPropCallout","ltPropDisabled","ltPropHover","ltPropBoundary","ltPropPosition","ltPropDropType","ltPropSetPos","ltPropPattern","ltPropAutoUpdate","ltPropValueSet","ltPropPreventInsideClick","ltPropExtSearchOpen","ltPropInputTitle","ltPropErrorMessage","ltPropAnimate","ltPropSelected","ltPropTrim","ltPropFocus","ltPropAria","ltPropAriaAttributes","ltPropUpdateDelay","ltPropRows","ltPropCols","ltPropTextAreaResize","ltPropDiacritic","ltPropDropdown","ltPropInput","ltPropActiveElement","timeout","optGroup","autocompleteFlag"],

    init : function(){ 

        this.$node.toggle = function( arg1, arg2 ){

            var drop = this.dropdown;
            return drop.toggle( arg1, arg2 );

        }.bind( this );

       /**
        * @method beforeRender
        * @version 1.0.1
        */

        var cb = "beforeRender";

        if( this.getMethods( cb ) ){
            this.executeMethod( cb, this.$node );
        }
    },

    didDestroy : function(){
        var _this = this,
        $node = _this.$node;

        clearTimeout( _this.data.timeout );

        [ 'autocompleteComp', 'input', 'dropdown', 'dropbody' ].forEach( function( item ){
            delete _this[ item ];
        });

        [ 'toggle', 'setValue', 'focus', 'blur', 'click', 'select' ].forEach( function( item ){
          delete $node[ item ];
        });
    },


    didConnect : function(){
       var data = this.data,
       errorDiv = $L( document.createElement( 'div' ) ).addClass( 'lyteautocompleteError ' + ( data.ltPropErrorClass || '' ) ).css( 'display', 'none' ).get( 0 ),
       dropdown,
       dropbody,
       cb = "afterRender";

       errorDiv.textContent = data.ltPropErrorMessage || '';

       this.autocompleteComp = errorDiv;

       dropdown = this.dropdown = $L( this.$node ).children( 'lyte-dropdown' ).get( 0 );
       dropbody = this.dropbody =  dropdown.component.childComp || $L( 'lyte-drop-box', dropdown ).get( 0 );

       dropbody.appendChild( errorDiv );

       this.$node.setValue  = function( value ){
          value = value || "";

          $L( 'lyte-input', this.$node ).get( 0 ).ltProp( 'value', value );
          this.pressFunc( value, {} );

       }.bind( this );

       [ 'focus', 'blur', 'click', 'select' ].forEach( function( item ){
          this.$node[ item ] = function( arg ){
              $L( 'lyte-input', this ).get( 0 )[ item ]( arg );
          }
       }.bind( this ));

       /**
        * @method afterRender
        * @version 1.0.1
        */

        if( this.getMethods( cb ) ){
            this.executeMethod( cb, this.$node );
        }
    },

    errObs : function( arg ){
        var elem = this.autocompleteComp;

        if( arg.item == 'ltPropErrorMessage' ){
            elem.textContent = arg.newValue;
        } else{
            $L( elem ).removeClass( arg.oldValue ).addClass( arg.newValue );
        }

    }.observes( 'ltPropErrorMessage', 'ltPropErrorClass' ),

    typeObs : function(){
        var $node = $L( this.$node )[ this.data.ltPropType == "search" ? 'addClass' : 'removeClass' ]( 'searchPresent' );

        this.input = $node.find( 'input,textarea' ).get( 0 );
    }.observes( 'ltPropType' ).on( 'didConnect' ),

    arrayFrom : function( nodeList ){
        if( Array.from ){
            return Array.from( nodeList );
        }
        return Array.apply( Array, nodeList );
    },

     optGroupObs : function(){
        setTimeout( this.optGroup.bind( this, true ), 0 );
     }.observes( 'ltPropContent', 'ltPropContent.[]' ),      
     
     optGroup : function( prevent ){
          var $drop = $L( this.dropbody ),
          input = this.input,
          value = input.value,
          data = this.data;

          if( ( !$drop.hasClass( 'lyteDropdownHidden' ) && value.length ) || data.ltPropExternalSearch ) {

              if( data.ltPropTrim ){
                  value = value.trim();
              }

              this.contentFiltering( value );
          }

          if( data.ltPropAnimate && data.ltPropExternalSearch ) {
              $drop.find( "lyte-drop-body" ).css( "height", "" );
              delete this.dropdown.component._prevent;
          }
     },

     classObs : function( arg ){
        if( this.data.ltPropYield ) {
              var dropbody = $L( this.dropbody )
              if( arg ) {
                 dropbody.removeClass( arg.oldValue )
              }
              var cls = this.data.ltPropDropdownClass;
              if( cls ){
                dropbody.addClass( cls )
              }
          }
      }.observes('ltPropDropdownClass').on('didConnect'),

     heigthSetObs : function(){
        this.heigthSet();
     }.observes('ltPropDropdownHeight').on('didConnect'),

     heigthSet : function(){
        $L( this.dropbody ).find( 'lyte-drop-body' ).css( 'maxHeight', this.data.ltPropDropdownHeight || "" );
     },
     // setting width 

     widthSetObs : function(){
        this.widthSet();
     }.observes('ltPropDropdownWidth').on('didConnect'),

     widthSet : function(){
        $L( this.dropbody ).find( 'lyte-drop-body' ).css( 'width', this.data.ltPropDropdownWidth || "" );
     },

     data : function (){
      //user data
            return {
               ltPropAutocomplete : Lyte.attr("string",{"default" : 'off'}),
               ltPropPlaceholder : Lyte.attr("string",{"default" : ''}),
               ltPropAutofocus : Lyte.attr("boolean",{"default" : false}),
               ltPropMaxlength : Lyte.attr("number",{"default" : 25}),
               ltPropReadonly : Lyte.attr("boolean",{"default" : false}),
               ltPropId : Lyte.attr("string",{"default" : 'inputId'}),
               ltPropClass : Lyte.attr("string",{"default" : ''}),
               ltPropType : Lyte.attr("string",{"default" : 'text'}),
               ltPropName : Lyte.attr("string",{"default" : ''}),
               ltPropWidth : Lyte.attr("string",{"default" : '100%'}),
               ltPropValue : Lyte.attr("string",{"default" : ''}),
              /**
               * @componentProperty {string[] | object[]} ltPropContent
               * @version 1.0.0
               * @default []
               */
               ltPropContent : Lyte.attr("array",{"default" : []}),
               ltPropLabel : Lyte.attr("string",{"default" : ''}),
              /**
               * @componentProperty {string} ltPropDescription=''
               * @version 1.0.0
               */
               ltPropDescription : Lyte.attr("string",{"default" : ''}),
               ltPropStyle : Lyte.attr( 'string', { default : "" } ),
               ltPropAppearance : Lyte.attr("string",{"default" : 'flat'}),
               ltPropDirection : Lyte.attr("string",{"default" : 'vertical'}),
               ltPropExternalSearch : Lyte.attr("boolean",{"default" : false}),
              /**
               * @componentProperty {boolean} ltPropYield=false
               * @version 1.0.0
               */
               ltPropYield : Lyte.attr("boolean",{"default" : false}),
               ltPropHeight : Lyte.attr("string",{"default" : ''}),
              /**
               * @componentProperty {boolean} ltPropHighlight=false
               * @version 1.0.0
               */
               ltPropHighlight : Lyte.attr("boolean",{"default" : false}),
              /**
               * @componentProperty {string} ltPropHighlightClass=lyteautocompleteHighlight
               * @version 1.0.0
               */
               ltPropHighlightClass : Lyte.attr("string",{"default" : 'lyteautocompleteHighlight'}),
              /**
               * @componentProperty {string} ltPropKeyWords=''
               * @version 1.0.0
               */
               ltPropKeyWords : Lyte.attr("string",{"default" : ''}),
              /**
               * @componentProperty {number} ltPropMinLength=1
               * @version 1.0.0
               */
               ltPropMinLength : Lyte.attr('number',{'default' : 1}),
              /**
               * @componentProperty {string} ltPropErrorClass=lyteautocompleteError
               * @version 1.0.5
               */
               ltPropErrorClass : Lyte.attr('string',{'default' : 'lyteautocompleteError'}),
              /**
               * @componentProperty {string} ltPropDropdownWidth=auto
               * @version 1.0.0
               */
               ltPropDropdownWidth : Lyte.attr('string',{'default' : 'auto'}),
              /**
               * @componentProperty {string} ltPropDropdownHeight=300px
               * @version 1.0.0
               * @suffix px,pt,cm,mm,vh,vm,em
               */
               ltPropDropdownHeight : Lyte.attr('string',{'default' : '300px'}),
              /**
               * @componentProperty {string} ltPropDropdownClass=''
               * @version 1.0.0
               */
               ltPropDropdownClass : Lyte.attr('string', {'default' : ''}),
              /**
               * @componentProperty {string} ltPropDropdownId=lyteAutocomplete
               * @version 1.0.0
               */
               ltPropDropdownId : Lyte.attr('string', {'default' : 'lyteAutocomplete'}),
              /**
               * @componentProperty {startsWith | endsWith | contains} ltPropMethod=contains
               * @version 1.0.0
               */
               ltPropMethod : Lyte.attr('string',{'default' : 'contains'}),
               ltPropWrapperStyle : Lyte.attr('string', {'default' : ''}),
               ltPropTabIndex : Lyte.attr('string',{default : '0'}),
               ltPropTabindex : Lyte.attr('string',{default : '-1'}),
               ltPropFreeze : Lyte.attr('boolean', { default: false}),
               ltPropCallout : Lyte.attr('boolean',{default : false}),
               ltPropDisabled : Lyte.attr('boolean', { default : false}),
               ltPropHover : Lyte.attr('boolean', { default : false}),
               ltPropBoundary : Lyte.attr('object', { default : {}}),
               ltPropPosition : Lyte.attr('string', { default : 'down'}),
              /**
               * @componentProperty {default | multiple | multisearch} ltPropDropType=default
               * @version 1.0.0
               */
               ltPropDropType : Lyte.attr('string', { default : 'default'}),
               ltPropSetPos : Lyte.attr('boolean', { default : false}),
               ltPropPattern : Lyte.attr('string', { default : ".+"}),
               ltPropAutoUpdate : Lyte.attr('boolean', { default : true}),
              /**
               * @componentProperty {boolean} ltPropValueSet=true
               * @version 1.0.2
               */
               ltPropValueSet : Lyte.attr('boolean', { default : true}),
              /**
               * @componentProperty {boolean} ltPropPreventInsideClick=false
               * @version 1.0.2
               */
               ltPropPreventInsideClick : Lyte.attr('boolean', { default : false}),
              /**
               * @componentProperty {boolean} ltPropExtSearchOpen=false
               * @version 1.0.2
               */
               ltPropExtSearchOpen :Lyte.attr('boolean', { default : false }),
               ltPropInputTitle : Lyte.attr('string', { default : '' }),
              /**
               * @componentProperty {string} ltPropErrorMessage=''
               * @version 1.0.5
               */
               ltPropErrorMessage : Lyte.attr( 'string',{ default : '' } ),
              /**
               * @componentProperty {string} ltPropErrorClass=''
               * @version 1.0.5
               */
               ltPropErrorClass  :Lyte.attr( 'string', { default : '' } ),
               ltPropAnimate : Lyte.attr( 'boolean', { default : false } ),
               ltPropSelected : Lyte.attr( 'string', { default : '' } ),
              /**
               * @componentProperty {boolean} ltPropTrim=false
               * @version 2.2.6
               */
               ltPropTrim : Lyte.attr( 'boolean', { default : false } ),
               ltPropFocus : Lyte.attr( 'boolean', { default : false } ),

               // aria
               ltPropAria : Lyte.attr( 'boolean', { default : false } ),
               ltPropAriaAttributes : Lyte.attr( 'object', { default : {}, watch : true } ),
               
               ltPropUpdateDelay : Lyte.attr( 'number', { default : 250 } ),

              /**
               * @experimental ltPropRows
               */
               ltPropRows : Lyte.attr("number",{"default" : undefined}),
              /**
               * @experimental ltPropCols
               */
               ltPropCols : Lyte.attr("number",{"default" : undefined}),
              /**
               * @experimental ltPropTextAreaResize
               */
               ltPropTextAreaResize : Lyte.attr("object",{"default" : {vertical : true, horizontal : true}}),

               /**
                * @componentProperty {boolean} ltPropDiacritic=false
                * @version 3.12.0
                */

               ltPropDiacritic : Lyte.attr( 'boolean', { default : false } ),

               /**
                * @componentProperty {object} ltPropDropdown
                * @version 3.12.0
                * @default {}
                */

               ltPropDropdown : Lyte.attr( 'object', { default : {} } ),

               /**
                * @componentProperty {object} ltPropInput
                * @version 3.12.0
                * @default {}
                */

               ltPropInput : Lyte.attr( 'object', { default : {} } ),

               ltPropActiveElement : Lyte.attr( 'string', { default : "input,textarea" } ),

               // system data
              /**
               * @experimental timeout
               */
               timeout : Lyte.attr("number",{"default" : undefined}),
              /**
               * @experimental optGroup
               */
               optGroup : Lyte.attr("boolean",{"default" : false}),
              /**
               * @experimental autocompleteFlag
               */
               autocompleteFlag : Lyte.attr('boolean', {'default' : true})

             }
         },

// to Highlight selected text

    convertString : function( nodes, value ){
        var str = '';
        nodes.forEach( function( item ){
            var tag = item.tagName || '';
            if( /^template$/i.test( tag ) ){
                item.remove();
            } else if( tag ){
                this.convertString( Array.from( item.childNodes ), value );
            } else if( value ) {
                var str = item.nodeValue,
                lower = str.toLowerCase(),
                index = lower.indexOf( value ),
                is_modified,
                ref = item;

                while( index != -1 ){
                  var first = str.slice( 0, index ),
                  limit = index + value.length,
                  second = str.slice( index, limit ),
                  third = str.slice( limit ),
                  is_modified = true;

                  if( first ){
                    var node = document.createTextNode( first );
                    Lyte.Component.insertAfter( ref, ref = node );
                  }

                  var node = $L( document.createElement( 'span' ) ).addClass( this.data.ltPropHighlightClass ).get( 0 );
                  node.textContent = /* value */ second;
                  Lyte.Component.insertAfter( ref, ref = node );

                  str = third;
                  lower = str.toLowerCase();
                  index = lower.indexOf( value );
                }

                if( is_modified ){
                    if( str ){
                        var node = document.createTextNode( str );
                        Lyte.Component.insertAfter( ref, node );
                    }
                    item.remove();
                }
            }
        }.bind( this ));
    },

    highlightText : function( targetArray, inputValue ){
      var len = targetArray.length,
      LC = Lyte.Component;

      for( var i = 0; i < len; i++ ){
          var cur = targetArray[ i ],
          label = cur.getElementsByTagName( 'lyte-autocomplete-label' )[ 0 ],
          span = cur.getElementsByClassName( 'lyteAutoComplete' )[ 0 ],
          cloned_element = label.cloneNode( true );

          cloned_element.normalize();

          if( !span ){
             span = $L( '<div class = "lyteAutoComplete"></div>' ).get( 0 );
             LC.insertBefore( label, span );
          }

          $L( label ).css( 'display', 'none' );

          span.style.display = '';

          this.convertString( Array.from( cloned_element.childNodes ), inputValue );

          var __child = Array.from( cloned_element.childNodes ),
          fn = LC.appendChild.bind( LC, span );

          span.innerHTML = '';

          __child.forEach( fn );
      }

    },

    errorMessage : function( bool ){
        var elem = this.autocompleteComp,
        obj = {
          display : bool ? 'block' : 'none'
        };

        if( bool && !elem.style.width ){
            obj.width = window.getComputedStyle( this.$node ).getPropertyValue( 'width' );
        }

        $L( elem ).css( obj );
    },

    actions : {
        resetValue : function( evt ) {
          this.$node.setValue( '' );
          this.$node.focus();
        },
          //filtering process  checks
        "keyup":function(event){

            var keycode = event.keyCode || event.which;

            if( [ 37, 13, 38, 39, 40, 27 ].indexOf( keycode ) != -1 ){
                return;
            }

            var value = this.input.value;

            if( this.data.ltPropTrim ){
                value = value.trim();
            }

            clearTimeout( this.data.timeout );

            if( ( value.length >= this.data.ltPropMinLength || ( [ 8, 91, 17, 46 ].indexOf( keycode ) != -1 ) ) && keycode != 13 ){
                this.data.timeout = setTimeout( this.pressFunc.bind( this, value, event ), 100 );
            }  
        },

        input : function( evt ) {

          // keyup not happening in firefox android mobiles because of input event
          // if( _lyteUiUtils.isAndroid && /firefox/ig.test( navigator.userAgent ) ) {
              clearTimeout( this.data.timeout );
              var value = evt.target.value;

              if( this.getData( 'ltPropTrim' ) ){
                 value = value.trim();
              }

              if( value.length >= this.data.ltPropMinLength ) {
                this.data.timeout = setTimeout( this.pressFunc.bind( this ), 250, value, evt );
              }
           // }
        }    
    },

     methods : {
             // when dropdown value selected 

        valSet : function( event, selectedVal ){
            var targetElem = $L( ( event || window.event ).target ).closest( 'lyte-drop-item' ),
            cb = "onSelect";

            if( targetElem.length ){
                var label = targetElem.find( 'lyte-autocomplete-label' );
                selectedVal = label.text();
            }

            if( selectedVal ){
                if( this.getData( 'ltPropValueSet' )  ){
                    this.setData( 'ltPropValue', selectedVal.trim() );
                }

                if( this.getMethods( cb ) ){
                    var value;
                    if( this.data.ltPropYield ){
                        value = targetElem.attr( 'data-value' );
                    } else {
                        var ltPropContent = this.data.ltPropContent,
                        group = targetElem.closest( 'lyte-drop-group' ).get( 0 ),
                        children = this.arrayFrom( $L( this.dropbody ).children( 'lyte-drop-body' ).children() ),
                        target_dom = targetElem.get( 0 );

                        if( group ){
                            var grp_data = ltPropContent[ children.indexOf( group ) ];
                            value = grp_data[ Object.keys( grp_data )[ 0 ] ][ this.arrayFrom( targetElem.parent().children( 'lyte-drop-item' ) ).indexOf( target_dom ) ];
                        } else {
                            value = ltPropContent[ children.indexOf( target_dom ) ];
                        }
                    }

                    /**
                      * @method onSelect
                      */ 
                    this.executeMethod( cb, value, event, this.$node );
                }
            }
        },
           show :  function(){
              this.optGroupHide.call( this, true )
             /**
              * @method onShow
              */
              this.getMethods('onShow') && this.executeMethod('onShow', arguments[0], arguments[1])
           },
           hide :  function(){
             /**
              * @method onHide
              */
              this.getMethods('onHide') && this.executeMethod('onHide', arguments[0], arguments[1])
           },
           beforeShow : function( arg1, arg2 ){
             var ret,
             value = this.input.value,
             cb = "onBeforeShow";

             if( this.getData( 'ltPropTrim' ) ){
                 value = value.trim();
             }

              if( value.length < this.data.ltPropMinLength ) {
                 return false
              }
              if( this.getMethods( cb ) ) {
                 /**
                  * @method onBeforeShow
                  */
                  ret = this.executeMethod( cb, arg1, arg2 );
                  if( ret == false ){
                     return false
                  }
              }  
              if( ret && ret.then ) {
                  ret.then( function(){
                     if( this.dropdown && this.dropdown != _lyteDropdown.lastDropdownWithAPromise ){
                        return;
                     }
                     setTimeout( this.pressFunc.bind( this ), 0, value, {} );
                  }.bind( this ) );
                  return ret;
              } else if( !this._bymanual ) {
                  setTimeout( this.pressFunc.bind( this ), 0, value, {} );
              } 
           },
           beforeHide : function( evt, arg2 ){

              if( this.getData( 'ltPropPreventInsideClick' ) && evt && evt.type == "click" ) {
                if( this.$node.contains( evt.target) ) {
                    return false
                 }
              }
              if(this.getMethods('onBeforeHide')){
               /**
                * @method onBeforeHide
                */
                return this.executeMethod('onBeforeHide', evt, arg2 )
              } 
           },
           add : function(){
              var arg = arguments,
              cb = "onAdd";

              this.getMethods( cb ) && this.executeMethod( cb, arg[ 0 ], arg[ 1 ], arg[ 2 ], arg[ 3 ] );
           },
           remove : function(){
              var arg = arguments,
              cb = "onRemove";

              this.getMethods( cb ) && this.executeMethod( cb, arg[ 0 ], arg[ 1 ], arg[ 2 ], arg[ 3 ] );
           },
           positionChanged : function( arg1, arg2 ){
              var cb = 'onPositionChanged';
             /**
              * @method onPositionChanged
              */
              this.getMethods( cb ) && this.executeMethod( cb, arg1, arg2 );
           },
           scroll : function(){
             /**
              * @method onScroll
              */
              this.getMethods('onScroll') && this.executeMethod('onScroll', arguments[0], arguments[1]);
           },
          valuechange : function(arg1){
             /**
              * @method onValueChange
              */
              this.getMethods('onValueChange') && this.executeMethod('onValueChange', arg1, this.$node);
          },
          blurEvent : function(arg1){
             /**
              * @method onBlur
              */
              this.getMethods('onBlur') && this.executeMethod('onBlur',arg1,this.$node);
          },
          
          focus :function( arg1, arg2 ){
             /**
              * @method onFocus
              */
              this.getMethods('onFocus') && this.executeMethod('onFocus',arg1, this.$node);
          }

        },

        filteringArray : function( searchList, targetList, val, event ){
            var data = this.data,
            method = data.ltPropMethod,
            visibleList = [],
            hiddenList = [],
            cb = 'onSearch',
            className = 'lyteSearchHidden';

            if( val.length ){
                var len = searchList.length;

                for( var i = 0; i < len; i++ ){
                    var check = false,
                    str = searchList[ i ].trim().toLowerCase(),
                    __index = str.indexOf( val );

                    switch( method ){
                      case 'contains' : {
                          check = __index >= 0;
                          break;    
                       }
                       case 'startsWith' : {
                          check = __index == 0;
                          break;  
                       }
                       case 'endsWith' : {
                            var __index = str.lastIndexOf( val );
                            if( __index != -1 ) {
                                check = ( __index + val.length ) == str.length;
                            } 
                            break;
                       }
                    } 
                    if( check ){
                       visibleList.push( targetList[ i ] );
                    } else {
                       hiddenList.push( targetList[ i ] );
                    }
                }

            } else {
                visibleList = this.arrayFrom( targetList );
            }
             /**
              * @method onSearch
              */
            if( this.getMethods( cb ) && this.executeMethod( cb, visibleList, this.autocompleteComp, this.$node, val, event ) == false ){
              return;
            }

            visibleList.forEach( function( item ){
                item.classList.remove( className );
            });

            hiddenList.forEach( function( item ){
                item.classList.add( className );
            });

            this.optGroupHide();
            this.errorMessage( !visibleList.length ); 
            if( visibleList.length && this.data.ltPropHighlight ) {
               this.highlightText( targetList, val );
            }
        },

        // hide category

        optGroupHide : function( bool ){
            var item_str = "lyte-drop-item",
            hiddenClass = 'lyteSearchHidden',
            selectionClass = 'lyteDropdownSelection',
            dropbody = $L( this.dropbody ),
            items = dropbody.find( item_str + ':not(.' + hiddenClass + '):not(.lyteDropdownActive)' ),
            selected = dropbody.find( item_str + '.' + selectionClass ).get( 0 );

            if( !bool ){
                var categories = dropbody.find( 'lyte-drop-group' ),
                __length = categories.length;

                for( var i = 0; i < __length; i++ ){
                    var current = categories.eq( i );
                    if( current.find( item_str + '.' + hiddenClass ).length == current.find( item_str ).length ){
                       current.css( 'display', 'none' );
                    } else {
                       current.css( 'display', 'block' );
                    }
                }
            }

            $L.fastdom.measure( function(){
                  var curr,
                  __length = items.length;

                  for( var i = 0; i < __length; i++ ) {
                      var $curr = items.eq( i ),
                      curr_dom = $curr.get( 0 );

                      if( curr_dom.offsetParent && !$curr.hasClass( 'lyteDropdown-disabled' )  ){
                        curr = curr_dom;
                        break;
                      }
                  }
                  $L.fastdom.mutate( function(){
                    if( curr && selected != curr ) {
                      $L( selected ).removeClass( selectionClass );
                      $L( curr ).addClass( selectionClass );
                    }
                  }.bind( this ) );
              }.bind( this ) );

        },

        contentFiltering : function( val, event ){
            var dropdown = this.dropdown,
            content = [],
            $dropbody = $L( this.dropbody ),
            hiddenClass = 'lyteDropdownHidden',
            data = this.data,
            is_hidden = $dropbody.hasClass( hiddenClass ),
            __length = val.length,
            minLength = data.ltPropMinLength;

            event = event || {};

            if( ( is_hidden && __length >= minLength ) || ( !is_hidden && __length < minLength ) ){
                this._bymanual = true;
                dropdown.toggle();
                delete this._bymanual;

                if( $dropbody.hasClass( hiddenClass ) ){
                  return;
                }
            }

            var target = $dropbody.find( 'lyte-drop-item:not(.lyteDropdownActive)' ),
            dia = data.ltPropDiacritic,
            __len = target.length;

            for( var k = 0; k < __len; k++ ){
                var label = target.eq( k ).find( 'lyte-autocomplete-label' ),
                keyword = label.attr( 'keywords' );

                if( keyword ){
                    try{
                        keyword = JSON.parse( keyword ).join( ' ' );
                    } catch( err ){
                        // keyword = '';
                    }
                }

                var valueToPush = keyword || label.text().trim();

                if( dia ){
                    valueToPush = _lyteUiUtils.convert_diacritics( valueToPush );
                }

                content.push( valueToPush );
            }

            if( dia ){
                val = _lyteUiUtils.convert_diacritics( val );
             }
             this.filteringArray( content, target, val.toLowerCase(), event )
        },

        // filtering process  
        pressFunc : function( val, event ){
            var data = this.data;

            if( data.ltPropTrim ){
                val = val.trim();
            }

            if( !data.ltPropExternalSearch ){
                 this.contentFiltering( val, event );
            } else {
                var $dropbody = $L( this.dropbody ),
                hiddenClass = 'lyteDropdownHidden',
                dropdown = this.dropdown,
                cb = 'onExtSearch';

                if( val.length >= data.ltPropMinLength || !event.target ){
                    if( event.type && $dropbody.hasClass( hiddenClass ) && data.ltPropExtSearchOpen ){
                        dropdown.toggle();
                        if( $dropbody.hasClass( hiddenClass ) ){
                            return;
                        }
                    }
                    if( this.getMethods( cb ) ){
                        /**
                          * @method onExtSearch
                          */
                        this.executeMethod( cb, val, this.$node, event );
                    }
                } else if( !$dropbody.hasClass( hiddenClass ) ) {
                    dropdown.toggle();
                }
            }
        }
  });

/**
 * @syntax Non yielded
 * <lyte-autocomplete lt-prop-appearance='flat' lt-prop-content='[{"label":"New File","key":"Ctrl + N","words":["new"]}]' lt-prop-highlight='true'>
 * </lyte-autocomplete>
 */

/**
 * @syntax Yielded
 *  <lyte-autocomplete lt-prop-yield="true" lt-prop-appearance='flat' lt-prop-highlight=true >
 *     <template is="registerYield" yield-name="yield">
 *        <lyte-drop-box>
 *            <lyte-drop-body>
 *                <lyte-drop-item>
 *                   <lyte-autocomplete-label keywords='["new","file","document"]'> New File </lyte-autocomplete-label> 
 *                   <lyte-autocomplete-description> Ctrl + N </lyte-autocomplete-description> 
 *                </lyte-drop-item> 
 *            </lyte-drop-body>
 *        </lyte-drop-box>
 *    </template> 
 * </lyte-autocomplete>
 */