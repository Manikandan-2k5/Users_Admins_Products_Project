/**
 * Renders a table
 * @component lyte-expresstable
 * @version  3.1.0
 * @methods beforeSetFixTableRowHeight,afterSetFixTableRowHeight,beforeSetFixTableColumnWidth,afterSetFixTableColumnWidth,onBeforeSelect,onSelect,onBeforeMove,onMove,onBeforeInterChange,onInterChange,onBeforeDrop,onDrop,onRelease
 * @utility fixRowHeight,scrollTo,setHeaderWidth,fixColumn,setColumnWidth,setVisibleFixedHeader,reset
 */
Lyte.Component.register("lyte-expresstable", {
_template:"<template tag-name=\"lyte-expresstable\"> <div class=\"lyteExpTableWrapper\" role=\"{{ltPropRole}}\"> <template is=\"if\" value=\"{{ltPropFullYield}}\"><template case=\"true\"> <div class=\"lyteExpTableOrigTableInnerWrap\" tabindex=\"0\" onscroll=\"{{action('scroll',event)}}\"> <lyte-yield class=\"lyteExpOriginalTable\" yield-name=\"fullYield\" lt-prop-header=\"{{tableHeader}}\" lt-prop-content=\"{{ltPropContent}}\"></lyte-yield> </div> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(ltPropStickyTable,'!')}}\"><template case=\"true\"> <template is=\"if\" value=\"{{expHandlers(ltPropHeaderLabelKey,'&amp;&amp;',tableHeader.length)}}\"><template case=\"true\"> <div class=\"lyteExpTableFakeHeaderWrapper\"> <div class=\"lyteExpTableFixedColHeader\"> <template is=\"if\" value=\"{{expHandlers(ltPropYield,'==',false)}}\"><template case=\"true\"> <lyte-exptable-thead class=\"fixedColumnTableHeader lyteExpTableHeaderGroup\" role=\"rowgroup\"> <lyte-exptable-tr class=\"fixedColumnTableRow lyteExpTableRow\" role=\"row\"> <template is=\"for\" items=\"{{fixedTableHeader}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-th class=\"fixedColumn lyteExpTableHead {{list.class}}\" id=\"{{list.id}}\" index=\"{{indexVal}}\" resize=\"{{list.resize}}\" fixed=\"{{list.fixed}}\" icon=\"{{list.icon}}\" role=\"columnheader\"> {{list[ltPropHeaderLabelKey]}} </lyte-exptable-th> </template> </lyte-exptable-tr> </lyte-exptable-thead> </template><template case=\"false\"> <lyte-yield class=\"lyteExpTableFakeHeaderGroup lyteExpTableHeaderGroup\" yield-name=\"headerYield\" lt-prop-table-header=\"{{fixedTableHeader}}\"></lyte-yield> </template></template> </div> <div class=\"lyteExpTableFakeColHeaderWrapper\"> <template is=\"if\" value=\"{{expHandlers(ltPropYield,'==',false)}}\"><template case=\"true\"> <lyte-exptable-thead class=\"lyteExpTableFakeColHeader lyteExpTableHeaderGroup\" role=\"rowgroup\"> <lyte-exptable-tr class=\"originalColumnTableRow lyteExpTableRow\" role=\"row\"> <template is=\"for\" items=\"{{tableHeader}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-th id=\"{{list.id}}\" class=\"originalColumn lyteExpTableHead list.class\" index=\"{{indexVal}}\" resize=\"{{list.resize}}\" fixed=\"{{list.fixed}}\" icon=\"{{list.icon}}\" role=\"columnheader\"> {{list[ltPropHeaderLabelKey]}} </lyte-exptable-th> </template> </lyte-exptable-tr> </lyte-exptable-thead> </template><template case=\"false\"> <lyte-yield class=\"lyteExpTableFakeColHeader lyteExpTableHeaderGroup\" yield-name=\"headerYield\" lt-prop-table-header=\"{{tableHeader}}\" role=\"rowgroup\"></lyte-yield> </template></template> </div> </div> </template></template> </template></template> <div class=\"lyteExpTableOrigTableWrapper \"> <template is=\"if\" value=\"{{expHandlers(ltPropStickyTable,'!')}}\"><template case=\"true\"> <div class=\"lyteExpTableFixedColWrapper\" onscroll=\"{{action('fixedColScroll',event)}}\"> <lyte-exptable class=\"lyteExpTableFixedColTable\"> <template is=\"if\" value=\"{{expHandlers(ltPropYield,'==',false)}}\"><template case=\"true\"> <lyte-exptable-thead class=\"fixedColumn lyteExpTableHeaderGroup\" role=\"rowgroup\"> <lyte-exptable-tr class=\"fixedColumn lyteExpTableRow\" role=\"row\"> <template is=\"for\" items=\"{{fixedTableHeader}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-th id=\"{{list.id}}\" class=\"fixedColumn lyteExpTableHead list.class\" index=\"{{indexVal}}\" resize=\"{{list.resize}}\" fixed=\"{{list.fixed}}\" icon=\"{{list.icon}}\" role=\"columnheader\"> {{unescape(list[ltPropHeaderLabelKey])}} </lyte-exptable-th> </template> </lyte-exptable-tr> </lyte-exptable-thead> <lyte-exptable-tbody class=\"fixedColumn lyteExpTableRowGroup\" role=\"rowgroup\"> <template is=\"for\" items=\"{{ltPropContent}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-tr id=\"{{list.id}}\" class=\"fixedColumn lyteExpTableRow {{list.class}}\" role=\"row\" aria-rowindex=\"{{indexVal}}\"> <template is=\"for\" items=\"{{fixedTableHeader}}\" item=\"header\" index=\"index\"> <lyte-exptable-td class=\"fixedColumn lyteExpTableCell\" role=\"cell\" aria-colindex=\"{{index}}\">{{unescape(lyteUiGetValue(list,header[ltPropBodyLabelKey]))}}</lyte-exptable-td> </template> </lyte-exptable-tr> </template> </lyte-exptable-tbody> </template><template case=\"false\"> <lyte-yield class=\"lyteExpTableHeaderGroup\" yield-name=\"headerYield\" lt-prop-table-header=\"{{fixedTableHeader}}\" role=\"rowgroup\"></lyte-yield> <lyte-yield class=\"lyteExpTableRowGroup\" yield-name=\"contentYield\" lt-prop-table-header=\"{{fixedTableHeader}}\" role=\"rowgroup\"> </lyte-yield> </template></template> </lyte-exptable> </div> </template></template> <template is=\"if\" value=\"{{expHandlers(ltPropHeaderLabelKey,'&amp;&amp;',tableHeader.length)}}\"><template case=\"true\"> <div class=\"lyteExpTableOrigTableInnerWrap\" tabindex=\"0\" onscroll=\"{{action('scroll',event)}}\"> <lyte-exptable class=\"lyteExpOriginalTable\"> <template is=\"if\" value=\"{{expHandlers(ltPropYield,'==',false)}}\"><template case=\"true\"> <lyte-exptable-thead class=\"originalColumn lyteExpTableHeaderGroup\" role=\"rowgroup\"> <lyte-exptable-tr class=\"originalColumn lyteExpTableRow\" role=\"row\"> <template is=\"for\" items=\"{{tableHeader}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-th id=\"{{list.id}}\" class=\"originalColumn lyteExpTableHead list.class\" index=\"{{indexVal}}\" resize=\"{{list.resize}}\" fixed=\"{{list.fixed}}\" icon=\"{{list.icon}}\" role=\"columnheader\"> {{list[ltPropHeaderLabelKey]}} </lyte-exptable-th> </template> </lyte-exptable-tr> </lyte-exptable-thead> <lyte-exptable-tbody class=\"originalColumn lyteExpTableRowGroup\" role=\"rowgroup\"> <template is=\"for\" items=\"{{ltPropContent}}\" item=\"list\" index=\"indexVal\"> <lyte-exptable-tr id=\"{{list.id}}\" class=\"originalColumn lyteExpTableRow {{list.class}}\" role=\"row\" aria-rowindex=\"{{indexVal}}\"> <template is=\"for\" items=\"{{tableHeader}}\" item=\"header\" index=\"index\"> <lyte-exptable-td class=\"originalColumn lyteExpTableCell\" role=\"cell\" aria-colindex=\"{{index}}\">{{unescape(lyteUiGetValue(list,header[ltPropBodyLabelKey]))}}</lyte-exptable-td> </template> </lyte-exptable-tr> </template> </lyte-exptable-tbody> </template><template case=\"false\"> <lyte-yield class=\"lyteExpTableHeaderGroup\" yield-name=\"headerYield\" lt-prop-table-header=\"{{tableHeader}}\" role=\"rowgroup\"></lyte-yield> <lyte-yield class=\"lyteExpTableRowGroup\" yield-name=\"contentYield\" lt-prop-table-header=\"{{tableHeader}}\" role=\"rowgroup\"></lyte-yield> </template></template> </lyte-exptable> </div> </template></template> </div> </template></template> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"insertYield","position":[1,1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"if","position":[1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]}},"default":{}},{"type":"attr","position":[1,3,1]},{"type":"if","position":[1,3,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]}},"default":{}}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[2,1]},{"type":"if","position":[2,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1,1]},{"type":"if","position":[1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[3]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]},{"type":"attr","position":[3]},{"type":"insertYield","position":[3]}]}},"default":{}},{"type":"componentDynamic","position":[1,1]}]}},"default":{}},{"type":"attr","position":[2,3]},{"type":"if","position":[2,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1,1]},{"type":"if","position":[1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1,1]},{"type":"for","position":[1,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1,1]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"for","position":[3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[3]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]},{"type":"attr","position":[3]},{"type":"insertYield","position":[3]}]}},"default":{}},{"type":"componentDynamic","position":[1,1]}]}},"default":{}}]}},"default":{}}],
_observedAttributes :["ltPropHeader","ltPropContent","ltPropHeaderLabelKey","ltPropBodyLabelKey","ltPropYield","ltPropInfiniteScroll","ltPropYield","ltPropMinWidth","ltPropMaxWidth","ltPropFixedTableScroll","ltPropHeight","ltPropPreventWidth","ltPropColumnSortable","ltPropScrollStep","ltPropHeaderOnly","ltPropPreventTableModify","ltPropSortDummyColumClass","ltPropPreventContentObserver","ltPropStickyTable","ltPropCellTag","ltPropRole","ltPropNavigation","ltPropFullYield","fixedTableHeader","fixedTableContent","tableHeader","tableContent","columns","minWidth1","minWidth2"],

    data : function(){
        return {
            /** 
             * @componentProperty {array} ltPropHeader=[]
             * @version 3.1.0
             */
            ltPropHeader : Lyte.attr("array",{"default":[]}),
            /** 
             * @componentProperty {array} ltPropContent=[]
             * @version 3.1.0
             */
            ltPropContent : Lyte.attr("array",{"default":[]}),
            /** 
             * @componentProperty {string} ltPropHeaderLabelKey=''
             * @version 3.1.0
             */
            ltPropHeaderLabelKey : Lyte.attr("string",{"default":''}),
           /** 
             * @componentProperty {string} ltPropBodyLabelKey=''
             * @version 3.1.0
             */
            ltPropBodyLabelKey : Lyte.attr("string",{"default":''}),
            /** 
             * @componentProperty {boolean} ltPropYield=false
             * @version 3.1.0
             */
            ltPropYield : Lyte.attr('boolean', {'default' : false}),
            /** 
             * @componentProperty {boolean} ltPropInfiniteScroll=false
             * @version 3.1.0
             */
            ltPropInfiniteScroll : Lyte.attr('boolean',{'default':false}),
           /** 
             * @componentProperty {boolean} ltPropYield=false
             * @version 3.1.0
             */
            ltPropYield : Lyte.attr('boolean', {'default' : false}),
            /** 
             * @componentProperty {string} ltPropMinWidth='50px'
             * @version 3.1.0
             */
            ltPropMinWidth : Lyte.attr('string',{'default':'50px'}),
            /** 
             * @componentProperty {string} ltPropMaxWidth='1000px'
             * @version 3.1.0
             */
            ltPropMaxWidth : Lyte.attr('string',{'default':'1000px'}),
           /** 
             * @componentProperty {boolean} ltPropFixedTableScroll=false
             * @version 3.1.0
             */
            ltPropFixedTableScroll : Lyte.attr('boolean',{'default':false}),
            /** 
             * @componentProperty {string} ltPropHeight='auto'
             * @version 3.1.0
             */
            ltPropHeight : Lyte.attr('string',{'default':'auto'}),
            /** 
             * @componentProperty {boolean} ltPropPreventWidth=false
             * @version 3.1.0
             */
            ltPropPreventWidth : Lyte.attr('boolean',{'default':false}),
            // column sortable
            /** 
             * @componentProperty {boolean} ltPropColumnSortable=false
             * @version 3.1.0
             */
            ltPropColumnSortable : Lyte.attr( 'boolean', { default : false } ),
            /** 
             * @componentProperty {number} ltPropScrollStep=10
             * @version 3.1.0
             */
            ltPropScrollStep : Lyte.attr( 'number', { default : 10 } ),
            /** 
             * @componentProperty {boolean} ltPropHeaderOnly=false
             * @version 3.1.0
             */
            ltPropHeaderOnly : Lyte.attr( 'boolean', { default : false } ),
            /** 
             * @componentProperty {boolean} ltPropPreventTableModify=false
             * @version 3.1.0
             */
            ltPropPreventTableModify : Lyte.attr( 'boolean', { default : false } ),
            /** 
             * @componentProperty {string} ltPropSortDummyColumClass=""
             * @version 3.1.0
             */
            ltPropSortDummyColumClass : Lyte.attr( 'string', { default : "" } ),
            /** 
             * @componentProperty {boolean} ltPropPreventContentObserver=false
             * @version 3.1.0
             */
            ltPropPreventContentObserver : Lyte.attr( 'boolean', { default : false } ),
            /** 
             * @componentProperty {boolean} ltPropStickyTable=false
             * @version 3.1.0
             */
            ltPropStickyTable : Lyte.attr('boolean'),

            ltPropCellTag : Lyte.attr( 'string', { default : 'lyte-exptable-td' } ),
             /** 
             * @componentProperty {string} ltPropRole=''
             * @version 3.1.0
             */
            ltPropRole : Lyte.attr('string',{'default':''}),
            ltPropNavigation : Lyte.attr( 'boolean', { default : false } ),

            ltPropFullYield : Lyte.attr( 'boolean', { default : false } ),

            fixedTableHeader : Lyte.attr("array",{"default":[]}),
            fixedTableContent : Lyte.attr("array",{"default":[]}),
            tableHeader : Lyte.attr("array",{"default":[]}),
            tableContent : Lyte.attr("array",{"default":[]}),
            columns : Lyte.attr("array",{"default":[]}),
            minWidth1 : Lyte.attr('string',{'default' : ''}),
            minWidth2 : Lyte.attr('string',{'default' : ''})
        }       
    },

    didDestroy: function() {
        this.$node.fixRowHeight = null;
        this.$node.scrollTo = null;
        this.$node.setColumnWidth = null;
        clearTimeout(this._scrollTimeOut)
        this._initProcessFrame != undefined && window.cancelAnimationFrame( this._initProcessFrame );
        this._setmeasure && $L.fastdom.clear( this._setmeasure );
        this._intersectionObs && this._intersectionObs.disconnect();
        this._intersections = [];
        delete this._intersectionObs; delete this._vertdiv; delete this._measure;
        delete this.scrollDiv; delete this.resizeComponent; delete this.targetElem;
    },

   init : function(){
        var uA = navigator.userAgent;
        this._dir = _lyteUiUtils.getRTL();

        this.isIE11Lyte = /rv:11/ig.test( uA );
        this.isEdgeLyte = /Edge/ig.test( uA );
        this._scrollWidth = _lyteUiUtils.getScrollBarWidth();
        this._verticalScrollWidth = this._scrollWidth;
        this._isSafari = /safari/ig.test( uA );
        // this._browser = this.isIE11Lyte || this.isEdgeLyte || uA.match('Safari');
        this._isIE = this.isIE11Lyte || this.isEdgeLyte;
        this._FF = /firefox/ig.test( navigator.userAgent );
        this._fixHeaderCount=0
        this._tmpScrollTop=0
        this._chrome = /Chrome/i.test(navigator.userAgent) && /Google Inc/i.test(navigator.vendor);
        this._isNegative = _lyteUiUtils.isNegativeScroll()

        if( !this._FF && this.getData('ltPropStickyTable') == undefined ){
            var span = document.createElement( 'th' ),
            isIntersection = "IntersectionObserver" in window;
            span.style.position = "sticky";
            if( span.style.position == "sticky" && isIntersection ){
               this.setData('ltPropStickyTable',true)
            } 
            else {
                span.style.position = "-webkit-sticky";
                if( span.style.position == "-webkit-sticky" && isIntersection ){
                   this.setData('ltPropStickyTable',true)
                }
                else{
                    this.setData('ltPropStickyTable',false)
                }
            }
        }


        if(this.getMethods('beforeRender'))
        {
            this.executeMethod('beforeRender', this.$node);
        }
        this.setTableHeader();
        this.setData('tableContent',this.getData('ltPropContent'))

        var tableHeader=this.getData('tableHeader'),
        fixedTableHeader=this.getData('fixedTableHeader');

        // for(var i=0;i<tableHeader.length;++i){
        //     if(tableHeader[i].fixed&&tableHeader[i].fixed=="enable"){
        //         Lyte.arrayUtils(fixedTableHeader,'push',tableHeader[i])
        //     }
        // }
       
   },
   didConnect : function(){

        this.$node.contentObserver = this.callContentObs.bind( this );

        this.$node.fixRowHeight = function( row ) {
            if( !this.getData('ltPropStickyTable') ){
                this.setFixTableRowHeight( row );
            }else {
                this.setLeftForInterSection(true);
            }
        }.bind( this );
        this.$node.fixColumn = function( col ) {
            if( !this.getData('ltPropStickyTable') ){
                this.setFixTableColumnWidth( col );
            }else {
                this.setLeftForInterSection(true);
            }
        }.bind( this );
        this.$node.setColumnWidth = function(col){
            if( !this.getData('ltPropStickyTable') ){
                this.setFixTableColumnWidth( col );
            }else {
                this.setLeftForInterSection(true);
            }
        }.bind( this );
        this.$node.setVisibleFixedHeader = function(){
            if( !this.getData('ltPropStickyTable') ){
                this.setVisibleFixHeader()
            } else {
                this.setLeftForInterSection(true);
            }
        }.bind( this );
        this.$node.setHeaderWidth = function(){
            if( !this.getData('ltPropStickyTable') ){
                this.fixHeaderHeight();
            }else {
                this.setLeftForInterSection(true);
            }
        }.bind( this );
        this.$node.reset = function(){
            this.setLeftForInterSection(true);
        }.bind(this);

        this.$node.toggleRows = this.do_toggle_animation.bind( this );

        this._scrollDiv=this.$node.getElementsByClassName('lyteExpTableOrigTableInnerWrap')[ 0 ]
        if( this.getData('ltPropHeader').length >=1 ){
            if( !this.getData( 'ltPropStickyTable' ) ){
                 this.initProcess()
             }
             else{
               
                        this.$node.getElementsByClassName('lyteExpTableWrapper')[ 0 ].classList.add( 'lyteExpStickyTable' );
                        var scrollDiv = this.$node.getElementsByClassName('lyteExpTableOrigTableInnerWrap')[0];

                        this.registerInterSection( scrollDiv );
                        // scrollDiv.addEventListener( 'scroll', this.stickyScroll.bind( this ), true );
                        this.setLeftForInterSection( true );
                        var  height = this.getData( 'ltPropHeight' );
                        if( height != 'auto' ){
                            this.$node.style.height = this.getData( 'ltPropHeight' );
                        }
                        // this.detectBrowsers();
                
                  this._originalDiv = this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' )[ 0 ]
                  this._originalTable = this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ]
                   this.setWidth()
             }
            if( this.getMethods('afterRender') ) {
                
                this.executeMethod('afterRender', this.$node);
            }
        }

        this.$node.scrollTo = function( arg1, arg2 ,event){
            this._scrolled = true;
            if( arg1 != undefined ){
                this._originalDiv.scrollLeft = arg1;
            }
            if( arg2 != undefined ){
                this._originalDiv.scrollTop = arg2;
            }
           if( this._scrolled ){
                clearTimeout( this._scrollTimeOut ) 
                this._scrollTimeOut = setTimeout(function(){
                this.actions.scroll.call( this,event,arg1,arg2, true );
              }.bind(this),20)
            }
           delete this._scrolled;
            
        }.bind( this );
        if( this.getData('ltPropNavigation') && !this.getData('ltPropStickyTable')){
            var options = {
                beforeNavigation : this.beforeNavigationFunc.bind(this),
                afterNavigation : this.afterNavigationFunc.bind(this)
            }
            _lyteUiUtils.tableNavigation( this.$node.querySelector( '.lyteExpTableWrapper' ) ,options);
        } else if( this.getData('ltPropNavigation') ) {
            _lyteUiUtils.tableNavigation( this.$node.querySelector( '.lyteExpOriginalTable' ) );
        }
        // this.$node.setHeaderWidth = function(){
        //     this.fixHeaderHeight();
        // }.bind( this );
   },
    beforeNavigationFunc : function( tableCell ) {
        if(!this.$node.querySelector( 'lyte-exptable.lyteExpOriginalTable' ).contains(tableCell)){
            this._oriwrap = this._oriwrap || this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' ) [ 0 ];
            var fakeColumnIndex = Array.from(tableCell.parentElement.children).indexOf(tableCell),
            originalHeader = Array.from( this._oriwrap.querySelectorAll( 'lyte-exptable-th.lyteFixedColumn' ) )[fakeColumnIndex];
            if(originalHeader){
                var headerRow = this._oriwrap.getElementsByTagName('lyte-exptable-tr')[0],
                rowIndex  = Array.from(this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[0].querySelectorAll('lyte-exptable-tr')).indexOf(tableCell.parentElement),
                columnIndex = Array.from(headerRow.children).indexOf(originalHeader);
                return this._oriwrap.getElementsByTagName('lyte-exptable-tr')[rowIndex].children[columnIndex]
           
            }
        }
        return tableCell;
    },
    afterNavigationFunc : function( tableCell , event) {
        this._oriwrap = this._oriwrap || this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' ) [ 0 ];

        var columnIndex = Array.from( tableCell.parentElement.children ).indexOf( tableCell ),
            headerRow = this._oriwrap.getElementsByTagName( 'lyte-exptable-tr' )[ 0 ],
            originalHeader = Array.from( headerRow.children )[ columnIndex ],
            fixedIndex = Array.from( this._oriwrap.querySelectorAll( 'lyte-exptable-th.lyteFixedColumn' ) ).indexOf(originalHeader);
            if( this._fixHeaderCount-1 >= fixedIndex ){
                var fakeTable = this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ];
                var rowIndex = Array.from( this._oriwrap.querySelectorAll( 'lyte-exptable-tr' ) ).indexOf( tableCell.parentElement );
                return fakeTable.querySelectorAll( 'lyte-exptable-tr' )[ rowIndex ].children[ fixedIndex ]
            }
        return tableCell;
    },
   initProcess : function(){
        var originalDiv = this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' )[ 0 ],
        isFF = this._FF;
        this._originalDiv = originalDiv
        this._oHeader = this.$node.getElementsByClassName( 'lyteExpTableFakeColHeader' )[ 0 ]
        this._headerDiv = this.$node.getElementsByClassName( 'lyteExpTableFakeHeaderWrapper' )[ 0 ];
        this._originalTable = this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
        this._fakeOriginalHeader=this.$node.getElementsByClassName('lyteExpTableFakeColHeaderWrapper')[ 0 ]
        var div = this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],
        height = this.getData( 'ltPropHeight' ),scrollWidth;
        var scrollWidth = this._scrollWidth

        if( height != 'auto' ){
            this.$node.style.height = this.getData( 'ltPropHeight' );
        } 
        
        
        $L.fastdom.measure( function(){
            var lt = this._dir ? "left" : "right";
            this._startScrollLeft = isFF ? 0 : originalDiv.scrollLeft;
            this.setScrollWidth(true);
            var tbHeight = this._originalDiv.getBoundingClientRect().height;
                 this._resizeScrollLeft = originalDiv.scrollLeft;
                    $L.fastdom.mutate( function(){
                        
                        this._headerDiv.style[ lt ] = this._verticalScrollWidth +"px";
                        if( originalDiv.offsetWidth!= originalDiv.scrollWidth){
                            div.style.height = 'calc(100% - '+this._scrollWidth+'px)' 
                        }

                    }.bind( this ) );
                }.bind( this ) );
        
        // var ;

        // if(height!="auto"){
        //     this.$node.style.height=this.getData('ltPropHeight')
        // }
        // else{
            // this.$node.style.height = this._originalDiv.getBoundingClientRect().height + 'px';
        // }
        this.setFixTableColumnWidth();
        
        this.setWidth();
       
        // var scrollWidth=originalDiv.offsetWidth-originalDiv.clientWidth
        // var lt=this._dir? "left":"right"
        // this._startScrollLeft=originalDiv.scrollLeft;
        // this._headerDiv.style[lt]=scrollWidth +"px";
        // this._scrollWidth=scrollWidth;
        // div=this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ];
        
        // div.style.height=parseInt(height)-scrollWidth +"px"
        this._prevScollLeft = 0;
        // this._headerList=this._oHeader.querySelectorAll('lyte-exptable-th');
        // var strList=originalDiv.querySelectorAll('lyte-exptable-tr');
        this._initProcessFrame != undefined && window.cancelAnimationFrame( this._initProcessFrame );
        this._initProcessFrame = window.requestAnimationFrame( function() {
            this.setVisibleFixHeader();
            delete this._initProcessFrame;
            // this.setFixTableRowHeight();
        }.bind(this))
    },
    setFixedTable : function(){
        var originalTable = this._originalTable  || this.$node.getElementsByClassName('lyteExpOriginalTable')[0],
        originalTableHeader = originalTable.getElementsByTagName('lyte-exptable-th'),
        tableHeader = this.getData('ltPropHeader'), fixedTableHeader=[]
        for(var i = 0 ; i < tableHeader.length ; i++ ) {
            if( tableHeader[i].fixed && tableHeader[i].fixed == "enable" && originalTableHeader[i].offsetWidth != 0 ) {
                 Lyte.arrayUtils(fixedTableHeader,'push',tableHeader[i])
            }
        }
        this.setData('fixedTableHeader',fixedTableHeader)
        this.setData('fixedTableContent',this.setData('ltPropContent'))
    },
    // setting value for tableHeader
   setTableHeader : function(){ // for setting tableHeader 
            var tableHeader=[],ltPropHeader=this.getData('ltPropHeader'), fixedTableHeader=[]
            for(var i=0;i<ltPropHeader.length;++i){
                tableHeader[i]=ltPropHeader[i];
                if( !this.getData('ltPropStickyTable') && tableHeader[i].fixed && tableHeader[i].fixed == "enable"  ) {
                 Lyte.arrayUtils(fixedTableHeader,'push',tableHeader[i])
            }
            }
            this.setData('tableHeader',tableHeader)
            if( !this.getData('ltPropStickyTable') ){
                this.setData('fixedTableHeader',fixedTableHeader)
            }
     },
    setWidth : function(){
        var sthList=this._originalDiv.getElementsByTagName('lyte-exptable-th');
        var widthList=[],width=0, rpx = /(\d*)px/i;
         $L.fastdom.measure(function(){
            for(var i=0;i<sthList.length;++i){

                var off=sthList[i].getBoundingClientRect().width
                widthList[i]={}
                width+=off
                widthList[i].width= off;
            }
           
         }.bind( this ))
        this._widthList=widthList
    },
    setScrollWidth : function(flag){
            this._oriwrap = this._oriwrap || this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' ) [ 0 ];
             if(this._oriwrap){
                var scrollWidth = this._scrollWidth,heightScrollWidth = this._scrollWidth

                if(this._oriwrap.scrollHeight<=this._oriwrap.offsetHeight){
                        this._verticalScrollWidth = 0;
                       scrollWidth=0
                }
                else {
                     this._verticalScrollWidth = this._scrollWidth ;
                    scrollWidth = this._scrollWidth
                }
                if(!flag){

                        
                    $L.fastdom.measure( function(){
                        var lt = this._dir ? "left" : "right";
                        $L.fastdom.mutate( function(){

                                 this._headerDiv.style[ lt ] = scrollWidth +"px";
                                                    }.bind( this ) );
                    }.bind( this ) );
                 }

            }
    },
    fixHeaderHeight : function(){ // setting min-width value for fixedTable and both fakeHeader 
        var tableHeader=this.getData('tableHeader'),fixedTableHeader=this.getData('fixedTableHeader');
        var sHeader=this._oHeader,thList=sHeader.getElementsByTagName( 'lyte-exptable-th' );
        var sthList=this._originalDiv.getElementsByTagName( 'lyte-exptable-th' );

        var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],
        offset=[],minWidth=[],width=[],sum=0,fixedSum=0, rpx = /(\d*)px/i;
        var originalTable =this._originalTable || this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
        if( originalTable.style.width!="" && this.getData('ltPropPreventWidth')){
            this.setFixedTableWidth()
        }else {
           $L.fastdom.measure(function(){
                for(var i=0;i<thList.length;++i){ // setting minWidth value for fakeOriginalHEader
                    width[i] = this.getData('ltPropPreventWidth') ? ( sthList[i].style.width ? parseInt(sthList[i].style.width) : sthList[i].getBoundingClientRect().width) : sthList[i].getBoundingClientRect().width;
                }  

                $L.fastdom.mutate(function(){
                    var tableHeader=this.getData('tableHeader'),fixedTableHeader=this.getData('fixedTableHeader');
                    var sHeader=this._oHeader,thList=sHeader.getElementsByTagName( 'lyte-exptable-th' );
                    var sthList=this._originalDiv.getElementsByTagName( 'lyte-exptable-th' );

                    var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
                    this._fixedDivWrap = this._fixedDivWrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];

                    var ftrList=fDiv.getElementsByTagName( 'lyte-exptable-tr' ),fixedColumn=[],
                    fHeader=this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' )[ 0 ],_thList=fHeader.getElementsByTagName( 'lyte-exptable-th' );
                    var fthList=fDiv.getElementsByTagName( 'lyte-exptable-th' );
                    
                    for(var i=0;i<thList.length;++i){ // setting minWidth value for fakeOriginalHEader
                        if(!this.getData('ltPropPreventWidth')){
                            thList[i].style.width=width[i]+"px";
                            sthList[i].style.width=width[i]+"px";
                        }
                        
                        sum+=width[i];
                        if(sthList[ i ].classList.contains('lyteFixedColumn') ){
                            fixedSum+=width[i]
                        }
                    }
                    this._fixedSum=fixedSum;
                    var originalTable =this._originalTable || this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
                        originalTable.style.width=sum+"px";
                        this._fakeOriginalHeader.style.width=sum+"px"  

                    if( sthList ) {
                            for( var n = 0; n < sthList.length; n++ ){
                                if(sthList[ n ].classList.contains('lyteFixedColumn') ){
                                    fixedColumn.push( sthList[ n ] );
                                } 
                            }
                        }
                        sum=0;
                    for(var i=0;i<this._fixHeaderCount;++i){ // setting minWidth value for fixed Header and fake FixedHEader
                            var index=this.getIndex(fixedColumn[i])
                            sum+=width[index]
                            if(!this.getData('ltPropPreventWidth')){
                                _thList[i].style.width=width[index] +"px";
                                fthList[i].style.width=width[index] +"px";
                            }
                            
                    }
                    fDiv.style.width=sum+"px";
                    this._fixedDivWrap.style.width=fDiv.style.width

                    this._fHeader=fHeader;
                    this._fthList=fDiv.getElementsByClassName( 'lyteExpTableHeaderGroup' )[ 0 ];
                    this._setHeight=true
                    

                    if(this._fixHeaderCount==0){
                        fDiv.style.width = 0 + 'px';
                        delete this._setHeight
                        delete this._fHeader
                        delete this._fthList
                    }
                    
                }.bind( this ))
            }.bind( this ))
       }
    },
    // For Fixed Table
    setFixedTableWidth : function(){
                var tableHeader=this.getData('tableHeader'),fixedTableHeader=this.getData('fixedTableHeader');
                var sHeader=this._oHeader,thList=sHeader.getElementsByTagName( 'lyte-exptable-th' );
                var sthList=this._originalDiv.getElementsByTagName( 'lyte-exptable-th' );

                var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
                this._fixedDivWrap = this._fixedDivWrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];

                var ftrList=fDiv.getElementsByTagName( 'lyte-exptable-tr' ),fixedColumn=[],
                fHeader=this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' )[ 0 ],_thList=fHeader.getElementsByTagName( 'lyte-exptable-th' );
                var fthList=fDiv.getElementsByTagName( 'lyte-exptable-th' );
                if( sthList ) {
                        for( var n = 0; n < sthList.length; n++ ){
                            if(sthList[ n ].classList.contains('lyteFixedColumn') ){
                                fixedColumn.push( sthList[ n ] );
                            } 
                        }
                }
                var sum=0;
                for(var i=0;i<this._fixHeaderCount;++i){ // setting minWidth value for fixed Header and fake FixedHEader
                    var index=this.getIndex(fixedColumn[i])
                    sum += sthList[index].style.width ? parseInt(sthList[index].style.width) : sthList[index].getBoundingClientRect().width
                }
                    fDiv.style.width=sum+"px";
                    this._fixedDivWrap.style.width=fDiv.style.width

                    this._fHeader=fHeader;
                    this._fthList=fDiv.getElementsByClassName( 'lyteExpTableHeaderGroup' )[ 0 ];
                    this._setHeight=true
                

                if(this._fixHeaderCount==0){
                    fDiv.style.width = 0 + 'px';
                    delete this._setHeight
                    delete this._fHeader
                    delete this._fthList
                }
    },
    // fixHeaderHeightP : function(){
    //     var tableHeader=this.getData('tableHeader'),fixedTableHeader=this.getData('fixedTableHeader');
    //     var sHeader=this._oHeader,thList=sHeader.getElementsByTagName( 'lyte-exptable-th' );
    //     var sthList=this._originalDiv.getElementsByTagName( 'lyte-exptable-th' );
    //     var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],
    //     offset=[],minWidth=[],width=[],sum=0,fixedSum=0, rpx = /(\d*)px/i;
    //     var originalTable =this._originalTable || this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
    //     if( originalTable.style.width!="" && that.getData('ltPropPreventWidth')){
    //         this.setFixedTableWidth()
    //     }else {
    //         $L.fastdom.measure(function(){
    //             for(var i=0;i<thList.length;++i){ // setting minWidth value for fakeOriginalHEader
    //                 width[i] = sthList[i].style.width ? parseInt(sthList[i].style.width) : sthList[i].getBoundingClientRect().width;
    //             } 
    //          $L.fastdom.mutate(function(){
    //                 var tableHeader=this.getData('tableHeader'),fixedTableHeader=this.getData('fixedTableHeader');
    //                 var sHeader=this._oHeader,thList=sHeader.getElementsByTagName( 'lyte-exptable-th' );
    //                 var sthList=this._originalDiv.getElementsByTagName( 'lyte-exptable-th' );

    //                 var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
    //                 this._fixedDivWrap = this._fixedDivWrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];

    //                 var ftrList=fDiv.getElementsByTagName( 'lyte-exptable-tr' ),fixedColumn=[],
    //                 fHeader=this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' )[ 0 ],_thList=fHeader.getElementsByTagName( 'lyte-exptable-th' );
    //                 var fthList=fDiv.getElementsByTagName( 'lyte-exptable-th' );
                    
    //                 for(var i=0;i<thList.length;++i){ // setting minWidth value for fakeOriginalHEader
    //                     sum+=width[i];
    //                     if(sthList[ i ].classList.contains('lyteFixedColumn') ){
    //                         fixedSum+=width[i]
    //                     }
    //                 }
    //                 this._fixedSum=fixedSum;
    //                     originalTable.style.width=sum+"px";
    //                     this._fakeOriginalHeader.style.width=sum+"px"  

    //                 if( sthList ) {
    //                         for( var n = 0; n < sthList.length; n++ ){
    //                             if(sthList[ n ].classList.contains('lyteFixedColumn') ){
    //                                 fixedColumn.push( sthList[ n ] );
    //                             } 
    //                         }
    //                     }
    //                     sum=0;
    //                     for(var i=0;i<this._fixHeaderCount;++i){ // setting minWidth value for fixed Header and fake FixedHEader
    //                             var index=this.getIndex(fixedColumn[i])
    //                             sum+=width[index]
    //                     }
    //                     fDiv.style.width=sum+"px";
    //                     this._fixedDivWrap.style.width=fDiv.style.width

    //                     this._fHeader=fHeader;
    //                     this._fthList=fDiv.getElementsByClassName( 'lyteExpTableHeaderGroup' )[ 0 ];
    //                     this._setHeight=true
                    

    //                 if(this._fixHeaderCount==0){
    //                     fDiv.style.width = 0 + 'px';
    //                     delete this._setHeight
    //                     delete this._fHeader
    //                     delete this._fthList
    //                 }
                    
    //             }.bind( this ))
    //         }.bind( this ))
    //     }
    // },
    setFixTableRowHeight : function( row ) { //Fixing Row Height 
            var fDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
            var ftrList=fDiv.getElementsByTagName( 'lyte-exptable-tr' )
            var strList=this._originalDiv.getElementsByTagName('lyte-exptable-tr'),
            offsetsArray = [], that = this, rowIndex;
            var fHeader=this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' )[ 0 ]

            var fHeaderTr=fHeader.getElementsByTagName( 'lyte-exptable-tr' )[ 0 ]

            if( row && ( row.nodeType === 1 || !isNaN( row ) ) ) {
                if( row.nodeType === 1 ) {
                    rowIndex = Array.from( strList ).indexOf( row );
                }
                else {
                    rowIndex = row;
                }
                if(that.getMethods('beforeSetFixTableRowHeight'))
                    {
                        that.executeMethod('beforeSetFixTableRowHeight', that.$node);
                    }
                $L.fastdom.measure( function() {
                    debugger
                    if( !that.$node ) {
                        return ;
                    }

                    offsetsArray = strList[ rowIndex ].getBoundingClientRect().height + 'px';
                    strList[ rowIndex ]._relatedRow = ftrList[ rowIndex ];
                    ftrList[ rowIndex ]._relatedRow = strList[ rowIndex ];
                } );

                $L.fastdom.mutate( function() {
                    if( !that.$node ) {
                        return ;
                    }

                    ftrList[ rowIndex ].style.height = offsetsArray;
                } );
            }
            else {
                $L.fastdom.measure( function() {
                    if( !that.$node ) {
                        return ;
                    }

                    for( var i = 0; i < strList.length; i++ ) {
                        offsetsArray.push( strList[i].getBoundingClientRect().height + 'px' );
                        strList[ i ]._relatedRow = ftrList[ i ];
                        ftrList[ i ]._relatedRow = strList[ i ];
                    }  
                } );

                $L.fastdom.mutate( function() {
                    if( !that.$node ) {
                        return ;
                    }

                    for(var i = 0; i < strList.length; i++ ) {
                        ftrList[ i ].style.height = offsetsArray[ i ];
                    }
                    if(strList.length>0&& fHeaderTr){
                        fHeaderTr.style.height = offsetsArray[ 0 ]
                    }
                    if(that.getMethods('afterSetFixTableRowHeight'))
                    {
                        that.executeMethod('afterSetFixTableRowHeight', that.$node);
                    }
                } );   
            }
               
    },
    setFixTableColumnWidth : function( col ) { //Fixing Row Height 
            var fDiv= this._oHeader || this.$node.getElementsByClassName( 'lyteExpTableFakeColHeader' )[ 0 ]
            var fthList=fDiv.getElementsByTagName( 'lyte-exptable-th' )
            var sthList=this._originalDiv.getElementsByTagName('lyte-exptable-th'),
            offsetsArray = [], that = this, colIndex,width=0,sum=0,widthList;
            if(this._originalTable){
                this._originalTable = this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
            }
            this._originalTable.style.removeProperty('width');
            this._fakeOriginalHeader.style.removeProperty('width')
            if( col!=undefined && ( col.nodeType === 1 || !isNaN( col ) ) ) {
                if( col.nodeType === 1 ) {
                    colIndex = this.getIndex(col);
                }
                else {
                    colIndex = col;
                }
                $L.fastdom.mutate( function() {
                    if( !that.$node ) {
                        return ;
                    }
                    if(that._widthList){
                        sthList[colIndex].style.width=that._widthList[colIndex].width +"px";
                        fthList[colIndex].style.width=that._widthList[colIndex].width +"px";

                    }
                    if($L(sthList[colIndex]).hasClass('lyteFixedColumn')){
                        ofthList=that._originalDiv.getElementsByClassName('lyteFixedColumn')
                        fColIndex = Array.from( ofthList ).indexOf( sthList[colIndex] );
                        if(that._fixHeaderCount>=0){
                           var _colwrap = that._colwrap || that.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' ) [ 0 ];

                            fixothList = _colwrap.getElementsByTagName('lyte-exptable-th') ;
                            var w=fixothList[fColIndex].style.width  
                           fixothList[fColIndex].style.width = that._widthList[colIndex].width +"px";
                           _fcolwrap = that.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];
                           ffixothList = _fcolwrap.getElementsByTagName('lyte-exptable-th') ; 
                           ffixothList[fColIndex].style.width = that._widthList[colIndex].width +"px";
                           var width=parseInt(_colwrap.style.width) - (parseInt(w)-that._widthList[colIndex].width);
                            _colwrap.style.width = width+"px";
                            _fcolwrap.style.width = width+"px";
                        }
                    }
                    var width=that._originalTable.getBoundingClientRect().width
                    that._originalTable.style.width = width+"px";
                    that._fakeOriginalHeader.style.width = width+"px";
                } );
            }
            else{
                if( !that.$node ) {
                            return ;
                }
                // that.$node.classList.remove('tableLayoutFixed')
                if(that.getMethods('beforeSetFixTableColumnWidth'))
                {
                    that.executeMethod('beforeSetFixTableColumnWidth', that.$node);
                 }
                    // $L.fastdom.mutate( function() {
                        // if(that._widthList){
                        //     // widthList = that._widthList;
                        
                        //     // for(var i = 0; i < strList.length; i++ ) {
                        //     //     strList[ i ].style.width = widthList[i].width +"px";
                        //     // }
                        // }
                        if(!col){
                            that.fixHeaderHeight();
                            
                                $L.fastdom.measure( function() {
                                    $L.fastdom.mutate( function() {
                                        if(that.getMethods('afterSetFixTableColumnWidth'))
                                            {
                                                that.executeMethod('afterSetFixTableColumnWidth', that.$node);
                                            }
                                     });
                                });
                            }
                    // });
                }
                // $L.fastdom.mutate( function() {
                //     if( !that.$node ) {
                //         return ;
                //     }

                //     for(var i = 0; i < strList.length; i++ ) {
                //         strList[ i ].style.width = offsetsArray[ i ];
                //     }
                //     if(that._originalTable){
                //         that._originalTable.style.width=width+"px";
                //     }
                //     that.$node.classList.add('tableLayoutFixed')
                // } );   
            
               
    },
    setVisibleFixHeader : function(){ // To fix and unfix Columns
         var _fHeader=this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' )[ 0 ].getElementsByTagName( 'lyte-exptable-th' ),count=this._fixHeaderCount,
            originalHeader = this.$node.getElementsByClassName('lyteExpTableFakeColHeaderWrapper')[ 0 ].getElementsByClassName( 'lyteFixedColumn' ),
            fixedColDiv = this.$node;
            
            for(var i=0;i<_fHeader.length;i++){
                if(i+1<=count){
                    _fHeader[i].classList.remove('lyteFixHeaderDisplayNone')
                    _fHeader[ i ].style.width = originalHeader[ i ].style.width;
                }
                else{
                    _fHeader[i].classList.add('lyteFixHeaderDisplayNone')

                }
            }
            count=this._fixHeaderCount
            var trList=this.$node.getElementsByClassName( 'lyteExpTableFixedColTable' )[ 0 ].getElementsByTagName( 'lyte-exptable-tr' );
            // for(var i=0;i<trList.length;++i){
                for( var i = trList.length - 1; i >= 0; i-- ){
                var tdList=trList[i].getElementsByTagName( ( i == 0 ? 'lyte-exptable-th' : this.data.ltPropCellTag ) )
                for(var j=0;j<tdList.length;++j){
                    if(j+1<=count){
                        tdList[j].classList.remove('lyteFixHeaderDisplayNone')
                        // tdList[ j ].style.width = originalHeader[ j ].style.minWidth;
                    }
                    else if( j != 0 ){
                        tdList[j].classList.add('lyteFixHeaderDisplayNone')
                    }
                }
            }
            !this._elem && this.setFixTableRowHeight();

            if( count == 0 ){
                !fixedColDiv.classList.contains( 'lyteExpTableNoShadow' ) && fixedColDiv.classList.add( 'lyteExpTableNoShadow' );
            } else {
                fixedColDiv.classList.contains( 'lyteExpTableNoShadow' ) && fixedColDiv.classList.remove( 'lyteExpTableNoShadow' );
            }
        
    },

    callHeaderObs : function(){
        if(!this.getData('ltPropStickyTable')){
            this.setTableHeader();
            this._fixHeaderCount=0;
            this.setData('columns',[]);
            if(this.getData('ltPropHeader').length>=1){
                this.initProcess();
            }
            delete this._widthList;
            this._oHeader.parentNode.style.transform="translateX(0)"
        }else{
            this.setTableHeader()
            this.setLeftForInterSection(true)
        }
    },

    callContentObs : function(){
        if(!this.getData('ltPropStickyTable')){
            var preventCalculate = this.getData( 'ltPropPreventContentObserver' );

            delete this._widthList;

            if( !preventCalculate ) {
                this.setFixTableColumnWidth();
            }
            
            this.setFixTableRowHeight();

            if( !preventCalculate ) {
                this.setWidth();
            }
        }else{
            this.setWidth();
            this.setLeftForInterSection(true)
        }
        
    },


    /* Observes for Header,content,fixedTableScroll*/
    headerObs : function(){
        
         if( this._prevent ){
            return;     
            }
            this.callHeaderObs();
        

    }.observes('ltPropHeader.[]'),
    contentObs : function(){
        if(!this.getData('ltPropStickyTable')){
            if( this.data.ltPropPreventContentObserver ){
                return;
            }

            this.callContentObs();
        }

    }.observes('ltPropContent.[]'),
    HeightObs : function(){
        
            var height = this.getData('ltPropHeight') , scrollWidth = this._scrollWidth
            this.$node.style.height=this.getData('ltPropHeight')
            var div = this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]

            if(!this.getData('ltPropStickyTable')){
                this.setScrollWidth();
                $L.fastdom.measure( function() {
                    var scrollDiv=this._originalDiv,scrollTop= this._elem ? this.prevScollTop : ( scrollTop || scrollDiv.scrollTop ),scrollLeft = this._elem ? this._originalDiv._sL : (scrollLeft || scrollDiv.scrollLeft ),
                        scrollWidth = this._elem ? this._sw : scrollDiv.scrollWidth, offsetWidth = this._elem ? this._thisBccr.width : scrollDiv.offsetWidth,value
                    if( scrollWidth != undefined && scrollLeft != undefined && offsetWidth != undefined ){
                      value = this.returntrans( scrollLeft, offsetWidth, scrollWidth );
                    }
                    $L.fastdom.mutate( function() {
                        if( this._oHeader ){
                            this._oHeader.parentNode.style.transform="translateX("+ value +"px)";
                        }
                        
                       if( div && scrollDiv.offsetWidth != scrollDiv.scrollWidth ) {
                            div.style.height = 'calc(100% - '+this._scrollWidth+'px)'
                        }
                    }.bind(this))
                }.bind(this))
            }
    }.observes('ltPropHeight'),
    fixedTableScrollObs : function(){
        if(!this.getData('ltPropStickyTable')){
         var div=this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
        if(this.getData('ltPropFixedTableScroll')){
            // this._fixedScroll=this.fixedScroll.bind(this)
            // this._fixedWheel=this.fixedWheel.bind(this)
            // div.addEventListener('scroll',this._fixedScroll, true)
            // div.addEventListener('wheel',this._fixedWheel)
            div.style.overflow = '';
        }
        else{
            div.style.overflow = "hidden";
            // if(this._fixedScroll){
            //     div.removeEventListener('scroll',this._fixedScroll,true)
            // }
            // if(this._fixedWheel){
            //     div.removeEventListener('wheel',this._fixedWheel)
            // }
        }
    }
    }.observes('ltPropFixedTableScroll').on('didConnect'),

    /*Common Function*/
    // columnWidth : function(fixedColumn, i, j){
    //     var width = 0;
    //     if(!j)
    //         {
    //             j = 0
    //         }
    //     for(; j < i; j++)
    //         {
    //             width += fixedColumn[j].getBoundingClientRect().width;
    //         }
    //     return width;   
    // },
    getIndex : function(data){
        return Array.from( this._originalDiv.getElementsByTagName( 'lyte-exptable-th' ) ).indexOf( data );
    },
    getIndexFromFake : function(data){
        if(this._oHeader){
            return Array.from( this._oHeader.getElementsByTagName( 'lyte-exptable-th' ) ).indexOf( data );
        }
    },
    // transform : function( flag, elem, value ){

    //     var transform = ( elem.style.transform || 'translateX(0px) translateY(0px)' ),
    //     transX = parseFloat( /translateX\((.+)/.exec( transform )[ 1 ] ),
    //     transY = parseFloat( /translateY\((.+)/.exec( transform )[ 1 ] );
    //     if( value != undefined ){
    //         // if( flag ){
    //         //     elem.style.transform = "translateY(" + transY + 'px) ' + 'translateX(' + value + 'px)';
    //         // } else {
    //         //     elem.style.transform = "translateY(" + transY + 'px) ' + 'translateX(' + value + 'px)';
    //         // }
    //     } else {
    //         return parseFloat( flag ? transY : transX );
    //     }
    // },
   
    composePath : function(event){
        var arr = [], node = event.target.correspondingElement || event.target;
        while( node && node.tagName != 'HTML')
            {
                arr.push(node);
                node = node.parentNode;
            }
        return arr; 
    },
    rtlfunc : function( lft, bcr, ww ) {
        if( this._dir && lft != 'top' && lft != 'clientY' ) {
            if( bcr ) {
                if( lft == 'right' ) {
                    return ww - bcr.left;
                } else if( lft == 'clientX' ) {
                    return ww - bcr.clientX;
                }
                return ww - bcr.right;
            } else if( lft == 'left' ) {
                return 'right';
            } else if( lft == "right" ) {
                return "left";
            } 
        }
        return bcr ? bcr[ lft ] : lft;
    },
    getPreviousOffset : function(element) {
        while( element.previousElementSibling ) {
            var tmp = element.previousElementSibling
            var offset = tmp.getBoundingClientRect();
            if( tmp.width == 0 ){
                element = element.previousElementSibling;
            }
            else{
                return offset
            }
        }
        return 
    }, 
    
    scrollCheck : function(scrollTop,scrollLeft, ignore ){
        this._colwrap = this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' ) [ 0 ];
        this._oriwrap = this._oriwrap || this.$node.getElementsByClassName( 'lyteExpTableOrigTableInnerWrap' ) [ 0 ];
        this._tableWrp = this._tableWrp || this.$node.getElementsByClassName( 'lyteExpTableOrigTableWrapper' ) [ 0 ];
        this._fixedDivWrap = this._fixedDivWrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];

        var wrapfixed = this._colwrap.getElementsByClassName( 'lyteFixedColumn' ),
        originalFixed = this._oriwrap.getElementsByClassName( 'lyteFixedColumn' ) || [],
        wrapBcr = this._tableWrp.getBoundingClientRect(),
        wWidth = window.innerWidth

        if( scrollLeft != this._prevScrollLeft || ignore ) {
            var columns = this.getData( 'columns' ),
            tableHeader = this.getData( 'tableHeader' ),
            headRows = [],
            ltPropFixedColumnClass = this.data.ltPropFixedColumnClass || '',
            curWidth = 0;

            for( var i = 0; i < wrapfixed.length; i++ ){
                wrapfixed[ i ]._off = wrapfixed[ i ].getBoundingClientRect();
                originalFixed[ i ]._off = originalFixed[ i ].getBoundingClientRect();
            }

            for( var j = 0; j < columns.length; j++ ){
                curWidth += columns[ j ]._off.width;
            }

            var count = this._fixHeaderCount, now = [];

            var fDiv = this._colwrap;
            if( !this._fthList ){
                this._fthList= fDiv.getElementsByClassName( 'lyteExpTableHeaderGroup' ) [ 0 ];   
            }
            if( this._fthList ) {
                fDiv.scrollTop = scrollTop;
            }

            for( var i = columns.length; i < wrapfixed.length; i++ ){
                var current = originalFixed[ i ];

                if( this._elem ){
                    if( Array.apply( Array, current.parentNode.children ).indexOf( current ) == this._index ){
                        continue;
                    }
                }

                  if(current._off.width == 0 && i+1 < originalFixed.length && Math.round(this.rtlfunc( 'left', originalFixed[ i+1 ]._off, wWidth ) - this.rtlfunc( 'left', wrapBcr, wWidth )) < curWidth){
                    columns.push( wrapfixed[ i ] );
                    fDiv.style.width = ( parseFloat( fDiv.style.width )+ originalFixed[ i ]._off.width ) + 'px';
                    curWidth += originalFixed[ i ]._off.width;
                    this._fixHeaderCount++;
                    this.setVisibleFixHeader()
                    now.push( i );
                }
                else if( current._off.width != 0 && Math.round(this.rtlfunc( 'left', current._off, wWidth ) - this.rtlfunc( 'left', wrapBcr, wWidth )) < curWidth ){
                    columns.push( wrapfixed[ i ] );
                    fDiv.style.width = ( parseFloat( fDiv.style.width )+ originalFixed[ i ]._off.width ) + 'px';
                    curWidth += originalFixed[ i ]._off.width;
                    this._fixHeaderCount++;
                    this.setVisibleFixHeader()
                    now.push( i );

                } else{
                    break;
                } 

            }
            
            for( var n = columns.length - 1; n >= 0; n-- ){
                if( now.indexOf( n ) != -1 ){
                    continue;
                }
                if( columns[ n ]._off.width == 0 && n-1 >= 0 && this.rtlfunc( 'right', columns[ n-1 ]._off, wWidth ) <= this.rtlfunc( 'right', originalFixed[ n-1 ]._off, wWidth ) + ( this._isIE ? 2 : 0 ) ){
                    fDiv.style.width = ( parseFloat( fDiv.style.width ) - originalFixed[ n ]._off.width ) + 'px';
                    this._fixHeaderCount--;
                    this.setVisibleFixHeader()
                    Lyte.arrayUtils( columns, 'removeAt', n );
                }
                else if( columns[ n ]._off.width != 0 && this.rtlfunc( 'right', columns[ n ]._off, wWidth ) <= this.rtlfunc( 'right', originalFixed[ n ]._off, wWidth ) + ( this._isIE ? 2 : 0 ) ){

                
                    //     this.setForIEEdge( scrollLeft )
                    // } else {            
                        // this._oHeader.style.transform="translateX(" + ( this._isIE ? scrollLeft * ( this._dir ? 1 : -1 ) : ( this._dir ? this._startScrollLeft - scrollLeft : - scrollLeft ) ) + "px)";
                    // }
                    for( var k = columns.length - 1; k >= n; k-- ){
                         fDiv.style.width = ( parseFloat( fDiv.style.width ) - originalFixed[ k ]._off.width ) + 'px';
                        this._fixedDivWrap.style.width = fDiv.style.width
                        this._fixHeaderCount--;
                    
                        Lyte.arrayUtils( columns, 'removeAt', k );
                    }

                    this.setVisibleFixHeader()
                }
            }
        }
       this.prevScollTop=scrollTop;
       this._prevScrollLeft = scrollLeft;
       
    },
    hideTempHeader : function(flag){
        $L.fastdom.measure( function() {
            var div= this._colwrap || this.$node.getElementsByClassName('lyteExpTableFixedColWrapper')[0],
            scrollTop1 = div.scrollTop,
            scrollTop=this._originalDiv.scrollTop

            $L.fastdom.mutate( function() {
                 if(this.getData('ltPropFixedTableScroll')){
                   if(flag){
                        div.scrollTop = scrollTop
                    }
                    else{
                        this._originalDiv.scrollTop = scrollTop1
                    }
                }
            }.bind( this ) );
        }.bind( this ) );
        
       
        // $L.fastdom.mutate(function(){
            // if(this._fthList){
           
            //  this._fthList.style.transform="translateY("+(scrollTop)+"px)"
            // }
            // this._othead.style.transform="translateY("+(scrollTop)+"px)"
        // }.bind(this))   
        clearTimeout(this._scrollY)
        delete this._scrollY
    },
    scrollF : function(scrollTop,scrollLeft, ignore){
        this.scrollCheck(scrollTop,scrollLeft, ignore );
        // this.fixHeaderHeight();
    },
    verticalScroll : function(scrollLeft,flag){
           
            // if(this.getData('ltPropFixedTableScroll')){
            //     if(flag){
            //         var div=this.$node.querySelector('.lyteExpTableFixedColWrapper')
            //         div.scrollTop=this._originalDiv.scrollTop
            //     }
            //     else{
            //         var div=this.$node.querySelector('.lyteExpTableFixedColWrapper')
            //         this._originalDiv.scrollTop=div.scrollTop
            //     }
            // }
            // else{
            //     $L.fastdom.mutate(function(){
            //         var div=this.$node.querySelector('.lyteExpTableFixedColTable'),scrollTop=this._originalDiv.scrollTop
            //         div.style.transform="translateY(-"+scrollTop+"px)"
            //     }.bind(this))

            // }
            // if(!this._scrollY){
            //     $L.fastdom.mutate( function(){
            //         // if(this._fthList){
            //         //     this._fthList.style.transform="translateY("+(0)+"px)"
            //         // }
            //         // this._othead.style.transform="translateY("+(0)+"px)"
            //         this._oHeader.style.transform="translateX("+scrollLeft+"px)"
            //     }.bind(this))
                
            // }
            clearTimeout(this._scrollY)
            // this.hideTempHeader=this.hideTempHeader.bind(this,flag)
            // this._scrollY = setTimeout(this.hideTempHeader,200 )
            this._scrollY = setTimeout( this.hideTempHeader.bind( this, flag ), 200 )
           
    },
    
    /*Fixed Scroll*/
    fixedScroll : function(event){
        if(this.getData('ltPropStickyTable')){
            return
        }
            if(this._parentScroll){
                delete this._parentScroll
                return
            }

            var scrollDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],scrollTop=scrollDiv.scrollTop,scrollLeft=this._originalDiv.scrollLeft

            if((scrollTop!=this.prevScollTop)){
                if(this.getData('ltPropFixedTableScroll')){
                     var div=this._originalDiv
                    div.scrollTop=scrollTop
                    // this._fthList.style.transform="translateY("+(0)+"px)"
                    // this._othead.style.transform="translateY("+(0)+"px)"

                }
                scrollLeft=this._dir?this._startScrollLeft-scrollLeft: -scrollLeft
                // this.verticalScroll(event,scrollLeft)
                this.prevScollTop=scrollTop
                clearTimeout(this._fixedscrollY)
                this.setTranslate=this.setTranslate.bind(this)
                this._fixedscrollY = setTimeout(this.setTranslate,200 )
            }

            
    },
    setTranslate : function(){
        var scrollTop=this._originalDiv.scrollTop
        // $L.fastdom.mutate(function(){
            // if(this._fthList){
           
            //  this._fthList.style.transform = "translateY("+(scrollTop)+"px)"
            // }
            // this._othead.style.transform="translateY("+(scrollTop)+"px)"
        // }.bind(this))   
        clearTimeout(this._fixedscrollY)
        delete this._fixedscrollY
    },
    // fixedWheel : function(event){
           
    //        var scrollDiv= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],scrollLeft=scrollDiv.scrollLeft,scrollTop=scrollDiv.scrollTop,
    //        ret = this.getWheel( event );
    //        if( Math.abs( ret[ 0 ] ) > Math.abs( ret[ 1 ] ) ){
    //               this._originalDiv.scrollLeft += ret[ 0 ];
    //               event.preventDefault();  
    //        }
           
    // },
    minWidth : function(resizeComponent, arg){
        // for find original min width of a cell its width is set to its minumum width and width calculated 
        var minWidth = window.getComputedStyle(resizeComponent, null).getPropertyValue('min-width'),
        width  = resizeComponent.style.width
        resizeComponent.style.width = minWidth == '0px' ? '50px' : minWidth;
        minWidth = resizeComponent.offsetWidth + 'px'
        resizeComponent.style.width = width
        this.setData(arg, minWidth)     
    },
    arrayFrom : function(nodeList){
        var arrayList = [];
        for(var i = 0; i < nodeList.length; i++)
            {
                arrayList.push(nodeList[i]);
            }
        return arrayList.slice();   
     },

    closestFind : function(path, query){
            var elements = this.arrayFrom.call(this, document.querySelectorAll(query));
            for(var i = 0; i < path.length; i++)
                {
                    if( Array.prototype.indexOf.call( elements, path[ i ] ) != -1 ) {
                        return path[ i ];
                    }
                }
            return null;    
        },
     elementsFromPointCal : function(x, y){
        var arr = [], element = document.elementFromPoint(x, y);
        while(element != document && element != document.documentElement && element != document.body && element != this.$node)
            {
                element.style.pointerEvents = 'none';
                arr.push(element);
                element = document.elementFromPoint(x, y);
            }
        for(var i = 0; i < arr.length; i++)
            {
                arr[i].style.pointerEvents = 'initial';
            }
        return arr;     
    },
    setLeftDuringResize : function(offset,resizeComponent){
        var trList = this._originalTable.getElementsByTagName('lyte-exptable-tr'),
        index = this.getIndex( resizeComponent )

        if( resizeComponent.classList.contains('lyteFixedColumn') ){

            var __this = this,
            __fn = function( item ){
                var $item = $L( item );
                if( $item.hasClass( 'lyteFixedColumn' ) ){
                    $item.css( 'left', ( parseFloat( item.style.left ) + offset ) + 'px' );
                }
            },
            tag = "lyte-exptable-th";

            Array.from( trList ).forEach( function( row, __index ){
                if( __index ){
                    tag = __this.data.ltPropCellTag;
                }

                var __count = 0;

                Array.from( row.getElementsByTagName( tag ) ).forEach( function( cell ){    
                    if( __count > index ){
                        __fn( cell );
                    }

                    __count += ( cell.colSpan || 1 );
                });
            });


            // for( var i = 0 ; i < trList.length; i++ ) {
            //     if( i == 0 ){
            //         var thList = trList[ i ].getElementsByTagName('lyte-exptable-th') 
            //         for( var j=index+1 ; j<thList.length ;j++){
            //             if( thList[ j ].classList.contains( 'lyteFixedColumn' ) ){
            //                 thList[ j ].style.left = parseInt( thList[ j ].style.left ) + offset +"px"
            //             }
            //         }
            //     }
            //     else{
            //         var tdList = trList[ i ].getElementsByTagName( this.data.ltPropCellTag );
            //          for( var j=index+1 ; j<tdList.length;j++){
            //             if( tdList[j].classList.contains('lyteFixedColumn') ){
            //                 tdList[j].style.left = parseInt(tdList[j].style.left) + offset +"px"
            //             }
            //         }
            //     }
               
            // }
        }
    },
 
    resizeFunc : function ( event ){
        var isTch = event.type == 'touchmove',
        evt = event;

        if( isTch && event.touches.length != 1 ){
            return;
        } else if( isTch ){
            evt = evt.touches[ 0 ];
        }

        var _this = document.Component,
        ww = window.innerWidth,
        resize = _this.resizeComponent,
        cx = _this.rtlfunc( 'clientX', evt, ww ),
        offset = cx - resize.offLeft,
        width = parseFloat( resize.style.width ),
        oriResize = _this._originalResizeHead,
        scrollLeft = _this._originalDiv.scrollLeft,
        tableWidth = _this.$node.getBoundingClientRect().width,
        j = 0, fakeIndex = -1,
        fixHeader, fakeFixHeader;

        if( !_this._isResizeMoved ){
            _this.hideRows( _this._thisBccr );
            _this._isResizeMoved = true;
        }
        if( !_this.data.ltPropStickyTable ){
            if( $L( oriResize ).hasClass( 'lyteFixedColumn' ) ){
                var index = _this.getIndex( oriResize ),
                sthList = _this._originalDiv.getElementsByTagName( 'lyte-exptable-th' ),
                fDiv = _this._colwrap || _this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ],
                fthList = fDiv.getElementsByTagName( 'lyte-exptable-th' ),
                len = sthList.length;

                _this._fixedDivWrap = _this._fixedDivWrap || _this.$node.getElementsByClassName( 'lyteExpTableFixedColHeader' ) [ 0 ];

                for( var i = 0 ; i < len ; i++ ){ // setting minWidth value for fakeOriginalHEader /* written by vidhya */

                    var current = sthList[ i ],
                    jobj = $L( current );

                    if( jobj.hasClass( 'lyteFixedColumn' ) ){
                        if( current == oriResize ){
                            fakeIndex = j;
                            fixHeader = fthList[ j ];
                            fakeFixHeader = _this._fixedDivWrap.getElementsByClassName( 'lyteFixedColumn' )[ j ];
                        } else {
                            j++;
                        }
                    }
                }
            }
        }

        if( resize.tagName == 'LYTE-EXPTABLE-TH' && offset ){
            var finalWidth = offset + width,
            // tableWidth = _this.data.tableWidth,
            currTableWidth,
            jobj = $L( resize ),
            fixed = !fixHeader || $L( fixHeader ).hasClass( 'lyteFixHeaderDisplayNone' ),
            isFixed = jobj.hasClass( 'lyteFixedColumn' ),
            minWidth1 = Math.ceil( parseFloat( _this.getData( 'minWidth1' ) ) ),
            minWidth2 = Math.ceil( parseFloat( _this.getData( 'minWidth2' ) ) );

            if( _this._originalTable ){
                currTableWidth = ( _this._originalTable.style.width ? parseFloat( _this._originalTable.style.width ) : _this._originalTable.getBoundingClientRect().width ) + offset;
            }
            if( (!_this._dir && offset<0 && event.clientX-resize.getBoundingClientRect().left < minWidth1 )||(_this._dir && resize.getBoundingClientRect().right-event.clientX <minWidth1)){
                return;
            }
            if( fixed && ( ( ( isFixed && ( _this._fixedSum + offset < tableWidth - 100 ) ) || !isFixed ) && finalWidth >= minWidth1 ) ){
                if( _this.oriTab ){
                    _this.oriTab.style.width = ( parseFloat( _this.oriTab.style.width ) + offset ) + 'px';
                }

                jobj.css( 'width', finalWidth + 'px' );

                if( _this.data.ltPropStickyTable ){
                    _this.setLeftDuringResize( offset, resize );
                }

                if( isFixed ){
                    _this._fixedSum += offset;
                }

                if( _this._dir ){
                    var ua = navigator.userAgent.toLowerCase(),
                    isChromium = !!window.chrome,
                    vendor = navigator.vendor,
                    isOpera = !!window.opr,
                    isIEedge = /edge/i.test( ua );

                    // if( /chrome/i.test( ua ) && isChromium && vendor == 'Google Inc.' && isOpera == false && isIEedge == false ){
                    //     _this._startScrollLeft += offset;

                    //     if( offset < 0 && ( _this._startScrollLeft - scrollLeft + _this._scrollWidth ) > _this._resizeScrollLeft ){
                    //         _this._oHeader.parentNode.style.transform = "translateX("+ ( _this._isIE ? scrollLeft * ( _this._dir ? 1 : -1 ) : ( _this._startScrollLeft - scrollLeft + _this._scrollWidth ) ) +"px)";
                    //     }
                    // }
                }

                $L( _this._originalTable ).css( 'width', currTableWidth );

                if( _this._fakeOriginalHeader ){
                    $L( _this._fakeOriginalHeader ).css( 'width', ( parseFloat( _this._fakeOriginalHeader.style.width || _this._originalTable.getBoundingClientRect().width ) + offset ) + 'px' );
                }

                $L( oriResize ).css( 'width', finalWidth );

                // if( fakeIndex != -1 ){
                //     $L( fixHeader ).css( 'width', finalWidth )
                // }

                if( fakeIndex != -1 ){
                    if( fixHeader ){
                        $L( fixHeader ).css( 'width', finalWidth );
                    }
                    if( fakeFixHeader ){
                        $L( fakeFixHeader ).css( 'width', finalWidth );
                    }
                }
            }
            if( cx > Math.max( _this.rtlfunc('left',_this._thisBccr, ww ), 0 )  && cx <  Math.min( _this.rtlfunc('right',_this._thisBccr, ww ), ww ) ){
                window.cancelAnimationFrame( _this._reqId );
                delete _this._reqId;
            }
            resize.offLeft = cx;
            if( oriResize ){
                oriResize.offLeft = cx;
            }
        }
        _this.horiScrollResize( evt, ww );
            
        event.preventDefault(); 
        event.stopPropagation();
    },
    mouseup : function(event){
        var isTch = event.type == 'touchend',component = document.Component, resizeComponent = component.resizeComponent,
        isMoved = false;
        delete document.Component; delete component.oriTab;

         if( component._resizeMeasure ){
            $L.fastdom.clear( component._resizeMeasure );
            delete component._resizeMeasure;
        }

        document.removeEventListener( isTch ? 'touchend' : 'mouseup' , component.mouseup);
        document.removeEventListener( isTch ? 'touchmove' : 'mousemove' , component.resizeFunc);
        // $L.fastdom.mutate( function(){
            resizeComponent.classList.remove( 'resizeSelect' )
            component.$node.classList.remove( 'lyteExpTableResizing' )
            // document.removeEventListener( isTch ? 'touchend' : 'mouseup' , component.mouseup)
            // document.removeEventListener( isTch ? 'touchmove' : 'mousemove' , component.resizeFunc)

            if( component._isResizeMoved ){
                $L( '.lyteExpTableHide', component.$node ).removeClass( 'lyteExpTableHide' );
                $L( 'lyte-exptable-tr.notModified', component.$node ).css( 'transform', '' ).removeClass( 'notModified' );
                delete component._isResizeMoved;
                if( !component.getData('ltPropStickyTable') ){
                    component.setFixTableRowHeight()
                }
                component._originalDiv.scrollTop = component._scrolltoMaintain;
                if(component._scrollLeftToSet){
                    component._originalDiv.scrollLeft = component._scrollLeftToSet;
                }
                isMoved = true;
            }
            if( component._tlayout != undefined ){
                var innTab = component.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
                innTab.style.tableLayout = component._tlayout;
                innTab.style.maxWidth = '';
                innTab.style.maxHeight = '';
                delete component._tlayout;
            }

            delete component._scrolltoMaintain; delete component._cellshidden; delete component._preventscroll;
            delete component._scrollLeftToSet;
            // $L.fastdom.mutate( function(){
                // component._originalDiv.scrollTop = component._scrolltoMaintain;

                // delete component._scrolltoMaintain; delete component._cellshidden;
                // component.fixHeaderHeight()
                if( component.getData( 'ltPropStickyTable' ) ){
                    component.setLeftForInterSection()
                }
                delete document.Component; delete component.oriTab; delete component._thisBccr;delete component._originalResizeHead;
                if( component.getMethods( 'onResizeEnd' ) ) {
                    // $L.fastdom.mutate( function(){
                        component.executeMethod( 'onResizeEnd', resizeComponent, component.$node )
                    // } )
                }
            // })
        window.cancelAnimationFrame( component._reqId );
        delete component._reqId;
        event.stopPropagation()
    },
    horiScrollResize : function( dummyDiv, ww ){
        var lt = this.rtlfunc.call( this, 'left' ), IE = this.isIE11Lyte || this.isEdgeLyte,
        isEvt, check1, check2;
        if( /mousemove|touchmove/i.test( dummyDiv.type ) ){
            isEvt = true;
        }
        if( isEvt ){
            if( this._reqId ){
                return;
            }
            check1 = this.rtlfunc.call( this, 'clientX', dummyDiv, ww ) > Math.min( this.rtlfunc.call( this, 'right', this._thisBccr, ww ), ww - 2 );
            check2 = this.rtlfunc.call( this, 'clientX', dummyDiv, ww ) <= Math.max( 0, this.rtlfunc( 'left', this._thisBccr, innerWidth ) );
        } else {
            check1 = ( parseFloat( dummyDiv.style[ lt ] ) - this._xxoff + parseFloat( dummyDiv.style.width ) ) >= this.rtlfunc( 'right', this._thisBccr, ww ) - 1;
            check2 = ( parseFloat( dummyDiv.style[ lt ] ) - this._xxoff + parseFloat( dummyDiv.style.width ) ) >= this.rtlfunc( 'right', this._thisBccr, ww ) - 1;
        }

        if( check1 /*&& ( !this.getData('ltPropStickyTable') || ( this.getData('ltPropStickyTable') && !this.resizeComponent.classList.contains('lyteTableFixed') ) )*/)  {
            this._originalDiv.scrollLeft += 2 * ( this._dir ? ( -1 * ( IE ? -1 : 1 ) ) : 1 )
            if( isEvt ){
                this.resizeComponent.offLeft -= 2;
                if(this._originalResizeHead){
                    this._originalResizeHead.offLeft -= 2;
                }
            }
            this._reqId = window.requestAnimationFrame( function(){
                delete this._reqId;
                delete this._scrollLeftToSet
                this.horiScrollResize( dummyDiv, ww )

                if( this._cellshidden ){
                    delete this._cellshidden;
                    window.requestAnimationFrame( function(){
                        this.$node && $L( 'lyte-exptable-tr.notModified .lyteExpTableHide', this.$node ).removeClass( 'lyteExpTableHide' );
                    }.bind( this ) )
                }

            }.bind( this ) )
        } else if( check2/* ( !this.getData('ltPropStickyTable') || ( this.getData('ltPropStickyTable') && !this.resizeComponent.classList.contains('lyteTableFixed') ) )*/ ) {
            if( isEvt ){
                this.resizeComponent.offLeft += 2;
                if(this._originalResizeHead){
                    this._originalResizeHead.offLeft += 2;
                }

            }
            this._originalDiv.scrollLeft -= 2 * ( this._dir ? ( -1 * ( IE ? -1 : 1 ) ) : 1 )
            this._reqId = window.requestAnimationFrame( function(){
                delete this._reqId;
                delete this._scrollLeftToSet
                this.horiScrollResize( dummyDiv, ww );
            }.bind( this ) )
        } else {
            window.cancelAnimationFrame( this._reqId );
            delete this._prevent;
        }
    },

    setWidthForOriginalHeader : function(){
            this._originalTable = this._originalTable || this.$node.getElementsByClassName('lyteExpOriginalTable')[ 0 ]
            var thList = Array.from( this._originalTable.getElementsByTagName('lyte-exptable-th') ),
            arr = [];

            thList.forEach( function( item ){
                arr.push( item.getBoundingClientRect().width + 'px' );
            } )

            thList.forEach( function( item, index ){
                item.style.width = arr[ index ];
            } )

            // for( var i = 0 ; i < thList.length ; i++ ){
            //     thList[i].style.width = thList[i].getBoundingClientRect().width + 'px'
            // }
        },
    actions :{
        scroll : function(event,scrollLeft,scrollTop, ignore ){
            if(this.getData('ltPropStickyTable')){
                // if( this._FF ){
                //     clearTimeout( this._scrollpointer );
                //     this.$node.classList.add( 'lyteExpScrollPointer' );
                //     this._scrollpointer = setTimeout( function(){
                //         this.$node.classList.remove( 'lyteExpScrollPointer' );
                //     }.bind( this ), 150 ); 
                // }
                this.stickyScroll(event)
                return
            }
         
            if( ( this._elem && event && event.type == 'scroll' ) || this._preventscroll ){
                return;
            }
            delete this._scrolled; 

            // if(this._scrolltriggered){
            //     delete this._scrolltriggered
            //     return;
            // }
            // $L.fastdom.measure( function(){
               var scrollDiv=this._originalDiv,scrollTop= this._elem ? this.prevScollTop : ( scrollTop || scrollDiv.scrollTop ),scrollLeft = this._elem ? this._originalDiv._sL : (scrollLeft || scrollDiv.scrollLeft ),
               scrollWidth = this._elem ? this._sw : scrollDiv.scrollWidth, offsetWidth = this._elem ? this._thisBccr.width : scrollDiv.offsetWidth;
               
                if((scrollTop!=this.prevScollTop) || ( ignore && !this._elem ) ){
                    $L.fastdom.mutate(function(){
                        if(this.getData('ltPropFixedTableScroll')){
                            var div= this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ]
                            div.scrollTop=scrollTop
                        }
                     }.bind(this))
                    // scrollLeft=this._dir?this._startScrollLeft-scrollLeft: -scrollLeft
                    this.verticalScroll(scrollLeft,true)
                    this.prevScollTop=scrollTop
                    this._parentScroll=true;
                }
                 if( scrollLeft!=this._prevScollLeft || ignore ){
                    this.scrollF(scrollTop,scrollLeft, ignore );
                    this._prevScollLeft=scrollLeft;
                    var value = this.returntrans( scrollLeft, offsetWidth, scrollWidth );
                    
                    if( this._elem ){
                        if(!this.getData('ltPropPreventWidth')){
                            this._FF && this.fixHeaderHeight();
                        }
                        else{
                            this.setFixedTableWidth()
                        }
                    } else {
                        if(!this.getData('ltPropPreventWidth')){
                            this.fixHeaderHeight();
                        }
                        else{
                            this.setFixedTableWidth()
                        }
                    
                    }
                    $L.fastdom.mutate(function(){
                       this._oHeader.parentNode.style.transform="translateX("+ value +"px)";
                    }.bind(this))
                    // event.preventDefault();
                }
            // }.bind( this ) )
            
        },
        
        tableResize : function( event ){
                var isTch = event.type == 'touchstart',
                evt = event;

                if( this._resizeMeasure ){  
                    return; 
                }

                if( isTch ){
                    if( evt.touches.length > 1 ) {
                        return;
                    }
                    evt = evt.touches[ 0 ];
                }

                var cell = evt.target.parentNode,
                // prevSibling = cell.previousElementSibling,
                // next = cell.nextElementSibling,
                wwidth = window.innerWidth
                // bcr = resizeComponent.getBoundingClientRect(),
                // nbcr = next ? next.getBoundingClientRect() : {},
                if( !this.getData('ltPropStickyTable') ){
                    fakeOriginalHeader = this._oHeader.getElementsByTagName( 'lyte-exptable-th' );
                    index = this.getIndexFromFake( cell )
                    nextIndex = this.getIndexFromFake( cell.nextElementSibling )
                }
                else{
                    index = this.getIndex( cell )
                    nextIndex = this.getIndex( cell.nextElementSibling )
                }
                var originalheaderList = this._originalDiv.getElementsByTagName( 'lyte-exptable-th' ),
                fakeOriginalHeader,
                arr = [],
                tabWid,
                dummyWid,
                innTab = this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ],
                index,nextIndex,
                maxWidth = innTab.style.maxWidth,
                maxHeight = innTab.style.maxHeight,
                resizeComponent = originalheaderList[ index ],
                next = originalheaderList[ nextIndex ],
                bcr = cell.getBoundingClientRect(),
                nextBcr = next ? next.getBoundingClientRect() : {},
                table = $L( resizeComponent ).closest( 'lyte-exptable' ).get( 0 ),
                isFixed = window.getComputedStyle( table ).tableLayout == 'fixed',
                style1 = window.getComputedStyle( resizeComponent ),
                style2 = next ? window.getComputedStyle( next ) : {},
                sL = this._originalDiv.scrollLeft,
                innTableWidth = this.getData('ltPropStickyTable') && innTab.style.width == "" ? innTab.getBoundingClientRect().width : void 0;
                
                if( index >= 0 ){
                    this._originalResizeHead = originalheaderList[ index ];
                }
                if( nextIndex >= 0 ){
                    this._originalNextResize = originalheaderList[ nextIndex ];
                }

                document.Component = this;
                this.resizeComponent = cell;
                this.targetElem = evt.target;

                this._preventscroll = true;

                this._thisBccr = this.$node.getBoundingClientRect();

                if( this.getMethods( 'onResizeSelect' ) ){
                    this.executeMethod( 'onResizeSelect', cell, event, this.$node );
                }

                if( this.getData('ltPropStickyTable') && resizeComponent.style.width =="" ){
                    this.setWidthForOriginalHeader()
                }
                if( innTableWidth ){
                    innTab.style.width = innTableWidth + "px";
                }

                var /*visible = this.hideRows( this._thisBccr ),*/
                layout = innTab.style.tableLayout;

                cell.offLeft = bcr.width + this.rtlfunc.call( this, 'left', bcr, wwidth )
                cell.offTop = evt.clientY;

                this._tlayout = layout;

                innTab.style.tableLayout = 'auto'
                innTab.style.maxWidth = 0;
                innTab.style.maxHeight = 0;

                this._resizeMeasure = $L.fastdom.measure( function(){
                    var minWidth1 = resizeComponent.getBoundingClientRect(),
                    minWidth2 = next ? next.getBoundingClientRect() : { width : Infinity };
                    // cellsToHide = this.cellsToHide( visible, this._thisBccr, minWidth1.width, bcr.width, wwidth );
                    delete this._resizeMeasure;

                    $L.fastdom.mutate( function(){
                        cell.classList.add( 'resizeSelect' );
                        this.$node.classList.add( 'lyteExpTableResizing' );
                        this.data.minWidth1 = Math.min( minWidth1.width, bcr.width );
                        this.data.minWidth2 = Math.min( minWidth2.width, nextBcr.width || 0 );

                        if( isFixed ){
                            var min1 = ( style1.minWidth || '' ).indexOf( 'px' ) != -1 ? parseFloat( style1.minWidth ) : NaN,
                            min2 = ( style2.minWidth || '' ).indexOf( 'px' ) != -1 ? parseFloat( style2.minWidth ) : NaN;

                            if( !isNaN( min1 ) ){
                                if( isFixed ){
                                    this.data.minWidth1 = min1;
                                } else {
                                    this.data.minWidth1 = Math.max( this.data.minWidth1, min1 );
                                }
                            }

                            if( !isNaN( min2 ) ){
                                if( isFixed ){
                                    this.data.minWidth2 = min2;
                                } else {
                                    this.data.minWidth2 = Math.max( this.data.minWidth2, min2 );
                                }
                            }
                        }

                        innTab.style.maxWidth = maxWidth;
                        innTab.style.maxHeight = maxHeight;

                        // cellsToHide.forEach(function(item){
                        //     item.classList.add('lyteExpTableHide');
                        // })

                        // this._cellshidden = true;

                        innTab.style.tableLayout = layout;
                        document.addEventListener( isTch ? 'touchmove' : 'mousemove' ,this.resizeFunc )

                        delete this._preventscroll; delete this._tlayout;

                        this._originalDiv.scrollLeft = sL;

                    }, this)

                }, this )

                document.addEventListener( isTch ? 'touchend' : 'mouseup' ,this.mouseup );

                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
        },

        fixedColScroll : function( evt ){
            this.fixedScroll( evt );
            return false;
        },

        fixedColWheel : function( evt ){
            var isTch = evt.type == 'touchmove';
            if( isTch && evt.touches.length > 1 ){
                return;
            }
            var value = isTch ? this.getTouch( evt.touches[ 0 ] ) : this.getWheel( evt );
            if( value ){
                var div = this._originalDiv,
                scrollLeft = div.scrollLeft,
                scrollWidth = div.scrollWidth,
                offsetWidth = div.clientWidth;

                value = this.toPrevent( scrollLeft, scrollWidth, offsetWidth, value );

                if( value ){
                    div.scrollLeft = scrollLeft + value;
                    evt.preventDefault();
                }
            }
            return false;
        }
    },

    toPrevent : function( scrollLeft, scrollWidth, offsetWidth, value ){
        var max = scrollWidth - offsetWidth,
        min = 0,
        newValue = scrollLeft + value;
        if( this._dir ){
            if( this._FF || ( this._isSafari && !this._chrome ) ){
                max = 0;
                min = offsetWidth - scrollWidth;
            }
        } 

        value = Math.max( Math.min( max, newValue ), min ) - scrollLeft;
        return value;
    },

    getTouch : function( evt ){
        if( !this._touchend ){
            this._touchend = this.touchend.bind( this );
            document.addEventListener( 'touchend', this._touchend, true );
        }

        var clientX = evt.clientX, 
        clientY = evt.clientY,
        prevX = this._prevTouchX == undefined ? clientX : this._prevTouchX,
        prevY = this._prevTouchY == undefined ? clientY : this._prevTouchY,
        x = prevX - clientX,
        y = prevY - clientY;

        this._prevTouchX = clientX;
        this._prevTouchY = clientY;

        if( Math.abs( x ) >= Math.abs( y ) ){
            return x;
        }
    },

    touchend : function(){
        document.removeEventListener( 'touchend', this._touchend, true );
        delete this._touchend;
        delete this._prevTouchX;
        delete this._prevTouchY;
    },

    getWheel : function( evt ){
        var delta = evt.deltaMode && evt.deltaMode == 1,
        x = 0,
        fact = 1;

        if( Math.abs( evt.deltaX || 0 ) >= Math.abs( evt.deltaY || 0 ) ) {
           x = delta ? ( evt.deltaX * 6 ) :  evt.deltaX
           if( /edge|trident|msie/i.test(  navigator.userAgent ) && this._dir ){
              fact = -1;
           }
           return x * fact;
        }
   },

    // getCellBcrs : function( visible ){
    //     var arr = [];
    //     visible.forEach( function( row ){
    //         var cells = Array.from( row.children );
    //         cells.forEach( function( td ){
    //             var bcr = td.getBoundingClientRect()
    //             arr.push( { cell : td, bcr : bcr } );
    //         })
    //     } )
    //     return arr;
    // },

    // cellsToHide : function( visible, bcr, minwidth, currentWidth, wwidth ){
    //     var width = Math.min( this.rtlfunc( 'right', bcr, wwidth ), wwidth ) + currentWidth - minwidth + 20,
    //     arr = [];

    //     visible.forEach( function( item ){
    //         var _bcr = item.bcr, 
    //         cell = item.cell;
            
    //         if( this.rtlfunc( 'left', _bcr, wwidth ) > width ){
    //             arr.push( cell );
    //         }
    //     }.bind( this ) )

    //     return arr;
    // },
    hideRows : function( bcr ){
        // return;
        var fakerows,
        originalRows = Array.from( this._originalDiv.getElementsByTagName( 'lyte-exptable-tr' ) ),
        topRows = [],
        scrolltoMaintain = this._originalDiv.scrollTop,
        scrollToSet = 0,
        tValue = Math.max( bcr.top + originalRows[ 0 ].getBoundingClientRect().height , -10 ),
        bValue = Math.min( window.innerHeight + 10, bcr.bottom ),
        visible = [],
        remain,
        toReturn,
        isSticky = this.getData( 'ltPropStickyTable' );

        this._scrollLeftToSet = this._originalDiv.scrollLeft;

        if( !isSticky ){
             fakerows = Array.from( ( this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ] ).getElementsByTagName( 'lyte-exptable-tr' ) )
        }
        for( var i = 1; i < originalRows.length; i++ ){
            var row = originalRows[ i ],
            _bcr = row.getBoundingClientRect();
            if( _bcr.bottom < tValue ){
                topRows.push( row );
                if( !isSticky ){
                    topRows.push( fakerows[ i ] );
                }
                scrollToSet += _bcr.height;
                // lastBcr = _bcr;
            } else if( _bcr.top > bValue ){
                Lyte.arrayUtils( visible, 'push', originalRows.slice( i, i + 10 ) );
                Lyte.arrayUtils( topRows, 'push', originalRows.splice( i + 10 ) );
                if( !isSticky ){
                    Lyte.arrayUtils( visible, 'push', fakerows.slice( i, i + 10 ) );
                    Lyte.arrayUtils( topRows, 'push', fakerows.splice( i + 10 ) );
                }
                break;
            } else {
                visible.push( row );
                if( !isSticky ){
                    visible.push( fakerows[ i ] );
                }
            }
        }

        
        toReturn = /*this.getCellBcrs( visible ) ||*/ [] ;
        remain = scrolltoMaintain - scrollToSet;

        this._originalDiv.scrollTop = 0;

        topRows.forEach( function( item ){
           item.classList.add( 'lyteExpTableHide' );
        } );

        visible.forEach( function( item ){
            item.classList.add( 'notModified' );
            item.style.transform = 'translateY(-' + remain + 'px)';
        })

        this._scrolltoMaintain = scrolltoMaintain;

        return toReturn;
    },

    returntrans : function( scrollLeft, offsetWidth, scrollWidth ){
        var value;
        if( this._isIE ){
            value = scrollLeft * ( this._dir ? 1 : -1 );
        } else {
            if( this._dir ){
                if( this._chrome && !this._isNegative ){
                    value = scrollWidth - offsetWidth - scrollLeft +this._verticalScrollWidth;
                } else {
                    value = this._startScrollLeft - scrollLeft
                }
            } else {
                value = -scrollLeft;
            }
        }
        return value;
    },


    bindingEvts : function( arg ){
        var sortable = this.data.ltPropColumnSortable;

        if( !sortable && !arg ){
            return;
        }

        var __data = this.data,
        is_sticky = __data.ltPropStickyTable,
        is_full_yield = __data.ltPropFullYield,
        header = is_full_yield ? this._originalTable.getElementsByTagName( 'lyte-exptable-thead' )[ 0 ] : ( this._headerDiv || this.$node.getElementsByClassName( is_sticky ? 'lyteExpTableHeaderGroup' : 'lyteExpTableFakeHeaderWrapper' )[ 0 ] ),
        add = "add",
        listener = "EventListener";

        if( header ){
            if( this._sortmousedown ){
                add = "remove";
            } else{
                if( sortable ){
                    this._sortmousedown = this.sortablemousedown.bind( this );
                } else{
                    return;
                }
            }

           [ 'mousedown', 'touchstart' ].forEach( function( item ){
                header[ add + listener ]( item, this._sortmousedown, true );
           }.bind( this ));

           $L( this.$node )[ add + 'Class' ]( 'lyteExpTableColumnSortable' );

           if( add == "remove" ){
                delete this._sortmousedown;
           }
        }
    }.observes( 'ltPropColumnSortable' ).on( 'didConnect' ),

    sortablemousedown : function( ev ){
        var evt = ev,
        isTch;

        if( /lyte-exptablehead-resize/i.test( ev.target.tagName ) || ev.button != 0 ){
            return
        }

        if( /touch/i.test( ev.type ) ){
            if( ev.touches.length > 1 ){
                return;
            }
            isTch = true;
            evt = ev.touches[ 0 ];
        }
        var target = evt.target,
        td = $L( target ).closest( 'lyte-exptable-th' ).get( 0 ),
        index = Array.apply( Array, td.parentNode.children ).indexOf( td ),
        is_sticky = this.data.ltPropStickyTable,
        getBoundingClientRect = "getBoundingClientRect";

        if( this._fixHeaderCount > index ){
            return;
        }

        if( is_sticky && $L( td ).hasClass( 'lyteTableFixed' ) ){
            return;
        }

        if( this.getMethods( 'onBeforeSelect' ) && this.executeMethod( 'onBeforeSelect', ev, td, index, this.$node ) == false ){
            return;
        }

        this._ww = window.innerWidth;
        var clientX = this.rtlfunc( 'clientX', evt, this._ww ),
        bcr = td[ getBoundingClientRect ](),
        offleft = 0,
        is_full_yield = this.data.ltPropFullYield,
        tbody = is_full_yield ? this.getTbody() : this._originalTable.getElementsByClassName( 'lyteExpTableRowGroup' )[ 0 ],
        cells = [],
        rows = is_full_yield ? this.get_all_tr( tbody ) : tbody.children,
        originalCell = ( is_full_yield ? tbody[ 0 ] : tbody ).previousElementSibling.children[ 0 ].children[ index ];
        this._xoff = clientX - this.rtlfunc( 'right', bcr, this._ww );

        this._colwrap = this._colwrap || this.$node.getElementsByClassName( 'lyteExpTableFixedColWrapper' )[ 0 ];

        this._elem = td;
        this._index = index;
        this._sortmousemove = this.sortmousemove.bind( this );
        this._sortmouseup = this.sortmouseup.bind( this );
        this._currentIndex = index;
        this._tbody = tbody;
        this._cells = cells;
        this._affectedIndex = [];
        this._thisBccr = this._originalDiv[ getBoundingClientRect ]();
        this._sw = this._originalDiv.scrollWidth;

        this._prevx = clientX;

        this._originalDiv._sL = this._originalDiv.scrollLeft;

        if( is_sticky ){
            var obj = {
                width : this._fixedWidth
            },
            __left = this.rtlfunc( 'left' ),
            __right = this.rtlfunc( 'right' );

            obj[ __left ] = this._thisBccr[ __left ];

            if( __left == "left" ){
                obj.right = obj.width + obj.left;
            } else{
                obj.left = obj.right - obj.width;
            }

            this._colwrapbcr = obj;
        } else{
            this._colwrapbcr = this._colwrap[ getBoundingClientRect ]();
        }

        var parentChild = td.parentNode.children,
        firstbcr = parentChild[ 0 ][ getBoundingClientRect ]();

        for( var i = 0; i < parentChild.length; i++ ){
            var cur = parentChild[ i ],
            prev = ( parentChild[ i - 1 ] || {} )._bcr; 
            if( i == 0 ){
                cur._bcr = { left : firstbcr.left, right : firstbcr.right, width : firstbcr.width };
            } else if( this.data.ltPropStickyTable ){
                var __bcr = cur.getBoundingClientRect();
                cur._bcr = { left : __bcr.left, right : __bcr.right, width : __bcr.width };
            } else {
                var wid = parseFloat( cur.style.width );

                if( isNaN( wid ) ){
                    wid = cur[ getBoundingClientRect ]().width;
                }

                if( this._dir ){
                    cur._bcr = { left : prev.left - wid, right : prev.left, width : wid };
                } else {
                    cur._bcr = { left : prev.right, right : prev.right + wid, width : wid };
                }
            }
        }
        if( !this.data.ltPropPreventTableModify ){
            if( !this.data.ltPropHeaderOnly ){
                var height = 0;
                for( var i = 0; i < rows.length; i++ ){
                    var __current = this.get_nth_cell( rows[ i ], index );

                    if( !__current ){
                        continue;
                    }

                    __current._translate = 0;
                    cells.push( __current );
                    __current._transformedindex = index;
                    var rowbcr = __current[ getBoundingClientRect ]().height;
                    __current.classList.add( 'lyteExpSortSelected' );
                    height += rowbcr;
                    if( height >= this._thisBccr.height ){
                        break;
                    }
                }
            }
            cells.push( originalCell )
            originalCell._translate = 0;
            originalCell._transformedindex = index;
            if( !is_sticky ){
                td._translate = offleft;
                cells.push( td );
                td._transformedindex = index;
            }
        } else {
            td._transformedindex = index;
        }

        document.addEventListener( isTch ? 'touchmove' : 'mousemove', this._sortmousemove, true );
        document.addEventListener( isTch ? 'touchend' : 'mouseup', this._sortmouseup, true );
        this.$node.classList.add( 'lyteTableSortSelected' );
        td.classList.add( 'lyteExpSortSelected' );
        ev.preventDefault();

        this.getMethods( 'onSelect' ) && this.executeMethod( 'onSelect', ev, td, index, this.$node );
    },

    getTd : function( td, inc, pos ){
        var newtd, 
        transindex = td._transformedindex,
        final_index;

        if( inc > 0 || ( inc == 0 && pos ) ){
            if( this._index <= transindex ){
                final_index = transindex + 1;
            } else{
                final_index = transindex;
            }
        } else if( inc < 0 || ( inc == 0 && pos == false ) ) {
            if( this._index < transindex ){
                final_index = transindex;
            } else {
                final_index = transindex - 1;
            }
        }

        return this.get_nth_cell( td.parentNode, final_index );

    },

    findFormClosest : function( evt ){
        var __tag = this.data.ltPropCellTag,
        closest=$L(evt.target).closest('.lyteExpTableFakeColHeader lyte-exptable-th,.lyteExpOriginalTable ' + __tag ).get(0);
        if( closest && closest.tagName.toLowerCase() == __tag ){
            var index = Array.apply( Array, closest.parentNode.children ).indexOf( closest );
            closest = this._elem.parentNode.children[ index ];
        }
        return closest;
    },

    sortmousemove : function( ev, allow, pos ){
        if( this._preventmove || !this._elem || this._movemutate || this._movemeasure ){
            return;
        }
        var evt = ev,
        clientX = this.rtlfunc( 'clientX', evt, this._ww ),
        td = this._elem,
        tbody = this._tbody,
        cells = this._cells,
        xoff = this._xoff,
        prevtable = this.data.ltPropPreventTableModify;

        if( /touch/i.test( ev.type ) ){
            if( ev.touches.length > 1 ){
                return;
            }
            evt = ev.touches[ 0 ];
        }

        if( prevtable && !this._moved ){
            var div = document.createElement( 'div' ),
            bcr = td.getBoundingClientRect(),
            xscroll = document.documentElement.scrollLeft,
            yscroll = document.documentElement.scrollTop;
            div.innerHTML = td.innerHTML;
            $L( div ).attr( 'style', $L( td ).attr( 'style' ) ).addClass( this.data.ltPropSortDummyColumClass, 'lyteExpTableDummyColumn' );
            $L( td ).data( 'sortElement', div );
            $L( div ).data( 'relatedElement', td );
            div.style.height = bcr.height + 'px';
            div.style.width = bcr.width + 'px';
            div.style.left = ( xscroll * ( this._dir ? -1 : 1 ) ) + 'px';
            div.style.top = yscroll + 'px';
            div._bcr = { left : bcr.left, right : bcr.right, width : bcr.width };
            div._translate = div._bcr.left;
            div._translateY = bcr.top;
            div.style.transform = 'translate(' + div._translate + 'px,' + div._translateY + 'px)';
            document.body.appendChild( div );
            this._moved = true;
            return;
        }

        if( this._prevx == evt.clientX && !allow ){
            return;
        }

        if( this.getMethods( 'onBeforeMove' ) && this.executeMethod( 'onBeforeMove',  ev, td, this._index, td._transformedindex, this.$node ) == false ){
            return;
        }
        this._prevx = evt.clientX;

        var div = $L( td ).data( 'sortElement' ) || {},
        bcr = div._bcr || td._bcr || td.getBoundingClientRect(),
        inc = ( clientX - this.rtlfunc( 'right', bcr, this._ww ) - xoff ),
        closestTd = prevtable ? this.findFormClosest( evt ) : this.getTd( td, inc, pos ),
        closestbcr = closestTd ? ( closestTd._bcr || closestTd.getBoundingClientRect() ) : {},
        newone,
        index,
        sL = this._originalDiv._sL,
        fact = this._dir ? -1 : 1,
        interchangeprevent,
        offLeft = 0;

        if( sL == void 0 ){
            sL = this._originalDiv.scrollLeft;
        }

        if( td == closestTd && !div ){
            closestTd = undefined;
        }

        if( this.data.ltPropStickyTable && closestTd && $L( closestTd ).hasClass( 'lyteTableFixed' ) ){
            closestTd = void 0;
        }

        if( closestTd && this._moved ){
            index = Array.apply( Array, closestTd.parentNode.children ).indexOf( closestTd );
            if( index != this._index || prevtable ){
                var allow,
                transindex = closestTd._transformedindex == undefined ? index : closestTd._transformedindex;
                if( div && td == closestTd ){
                    transindex = index;
                }
                if( inc > 0 || ( inc == 0 && pos ) ){
                    if( this.rtlfunc( 'right', bcr, this._ww ) + inc > this.rtlfunc( 'left', closestbcr, this._ww ) + closestbcr.width * 0.5 ){
                        allow = transindex > td._transformedindex;
                    }
                } else if( inc < 0 || ( inc == 0 && pos == false ) ) {
                    if( this.rtlfunc( 'left', bcr, this._ww ) + inc <  this.rtlfunc( 'left', closestbcr, this._ww ) + closestbcr.width * 0.5 ){
                        allow = transindex < td._transformedindex;
                    }
                }

                if( allow ){
                    if( !prevtable ){
                        newone = this._affectedIndex.indexOf( index ) == -1;
                        if( newone ){
                            offLeft = this._isIE ? closestTd.offsetLeft : 0;
                            this._affectedIndex.push( index );
                        }
                    }
                } else {
                    closestTd = undefined;
                }
            }
        } else {
            closestTd = undefined;
        }

        if( closestTd && this.getMethods( 'onBeforeInterChange' ) ){
            interchangeprevent = this.executeMethod( 'onBeforeInterChange', ev, td, closestTd, this.$node ) == false;
            if( interchangeprevent && newone ){
                Lyte.arrayUtils( this._affectedIndex, 'removeAt', this._affectedIndex.indexOf( index ) );
            }
        }
        if( prevtable ){
            div._translate += ( inc * fact );
            div.style.transform = 'translate( ' + div._translate + 'px,' + div._translateY + 'px)';
            if( closestTd && !interchangeprevent ){
                if( closestTd != td ){
                   if( inc < 0 || ( inc == 0 && pos == false ) ){
                     td._transformedindex--;
                   } else {
                     td._transformedindex++;
                   } 
                }
            }
        } else {
            for( var i = 0; i < cells.length; i++ ){
                var current = cells[ i ];
                current._translate += ( inc * fact );
                current.style.transform = "translateX(" +  current._translate + "px)";
                if( !this._moved ){
                    current.classList.add( 'lyteExpTablePe' );
                }
                if( closestTd && !interchangeprevent ){
                    var newcell = this.get_nth_cell( cells[ i ].parentNode, index );
                    if( newcell ){
                        if( newone ){
                            newcell.classList.add( 'lyteExpTableAnimate' );
                            newcell._translate = 0;
                        }
                        newcell._translate += ( bcr.width * ( ( inc > 0 || ( inc == 0 && pos ) ) ? -1 : 1 ) * fact );
                        newcell.style.transform = "translateX(" +  newcell._translate + "px)";

                        if( newcell._transformedindex == undefined ){
                            newcell._transformedindex = index;
                        }
                        if( inc < 0 || ( inc == 0 && pos == false ) ){
                            newcell._transformedindex++;
                            current._transformedindex--;
                        } else if( inc > 0 || ( inc == 0 && pos ) ) {
                            newcell._transformedindex--;
                            current._transformedindex++;
                        }
                    }
                }
            }
        }

        if( div._bcr ){
            div._bcr.left += ( inc * fact );
            div._bcr.right += ( inc * fact );
        } else {
            td._bcr.left += ( inc * fact );
            td._bcr.right += ( inc * fact );
            if( closestTd && !interchangeprevent ){
                closestTd._bcr.left += ( bcr.width * ( ( inc > 0 || ( inc == 0 && pos ) ) ? -1 : 1 ) * fact );
                closestTd._bcr.right += ( bcr.width * ( ( inc > 0 || ( inc == 0 && pos ) ) ? -1 : 1 ) * fact );
            }
        }
        
        $L.fastdom.clear( this._reqId );
        $L.fastdom.clear( this._measure );
        delete this._measure;
        delete this._reqId;

        this.sorthorizontalscroll( { left : bcr.left/* + inc * fact*/, width : bcr.width, right :  bcr.right/* + bcr.left + inc * fact*/ }, sL );

        closestTd && this.getMethods( 'onInterChange' ) && this.executeMethod( 'onInterChange', ev, td, closestTd, this.$node );

        this.getMethods( 'onMove' ) && this.executeMethod( 'onMove', ev, td, this._index, td._transformedindex, this.$node );

        this._moved = true;
    },

    sorthorizontalscroll : function( bcr, sL ){
         var lt = this.rtlfunc.call( this, 'left' ), IE = this.isIE11Lyte || this.isEdgeLyte, check1, check2,
         td = this._elem;


         check1 = this.rtlfunc( 'left', bcr, this._ww ) < Math.max( this.rtlfunc( 'right', this._colwrapbcr, this._ww ), 0 );
         check2 = ( this.rtlfunc( 'left', bcr, this._ww ) + bcr.width ) > Math.min( this.rtlfunc( 'right', this._thisBccr, this._ww ), this._ww );

         if( ( this._FF || this._isIE ) && check2 ){
            if( td._transformedindex == td.parentNode.children.length - 1 ) {
                if( this._dir && !this._isIE ){
                    if( this._sw + sL + this._verticalScrollWidth <= this._thisBccr.width ){
                        return;
                    }
                } else if( sL + this._thisBccr.width >= this._sw ){
                    return;
                }
            }
         }

         var value;

         if( check1 ){
            value = sL - this.data.ltPropScrollStep * ( this._dir ? ( -1 * ( IE ? -1 : 1 ) ) : 1 );
            if( this._dir ){
                if( this._chrome ){
                    value = Math.min( value, this._sw - this._thisBccr.width );
                } else if( this._FF || this._isSafari ){
                    value = Math.min( value, 0 );
                }
            } else {
                value = Math.max( value, 0 );
            }
         } else if( check2 ){
            value = sL + this.data.ltPropScrollStep * ( this._dir ? ( -1 * ( IE ? -1 : 1 ) ) : 1 );
            if( this._dir ){
                if( this._chrome ){
                    value = Math.max( value, 0 );
                } else if( this._FF || this._isSafari ){
                    value = Math.max( value, this._thisBccr.width - this._sw );
                } else {
                    value = Math.min( value, this._sw - this._thisBccr.width ); 
                }
            } else {
                value = Math.min( value, this._sw - this._thisBccr.width );
            }
         } else {
            $L.fastdom.clear( this._reqId );
            $L.fastdom.clear( this._measure );
            delete this._measure;
            delete this._reqId;
         }

         if( check1 || check2 ){
            this._originalDiv.scrollLeft = value;
            this._originalDiv._sL += ( value - sL );
            var parentChild = this._elem.parentNode.children,
            is_sticky = this.data.ltPropStickyTable;

            for( var i = 0; i < parentChild.length; i++ ){
                var cur = parentChild[ i ];

                if( is_sticky && $L( cur ).hasClass( 'lyteTableFixed' ) ){
                    continue;
                } 

                cur._bcr.left -= ( value - sL );
                cur._bcr.right -= ( value - sL );
            }

            this._measure = $L.fastdom.measure( function(){
                delete this._measure;
                this.actions.scroll.call( this );
                this._reqId = $L.fastdom.mutate( function(){
                    delete this._reqId;
                    this.sortmousemove( { clientX : this._prevx }, true, !!check2 );
                }.bind( this ) )
            }.bind( this ) )
         }

    },

    sortmouseup : function( evt ){
        var index = this._index,
        td = this._elem,
        newindex = td._transformedindex,
        isTch = /touch/i.test( evt.type );

        if( this._moved ){
            var failed;
            if( this.getMethods( 'onBeforeDrop' ) && this.executeMethod( 'onBeforeDrop', evt, td, index, newindex, this.$node ) == false ){
                failed = true;
            }
            this.resetcells();
            if( !failed ){
                if( index != newindex ){
                    this._prevent = true;
                    var header = this.data.ltPropHeader,
                    current = Lyte.arrayUtils( header, 'removeAt', index );
                    delete this._prevent;
                    Lyte.arrayUtils( header, 'insertAt', newindex, current );
                }
                this.getMethods( 'onDrop' ) && this.executeMethod( 'onDrop', evt, td, index, newindex, this.$node );
            }
        } else {
            this.resetcells();
            this.getMethods( 'onRelease' ) && this.executeMethod( 'onRelease', evt, td, this.$node );
        }

        document.removeEventListener( isTch ? 'touchmove' : 'mousemove', this._sortmousemove, true );
        document.removeEventListener( isTch ? 'touchend' : 'mouseup', this._sortmouseup, true );

        $L.fastdom.clear( this._reqId );
        $L.fastdom.clear( this._measure );
        delete this._measure;
        delete this._reqId;

        delete this._sortmouseup; delete this._sortmousemove; delete this._elem; delete this._xoff; 
        delete this._index; delete this._moved; delete this._affectedIndex; delete this._tbody;
        delete this._cells; delete this._prevx; delete this._thisBccr; delete this._ww; delete this._sw;
        delete this._colwrapbcr;

        this.$node.classList.remove( 'lyteTableSortSelected' );

        this.$node.scrollTo();
    },

    fixcolobs : function(){
        if( this._elem ){
            this._preventmove = true;
            $L.fastdom.measure( function(){
                this._colwrapbcr = this._colwrap.getBoundingClientRect();
                $L.fastdom.mutate( function(){
                    delete this._preventmove;
                }.bind( this ) )
            }.bind( this ) );
        }
    }.observes( 'columns.[]' ),

    resetcells : function( cells ){
        var affected = this._affectedIndex,
        cells = this._cells;
        $L( this._fakeOriginalHeader ).css( 'height', '' );
        if( this.data.ltPropPreventTableModify ){
            this._elem._transformedindex;
            this._elem._translate;
            var div = $L( this._elem ).data( 'sortElement' );
            div && div.remove();
            $L( this._elem ).data( 'sortElement', undefined );
        } else {
            for( var i = 0; i < cells.length; i++ ){
                var current = cells[ i ],
                children = current.parentNode.children;
                
                current.style.transform = "";
                current.classList.remove( 'lyteExpSortSelected', 'lyteExpTablePe' );
                delete current._transformedindex;
                delete current._translate;
                for( var j = 0; j < affected.length; j++ ){
                    var newcell = children[ affected[ j ] ];
                    newcell.classList.remove( 'lyteExpTableAnimate', 'lyteExpTablePe' );
                    newcell.style.transform = "";
                    delete newcell._transformedindex;
                    delete newcell._translate;
                }
            }
        }
    },


    get_all_tr : function( tbody ){
        if( this.data.ltPropFullYield ){
            var __arr = [];

            tbody.forEach( function( item ){
                __arr.push.apply( __arr, item.children )
            });

            return __arr;
        }
        return tbody.children;
    },

    setLeftForInterSection : function( reset ){
        $L.fastdom.clear( this._setmeasure );

        this._setmeasure = $L.fastdom.measure( function()  {
            var headerCells = Array.from( this.getHeaderCells() );
            if( headerCells.length ){

                var width = this.getHeaderWidths( headerCells ),
                sum=0;
                
                $L.fastdom.mutate( function()  {

                    var accumulatedWidth = 0,
                    accumulatedLeft = 0,
                    tbody = this.getTbody(),
                    rows = Array.from( this.get_all_tr( tbody ) ),
                    intersectionDivs = [],
                    left = this.rtlfunc( 'left' );

                    headerCells.forEach( function( cell, index )  {
                        var intersection = cell._horizontalIntersectionDiv;
                        if( intersection ){
                            intersectionDivs.push( intersection );
                            intersection.style[ left ] = accumulatedLeft + 'px';
                            cell.style[ left ] = accumulatedWidth + 'px';
                            sum += width[ index ]
                            this.makeFixedColumn( rows, index, left, accumulatedWidth );

                            accumulatedWidth += width[ index ];

                            this.observe( intersection );

                            if( intersection._sticked && reset ){
                                this.addFixedClass( cell );
                            }
                        } else {
                            accumulatedLeft +=  width[ index ];
                        }
                    }.bind(this) );

                    this._intersections = intersectionDivs;
                    this._fixedSum = sum
                }.bind(this) );
            }
        }.bind(this) );
    },
    getHeaderCells : function(){
        return this.$node.getElementsByClassName('lyteExpOriginalTable')[0].getElementsByTagName( 'lyte-exptable-th' );
    },
    getHeaderWidths : function( headerCells ){
        var width =[]
        headerCells.forEach(function(cells,index){
            width[index]=cells.getBoundingClientRect().width
        })
        return width
    },
    getTbody : function(){

        if( this.data.ltPropFullYield ){
            var ori_table = this.$node.getElementsByClassName( 'lyteExpOriginalTable' )[ 0 ];
            return Array.from( ori_table.getElementsByTagName( 'lyte-exptable-tbody' ) );
        }


        return this._tbody || this.$node.getElementsByClassName( 'lyteExpTableRowGroup' )[ 0 ];
    },

    get_nth_cell : function( row, index ){
        var children = Array.from( row.children ),
        __len = children.length,
        __count = 0;

        for( var i = 0; i < __len; i++ ){
            var __cell = children[ i ];
            if( __count == index ){
                return __cell;
            } else if( __count > index ){
                break;
            }

            __count += ( __cell.colSpan || 1 );
        }
    },

    makeFixedColumn : function( rows, index, left, value ){

        rows.forEach( function(row) {
            var _$L = $L( row );
            if( !_$L.hasClass( 'dummy' ) ) {
                $L( this.get_nth_cell( row, index ) ).css( left, value ).addClass( 'lyteFixedColumn' );
            }
        }.bind( this ) );
    },
    observe : function( intersection ){
        if( !intersection._observed ){
            this._intersectionObs.observe( intersection );
            intersection._observed = true;
        }
    },
    addFixedClass : function( cell ){
        this.stickyFunction( cell, false, 'addClass', 'lyteTableFixed' );
    },
    stickyScroll : function( evt ){
        if( evt && evt.target == this._scrollDiv ){
            if( this._intersections.length  ){
                $L.fastdom.measure( function()  {
                    var scrollTop = evt.target.scrollTop;
                    $L.fastdom.mutate( function(){
                        this._intersections.forEach( function( item ){
                            item.style.top = scrollTop + 'px';
                        })
                    }.bind(this))
                }.bind(this))
            }
        }
    },
    registerInterSection : function( scrollDiv ){
         this._intersectionObs = new IntersectionObserver( this.intersection.bind( this ), { threshold : [ 1 ], root : scrollDiv } )
    },
    intersection: function( intersections ){
        
        intersections.forEach( function(intersection) {
            this.singleIntersection( intersection );
        }.bind(this) )
    },

    singleIntersection : function( intersection ){
        this._fixedWidth = this._fixedWidth || 0;
        var cell = intersection.target._cell;

        if( cell && intersection.intersectionRatio ){
            this.processUnfix( cell, intersection );
        } else if(cell){
            this.processFix( cell, intersection );
        }
    },

    processUnfix : function( cell, intersection ){
        this.removeFixedClass( cell );
        delete cell._horizontalIntersectionDiv._sticked;
        this.callUnfix( cell );

        $L.fastdom.measure( function() {
            var bcr = cell._bcr || cell.getBoundingClientRect();
            this._fixedWidth = Math.max( this._fixedWidth - bcr.width, 0 );
            this.adjust_wrap_width();
        }.bind(this) )
    },

    adjust_wrap_width : function(){
        var obj = this._colwrapbcr;

        if( obj && this.data.ltPropStickyTable ){
            var left = this.rtlfunc( 'left' ),
            width = this._fixedWidth;
            if( left == "left" ){
                obj.right = obj.left + width;
            } else{
                obj.left = obj.right - width;
            }
        }
    },

    processFix : function( cell, intersection ){
        this.addFixedClass( cell );
        cell._horizontalIntersectionDiv._sticked = true;
        this.callFix( cell );

        $L.fastdom.measure( function(){
            var bcr = cell._bcr || cell.getBoundingClientRect();
            this._fixedWidth = this._fixedWidth + bcr.width;
            this.adjust_wrap_width();
        }.bind(this) )
    },

    callUnfix : function( cell ){
        if( this.getMethods( 'onUnFix' ) ){
            this.executeMethod( 'onUnFix', cell, this.$node );
        }
    },

    callFix : function( cell ){
        if( this.getMethods( 'onFix' ) ){
            this.executeMethod( 'onFix', cell, this.$node );
        }
    },

    callDrop :function( selectedCell, next, startIndex, endIndex, header, evt ){
        if( this.getMethods( 'onDrop' ) ){
            this.executeMethod( 'onDrop', selectedCell, next, startIndex, endIndex, header, evt, this.$node );
        }
    }, 

    callRelease : function( evt, selectedCell ){
        if( this.getMethods( 'onRelease' ) ){
            this.executeMethod( 'onRelease', evt, selectedCell, this.$node );
        }
    },

    callOnBeforeSelect : function( selectedCell, ev, index ){
        if( this.getMethods( 'onBeforeSelect' ) ) {
            return this.executeMethod( 'onBeforeSelect', selectedCell, ev, this.$node, index ) === false;
        }
    },

    callOnSelect : function( selectedCell, ev, index ){
        if( this.getMethods( 'onSelect' ) ) {
            return this.executeMethod( 'onSelect', selectedCell, ev, this.$node, index ) === false;
        }
    },
    stickyFunction : function( cell, isCss, property, value ){
        var index = this.getIndexForSticky( cell ),
        tbody = this.getTbody(),
        rows = Array.from( this.get_all_tr( tbody ) ),
        fnName = isCss ? 'css' : property,
        fnValue = isCss ? ( this._dir ? { right : value } : { left : value } ) : value;

        if( isCss ){
            $L( cell )[ fnName ]( fnValue );
        } else {
            $L( cell )[ property ]( value );
        } 

        rows.forEach( function(row) {
            $L( this.get_nth_cell( row, index ) )[ fnName ]( fnValue );
        }.bind( this ) )
    },
    getIndexForSticky : function( cell ){
        return Array.from( cell.parentNode.children ).indexOf( cell );
    },
    removeFixedClass : function( cell ){
        this.stickyFunction( cell, false, 'removeClass', 'lyteTableFixed' );
    },
    removeSticky : function( cell ){
        this.stickyFunction( cell, true, this.rtlfunc( 'left' ), '' );
    },
     update_aria: function(row){
        var sA = "setAttribute",
        role = "role"
        row[ sA ]( role, "row" );

        Array.from(row.children).forEach( function( __cell ){
            var name = /lyte-exptable-th/i.test( __cell.tagName ) ? 'columnheader' : 'cell';
            var index = Array.from( row.children ).indexOf( __cell )

            var __cell = row.children[ index ];

            if( __cell ){
                __cell[ sA ]( role, name );
            }
        });
    },

    do_toggle_animation : function( tbody ){
        var $tbody = $L( tbody ),
        hidden_class = "lyteExpTbodyClosed",
        animation_class = 'lyteExpTableAccordionAnimation',
        anime_initial_class = "lyteExpTableHideStart",
        is_hidden = $tbody.hasClass( hidden_class ),
        __rows = tbody.getElementsByClassName( 'lyteExpTableAccordionContent' ),
        rows = Array.from( __rows ),
        empty = [],
        zero = [],
        hgt_fn = function(){
            return rows.map( function( item ){
                empty.push( '' );
                zero.push( '0px' );
                return item.offsetHeight + 'px';
            });
        },
        anime_fn = function( arr ){
            rows.forEach( function( item, index ){
                var __style = item.style,
                __final = arr[ index ];
                __style.setProperty( '--tableMaxHeight', __final );
            });
        },
        evt_name = 'transitionend',
        raf = window.requestAnimationFrame;
        
        if( $tbody.hasClass( animation_class ) ){
            return;
        }

        if( is_hidden ){
            $tbody.removeClass( hidden_class );

            raf( function(){
                var arr = hgt_fn();
                anime_fn( zero );
                $tbody.addClass( anime_initial_class );

                raf( function(){
                    $tbody.addClass( animation_class ).removeClass( anime_initial_class ).on( evt_name, function(){
                        $tbody.removeClass( animation_class ).off( evt_name );
                        anime_fn( empty );
                    });
                    anime_fn( arr );
                });
            });
        } else {
            var arr = hgt_fn();
            anime_fn( arr );

            raf( function(){
                $tbody.addClass( /*anime_initial_class + ' ' +*/ animation_class ).on( evt_name , function(){
                    $tbody.removeClass( animation_class + ' ' + anime_initial_class ).addClass( hidden_class ).off( evt_name );
                });

                raf( function(){
                    $tbody.addClass( anime_initial_class );
                    anime_fn( empty );
                });
            });
        }
    }
});

