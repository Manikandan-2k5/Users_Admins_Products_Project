
/**
 * This component is used to render a basic list view component
 * @component lyte-listview1
 * @version 3.64.0
 * @dependency lyte-table
 *  components/lyte-table.js
 * 	plugins/lyte-scrollbar.js
 * 	plugins/lyte-animate.js
 *  mixins/lyte-table-utils.js
 *  theme/compiledCSS/default/ltr/lyte-ui-table.css
 *  theme/compiledCSS/default/ltr/lyte-ui-scrollbar.css
 * @dependency lyte-number
 *  components/lyte-number.js
 *  theme/compiledCSS/default/ltr/lyte-ui-number.css
 * @dependency lyte-button
 *  components/lyte-button.js
 *  theme/compiledCSS/default/ltr/lyte-ui-button.css 
 * @dependency lyte-search
 *  components/lyte-search.js
 *  components/lyte-input.js
 *  theme/compiledCSS/default/ltr/lyte-ui-search.css
 *  theme/compiledCSS/default/ltr/lyte-ui-input.css  
 * @dependency lyte-accordion
 *  components/lyte-accordion.js
 *  theme/compiledCSS/default/ltr/lyte-ui-accordion.css  
 * @dependency lyte-checkbox
 *  components/lyte-checkbox.js
 *  theme/compiledCSS/default/ltr/lyte-ui-checkbox.css  
 * @dependency lyte-radiobutton
 *  components/lyte-radiobutton.js
 *  theme/compiledCSS/default/ltr/lyte-ui-radiobutton.css   
 * @dependency lyte-modal
 *  components/lyte-modal.js
 *  components/lyte-wormhole.js
 *  theme/compiledCSS/default/ltr/lyte-ui-modal.css     
 * @dependency lyte-popover
 *  components/lyte-popover.js
 *  theme/compiledCSS/default/ltr/lyte-ui-popover.css    
 * @dependency lyte-dropdown
 *  components/lyte-dropdown.js
 *  theme/compiledCSS/default/ltr/lyte-ui-dropdown.css    
 * @dependency lyte-calendar
 *  components/lyte-calendar.js
 *  theme/compiledCSS/default/ltr/lyte-ui-calendar.css    
 *  plugins/lyte-moment.js
 * @dependency lyte-datetime-input
 *  components/lyte-datetime-input.js
 *  components/helpers/eventListeners.js
 *  theme/compiledCSS/default/ltr/lyte-ui-datetime-input.css   
 * @dependency lyte-date-filter
 *  view/listview/filters/lyte-date-filter.js
 * @dependency lyte-number-filter
 *  view/listview/filters/lyte-number-filter.js 
 * @dependency lyte-text-filter
 *  view/listview/filters/lyte-text-filter.js  
 * @dependency lyte-boolean-filter
 *  view/listview/filters/lyte-boolean-filter.js  
 * @dependency lyte-custom-filter
 *  view/listview/filters/lyte-custom-filter.js 
 * @dependency lyte-multiselect-filter
 *  view/listview/filters/lyte-multiselect-filter.js 
 * @dependency lyte-list-filter
 *  view/listview/lyte-list-filter.js 
 * @dependency lyte-edit-element
 *  view/listview/lyte-edit-element.js  
 * @methods onBeforeFilterOpen, onBeforeFilterClose, onCustomFilterReset, onEditBlur, onBeforeEdit, onCellDelete, onPicklistConstruct, fetchMoreData, onScrollEnd, onChecked, onUnchecked, onRowClick
 */

