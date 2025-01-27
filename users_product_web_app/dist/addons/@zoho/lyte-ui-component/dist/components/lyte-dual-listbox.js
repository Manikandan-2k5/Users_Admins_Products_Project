Lyte.Component.register("lyte-dual-listbox", {
_template:"<template tag-name=\"lyte-dual-listbox\" role=\"listbox\"> <div class=\"lyteListboxWrapper\"> <div class=\"lyteListboxLeftPanel lyteListboxPanels\" id=\"lyte_listbox_left_panel\" aria-label=\"left panel\" aria-multiselectable=\"true\" aria-orientation=\"vertical\" onfocus=\"{{action('focusPanel',this)}}\" onfocusout=\"{{action('blurPanel',this)}}\" aria-activedescendant=\"{{listboxLeftAriaDescendant}}\"> <lyte-search class=\"lyteListBoxSearch\" lt-prop-class=\"lyteListboxInput\" lt-prop-close-icon=\"true\" lt-prop-query-selector=\"{&quot;scope&quot; : &quot;.{{ltPropSearchScope}}&quot;, &quot;search&quot; : &quot;.lyteListBoxLeftElement&quot;, &quot;target&quot; : &quot;.lyteListBoxLeftElement&quot;}\" lt-prop-check-from-parent=\"true\" lt-prop-component=\"duallistbox\" lt-prop-trim=\"true\" on-search=\"{{method('onSearch')}}\"></lyte-search> <div class=\"lyteListboxleftElementWrap lyteListboxSortablePanels\"> <template is=\"for\" items=\"{{ltPropLeftData}}\" item=\"item\" index=\"index\"> <template is=\"if\" value=\"{{item.childrenList}}\"><template case=\"true\"> <div class=\"lyteListBoxLeftWrap {{if(expHandlers(item.childrenList.length,'===',0),'lyteLBoxDisabledParent','')}} {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'par','left')}}\"> <div class=\"lyteListBoxLeftElement lyteListBoxLeftParentElement lyteLeftLvl1 {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'child','left')}} {{if(expHandlers(item.childrenList.length,'===',0),'lyteLBoxDisabledParent','')}}\" ondblclick=\"{{action('moveElementRight',this,'doubleClick')}}\" onmouseup=\"{{action('elementFN',this,event)}}\" index=\"{{lyteListBoxIndex(index)}}\" dom-index=\"\" id=\"\" role=\"option\" aria-selected=\"false\" aria-owns=\"{{lyteListBoxChildIndexId(index)}}\"> <lyte-lb-collapse onclick=\"{{action('collapseFunction',this,'left')}}\"></lyte-lb-collapse> <lyte-yield class=\"lyteListboxYield\" yield-name=\"leftWidget\" left-widget-value=\"{{item}}\"></lyte-yield> <lyte-lb-add class=\"lyteLbAdd\" onclick=\"{{action('addElementToRight',this)}}\"></lyte-lb-add> </div> <div class=\"lyteLBLeftChildWrap\" id=\"{{lyteListBoxChildIndexId(index)}}\"> <template is=\"for\" items=\"{{item.childrenList}}\" item=\"childitem\" index=\"ind\"> <div class=\"lyteListBoxLeftWrap lyteLeftLvl2Wrap {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'par','left')}}\"> <div class=\"lyteListBoxLeftElement lyteLeftLvl2 {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'child','left')}}\" ondblclick=\"{{action('moveElementRight',this,'doubleClick')}}\" onmouseup=\"{{action('elementFN',this,event)}}\" onmousedown=\"{{action('elementFN',this,event)}}\" index=\"{{lyteListBoxIndex(ind,index)}}\" dom-index=\"\" id=\"\" role=\"option\" aria-selected=\"false\"> <lyte-yield class=\"lyteListboxYield\" yield-name=\"leftWidget\" left-widget-value=\"{{childitem}}\"></lyte-yield> <lyte-lb-add class=\"lyteLbAdd\" onclick=\"{{action('addElementToRight',this)}}\"></lyte-lb-add> </div> </div> </template> </div> </div> </template><template case=\"false\"> <div class=\"lyteListBoxLeftWrap {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'par','left')}}\"> <div class=\"lyteListBoxLeftElement lyteLeftLvl1 {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'child','left')}}\" ondblclick=\"{{action('moveElementRight',this,'doubleClick')}}\" onmouseup=\"{{action('elementFN',this,event)}}\" onmousedown=\"{{action('elementFN',this,event)}}\" index=\"{{lyteListBoxIndex(index)}}\" dom-index=\"\" id=\"\" role=\"option\" aria-selected=\"false\"> <lyte-yield class=\"lyteListboxYield\" yield-name=\"leftWidget\" left-widget-value=\"{{item}}\"></lyte-yield> <lyte-lb-add class=\"lyteLbAdd\" onclick=\"{{action('addElementToRight',this)}}\"></lyte-lb-add> </div> </div> </template></template> </template> <template is=\"if\" value=\"{{noResultsFound}}\"><template case=\"true\"><div class=\"lyteListBoxNoResultsFound\">{{ltPropNoResultMessage}}</div></template></template> </div> </div> <template is=\"if\" value=\"{{ltPropShowToolbar}}\"><template case=\"true\"><div class=\"lyteListboxToolbar\"> <template is=\"if\" value=\"{{moveRight}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTNavBtn lyteLBTBMoveRight\" tabindex=\"0\" role=\"button\" aria-label=\"move selected elements right\" onclick=\"{{action('moveElementRight',this,'toolbarClick')}}\" lt-prop-title=\"Move Right\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"></div></template></template> <template is=\"if\" value=\"{{moveLeft}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTNavBtn lyteLBTBMoveLeft\" tabindex=\"0\" role=\"button\" aria-label=\"move selected elements left\" onclick=\"{{action('moveElementLeft',this,'toolbarClick')}}\" lt-prop-title=\"Move Left\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"></div></template></template> <template is=\"if\" value=\"{{moveTop}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTNavBtn lyteLBTBMoveUp\" tabindex=\"0\" role=\"button\" aria-label=\"move selected elements up\" onclick=\"{{action('moveElementUp',this)}}\" lt-prop-title=\"Move Up\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"></div></template></template> <template is=\"if\" value=\"{{moveBottom}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTNavBtn lyteLBTBMoveDown\" tabindex=\"0\" role=\"button\" aria-label=\"move selected elements down\" onclick=\"{{action('moveElementDown',this)}}\" lt-prop-title=\"Move Down\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"></div></template></template> <template is=\"if\" value=\"{{moveAllRight}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTBMoveAllRight\" tabindex=\"0\" role=\"button\" aria-label=\"move all elements right\" onclick=\"{{action('moveAllElementsRight',this)}}\" lt-prop-title=\"Move All Right\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"> ar </div></template></template> <template is=\"if\" value=\"{{moveAllLeft}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTBMoveAllLeft\" tabindex=\"0\" role=\"button\" aria-label=\"move all elements left\" onclick=\"{{action('moveAllElementsLeft',this)}}\" lt-prop-title=\"Move All Left\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"> al </div></template></template> <template is=\"if\" value=\"{{deleteElement}}\"><template case=\"true\"><div class=\"lyteLBToolbarItems lyteLBTBDeleteMarked\" tabindex=\"0\" role=\"button\" aria-label=\"delete the selected element\" onclick=\"{{action('deleteElement')}}\" lt-prop-title=\"Delete\" lt-prop-tooltip-config=\"{ &quot;position&quot;:&quot;bottom&quot;}\"></div></template></template> </div></template></template> <div class=\"lyteListboxRightPanel lyteListboxPanels lyteListboxSortablePanels\" tabindex=\"0\" id=\"lyte_listbox_right_panel\" aria-label=\"right panel\" aria-orientation=\"vertical\" onfocus=\"{{action('focusPanel',this)}}\" onfocusout=\"{{action('blurPanel',this)}}\" aria-activedescendant=\"{{listboxRightAriaDescendant}}\"> <template is=\"for\" items=\"{{ltPropRightData}}\" item=\"item\" index=\"index\"> <div class=\"lyteListBoxRightWrap {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'par')}}\"> <div class=\"lyteListBoxRightElement lyteRightLvl1 {{lyteListBoxRequiredClassHelper(item,ltPropMandateKey,minCountReached,'child')}}\" ondblclick=\"{{action('moveElementLeft',this,'doubleClick')}}\" onmouseup=\"{{action('elementFN',this,event)}}\" onmousedown=\"{{action('elementFN',this,event)}}\" index=\"{{lyteListBoxIndex(index)}}\" setparent=\"{{lyteListBoxParentIndex(this,item,ltPropAssociateParent)}}\" dom-index=\"\" id=\"\" role=\"option\" aria-selected=\"false\"> <lyte-yield class=\"lyteListboxYield\" yield-name=\"rightWidget\" right-widget-value=\"{{item}}\"></lyte-yield> <template is=\"if\" value=\"{{expHandlers(item[ltPropMandateKey],'!')}}\"><template case=\"true\"><lyte-lb-remove class=\"lyteLbAdd\" onclick=\"{{action('removeElementFromRight',this)}}\"></lyte-lb-remove></template></template> <template is=\"if\" value=\"{{expHandlers(item[ltPropMandateKey],'&amp;&amp;',showRemoveBtn)}}\"><template case=\"true\"><lyte-lb-remove class=\"lyteLbAdd\" onclick=\"{{action('removeElementFromRight',this)}}\"></lyte-lb-remove></template></template> </div> </div> </template> </div> <template is=\"if\" value=\"{{moreLBElements}}\"><template case=\"true\"><lyte-badge class=\"lyteListboxBadge\" lt-prop-position=\"topRight\" lt-prop-max-length=\"3\"></lyte-badge></template></template> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"componentDynamic","position":[1,1,1]},{"type":"attr","position":[1,1,3,1]},{"type":"for","position":[1,1,3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"componentDynamic","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"insertYield","position":[1,1,3]},{"type":"attr","position":[1,1,5]},{"type":"componentDynamic","position":[1,1,5]},{"type":"attr","position":[1,3]},{"type":"attr","position":[1,3,1]},{"type":"for","position":[1,3,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"insertYield","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"componentDynamic","position":[1,1,3]}]}]},"false":{"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"insertYield","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"componentDynamic","position":[1,1,3]}]}},"default":{}}]},{"type":"attr","position":[1,1,3,3]},{"type":"if","position":[1,1,3,3],"cases":{"true":{"dynamicNodes":[{"type":"text","position":[0,0]}]}},"default":{}},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0,1]},{"type":"if","position":[0,1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,3]},{"type":"if","position":[0,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,5]},{"type":"if","position":[0,5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,7]},{"type":"if","position":[0,7],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,9]},{"type":"if","position":[0,9],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,11]},{"type":"if","position":[0,11],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"attr","position":[0,13]},{"type":"if","position":[0,13],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}}]}},"default":{}},{"type":"attr","position":[1,5]},{"type":"attr","position":[1,5,1]},{"type":"for","position":[1,5,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"insertYield","position":[1,1,1]},{"type":"attr","position":[1,1,3]},{"type":"if","position":[1,1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"componentDynamic","position":[0]}]}},"default":{}},{"type":"attr","position":[1,1,5]},{"type":"if","position":[1,1,5],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]},{"type":"componentDynamic","position":[0]}]}},"default":{}}]},{"type":"attr","position":[1,7]},{"type":"if","position":[1,7],"cases":{"true":{"dynamicNodes":[{"type":"componentDynamic","position":[0]}]}},"default":{}}],
_observedAttributes :["ltPropLeftData","ltPropRightData","ltPropSortable","ltPropShortcut","ltPropAssociateParent","ltPropShowToolbar","ltPropSearchScope","ltPropToolbarItems","ltPropMaxCount","ltPropDoubleClick","ltPropSelectAllChild","ltPropNoResultMessage","ltPropAriaRoleDescription","ltPropKeepOriginal","ltPropMandateKey","ltPropMinimumRequiredCount","ltPropRestrictMandatoryElement","ltPropIgnoreSorting","listboxLeftAriaDescendant","listboxRightAriaDescendant","ariaLabelledById","focusActiveBoolean","ariaLiveContentBoolean","ariaLiveContent","dragHasStarted","noResultsFound","moveRight","moveLeft","moveTop","moveBottom","deleteElement","moreLBElements","selectedIndexLeft","selectedIndexRight","leftShiftSelectIndex","rightShiftSelectIndex","insertAtLeftInd","insertAtRightInd","elementPosition","activeSide","previousClickedElemDomInd","focusedOnTab","initialClientX","initialClientY","firstUpDownClick","showRemoveBtn","userDefinedMinCount","itemsMaxed"],

  data: function() {
    return {
      // ltPropLeftData: Lyte.attr('array', {
      //   default: [],
      //   watch : true
      // }),
      ltPropLeftData: Lyte.attr('array', {
        default: []
      }),
      ltPropRightData: Lyte.attr('array', {
        default: []
      }),
      ltPropSortable: Lyte.attr('boolean', {
        default: false
      }),
      ltPropShortcut: Lyte.attr('boolean', {
        default: false
      }),
      ltPropAssociateParent: Lyte.attr('string', {
        default: 'value'
      }),
      ltPropShowToolbar: Lyte.attr('boolean', {
        default: false
      }),
      ltPropSearchScope: Lyte.attr('string', {
        default: 'lyteListboxLeftPanel'
      }),
      ltPropToolbarItems: Lyte.attr('array', {
        default: ['moveRight', 'moveLeft', 'moveTop', 'moveBottom' , 'moveAllRight' , 'moveAllLeft']
      }),
      ltPropMaxCount: Lyte.attr('number', {
        default: -1
      }),
      ltPropDoubleClick: Lyte.attr('boolean', {
        default: true
      }),
      ltPropSelectAllChild : Lyte.attr('boolean',{
        default: false
      }),
      ltPropNoResultMessage : Lyte.attr('string' , {
        default : _lyteUiUtils.i18n('lyte.dual.listbox.no.results.found')
      }),
      ltPropAriaRoleDescription : Lyte.attr('string' , {
        default : 'Dual listbox'
      }),
      ltPropKeepOriginal : Lyte.attr('boolean' , {
        default : false
      }),
      ltPropMandateKey : Lyte.attr('string' , {
        default : 'required'
      }),
      ltPropMinimumRequiredCount : Lyte.attr('number' , {
        default : -1
      }),
      ltPropRestrictMandatoryElement : Lyte.attr('boolean' , {
        default : false 
      }),
      ltPropIgnoreSorting : Lyte.attr('string' , {
        default : ''
      }),


      listboxLeftAriaDescendant:Lyte.attr('string', {
        default : ''
      }),
      listboxRightAriaDescendant:Lyte.attr('string', {
        default : ''
      }),
      ariaLabelledById : Lyte.attr('string' , {
        default : ''
      }),
      focusActiveBoolean : Lyte.attr('boolean' , {
        default : false
      }),
      ariaLiveContentBoolean : Lyte.attr('boolean' , {
        default : false
      }),
      ariaLiveContent : Lyte.attr('string' , {
        default : ''
      }),

      dragHasStarted : Lyte.attr('boolean',  {
        default : false
      }),
      noResultsFound : Lyte.attr('boolean' , {
        default : false
      }),
      moveRight: Lyte.attr('boolean', {
        default: false
      }),
      moveLeft: Lyte.attr('boolean', {
        default: false
      }),
      moveTop: Lyte.attr('boolean', {
        default: false
      }),
      moveBottom: Lyte.attr('boolean', {
        default: false
      }),
      deleteElement: Lyte.attr('boolean', {
        default: false
      }),
      moreLBElements: Lyte.attr('boolean', {
        default: false
      }),
      selectedIndexLeft: Lyte.attr('array', {
        default: []
      }),
      selectedIndexRight: Lyte.attr('array', {
        default: []
      }),
      leftShiftSelectIndex: Lyte.attr('string', {
        default: ""
      }),
      rightShiftSelectIndex: Lyte.attr('string', {
        default: ""
      }),
      insertAtLeftInd: Lyte.attr('number', {
        default: 0
      }),
      insertAtRightInd: Lyte.attr('number', {
        default: 0
      }),
      elementPosition : Lyte.attr('number', {
        default : 0
      }),
      activeSide : Lyte.attr('string' , {
        default : ''
      }),
      previousClickedElemDomInd : Lyte.attr('number' , {
        default : 0
      }),
      focusedOnTab : Lyte.attr('boolean' , {
        default : false
      }),
      initialClientX : Lyte.attr('number' , {
        default : 0
      }),
      initialClientY : Lyte.attr('number' , {
        default : 0
      }),
      firstUpDownClick : Lyte.attr('boolean' , {
        default : false
      }),
      showRemoveBtn : Lyte.attr('boolean' , {
        default : false
      }),
      userDefinedMinCount : Lyte.attr('boolean' , {
        default : false
      }),
      itemsMaxed : Lyte.attr('boolean' , {
        default : false
      })
    }
  },
  init: function() {
    var th = this;
    var lB = this.$node

    this.$node.moveAllElementsLeft = function(){
      this.component.moveAllElementsLeft()
    }
    this.$node.moveAllElementsRight = function(){
      this.component.moveAllElementsRight()
    }

    this.$node.keyboardEvents = function(event){
      switch (event.keyCode) {
        case 9:

        th.clearAllActive();

        break;
        case 37:
        // Left keydown
        if(event.shiftKey){
          $L(lB).find('.lyteLBTNavBtn').addClass('lyteDLBDisabledToolbar')
          th.mELFN();
          if (th.getData('ltPropSortable')) {
            th.dragDropFun();
          }
        }
        break;

        case 38:
        // Up keydown
        if(!th.getData('firstUpDownClick')){
          th.updateDomIndex()
          th.setData('firstUpDownClick' , true)
        }
        if(event.shiftKey){
          th.selectElementsUp();
          $L(lB).find('.lyteListBoxLeftElement').attr('aria-selected' , false)
          $L(lB).find('.lyteLBLeftActive').attr('aria-selected' , true)
          $L(lB).find('.lyteListBoxRightElement').attr('aria-selected' , false)
          $L(lB).find('.lyteLBRightActive').attr('aria-selected' , true)
        } else {
          th.changeActiveToUp()
        }
        break;

        case 39:
        // Right keydown
        if(event.shiftKey){
          $L(lB).find('.lyteLBTNavBtn').addClass('lyteDLBDisabledToolbar')
          th.mERFN();
          if (th.getData('ltPropSortable')) {
            th.dragDropFun();
          }
        }
        break;

        case 40:
        // Bottom keydown
        if(!th.getData('firstUpDownClick')){
          th.updateDomIndex()
          th.setData('firstUpDownClick' , true)
          th.changeActiveToDown()
        }
        if($L(document.activeElement).hasClass('lyteListboxInput')){
          document.activeElement.blur()
          $L(lB).find('.lyteListBoxLeftElement').eq(0).addClass('lyteLBLeftActive lyteLBLeftMoveElement')
          th.setData('activeSide' , 'left')
          $L(lB).find('.lyteListboxleftElementWrap')[0].scrollTop = 0;
          break;
        }
        if($L(document.activeElement).hasClass('lyteListboxRightPanel')&&($L(lB).find('.lyteLBRightActive').length<1)){
          $L(lB).find('.lyteListBoxRightElement').eq(0).addClass('lyteLBRightActive lyteLBRightMoveElement')
          th.setData('activeSide' , 'right')
          break;
        }
        if(event.shiftKey){
          th.selectElementsDown();
          $L(lB).find('.lyteListBoxLeftElement').attr('aria-selected' , false)
          $L(lB).find('.lyteLBLeftActive').attr('aria-selected' , true)
          $L(lB).find('.lyteListBoxRightElement').attr('aria-selected' , false)
          $L(lB).find('.lyteLBRightActive').attr('aria-selected' , true)
        } else {
          th.changeActiveToDown()
        }
        break;

        case 13:
          // if(th.getData('focusActiveBoolean')){
          //   if(document.activeElement === $L(th.$node).find('.lyteListboxLeftPanel')[0]){
          //     th.moveActiveToLeft()
          //   } else if(document.activeElement === $L(th.$node).find('.lyteListboxRightPanel')[0]){
          //     th.moveActiveToRight()
          //   }
          // }
          if($L(document.activeElement).hasClass('lyteLBToolbarItems')){
            $L(document.activeElement).click()
          }
        break;
      }
    }

    if (this.getData('ltPropShortcut')) {
      document.addEventListener('keydown' , this.$node.keyboardEvents)
    }

    this.$node.clearAllActive = function(event){
      if($L(event.target).closest('lyte-dual-listbox').length < 1){
        $L(lB).find('.lyteLBTNavBtn').addClass('lyteDLBDisabledToolbar')
        th.clearAllActive();
      }
    }

    document.addEventListener('click' , this.$node.clearAllActive)

    this.$node.pinElement = function(elem , index , pin){
      if($L(elem).hasClass('lyteListBoxRightWrap')){
        var ind = parseInt($L(elem).find('.lyteListBoxRightElement').attr('index'))
        var obj = Lyte.arrayUtils(this.getData('ltPropRightData') , 'removeAt' , ind , 1)
        Lyte.arrayUtils(this.getData('ltPropRightData') , 'insertAt' , index , obj[0])
        if(pin){
          $L(this).find('.lyteListBoxRightWrap').eq(index).addClass(this.getData('ltPropIgnoreSorting'))
        } else {
          $L(this).find('.lyteListBoxRightWrap').eq(index).removeClass(this.getData('ltPropIgnoreSorting'))
        }
      } else if($L(elem).hasClass('lyteListBoxLeftWrap')){
        var ind = parseInt($L(elem).find('.lyteListBoxLeftElement').attr('index'))
        var obj = Lyte.arrayUtils(this.getData('ltPropLeftData') , 'removeAt' , ind , 1)
        Lyte.arrayUtils(this.getData('ltPropLeftData') , 'insertAt' , index , obj[0])
        if(pin){
          $L(this).find('.lyteListBoxLeftWrap').eq(index).addClass(this.getData('ltPropIgnoreSorting'))
        } else {
          $L(this).find('.lyteListBoxLeftWrap').eq(index).removeClass(this.getData('ltPropIgnoreSorting'))
        }
      }

      this.component.updateDomIndex()

    }

    this.$node.resetListbox = function(){
      this.component.clearAllActive()
      this.setData('selectedIndexLeft', [])
      this.setData('selectedIndexRight', [])
    }

  },

  dragDropFun: function() {

  	var lB = this.$node

  	var thisConnectedWith = $L(this.$node).find(".lyteListboxSortablePanels")
  	var childrenList = $L(this.$node).find('.lyteLBLeftChildWrap')

  	var dragElemDim;
  	var mouseDownDim;
    var restrictClass = undefined;

    if(this.getData('ltPropRestrictMandatoryElement')){
      restrictClass = ".lyteLBMandateParent"
    } 
    if(this.getData('ltPropIgnoreSorting').length > 0){
      if(this.getData('ltPropRestrictMandatoryElement')){
        restrictClass = ".lyteLBMandateParent,." + this.getData('ltPropIgnoreSorting')
      } else {
        restrictClass = "."+this.getData('ltPropIgnoreSorting')
      }
    }

  	var sortableObject = {
  		multiSortable: true,
  		cancelRemove : true,
      threshold : 3,
  		cancel: ".lyteListBoxSearch,.lyteLBoxDisabledParent,.lyteListBoxRequiredParent,.lyteLBDisabledElement .lyteListBoxLeftWrap .lyteListBoxNoResultsFound,.lyteLBDisabledElement,input",
  		appendTo : "BODY",
      restrict : restrictClass,
  		helper: function(ele) {

        var element = document.createElement("DIV");
  			element.setAttribute('class', 'lyteLBDragElement')
        return element

  		},

  		onDragStart: function(draggableElement, source ,event, origin) {

        var th = $L(origin).closest('lyte-dual-listbox')[0];

        if(!$L(origin).find('.lyteListBoxLeftElement').hasClass('lyteLBLeftActive') && !event.shiftKey){
          $L('.lyteLBLeftActive').removeClass('lyteLBLeftActive lyteLBLeftMoveElement')
          $L(origin).find('.lyteListBoxLeftElement').addClass('lyteLBLeftActive lyteLBLeftMoveElement')
        }
        if(!$L(origin).find('.lyteListBoxRightElement').hasClass('lyteLBRightActive') && !event.shiftKey){
          $L('.lyteLBRightActive').removeClass('lyteLBRightActive lyteLBRightMoveElement')
          $L(origin).find('.lyteListBoxRightElement').addClass('lyteLBRightActive lyteLBRightMoveElement')
        }

  			if((($L(origin).hasClass('lyteListBoxLeftWrap'))) && (!$L(origin).find('.lyteListBoxLeftElement').hasClass('lyteLBLeftActive')) && (!$L(th).find('.lyteLBLeftActive').length)){
  				$L(origin).find('.lyteListBoxLeftElement').addClass('lyteLBLeftActive lyteLBLeftMoveElement')
  				$L(lB)[0].setData('activeSide' , 'left')
  			}
  			if(($L(origin).hasClass('lyteListBoxRightWrap'))&&(!$L(origin).find('.lyteListBoxRightElement').hasClass('lyteLBRightActive')) && (!$L(th).find('.lyteLBRightActive').length)){
  				$L(origin).find('.lyteListBoxRightElement').addClass('lyteLBRightActive lyteLBRightMoveElement')
  				$L(lB)[0].setData('activeSide' , 'right')
  			}

  			var eleHeight = origin.getBoundingClientRect().height
  			var eleTotalLen
  			var allActive
  			var currentActive
  			var activeString

  			if ($L(origin).hasClass('lyteListBoxRightWrap')) {
  				activeString = ".lyteLBRightActive"
  				allActive = $L(th).find('.lyteLBRightActive').toArray();
  				currentActive = $L(origin).find('.lyteLBRightActive')
  			} else if ($L(origin).hasClass('lyteListBoxLeftWrap')) {
  				activeString = ".lyteLBLeftActive"
  				allActive = $L(th).find('.lyteLBLeftActive').toArray();
  				currentActive = $L(origin).find('.lyteLBLeftActive')
  			}

  			if (currentActive.length > 0) {
  				var index = allActive.indexOf(currentActive[0])
  				var i = index
  				if (allActive.length > 5) {
  					var startInd = i - 2
  					if (allActive.length / 2 > 0) {
  						i += 1
  					}
  					var endInd = i + 2

  					if (startInd < 0) {
  						endInd = endInd + (-1 * startInd)
  						startInd = 0
  					}
  					if (endInd > allActive.length - 1) {
  						startInd = index - (endInd - (allActive.length - 2))
  						endInd = allActive.length
  					}

  					for (var i = startInd; i <= index - 1; i++) {
  						if ($L(th).find(activeString)[i]) {
  							var e = $L(th).find(activeString)[i].cloneNode(true)
  							$L(e).addClass('lyteLBdragClone')
  							draggableElement.appendChild(e)
  						}
  					}
  					var currentClone = currentActive[0].cloneNode(true)
  					$L(currentClone).addClass('lyteLBdragClone')
  					draggableElement.appendChild(currentClone)
  					for (var i = index + 1; i < endInd; i++) {
  						if ($L(th).find(activeString)[i]) {
  							var e = $L(th).find(activeString)[i].cloneNode(true)
  							$L(e).addClass('lyteLBdragClone')
  							draggableElement.appendChild(e)
  						}
  					}


  				} else {
  					for (var i = 0; i <= index - 1; i++) {
  						if ($L(th).find(activeString)[i]) {
  							var e = $L(th).find(activeString)[i].cloneNode(true)
  							$L(e).addClass('lyteLBdragClone')
  							draggableElement.appendChild(e)
  						}
  					}
  					var currentClone = currentActive[0].cloneNode(true)
  					$L(currentClone).addClass('lyteLBdragClone')
  					draggableElement.appendChild(currentClone)
  					for (var i = index + 1; i < allActive.length; i++) {
  						if ($L(th).find(activeString)[i]) {
  							var e = $L(th).find(activeString)[i].cloneNode(true)
  							$L(e).addClass('lyteLBdragClone')
  							draggableElement.appendChild(e)
  						}
  					}
  				}
  			}

  			$L(draggableElement)[0].style.height = eleHeight * (endInd - startInd) + "px"

  			var currentHoldElem = origin
  			var ind = 0
  			if($L(th).find('.lyteLBLeftActive').length <= 0){
  				ind = $L(th).find('.lyteLBRightActive').length - 5 - $L(th).find('.lyteLBdragClone').length
  			} else {
  				ind = $L(th).find('.lyteLBLeftActive').length - 5 - $L(th).find('.lyteLBdragClone').length
  			}
  			$L(th)[0].component.setData('moreLBElements', true)
  			// var element = $L('.lyteLBDragElement')[0]
  			$L(th).find('.lyteListboxBadge')[0].component.setData('ltPropData', ind)
  			var badge = $L(th).find('.lyteListboxBadge')[0].cloneNode(true);
  			badge.style.display = "block";
  			draggableElement.style.position = "relative";
  			if (ind > 0) {
  				draggableElement.appendChild(badge)
  			}

  			if(!dragElemDim){
  				dragElemDim = currentHoldElem.getBoundingClientRect()
  				mouseDownDim = event.clientY
  			}
  			if($L(th).find('.lyteLBLeftActive').length <= 0){
          if(!th.getData('ltPropKeepOriginal')){
            $L(th).find('.lyteLBRightActive').css({'display' : 'none'})
          }
  			} else {
          if(!th.getData('ltPropKeepOriginal')){
            $L(th).find('.lyteLBLeftActive').css({'display' : 'none'})
          }
  				$L(th).find('.lyteListBoxLeftElement').css({'pointer-event' : 'none'})
  			}
        if(th.getData('ltPropKeepOriginal')){
          draggableElement.style.opacity = '0.8';
        }
        th.setData('dragHasStarted' , true);

      this.setTopForDraggableElem(draggableElement , dragElemDim,mouseDownDim,event)
  		}.bind(this),
  		onEnter: function(event, object) {
        var th = $L(object.sortable).closest('lyte-dual-listbox')[0]
  			if($L(object.sortable).hasClass('lyteListboxleftElementWrap')){
  				$L('.lyteLBDragElement.lyteSortablePlaceholder')[0].style.display = "none"
          if(th.component.getData('noResultsFound')){
            th.component.clearSearch();
          }
  			} else {
  				$L('.lyteLBDragElement.lyteSortablePlaceholder')[0].style.display = ""
  			}
  			if (($L(object.sortable).hasClass('lyteListboxleftElementWrap')) && (!$L(object.element._origin).hasClass('lyteListBoxLeftWrap'))) {
  				if ($L(th).find('.lyteLBLeftPanelDropZone').length > 0) {
  					$L(th).find('.lyteLBLeftPanelDropZone')[0].remove()
  				}
  				var leftPanelDropZone = document.createElement('DIV');
  				var leftPanelDropZoneBorder = document.createElement('DIV');
  				leftPanelDropZone.appendChild(leftPanelDropZoneBorder);
  				object.sortable.appendChild(leftPanelDropZone)
  				leftPanelDropZone.style.width = object.sortable.getBoundingClientRect().width + "px";
  			} else {
  				if ($L(th).find('.lyteLBLeftPanelDropZone').length > 0) {
  					$L(th).find('.lyteLBLeftPanelDropZone')[0].remove()
  				}
  			}
  		},
  		onMultiSelectDrag: function(cElem, evt, placeholder, pParent) {
        // if((Math.abs(lB.getData('initialClientX') - evt.clientX) > 3) || (Math.abs(lB.getData('initialClientY') - evt.clientY) > 3)){
          this.setTopForDraggableElem(cElem , dragElemDim,mouseDownDim,evt)
    			var dragElemPlaceHolder = $L('.lyteLBDragElement.lyteSortablePlaceholder')[0]
  				if($L(placeholder).closest('.lyteListboxSortablePanels').hasClass('lyteListboxleftElementWrap')){
  					$L('.lyteLBDragElement.lyteSortablePlaceholder')[0].style.display = "none"
  				} else {
  					$L('.lyteLBDragElement.lyteSortablePlaceholder')[0].style.display = ""
  				}
        // }
  		}.bind(this),
  		onBeforeDrop: function(droppableElement, belowElement, placeholderElement, fromIndex, toIndex, source, destination) {
        var onBeforeDropFun = $L(source).closest('lyte-dual-listbox')[0].component.executeMethod('onBeforeDrop', source, destination , toIndex)
        // $L(source).closest('lyte-dual-listbox')[0].component.executeMethod('onBeforeDrop', source, destination , toIndex)
        var th = $L(source).closest('lyte-dual-listbox')[0];
        th.component.setData('dragHasStarted' , false);
        $L(th).find('.lyteListBoxLeftElement').css({'pointer-event' : ''})
        if ($L(th).find('.lyteLBLeftPanelDropZone').length > 0) {
          $L(th).find('.lyteLBLeftPanelDropZone')[0].remove()
        }
        var elementData;
        $L(source).hasClass('lyteListboxRightPanel')
        if(onBeforeDropFun !== false){
          if (
            (($L(source).hasClass('lyteListboxleftElementWrap')) || ($L(source).hasClass('lyteLBLeftChildWrap'))) &&
            ($L(destination).hasClass('lyteListboxRightPanel'))
          ) {
            th.component.setData('insertAtRightInd', toIndex)
            th.component.mERFN();
            th.component.setData('insertAtRightInd', th.component.getData('ltPropRightData').length)
            $L(th).find('.lyteLBTNavBtn').addClass('lyteDLBDisabledToolbar')
            th.setData('dragHasStarted',false);
          }else {
            $L(th).find('.lyteLBLeftActive').css({'display' : ''})
          }
          if (
            ($L(source).hasClass('lyteListboxRightPanel')) &&
            (($L(destination).hasClass('lyteListboxleftElementWrap')) || ($L(destination).hasClass('lyteLBLeftChildWrap')))
          ) {
            th.component.setData('insertAtLeftInd', toIndex)
            th.component.mELFN();
            $L(th).find('.lyteLBTNavBtn').addClass('lyteDLBDisabledToolbar')
            th.setData('dragHasStarted',false);
          } else if ((source === destination) && ($L(source).hasClass('lyteListboxRightPanel'))) {
            th.component.setData('insertAtLeftInd', toIndex)
            $L(source).find('.lyteLBRightActive.lyteLBdragClone').removeClass('lyteLBRightActive')
            var actives = th.component.getActiveElements($L(th).find('.lyteLBRightActive'), 'ltPropRightData');
            th.component.sESPF($L(th).find('.lyteLBRightActive'), actives, 'ltPropRightData', toIndex, '.lyteRightLvl1');
            $L(th).find('.lyteLBRightActive').css({'display' : ''})
          }
          $L(source).closest('lyte-dual-listbox')[0].component.executeMethod('onDrop', source, destination , toIndex)
          if (th.component.getData('ltPropSortable')) {
            th.component.dragDropFun();
          }
        } else {
          $L(th).find('.lyteLBLeftActive').css({'display' : ''})
          $L(th).find('.lyteLBRightActive').css({'display' : ''})
        }
  			return false;
  		}.bind(this)
  	}

  	$L(this.$node).find(".lyteListboxSortablePanels", this.$node).sortable(Object.assign({
  		connectedWith: Array.from(thisConnectedWith)
  	}, sortableObject));

  	var thisConnectedWithChild = []

  	for (var i = 0; i < childrenList.length; i++) {
  		thisConnectedWithChild = []
  		thisConnectedWithChild.push(childrenList[i]);
  		thisConnectedWithChild.push(thisConnectedWith[1]);
  		$L(childrenList[i]).sortable(Object.assign({
  			connectedWith: Array.from(thisConnectedWithChild)
  		}, sortableObject));
  	}


  },

  setTopForDraggableElem : function(cElem,dragElemDim,mouseDownDim,evt){
    var lB = this.$node;
    if($L(lB)[0].getData('activeSide') === "left"){
      var leftActiveElems = $L(lB).find('.lyteLBLeftActive').toArray()
      var totalActiveElems = $L('.lyteLBLeftActive').toArray()
      var currentHoldElem = $L(cElem._origin).find('.lyteListBoxLeftElement')[0]
      var currentHoldIndex = leftActiveElems.indexOf(currentHoldElem)

      var holdElemDomInd = $L(currentHoldElem).attr('dom-index')
      var holdElemInHelper = $L(cElem).find('.lyteLBLeftActive[dom-index="'+holdElemDomInd+'"]')
      var helperActives = $L(cElem).find('.lyteLBLeftActive').toArray()
      var holdElenInd =  helperActives.indexOf(holdElemInHelper[0])

    } else if($L(lB)[0].getData('activeSide') === "right"){

      var rightActiveElems = $L(lB).find('.lyteLBRightActive').toArray()
      var totalActiveElems = $L('.lyteLBRightActive').toArray()
      var currentHoldElem = $L(cElem._origin).find('.lyteListBoxRightElement')[0]
      var currentHoldIndex = rightActiveElems.indexOf(currentHoldElem)

      var holdElemDomInd = $L(currentHoldElem).attr('dom-index')
      var holdElemInHelper = $L(cElem).find('.lyteLBRightActive[dom-index="'+holdElemDomInd+'"]')
      var helperActives = $L(cElem).find('.lyteLBRightActive').toArray()
      var holdElenInd =  helperActives.indexOf(holdElemInHelper[0])

    }

    if(!dragElemDim){
      dragElemDim = currentHoldElem.getBoundingClientRect()
    }

    cElem.style.top = dragElemDim.top - (mouseDownDim - evt.clientY) - (dragElemDim.height * holdElenInd) + "px";

  },

  didConnect: function() {

    if ((this.getData('ltPropMaxCount') <= this.getData('ltPropRightData').length) && (this.getData('ltPropMaxCount') > -1)) {
      $L(this.$node).find('.lyteListboxLeftPanel').addClass('lyteLBDisabledElement')
      $L(this.$node).find('.lyteListboxLeftPanel').find('.lyteListBoxLeftWrap').addClass('lyteLBDisabledElement')
    }

    if (this.getData('ltPropSortable')) {
      this.dragDropFun();
    }
    if(this.getData('ltPropMinimumRequiredCount') !== -1){
      this.setData('userDefinedMinCount' , true)
    } else {
      this.setData('ltPropMinimumRequiredCount' , 0)
      this.setData('userDefinedMinCount' , false)
    }

    var toolbarItems = this.getData('ltPropToolbarItems')

    for (var i = 0; i < this.getData('ltPropToolbarItems').length; i++) {
      this.setData(toolbarItems[i], true);
    }

    $L(this.$node).find('.lyteLBToolbarItems:not(.lyteLBTBMoveAllRight):not(.lyteLBTBMoveAllLeft)').addClass('lyteDLBDisabledToolbar')

    if(this.getData('ltPropLeftData').length<1){
      $L(this.$node).find('.lyteLBTBMoveAllRight').addClass('lyteDLBDisabledToolbar')
      $L(this.$node).find('lyte-input')[0].setData('ltPropDisabled' , true)
    }
    if(this.getData('ltPropRightData').length<1){
      $L(this.$node).find('.lyteLBTBMoveAllLeft').addClass('lyteDLBDisabledToolbar')
    }

    this.setData('insertAtLeftInd', this.getData('ltPropLeftData').length)
    this.setData('insertAtRightInd', this.getData('ltPropRightData').length)

    var lB = $L(this)[0].$node;
    var leftPanel = $L(lB).find('.lyteListboxLeftPanel')[0];

    this.updateDomIndex();
    this.handleMinRequired('right')

    // this.setData('doNotAnimate' , false)

  },
  methods: {
    onBeforeDrop: function() {},
    onDrop: function() {},
    onBeforeRight: function() {},
    onMoveRight: function() {},
    onBeforeLeft: function() {},
    onMoveLeft: function() {},
    onMoveElementUp: function() {},
    onMoveElementDown: function() {},
    onMoveAllRight: function() {},
    onMaxCountReached: function() {},
    onMoveAllLeft: function() {},
    onDeleteElement: function() {},
    onBeforeOpen: function() {},
    onBeforeClose: function() {},
    onOpen: function() {},
    onClose: function() {},
    onSearch : function(arr ,searchTag, evt){
      if((evt.keyCode !== 16) && (evt.typr !== "keyup")){
          $L(this.$node).find('.lyteListBoxElementBg').removeClass('lyteListBoxElementBg');
          this.clearAllActive();
      }
      var lB = this.$node;
      if((arr.length === 0) && ($L(lB).find('.lyteListBoxLeftElement').length > 0)){
        this.setData('noResultsFound' , true)
        this.setData('ariaLiveContent' , this.getData('ltPropNoResultMessage'))
        this.setData('ariaLiveContentBoolean' , true);
        $L(lB).find('.lyteLBTBMoveAllRight').addClass('lyteDLBDisabledToolbar')
        var th = this;

        setTimeout(function(){
          th.setData('ariaLiveContent' , '')
          th.setData('ariaLiveContentBoolean' , false)
        },1000)
      } else {
        this.setData('noResultsFound' , false)
        $L(lB).find('.lyteLBTBMoveAllRight').removeClass('lyteDLBDisabledToolbar')
        // $L(arr[0]).closest('.lyteListBoxLeftWrap:not(.lyteListBoxRequiredParent)').addClass('leftShiftElement');
        // $L(arr[0]).closest('.lyteListBoxLeftWrap:not(.lyteListBoxRequiredParent)').find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent)').addClass('lyteLBLeftActive lyteLBLeftMoveElement');
        if(arr.length === $L(lB).find('.lyteListBoxLeftElement').length){
          this.clearAllActive()
        }
      }
    }
  },
  clearSearch : function(){
    var lB = this.$node;
    if(this.getData('noResultsFound')){
      this.setData('noResultsFound' , false)
      $L(this.$node).find('.lyteListBoxSearch')[0].setValue('')
    } else {
      $L(this.$node).find('.lyteListBoxSearch')[0].setValue('')
    }
  },
  indexCallback: function(x) {
    return parseInt(x)
  },

  moveElementInView: function(parent, elem) {
    if(elem){
      var parentHeight = parent.getBoundingClientRect().height
      var elemTop = (elem.getBoundingClientRect().top - parent.getBoundingClientRect().top)
      var elemBottom = elemTop + elem.getBoundingClientRect().height


      if (elemBottom > parentHeight) {
        parent.scrollTo({
          top: (parent.scrollTop + (elemBottom - parentHeight)),
          behavior: "smooth"
        });
      }
      if (elemTop < 0) {
        parent.scrollTo({
          top: (parent.scrollTop + elemTop),
          behavior: "smooth"
        });
      }
    }
  },

  moveAllElementsRight: function(th) {
    this.clearSearch()
    var lB = this.$node;
    // $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent,.lyteSearchHidden)').addClass('lyteLBLeftActive lyteLBLeftMoveElement');
    // $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent,.lyteSearchHidden)').closest('.lyteListBoxLeftWrap:not(.lyteListBoxRequiredParent)').addClass('leftShiftElement');
    $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').addClass('lyteLBLeftActive lyteLBLeftMoveElement');
    $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').closest('.lyteListBoxLeftWrap:not(.lyteListBoxRequiredParent)').addClass('leftShiftElement');
    this.mERFN();
    $L(this.$node).find('.lyteLBTBMoveAllRight').addClass('lyteDLBDisabledToolbar')
    $L(this.$node).find('.lyteLBTBMoveAllLeft').removeClass('lyteDLBDisabledToolbar')
    this.dragDropFun();
  },
  moveAllElementsLeft: function(th) {
    this.clearSearch()
    var lB = this.$node;
    $L(lB).find('.lyteListBoxRightElement:not(.lyteListBoxRequiredItem):not(.lyteLBMandateItem):not(.lyteLBoxDisabledParent)').addClass('lyteLBRightActive lyteLBRightMoveElement');
    $L(lB).find('.lyteListBoxRightWrap:not(.lyteListBoxRequiredParent)').addClass('rightShiftElement');
    this.mELFN();
    $L(this.$node).find('.lyteLBTBMoveAllLeft').addClass('lyteDLBDisabledToolbar')
    $L(this.$node).find('.lyteLBTBMoveAllRight').removeClass('lyteDLBDisabledToolbar')
    this.dragDropFun();
  },

  actions : {

    addElementToRight: function(th) {
      var elem = $L(th).closest('.lyteListBoxLeftElement')
      this.selectionFunction(elem[0] , 'byBtn');
      this.mERFN();
      if (this.getData('ltPropSortable')) {
        this.dragDropFun();
      }
    },

    removeElementFromRight: function(th) {
      this.clearSearch()
      var elem = $L(th).closest('.lyteListBoxRightElement')
      this.selectionFunction(elem[0]);
      this.mELFN();
      if (this.getData('ltPropSortable')) {
        this.dragDropFun();
      }
    },

    collapseFunction: function(th, side) {
      event.stopPropagation();

      _this = this;
      var wrap
      var childWrap
      var elem
      var side

      if (side === 'left') {
        wrap = $L(th).closest('.lyteListBoxLeftWrap')
        childWrap = $L(wrap).find('.lyteLBLeftChildWrap')[0]
        elem = $L(wrap).find('.lyteListBoxLeftElement')
        side = 'left'
      } else {
        wrap = $L(th).closest('.lyteListBoxRightWrap')
        childWrap = $L(wrap).find('.lyteLBRightChildWrap')[0]
        elem = $L(wrap).find('.lyteListBoxRightElement')
        side = 'right'
      }

      var ind = parseInt(elem[0].getAttribute('index'))

      if (childWrap.getBoundingClientRect().height > 0) {

        if (side === "left") {
          _this.executeMethod('onBeforeClose', _this.getData('ltPropLeftData')[ind]);
        } else {
          _this.executeMethod('onBeforeClose', _this.getData('ltPropRightData')[ind]);
        }

        childWrap.style.height = childWrap.getBoundingClientRect().height + "px";

        setTimeout(function() {
          childWrap.style.height = "0px";

          if ($L(th.parentElement).hasClass('lyteListboxParentElementOpen')) {
            $L(th.parentElement).removeClass('lyteListboxParentElementOpen')
          }
          $L(th.parentElement).addClass('lyteListboxParentElementClose')

          if (side === "left") {
            _this.executeMethod('onClose', _this.getData('ltPropLeftData')[ind]);
          } else {
            _this.executeMethod('onClose', _this.getData('ltPropRightData')[ind]);
          }

        }, 10)

      } else {

        if ($L(th.parentElement).hasClass('lyteListboxParentElementClose')) {
          $L(th.parentElement).removeClass('lyteListboxParentElementClose')
        }
        $L(th.parentElement).addClass('lyteListboxParentElementOpen')

        if (side === "left") {
          _this.executeMethod('onBeforeOpen', _this.getData('ltPropLeftData')[ind]);
        } else {
          _this.executeMethod('onBeforeOpen', _this.getData('ltPropRightData')[ind]);
        }

        childWrap.style.height = "auto"
        var height = childWrap.getBoundingClientRect().height
        childWrap.style.height = "0px"

        setTimeout(function() {
          childWrap.style.height = height + "px"
          childWrap.addEventListener('transitionend', setHeight)
        }, 10)

        function setHeight() {
          childWrap.style.height = "auto"
          childWrap.removeEventListener('transitionend', setHeight)
          if (side === "left") {
            _this.executeMethod('onOpen', _this.getData('ltPropLeftData')[ind]);
          } else {
            _this.executeMethod('onOpen', _this.getData('ltPropRightData')[ind]);
          }
        }

      }

    },

    elementFN: function(th, ev) {
      if(this.getData('firstUpDownClick')){
        this.setData('firstUpDownClick' , false)
      }
      if(ev.type === "mousedown"){
        if(this.getData('noResultsFound')){
          this.clearSearch()
        }
        this.setData('initialClientX' , ev.clientX)
        this.setData('initialClientY' , ev.clientY)
        if(ev.shiftKey){
          this.selectionFunction(th);
        }
      } else if(ev.type ==="mouseup"){
        if(!this.getData('dragHasStarted')){
          this.selectionFunction(th);
        }
      }
    },

    moveElementRight: function(th, clickType) {
      if(!$L(th).hasClass('lyteDLBDisabledToolbar') || (clickType === 'doubleClick')){
        if($L(this.$node).find('.lyteLBLeftActive').length >= 1){
          if ((this.getData('ltPropDoubleClick')) || (clickType === 'toolbarClick')) {
            if ($L(th).hasClass('lyteListBoxRequiredItem')) {
              return
            }
            this.mERFN();
            $L(this.$node).find('.lyteLBTBMoveRight').addClass('lyteDLBDisabledToolbar')
            // if($L(this.$node).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent,.lyteSearchHidden)').length < 1){
            if($L(this.$node).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').length < 1){
              this.setData('noResultsFound' , true)
            }
            if (this.getData('ltPropSortable')) {
              this.dragDropFun();
            }
          }
        }
      }
    },

    moveElementLeft: function(th, clickType) {
      if(!$L(th).hasClass('lyteDLBDisabledToolbar') || (clickType === 'doubleClick')){
        if($L(this.$node).find('.lyteLBRightActive').length >= 1){
          if ((this.getData('ltPropDoubleClick')) || (clickType === 'toolbarClick')) {
            if ($L(th).hasClass('lyteListBoxRequiredItem')) {
              return
            }
            this.mELFN();
            $L(this.$node).find('.lyteLBTBMoveUp').addClass('lyteDLBDisabledToolbar')
            $L(this.$node).find('.lyteLBTBMoveDown').addClass('lyteDLBDisabledToolbar')
            if (this.getData('ltPropSortable')) {
              this.dragDropFun();
            }
          }
        }
      }
      this.clearSearch()

    },
    moveElementUp: function(thisBtn) {

      var th = this;
      var lB = th.$node;
      var activeElement;
      var elementArr;
      var index;

      var leftClickedElement = $L(lB).find('.lyteLBLeftMoveElement')[0];
      var rightClickedElement = $L(lB).find('.lyteLBRightMoveElement')[0];
      var leftEles
      var rightEles
      var index;
      var elementData
      var rightPanel = $L(lB).find('.lyteListboxRightPanel')[0]

      var lastActiveLeft = this.getData('selectedIndexLeft')[this.getData('selectedIndexLeft').length - 1]
      if (($L(lB).find('.lyteLBLeftActive.lyteLeftLvl1').length === 1) || ($L(lB).find('.lyteLBRightActive.lyteRightLvl1').length === 1)) {
        if (!(th.panelSide(leftClickedElement) === 'left')) {
          index = rightClickedElement.getAttribute("index").split(" ").map(this.indexCallback)
          if (index.length > 1) {
            if (index[1] > 0) {
              elementData = th.getData('ltPropRightData')[index[0]].childrenList[index[1]]
              Lyte.arrayUtils(th.getData('ltPropRightData')[index[0]].childrenList, 'removeAt', index[1], 1);
              Lyte.arrayUtils(th.getData('ltPropRightData')[index[0]].childrenList, 'insertAt', index[1] - 1, elementData);
              rightEles = $L(lB).find('.lyteRightLvl1')[index[0]].closest('.lyteListBoxRightWrap')
              var rightChildren = $L(rightEles).find('.lyteRightLvl2')
              $L(rightChildren[index[1] - 1]).addClass('lyteLBRightActive')
              $L(rightChildren[index[1] - 1]).addClass('lyteLBRightMoveElement')
            }
          } else {
            if (index[0] > 0) {
              elementData = th.getData('ltPropRightData')[index[0]];
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', index[0], 1);
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'insertAt', index[0] - 1, elementData);
              rightEles = $L(lB).find('.lyteRightLvl1');
              $L(rightEles[index[0] - 1]).addClass('lyteLBRightActive')
              $L(rightEles[index[0] - 1]).addClass('lyteLBRightMoveElement')
              this.moveElementInView(rightPanel, $L(lB).find('.lyteLBRightActive')[0])
            }
          }
        }
      }

      th.executeMethod('onMoveElementUp', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), elementData)

      if (th.getData('ltPropSortable')) {
        th.dragDropFun();
      }
    },
    moveElementDown: function(thisBtn) {
      var th = this;
      var lB = th.$node;
      var activeElement;
      var elementArr;
      var index;
      var leftClickedElement = $L(lB).find('.lyteLBLeftMoveElement')[0];
      var rightClickedElement = $L(lB).find('.lyteLBRightMoveElement')[0];
      var leftEles
      var rightEles
      var index;
      var elementData
      var lastActiveLeft = this.getData('selectedIndexLeft')[this.getData('selectedIndexLeft').length - 1]
      var rightPanel = $L(lB).find('.lyteListboxRightPanel')[0]

      if (($L(lB).find('.lyteLBLeftActive.lyteLeftLvl1').length === 1) || ($L(lB).find('.lyteLBRightActive.lyteRightLvl1').length === 1)) {

        if (!(th.panelSide(leftClickedElement) === 'left')) {
          index = rightClickedElement.getAttribute("index").split(" ").map(this.indexCallback)
          if (index.length > 1) {
            rightEles = $L(lB).find('.lyteRightLvl1')[index[0]].closest('.lyteListBoxRightWrap')
            var rightChildren = $L(rightEles).find('.lyteRightLvl2')
            if (index[1] < rightChildren.length - 1) {
              elementData = th.getData('ltPropRightData')[index[0]].childrenList[index[1]]
              Lyte.arrayUtils(th.getData('ltPropRightData')[index[0]].childrenList, 'removeAt', index[1], 1);
              Lyte.arrayUtils(th.getData('ltPropRightData')[index[0]].childrenList, 'insertAt', index[1] + 1, elementData);
              rightEles = $L(lB).find('.lyteRightLvl1')[index[0]].closest('.lyteListBoxRightWrap')
              rightChildren = $L(rightEles).find('.lyteRightLvl2')
              $L(rightChildren[index[1] + 1]).addClass('lyteLBRightActive')
              $L(rightChildren[index[1] + 1]).addClass('lyteLBRightMoveElement')
            }
          } else {
            rightEles = $L(lB).find('.lyteRightLvl1');
            if (index[0] < rightEles.length - 1) {
              elementData = th.getData('ltPropRightData')[index[0]];
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', index[0], 1);
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'insertAt', index[0] + 1, elementData);
              rightEles = $L(lB).find('.lyteRightLvl1');
              $L(rightEles[index[0] + 1]).addClass('lyteLBRightActive')
              $L(rightEles[index[0] + 1]).addClass('lyteLBRightMoveElement')
              this.moveElementInView(rightPanel, $L(lB).find('.lyteLBRightActive')[0])
            }
          }
        }
      }

      this.executeMethod('onMoveElementDown', this.getData('ltPropLeftData'), this.getData('ltPropRightData'), elementData)

      if (this.getData('ltPropSortable')) {
        this.dragDropFun();
      }
    },
    moveAllElementsRight: function(th) {
      if(!$L(th).hasClass('lyteDLBDisabledToolbar')){
        this.moveAllElementsRight()
      }
    },
    moveAllElementsLeft: function(th) {
      if(!$L(th).hasClass('lyteDLBDisabledToolbar')){
        this.moveAllElementsLeft()
      }
    },
    deleteElement: function(th) {
      if (!th) {
        th = this;
      }
      var lB = th.$node;
      if ($L(lB).find('.lyteLBLeftActive')[0]) {
        var leftElements = $L(lB).find('.lyteListBoxLeftElement');
        var activeElement = $L(lB).find('.lyteLBLeftActive')

        for (var i = 0; i < activeElement.length; i++) {
          var elementData
          index = activeElement[i].getAttribute('index').split(' ').map(this.indexCallback);
          if ((index.length > 1) || ($L(activeElement[i]).hasClass('lyteListBoxLeftParentElement'))) {
            var childWrap = $L(activeElement[i]).closest('.lyteListBoxLeftWrap').find('.lyteLBLeftChildWrap')
            if (($L(activeElement[i]).hasClass('lyteListBoxLeftParentElement')) && (($L(childWrap[0]).find('.lyteLeftLvl2').length < 1) || ($L(childWrap[0]).find('.lyteLBLeftActive').length === $L(childWrap[0]).find('.lyteLeftLvl2').length))) {
              i += $L(childWrap[0]).find('.lyteLBLeftActive').length
              elementData = th.getData('ltPropLeftData')[index[0]];
              Lyte.arrayUtils(th.getData('ltPropLeftData'), 'removeAt', index[0], 1);
            }
            if (index.length > 1) {
              elementData = th.getData('ltPropLeftData')[index[0]].childrenList[index[1]];
              Lyte.arrayUtils(th.getData('ltPropLeftData')[index[0]].childrenList, 'removeAt', index[1], 1);
            }
          } else {
            elementData = th.getData('ltPropLeftData')[index[0]];
            Lyte.arrayUtils(th.getData('ltPropLeftData'), 'removeAt', index[0], 1);
          }
        }

      } else if ($L(lB).find('.lyteLBRightActive')[0]) {
        var rightElements = $L(lB).find('.lyteListBoxRightElement');
        var activeElement = $L(lB).find('.lyteLBRightActive');
        for (var i = 0; i < activeElement.length; i++) {
          var elementData
          index = activeElement[i].getAttribute('index').split(' ').map(this.indexCallback);
          if ((index.length > 1) || ($L(activeElement[i]).hasClass('lyteListBoxRightParentElement'))) {
            var childWrap = $L(activeElement[i]).closest('.lyteListBoxRightWrap').find('.lyteLBRightChildWrap')
            if (($L(activeElement[i]).hasClass('lyteListBoxRightParentElement')) && (($L(childWrap[0]).find('.lyteRightLvl2').length < 1) || ($L(childWrap[0]).find('.lyteLBRightActive').length === $L(childWrap[0]).find('.lyteRightLvl2').length))) {
              i += $L(childWrap[0]).find('.lyteLBRightActive').length
              elementData = th.getData('ltPropRightData')[index[0]];
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', index[0], 1);
            }
            if (index.length > 1) {
              elementData = th.getData('ltPropRightData')[index[0]].childrenList[index[1]];
              Lyte.arrayUtils(th.getData('ltPropRightData')[index[0]].childrenList, 'removeAt', index[1], 1);
            }
          } else {
            elementData = th.getData('ltPropRightData')[index[0]];
            Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', index[0], 1);
          }

        }
      }


      th.executeMethod('onDeleteElement');


      if (th.getData('ltPropSortable')) {
        th.dragDropFun();
      }
    },
    focusPanel : function(th){
      if(document.activeElement === $L(this.$node).find('.lyteListboxLeftPanel')[0]){
        this.setData('ariaLabelledById' , 'lyte_listbox_left_panel')
        this.setData('focusActiveBoolean' , true);
      } else if(document.activeElement === $L(this.$node).find('.lyteListboxRightPanel')[0]){
        this.setData('ariaLabelledById' , 'lyte_listbox_right_panel')
        this.setData('focusActiveBoolean' , true);
      }
    },
    blurPanel : function(th){
      this.setData('ariaLabelledById' , '');
      this.setData('focusActiveBoolean' , false);
    }
  },

  // animateBackground : function(arg){
  //   if(arg.insertedItems && arg.insertedItems.length>0){
  //     if(arg.item === 'ltPropLeftData'){
  //       var elem
  //       if(arg.path !== ""){
  //         var path = arg.path.split('.')[0]
  //         var ind = path + " " +arg.index
  //         elem = $L('.lyteListBoxLeftElement[index="'+ind+'"]')[0]
  //         $L(elem).addClass('lyteListBoxElementBg')
  //       } else {
  //         elem = $L('.lyteListBoxLeftElement[index="'+arg.index+'"]')[0]
  //         $L(elem).addClass('lyteListBoxElementBg')
  //       }
  //     } else if(arg.item === 'ltPropRightData'){
  //       var elem = $L('.lyteListBoxRightElement')[arg.index]
  //       $L(elem).addClass('lyteListBoxElementBg')
  //     }
  //   }
  // }.observes('ltPropRightData.[]' , 'ltPropLeftData.*'),

  animateBackgroundManual : function(side,ind){

    var elem;
    var th = this.$node;

    if(side === "left"){
      elem = $L(th).find('.lyteListBoxLeftElement[index="'+ind+'"]')[0]
      $L(elem).addClass('lyteListBoxElementBg')
    } else if(side === "right"){
      elem = $L(th).find('.lyteListBoxRightElement[index="'+ind+'"]')[0]
      $L(elem).addClass('lyteListBoxElementBg')
    }
    
  },

  selectionFunction: function(th , by) {

    var clickedEle = th;
    var lB = this.$node
    // event.stopPropagation();
    var self = this

    this.setData('previousClickedElemDomInd' , parseInt($L(clickedEle).attr('dom-index')))

    if($L(clickedEle).hasClass('lyteListBoxLeftElement') && $L(document.activeElement).hasClass('lyteListboxRightPanel')){
      document.activeElement.blur()
    }

    if(by === 'byBtn'){
      if ($L(clickedEle).hasClass('lyteListBoxLeftParentElement')) {
        $L(clickedEle.parentElement).find('.lyteLeftLvl2').addClass('lyteLBLeftActive')
        return
      }
    }

    if(this.getData('itemsMaxed')){
      return;
    }

    var leftEles = $L(lB).find('.lyteListBoxLeftElement').toArray()
    var rightEles = $L(lB).find('.lyteListBoxRightElement').toArray()
    var wrap = clickedEle.parentElement

    var lastActiveLeft = leftEles[this.getData('selectedIndexLeft')[this.getData('selectedIndexLeft').length - 1]]
    var lastActiveRight = rightEles[this.getData('selectedIndexRight')[this.getData('selectedIndexRight').length - 1]]

    var notDisabled = (clickedEle.getAttribute("index").split(" ").map(this.indexCallback))
    // notDisabled = notDisabled[notDisabled.length-1]

    var isCurrentElementDisabled = false;

    if ($L(clickedEle).hasClass('lyteListBoxRightElement')) {
      // if (notDisabled.length > 1) {
      //   isCurrentElementDisabled = this.getData('ltPropRightData')[notDisabled[0]].childrenList[notDisabled[1]][this.getData('ltPropMandateKey')]
      // } else {
      //   isCurrentElementDisabled = this.getData('ltPropRightData')[notDisabled[0]][this.getData('ltPropMandateKey')]
      // }
    }

    if (
      ($L(clickedEle).closest('.lyteListboxLeftPanel').hasClass('lyteLBoxDisabledParent')) ||
      ($L(clickedEle).closest('.lyteListboxLeftPanel').hasClass('lyteLBDisabledElement')) ||
      ($L(clickedEle).hasClass('lyteLBoxDisabledParent'))
    ) {
      isCurrentElementDisabled = true
    }

    if ((event.shiftKey) && (lastActiveLeft || lastActiveRight)) {

      /*

      * Shift key down and select elements

      */

      var initialElement,initialWrap,initialParentWrap,initialChildren
      var previousElement,previousWrap,previousParentWrap,previousChildren
      var currentElement,currentWrap,currentParentWrap,currentChildren
      var atrStr
      var nextPrevCheck
      var newSelection = true

      function setUpLeftElems(){
        atrStr = "'" + self.getData('leftShiftSelectIndex') + "'";

        initialElement = lastActiveLeft
        initialWrap = $L(initialElement).closest('.lyteListBoxLeftWrap');
        initialParentWrap = $L(initialWrap).closest('.lyteLBLeftChildWrap').closest('.lyteListBoxLeftWrap')
        initialChildren = initialParentWrap.find('.lyteListBoxLeftWrap')

        previousElement = $L(lB).find('.lyteListboxLeftPanel').find("[index*=" + atrStr + "]")[0]
        if(!previousElement){
          previousElement = initialElement
          newSelection = true
        } else {
          newSelection = false
        }
        previousWrap = $L(previousElement).closest('.lyteListBoxLeftWrap');
        if (!previousWrap[0]) {
          previousWrap = initialWrap;
        }
        previousParentWrap = $L(previousWrap).closest('.lyteLBLeftChildWrap').closest('.lyteListBoxLeftWrap')
        previousChildren = previousParentWrap.find('.lyteListBoxLeftWrap')

        currentElement = clickedEle
        currentWrap = $L(currentElement).closest('.lyteListBoxLeftWrap');
        currentParentWrap = $L(currentWrap).closest('.lyteLBLeftChildWrap').closest('.lyteListBoxLeftWrap')
        currentChildren = currentParentWrap.find('.lyteListBoxLeftWrap')

        if($L(currentElement).hasClass('lyteListBoxLeftParentElement')){
          currentChildren = currentWrap.find('.lyteListBoxLeftWrap')
        }
      }

      if (this.panelSide(clickedEle) === "left") {

          setUpLeftElems()

      } else {
        atrStr = "'" + this.getData('rightShiftSelectIndex') + "'";
        previousElement = $L(lB).find('.lyteListboxRightPanel').find("[index*=" + atrStr + "]")[0]
        previousWrap = $L(previousElement).closest('.lyteListBoxRightWrap');
        currentWrap = $L(clickedEle).closest('.lyteListBoxRightWrap');
        initialWrap = $L(lastActiveRight).closest('.lyteListBoxRightWrap');
        wrapArray = $L(lB).find('.lyteListBoxRightWrap')
        if(!previousElement){
          previousWrap = initialWrap
          previousElement = lastActiveRight
        }
      }

      /*

      To get indexes ===================================================================

      */

      function getClickedElemLevel(){
        if($L(clickedEle).hasClass('lyteLeftLvl1')){
          return 'lvl1'
        } else {
          return 'lvl2'
        }
      }

      function getPrevElemLevel(){
        if (!previousElement) {
          previousElement = $L(previousWrap).find('.lyteListBoxLeftElement')[0]
        }
        if($L(previousElement).hasClass('lyteLeftLvl1')){
          return 'lvl1'
        } else {
          return 'lvl2'
        }
      }

      function getPrevElemType(){
        if (!previousElement) {
          previousElement = $L(previousWrap).find('.lyteListBoxLeftElement')[0]
        }
        if($L(previousElement).hasClass('lyteListBoxLeftParentElement')){
          return 'parent'
        }
        return
      }

      function getClickedElemType(){
        if($L(clickedEle).hasClass('lyteListBoxLeftParentElement')){
          return 'parent'
        }
        return
      }

      function getIniParInd(){
        var iniEL = $L(initialWrap).find('.lyteListBoxLeftElement')[0]
        return parseInt($L(iniEL).attr('index').split(" ")[0]);
      }

      function getIniChildInd(){
        var iniEL = $L(initialWrap).find('.lyteListBoxLeftElement')[0]
        return parseInt($L(iniEL).attr('index').split(" ")[1]);
      }

      function getPreParInd() {
        if (!previousElement) {
          previousElement = $L(previousWrap).find('.lyteListBoxLeftElement')[0]
        }
        return parseInt($L(previousElement).attr('index').split(" ")[0]);
      }

      function getCurParInd() {
        return parseInt($L(clickedEle).attr('index').split(" ")[0]);
      }

      function getPreChildInd() {
        if (!previousElement) {
          previousElement = $L(previousWrap).find('.lyteListBoxLeftElement')[0]
        }
        if(!$L(previousElement).attr('index').split(" ")[1]){
          return 0
        }
        return parseInt($L(previousElement).attr('index').split(" ")[1]);
      }

      function getCurChildInd() {
        if (!clickedEle) {
          clickedEle = $L(currentWrap).find('.lyteListBoxLeftElement')[0]
        }
        if(!$L(clickedEle).attr('index').split(" ")[1]){
          return 0
        }
        return parseInt($L(clickedEle).attr('index').split(" ")[1]);
      }

      function getCurLastIndex(){
        if(!currentChildren.length){
          return currentWrap.find('.lyteLeftLvl2Wrap').length-1
        }
        return currentChildren.length-1
      }

      function getPreLastIndex(){
        if(!previousChildren.length){
          return previousWrap.find('.lyteLeftLvl2Wrap').length-1
        }
        return previousChildren.length-1
      }

      /*

      To get indexes ends ===================================================================

      */

      if(clickedEle.getAttribute('index') === previousElement.getAttribute('index')){
        return
      }

      if ($L(clickedEle).hasClass('lyteListBoxLeftElement') && !(clickedEle === lastActiveLeft)) {

        // $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
        $L(lB).find('.leftShiftElement').find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')

        if(getIniParInd() < getCurParInd()){
          /*

          Selection from top to bottom

          */

          if((getIniParInd() > getPreParInd()) && (getCurParInd() > getIniParInd()) ||
             (getIniChildInd() > getPreChildInd()) && (getCurParInd() > getIniParInd())
            ){
            $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
            previousElement = initialElement
            previousWrap  = initialWrap
            previousParentWrap  = initialParentWrap
            previousChildren  = initialChildren
          }

          if(getPreParInd() < getCurParInd()){
            // console.log('add top to bottom');
            $L(previousWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
            if(getClickedElemLevel() === 'lvl1'){
              if(getPrevElemLevel() === 'lvl2'){
                $L(previousParentWrap).nextUntil(currentWrap).addClass('leftShiftElement')
                $L(previousParentWrap).nextUntil(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
                $L(currentWrap).addClass('leftShiftElement')
              } else {
                $L(previousParentWrap).nextUntil(currentWrap,'',true).addClass('leftShiftElement')
              }
              $L(previousWrap).nextUntil(currentWrap,'',true).addClass('leftShiftElement')
              if((getClickedElemType() === 'parent')){
                $L(previousWrap).nextUntil(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              } else {
                $L(previousWrap).nextUntil(currentWrap,'',true).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              }
            } else {
              $L(previousWrap).nextUntil(currentParentWrap,'',true).addClass('leftShiftElement')
              $L(previousWrap).nextUntil(currentParentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              if(getPrevElemLevel() === 'lvl2'){
                $L(previousParentWrap).nextUntil(currentParentWrap).addClass('leftShiftElement')
                $L(currentParentWrap).addClass('leftShiftElement')
              } else {
                $L(previousParentWrap).nextUntil(currentParentWrap,'',true).addClass('leftShiftElement')
              }
              if(getCurChildInd() === 0){
                $L(currentChildren[0]).addClass('leftShiftElement')
              } else {
                $L(currentChildren[0]).nextUntil(currentChildren[getCurChildInd()],'',true).addClass('leftShiftElement')
              }
            }
          } else if(getPreParInd() > getCurParInd()){
            // console.log('remove' , getClickedElemType());
            if(getClickedElemLevel() === 'lvl1'){
              // console.log('remove parent');
              $L(previousWrap).prevUntil(currentWrap,'',true).removeClass('leftShiftElement')
              $L(previousParentWrap).prevUntil(currentWrap,'',true).removeClass('leftShiftElement')
              $L(previousWrap).prevUntil(currentWrap,'',true).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              $L(previousParentWrap).prevUntil(currentWrap,'',true).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
            } else {
              // console.log('remove child 1');
              $L(previousWrap).prevUntil(currentParentWrap,'',true).removeClass('leftShiftElement')
              $L(previousWrap).prevUntil(currentParentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              $L(previousParentWrap).prevUntil(currentParentWrap,'',true).removeClass('leftShiftElement')
              if(getCurLastIndex() === getCurChildInd()){
                $L(currentChildren[0]).addClass('leftShiftElement')
              } else {
                $L(currentChildren[getCurLastIndex()]).prevUntil(currentChildren[getCurChildInd()],'',true).removeClass('leftShiftElement')
              }
              $L(currentParentWrap).addClass('leftShiftElement')
            }
            $L(currentWrap).addClass('leftShiftElement')
          } else if(getPreParInd() === getCurParInd()){
            if(getPreChildInd() <= getCurChildInd()){
              // console.log('add child');
              if(getCurChildInd() <= 0){
                $L(currentChildren[0]).addClass('leftShiftElement')
              } else {
                $L(currentChildren[getPreChildInd()]).nextUntil(currentChildren[getCurChildInd()],'',true).addClass('leftShiftElement')
              }
            } else {
              // console.log('remove child');
              $L(previousWrap).prevUntil(currentWrap,'',true).removeClass('leftShiftElement')
              $L(currentWrap).addClass('leftShiftElement')
            }
          }


          /*

          Selection from top to bottom ends

          */


        } else if(getIniParInd() > getCurParInd()){
          /*

          Selection from bottom to top

          */
          // console.log('bottom to top');

          if((getIniParInd() < getPreParInd()) && (getCurParInd() < getIniParInd()) ||
             (getIniChildInd() < getPreChildInd()) && (getCurParInd() < getIniParInd())
            ){
            $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
            previousElement = initialElement
            previousWrap  = initialWrap
            previousParentWrap  = initialParentWrap
            previousChildren  = initialChildren
          }

          if(getPreParInd() > getCurParInd()){

            // console.log('add bottom to top');
            if(getClickedElemLevel() === 'lvl1'){
              $L(previousWrap).prevUntil(currentWrap,'',true).addClass('leftShiftElement')
              if(getPrevElemType() === 'parent'){
                $L(previousWrap).prevUntil(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              } else {
                $L(previousParentWrap).prevUntil(currentWrap,'',true).addClass('leftShiftElement')
                $L(previousWrap).prevUntil(currentWrap,'',true).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
                $L(previousParentWrap).prevUntil(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              }
              if(getPreChildInd()!==0){
                $L(previousParentWrap).prevUntil(currentWrap,'',true).addClass('leftShiftElement')
                $L(previousParentWrap).prevUntil(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              }
              $L(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              $L(previousParentWrap).addClass('leftShiftElement')

            } else {
              $L(previousParentWrap).addClass('leftShiftElement')
              $L(previousParentWrap).prevUntil(currentParentWrap).addClass('leftShiftElement')
              $L(previousWrap).prevUntil(currentParentWrap).addClass('leftShiftElement')
              $L(previousWrap).prevUntil(currentParentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              if(getCurChildInd() !== 0){
                $L(previousParentWrap).prevUntil(currentParentWrap).addClass('leftShiftElement')
              } else {
                $L(previousParentWrap).addClass('leftShiftElement')
              }
              $L(previousChildren[getPreChildInd()]).prevUntil(previousChildren[0],'',true).addClass('leftShiftElement')
              if(getCurChildInd() === getCurLastIndex()){
                $L(currentChildren[getCurLastIndex()]).addClass('leftShiftElement')
              } else {
                $L(currentChildren[getCurLastIndex()]).prevUntil(currentChildren[getCurChildInd()],'',true).addClass('leftShiftElement')
              }
            }


          } else if(getPreParInd() < getCurParInd()){

            // console.log('remove bottom to top');

            if(getClickedElemLevel() === 'lvl1'){
              $L(previousWrap).nextUntil(currentWrap).removeClass('leftShiftElement')
              $L(previousParentWrap).nextUntil(currentWrap).removeClass('leftShiftElement')
              if(getClickedElemType() === 'parent'){
                $L(previousWrap).nextUntil(currentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
                $L(previousWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
                $L(previousWrap).removeClass('leftShiftElement')
              } else {
                $L(previousWrap).nextUntil(currentWrap,'',true).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              }
              $L(previousWrap).removeClass('leftShiftElement')
            } else {
              if(getPrevElemLevel() === 'lvl2'){
                $L(previousParentWrap).nextUntil(currentParentWrap,'',true).removeClass('leftShiftElement')
                $L(previousParentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              } else {
                $L(previousWrap).nextUntil(currentParentWrap,'',true).removeClass('leftShiftElement')
                $L(previousWrap).nextUntil(currentParentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
                $L(previousWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              }
              if(getCurChildInd()===0){
                $L(currentChildren[0]).removeClass('leftShiftElement')
              } else {
                $L(currentChildren[0]).nextUntil(currentChildren[getCurChildInd()],'',true).removeClass('leftShiftElement')
              }
            }
            $L(currentWrap).addClass('leftShiftElement')

          } else if(getPreParInd() === getCurParInd()){

            // console.log('bottom to top same parent');

            if((getPreChildInd() > getCurChildInd()) || (getClickedElemType() === 'parent')){

              // console.log('add child bottom to top');
              $L(currentChildren[getCurLastIndex()]).prevUntil(currentChildren[getCurChildInd()],'',true).addClass('leftShiftElement')
              if(getPreParInd() === getCurParInd()){
                $L(currentWrap).find('.lyteLeftLvl2Wrap').addClass('leftShiftElement')
              }

            } else {

              // console.log('remove child bottom to top');
              if(getPrevElemType() === 'parent'){
                $L(previousWrap).removeClass('leftShiftElement')
                if(getCurChildInd()!==0){
                  $L(currentChildren[getPreChildInd()]).nextUntil(currentChildren[getCurChildInd()] , '' , true).removeClass('leftShiftElement')
                }
              } else {
                $L(previousWrap).nextUntil(currentWrap,'',true).removeClass('leftShiftElement')
              }

            }
            $L(currentWrap).addClass('leftShiftElement')

          }


          /*

          Selection from bottom to top ends

          */


        } else if(getIniParInd() === getCurParInd()){
          // console.log('same parent');
          /*

          Selection within the same parent and child

          */

          if(getCurChildInd() < getIniChildInd()){
            if((getIniChildInd() < getPreChildInd()) && (getCurChildInd() < getIniChildInd()) ||
               (getIniChildInd() > getCurChildInd()) && (getCurParInd()<getPreParInd())
              ){
              $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
              previousElement = initialElement
              previousWrap  = initialWrap
              previousParentWrap  = initialParentWrap
              previousChildren  = initialChildren
            }
            // console.log('bottom to top in same parent');

            if(((getPreChildInd() > getCurChildInd()) || (getClickedElemType() === 'parent')) && (getPreParInd() === getCurParInd())){
              // console.log('add bottom to top same parent');
              if(getClickedElemType() === 'parent'){
                $L(currentWrap).addClass('leftShiftElement');
                $L(currentChildren[getPreChildInd()]).prevUntil(currentChildren[0] , '' , true).addClass('leftShiftElement')
              } else {
                $L(currentChildren[getPreChildInd()]).prevUntil(currentChildren[getCurChildInd()] , '' , true).addClass('leftShiftElement')
              }
            } else {
              // console.log('remove bottom to top same parent');
              if(getPreParInd() === getCurParInd()){
                  $L(currentChildren[getPreChildInd()]).nextUntil(currentChildren[getCurChildInd()] , '' , true).removeClass('leftShiftElement')
                  $L(currentParentWrap).removeClass('leftShiftElement')
              } else {
                $L(previousWrap).nextUntil(currentWrap,'',true).removeClass('leftShiftElement')
                $L(previousWrap).nextUntil(currentParentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
                $L(previousParentWrap).nextUntil(currentParentWrap,'',true).removeClass('leftShiftElement')
                if(getPrevElemType() === 'parent'){
                  $L(previousWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
                }
                if(getCurChildInd() === 0){
                  $L(currentChildren[getCurChildInd()]).removeClass('leftShiftElement')
                } else {
                  $L(currentChildren[0]).nextUntil(currentChildren[getCurChildInd()] , '' , true).removeClass('leftShiftElement')
                }
              }
              $L(currentWrap).addClass('leftShiftElement')
            }

          } else {
            // console.log('top to bottom in same parent');

            if((getIniChildInd() > getPreChildInd()) && (getCurChildInd() > getIniChildInd())){
              $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
              previousElement = initialElement
              previousWrap  = initialWrap
              previousParentWrap  = initialParentWrap
              previousChildren  = initialChildren
            }

            if(((getPreChildInd() < getCurChildInd()) || (getClickedElemType() === 'parent')) && (getPreParInd() === getCurParInd())){

              // console.log('add top to bottom in same parent');

              $L(currentChildren[getPreChildInd()]).nextUntil(currentChildren[getCurChildInd()] , '' , true).addClass('leftShiftElement')

            } else {

              // console.log('remove top to bottom in same parent');

              $L(previousWrap).prevUntil(currentWrap,'',true).removeClass('leftShiftElement')
              $L(previousWrap).prevUntil(currentParentWrap).find('.lyteLeftLvl2Wrap.leftShiftElement').removeClass('leftShiftElement')
              $L(previousParentWrap).prevUntil(currentParentWrap,'',true).removeClass('leftShiftElement')

              if(getPreParInd() === getCurParInd()){
                $L(currentChildren[getPreChildInd()]).prevUntil(currentChildren[getCurChildInd()] , '' , true).removeClass('leftShiftElement')
              } else {
                if(getCurChildInd() === getCurLastIndex()){
                  $L(currentChildren[getCurLastIndex()]).addClass('leftShiftElement')
                } else {
                  $L(currentChildren[getCurLastIndex()]).prevUntil(currentChildren[getCurChildInd()] , '' , true).removeClass('leftShiftElement')
                }
              }


              $L(currentWrap).addClass('leftShiftElement')
            }

          }

          /*

          Selection within the same parent and child ends

          */

        }

        $L(lB).find('.lyteListBoxRequiredParent').removeClass('leftShiftElement')
				$L(lB).find('.leftShiftElement').children('.lyteListBoxLeftElement').addClass('lyteLBLeftActive')
        $L(lB).find('.leftShiftElement').children('.lyteListBoxLeftElement').addClass('lyteLBLeftMoveElement')

				this.setData('leftShiftSelectIndex' , $L(clickedEle)[0].getAttribute('index'));

      } else if ($L(clickedEle).hasClass('lyteListBoxRightElement') && !(clickedEle === lastActiveRight)) {

        if ($L(lB).find('.lyteLBLeftActive').length > 0) {
          $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
        }

        if (!isCurrentElementDisabled) {

          var lastActiveRightInd
          if (!(lastActiveRight.getAttribute('index').split(" ").length > 1)) {
            lastActiveRightInd = rightEles.indexOf(lastActiveRight)
          }
          lastActiveRight = rightEles[lastActiveRightInd]
          prevWrap = $L(lastActiveRight).closest('.lyteListBoxRightWrap');
          nextPrevCheck = parseInt(clickedEle.getAttribute('index')) < parseInt(lastActiveRight.getAttribute('index'))

          if (nextPrevCheck) {
            $L(previousWrap).prevUntil(prevWrap,"",true).removeClass('rightShiftElement')
            $L(previousWrap).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            if (
              (wrapArray.indexOf(currentWrap[0]) > wrapArray.indexOf(previousWrap[0])) &&
              (wrapArray.indexOf(previousWrap[0]) < wrapArray.indexOf(prevWrap[0]))
            ) {
              $L(currentWrap).prevUntil(previousWrap,"",true).removeClass('rightShiftElement')
              $L(currentWrap).prevUntil(previousWrap,"",true).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            }
            $L(previousWrap).prevUntil(prevWrap,"",true).removeClass('rightShiftElement')
            $L(previousWrap).prevUntil(prevWrap,"",true).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            $L(prevWrap).prevUntil(currentWrap, '.lyteListBoxRightWrap',true).addClass('rightShiftElement')
          } else {
            $L(previousWrap).nextUntil(prevWrap,"",true).removeClass('rightShiftElement')
            $L(previousWrap).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            if (
              (wrapArray.indexOf(currentWrap[0]) < wrapArray.indexOf(previousWrap[0])) &&
              (wrapArray.indexOf(previousWrap[0]) > wrapArray.indexOf(prevWrap[0]))
            ) {
              $L(currentWrap).nextUntil(previousWrap,"",true).removeClass('rightShiftElement')
              $L(currentWrap).nextUntil(previousWrap,"",true).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            }
            $L(previousWrap).nextUntil(prevWrap,"",true).removeClass('rightShiftElement')
            $L(previousWrap).nextUntil(prevWrap,"",true).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            $L(prevWrap).nextUntil(currentWrap, '.lyteListBoxRightWrap',true).addClass('rightShiftElement')
          }

          $L(lB).find('.lyteListBoxRequiredParent').removeClass('rightShiftElement')
          $L(lB).find('.lyteLBMandateItem').closest('.rightShiftElement').removeClass('rightShiftElement')
          $L(lB).find('.rightShiftElement').children('.lyteListBoxRightElement').addClass('lyteLBRightActive')
          $L(lB).find('.rightShiftElement').children('.lyteListBoxRightElement').addClass('lyteLBRightMoveElement')

          this.setData('rightShiftSelectIndex', $L(clickedEle)[0].getAttribute('index'));

        }
      }


    } else if ($L(clickedEle).hasClass('lyteListBoxLeftElement') || $L(clickedEle).hasClass('lyteListBoxRightElement')) {

      if (event.metaKey || event.ctrlKey) {

        /*

        * CTRL/CMD key down and select elements

        */


        if (this.panelSide(clickedEle) === "left") {
          this.setData('activeSide' , 'left')
          if ($L(lB).find('.lyteLBRightActive').length > 0) {
            $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
          }


          if (!isCurrentElementDisabled) {

            if ($L(clickedEle).hasClass('lyteListBoxLeftElement') && !$L(clickedEle).hasClass('lyteLBLeftActive')) {

              this.setData('leftShiftSelectIndex', '')
              var cwrap = clickedEle.parentElement
              cwrap = $L(cwrap).find('.lyteListBoxLeftWrap');
              if (cwrap.length > 1) {
                $L(cwrap).find('.lyteListBoxLeftElement').addClass('lyteLBLeftActive')
              }

              $L(clickedEle).addClass('lyteLBLeftActive')
              Lyte.arrayUtils(this.getData('selectedIndexLeft'), 'push', leftEles.indexOf(clickedEle))
              this.setData('leftShiftSelectIndex', '')
              $L(clickedEle).data('elementData', this.getData('ltPropLeftData')[leftEles.indexOf(clickedEle)]);

            } else {

              if (wrap.length > 1) {
                $L(wrap).find('.lyteListBoxLeftElement').removeClass('lyteLBLeftActive')
              }
              $L(clickedEle).removeClass('lyteLBLeftActive')
              Lyte.arrayUtils(this.getData('selectedIndexLeft'), 'removeAt', $L(clickedEle).data().selectOrder - 1, 1)
              $L(clickedEle).data()
            }
          }

        } else {
          this.setData('activeSide' , 'right')
          if ($L(lB).find('.lyteLBLeftActive').length > 0) {
            $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
            this.setData('activeSide' , 'left')
          }
          if ((!(this.getData('ltPropRightData')[notDisabled][this.getData('ltPropMandateKey')]))) {

            if ($L(clickedEle).hasClass('lyteListBoxRightElement') && !$L(clickedEle).hasClass('lyteLBRightActive')) {

              this.setData('rightShiftSelectIndex', $L(clickedEle)[0].getAttribute('index'));
              var cwrap = $L(clickedEle).closest('.lyteListBoxRightWrap')[0]
              cwrap = $L(cwrap).find('.lyteListBoxRightWrap');
              if (cwrap.length > 1) {
                $L(cwrap).find('.lyteListBoxRightElement').addClass('lyteLBRightActive')
              }

              // $L(clickedEle).closest('.lyteListBoxRightWrap').addClass('rightShiftElement')

              $L(clickedEle).addClass('lyteLBRightActive')
              Lyte.arrayUtils(this.getData('selectedIndexRight'), 'push', rightEles.indexOf(clickedEle))
              this.setData('rightShiftSelectIndex', rightEles.indexOf(clickedEle) - 1)
              $L(clickedEle).data('elementData', this.getData('ltPropRightData')[rightEles.indexOf(clickedEle)]);

            } else {

              if (wrap.length > 1) {
                $L(wrap).find('.lyteListBoxRightElement').removeClass('lyteLBRightActive')
              }

              $L(clickedEle).removeClass('lyteLBRightActive')
              Lyte.arrayUtils(this.getData('selectedIndexRight'), 'removeAt', $L(clickedEle).data().selectOrder - 1, 1)
              $L(clickedEle).data()
            }

          }
        }





      } else {

        $L(lB).find('.lyteListBoxLeftElement[aria-selected=true]').attr('aria-selected' , false)

        /*

        * Normal mouse clicks

        */


        if (this.panelSide(clickedEle) === "left") {
          this.setData('activeSide' , 'left')

          if ($L(lB).find('.lyteLBRightActive').length > 0) {
            $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
            $L(lB).find('.lyteLBRightMoveElement').removeClass('lyteLBRightMoveElement')
          }
          if ($L(lB).find('.leftShiftElement').length > 0) {
            $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
          }

          if (!isCurrentElementDisabled) {
            $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
            $L(lB).find('.lyteLBLeftMoveElement').removeClass('lyteLBLeftMoveElement')
            this.setData('selectedIndexLeft', [])


            if (!$L(clickedEle).hasClass('lyteLBLeftActive')) {

              this.setData('leftShiftSelectIndex', "");

              if ($L(clickedEle).hasClass('lyteListBoxLeftElement')) {

                if (clickedEle.getAttribute('index').split(" ").length > 1) {

                  $L(clickedEle).addClass('lyteLBLeftActive');
                  $L(clickedEle).addClass('lyteLBLeftMoveElement');

                  Lyte.arrayUtils(this.getData('selectedIndexLeft'), 'push', leftEles.indexOf(clickedEle))

                } else {
                  if (wrap.length > 1) {
                    $L(wrap).find('.lyteListBoxLeftElement').addClass('lyteLBLeftActive')
                  }

                  $L(clickedEle).addClass('lyteLBLeftActive');
                  $L(clickedEle).addClass('lyteLBLeftMoveElement');

                  Lyte.arrayUtils(this.getData('selectedIndexLeft'), 'push', leftEles.indexOf(clickedEle))

                }

              }

            }
          }

        } else {
          this.setData('activeSide' , 'right')
          if ($L(lB).find('.lyteLBLeftActive').length > 0) {
            $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
            $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
            $L(lB).find('.lyteLBLeftMoveElement').removeClass('lyteLBLeftMoveElement')
          }
          if ($L(lB).find('.rightShiftElement').length > 0) {
            $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
          }
          if ((!(this.getData('ltPropRightData')[notDisabled][this.getData('ltPropMandateKey')])) ||
              this.getData('showRemoveBtn')
             ) {
            $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
            $L(lB).find('.lyteLBRightMoveElement').removeClass('lyteLBRightMoveElement')
            this.setData('selectedIndexRight', [])

            if (!$L(clickedEle).hasClass('lyteLBRightActive')) {

              this.setData('rightShiftSelectIndex', "");

              if ($L(clickedEle).hasClass('lyteListBoxRightElement')) {
                if (clickedEle.getAttribute('index').split(" ").length > 1) {

                  $L(clickedEle).addClass('lyteLBRightActive');
                  $L(clickedEle).addClass('lyteLBRightMoveElement');

                  Lyte.arrayUtils(this.getData('selectedIndexRight'), 'push', rightEles.indexOf(clickedEle))

                } else {

                  if (wrap.length > 1) {
                    $L(wrap).find('.lyteListBoxRightElement').addClass('lyteLBRightActive')
                  }

                  // $L(clickedEle).closest('.lyteListBoxRightWrap').addClass('rightShiftElement')
                  $L(clickedEle).addClass('lyteLBRightActive');
                  $L(clickedEle).addClass('lyteLBRightMoveElement');

                  Lyte.arrayUtils(this.getData('selectedIndexRight'), 'push', rightEles.indexOf(clickedEle))


                }
              }
            }
          }
        }
      }
    }

    $L(lB).find('.lyteListBoxLeftElement').attr('aria-selected' , false)
    $L(lB).find('.lyteLBLeftActive').attr('aria-selected' , true)
    $L(lB).find('.lyteListBoxRightElement').attr('aria-selected' , false)
    $L(lB).find('.lyteLBRightActive').attr('aria-selected' , true)

    this.disableButtons();

  },

  disableButtons : function(){

    var lB = this.$node;
    if($L(lB).find('.lyteLBLeftActive').length > 0){
      $L(this.$node).find('.lyteLBTBMoveRight').removeClass('lyteDLBDisabledToolbar')
    } else {
      $L(this.$node).find('.lyteLBTBMoveRight').addClass('lyteDLBDisabledToolbar')
    }

    if($L(lB).find('.lyteLBRightActive').length > 0){
      $L(this.$node).find('.lyteLBTBMoveLeft').removeClass('lyteDLBDisabledToolbar')
      $L(this.$node).find('.lyteLBTBMoveUp').removeClass('lyteDLBDisabledToolbar')
      $L(this.$node).find('.lyteLBTBMoveDown').removeClass('lyteDLBDisabledToolbar')
      if($L(lB).find('.lyteLBRightActive').length > 1){
        $L(this.$node).find('.lyteLBTBMoveUp').addClass('lyteDLBDisabledToolbar')
        $L(this.$node).find('.lyteLBTBMoveDown').addClass('lyteDLBDisabledToolbar')
      }
    } else {
      $L(this.$node).find('.lyteLBTBMoveLeft').addClass('lyteDLBDisabledToolbar')
      $L(this.$node).find('.lyteLBTBMoveUp').addClass('lyteDLBDisabledToolbar')
      $L(this.$node).find('.lyteLBTBMoveDown').addClass('lyteDLBDisabledToolbar')
    }

  },

  panelSide: function(ele) {

    if ($L(ele).hasClass('lyteListBoxLeftElement')) {
      return 'left'
    } else if ($L(ele).hasClass('lyteListBoxRightElement')) {
      return 'right'
    }

  },

  updateInsertIndex: function(th) {
    this.setData('insertAtRightInd', this.getData('insertAtRightInd') + 1)
  },
  reduceInsertIndex: function(th) {
    var insertInd = this.getData('insertAtRightInd')
    if(insertInd <= 0){
      insertInd = 1
    }
    this.setData('insertAtRightInd',  (insertInd - 1))
  },

  getActiveElements: function(activeEles, dataString) {
    var th = this
    var toMoveDatas = []
    var parInd;
    for (var i = 0; i < activeEles.length; i++) {
      var index = activeEles[i].getAttribute('index').split(" ").map(this.indexCallback);
      var elemData;
      if (!$L(activeEles[i]).hasClass('lyteListBoxLeftParentElement')) {
        if (index.length > 1) {
          elemData = th.getData(dataString)[index[0]].childrenList[index[1]]
          if (!parInd) {
            parInd = toMoveDatas.length - 1;
          }
          toMoveDatas.push(elemData)
        } else {
          elemData = th.getData(dataString)[index[0]]
          elemData = Object.assign({}, elemData);
          if (elemData.childrenList) {
            elemData.childrenList = []
          }
          toMoveDatas.push(elemData)
          if (parInd) {
            parInd = undefined
          }
        }
      }
    }
    return toMoveDatas
  },

  sESPF: function(activeEles, toMoveDatas, mainData, dropIndex, allElements) {
    /*
     *  sort elements in same panel function
     */

    var startInd = activeEles[0].getAttribute('index').split(" ").map(this.indexCallback);
    var dropElem = $L(this.$node).find(allElements)[dropIndex]
    for (var i = 0; i < activeEles.length; i++) {

      if ((!($L(activeEles[i]).hasClass('lyteListBoxLeftParentElement'))) && (!($L(activeEles[i]).hasClass('lyteListBoxRightParentElement')))) {
        var ind = activeEles[i].getAttribute('index').split(" ").map(this.indexCallback);
        Lyte.arrayUtils(this.getData(mainData), 'removeAt', ind, 1);
      }
    }

    if(dropElem){
      dropIndex = dropElem.getAttribute('index').split(" ").map(this.indexCallback)[0];
    } else {
      dropIndex = this.getData(mainData).length;
    }
    Lyte.arrayUtils(this.getData(mainData), 'insertAt', dropIndex, toMoveDatas);

  },

  resetListValues : function(){
    this.setData('selectedIndexLeft', [])
    this.setData('selectedIndexRight', [])
    this.setData('leftShiftSelectIndex', '')
    this.setData('rightShiftSelectIndex', '')
    this.setData('insertAtLeftInd', 0)
    this.setData('insertAtRightInd', 0)
  },

  changeActiveToUp : function(){
    var lB = this.$node
    $L(lB).find('.lyteListBoxLeftElement[aria-selected=true]').attr('aria-selected' , false)
    var activeElements = $L('.lyteLBLeftActive')
    if(this.getData('activeSide') === "left"){
      activeElements = $L('.lyteLBLeftActive')
    } else if(this.getData('activeSide') === "right"){
      activeElements = $L('.lyteLBRightActive')
    }
    if(activeElements.length > 0){
      var lastActiveElement = parseInt(activeElements[0].getAttribute('dom-index'))
      var newActiveElementInd = lastActiveElement - 1
      if(newActiveElementInd < 1){
        newActiveElementInd = 1
      }
      if(this.getData('activeSide') === 'left'){
        if(lastActiveElement > 0){
          $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
          $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftMoveElement')
          $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
        }
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBLeftActive')
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBLeftMoveElement')
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").attr('aria-selected' , true);
        this.setData('listboxLeftAriaDescendant' , $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").attr('id'))
        this.moveElementInView($L(lB).find('.lyteListboxleftElementWrap')[0], $L(lB).find('.lyteLBLeftActive')[0])
      } else if(this.getData('activeSide') === "right"){
        if(lastActiveElement > 0){
          $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
          $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightMoveElement')
          $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
        }
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBRightActive')
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBRightMoveElement')
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").attr('aria-selected' , true);
        this.setData('listboxRightAriaDescendant' , $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").attr('id'))
        this.moveElementInView($L(lB).find('.lyteListboxRightPanel')[0], $L(lB).find('.lyteLBRightActive')[0])
      }
      this.setData('previousClickedElemDomInd' , newActiveElementInd)
    }
  },

  changeActiveToDown : function(){

    var lB = this.$node
    $L(lB).find('.lyteListBoxLeftElement[aria-selected=true]').attr('aria-selected' , false)
    var activeElements = $L('.lyteLBLeftActive')
    if(this.getData('activeSide') === "left"){
      activeElements = $L('.lyteLBLeftActive')
    } else if(this.getData('activeSide') === "right"){
      activeElements = $L('.lyteLBRightActive')
    }

    if(activeElements.length > 0){

      var lastActiveElement = parseInt(activeElements[activeElements.length-1].getAttribute('dom-index'))
      var newActiveElementInd = lastActiveElement + 1
      if(this.getData('activeSide') === 'left'){
        // if(newActiveElementInd > $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent,.lyteSearchHidden)').length){
        //   newActiveElementInd = $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent,.lyteSearchHidden)').length
        // }
        if(newActiveElementInd > $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').length){
          newActiveElementInd = $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').length
        }
        if(lastActiveElement > 0){
          $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
          $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftMoveElement')
          $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
        }
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBLeftActive')
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBLeftMoveElement')
        $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").attr('aria-selected' , true);
        this.setData('listboxLeftAriaDescendant' , $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']").attr('id'))
        this.moveElementInView($L(lB).find('.lyteListboxleftElementWrap')[0], $L(lB).find('.lyteLBLeftActive')[0])
      } else if(this.getData('activeSide') === "right"){
        if(newActiveElementInd > $L(lB).find('.lyteListBoxRightElement').length){
          newActiveElementInd = $L(lB).find('.lyteListBoxRightElement').length
        }
        if(lastActiveElement > 0){
          $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
          $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightMoveElement')
          $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
        }
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBRightActive')
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").addClass('lyteLBRightMoveElement')
        $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").attr('aria-selected' , true);
        this.setData('listboxRightAriaDescendant' , $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']").attr('id'))
        this.moveElementInView($L(lB).find('.lyteListboxRightPanel')[0], $L(lB).find('.lyteLBRightActive')[0])
      }
      this.setData('previousClickedElemDomInd' , newActiveElementInd)
    }
  },
  moveActiveToLeft : function(){
    // this.resetListValues();
    var lB = this.$node
    $L(lB).find('[aria-selected=true]').attr('aria-selected' , false)
    $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive')
    $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
    $L(lB).find('.lyteLBRightMoveElement').removeClass('lyteLBRightMoveElement')
    this.setData('activeSide' , 'left')
    var leftElem = $L(lB).find('.lyteListBoxLeftElement')[0]
    $L(leftElem).addClass('lyteLBLeftActive')
    $L(leftElem).addClass('lyteLBLeftMoveElement')
    $L(leftElem).attr('aria-selected' , true)
  },
  moveActiveToRight : function(){
    // this.resetListValues();
    var lB = this.$node
    $L(lB).find('[aria-selected=true]').attr('aria-selected' , false)
    $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
    $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
    $L(lB).find('.lyteLBLeftMoveElement').removeClass('lyteLBLeftMoveElement')
    this.setData('activeSide' , 'right')
    var rightElem = $L(lB).find('.lyteListBoxRightElement')[0]
    $L(rightElem).addClass('lyteLBRightActive')
    $L(rightElem).addClass('lyteLBRightMoveElement')
    $L(rightElem).attr('aria-selected' , true)
  },

  selectElementsUp : function(){

    var lB = this.$node
    var activeElements = $L('.lyteLBLeftActive')
    if(this.getData('activeSide') === "left"){
      activeElements = $L('.lyteLBLeftActive')
    } else if(this.getData('activeSide') === "right"){
      activeElements = $L('.lyteLBRightActive')
    }

    var firstDomInd = this.getData('previousClickedElemDomInd')
    var lastDomInd = parseInt($L(activeElements[activeElements.length-1]).attr('dom-index'))

    var lastActiveElement
    var newActiveElementInd

    if(this.getData('activeSide') === 'left'){
      var leftElem
      if(firstDomInd < lastDomInd){
        lastActiveElement = parseInt(activeElements[activeElements.length-1].getAttribute('dom-index')) + 1
        newActiveElementInd = lastActiveElement - 1
        leftElem = $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']")
        leftElem.removeClass('lyteLBLeftActive')
        leftElem.removeClass('lyteLBLeftMoveElement')
        leftElem.closest('.lyteListBoxLeftWrap').removeClass('leftShiftElement')
      } else if(firstDomInd >= lastDomInd){
        lastActiveElement = parseInt(activeElements[0].getAttribute('dom-index'))
        newActiveElementInd = lastActiveElement - 1
        leftElem = $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']")
        leftElem.addClass('lyteLBLeftActive')
        leftElem.addClass('lyteLBLeftMoveElement')
        leftElem.closest('.lyteListBoxLeftWrap').addClass('leftShiftElement')
      }
      $L('.lyteListBoxRequiredParent').removeClass('leftShiftElement')
      $L('.lyteListBoxRequiredParent').find('.lyteListBoxLeftElement').removeClass('lyteLBLeftActive lyteLBLeftMoveElement')
      this.setData('listboxLeftAriaDescendant',leftElem.attr('id'))
      this.setData('leftShiftSelectIndex' , leftElem.attr('index'))
    } else if(this.getData('activeSide') === 'right'){
      var rightElem
      if(firstDomInd < lastDomInd){
        lastActiveElement = parseInt(activeElements[activeElements.length-1].getAttribute('dom-index')) + 1
        newActiveElementInd = lastActiveElement - 1
        rightElem = $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']")
        rightElem.removeClass('lyteLBRightActive')
        rightElem.removeClass('lyteLBRightMoveElement')
        rightElem.closest('.lyteListBoxRightWrap').removeClass('rightShiftElement')
      } else if(firstDomInd >= lastDomInd){
        lastActiveElement = parseInt(activeElements[0].getAttribute('dom-index'))
        newActiveElementInd = lastActiveElement - 1
        rightElem = $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']")
        rightElem.addClass('lyteLBRightActive')
        rightElem.addClass('lyteLBRightMoveElement')
        rightElem.closest('.lyteListBoxRightWrap').addClass('rightShiftElement')
      }
      $L('.lyteListBoxRequiredParent').removeClass('rightShiftElement')
      $L('.lyteListBoxRequiredParent').find('.lyteListBoxRightElement').removeClass('lyteLBRightActive lyteLBRightMoveElement')
      this.setData('listboxRightAriaDescendant',rightElem.attr('id'))
      this.setData('rightShiftSelectIndex' , rightElem.attr('index'))
    }

  },
  selectElementsDown : function(){
    var lB = this.$node
    var activeElements = $L('.lyteLBLeftActive')
    if(this.getData('activeSide') === "left"){
      activeElements = $L('.lyteLBLeftActive')
    } else if(this.getData('activeSide') === "right"){
      activeElements = $L('.lyteLBRightActive')
    }

    var firstDomInd = this.getData('previousClickedElemDomInd')
    var lastDomInd = parseInt($L(activeElements[0]).attr('dom-index'))

    var lastActiveElement
    var newActiveElementInd

    if(this.getData('activeSide') === 'left'){
      var leftElem
      if(firstDomInd > lastDomInd){
        lastActiveElement = parseInt(activeElements[0].getAttribute('dom-index')) - 1
        newActiveElementInd = lastActiveElement + 1
        leftElem = $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']")
        leftElem.removeClass('lyteLBLeftActive')
        leftElem.removeClass('lyteLBLeftMoveElement')
        leftElem.closest('.lyteListBoxLeftWrap').removeClass('leftShiftElement')
      } else if(firstDomInd <= lastDomInd){
        lastActiveElement = parseInt(activeElements[activeElements.length-1].getAttribute('dom-index'))
        newActiveElementInd = lastActiveElement + 1
        leftElem = $L(".lyteListBoxLeftElement[dom-index='"+newActiveElementInd+"']")
        leftElem.addClass('lyteLBLeftActive')
        leftElem.addClass('lyteLBLeftMoveElement')
        leftElem.closest('.lyteListBoxLeftWrap').addClass('leftShiftElement')
      }
      $L('.lyteListBoxRequiredParent').removeClass('leftShiftElement')
      $L('.lyteListBoxRequiredParent').find('.lyteListBoxLeftElement').removeClass('lyteLBLeftActive lyteLBLeftMoveElement')
      this.setData('listboxLeftAriaDescendant',leftElem.attr('id'))
      this.setData('leftShiftSelectIndex' , leftElem.attr('index'))
    } else if(this.getData('activeSide') === 'right'){
      var rightElem
      if(firstDomInd > lastDomInd){
        lastActiveElement = parseInt(activeElements[0].getAttribute('dom-index')) - 1
        newActiveElementInd = lastActiveElement + 1
        rightElem = $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']")
        rightElem.removeClass('lyteLBRightActive')
        rightElem.removeClass('lyteLBRightMoveElement')
        rightElem.closest('.lyteListBoxRightWrap').removeClass('rightShiftElement')
      } else if(firstDomInd <= lastDomInd){
        lastActiveElement = parseInt(activeElements[activeElements.length-1].getAttribute('dom-index'))
        newActiveElementInd = lastActiveElement + 1
        rightElem = $L(".lyteListBoxRightElement[dom-index='"+newActiveElementInd+"']")
        rightElem.addClass('lyteLBRightActive')
        rightElem.addClass('lyteLBRightMoveElement')
        rightElem.closest('.lyteListBoxRightWrap').addClass('rightShiftElement')
      }
      $L('.lyteListBoxRequiredParent').removeClass('rightShiftElement')
      $L('.lyteListBoxRequiredParent').find('.lyteListBoxRightElement').removeClass('lyteLBRightActive lyteLBRightMoveElement')
      this.setData('listboxRightAriaDescendant',rightElem.attr('id'))
      this.setData('rightShiftSelectIndex' , rightElem.attr('index'))
    }
  },

  handleMinRequired : function(during){
    var lB = this.$node;
    if(during === 'right'){
      if(!this.getData('userDefinedMinCount')){
        this.setData('ltPropMinimumRequiredCount' , $L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').length)
      }
    }

    if($L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').length > this.getData('ltPropMinimumRequiredCount')){
      this.setData('showRemoveBtn' , true)
      $L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').removeClass('lyteListBoxRequiredItem')
      $L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').closest('.lyteListBoxRightWrap').removeClass('lyteListBoxRequiredParent')
    } else {
      this.setData('showRemoveBtn' , false)
      $L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').addClass('lyteListBoxRequiredItem')
      $L(lB).find('.lyteListboxRightPanel').find('.lyteLBMandateItem').closest('.lyteListBoxRightWrap').addClass('lyteListBoxRequiredParent')
    }
  },

  mERFN: function(th) {

    /*

    *  Move Elements Right Function
    *  Used to move either a selected single or more elements to move from left panel to right panel

    */


    if (!th) {
      th = this;
    }
    var lB = th.$node;

    $L(lB).find('.lyteLBLeftActive.lyteLBdragClone').removeClass('lyteLBLeftActive')
    var activeEles = $L(lB).find('.lyteLBLeftActive')

    if ((th.getData('ltPropRightData').length + activeEles.length > th.getData('ltPropMaxCount')) && ((this.getData('ltPropMaxCount') > -1))) {
      $L(lB).find('.lyteLBLeftActive').css({'display' : ''})
      $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
      th.executeMethod('onMaxCountReached', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas);
      return
    }
    var value = this.getData('ltPropAssociateParent')

    var parInd;

    var toMoveDatas = th.getActiveElements(activeEles, 'ltPropLeftData');

    var onBeforeRightVal = th.executeMethod('onBeforeRight', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas);

    if($L(lB).find('.lyteLBLeftActive').length <= 0){
      $L(lB).find('.lyteLBRightActive').css({'display' : ''})
    } else {
      $L(lB).find('.lyteLBLeftActive').css({'display' : ''})
    }


    if(onBeforeRightVal !== false){

      toMoveDatas = []
      parInd = undefined

      function getIndex(arr, par) {
        var v = arr.findIndex(function(item) {
          return item[value] == par[value]
        })
        return v
      }

      for (var i = 0; i < activeEles.length; i++) {
        var elementData;
        var elemData;
        var ind = activeEles[i].getAttribute('index').split(" ").map(this.indexCallback);
        var currentData = th.getData('ltPropLeftData')[ind[0]]

        var parentElement = $L(lB).find('.lyteListBoxLeftElement')[ind[0]]

        if ((!$L(activeEles[i]).hasClass('lyteListBoxLeftParentElement')) && (!$L(activeEles[i]).closest('.lyteListBoxLeftWrap').hasClass('lyteLBDisabledElement'))) {
          if ((ind.length > 1)) {
            elementData = th.getData('ltPropLeftData')[ind[0]].childrenList[ind[1]]
            elemData = elementData
            var parentDiv = $L(activeEles[i]).closest('.lyteLBLeftChildWrap')
            var parData = th.getData('ltPropLeftData')[ind[0]]
            if (elementData) {
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'insertAt', th.getData('insertAtRightInd'), elementData);
              th.animateBackgroundManual('right' , th.getData('insertAtRightInd'));
              var selectedDiv = $L(lB).find('.lyteListBoxRightElement')[th.getData('insertAtRightInd')]
              selectedDiv.setAttribute('setParent', th.getData('ltPropLeftData')[ind[0]][th.getData('ltPropAssociateParent')])
              th.updateInsertIndex();
              Lyte.arrayUtils(th.getData('ltPropLeftData')[ind[0]].childrenList, 'removeAt', ind[1], 1);
              $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive')
              if (th.getData('ltPropLeftData')[ind[0]].childrenList.length <= 0) {
                $L(parentDiv).closest('.lyteListBoxLeftWrap').addClass('lyteLBoxDisabledParent')
              } else {
                $L(parentDiv).closest('.lyteListBoxLeftWrap').removeClass('lyteLBoxDisabledParent')
              }
            }
          } else {
            if (!(currentData.childrenList)) {
              elementData = th.getData('ltPropLeftData')[ind]
              Lyte.arrayUtils(th.getData('ltPropRightData'), 'insertAt', th.getData('insertAtRightInd'), elementData);
              th.animateBackgroundManual('right' , th.getData('insertAtRightInd'));
              th.updateInsertIndex();
              Lyte.arrayUtils(th.getData('ltPropLeftData'), 'removeAt', ind, 1);
              toMoveDatas.push(elementData)
            }
          }
        }
      }

      th.setData('selectedIndexLeft', [])
      th.setData('leftShiftSelectIndex', "")


      if ((th.getData('ltPropRightData').length >= th.getData('ltPropMaxCount')) && (this.getData('ltPropMaxCount') > -1)) {
        th.executeMethod('onMaxCountReached', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas);
        $L(lB).find('.lyteListboxLeftPanel').find('.lyteListBoxLeftWrap').addClass('lyteLBDisabledElement')
        th.setData('itemsMaxed' , true);
      }

    } else {

      th.updateInsertIndex();
      th.setData('selectedIndexLeft', [])
      th.setData('leftShiftSelectIndex', "")

      th.setData('insertAtRightInd', th.getData('ltPropRightData').length)
      if ((th.getData('ltPropRightData').length >= th.getData('ltPropMaxCount')) && (this.getData('ltPropMaxCount') > -1)) {
        th.executeMethod('onMaxCountReached', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas);
        $L(lB).find('.lyteListboxLeftPanel').find('.lyteListBoxLeftWrap').addClass('lyteLBDisabledElement')
      }
    }
    
    $L(lB).find('.lyteLBMandateItem').closest('.lyteListBoxRightWrap').addClass('lyteLBMandateParent')
    if(this.getData('ltPropLeftData').length < 1){
      $L(lB).find('lyte-input')[0].setData('ltPropDisabled' , true)
    }

    this.updateDomIndex()

    this.handleMinRequired('right')

    if(toMoveDatas.length > 1){
      this.setData('ariaLiveContent' , (toMoveDatas.length + ' Elements moved to right'))
    } else {
      this.setData('ariaLiveContent' , (toMoveDatas.length + ' Element moved to right'))
    }
    this.setData('ariaLiveContentBoolean' , true);

    if($L(lB).find('.lyteListBoxLeftElement').length === $L(lB).find('.lyteSearchHidden').length){
      this.setData('noResultsFound' , true)
    } else {
      this.setData('noResultsFound' , false)
    }

    setTimeout(function(){
      th.setData('ariaLiveContent' , '')
      th.setData('ariaLiveContentBoolean' , false)
    },1000)

    this.setData('listboxLeftAriaDescendant' , '')
    this.setData('listboxRightAriaDescendant' , '')

    $L(lB).find('.lyteListboxRightPanel')[0].scrollTop = $L(lB).find('.lyteListboxRightPanel')[0].scrollHeight;

    var onRightVal = th.executeMethod('onMoveRight', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas)

    if((onRightVal !== undefined) && (!onRightVal)){
      return
    }

    // after

  },

  clearAllActive : function(side){

    var lB = this.$node;

    if(!side){
      side = 'both'
    }

    if(side === "right" || side === "both"){
      $L(lB).find('.lyteLBRightActive').removeClass('lyteLBRightActive lyteLBRightMoveElement')
      $L(lB).find('.rightShiftElement').removeClass('rightShiftElement')
    }
    if(side === "left" || side === "both"){
      $L(lB).find('.lyteLBLeftActive').removeClass('lyteLBLeftActive lyteLBLeftMoveElement')
      $L(lB).find('.leftShiftElement').removeClass('leftShiftElement')
    }
    $L(lB).find('.lyteLBTBMoveRight').addClass('lyteDLBDisabledToolbar')
    $L(lB).find('.lyteLBTBMoveLeft').addClass('lyteDLBDisabledToolbar')

  },


  mELFN: function(th) {


    /*

    *  Move Elements Left Function
    *  Used to move either a selected single or more elements to move from Right panel to left panel

    */


    if (!th) {
      th = this;
    }
    var lB = th.$node;
    $L(lB).find('.lyteLBRightActive.lyteLBdragClone').removeClass('lyteLBRightActive')
    var activeEles = $L(lB).find('.lyteLBRightActive')

    var value = this.getData('ltPropAssociateParent')

    var toMoveDatas = []
    var parInd;

    var toMoveDatas = th.getActiveElements(activeEles, 'ltPropRightData');

    var onBeforeLeftVal = th.executeMethod('onBeforeLeft', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas)

    if($L(lB).find('.lyteLBLeftActive').length <= 0){
      $L(lB).find('.lyteLBRightActive').css({'display' : ''})
    } else {
      $L(lB).find('.lyteLBLeftActive').css({'display' : ''})
    }

    if(th.getData('itemsMaxed')){
      th.setData('itemsMaxed' , false);
    }

    if(onBeforeLeftVal !== false){

      toMoveDatas = []
      parInd = undefined

      function getIndex(arr, par) {
        var v = arr.findIndex(function(item) {
          return item[value] == par[value]
        })
        return v
      }

      function getI(arr, val) {
        var i = arr.findIndex(function(item) {
          return item[value] == val
        })
        return i;
      }

      for (var i = 0; i < activeEles.length; i++) {
        var elementData;
        var elemData;
        var ind = activeEles[i].getAttribute('index').split(" ").map(this.indexCallback);
        var currentData = th.getData('ltPropRightData')[ind[0]]

        var parentElement = $L(lB).find('.lyteListBoxRightElement')[ind[0]]

        if ($L(activeEles[i])[0].getAttribute('setParent').length > 0) {

          var parI = getI(th.getData('ltPropLeftData'), $L(activeEles[i])[0].getAttribute('setParent'));
          elementData = th.getData('ltPropRightData')[ind]
          Lyte.arrayUtils(th.getData('ltPropLeftData')[parI].childrenList, 'push', elementData);
          // Lyte.arrayUtils(th.getData('ltPropLeftData')[parI].childrenList, 'insertAt', 0 , elementData);
          Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', ind, 1);
          th.reduceInsertIndex();

          var newChildInd = parI.toString() + " " + (th.getData('ltPropLeftData')[parI].childrenList.length-1).toString()

          th.animateBackgroundManual('left' , newChildInd)

        } else {

          elementData = th.getData('ltPropRightData')[ind]
          Lyte.arrayUtils(th.getData('ltPropLeftData'), 'push', elementData);
          // Lyte.arrayUtils(th.getData('ltPropLeftData'), 'insertAt', 0 , elementData);
          Lyte.arrayUtils(th.getData('ltPropRightData'), 'removeAt', ind, 1);
          th.reduceInsertIndex();
          toMoveDatas.push(elementData)

          var newElemInd = th.getData('ltPropLeftData').length-1

          th.animateBackgroundManual('left' , newElemInd)

        }

      }

      th.setData('selectedIndexRight', [])
      th.setData('rightShiftSelectIndex', "")

      $L(lB).find('.lyteListboxleftElementWrap')[0].scrollTop = $L(lB).find('.lyteListboxleftElementWrap')[0].scrollHeight;

      if (th.getData('ltPropRightData').length < th.getData('ltPropMaxCount')) {
        $L(lB).find('.lyteLBDisabledElement').removeClass('lyteLBDisabledElement')
      }
    } else {

      th.setData('insertAtRightInd', th.getData('ltPropRightData').length)

      if (th.getData('ltPropRightData').length < th.getData('ltPropMaxCount')) {
        $L(lB).find('.lyteLBDisabledElement').removeClass('lyteLBDisabledElement')
      }

    }

    if(this.getData('ltPropLeftData').length > 0){
      $L(lB).find('lyte-input')[0].setData('ltPropDisabled' , false)
    }

    this.updateDomIndex()

    this.handleMinRequired('left')

    if(toMoveDatas.length > 1){
      this.setData('ariaLiveContent' , (toMoveDatas.length + ' Elements moved to left'))
    } else {
      this.setData('ariaLiveContent' , (toMoveDatas.length + ' Element moved to left'))
    }
    this.setData('ariaLiveContentBoolean' , true);

    setTimeout(function(){
      th.setData('ariaLiveContent' , '')
      th.setData('ariaLiveContentBoolean' , false)
    },1000)

    this.setData('listboxLeftAriaDescendant' , '')
    this.setData('listboxRightAriaDescendant' , '')

    var onLeftVal = th.executeMethod('onMoveLeft', th.getData('ltPropLeftData'), th.getData('ltPropRightData'), toMoveDatas)

    if((onLeftVal !== undefined) && (!onLeftVal)){
      return
    }

    // after

  },

  updateDomIndex : function(){
    var lB = this.$node;

    $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').map(function(x){
      $L(this).attr("dom-index" , x+1)
      $L(this).attr("id" , "lyteLbLeft_"+(x+1))
    })

    $L(lB).find('.lyteListBoxRightElement:not(.lyteListBoxRequiredItem):not(.lyteLBoxDisabledParent):not(.lyteSearchHidden)').map(function(x){
      $L(this).attr("dom-index" , x+1)
      $L(this).attr("id" , "lyteLbRight_"+(x+1))
    })

    // var firstLeftEle = $L(lB).find('.lyteListBoxLeftElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent)')[0]
    // var firstRightEle = $L(lB).find('.lyteListBoxRightElement:not(.lyteListBoxRequiredItem,.lyteLBoxDisabledParent)')[0]

    // $L(lB).find('.lyteListBoxLeftElement').removeAttr('tabindex')
    // $L(lB).find('.lyteListBoxRightElement').removeAttr('tabindex')

    // $L(firstLeftEle).attr('tabindex' , '0')
    // $L(firstRightEle).attr('tabindex' , '0')

  },

  didDestroy: function() {
    this.setData('selectedIndexLeft', [])
    this.setData('selectedIndexRight', [])
    this.setData('leftShiftSelectIndex', '')
    this.setData('rightShiftSelectIndex', '')
    this.setData('insertAtLeftInd', 0)
    this.setData('insertAtRightInd', 0)
    this.setData('listboxLeftAriaDescendant' , '')
    this.setData('listboxRightAriaDescendant' , '')
    this.setData('ariaLabelledById' , '');
    this.setData('focusActiveBoolean' , false);
    document.removeEventListener('click' , this.$node.clearAllActive)
    document.removeEventListener('keydown' , this.$node.keyboardEvents)
  }
});