window.addEventListener( 'resize', function() {

    window.clearTimeout( _lyteUiUtils._expressDebounce );

    _lyteUiUtils._expressDebounce = setTimeout( function() {
        var tables = document.getElementsByTagName( 'lyte-expresstable' ),
        i = 0;
       
            for( ; i < tables.length; i++ ) {
                if( tables[ i ] && !tables[ i].getData('ltPropStickyTable')){
                    tables[ i ].component.setFixTableRowHeight();
                    tables[ i ].component.fixHeaderHeight();
                }
            
        }   
    }, 250 );
    
}, true );

if( !_lyteUiUtils.registeredCustomElements[ 'lyte-exptable-th' ] ) {
    _lyteUiUtils.registeredCustomElements[ 'lyte-exptable-th' ] = true; 
    
    Lyte.createCustomElement("lyte-exptable-th", {
        static : {
             "observedAttributes" : {
                get : function() {
                    return ['fixed', 'resize', 'icon'];
                }
            }
        },
        "attributeChangedCallback" : function(attr, oldVal, newVal) {
            if (attr == 'fixed') {
            var scrollingDiv = this;
             while(scrollingDiv.tagName != 'DIV')
                {
                    scrollingDiv = scrollingDiv.parentElement;
                }  
            if (newVal == 'enable') {
              this.classList.add('lyteFixedColumn');
            } else {
              this.classList.remove('lyteFixedColumn');
            }
            this.checkIntersection( newVal == "enable" );
          } else if (attr == 'resize') {
            if (newVal == 'enable') {
              var tabHead = document.createElement('lyte-exptablehead-resize');
              tabHead.addEventListener('mousedown', this.resize);
              tabHead.addEventListener('touchstart', this.resize);
              this.appendChild(tabHead);
            } else {
              var tabHead = this.getElementsByTagName('lyte-exptablehead-resize')[ 0 ];
              if (tabHead) {
                this.removeChild(tabHead);
              }
            }
          }
        },
        checkIntersection : function( arg ){
                var table = $L( this ).closest( 'lyte-expresstable' ).get( 0 );
                if( table.getData('ltPropStickyTable') ){
                    if( arg && !this._horizontalIntersectionDiv ){
                        this.createIntersection( table );
                    } else if( !arg && this._horizontalIntersectionDiv ){
                        var intersection = this._horizontalIntersectionDiv;
                        this.removeIntersection( intersection, table );
                        table.component.removeSticky( this );
                        table.component.removeFixedClass( this );
                    }
                }
        },
        createIntersection : function( table ){
                var div = $L( document.createElement( 'div' ) ).addClass( 'lyteExpStickyInterSection' ).get( 0 );
                table.getElementsByTagName( 'lyte-exptable' )[ 0 ].appendChild( div );
                this._horizontalIntersectionDiv = div;
                div._cell = this;
                table.component.setLeftForInterSection();
        },
        removeIntersection : function( intersection, table ){
                if( table ){
                    table.component._intersectionObs.unobserve( intersection );
                }
                intersection.remove();
                delete intersection._cell;
                delete this._horizontalIntersectionDiv;
            },
        disconnectedCallback : function(){
            if(Lyte.Component.shouldIgnoreDisconnect()){
                return
            }
            var intersection = this._horizontalIntersectionDiv;
            if( intersection ){
                var table = $L( this ).closest( 'lyte-expresstable' ).get( 0 );
                this.removeIntersection( intersection, table );
            }
        },

            
        resize : function(event){
              var table = $L( event.target ).closest( 'lyte-expresstable' )[ 0 ];  
              table.component.actions.tableResize.call(table.component, event);
        }        
    });
}
if( !_lyteUiUtils.registeredCustomElements[ 'lyte-exptable-tr' ] ) {
	_lyteUiUtils.registeredCustomElements[ 'lyte-exptable-tr' ] = true;

	Lyte.createCustomElement( 'lyte-exptable-tr', {
        static : {
           
       },
		connectedCallback: function() {
            var query = "lyte-expresstable",
            table = this.closest ? this.closest( query ) : $L( this ).closest( query ).get( 0 );

            if( table && table.ltProp( 'role' ) && table.ltProp( 'yield' ) ){
                table.component.update_aria( this );
            }
        }
    })
}