Lyte.Component.register( "lyte-listview1", {
_template:"<template tag-name=\"lyte-listview1\"> <template is=\"if\" value=\"{{expHandlers(ltPropCustomUtils,'!')}}\"><template case=\"true\"> <div class=\"lyteListUtils\"> <template is=\"if\" value=\"{{ltPropSearch}}\"><template case=\"true\"> <lyte-input lt-prop=\"{{ltPropInput}}\" lt-prop-type=\"search\" lt-prop-value=\"{{lbind(ltPropSearchValue)}}\"></lyte-input> </template></template><template is=\"if\" value=\"{{ltPropColumnChooser}}\"><template case=\"true\"> <div class=\"lyteListColumnChooser\"> <lyte-button id=\"columnChooser\" onclick=\"{{action('showPop')}}\"> <template is=\"registerYield\" yield-name=\"text\"> Choose column </template> </lyte-button> </div> </template></template> </div> </template></template><template is=\"if\" value=\"{{ltPropColumnChooser}}\"><template case=\"true\"> <lyte-popover lt-prop=\"{{ltPropPopover}}\" lt-prop-wrapper-class=\"lyteListviewManageColumnPopover\" lt-prop-header-padding=\"\" lt-prop-content-padding=\"\" lt-prop-origin-elem=\"#columnChooser\" lt-prop-show=\"{{lbind(ltPropColumnChooserShow)}}\"> <template is=\"registerYield\" yield-name=\"popover\"> <lyte-popover-header>{{ltPropText.columnChooser}}</lyte-popover-header> <lyte-popover-content> <lyte-column-chooser lt-prop-header=\"{{ltPropHeader}}\" on-checked=\"{{method('checked')}}\" on-unchecked=\"{{method('unchecked')}}\"></lyte-column-chooser> </lyte-popover-content> </template> </lyte-popover> </template></template><template is=\"if\" value=\"{{ltPropDisplayFilters}}\"><template case=\"true\"> <div class=\"lyteListFilters\" style=\"{{showConditions}}\"> <template is=\"forIn\" object=\"{{conditions}}\" value=\"value\" key=\"key\"><template is=\"if\" value=\"{{value.isValid}}\"><template case=\"true\"> <div class=\"lyteListFilterItem\"> <span class=\"lyteListFilterKey\">{{key}}:</span> <div class=\"lyteListFilterValueWrap\"> <span class=\"lyteListFilterValue\">{{value.label}}</span> <template is=\"if\" value=\"{{value.input}}\"><template case=\"true\"> <span class=\"lyteListFilterSelectedValue\">{{value.input}}</span> </template><template case=\"false\"><template is=\"if\" value=\"{{expHandlers(value.type,'==',&quot;multiselect&quot;)}}\"><template case=\"true\"> <div class=\"lyteListFilterMultiSelect\"> <template is=\"for\" items=\"{{value.value}}\" item=\"item\" index=\"index\"> <span class=\"lyteListMultipleSelected\">{{item}}</span> </template> </div> </template></template></template></template> <span class=\"lyteListRemoveFilter\" onclick=\"{{action('reset_filter',key)}}\"></span> </div> </div> </template></template></template> </div> </template></template> <div class=\"lyteListviewWrapper\"> <lyte-table lt-prop=\"{{stringify(ltPropTable)}}\" lt-prop-yield=\"true\" lt-prop-content=\"{{ltPropRenderContent}}\" lt-prop-header=\"{{headerData}}\" lt-prop-data=\"{{lbind(ltPropData)}}\" lt-prop-width=\"{{overallWidth}}\" on-fix=\"{{method('fix')}}\" on-un-fix=\"{{method('unfix')}}\" scroll-end=\"{{method('scrollEnd')}}\" onclick=\"{{action('yield_click',event)}}\" on-fake-column-create=\"{{method('fakeCreate')}}\" on-before-select=\"{{method('beforeselect')}}\" on-select=\"{{method('onselect')}}\" on-before-drop=\"{{method('beforeDrop')}}\"> <template is=\"registerYield\" yield-name=\"yield\"> <template is=\"if\" value=\"{{ltPropSubHeaders}}\"><template case=\"true\"> <div class=\"lyteListFakeHeader\" style=\"width:{{overallWidth}}\"> <template is=\"for\" items=\"{{fakeHeaderData}}\" item=\"item\" index=\"index\"> <div class=\"lyteListFakeCell {{if(item.data.pin,'lyteListFixed','')}}\" parent_index=\"{{index}}\" style=\"{{listStyle(item)}}\"> <template is=\"if\" value=\"{{item.data.name}}\"><template case=\"true\"><template is=\"if\" value=\"{{ltPropFakeHeaderYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"fakeHeaderYield\" cell-data=\"{{item.data}}\"></lyte-yield> </template><template case=\"false\"> <span>{{item.data.name}}</span> </template></template></template></template><template is=\"if\" value=\"{{item.resizable}}\"><template case=\"true\"> <div class=\"lyteListResizeHandler\" onmousedown=\"{{action('resize',event)}}\" ontouchstart=\"{{action('resize',event)}}\"></div> </template></template> </div> </template> </div> </template></template><template is=\"if\" value=\"{{ltPropEdit}}\"><template case=\"true\"> <lyte-edit-element class=\"lyteListEditElement {{isActive}}\" style=\"{{editStyle}}\" tabindex=\"1\" onkeydown=\"{{action('keydown',event,this)}}\" ondblclick=\"{{action('dblclick')}}\" lt-prop-edit-mode=\"{{lbind(ltPropEditMode)}}\" lt-prop-edit-yield=\"{{ltPropEditYield}}\" lt-prop-cell-data=\"{{cellData}}\" lt-prop-row-data=\"{{rowData}}\" on-picklist-construct=\"{{method('picklistData')}}\" on-blur=\"{{method('editBlur')}}\" lt-prop-format=\"{{ltPropFormat}}\" lt-prop-cell-index=\"{{selectedCell}}\" lt-prop-row-index=\"{{originalRow}}\" onclick=\"{{action('edit_elem_click',event)}}\"> <template is=\"registerYield\" yield-name=\"edit\" from-parent=\"\"></template> <template is=\"registerYield\" yield-name=\"lyte-custom-edit-yield\" from-parent=\"\"></template> </lyte-edit-element> </template></template> <lyte-table-structure> <lyte-thead> <lyte-tr> <template is=\"for\" items=\"{{headerData}}\" item=\"cell\" index=\"index\"> <lyte-th index=\"{{index}}\" parent_index=\"{{cell.parentIndex}}\" fixed=\"{{cell.data.pin}}\" sticky-position=\"{{cell.data.position}}\" style=\"{{listStyle(cell.data)}}\"> <span class=\"lyteListHeaderName {{cell.data.sortStatus}}\" onclick=\"{{action('sort',index)}}\"> <template is=\"if\" value=\"{{ltPropHeaderYield}}\"><template case=\"true\"> <lyte-yield yield-name=\"headerYield\" cell-data=\"{{cell.data}}\"></lyte-yield> </template><template case=\"false\"> <span class=\"lyteListViewHeaderLabel\">{{cell.data.name}}</span> </template></template> </span> <template is=\"if\" value=\"{{cell.sortStatus}}\"><template case=\"true\"> <span class=\"lyteListSortReset\" onclick=\"{{action('reset_sort',cell)}}\"></span> </template></template><template is=\"if\" value=\"{{cell.data.resizable}}\"><template case=\"true\"> <div class=\"lyteListResizeHandler\" onmousedown=\"{{action('resize',event)}}\" ontouchstart=\"{{action('resize',event)}}\"></div> </template></template> </lyte-th> </template> </lyte-tr> </lyte-thead> <lyte-tbody onmousedown=\"{{action('mousedown',event)}}\" ontouchstart=\"{{action('touchstart',event)}}\"> <template is=\"for\" items=\"{{ltPropData}}\" item=\"item\" index=\"index\"> <lyte-tr index=\"{{item.index}}\" actual_index=\"{{item.body.rowIndex}}\" class=\"{{isRowSelected(selectedRow,item.index,item.body.data.class)}}\" id=\"{{item.body.id}}\" onclick=\"{{action('row_click',item,this,event)}}\"> <template is=\"for\" items=\"{{headerData}}\" item=\"cell\" index=\"index\"> <lyte-td row-index=\"{{item.index}}\" index=\"{{index}}\"> <lyte-yield yield-name=\"{{expHandlers(cell.data.yield,'||',&quot;yield&quot;)}}\" row-data=\"{{item.body.data}}\" cell-data=\"{{cell.data}}\"></lyte-yield> </lyte-td> </template> </lyte-tr> </template> </lyte-tbody> </lyte-table-structure> </template> </lyte-table> </div> <template is=\"if\" value=\"{{expHandlers(ltPropFilters,'&amp;&amp;',renderFilter)}}\"><template case=\"true\"> <lyte-list-filter lt-prop=\"{{ltPropFilter}}\" lt-prop-format=\"{{ltPropFormat}}\" lt-prop-conditions=\"{{lbind(conditions)}}\" lt-prop-any=\"{{lbind(any)}}\" lt-prop-show=\"{{lbind(ltPropShowFilters)}}\" lt-prop-fields=\"{{headerData}}\" lt-prop-content=\"{{ltPropContent}}\" on-condition-change=\"{{method('filter')}}\" on-picklist-construct=\"{{method('picklistData')}}\" fetch-more-data=\"{{method('fetchMoreData')}}\" on-custom-filter-reset=\"{{method('customReset')}}\" on-before-filter-open=\"{{method('beforeOpen')}}\" on-before-filter-close=\"{{method('beforeClose')}}\"> <template is=\"registerYield\" yield-name=\"lyte-custom-filter\" from-parent=\"\"></template> </lyte-list-filter> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[1,2]},{"type":"if","position":[1,2],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"registerYield","position":[1,1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1,1]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[2]},{"type":"if","position":[2],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"text","position":[1,0]},{"type":"componentDynamic","position":[1]},{"type":"attr","position":[3,1]},{"type":"componentDynamic","position":[3,1]},{"type":"componentDynamic","position":[3]}]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[3]},{"type":"if","position":[3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","dynamicValue":"showConditions"}}},{"type":"attr","position":[1,1]},{"type":"forIn","position":[1,1],"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,1,0]},{"type":"text","position":[1,3,1,0]},{"type":"attr","position":[1,3,3]},{"type":"if","position":[1,3,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[1,0]}]},"false":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"text","position":[1,0]}]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[1,3,5]}]}},"default":{}}]}]}},"default":{}},{"type":"attr","position":[5,1]},{"type":"registerYield","position":[5,1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"concat","args":["'width:'","overallWidth"]}}}},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"listStyle","args":["item"]}}}},{"type":"attr","position":[1,1]},{"type":"if","position":[1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"if","position":[0],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[1,2]},{"type":"if","position":[1,2],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}}]}]}},"default":{}},{"type":"attr","position":[2]},{"type":"if","position":[2],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","dynamicValue":"editStyle"}}},{"type":"registerYield","position":[1,1],"dynamicNodes":[]},{"type":"registerYield","position":[1,3],"dynamicNodes":[]},{"type":"componentDynamic","position":[1]}]}},"default":{}},{"type":"attr","position":[4,1,1,1]},{"type":"for","position":[4,1,1,1],"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"listStyle","args":["cell.data"]}}}},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"if","position":[1,1,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"insertYield","position":[1]}]},"false":{"dynamicNodes":[{"type":"text","position":[1,0]}]}},"default":{}},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}},{"type":"attr","position":[1,4]},{"type":"if","position":[1,4],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]}]}},"default":{}},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[4,1,1]},{"type":"componentDynamic","position":[4,1]},{"type":"attr","position":[4,3]},{"type":"attr","position":[4,3,1]},{"type":"for","position":[4,3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"insertYield","position":[1,1]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[1]}]},{"type":"componentDynamic","position":[4,3]},{"type":"componentDynamic","position":[4]}]},{"type":"componentDynamic","position":[5,1]},{"type":"attr","position":[7]},{"type":"if","position":[7],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"registerYield","position":[1,1],"dynamicNodes":[]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropContent","ltPropRenderContent","ltPropHeader","ltPropTable","ltPropText","ltPropCustomUtils","ltPropData","ltPropSubHeaders","ltPropColumnChooser","ltPropPopover","ltPropFilter","ltPropFormat","ltPropEdit","ltPropEditMode","ltPropEditYield","ltPropSortProperty","ltPropFilters","ltPropShowFilters","ltPropDisplayFilters","ltPropCaseSensitive","ltPropSearch","ltPropInput","ltPropSearchValue","ltPropMinlength","ltPropMethod","ltPropColumnChooserShow","ltPropHeaderYield","ltPropFakeHeaderYield","headerData","fakeHeaderData","overallWidth","editStyle","isActive","cellData","rowData","selectedRow","selectedCell","originalRow","rowElement","renderFilter","conditions","showConditions"],


	init : function(){
		if( this.construct_fake() ){
			this.call_modify();
		} else {
			this.construct_content();
		}
	},

	head_obs : function(){
		this.init();
	}.observes( 'ltPropHeader' ),

	call_modify : function( __bool ){
		var __data = this.data;
		this.modify_content( __data.conditions, __data.any, __bool );
	},

	didConnect : function(){
		var $node = this.$node,
		table = $node.getElementsByTagName( 'lyte-table' )[ 0 ];

		[ 'removeRow', 'insertRow', 'scrollToRecord' ].forEach( function( item ){
			$node[ item ] = table[ item ].bind( table );
		});
	},

	content_obs : function(){
		this.call_modify();
	}.observes( 'ltPropContent', 'ltPropSearchValue' ),

	ins_del_obs : function( arg ){
		this.call_modify( true );
	}.observes( 'ltPropContent.[]' ),

	construct_content : function(){
		var __data = this.data,
		content = __data.ltPropContent,
		final = [];

		content.forEach( function( item, index ){
			final.push({
				data : item,
				rowIndex : index
			});
		});

		this.setData( 'ltPropRenderContent', final );
	},

	construct_fake : function(){
		var __data = this.data,
		header = __data.ltPropHeader,
		fake = [],
		modified = [],
		overall = 0,
		columnChooser = __data.ltPropColumnChooser,
		hidden = 0,
		has_sort;

		header.forEach( function( item, index ){

			if( columnChooser && !( item.columnChooser || { selected : true } ).selected ){
				return hidden++;
			}

			var obj = {},
			sum = 0,
			resizable = true;

			obj.data = item;

			item.children.forEach( function( item ){
				
				has_sort = has_sort || !!( item.sortStatus = item.sortStatus || "" );

				modified.push({
					data : item,
					parentIndex : index - hidden
				});
				sum += item.width;

				resizable = resizable && item.resizable;
			});
			
			obj.width = sum;
			overall += sum;

			obj.resizable = resizable;

			fake.push( obj );
		});

		this.setData({
			fakeHeaderData : fake,
			headerData : modified,
			overallWidth : overall + 'px'
		});

		return has_sort;
	},

	data : function(){

		var __array = "array",
		__string = "string",
		__boolean = "boolean",
		__object = "object",
		__number = "number";

		return {

			/**
			 * @componentProperty { array } ltPropContent
			 * @default []
			 * @version 3.64.0
			 */

			ltPropContent : Lyte.attr( __array, { default : [] } ),
			/**
			 * @componentProperty { array } ltPropRenderContent
			 * @default []
			 * @version 3.86.0
			 */

			ltPropRenderContent : Lyte.attr( __array, { default : [] } ),
			/**
			 * @componentProperty { array } ltPropHeader
			 * @default []
			 * @version 3.64.0
			 */
			ltPropHeader : Lyte.attr( __array, { default : [] } ),
			/**
			 * @typedef tableDef
			 * @property {boolean} infiniteScroll=true
			 * @property {boolean} preventScrollabar=false
			 * @property {number} contentLength=25
			 * @property {boolean} stickyTable=true
			 * @property {boolean} columnSortable=true
			 */
			/**
			 * @componentProperty { tableDef } ltPropTable
			 * @version 3.64.0
			 */
			ltPropTable : Lyte.attr( __object, { default : { 
					infiniteScroll : true,
					preventScrollbar : false, 
					contentLength : 25,
					stickyTable : true,
					columnSortable : true
				}
			}),

			/**
			 * @typedef textDef
			 * @property {string} columnChooser=Choose columns
			 */

			/**
			 * @componentProperty { textDef } ltPropText
			 * @version 3.86.0
			 */

			ltPropText : Lyte.attr( __object, { default : {
				columnChooser : "Choose Columns"
			} } ),

			/**
			 * @componentProperty { boolean } ltPropCustomUtils=false
			 * @version 3.86.0
			 */

			ltPropCustomUtils : Lyte.attr( __boolean, { default : false } ),

			ltPropData : Lyte.attr( __array, { default : [] } ),
			// ltPropSelected : Lyte.attr( __array, { default : [] } ),
			/**
			 * @componentProperty { boolean } ltPropSubHeaders=false
			 * @version 3.64.0
			 */
			ltPropSubHeaders : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropColumnChooser=false
			 * @version 3.64.0
			 */
			ltPropColumnChooser : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { string } ltPropPopover='{}'
			 * @component lyte-popover
			 * @version 3.64.0
			 */
			ltPropPopover : Lyte.attr( __string, { default : '{}' } ),
			/**
			 * @componentProperty { string } ltPropFilter='{}'
			 * @version 3.64.0
			 */
			ltPropFilter : Lyte.attr( __string, { default : '{}' } ),
			/**
			 * @componentProperty { string } ltPropFormat='MM-DD-YYYY'
			 * @version 3.64.0
			 */
			ltPropFormat : Lyte.attr( __string, { default : "MM-DD-YYYY" } ),
			/**
			 * @componentProperty { boolean } ltPropEdit=false
			 * @version 3.64.0
			 */
			ltPropEdit : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropEditMode=false
			 * @version 3.64.0
			 */
			ltPropEditMode : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropEditYield=false
			 * @version 3.64.0
			 */
			ltPropEditYield : Lyte.attr( __boolean, { default : false } ),

			/**
			 * @componentProperty { string } ltPropSortProperty='prop'
			 * @version 3.64.0
			 */
			ltPropSortProperty : Lyte.attr( __string, { default : "prop" } ),
			/**
			 * @componentProperty { boolean } ltPropFilters = false
			 * @version 3.64.0
			 */
			ltPropFilters : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropShowFilters=false
			 * @version 3.64.0
			 */
			ltPropShowFilters : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropDisplayFilters=false
			 * @version 3.64.0
			 */
			ltPropDisplayFilters : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropCaseSensitive=false
			 * @version 3.64.0
			 */
			ltPropCaseSensitive : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropSearch=false
			 * @version 3.64.0
			 */
			ltPropSearch : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { string } ltPropInput='{"placeholder" : "Search", "closeIcon" : true, "appearance": "box"}'
			 * @component lyte-input
			 * @version 3.64.0
			 */
			ltPropInput : Lyte.attr( __string, { default : '{"placeholder" : "' + _lyteUiUtils.i18n( 'search', 'listview', "Search" ) + '", "closeIcon" : true, "appearance": "box"}' } ),
			/**
			 * @componentProperty { string } ltPropSearchValue=''
			 * @version 3.86.0
			 */
			ltPropSearchValue : Lyte.attr( __string, { default : "" } ),
			/**
			 * @componentProperty { number } ltPropMinlength=0
			 * @version 3.64.0
			 */
			ltPropMinlength: Lyte.attr( __number, { default : 0 } ),
			/**
			 * @componentProperty { startsWith|endsWith|contains } ltPropMethod='contains'
			 * @version 3.64.0
			 */
			ltPropMethod : Lyte.attr( __string, { default : "contains" } ),
			/**
			 * @componentProperty { boolean } ltPropColumnChooserShow=false
			 * @version 3.86.0
			 */
			ltPropColumnChooserShow : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropHeaderYield=false
			 * @version 3.86.0
			 */
			ltPropHeaderYield : Lyte.attr( __boolean, { default : false } ),
			/**
			 * @componentProperty { boolean } ltPropFakeHeaderYield=false
			 * @version 3.86.0
			 */
			ltPropFakeHeaderYield : Lyte.attr( __boolean, { default : false } ),

			headerData : Lyte.attr( __array, { default : [] } ),
			fakeHeaderData : Lyte.attr( __array, { default : [] } ),
			overallWidth : Lyte.attr( __string, { default : '0px' } ),

			editStyle : Lyte.attr( __string, { default : "" } ),
			isActive : Lyte.attr( __string, { default : '' } ),

			cellData : Lyte.attr( __object ),
			rowData : Lyte.attr( __object ),
			selectedRow : Lyte.attr( __number ),
			selectedCell : Lyte.attr( __number ),
			originalRow : Lyte.attr( __number ),
			rowElement : Lyte.attr( __object ),

			renderFilter : Lyte.attr( __boolean, { default : false } ),

			conditions : Lyte.attr( __object, { default : {} } ),
			showConditions : Lyte.attr( __string, { default : "display:none;" } )
		}
	},

	didDestroy : function(){
		this.data.rowElement = void 0;
	},

	filt_obs : function( arg ){
		if( arg.newValue ){
			this.setData( 'renderFilter', true );
		}
	}.observes( 'ltPropShowFilters' ),

	fix_unfix : function( cell, __add ){

		if( !this.data.ltPropSubHeaders ){
			return;
		}

		var __index = parseInt( cell.getAttribute( 'parent_index' ) ),
		__elem = this.$node.getElementsByClassName( 'lyteListFakeHeader' )[ 0 ];

		__elem.children[ __index ].classList[ __add ]( 'lyteListFixed' );
	},

	execute : function( cb, args ){
		if( this.getMethods( cb ) ){
			args = Array.from( args );
			args.unshift( cb ); 
			this.executeMethod.apply( this, args );
		}
	},

	removeHeader : function( item, ingore_scroll ){
		var __data = this.data,
		headerData = __data.headerData,
		index = headerData.findIndex( function( __item ){
			return item.children.indexOf( __item.data ) != -1;
		}),
		current_data = headerData[ index ],
		remove_index = current_data.parentIndex,
		fakeHeaderData = __data.fakeHeaderData,
		original_data = fakeHeaderData[ remove_index ],
		remove_length = original_data.data.children.length,
		__length = headerData.length - remove_length,
		Lc = Lyte.arrayUtils,
		removeAt = 'removeAt';

		ingore_scroll && this.$node.getElementsByTagName( 'lyte-table' )[ 0 ].scrollTable( 0, 0 );

		Lc( fakeHeaderData, removeAt, remove_index, 1 );
		Lc( headerData, removeAt, index, remove_length );
		
		ingore_scroll && Lc( __data.ltPropHeader, removeAt, remove_index, 1 );

		for( var i = index; i < __length; i++ ){
			var cur = headerData[ i ];
			Lyte.objectUtils( cur, 'add', 'parentIndex', cur.parentIndex - 1 );
		}

		this.setData( 'overallWidth', ( parseFloat( __data.overallWidth ) - original_data.width ) + 'px' );

		return original_data;
	},

	addHeader : function( item, index, ingore_scroll ){
		var __data = this.data,
		fakeHeaderData = __data.fakeHeaderData,
		sum = 0,
		inner = [],
		obj = {
			data : item
		},
		resizable = true,
		header = __data.headerData,
		insertAt = 0,
		fake_insert = 0,
		ltPropHeader = __data.ltPropHeader,
		Lc = Lyte.arrayUtils,
		__insertAt = 'insertAt';

		for( var i = 0; i < index; i++ ){

			var __item = ltPropHeader[ i ];

			if( __data.ltPropColumnChooser && !( __item.columnChooser || { selected : true } ).selected ){
				continue;
			}

			insertAt += __item.children.length;
			fake_insert++;
		}

		item.children.forEach( function( __item ){
			inner.push({
				parentIndex : fake_insert,
				data : __item
			});
			sum += __item.width;

			resizable = resizable && __item.resizable;
		});

		obj.width = sum;
		obj.resizable = resizable;

		!ingore_scroll && this.$node.getElementsByTagName( 'lyte-table' )[ 0 ].scrollTable( 0, 0 );

		Lc( fakeHeaderData, __insertAt, fake_insert, obj );
		Lc( header, __insertAt, insertAt, inner );
		
		ingore_scroll && Lc( ltPropHeader, __insertAt, fake_insert, obj.data );

		var __length = header.length,
		ns = "overallWidth";

		for( var i = insertAt + inner.length; i < __length; i++ ){
			var cur = header[ i ];
			Lyte.objectUtils( cur, 'add', 'parentIndex', cur.parentIndex + 1 );
		}

		this.setData( ns, ( parseFloat( __data[ ns ] ) + sum ) + 'px' );
	},

	modify_content : function( conditions, any, maintain_scroll ){
		var __data = this.data,
		content = __data.ltPropContent,
		filtered = this.do_filter( content, conditions, any ),
		headerData = __data.headerData.filter( function( item ){
			return !!item.data.sortStatus;
		})[ 0 ],
		table;

		if( maintain_scroll ){
			table = this.$node.getElementsByTagName( 'lyte-table' )[ 0 ];			
			maintain_scroll = Math.min( content.length, table.component._boundary.top );
		}

		if( headerData ){
			this.do_sort( headerData, filtered, headerData.data.sortStatus == "lyteListAsc" );
		} else {
			this.reset_table( filtered )
		}

		if( table ){
			table.scrollToRecord( maintain_scroll );
		}
	},

	do_search : function( item, search_value ){
		var __data = this.data,
		method = __data.ltPropMethod,
		caseSensitive = __data.ltPropCaseSensitive == false;

		for( var key in item ){

			var __value = item[ key ] || '';

			if( typeof __value != 'object' ){
				__value = [ __value ];
			}


			var __length = __value.length;

			for( var i = 0; i < __length; i++ ){
				var value = ( __value[ i ] || '' ).toString(),
				to_ret;

				if( caseSensitive ){
					value = value.toLowerCase();
				}

				switch( method ){
					case 'startsWith' : {
						to_ret = value.indexOf( search_value ) == 0;
					}
					break;
					case 'endsWith' : {
						to_ret = value.lastIndexOf( search_value ) + search_value.length == value.length;
					}
					break;
					default : {
						to_ret = value.indexOf( search_value ) != -1;
					}
				}

				if( to_ret ){
					return true;
				}
			}
		}

		return false;
	},

	text_filter : function( __cur, caseSensitive, __value ){
		var condition_value = __cur.input,
		to_push = false;

		__value = __value || "";

		if( typeof __value != "object" ){
			__value = [ __value ];
		}

		if( caseSensitive ){
			condition_value = condition_value.toLowerCase();
		}

		__value.every( function( item ){

			item = ( item || "" ).toString();

			if( caseSensitive ){
				item = item.toLowerCase();
			}

			switch( __cur.value ){
				case 'none' : {
					return true;
				}
				break;
				case "set" : {
					to_push = !!item;
				}
				break;
				case 'not_set' : {
					to_push = !item;
				}
				break;
				case 'equal' : {
					to_push = item == condition_value;
				}
				break;
				case 'not_equal' : {
					to_push = item != condition_value;
				}
				break;
				case 'begins_with' : {
					to_push = item.indexOf( condition_value ) == 0;
				}
				break;
				case 'contains' : {
					to_push = item.indexOf( condition_value ) != -1;
				}
				break;
				case 'does_not_contains' : {
					to_push = item.indexOf( condition_value ) == -1;
				}
				break;
			}
			return !to_push;
		});	

		return to_push;
	},

	boolean_filter : function( __cur, caseSensitive, modified ){
		return __cur.isNeg != modified;
	},

	number_filter : function( __cur, caseSensitive, modified ){
		var __start = parseFloat( __cur.start ),
		__end = parseFloat( __cur.end ),
		value = parseFloat( __cur.input ),
		end_diff = __cur.end_diff,
		start_diff = __cur.start_diff,
		isNeg = __cur.isNeg,
		to_push = ( __start - start_diff ) <= modified && modified <= ( __end + end_diff );

		if( isNeg ){
			to_push = !to_push;
		}

		return to_push;
	},

	date_filter : function( __cur, caseSensitive, modified ){
		var fn = function( str ){
			return typeof str == "string" ? new Date( str ).getTime() : str
		},
		__start = fn( __cur.start ),
		__end = fn( __cur.end ),
		__value = new Date( modified ).getTime(),
		return_value = __start <= __value && __value <= __end;

		if( __cur.isNeg ){
			return_value = !return_value;
		}

		return return_value;
	},

	multiselect_filter : function( __cur, caseSensitive, modified ){
		var to_push = false;

		if( typeof modified != "object" ){
			modified = [ modified ];
		}

		__cur.selected.every( function( item ){
			return !( to_push = ( modified.indexOf( item.value ) != -1 ) );
		});

		return to_push;
	},

	custom_filter : function( __cur, caseSensitive, modified, fieldName ){
		var cb = "onCustomFilterValidation";

		/**
		 * @method onCustomFilterValidation
		 * @version 3.86.0
		 */

		if( this.getMethods( cb ) ){
			return this.executeMethod( cb, __cur, modified, fieldName, this.$node );
		}
		
		return this.text_filter( __cur, caseSensitive, modified );
	},

	do_filter : function( content, conditions, any ){
		var final = [],
		__this = this,
		__data = __this.data,
		caseSensitive = __data.ltPropCaseSensitive == false,
		search_value = __data.ltPropSearchValue,
		minlength = __data.ltPropMinlength,
		search = __data.ltPropSearch && search_value && search_value.length >= minlength,
		headerData = __data.headerData.map( function( item ){
			return item.data;
		}),
		cb = "onDataConversion",
		modified_content = content;

		if( search && caseSensitive ){
			search_value = search_value.toLowerCase();
		}

		/**
		 * @method onDataConversion
		 * @version 3.86.0
		 */

		if( __this.getMethods( cb ) ){
			modified_content = __this.executeMethod( cb, content, headerData, __this.$node ) || content;
		}

		content.forEach( function( item, index ){
			var to_push = true,
			modified = modified_content[ index ];

			if( search ){
				if( !( to_push = __this.do_search( modified, search_value ) ) ){
					return;
				}
			}

			for( var key in conditions ){
				var __cur = conditions[ key ];

				if( !__cur.isValid ){
					continue;
				}

				if( ( ( to_push = __this[ __cur.type + '_filter' ]( __cur, caseSensitive, modified[ key ], key ) ) == void 0 ) ){
					continue;
				}

				if( ( any && to_push ) || ( !any && !to_push ) ){
					break;
				}
			}

			if( to_push ){
				final.push({
					data : item,
					rowIndex : index
				});
			}

		});

		return final;
	},

	call_select : function( cb, args ){
		args = Array.from( args );
		args.unshift( cb );

		return this.getMethods( cb ) && this.executeMethod.apply( this, args );
	},

	methods : {

		beforeselect : function(){
			var args = arguments;
			
			if( $L( args[ 1 ].target ).hasClass( 'lyteListResizeHandler' ) ){
				return false;
			}

			return this.call_select( 'onBeforeSelect', args );
		},

		onselect : function(){
			return this.call_select( 'onSelect', arguments );
		},

		beforeDrop : function( selectedCell, next, startIndex, endIndex, header, evt ){
			var __data = this.data,
			cb;

			if( startIndex == endIndex ){
				return false;
			}

			// if( __data.ltPropSubHeaders ){
				var headerData = __data.headerData,
				fakeHeaderData = __data.fakeHeaderData,
				fn = function( __cell ){
					return Number( __cell.getAttribute( 'parent_index' ) );
				},
				parent_index = fn( selectedCell ),
				other_parent_index = fn( next );

				if( this.getMethods( cb = "onBeforeDrop" ) && this.executeMethod( cb, selectedCell, next, parent_index, other_parent_index, evt, this.$node ) == false ){
					return false;
				}

				var removed_data = this.removeHeader( fakeHeaderData[ parent_index ].data, true );

				this.addHeader( removed_data.data, other_parent_index, true );

				this.getMethods( cb = "onDrop" ) && this.executeMethod( cb, selectedCell, next, parent_index, other_parent_index, evt, this.$node );
			// }
			return false;
		},

		fakeCreate : function( fake_cell, cell, table ){
			var __data = this.data,
			index = Number( cell.getAttribute( 'index' ) ),
			cell_data = __data.headerData[ index ],
			parent_index = cell.getAttribute( 'parent_index' ),
			parent_data = __data.ltPropSubHeaders ? __data.fakeHeaderData[ Number( parent_index ) ] : void 0,
			__children = parent_data ? parent_data.data.children : [];

			if( __children.length > 1 ){

				var current_index = __children.indexOf( cell_data.data ),
				cells = cell.parentNode.children,
				parent_cell = this.$node.getElementsByClassName( 'lyteListFakeCell' )[ parent_index ],
				translate = 0;

				for( var i = 0; i < current_index; i++ ){
					var prev_cell = cells[ index - current_index + i ];
					translate += parseFloat( prev_cell.style.width );
				}

				$L( fake_cell ).css({
					width : parent_cell.style.width,
					left : -translate + 'px'
				}).text( parent_cell.textContent );
			}
		},

		beforeOpen : function( data, condition, node ){
			var cb = "onBeforeFilterOpen";
			return this.getMethods( cb ) && this.executeMethod( cb, data, condition, node, this.$node );
		},

		beforeClose : function( data, condition, node ){
			var cb = "onBeforeFilterClose";
			return this.getMethods( cb ) && this.executeMethod( cb, data, condition, node, this.$node );
		},

		customReset : function( data, condition, node ){
			var cb = "onCustomFilterReset";
			return this.getMethods( cb ) && this.executeMethod( cb, data, condition, node, this.$node );
		},

		editBlur : function( evt, __value, cellData, rowData, cellIndex, rowIndex ){
			var r_target = evt.relatedTarget,
			cb = "onEditBlur",
			__data = this.data,
			$node = this.$node;

			if( !cellData ){
				return;
			}

			this.getMethods( cb ) && this.executeMethod( cb, cellIndex, rowIndex, cellData, rowData, __value, $node );

			if( r_target && $node.contains( r_target ) ){
				return;
			}

			$node.ltProp( 'editMode', false );
			this.focus();
		},

		fetchMoreData : function( first, data, picklistOptions ){
			var cb = 'fetchMoreData';

			return this.getMethods( cb ) && this.executeMethod( cb, first, data, picklistOptions );
		},

		picklistData : function( value, cell_data, old_value ){
			var cb = 'onPicklistConstruct';
			return this.getMethods( cb ) && this.executeMethod( cb, value, cell_data, old_value );
		},	

		scrollEnd : function(){
			var args = Array.from( arguments ),
			cb = "onScrollEnd";

			args.unshift( cb );
			return this.getMethods( cb ) && this.executeMethod.apply( this, args );
		},

		fix : function( cell ){
			this.fix_unfix( cell, 'add' );
		},

		unfix : function( cell ){
			this.fix_unfix( cell, 'remove' );
		},

		unchecked : function( item ){
			this.removeHeader( item );
			this.execute( "onChecked", arguments );
		},

		checked : function( item, index ){
			this.addHeader( item, index );
			this.execute( "onUnchecked", arguments );
		},

		filter : function( conditions, any ){
			this.modify_content( conditions, any );

			var has_valid = false;
			for( var key in conditions ){
			    if( conditions[ key ].isValid ){
			        has_valid = true;
			        break;
			    }
			}

			this.setData( 'showConditions', has_valid ? '' : 'display:none;' );
		}
	},

	resize_move : function( evt ){

		evt.type && evt.preventDefault();

		evt = ( evt.touches || [ evt ] )[ 0 ];

		this.__moved = true;

		var clientX = evt.clientX,
		cell = this.__cell,
		xInc = clientX - this.__clientX,
		__index = parseInt( cell.getAttribute( 'parent_index' ) ),
		fake_cell,
		list,
		fake_data = this.data.fakeHeaderData[ __index ],
		cells = Array.from( this.$node.getElementsByTagName( 'lyte-th' ) ).filter( function( item ){
			return parseInt( item.getAttribute( 'parent_index' ) ) == __index;
		}),
		call_raf,
		__bcr = this.$node.getBoundingClientRect(),
		is_rtl = _lyteUiUtils.getRTL(),
		scroll_elem = this.$node.getElementsByClassName( 'lyteTableScroll' )[ 0 ],
		table = scroll_elem.parentNode.component,
		rightFixed = table._rightFixedWidth || 0,
		leftFixed = table._fixedWidth || 0,
		fixedClass = 'lyteFixedColumn';

		if( cell.classList.contains( 'lyteListFakeCell' ) ){
			fake_cell = cell;
			if( fake_data.data.children ){
				list = cells;
			} else {
				cell = cells[ 0 ];
			}
		} else {
			fake_cell = this.data.ltPropSubHeaders ? this.$node.getElementsByClassName( 'lyteListFakeHeader' )[ 0 ].children[ __index ] : void 0;
		}

		if( xInc > 0 && cell.classList.contains( fixedClass ) ){
			var sum = 0;

			Array.from( this.$node.querySelectorAll( 'lyte-th.' + fixedClass ) ).forEach( function( item ){
				sum += parseFloat( item.style.width );
			});

			if( sum + xInc + 150 > __bcr.width ){
				xInc = Math.max( 0, __bcr.width - 150 - sum );
			}
		}

		if( xInc > 0 && Math.abs( clientX - ( __bcr[ is_rtl ? 'left' : 'right' ] - rightFixed ) ) <= 1 ){
			call_raf = 1;
		} else if( xInc < 0 && Math.abs( clientX - ( __bcr[ is_rtl ? 'right' : 'left' ] + leftFixed ) ) <= 1 ){
			call_raf = -1;
		}

		var fn = function( __cell ){
			var __style = __cell.style,
			__minWidth = parseFloat( __style.minWidth ),
			__maxWidth = parseFloat( __style.maxWidth ),
			__width = parseFloat( __style.width ),
			__newWidth = __width + xInc;

			if( __newWidth > __maxWidth ){
				xInc = __width - __maxWidth;
				__newWidth = __maxWidth;
			}

			if( __newWidth < __minWidth ){
				xInc =  __minWidth - __width;
				__newWidth = __minWidth;
			}

			return __newWidth;
		},
		raf = window.requestAnimationFrame,
		sL = scroll_elem ? scroll_elem.scrollLeft : 0;

		if( list ){
			cells.forEach( fn );

			var new_inc = xInc / cells.length;

			cells.forEach( function( item ){
				var __style = item.style;
				__style.width = ( parseFloat( __style.width ) + new_inc ) + 'px';
			});
		} else {
			cell.style.width = fn( cell ) + 'px';
		}

		fake_cell ? fake_cell.style.width = ( parseFloat( fake_cell.style.width ) + xInc ) + 'px' : void 0;
		this.setData( 'overallWidth', parseFloat( this.data.overallWidth ) + xInc + 'px' );

		window.cancelAnimationFrame( this._raf );

		if( call_raf ){
			scroll_elem.scrollLeft = sL + 10 * call_raf;
			this._raf = raf( this.resize_move.bind( this, { clientX : clientX } ) );

			clientX -= ( 10 * call_raf );
		}

		this.__clientX = clientX;

		table._setLeftForInterSection();
	},

	update_width : function( cell, evt ){

		var is_fake;

		if( cell.classList.contains( 'lyteListFakeCell' ) ){
			is_fake = true;
		}

		var is_sub = this.data.ltPropSubHeaders,
		parent_index = parseFloat( cell.getAttribute( 'parent_index' ) ),
		fake_element = is_sub ? ( is_fake ? cell : this.$node.getElementsByClassName( 'lyteListFakeHeader' )[ 0 ].children[ parent_index ] ) : void 0,
		fake_width = is_sub ? parseFloat( fake_element.style.width ) : void 0,
		__data = this.data,
		fakeData = is_sub ? __data.fakeHeaderData[ parent_index ] : void 0,
		headerData = __data.headerData,
		cb = "onResizeEnd";

		Array.from( this.$node.getElementsByTagName( 'lyte-th' ) ).forEach( function( item ){
			if( ( is_fake && parseFloat( item.getAttribute( 'parent_index' ) ) == parent_index ) || ( !is_fake && ( item == cell ) ) ){
				Lyte.objectUtils( headerData[ parseFloat( item.getAttribute( 'index' ) ) ].data, 'add', 'width', parseFloat( item.style.width ) );
				
				this.getMethods( cb ) && this.executeMethod( cb, evt, item, this.$node );
			}
		}.bind( this ) );

		fakeData && Lyte.objectUtils( fakeData, 'add', 'width', fake_width );
	},

	resize_up : function( evt ){ 
		var doc = document,
		__remove = "removeEventListener",
		isTch = evt.type == "touchend",
		__cell = this.__cell;

		doc[ __remove ]( isTch ? 'touchmove' : 'mousemove', this.__move, true );
		doc[ __remove ]( isTch ? 'touchend' : 'mouseup', this.__up, true );

		if( this.__moved ){
			this.update_width( __cell, evt );

			window.cancelAnimationFrame( this._raf );
			delete this._raf;
			delete this.__moved;
		}

		delete this.__clientY;
		delete this.__cell;
		delete this.__move;
		delete this.__up;
	},

	positionEditElem : function(){

		clearTimeout( this.__timeout );

		this.__timeout = setTimeout( this.__positionEditElem.bind( this ) );
	},

	getSelectedCell : function( row, cell, table ){
		var data = this.data.ltPropData,
		index = data.findIndex( function( item ){
			return item.index == row;
		});

		if( index + 1 ){
			return table.getElementsByTagName( 'lyte-table-structure' )[ 0 ].children[ 1 ].children[ index ].children[ cell ];
		}
	},

	__positionEditElem : function(){
		var __this = this,
		__data = __this.data,
		row = __data.selectedRow,
		cell = __data.selectedCell,
		table = __this.$node.getElementsByTagName( 'lyte-table' )[ 0 ],
		comp = table.component,
		scrollDiv = comp.scrollDiv,
		fastdom = $L.fastdom,
		__cell = __this.getSelectedCell( row, cell, table );

		if( !__cell ){
			return;
		}

		var bcr = __cell.getBoundingClientRect(),
		scrollLeft = scrollDiv.scrollLeft,
		scrollTop = scrollDiv.scrollTop,
		scroll_bcr = scrollDiv.getBoundingClientRect(),
		is_rtl =  _lyteUiUtils.getRTL(),
		is_fixed_cell = __cell.classList.contains( 'lyteTableFixed' ),
		left = is_rtl ? 'right' : 'left',
		right = is_rtl ? 'left' : 'right',
		fake_header = table.getElementsByClassName( 'lyteListFakeHeader' )[ 0 ],
		header_cell = table.getElementsByTagName( 'lyte-th' )[ 0 ],
		header_hgt = header_cell ? header_cell.offsetHeight : 0,
		fake_header_hgt = fake_header ? fake_header.offsetHeight : 0,
		top_to = bcr.top - scroll_bcr.top + scrollTop,
		left_to = bcr[ left ] - scroll_bcr[ left ] + scrollLeft,
		left_miss = is_fixed_cell ? 0 : Math.max( 0, scroll_bcr[ left ] + ( comp._fixedWidth || 0 ) - bcr[ left ] ),
		right_miss = is_fixed_cell ? 0 : Math.max( 0, bcr[ right ] - scroll_bcr[ right ] + ( comp._rightFixedWidth || 0 ) ),
		top_miss = Math.max( 0, scroll_bcr.top + header_hgt + fake_header_hgt - bcr.top ),
		bottom_miss = Math.max( 0, bcr.bottom - scroll_bcr.bottom ),
		new_scroll_left,
		new_scroll_top;

		if( left_miss > right_miss ){
			new_scroll_left = scrollLeft - left_miss;
		} else if( right_miss > left_miss ){
			new_scroll_left = scrollLeft + right_miss;
		}

		if( top_miss > bottom_miss ){
			new_scroll_top = scrollTop - top_miss;
		} else if( bottom_miss > top_miss ){
			new_scroll_top = scrollTop + bottom_miss;
			table.style.setProperty( '--lyte-table-intersection', new_scroll_top + 'px' );
		}

		table.scrollTable( new_scroll_left, new_scroll_top );

		__this.setData( 'editStyle', 'width:' + bcr.width + 'px;height:' + bcr.height + 'px;top:' + top_to + 'px;' + left + ':' + left_to + 'px' );
		__this.focus();

	},

	focus : function(){
		var elem = this.$node.getElementsByClassName( 'lyteListEditElement' )[ 0 ];

		elem && window.requestAnimationFrame( function(){
			elem.focus();
			elem.select && elem.select();
		});
	},

	select_cell : function( cell ){

		var cellIndex = parseInt( cell.getAttribute( 'index' ) ),
		rowIndex = parseInt( cell.getAttribute( 'row-index' ) ),
		__data = this.data,
		cellData = __data.headerData[ cellIndex ].data;

		if( cellData.editable == false ){
			return;
		}

		document.activeElement.blur();

		var __row = cell.parentNode;

	 	this.setData({
			ltPropEditMode : false,
			isActive : "lyteListActive",
			selectedCell : cellIndex,
			selectedRow : rowIndex,
			originalRow : parseInt( __row.getAttribute( 'actual_index' ) ),
			cellData : cellData,
			rowData : __data.ltPropRenderContent[ rowIndex ].data,
			rowElement : __row
		});

		return true;

	},

	cellObs : function( arg ){
		var cells = this.$node.getElementsByTagName( 'lyte-th' ),
		className = 'lyteListColumnSelected';

		$L( cells[ arg.oldValue ] ).removeClass( className );
		$L( cells[ arg.newValue ] ).addClass( className );
		this.positionEditElem();
	}.observes( 'selectedCell' ),

	rowObs : function( arg ){
		this.positionEditElem();
	}.observes( 'selectedRow' ),

	editMode : function(){

		var cb = "onBeforeEdit",
		cb1 = "onEdit",
		__data = this.data,
		columnData = __data.cellData,
		rowData = __data.rowData,
		col_index = __data.selectedCell,
		row_index = __data.originalRow,
		args = [ cb, col_index, row_index, columnData, rowData, this.$node ];

		if( this.getMethods( cb ) && this.executeMethod.apply( this, args ) == false ){
			return;
		}

		document.activeElement.blur();
		this.setData( 'ltPropEditMode', true );

		args.shift();
		args.unshift( cb1 );

		this.getMethods( cb1 ) && this.executeMethod.apply( this, args );
	},

	deleteCell : function(){
		var data = this.data,
		cb = "onCellDelete";

		this.getMethods( cb ) && this.executeMethod( cb, data.selectedCell, data.originalRow, data.cellData, data.rowData, this.$node );
	},

	proceed_sel : function( cell ){
		var undef;

		if( cell && this.select_cell( cell ) ){
			return;
		}

		this.setData({
			ltPropEditMode : false,
			isActive : "",
			selectedCell : undef,
			selectedRow : undef,
			originalRow : undef,
			cellData : {},
			rowData : {},
			rowElement : void 0,
			editStyle : "visibility:hidden"
		});
	},

	keydown : function( evt, __this ){
		var keycode = _lyteUiUtils.getCorrectNumberCode( evt.keyCode ),
		__data = this.data;

		if( __this != evt.target ){
			if( /^13|27$/.test( keycode ) && __data.ltPropEditMode ){
				// this.__allow = true;
				this.setData( 'ltPropEditMode', false );
				// delete this.__allow;
			}
			return;
		}

		if( keycode == 9 ){
			if( evt.shiftKey ){
				keycode = 37;
			} else {
				keycode = 39;
			}
			evt.preventDefault();
		}

		switch( keycode ){
			case 37 : {
				this.setData( 'selectedCell', Math.max( 0, __data.selectedCell - 1 ) );
			}
			break;
			case 38 : {
				this.setData( 'selectedRow', Math.max( 0, __data.selectedRow - 1 ) );
			}
			break;
			case 39 : {
				this.setData( 'selectedCell', Math.min( __data.ltPropHeader.length - 1, __data.selectedCell + 1 ) );
			}
			break;
			case 40 : {
				this.setData( 'selectedRow', Math.min( __data.ltPropRenderContent.length - 1, __data.selectedRow + 1 ) );
			}
			break;
			case 13 : {
				this.editMode();
			}
			break;
			case 8 : 
			case 46 : {
				this.deleteCell();
			}
		}

		if( /3(7|8|9)|40/i.test( keycode ) ){
			var row = __data.selectedRow,
			cell = __data.selectedCell,
			table = this.$node.getElementsByTagName( 'lyte-table' )[ 0 ],
			cell_node = this.getSelectedCell( row, cell, table );
				
			this.setData( 'originalRow', parseInt( cell_node.parentNode.getAttribute( 'actual_index' ) ) );

			this.proceed_sel( cell_node );
		}
	},

	sort : function( index ){
		var __data = this.data,
		__headerData = __data.headerData,
		headerData = __headerData[ index ],
		content = __data.ltPropRenderContent.slice(),
		asc = 'lyteListAsc',
		__new = asc,
		fn = function(){
			__headerData.forEach( function( item, __index ){
				var __tobe = '';
				if( index == __index ){
					__tobe = __new;;
				}
				Lyte.objectUtils( item.data, 'add', 'sortStatus', __tobe );
			}.bind( this ) );
		}.bind( this );

		if( !headerData.data.sortable ){
			return;
		}

		if( headerData.data.sortStatus == __new ){
			__new = "lyteListDesc";
		}
		
		this.do_sort( headerData, content, __new == asc, void 0, fn );
	},

	is_same : function( arr1, arr2 ){
		if( arr1.length != arr2.length ){
			return;
		}
		
		var is_same = true;

		arr1.every( function( item, index ){
			var __cur = arr2[ index ];

			return is_same = ( ( item.rowIndex == __cur.rowIndex ) && item.data == __cur.data );
		});

		return is_same;
	},

	reset_table : function( arr ){

		if( this.is_same( arr, this.data.ltPropRenderContent ) ){
			return;
		}

		var table = this.$node.getElementsByTagName( 'lyte-table' )[ 0 ];

		if( table ){
			table.style.setProperty( '--lyte-table-intersection', '0px' );
			table.scrollTable( 0, 0 );
		}
		this.setData( 'ltPropRenderContent', arr );
		table && table.reset();
		this.proceed_sel();
	},

	do_sort : function( cell, content, isAsc, ignore_callback, __fn ){
			
		var cb = "onBeforeSort",
		ret;

		if( !ignore_callback && this.getMethods( cb ) && ( ret = this.executeMethod( cb, cell, isAsc, this.$node ) ) == false ){
			return;
		}

		__fn && __fn();

		var fn = this.reset_table.bind( this );

		if( ret ){
			if( ret.constructor == Array ){
				return fn( ret );
			} else if( ret.then ) {
				return ret.then( fn );
			}
		}

		var arr = content.slice(),
		__celldata = cell.data,
		__type = __celldata.dataType == "date",
		name = __celldata[ this.data.ltPropSortProperty ];

		content.sort( function( a, b ){
			var a_data = a.data[ name ],
			b_data = b.data[ name ];

			if( __type ){
				a_data = new Date( a_data ).getTime();
				b_data = new Date( b_data ).getTime();
			}

			if( isAsc ){
				return a_data < b_data ? -1 : 1;
			}
			return b_data < a_data ? -1 : 1;
		});

		fn( content );
	},

	call_row_click : function( item, _this, evt ){
		var cb = "onRowClick",
		__this = this;

		_this && __this.getMethods( cb ) && __this.executeMethod( cb, item, _this, evt, __this.$node );
	},

	edit_elem_click : function( evt ){
		var __this = this,
		__data = __this.data;

		setTimeout( function(){
			if( __data.ltPropEditMode ){
				return;
			}

			__this.call_row_click( __data.rowData, __data.rowElement, evt );
		}, 300);
	},

	actions : {

		yield_click : function( evt ){
			var __target = evt.target;

			if( /lyte-yield/i.test( __target.tagName ) ){
				this.edit_elem_click( evt );
			}
		},

		edit_elem_click : function( evt ){
			return this.edit_elem_click( evt ) && !1;
		},

		row_click : function( item, __this, evt ){
			return this.call_row_click( item.body.data, __this, evt ) && !1;
		},

		reset_filter : function( key ){
			this.$node.getElementsByTagName( 'lyte-list-filter' )[ 0 ].reset( key );
		},

		reset_sort : function( __cell ){
			Lyte.objectUtils( __cell.data, 'add', 'sortStatus', '' );
			this.reset_table( this.do_filter( this.data.ltPropContent, {} ) );
		},	

		sort : function( index ){
			this.sort( index );
		},

		keydown : function( evt, __this ){
			this.keydown( evt, __this );
		},

		dblclick : function( evt ){
			this.editMode();
		},

		mousedown : function( evt ){
			if( !this.data.ltPropEdit ){
				return;
			}

			setTimeout( this.proceed_sel.bind( this, evt.target.closest( 'lyte-td' ) ) );			
		},

		touchstart : function( evt ){
			var touches = evt.touches;

			if( touches.length > 1 ){
				return;
			}

			clearTimeout( this.__touchtime );

			this.__clickcount = ( this.__clickcount || 1 );

			this.__touchtime = setTimeout( function(){
				this.proceed_sel( touches[ 0 ].target.closest( 'lyte-td' ) );

				if( this.__clickcount >= 2 ){
					this.editMode();
				}
				delete this.__clickcount;
			}.bind( this ), 600 );
		},

		showPop : function(){
			this.setData( 'ltPropColumnChooserShow', true );
		},

		intersectionSet : function( cell, left, accumulatedWidth ){
			if( this.data.ltPropSubHeaders ){
				var __index = parseInt( cell.getAttribute( 'parent_index' ) ),
				__elem = this.$node.getElementsByClassName( 'lyteListFakeHeader' )[ 0 ];
				__elem.children[ __index ].style[ left ] = accumulatedWidth + 'px';
			}
		},

		resize : function( evt ){
			var target = evt.target,
			doc = document,
			__add = "addEventListener",
			isTch = evt.type == "touchstart",
			cb = "onResizeSelect";

			if( this.getMethods( cb ) && this.executeMethod( cb, evt, this.__cell, this.$node ) == false ){
				return;
			}

			this.__clientX = evt.clientX;
			this.__clientY = evt.clientY;

			this.__cell = target.closest( 'lyte-th,.lyteListFakeCell' );

			doc[ __add ]( isTch ? 'touchmove' : 'mousemove', this.__move = this.resize_move.bind( this ), true );
			doc[ __add ]( isTch ? 'touchend' : 'mouseup', this.__up = this.resize_up.bind( this ), true );

			evt.preventDefault();

			this.proceed_sel();
		}
	}
});