/**
 * @syntax nonYielded 
 * <lyte-expresstable lt-prop-header = {{headerJSON}} lt-prop-content = {{contentJSON}} lt-prop-header-label-key = "name" lt-prop-body-label-key = "body" style="height: 150px"></lyte-expresstable> 
 */


 /**
 * 
 * @syntax yielded 
 *  <lyte-expresstable > 
 *      <template is = 'registerYield' yield-name = 'headerYield'> 
 *           <lyte-exptable-tr> 
 *              <lyte-exptable-th > 
 *                   From
 *               </lyte-exptable-th>
 *               <lyte-exptable-th > 
 *                   Name
 *               </lyte-exptable-th>
 *          </lyte-exptable-tr> 
 *      </template> 
 *       <template is = 'registerYield' yield-name = 'contentYield'> 
 *           <lyte-exptable-tr > 
 *               <lyte-exptable-td > 
 *                   Agra
 *               </lyte-exptable-td> 
 *               <lyte-exptable-td > 
 *                   Jaipur
 *               </lyte-exptable-td> 
 *           </lyte-exptable-tr>
 *            <lyte-exptable-tr > 
 *               <lyte-exptable-td > 
 *                   Mysore
 *               </lyte-exptable-td> 
 *               <lyte-exptable-td > 
 *                   Delhi
 *               </lyte-exptable-td> 
 *           </lyte-exptable-tr>
 *       </template> 
 *   </lyte-expresstable>  
 */