Lyte.Component.registerHelper( 'listStyle', function( __data ){
	var str = '',
	__width = __data.width,
	__minWidth = __data.minWidth || 50;

	if( __width != void 0 ){
		if( __width < __minWidth ){
			__width = __minWidth;
		}
		str += ( "width:" + __width + 'px;' );
	}

	// if( __minWidth != void 0 ){
		str += ( "min-width:" + __minWidth + 'px;' );
	// }

	if( __data.maxWidth != void 0 ){
		str += ( "max-width:" + __data.maxWidth + 'px;' );
	}

	return str;
});

Lyte.Component.registerHelper( 'isRowSelected', function( selected, current, __class ){
	return ( ( __class || '' ) + ' ' + ( selected == current ? 'lyteListRowSelected' : '' ) ).trim();
});

/**
 * @syntax Default
 * <lyte-listview1>
 *	  <template is = "registerYield" yield-name = "yield">
 *		<span>{{rowData[ cellData.prop ]}}</span>
 *	 </template>
 * </lyte-listview1>
 */

 /**
 * @syntax Custom filter
 * <lyte-listview1>
 *	  <template is = "registerYield" yield-name = "lyte-custom-filter">
 *		<input value="{{lbind(someLbindVariable)}}" onblur="{{action('someAction')}}">
 *	  </template>
 * </lyte-listview1>
 */

/**
 * @syntax Custom Edit yield
 * <lyte-listview1>
 *	  <template is = "registerYield" yield-name = "lyte-custom-edit-yield">
 *		<lyte-input class="lyteCustomEditElement lyteListviewEditElement" lt-prop-value="{{lbind(ltPropValue)}}"></lyte-input>
 *	  </template>
 * </lyte-listview1>
 */