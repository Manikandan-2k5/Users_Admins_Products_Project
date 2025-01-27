/**
 * Renders a popover
 * @component lyte-popover
 * @version 1.0.0
 * @dependencies lyte-wormhole
 * @methods onBeforeShow,onShow,onBeforeClose,onClose,onResize,onScroll,onPositionChange
 * @utility alignPopover,calculateOffset,trapFocus
 */

 Lyte.Component.register("lyte-popover",{
_template:"<template tag-name=\"lyte-popover\"> <template is=\"if\" value=\"{{ltPropBindToBody}}\"><template case=\"true\"> <lyte-wormhole case=\"true\" style=\"{{if(ltPropShowCopy,'visibility:visible','visibility:hidden')}}\" on-before-append=\"{{method(&quot;beforeWormholeAppend&quot;)}}\" lt-prop-show=\"{{ltPropShow}}\"> <template is=\"registerYield\" yield-name=\"lyte-content\"> <div class=\"popoverWrapper {{ltPropWrapperClass}}\"> <div class=\"{{if(ifEquals(ltPropAnimation,'zoom'),'lytePopover lyteZoom','lytePopover')}}\"> <template is=\"if\" value=\"{{ifEquals(ltPropType,&quot;callout&quot;)}}\"><template case=\"true\"> <span id=\"lytePopoverArrow\" class=\"lytePopoverArrowIcon\"></span> </template></template> <template is=\"if\" value=\"{{ltPropShowCloseButton}}\"> <template case=\"true\"><span class=\"lytePopoverClose\" onclick=\"{{action('close')}}\" tabindex=\"0\"></span></template> </template> <lyte-yield yield-name=\"popover\"></lyte-yield> </div> <template is=\"if\" value=\"{{ltPropFreeze}}\"> <template case=\"true\"><lyte-popover-freeze></lyte-popover-freeze></template> </template> </div> </template> </lyte-wormhole> </template></template> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"if","position":[1],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[1],"attr":{"style":{"name":"style","helperInfo":{"name":"if","args":["ltPropShowCopy","'visibility:visible'","'visibility:hidden'"]}}}},{"type":"registerYield","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"attr","position":[1,1,1]},{"type":"if","position":[1,1,1],"cases":{"true":{"dynamicNodes":[]}},"default":{}},{"type":"attr","position":[1,1,3]},{"type":"if","position":[1,1,3],"cases":{"true":{"dynamicNodes":[{"type":"attr","position":[0]}]}},"default":{}},{"type":"insertYield","position":[1,1,5]},{"type":"attr","position":[1,3]},{"type":"if","position":[1,3],"cases":{"true":{"dynamicNodes":[{"type":"componentDynamic","position":[0]}]}},"default":{}}]},{"type":"componentDynamic","position":[1]}]}},"default":{}}],
_observedAttributes :["ltPropShow","ltPropType","ltPropFreeze","ltPropShowCloseButton","ltPropCloseOnEscape","ltPropOriginElem","ltPropPosition","ltPropPlacement","ltPropDimmer","ltPropDraggable","ltPropAllowMultiple","ltPropScrollable","ltPropMaxHeight","ltPropMaxWidth","ltPropWidth","ltPropHeight","ltPropWrapperClass","ltPropBoundary","ltPropCloseOnBodyClick","ltPropDuration","ltPropOffset","ltPropOffsetFromTarget","ltPropBindToBody","ltPropHeaderPadding","ltPropContentPadding","ltPropFooterPadding","ltPropAnimation","ltPropWindowSpacing","ltPropForceScroll","ltPropAutoAlign","ltPropAria","ltPropAriaAttributes","ltPropPreventFocus","ltPropStopClick","ltPropIgnoreBoundary","ltPropMargin","ltPropCloseOnScroll","ltPropAllowContainment","buttons","ltPropShowCopy","visible","timeOutId","classTobeAdded","keys","first","arrowHidden","arrowEle","returnedFalse","transformOrigin","windowSpacing","lyteUnbound","prevOffsetVal","calculateHW","checkAria","prevRect","margin","modalElemWidth","modalElemHeight","dragRunning"],


    data: function(){
        return {
            //config from callee
            /**
             * @componentProperty {boolean} ltPropShow
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropShow":Lyte.attr("boolean",{"default": false}),

            /**
             * @componentProperty {callout|box} ltPropType
             * @version 1.0.0
             * @default callout
             */
            "ltPropType":Lyte.attr("string",{"default":"callout"}),

            /**
             * @componentProperty {boolean} ltPropFreeze
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropFreeze":Lyte.attr("boolean",{"default": true}),

            /**
             * @componentProperty {boolean} ltPropShowCloseButton
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropShowCloseButton":Lyte.attr("boolean",{"default": true}),

            /**
             * @componentProperty {boolean} ltPropCloseOnEscape
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropCloseOnEscape":Lyte.attr("boolean",{"default": true}),

            /**
             * @componentProperty {string} ltPropOriginElem
             * @version 1.0.0
             */
            "ltPropOriginElem":Lyte.attr("string",{"default":""}),

            /**
             * @experimental ltPropPosition
             */
            "ltPropPosition":Lyte.attr("string",{"default":"bottom"}),

            /**
             * @componentProperty {bottom|bottomLeft|bottomRight|top|topLeft|topRight|left|right} ltPropPlacement
             * @version 1.0.0
             */
            "ltPropPlacement":Lyte.attr("string",{"default":""}),

            /**
             * @typedef {object} dimmer
             * @property {colorstring} color
             * @property {string} opacity
             */
            /**
             * @componentProperty {dimmer} ltPropDimmer
             * @version 1.0.0
             */
            "ltPropDimmer":Lyte.attr("object",{"default":{"color":"black","opacity":"0.4"}}),

            /**
             * @componentProperty {boolean} ltPropDraggable
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropDraggable":Lyte.attr("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropAllowMultiple
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropAllowMultiple":Lyte.attr("boolean",{"default": false}),

            /**
             * @componentProperty {boolean} ltPropScrollable
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropScrollable":Lyte.attr("boolean",{"default": false}),

            /**
             * @componentProperty {string} ltPropMaxHeight
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropMaxHeight":Lyte.attr("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropMaxWidth
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropMaxWidth":Lyte.attr("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropWidth
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropWidth":Lyte.attr("string",{"default":""}),

            /**
             * @componentProperty {string} ltPropHeight
             * @version 1.0.0
             * @suffix px,pt,cm,mm,vh,vm,em
             */
            "ltPropHeight":Lyte.attr("string",{"default":"auto"}),

            /**
             * @componentProperty {string} ltPropWrapperClass
             * @version 1.0.0
             */
            "ltPropWrapperClass":Lyte.attr("string",{"default":""}),
            /**
             * @typedef {object} boundary
             * @property {string} left
             * @property {string} right
             * @property {string} top
             * @property {string} bottom
             */
            /**
             * @componentProperty {boundary} ltPropBoundary
             * @version 1.0.0
             * @default {}
             */
            "ltPropBoundary" : Lyte.attr("object",{"default":{}}),

            /**
             * @componentProperty {boolean} ltPropCloseOnBodyClick
             * @version 1.0.0
             * @default true
             *
             */
            "ltPropCloseOnBodyClick" : Lyte.attr("boolean",{"default" : true}),

            /**
             * @componentProperty {number} ltPropDuration
             * @version 1.0.0
             * @default 400
             */
            "ltPropDuration" : Lyte.attr("number",{"default" : 400}),
            /**
             * @typedef {object} popoverOffset
             * @property {string} top
             * @property {string} left
             * @property {string} bottom
             * @property {string} right
             * @property {string} height
             * @property {string} width
             */
            /**
             * @componentProperty {object} ltPropOffset
             * @version 1.0.0
             */
            "ltPropOffset" : Lyte.attr("object",{"default" : {}}),


            /**
              * @componentProperty {object} ltPropOffsetFromTarget
            */
            "ltPropOffsetFromTarget" : Lyte.attr("object" , {"default" : {}}),


            /**
             * @componentProperty {boolean} ltPropBindToBody
             * @version 1.0.0
             * @default false
             *
             */
            "ltPropBindToBody" : Lyte.attr("boolean",{"default":false}),

            /**
             * @componentProperty {string} ltPropHeaderPadding
             * @version 1.0.0
             * @default 15px 30px
             */
            "ltPropHeaderPadding":Lyte.attr("string",{"default":"15px 30px"}),

            /**
             * @componentProperty {string} ltPropContentPadding
             * @version 1.0.0
             * @default 15px 30px
             */
            "ltPropContentPadding":Lyte.attr("string",{"default":"15px 30px"}),

            /**
             * @componentProperty {string} ltPropFooterPadding
             * @version 1.0.0
             * @default 15px 30px
             */
            "ltPropFooterPadding":Lyte.attr("string",{"default":"15px 30px"}),

            /**
             * @componentProperty {fade|zoom} ltPropAnimation
             * @version 2.1.0
             * @default fade
             */
            "ltPropAnimation":Lyte.attr("string",{"default":"fade"}), //fade,zoom
            /**
             * @typedef {object} windowspacing
             * @property {number} top
             * @property {number} left
             * @property {number} bottom
             * @property {number} right
             */
            /**
             * @componentProperty {object} ltPropWindowSpacing
             * @version 2.1.1
             * @default { "top" : "30","left" : "30","bottom":"30","right" : "30"}
             */
            "ltPropWindowSpacing":Lyte.attr("object"),

            /**
             * @componentProperty {boolean} ltPropForceScroll
             * @version 2.2.14
             * @default false
             *
             */
            "ltPropForceScroll" : Lyte.attr('boolean', { default : false }),

            /**
             * @componentProperty {boolean} ltPropAutoAlign
             * @version 2.2.15
             * @default false
             *
             */
            "ltPropAutoAlign" : Lyte.attr('boolean', {default : false}),

            /**
             * @componentProperty {boolean} ltPropAria
             * @version 3.1.0
             * @default false
             *
             */
            "ltPropAria" : Lyte.attr( 'boolean', { default : false } ),

            /**
             * @componentProperty {object} ltPropAriaAttributes
             * @version 3.1.0
             */
            "ltPropAriaAttributes" : Lyte.attr( 'object', { default : {} } ),

            /**
             * @componentProperty {boolean} ltPropPreventFocus
             * @version 3.2.0
             * @default false
             *
             */
            "ltPropPreventFocus" : Lyte.attr('boolean', { default : false } ),

            /**
             * @componentProperty {boolean} ltPropStopClick
             * @version 3.13.0
             * @default false
             *
             */
            "ltPropStopClick" : Lyte.attr('boolean', {default : false}),

            "ltPropIgnoreBoundary" : Lyte.attr('boolean' , {default : false}),

            "ltPropMargin" : Lyte.attr('object'),

            "ltPropCloseOnScroll" : Lyte.attr('boolean' , {
              default : false
            }),

            /**
             * @componentProperty {boolean} ltPropAllowContainment
             * @version 3.66.0
             * @default false
             *
             */

            "ltPropAllowContainment" : Lyte.attr('boolean' , {
                default : false
            }),
            //local properties

            "buttons":Lyte.attr("array",{"default":[{"type":"accept","text":"Ok"}]}),
            "ltPropShowCopy":Lyte.attr("boolean",{"default": false}),
            "visible" : Lyte.attr("boolean",{"default" : true}),
            "timeOutId" : Lyte.attr("number"),
            "classTobeAdded" : Lyte.attr("string"),
            "keys" : Lyte.attr("object", {"default" : {37: 1, 38: 1, 39: 1, 40: 1}}),
            "first" : Lyte.attr("boolean",{"default":true}),
            "arrowHidden" : Lyte.attr("boolean", {"default" : false}),
            "arrowEle" : Lyte.attr("object"),
            "returnedFalse" : Lyte.attr("boolean",{"default":false}),
            "transformOrigin" : Lyte.attr("string"),
            "windowSpacing" : Lyte.attr("object"),
            "lyteUnbound": Lyte.attr( 'boolean', { 'default': false } ),
            "prevOffsetVal": Lyte.attr("object"),
            "calculateHW": Lyte.attr("boolean", {'default': false}),
            "checkAria" : Lyte.attr("number", {"default":0}),
            "prevRect" : Lyte.attr("object", {'default' : undefined}),
            "margin" : Lyte.attr("object"),
            "modalElemWidth" : Lyte.attr('string', {"default" : ''}),
            "modalElemHeight" : Lyte.attr('string', {"default" : ''}),
            "dragRunning" : Lyte.attr('boolean' , {"default" : false})
        }
    },

    computeSpacing : function(){
        var windowSpacing = Object.assign({},this.getData('ltPropWindowSpacing'));
        if(!windowSpacing.left){
            windowSpacing.left = 30;
        }
        if(!windowSpacing.right){
            windowSpacing.right = 30;
        }
        if(!windowSpacing.top){
            windowSpacing.top = 30;
        }
        if(!windowSpacing.bottom){
            windowSpacing.bottom = 30;
        }
        this.setData('windowSpacing',Object.assign({},windowSpacing));

        var margin = Object.assign({},this.getData('ltPropMargin'));
        if(!margin.left){
            margin.left = 0;
        }
        if(!margin.right){
            margin.right = 0;
        }
        if(!margin.top){
            margin.top = 0;
        }
        if(!margin.bottom){
            margin.bottom = 0;
        }
        this.setData('margin',Object.assign({},margin));
    }.observes('ltPropWindowSpacing', 'ltPropMargin').on('init'),

    addDragHandler : function(){
        var dragHeader = this.actualModalDiv.querySelector('lyte-popover-header');
        if(dragHeader){
            dragHeader.parentEle = this;
            if(this.$node.ltProp("draggable")){
                dragHeader.addEventListener('mousedown',this.handleMove,true);
                dragHeader.addEventListener('touchstart',this.handleMove,true);
                dragHeader.classList.add('lytePopoverHeaderDraggable');
            }
            else{
                dragHeader.removeEventListener('mousedown',this.handleMove,true);
                dragHeader.removeEventListener('touchstart',this.handleMove,true);
                dragHeader.classList.remove('lytePopoverHeaderDraggable');
            }
        }
        else{
            console.warn("This popover is not draggable because it has no header");
            this.$node.ltProp("draggable",false);
        }
    },
    handleMove : function(e){
        var drag = e.currentTarget.parentEle.actualModalDiv;
        LytePopup.node=drag;
        $L(e.target).addClass('lytePopoverDragRunning')
        if(e.type == "mousedown"){
            LytePopup.xPos=e.clientX-this.getBoundingClientRect().left;
            LytePopup.yPos=e.clientY-this.getBoundingClientRect().top;
        }
        else if(e.type == "touchstart"){
            LytePopup.xPos=e.touches[0].clientX-this.getBoundingClientRect().left;
            LytePopup.yPos=e.touches[0].clientY-this.getBoundingClientRect().top;
        }
        var elePos = drag.getBoundingClientRect();
        drag.style.transitionDuration = "0s";
        var arrowEle = drag.parentElement.querySelector("#lytePopoverArrow");
        if(arrowEle){
            this.parentEle.setData('arrowHidden',true);
            this.parentEle.setData('arrowEle',arrowEle);
            arrowEle.style.display = "none";
        }
        if(e.type == "mousedown"){
            window.addEventListener('mousemove',e.currentTarget.parentEle.handleDrag,true);
            window.addEventListener('mouseup',e.currentTarget.parentEle.stopDrag,true);
        }
        else if(e.type == "touchstart"){
            document.body.addEventListener('touchmove',e.currentTarget.parentEle.handleDrag,true);
            document.body.addEventListener('touchend',e.currentTarget.parentEle.stopDrag,true);
        }
    },
    handleDrag : function(e){
        var drag = LytePopup.node;
        var curComp = $L(drag).closest('lyte-wormhole')[0]._callee
        curComp.setData('dragRunning' , true);
        
        var curleft = 0
        var curtop = 0

        if(e.type == "mousemove"){
            curleft = e.clientX-drag.offsetParent.getBoundingClientRect().left - LytePopup.xPos
            curtop = e.clientY-drag.offsetParent.getBoundingClientRect().top  - LytePopup.yPos
        }
        else if(e.type == "touchmove"){
            curleft = e.touches[0].clientX-drag.offsetParent.getBoundingClientRect().left-LytePopup.xPos
            curtop = e.touches[0].clientY-drag.offsetParent.getBoundingClientRect().top-LytePopup.yPos
        }

        if(!curComp.getData('ltPropAllowContainment')){
            drag.style.left = curleft + 'px'
            drag.style.top = curtop + 'px'
        } else {
            if(curleft + drag.getBoundingClientRect().width <= window.innerWidth && (curleft >= 0)){
                drag.style.left = curleft + 'px';
            }else if(curleft < 0){
                drag.style.left = "0px";
            } else {
                drag.style.left = ( window.innerWidth - drag.getBoundingClientRect().width ) + 'px';
            }
    
            if(curtop + drag.getBoundingClientRect().height <= window.innerHeight && (curtop >= 0)){
                drag.style.top = curtop + 'px';
            }else if(curtop < 0){
                drag.style.top = "0px";
            } else {
                drag.style.top = ( window.innerHeight - drag.getBoundingClientRect().height ) + 'px';
            }
        }

     

        window.getSelection().removeAllRanges();
    },
    stopDrag : function(e){
        var targetElem = e.target;
        if(!$L(targetElem).hasClass('lytePopoverDragRunning')){
            targetElem = $L('.lytePopoverDragRunning')[0]
        }
        var drag = LytePopup.node;
        var curComp = $L(drag).closest('lyte-wormhole')[0]._callee
        while(targetElem && targetElem !== document){
            if(targetElem.parentEle){
                if(e.type == "mouseup"){
                    window.removeEventListener('mousemove',targetElem.parentEle.handleDrag,true);
                    window.removeEventListener('mouseup',targetElem.parentEle.stopDrag,true);
                    curComp.setData('dragRunning' , false);
                    $L('.lytePopoverDragRunning').removeClass('lytePopoverDragRunning');
                }
                else if(e.type == "touchend"){
                    this.removeEventListener('touchmove',targetElem.parentEle.handleDrag,true);
                    this.removeEventListener('touchend',targetElem.parentEle.stopDrag,true);
                    $L('.lytePopoverDragRunning').removeClass('lytePopoverDragRunning');
                }
                break;
            }
            targetElem = targetElem.parentElement ? targetElem.parentElement : document;
        }
    },
    showToggled : function(){
        // debugger
        var event = event || window.event;
        if(this.getData('returnedFalse')){
            this.setData('returnedFalse',false);
            return;
        }
        if(this.$node.ltProp("show") && !this.$node.ltProp("showCopy")){
            if(this.tIdBeforeClose){
                clearTimeout(this.tIdBeforeClose);
                delete this.tIdBeforeClose;
            }
            if(this.tIdBeforeShow){
                clearTimeout(this.tIdBeforeShow);
                delete this.tIdBeforeShow;
            }
            if(_lyteUiUtils.getRTL() && this.getData('ltPropPlacement')){
                this.setRTLPosition();
            }
            this.$node.ltProp("bindToBody",true);
            if(this.getData('ltPropDuration') == undefined){
                this.onBeforeShowHandling(event);
            }
            else{
                var self = this;
                this.tIdBeforeShow = setTimeout(function(){
                    delete self.tIdBeforeShow;
                    self.onBeforeShowHandling(event);
                },0);
            }
        }
        else{
            this.clearFastdomBatch();
            if(this.tIdBeforeShow){
                clearTimeout(this.tIdBeforeShow);
                delete this.tIdBeforeShow;
            }
            if(this.tIdBeforeClose){
                clearTimeout(this.tIdBeforeClose);
                delete this.tIdBeforeClose;
            }
            if(this.$node.ltProp("showCopy")){
                // console.log(LytePopup.evt);
                if(this.getData('ltPropDuration') == undefined){
                    this.onBeforeCloseHandling(/*LytePopup.evt || */event);
                    if(!(this.getData('ltPropBindToBody'))){
                        this.removeDOMReferences();
                    }
                }
                else{
                    var self = this;
                    this.tIdBeforeClose = setTimeout(function(){
                        delete self.tIdBeforeClose;
                        self.onBeforeCloseHandling(event);
                    },0);
                }
            }
            else{
                if(!(this.getData('ltPropBindToBody'))){
                    this.removeDOMReferences();
                }
            }
        }
    }.observes("ltPropShow").on('didConnect'),

    setRTLPosition : function(){
        var positions = this.getData('ltPropPlacement').trim().split(" ");
        if(positions.length > 1){
            var newPosition = "";
            for(var i = 0; i < positions.length; i++){
                newPosition += this.getRTLPosition(positions[i]) + " ";
            }
            this.setData('ltPropPlacement',newPosition.trim());
        }
        else{
            this.setData('ltPropPlacement', this.getRTLPosition(positions[0]));
        }
    },

    getRTLPosition : function(position){
        if(position == "bottomLeft"){
            return "bottomRight";
        }
        else if(position == "bottomRight"){
            return "bottomLeft";
        }
        else if(position == "topLeft"){
            return "topRight";
        }
        else if(position == "topRight"){
            return "topLeft";
        }
        else if(position == "left"){
            return "right";
        }
        else if(position == "right"){
            return "left";
        }
        return position;
    },
    clearFastdomBatch : function(){
        if(this.fastdomfn1){
            $L.fastdom.clear(this.fastdomfn1);
            delete this.fastdomfn1;
        }
        if(this.fastdomfn2){
            $L.fastdom.clear(this.fastdomfn2);
            delete this.fastdomfn2;
        }
        if(this.fastdomfn3){
            $L.fastdom.clear(this.fastdomfn3);
            delete this.fastdomfn3;
        }
        if(this.fastdomfn4){
            $L.fastdom.clear(this.fastdomfn4);
            delete this.fastdomfn4;
        }
        if(this.fastdomfn5){
            $L.fastdom.clear(this.fastdomfn5);
            delete this.fastdomfn5;
        }
        if(this.fastdomfn6){
            $L.fastdom.clear(this.fastdomfn6);
            delete this.fastdomfn6;
        }
        if(this.fastdomfn7){
            $L.fastdom.clear(this.fastdomfn7);
            delete this.fastdomfn7;
        }
        if(this.initCompute){
            clearTimeout(this.initCompute);
            delete this.initCompute;
        }
    },
    changeShow : function(){
        if(!this.getData('ltPropBindToBody')){
            this.clearFastdomBatch();
            if(this.tIdBeforeShow){
                clearTimeout(this.tIdBeforeShow);
                delete this.tIdBeforeShow;
            }
            if(this.tIdBeforeClose){
                clearTimeout(this.tIdBeforeClose);
                delete this.tIdBeforeClose;
            }
            if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                LytePopup.hideOrShowFreeze("close",this,true);
                delete this.addedFreezeDetails;
            }
            if(this.getData('ltPropShow')){
                this.setData('ltPropShow',false);
            }
            else{
                this.setData('ltPropShowCopy', false);
                LytePopup.closePopup(this);
                this.setData('visible',false);
                this.removeDOMReferences();
            }
        }
    }.observes("ltPropBindToBody"),

    removeDOMReferences : function(){
        if(this.childComp){
            delete this.childComp;
        }
        if(this.actualModalDiv){
            delete this.actualModalDiv;
        }
    },
    addAriaValues : function( arg ) {
        if(this.getData('ltPropAria')){
            var ariaProp = this.getData('ltPropAriaAttributes') || {};
            _lyteUiUtils.setAttribute( this.actualModalDiv, ariaProp, arg ? arg.oldValue : {} );
            var closeIcon = this.actualModalDiv.querySelector('.lytePopoverClose');
            if(closeIcon){
                closeIcon.setAttribute('aria-label', ariaProp['close-label'] || 'Close icon at top right position');
            }
        }
    }.observes('ltPropAriaAttributes','ltPropAriaAttributes.{}','checkAria'),
    callOnResize : function(event){
        if(this.getMethods('onResize')){
            this.executeMethod('onResize',event,this);
        }
        var origElemPosition = this.getData('ltPropOriginElem') ? document.querySelector(this.$node.ltProp('originElem')).getBoundingClientRect() : null;
        if(!!origElemPosition){
            var winH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var winW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            if( !(this.getData('ltPropForceScroll')) && ( (origElemPosition.bottom > winH) || (origElemPosition.right > winW) || (origElemPosition.left < 0) || (origElemPosition.top < 0) ) ){
                this.$node.ltProp("show",false);
            }
        }

    },
    callOnScroll: function(event){
        var returnVal;
        if(this.getMethods('onScroll')){
            returnVal = this.executeMethod('onScroll',event,this);
        }
        return (returnVal == undefined ? true : returnVal);
    },

    /**
     * The method is going to set height and width to the popover
     *
     */
    updateScrollHandling : function(event){   //Sets the height and width of the popover

        if(!this.$node.ltProp("freeze") && this.$node.ltProp("forceScroll")){
            this.$node.ltProp("scrollable",true);
        }
        var modalElem = this.actualModalDiv;
        var oldHeight, oldWidth, newHeight, newWidth,
        contentNode = modalElem.querySelector("lyte-popover-content");

        if(this.getData('resize') && this.getData('ltPropAutoAlign') && this.$node.mutobserver){
            this.$node.mutobserver.disconnect();
        }
        // contentNode = contentNode ? contentNode : modalElem;
        modalElem.style.maxWidth = "";
        modalElem.style.maxHeight = "";
        modalElem.style.height = this.$node.ltProp("height") ? this.$node.ltProp("height") : "auto";
        modalElem.style.width = this.$node.ltProp("width")?this.$node.ltProp("width"):"auto";
        if(this.getData('resize')){
          modalElem.style.width = this.getData('modalElemWidth') + "px"
          modalElem.style.height = this.getData('modalElemHeight') + "px"
        }
        /*------------------------------ MEASURE STARTS --------------------------*/
        this.fastdomfn1 = $L.fastdom.measure(function(){   //Measures the initial height and width based on the content of popover
            delete this.fastdomfn1;
            var modalElemOffset = modalElem.getBoundingClientRect();
            /*IF maxwidth or maxheigth given as a percentage then to calculate the actual width or height
                                we need the modalElements parent element's width and height*/
            var modalParentOff = modalElem.parentElement.getBoundingClientRect();
            /*var totalHeight = ((modalElem.querySelector('lyte-popover-header') ? modalElem.querySelector('lyte-popover-header').getBoundingClientRect().height : 0) +
                                    (modalElem.querySelector('lyte-popover-content') ? modalElem.querySelector('lyte-popover-content').getBoundingClientRect().height : 0) +
                                        (modalElem.querySelector('lyte-popover-footer') ? modalElem.querySelector('lyte-popover-footer').getBoundingClientRect().height : 0))*/
            var cs = window.getComputedStyle(modalElem);
            var borderDimensionY = ((cs.borderTopWidth ? parseFloat(cs.borderTopWidth) : 0) +
                                     (cs.borderBottomWidth ? parseFloat(cs.borderBottomWidth) : 0));
            var windowSpacing = this.getData('windowSpacing');
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - (windowSpacing.top + windowSpacing.bottom);
            /*------------------------------ MUTATE STARTS --------------------------*/
            this.fastdomfn2 = $L.fastdom.mutate(function(){  //Measures and sets the height and width based on the user provided max values
                delete this.fastdomfn2;
                // debugger
                if(this.$node.ltProp("maxWidth")){
                    // this.$node.ltProp("scrollable",true);
                    oldWidth = modalElemOffset.width;
                    // modalElem.style.width = this.$node.ltProp("maxWidth");
                    newWidth = this.$node.ltProp("maxWidth").indexOf('%') != -1 ? ((parseFloat(this.$node.ltProp("maxWidth"))/100) * modalParentOff.width) : parseFloat(this.$node.ltProp("maxWidth"));
                    // if(oldWidth < newWidth){
                    //     modalElem.style.width = oldWidth+"px";
                    //     newWidth = oldWidth;
                    // }
                    modalElem.style.maxWidth = this.$node.ltProp("maxWidth");
                    if(contentNode){
                        contentNode.style.overflowX = "auto";
                    }
                    else{
                        modalElem.style.overflowX = "auto";
                    }

                }
                // else{
                //     newWidth = modalElemOffset.width;
                // }

                if(this.$node.ltProp("maxHeight")/* && totalHeight >= parseInt(this.$node.ltProp("maxHeight"))*/){
                    this.childComp.querySelector(".popoverWrapper").classList.add("scrollable");
                    // this.$node.ltProp("scrollable",true);
                    this.setData("calculateHW",true);
                    oldHeight = modalElemOffset.height - borderDimensionY;
                    var newH = this.$node.ltProp("maxHeight").indexOf('%') != -1 ? ((parseFloat(this.$node.ltProp("maxHeight"))/100) * modalParentOff.height) : parseFloat(this.$node.ltProp("maxHeight"));
                    modalElem.style.maxHeight = this.$node.ltProp("maxHeight");
                    newHeight = newH - borderDimensionY;
                    if(!contentNode){
                        modalElem.style.overflowY = "auto";
                    }
                }
                else{
                    oldHeight = modalElemOffset.height - borderDimensionY;
                    /*  If height is provided in px or em then we dont compare if it is greater than window height as it is fixed
                        And also we add a maxHeight to the content div so that if the elements inside the content is increased
                        there wont be any issue in popover size as we have a fixed max height for popover.  */
                    if(this.$node.ltProp('height') && ((this.$node.ltProp('height')).indexOf('px') != -1 || (this.$node.ltProp('height')).indexOf('em') != -1)){
                        newHeight = oldHeight;
                        this.setData("calculateHW",true);
                    }
                    else{
                        newHeight = h-20;
                    }
                }

                if(this.getData("calculateHW") && contentNode){
                    var popoverHeader = this.actualModalDiv.querySelector("lyte-popover-header"), popoverFooter = this.actualModalDiv.querySelector("lyte-popover-footer");
                    var popoverHOff = 0,popoverFOff = 0;
                    /*------------------------------ MEASURE STARTS --------------------------*/
                    this.fastdomfn3 = $L.fastdom.measure(function(){    //Measures the heaser and footer dimensions
                        delete this.fastdomfn3;
                        if(popoverHeader){
                            if(this.$node.ltProp("maxWidth")){
                                popoverHeader.style.overflowX = "auto";
                            }
                            popoverHOff = popoverHeader.offsetHeight;
                        }
                        if(popoverFooter){
                            if(this.$node.ltProp("maxWidth")){
                                popoverFooter.style.overflowX = "auto";
                            }
                            popoverFOff = popoverFooter.offsetHeight;
                        }
                        /*------------------------------ MUTATE STARTS --------------------------*/
                        this.fastdomfn4 = $L.fastdom.mutate(function(){   //Sets the final height and width of the popover
                            delete this.fastdomfn4;
                            var newH = (newHeight - (popoverHOff + popoverFOff));
                            contentNode.style.maxHeight = (newH > 0 ? newH : 50) +"px";
                            contentNode.style.overflowY = "auto";
                            // if(this.getData('ltPropHeight')){
                            //     contentNode.style.height = (oldHeight - (popoverHOff + popoverFOff))+"px";
                            // }
                            // else{
                            //     contentNode.style.height = "auto";
                            // }
                            // modalElem.style.width = this.$node.ltProp("width")?this.$node.ltProp("width"):"auto";
                            // modalElem.style.maxWidth = newWidth > 0 ? (newWidth +"px"):("70%");

                            /*  Moved the calling of computeOffsetImpl function from here during resize so that
                                the height and width calculation of the popover is completed and then we can position the popover.  */
                            if(this.getData('resize')){
                                // if(this.getData('ltPropAutoAlign') && this.$node.mutobserver){
                                //     this.$node.mutobserver.disconnect();
                                // }
                                this.computeOffsetImpl(event);
                            }

                            /* Checks and adds mutation observer */
                            // this.addMutationObserver();
                            modalElem = null;
                            contentNode = null;
                            popoverHeader = null;
                            popoverFooter = null;
                        },this);
                        /*------------------------------ MUTATE ENDS --------------------------*/
                    },this);
                    /*------------------------------ MEASURE ENDS --------------------------*/
                }
                else{
                    this.childComp.querySelector(".popoverWrapper").classList.remove("scrollable");
                    /*  Moved the calling of computeOffsetImpl function from here during resize so that
                        the height and width calculation of the popover is completed and then we can position the popover.  */
                    if(this.getData('resize')){
                        // if(this.getData('ltPropAutoAlign') && this.$node.mutobserver){
                        //     this.$node.mutobserver.disconnect();
                        // }
                        this.computeOffsetImpl(event);
                    }
                    /* Checks and adds mutation observer */
                    // this.addMutationObserver();
                    modalElem = null;
                    contentNode = null;
                }
            },this);
            /*------------------------------ MUTATE ENDS --------------------------*/
        },this);
        /*------------------------------ MEASURE ENDS --------------------------*/
    },
    scrollHandling : function(){
        if(!this.getData('ltPropShow')){
            return;
        }
        this.updateScrollHandling();
    }.observes("ltPropWidth","ltPropMaxWidth","ltPropHeight","ltPropMaxHeight"),

    // Mutation observer
    addMutationObserver : function(){
        if(this.getData('ltPropAutoAlign')){
            var popover = this.$node,
            targetNode = this.actualModalDiv, reAlign, config;
            this.setData('prevOffsetVal', {
                    height : this.actualModalDiv.offsetHeight,
                    width : this.actualModalDiv.offsetWidth
                });
            popover.mutobserver = new MutationObserver( function( mutations ) {
                if(this.getData('ltPropAutoAlign')){
                    var popoverElem = this.actualModalDiv;
                    var prevOffsetVal = this.getData('prevOffsetVal');
                    var offsetWidth = popoverElem.offsetWidth;
                    var offsetHeight = popoverElem.offsetHeight;
                    for( var i = 0; i < mutations.length; i++ ) {
                        // console.log(mutations[ i ].type + " ====== " + mutations[i].attributeName);
                        if( (mutations[ i ].type === 'attributes'/* && mutations[ i ].attributeName === 'style'*/) || mutations[i].type == 'childList' || mutations[i].type == 'subtree' ) {
                            if(prevOffsetVal.width != offsetWidth || prevOffsetVal.height != offsetHeight){
                                reAlign = true;
                                this.setData('prevOffsetVal', {
                                    height : offsetHeight,
                                    width : offsetWidth
                                })
                                break;
                            }
                        }
                    }
                    if(reAlign){
                        reAlign = false;
                        this.computeOffsetImpl(null, true);
                    }
                }
            }.bind( this ) );

            config = {
                attributes: true,
                childList : true,
                subtree: true
                // attributeFilter: ['style', 'class']
            };

            popover.mutobserver.observe( targetNode, config );
            // Mutation observer ends
        }
    },

    /**
     * The method is going to do left and top computation and add it to the popover when it is opened
     *
     */
    computeOffsetImpl : function(event, reAlign){
        var classTobeAdded = "", offsetLeft="",offsetTop="";
        var modalEle = this.actualModalDiv;
        // modalEle.classList.remove('lytePopoverCenter','lytePopoverBottomCenter','lytePopoverBottomLeft','lytePopoverBottomRight','lytePopoverTopCenter','lytePopoverTopLeft','lytePopoverTopRight','lytePopoverLeft','lytePopoverRight');
        // modalEle.style.left = "";
        // modalEle.style.top = "";
        /*------------------------------ MEASURE STARTS --------------------------*/
        $L.fastdom.measure(function(){
            if(this.$node.ltProp("showCopy")){
                if(this.$node.ltProp('originElem') != "" || !(Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp('offset')))){
                    var ele = this.$node.ltProp('originElem') ? document.querySelector(this.$node.ltProp('originElem')) : null;
                    if(!ele && Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp('offset'))){
                        console.error("The origin element is either not present or may be removed. Kindly check.")
                        this.setData('ltPropShow',false);
                        return;
                    }
                    var modalElemOffset = modalEle.getBoundingClientRect();
                    var modalElePosition = {top: modalElemOffset.top,
                                            right: modalElemOffset.right,
                                            bottom: modalElemOffset.bottom,
                                            left: modalElemOffset.left,
                                            width: modalEle.offsetWidth,
                                            height: modalEle.offsetHeight
                                           };
                    // var xscroll = window.pageXOffset || document.documentElement.scrollLeft;
                    // var yscroll = window.pageYOffset || document.documentElement.scrollTop;
                    var wrapperOffset = modalEle.parentElement.getBoundingClientRect();
                    var windowSpacing = Object.assign({},this.getData('windowSpacing'));
                    var bodyHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - windowSpacing.bottom;
                    var bodyWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - windowSpacing.right;
                    var origElemPosition;
                    if(Lyte.Component.registeredHelpers.lyteUiIsEmptyObject(this.$node.ltProp('offset'))){  //If origin element is present and there is no ltPropOffset
                        var eleOffset = ele.getBoundingClientRect();
                        origElemPosition = {
                                              top: eleOffset.top,
                                              right: eleOffset.right,
                                              bottom: eleOffset.bottom,
                                              left: eleOffset.left,
                                              width: eleOffset.width,
                                              height: eleOffset.height
                                            };
                    }
                    else{   //if ltPropOffset has value
                        origElemPosition = {
                                              width:parseInt(this.$node.ltProp('offset').width) || 0,
                                              height:parseInt(this.$node.ltProp('offset').height) || 0,
                                              top:parseInt(this.$node.ltProp('offset').top),
                                              left:parseInt(this.$node.ltProp('offset').left),
                                              bottom:(parseInt(this.$node.ltProp('offset').bottom) || parseInt(this.$node.ltProp('offset').top) + (parseInt(this.$node.ltProp('offset').height) || 0)),
                                              right:(parseInt(this.$node.ltProp('offset').right) || parseInt(this.$node.ltProp('offset').left) + (parseInt(this.$node.ltProp('offset').width) || 0))
                                            }
                    }
                    // if(!this.getData('ltPropFreeze')){
                    //     origElemPosition.top = origElemPosition.top + yscroll;
                    //     origElemPosition.left = origElemPosition.left + xscroll;
                    // }

                    var elementPosition = origElemPosition;
                    var offObj = {}, newOffObj = {};
                    var position =  this.$node.ltProp('positionNew');
                    var flag = true;
                    var count = 0,
                    index = 0,
                    props;
                    do{
                        if(this.$node.ltProp('placement')/* && !this.$node.ltProp('freeze')*/){
                            props = this.$node.ltProp('placement').trim().split(" ");
                            if(props.length == 1){
                                flag = true;
                                offObj = this.positionPopover(this.$node.ltProp('placement'),elementPosition,modalElePosition);
                                position = this.$node.ltProp('placement');
                                switch(position){
                                    case 'bottom':
                                    case 'top':
                                        if(offObj.offsetLeft+modalElePosition.width > bodyWidth){
                                            offObj.offsetLeft = Math.max(windowSpacing.left, bodyWidth - modalElePosition.width);
                                        }
                                        if(offObj.offsetLeft < windowSpacing.left){
                                            offObj.offsetLeft = windowSpacing.left;
                                        }
                                        break;
                                    case 'left':
                                    case 'right':
                                        if(offObj.offsetTop+modalElePosition.height > bodyHeight){
                                            offObj.offsetTop = Math.max(windowSpacing.top, bodyHeight - modalElePosition.height)/*origElemPosition.bottom - modalElePosition.height*/;
                                        }
                                        if(offObj.offsetTop < windowSpacing.top){
                                            offObj.offsetTop = windowSpacing.top;
                                        }
                                        break;
                                }
                            }
                            else{
                                if(index < props.length){
                                    position = props[index];
                                    flag = true;
                                    offObj = this.positionPopover(position,elementPosition,modalElePosition);
                                    newOffObj = offObj;
                                    switch(position){
                                        case 'bottom':
                                            if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (offObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'bottomLeft':
                                            if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'bottomRight':
                                            if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'top':
                                            if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (offObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'topLeft':
                                            if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'topRight':
                                            if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                                index++;
                                                flag = false;
                                                break;
                                            }

                                            if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                                offObj.offsetLeft = elementPosition.left;
                                                flag = true;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                offObj.offsetLeft = bodyWidth - modalElePosition.width - 10;
                                                flag = true;
                                            }
                                            break;
                                        case 'left':
                                            if(newOffObj.offsetTop < windowSpacing.top){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(newOffObj.offsetLeft < windowSpacing.left /*0*/){
                                                index++;
                                                flag = false;
                                                offsetLeft = (elementPosition.left + elementPosition.width)+9;
                                                offsetTop = elementPosition.top;
                                                break;
                                            }
                                            if((newOffObj.offsetTop-modalElePosition.height) < windowSpacing.top /*0*/ ){
                                                offObj.offsetTop = elementPosition.top;
                                            }
                                            if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                                offObj.offsetTop = bodyHeight - modalElePosition.height;
                                            }
                                            break;
                                        case 'leftCenter':
                                        case 'leftBottom':
                                            if(newOffObj.offsetTop < windowSpacing.top){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(newOffObj.offsetLeft < windowSpacing.left /*0*/){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            break;
                                        case 'right':
                                            if(newOffObj.offsetTop < windowSpacing.top){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                index++;
                                                flag = false;
                                                offObj.offsetLeft = (elementPosition.left - modalElePosition.width)-9;
                                                offObj.offsetTop = elementPosition.top;
                                                break;
                                            }
                                            if((newOffObj.offsetTop-modalElePosition.height) < windowSpacing.top /*0*/ ){
                                                offObj.offsetTop = elementPosition.top;
                                            }
                                            if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                                offObj.offsetTop = bodyHeight - modalElePosition.height;
                                            }
                                        break;
                                        case 'rightCenter':
                                        case 'rightBottom':
                                            if(newOffObj.offsetTop < windowSpacing.top){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                            if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                                index++;
                                                flag = false;
                                                break;
                                            }
                                        break;
                                    }
                                }
                                else{
                                    flag = true;
                                }
                            }
                        }
                        else{
                           count++;
                            flag = true;
                            offObj = this.positionPopover(position,elementPosition,modalElePosition);
                            // if(!this.$node.ltProp('freeze')){
                            //     newOffObj.offsetTop = origElemPosition.top/* + origElemPosition.height*/;
                            //     newOffObj.offsetLeft = origElemPosition.left/* + origElemPosition.width*/;
                            // }
                            // else{
                                newOffObj = offObj;
                            // }
                            switch(position){
                                case 'bottom':
                                    if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                        position = "top";
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left + (this.getData('ltPropOffsetFromTarget').left || 0);
                                        flag = true;
                                    }
                                    if(bodyWidth < (offObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'bottomLeft':
                                    if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                        position = "top";
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left;
                                        flag = true;
                                    }
                                    if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'bottomRight':
                                    if(bodyHeight < (newOffObj.offsetTop+modalElePosition.height) || (bodyHeight - (newOffObj.offsetTop+modalElePosition.height)) < windowSpacing.bottom){
                                        position = "top";
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left;
                                        flag = true;
                                    }
                                    if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'top':
                                    if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                        position = (_lyteUiUtils.getRTL() ? "left" : "right");
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left;
                                        flag = true;
                                    }
                                    if(bodyWidth < (offObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'topLeft':
                                    if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                        position = "right";
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left;
                                        flag = true;
                                    }
                                    if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'topRight':
                                    if(newOffObj.offsetTop < windowSpacing.top /*0*/){
                                        position = "left";
                                        flag = false;
                                        break;
                                    }

                                    if((newOffObj.offsetLeft-modalElePosition.width) < windowSpacing.left /*0*/){
                                        offObj.offsetLeft = elementPosition.left;
                                        flag = true;
                                    }
                                    if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                        offObj.offsetLeft = bodyWidth - modalElePosition.width - (this.getData('ltPropType') == "box" ? 0 : 9);
                                        flag = true;
                                    }
                                    break;
                                case 'left':
                                    if(newOffObj.offsetTop < windowSpacing.top){
                                        position = "bottom";
                                        flag = false;
                                        break;
                                    }
                                    if(newOffObj.offsetLeft < windowSpacing.left /*0*/){
                                        position = "right";
                                        offObj.offsetLeft = (elementPosition.left + elementPosition.width)+(this.getData('ltPropType') == "box" ? 0 : 9);
                                        offObj.offsetTop = elementPosition.top;
                                    }
                                    if((newOffObj.offsetTop-modalElePosition.height) < windowSpacing.top /*0*/ ){
                                        offObj.offsetTop = elementPosition.top;
                                    }
                                    if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                        offObj.offsetTop = Math.max(windowSpacing.top, bodyHeight - modalElePosition.height) /*bodyHeight - modalElePosition.height*/;
                                    }
                                    break;
                                case 'right':
                                    if(newOffObj.offsetTop < windowSpacing.top){
                                        position = "bottom";
                                        flag = false;
                                        break;
                                    }
                                    if(bodyWidth < (newOffObj.offsetLeft+modalElePosition.width)){
                                        position = "left";
                                        offObj.offsetLeft = (elementPosition.left - modalElePosition.width)-(this.getData('ltPropType') == "box" ? 0 : 9);
                                        offObj.offsetTop = elementPosition.top;
                                    }
                                    if((newOffObj.offsetTop-modalElePosition.height) < windowSpacing.top /*0*/ ){
                                        offObj.offsetTop = elementPosition.top;
                                    }
                                    if(bodyHeight < (offObj.offsetTop+modalElePosition.height)){
                                        offObj.offsetTop = Math.max(windowSpacing.top, bodyHeight - modalElePosition.height) /*bodyHeight - modalElePosition.height*/;
                                    }
                                    break;
                            }

                            if(this.getData('ltPropIgnoreBoundary')){
                              flag = true
                            }

                        }

                    }while(!flag && count <= 8)
                    var positions = ["bottom","bottomLeft","bottomRight","top","topLeft","topRight","right","left"];
                    if(this.getData('ltPropForceScroll')){
                        if(position.indexOf("left") != -1 || position.indexOf("right") != -1){
                            if(elementPosition.height <= modalElePosition.height){
                                if(offObj.offsetTop > elementPosition.top){
                                    offObj.offsetTop = elementPosition.top;
                                }
                                else if(offObj.offsetTop+modalElePosition.height < elementPosition.bottom){
                                    offObj.offsetTop = elementPosition.bottom - modalElePosition.height;
                                }
                            }
                            else{
                                if(offObj.offsetTop < elementPosition.top){
                                    offObj.offsetTop = elementPosition.top;
                                }
                                else if(offObj.offsetTop+modalElePosition.height > elementPosition.bottom){
                                    offObj.offsetTop = elementPosition.bottom - modalElePosition.height;
                                }
                            }
                        }
                        else{
                            if(offObj.offsetLeft > elementPosition.left){
                                offObj.offsetLeft = elementPosition.left;
                            }
                            else if(offObj.offsetLeft+modalElePosition.width < elementPosition.right){
                                offObj.offsetLeft = elementPosition.right - modalElePosition.width;
                            }
                        }
                    }
                    offsetLeft = offObj.offsetLeft;
                    offsetTop = offObj.offsetTop;

                    if(this.$node.ltProp('type') === "callout"){
                        if(position.indexOf("bottom") > -1){
                            offObj.classTobeAdded = "lytePopoverArrowTop";
                            offObj.posClass = "lytePopBottomToOrig";
                        }
                        else if(position.indexOf("top") > -1){
                            offObj.classTobeAdded = "lytePopoverArrowBottom";
                            offObj.posClass = "lytePopTopToOrig";
                        }
                        else if(position.indexOf("left") > -1){
                             offObj.classTobeAdded = "lytePopoverArrowRight";
                             offObj.posClass = "lytePopLeftToOrig";
                        }
                        else if(position.indexOf("right") > -1){
                             offObj.classTobeAdded = "lytePopoverArrowLeft";
                             offObj.posClass = "lytePopRightToOrig";
                        }
                        var arrowIcon = modalEle.querySelector("#lytePopoverArrow");
                        arrowIcon.classList.remove("lytePopoverArrowTop","lytePopoverArrowBottom","lytePopoverArrowRight","lytePopoverArrowLeft");
                        arrowIcon.classList.add(offObj.classTobeAdded);
                        var arrowIconOffset;
                        if(!(modalEle.parentElement.classList.contains(offObj.posClass))){
                            modalEle.parentElement.classList.remove("lytePopBottomToOrig","lytePopTopToOrig","lytePopLeftToOrig","lytePopRightToOrig");
                            modalEle.parentElement.classList.add(offObj.posClass);
                        }
                        /*------------------------------ MEASURE STARTS --------------------------*/
                        $L.fastdom.measure(function(){
                            arrowIconOffset = {height : arrowIcon.offsetHeight, width : arrowIcon.offsetWidth};
                        });
                        /*------------------------------ MEASURE ENDS --------------------------*/
                        /*------------------------------ MUTATE STARTS --------------------------*/
                        //Positions the arrowIcon of the popover and the popover too based on origin elem
                        $L.fastdom.mutate(function(){   //If originElem -> height < arrowIcon -> height OR originElem -> width < arrowIcon -> width
                            var diagonal = Math.floor(Math.sqrt((arrowIconOffset.height * arrowIconOffset.height) + (arrowIconOffset.width * arrowIconOffset.width)) - 2) ;
                            if(offObj.classTobeAdded === "lytePopoverArrowTop" || offObj.classTobeAdded === "lytePopoverArrowBottom"){
                                var leftVal = Math.abs(offsetLeft - (elementPosition.left+(elementPosition.width-diagonal)/2));
                                arrowIcon.style.left = leftVal+"px";
                                arrowIcon.style.top = "";
                                if(leftVal < 13 && origElemPosition.width <= (diagonal+22) ){
                                    var diff = 13 - leftVal;
                                    // if(Math.round(origElemPosition.left) == Math.round(offsetLeft)/* && (offsetLeft - diff) >= 0*/){
                                        leftVal += diff;
                                        arrowIcon.style.left = leftVal + "px";
                                        offsetLeft -= diff;
                                    // }
                                }
                                else if(modalElePosition.width - (leftVal + diagonal) < 13 && origElemPosition.width <= (diagonal+22)){
                                    var diff = 13 - (modalElePosition.width - (leftVal + diagonal));
                                    // if(Math.round(origElemPosition.left + origElemPosition.width) == Math.round(modalElePosition.width + offsetLeft)){
                                        leftVal -= diff;
                                        arrowIcon.style.left = leftVal + "px";
                                        offsetLeft += diff;
                                    // }
                                }
                                if(leftVal > (modalElePosition.width - (2 * diagonal))){
                                    leftVal =  (modalElePosition.width - (2 * diagonal));
                                    arrowIcon.style.left = leftVal + "px";
                                }
                                if(offObj.classTobeAdded === "lytePopoverArrowTop"){
                                    this.setData('transformOrigin',Math.round(leftVal)+"px top");
                                }
                                if(offObj.classTobeAdded === "lytePopoverArrowBottom"){
                                    this.setData('transformOrigin',Math.round(leftVal)+"px bottom");
                                }
                            }
                            else{
                                var topVal = Math.abs(offsetTop - (elementPosition.top+(elementPosition.height-diagonal)/2));
                                arrowIcon.style.left = "";
                                arrowIcon.style.top = topVal +"px";
                                if(topVal < 13 && origElemPosition.height <= (diagonal+22) ){
                                    var diff = 13 - topVal;
                                    // if(Math.round(origElemPosition.top) == Math.round(offsetTop)/* && (offsetTop - diff) >= 0*/){
                                        topVal += diff;
                                        arrowIcon.style.top = topVal + "px";
                                        offsetTop -= diff;
                                    // }
                                }
                                else if(modalElePosition.height - (topVal + diagonal) < 13 && origElemPosition.height <= (diagonal+22)){
                                    var diff = 13 - (modalElePosition.height - (topVal + diagonal));
                                    // if(Math.round(origElemPosition.top + origElemPosition.height) == Math.round(modalElePosition.height + offsetTop)){
                                        topVal -= diff;
                                        arrowIcon.style.top = topVal + "px";
                                        offsetTop += diff;
                                    // }
                                }
                                if(offObj.classTobeAdded === "lytePopoverArrowLeft"){
                                    this.setData('transformOrigin',"left "+Math.round(topVal)+"px");
                                }
                                if(offObj.classTobeAdded === "lytePopoverArrowRight"){
                                    this.setData('transformOrigin',"right "+Math.round(topVal)+"px");
                                }
                            }
                        },this);
                        /*------------------------------ MUTATE ENDS --------------------------*/

                    }
                    else{
                        if(position.indexOf("bottom") > -1){
                            offObj.posClass = "lytePopBottomToOrig";
                        }
                        else if(position.indexOf("top") > -1){
                            offObj.posClass = "lytePopTopToOrig";
                        }
                        else if(position === "left"){
                             offObj.posClass = "lytePopLeftToOrig";
                        }
                        else if(position === "right"){
                             offObj.posClass = "lytePopRightToOrig";
                        }
                        if(!(modalEle.parentElement.classList.contains(offObj.posClass))){
                            modalEle.parentElement.classList.remove("lytePopBottomToOrig","lytePopTopToOrig","lytePopLeftToOrig","lytePopRightToOrig");
                            modalEle.parentElement.classList.add(offObj.posClass);
                        }
                        if(offObj.posClass == "lytePopBottomToOrig" || offObj.posClass == "lytePopTopToOrig"){
                            var leftVal = Math.abs(offsetLeft - (elementPosition.left+elementPosition.width/2));
                            if(offObj.posClass == "lytePopBottomToOrig"){
                                this.setData('transformOrigin',Math.round(leftVal)+"px top");
                            }
                            if(offObj.posClass == "lytePopTopToOrig"){
                                this.setData('transformOrigin',Math.round(leftVal)+"px bottom");
                            }
                        }
                        else{
                            var topVal = Math.abs(offsetTop - (elementPosition.top+elementPosition.height/2));
                            if(offObj.posClass === "lytePopRightToOrig"){
                                this.setData('transformOrigin',"left "+Math.round(topVal)+"px");
                            }
                            if(offObj.posClass === "lytePopLeftToOrig"){
                                this.setData('transformOrigin',"right "+Math.round(topVal)+"px");
                            }
                        }

                    }
                    this.setData('classTobeAdded',offObj.classTobeAdded);
                }
                else{
                    console.error("Please provide values for either ltPropOriginElem or ltPropOffset to open the popover at proper position.")
                    this.setData('ltPropShow',false);
                    return;
                }
                this.$node.ltProp('positionNew',position);
                /*------------------------------ MUTATE STARTS --------------------------*/
                $L.fastdom.mutate(function(){
                    offsetLeft -= wrapperOffset.left ? wrapperOffset.left : 0;
                    offsetTop -= wrapperOffset.top ? wrapperOffset.top : 0;
                    modalEle.style.left = offsetLeft+"px";
                    modalEle.style.top = offsetTop+"px";
                    if(this.getData("first")){
                        LytePopup.bindTransitionEnd(this.actualModalDiv);
                        this.callOnShow();
                        this.setOpacityAndVisibility();
                        this.setData("first",false);
                        /* Checks and adds mutation observer */
                        $L.fastdom.mutate(function(){
                            this.addMutationObserver();
                        },this);
                    }
                    else if(this.getData('resize')){
                        this.callOnResize(event);
                        this.setData('resize', false);
                        modalEle.style.height = this.$node.ltProp("height") ? this.$node.ltProp("height") : "auto";
                        modalEle.style.width = this.$node.ltProp("width")?this.$node.ltProp("width"):"auto";
                        // this.setData('modalElemHeight' , '')
                        // this.setData('modalElemWidth' , '')
                        /* Checks and adds mutation observer */
                        $L.fastdom.mutate(function(){
                            this.addMutationObserver();
                        },this);
                    }
                    else if(reAlign){
                        var prevRect = this.getData('prevRect');
                        if(prevRect && ( (prevRect.left != offsetLeft) || (prevRect.top != offsetTop) ) && this.getMethods('onPositionChange')){
                            this.executeMethod('onPositionChange', this);
                        }
                    }
                    this.setData('prevRect', {left : offsetLeft, top : offsetTop});
                },this);
                /*------------------------------ MUTATE ENDS --------------------------*/
            }
        },this);
        /*------------------------------ MEASURE ENDS --------------------------*/
        if(this.$node.ltProp("freeze")){
            document.body.classList.add('bodyWrapper');
            // LytePopup.bodywrapperCount += 1;
        }

        var curSelf = this
        var openTransFun = function(){
          curSelf.setData('modalElemWidth' , curSelf.actualModalDiv.offsetWidth)
          curSelf.setData('modalElemHeigh' , curSelf.actualModalDiv.offsetHeight)
          curSelf.actualModalDiv.removeEventListener('transitionend' , openTransFun)
        }

        this.actualModalDiv.addEventListener('transitionend' , openTransFun)

    },

    /**
     * The method is going to return the left and top values that can be set to the popover based on the origin element's position
     *
     */
    positionPopover : function(position,elementPosition,modalElePosition){
        var  offsetLeft=0,offsetTop=0,classTobeAdded,margin=this.getData("margin");
        switch(position){
            case 'bottom':
                offsetLeft = elementPosition.left - (modalElePosition.width - elementPosition.width)/2;
                offsetTop = elementPosition.top+elementPosition.height+ (this.getData('ltPropType') == "box" ? 0 : 9) + margin.top;
                classTobeAdded = "lytePopoverArrowTop";
                break;
            case 'bottomLeft':
                offsetLeft = elementPosition.left;
                offsetTop = elementPosition.top +elementPosition.height+(this.getData('ltPropType') == "box" ? 0 : 9) + margin.top;
                classTobeAdded = 'lytePopoverArrowTop';
                break;
            case 'bottomRight':
                offsetLeft = (elementPosition.left + elementPosition.width) - modalElePosition.width;
                offsetTop =  elementPosition.top +elementPosition.height+(this.getData('ltPropType') == "box" ? 0 : 9) + margin.top;
                classTobeAdded = 'lytePopoverArrowTop';
                break;
            case 'top':
                offsetLeft = elementPosition.left - (modalElePosition.width - elementPosition.width)/2;
                offsetTop = elementPosition.top - (modalElePosition.height+(this.getData('ltPropType') == "box" ? 0 : 9)) - margin.bottom;
                classTobeAdded = 'lytePopoverArrowBottom';
                break;
            case 'topLeft':
                offsetLeft = elementPosition.left;
                offsetTop = elementPosition.top - (modalElePosition.height+(this.getData('ltPropType') == "box" ? 0 : 9)) - margin.bottom;
                classTobeAdded = 'lytePopoverArrowBottom';
                break;
            case 'topRight':
                offsetLeft = (elementPosition.left + elementPosition.width) - modalElePosition.width;
                offsetTop = elementPosition.top - (modalElePosition.height+(this.getData('ltPropType') == "box" ? 0 : 9)) - margin.bottom;
                classTobeAdded = 'lytePopoverArrowBottom';
                break;
            case 'left':
                offsetLeft = (elementPosition.left - modalElePosition.width)-(this.getData('ltPropType') == "box" ? 0 : 9) + margin.left;
                offsetTop = elementPosition.top;
                classTobeAdded = 'lytePopoverArrowRight';
                break;
            case 'leftCenter':
                offsetLeft = (elementPosition.left - modalElePosition.width)-(this.getData('ltPropType') == "box" ? 0 : 9) + margin.left;
                offsetTop = elementPosition.top + (elementPosition.height - modalElePosition.height) / 2;
                classTobeAdded = 'lytePopoverArrowRight';
                break;
            case 'leftBottom':
                offsetLeft = (elementPosition.left - modalElePosition.width)-(this.getData('ltPropType') == "box" ? 0 : 9) + margin.left;
                offsetTop = elementPosition.bottom  - modalElePosition.height;
                classTobeAdded = 'lytePopoverArrowRight';
                break;
            case 'right':
                offsetLeft = (elementPosition.left + elementPosition.width)+(this.getData('ltPropType') == "box" ? 0 : 9) - margin.right;
                offsetTop = elementPosition.top;
                classTobeAdded = 'lytePopoverArrowLeft';
                break;
            case 'rightCenter':
                offsetLeft = (elementPosition.left + elementPosition.width)+(this.getData('ltPropType') == "box" ? 0 : 9) - margin.right;
                offsetTop = elementPosition.top + (elementPosition.height - modalElePosition.height) / 2;
                classTobeAdded = 'lytePopoverArrowLeft';
                break;
            case 'rightBottom':
                offsetLeft = (elementPosition.left + elementPosition.width)+(this.getData('ltPropType') == "box" ? 0 : 9) - margin.right;
                offsetTop = elementPosition.bottom - modalElePosition.height;
                classTobeAdded = 'lytePopoverArrowLeft';
                break;
        }
        return {offsetLeft:offsetLeft,offsetTop:offsetTop,classTobeAdded:classTobeAdded};
    },

    callOnShow:function(){
        this.$node.classList.add('lytePopoverOpened');
        if(this.getMethods("onShow")){
            this.executeMethod("onShow",this);
        }
    },
    setOpacityAndVisibility : function(){
        if(this.getData('ltPropAnimation') === "zoom"){
            this.actualModalDiv.style.transition = "none";
            this.actualModalDiv.style.transform = "scale(0)";
            // this.actualModalDiv.style.opacity = "1";
            this.actualModalDiv.classList.add('lytePopoverVisible');
            // this.actualModalDiv.classList.add('lyteZoom');
            var self = this;
            setTimeout(function(){
                self.actualModalDiv.style.transition = "";
                self.actualModalDiv.style.transitionDuration = (parseFloat(self.getData('ltPropDuration'))/1000) + "s";
                LytePopup.makingVisible = true;

                self.actualModalDiv.style.transformOrigin = self.getData('transformOrigin');
                self.actualModalDiv.style.transform = "scale(1)";
            },50);
        }
        else{
            this.actualModalDiv.style.transitionDuration = (parseFloat(this.getData('ltPropDuration'))/1000) + "s";
            LytePopup.makingVisible = true;
            // this.actualModalDiv.style.opacity = "1";
            this.actualModalDiv.classList.add('lytePopoverVisible');
        }


        /* ---- Commented for position error ---*/
        /* if(!this.$node.ltProp('freeze') && this.getData('classTobeAdded') && (this.getData('classTobeAdded') == "lytePopoverArrowLeft" || this.getData('classTobeAdded') == "lytePopoverArrowRight")){
            var actualModalDivOffset = this.actualModalDiv.getBoundingClientRect();
            var origElemPosition = document.querySelector(this.getData('ltPropOriginElem')).getBoundingClientRect();
            if(actualModalDivOffset.top != origElemPosition.top){
                this.actualModalDiv.style.top = origElemPosition.top + "px";
            }
        } */
    },

    computeOffset : function(){
        if(this.getData('ltPropShow')){
          this.computeOffsetImpl();
        } else {
          return
        }
    }.observes("ltPropOriginElem"),

    onBeforeCloseHandling : function(event){
        var result = true;
        if(this.getMethods("onBeforeClose")){
            result = this.executeMethod("onBeforeClose",event,this);
        }
        var self = this;
        if(result === undefined || result){
            delete this.$node.alignPopover;
            delete this.$node.calculateOffset;
            if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                LytePopup.hideOrShowFreeze("close",this);
                delete this.addedFreezeDetails;
            }

            if(this.getData('ltPropAutoAlign') && this.$node.mutobserver){
                this.$node.mutobserver.disconnect();
                delete this.$node.mutobserver;
            }

            if(this.getData('arrowHidden')){
                this.getData('arrowEle').style.display = "";
                this.setData('arrowHidden',false);
                this.setData('arrowEle',null);
            }
            if(_lyteUiUtils.getRTL() && this.getData('ltPropPlacement')){
                this.setRTLPosition();
            }
            if(this.getData('ltPropDuration') == undefined){
                // this.childComp.querySelector(".popoverWrapper").style.position = "";
                this.$node.ltProp({"showCopy":false,"show":false});
                this.$node.classList.remove('lytePopoverOpened');
                if(this.getData('ltPropAnimation') == "zoom"){
                    this.actualModalDiv.style.transform = "scale(0)";
                }
                else{
                    // this.actualModalDiv.style.opacity = 0;
                    this.actualModalDiv.classList.remove('lytePopoverVisible');

                }
                LytePopup.closePopup(this);
                // LytePopup.bindTransitionEnd(this.actualModalDiv);
                this.setData('visible',false);
                if(this.$node.ltProp('freeze') && this.childComp.querySelector("lyte-popover-freeze")){
                    this.childComp.querySelector("lyte-popover-freeze").style.opacity = 0;
                    this.childComp.querySelector("lyte-popover-freeze").style.visibility = "";
                }
                if(!this.$node.ltProp('freeze')){
                    this.childComp.querySelector(".popoverWrapper").classList.remove('noFreeze');
                }
                if(!this.getData('ltPropFreeze') && document.body.classList.contains('lyteStopBodyScrolling')){
                    document.body.classList.remove('lyteStopBodyScrolling');
                }
                if(this.getMethods("onClose")){
                    this.executeMethod("onClose",event,this);
                }
                // if(this.$node.ltProp('freeze')){
                //     LytePopup.bodywrapperCount -= 1;
                //     if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
                //         document.body.classList.remove('bodyWrapper');
                //     }
                // }
                LytePopup.checkAndRemoveWrapper();
                setTimeout(function(){
                    if(!(self.getData('visible'))){
                        if($L(self.childComp).find('.lytePopover')[0]){
                            $L(self.childComp).find('.lytePopover')[0].style.left = ""
                            $L(self.childComp).find('.lytePopover')[0].style.top = ""
                        }
                        if(self.childComp){
                            self.childComp.classList.add("lytePopoverDispNone");
                        }
                    }
                },20)
            }
            else{
                var animDur = parseInt(this.getData('ltPropDuration'));
                this.tIdClose = setTimeout(function(){
                    self.tIdClose = false;
                    if(self.getData('ltPropAnimation') == "zoom"){
                        // self.actualModalDiv.style.opacity = "0";
                        self.actualModalDiv.classList.remove('lytePopoverVisible');
                        self.actualModalDiv.style.transform = "";
                    }

                    self.$node.ltProp({"showCopy":false,"show":false});
                    self.$node.classList.remove('lytePopoverOpened');
                    if(self.getMethods("onClose")){
                        self.executeMethod("onClose",event,self);
                    }
                    // if(self.$node.ltProp('freeze')){
                    //     LytePopup.bodywrapperCount -= 1;
                    //     if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
                    //         document.body.classList.remove('bodyWrapper');
                    //     }
                    // }
                    LytePopup.checkAndRemoveWrapper();
                    if(!(self.getData('ltPropBindToBody'))){
                        self.removeDOMReferences();
                    }
                },animDur);
                this.actualModalDiv.style.transitionDuration = ((animDur == 0 ? 0 : animDur > 300 ? animDur - 200 : 100) / 1000)+"s";
                if(this.getData('ltPropAnimation') == "zoom"){
                    this.actualModalDiv.style.transform = "scale(0)";
                }
                else{
                    // this.actualModalDiv.style.opacity = 0;
                    this.actualModalDiv.classList.remove('lytePopoverVisible');
                }
                LytePopup.closePopup(this);
                // LytePopup.bindTransitionEnd(this.actualModalDiv);
                this.setData('visible',false);
                // this.actualModalDiv.addEventListener('transitionend', popoverCloseTransitionend)
                // function popoverCloseTransitionend(){
                //   self.actualModalDiv.removeEventListener('transitionend' , popoverCloseTransitionend)
                //   if(!(self.getData('visible'))){
                //     if($L(self.childComp).find('.lytePopover')[0]){
                //       $L(self.childComp).find('.lytePopover')[0].style.left = ""
                //       $L(self.childComp).find('.lytePopover')[0].style.top = ""
                //     }
                //     self.childComp.classList.add("lytePopoverDispNone");
                //   }
                // }
                setTimeout(function(){
                  if(!(self.getData('visible'))){
                      if($L(self.childComp).find('.lytePopover')[0]){
                        $L(self.childComp).find('.lytePopover')[0].style.left = ""
                        $L(self.childComp).find('.lytePopover')[0].style.top = ""
                      }
                      if(self.childComp){
                        self.childComp.classList.add("lytePopoverDispNone");
                      }
                    }
                },(parseInt(self.getData('ltPropDuration'))+20))
                if(this.$node.ltProp('freeze') && this.childComp.querySelector("lyte-popover-freeze")){
                    this.childComp.querySelector("lyte-popover-freeze").style.opacity = 0;
                    this.childComp.querySelector("lyte-popover-freeze").style.visibility = "";
                }
                if(!this.$node.ltProp('freeze')){
                    this.childComp.querySelector(".popoverWrapper").classList.remove('noFreeze');
                }
                if(!this.getData('ltPropFreeze') && document.body.classList.contains('lyteStopBodyScrolling')){
                    document.body.classList.remove('lyteStopBodyScrolling');
                }
            }
        }
        else{
            // if(LytePopup.evt){
            //     delete LytePopup.evt;
            // }
            this.setData('returnedFalse',true);
            if(!this.getData('visible')){
                this.setData('visible',true);
            }
            this.$node.ltProp('show',true);
        }
    },
    onBeforeShowHandling : function(){
        var result = true;
        if(this.getMethods("onBeforeShow")){
            result = this.executeMethod("onBeforeShow",this);
        }
        if(result === undefined || result){
            this.childComp.classList.remove("lytePopoverDispNone");
            this.setData('checkAria', this.getData('checkAria')+1);
            if(this.getData('ltPropDraggable')){
                this.addDragHandler();
            }
            this.updateScrollHandling();
            if(!this.$node.ltProp('freeze')){
                this.childComp.querySelector(".popoverWrapper").classList.add('noFreeze');
            }

            this.$node.ltProp("positionNew",this.$node.ltProp("position"));
            if(this.getData('ltPropDuration') == undefined){
                this.$node.ltProp('showCopy',true);
                this.fastdomfn5 = $L.fastdom.mutate(function(){
                    delete this.fastdomfn5;
                    this.fastdomfn6 = $L.fastdom.measure(function(){
                        delete this.fastdomfn6;
                        this.fastdomfn7 = $L.fastdom.mutate(function(){
                            delete this.fastdomfn7;
                            this.computeOffsetImpl();
                        },this);
                    },this);
                },this);
            }
            else{
                var self = this;
                this.initCompute = setTimeout(function(){
                    delete self.initCompute;
                    /*------------------------------ MUTATE STARTS --------------------------*/
                    self.$node.ltProp('showCopy',true);
                    self.fastdomfn5 = $L.fastdom.mutate(function(){
                        delete self.fastdomfn5;
                        self.fastdomfn6 = $L.fastdom.measure(function(){
                            delete self.fastdomfn6;
                            self.fastdomfn7 = $L.fastdom.mutate(function(){
                                delete self.fastdomfn7;
                                self.computeOffsetImpl();
                            },self);
                        },self);
                    },self);
                    /*------------------------------ MUTATE ENDS --------------------------*/
                },0);
            }
            if(!this.getData("first")){
                this.setData("first",true);
            }
            $L.fastdom.measure(function(){
                var scrollParent = this.$node.ltProp('originElem') ? LytePopup.getScrollParent(document.querySelector(this.$node.ltProp('originElem'))) : null;
                if(!this.getData('ltPropFreeze') && !(scrollParent && scrollParent.isEqualNode(document.body))){
                    document.body.classList.add('lyteStopBodyScrolling');
                }
            },this);
            if(!this.getData('visible')){
                this.setData('visible',true);
            }
            LytePopup.addPopup(this);
            if(this.$node.ltProp('freeze')){
                var freezeStyle = this.childComp.querySelector("lyte-popover-freeze").style;
                // freezeStyle.transitionDuration = (parseFloat(this.getData('ltPropDuration'))/1000) + "s";
                // freezeStyle.opacity = this.getData('ltPropDimmer').opacity;
                freezeStyle.background = this.getData('ltPropDimmer').color;
                if(!this.addedFreezeDetails){
                    freezeStyle.opacity = this.getData('ltPropDimmer').opacity;
                }
            }
            this.$node.alignPopover = this.computeOffsetImpl.bind(this);
            this.$node.calculateOffset = this.updateScrollHandling.bind(this);
        }
        else{
            this.$node.ltProp({"showCopy":false,"show":false});
        }
    },
    didDestroy : function(){
        this.$node.classList.remove('lytePopoverOpened');
        if(this.childComp){
            this.clearFastdomBatch();
            if(this.getData('ltPropAutoAlign') && this.$node.mutobserver){
                this.$node.mutobserver.disconnect();
                delete this.$node.mutobserver;
            }
            if(this.tIdBeforeClose){
                clearTimeout(this.tIdBeforeClose);
                this.tIdBeforeClose = false;
            }
            if(this.tIdClose){
                clearTimeout(this.tIdClose);
                this.tIdClose = false;
            }
            if(this.getData('ltPropFreeze') && this.addedFreezeDetails){
                LytePopup.hideOrShowFreeze("close",this);
                delete this.addedFreezeDetails;
            }
            // if(LytePopup.evt){
            //     delete LytePopup.evt;
            // }
            LytePopup.closePopup(this)
            this.childComp.remove();
            // delete this.childComp;
            // delete this.actualModalDiv;
            this.removeDOMReferences();
            // if(this.$node.ltProp('freeze')){
            //     LytePopup.bodywrapperCount -= 1;
            //     if(LytePopup.bodywrapperCount == 0 || LytePopup.components.length == 0){
            //         document.body.classList.remove('bodyWrapper');
            //     }
            // }
            LytePopup.checkAndRemoveWrapper();
            if(!this.getData('ltPropFreeze') && document.body.classList.contains('lyteStopBodyScrolling')){
                document.body.classList.remove('lyteStopBodyScrolling');
            }
        }
    },
    actions: {
        close : function(){
           this.$node.ltProp("show",false);
        }
    },
    methods : {
        beforeWormholeAppend : function(arg){
            this.childComp = arg;

            //Sets the padding style based on user provide padding values
            if(this.$node.parentElement && this.$node.parentElement.tagName == 'LYTE-COLORPICKER'){
                this.$node.parentElement.component.childComp = this.childComp;
            }
            if(this.childComp.querySelector('lyte-popover-header')){
                this.childComp.querySelector('lyte-popover-header').style.padding = this.getData('ltPropHeaderPadding');
            }
            if(this.childComp.querySelector('lyte-popover-content')){
                this.childComp.querySelector('lyte-popover-content').style.padding = this.getData('ltPropContentPadding');
            }
            if(this.childComp.querySelector('lyte-popover-footer')){
                this.childComp.querySelector('lyte-popover-footer').style.padding = this.getData('ltPropFooterPadding');
            }
            this.actualModalDiv = this.childComp.querySelector(".lytePopover");
            if(this.childComp.querySelector('lyte-popover-header') && this.getData('ltPropShowCloseButton')){
                var headerHeight=0, closeHeight= 0;
                $L.fastdom.measure(function(){
                    headerHeight = this.childComp.querySelector('lyte-popover-header').offsetHeight /*this.childComp.querySelector('lyte-popover-header').getBoundingClientRect().height*/;
                    closeHeight = this.childComp.querySelector('.lytePopoverClose').offsetHeight /*this.childComp.querySelector('.lytePopoverClose').getBoundingClientRect().height*/;
                },this);
                $L.fastdom.mutate(function(){
                    this.childComp.querySelector('.lytePopoverClose').style.top = (headerHeight - closeHeight) / 2 + "px";
                },this);
            }
        }
    },
    observeClickEvent : function(){
        LytePopup._stopPropagation = this.getData('ltPropStopClick');
        if(LytePopup._stopPropagation){
            LytePopup._sourceComp = this;
        }
        else{
            if(LytePopup._sourceComp){
                delete LytePopup._sourceComp;
            }
        }
    }.observes('ltPropStopClick')
});



if (document.readyState === "complete" || document.readyState === "interactive"){
    addPopoverEvent();
}
else{
    document.addEventListener("DOMContentLoaded", function(event){
        addPopoverEvent(event);
    });
}

function addPopoverEvent(event){

    document.addEventListener('click',function(event){
        if(LytePopup._stopPropagation){
            LytePopup._sourceComp.setData('ltPropStopClick', false);
            return;
        }
        var ele = event.target;
        while(!$L(ele).hasClass('popoverWrapper') && ele.tagName != "LYTE-POPOVER-FREEZE" && ele.tagName != 'LYTE-DROP-BOX' && ele.tagName != 'HTML'){
            ele = ele.parentElement;
            if(!ele){
                return
            }
        }
        if(ele.tagName == 'HTML' || ele.tagName == "LYTE-POPOVER-FREEZE"){
            for(var i = LytePopup.components.length -1 ; i>=0; i--){
                if(LytePopup.components[i].$node.tagName == "LYTE-POPOVER" && LytePopup.components[i].childComp.style.visibility == "visible"){
                    // LytePopup.evt = event;
                    var popover = LytePopup.components[i].$node;
                    if(popover && popover.component.getData('visible') && popover.component.getData('ltPropCloseOnBodyClick') && !popover.component.getData('dragRunning')){
                        popover.component.setData('visible',false);
                        popover.ltProp('show',false);
                        break;
                    }
                }
            }
        }
        /*  If ele is having popoverWrapper class ie. a popover and it is not the popover that is opened at last which is the current popover element in the page
            this means the click has happened outside the current popover
            so the current popover should be closed */
        else if(ele.classList.contains('popoverWrapper') && LytePopup.components.length > 1 && LytePopup.components[LytePopup.components.length -1].$node.tagName == "LYTE-POPOVER"){
            var comp = LytePopup.components[LytePopup.components.length -1];
            if(!(comp.childComp.contains(ele)) && comp.getData('visible') && comp.getData('ltPropCloseOnBodyClick')){
                comp.setData('visible',false);
                comp.$node.ltProp('show',false);
            }
        }
    },true);

    //13/01/2020 - Changed document.body.addEventListener => window.addEventListener as scroll was not triggered when the html was having scroll(not the body)
    window.addEventListener('scroll',function(event){    //This is for closing the dropdown when an outside area is clicked(CODE HELP)
       // console.log("called scroll");
       if(LytePopup.makingVisible) {
        LytePopup.makingVisible = false;
        return;
       }
        var wormhole;
        for(var i=LytePopup.components.length-1;i>=0;i--){
            if(LytePopup.components[i].$node && LytePopup.components[i].$node.nodeName == "LYTE-POPOVER" && LytePopup.components[i].childComp.style.visibility == "visible"){
                wormhole = LytePopup.components[i].childComp;
                if(LytePopup.components[i].data.ltPropCloseOnScroll){
                  LytePopup.components[i].setData('ltPropShow' , false);
                  return;
                }
                if(wormhole && wormhole._callee.component.$node.ltProp("scrollable")){
                    if(LytePopup.components[i].callOnScroll(event)){
                        var ele =  wormhole.querySelector('.lytePopover');
                        if(!ele/* || !wormhole._callee.ltProp('originElem')*/){
                            return ;
                        }
                        while(ele.tagName != 'LYTE-WORMHOLE'){
                            ele = ele.parentElement
                        }
                        var curscroll = event.target
                        // if(curscroll.nodeName == "#document"){     //This probably happens because scrollIntoView is used to focus the dropdown which is open at the start so the event.target is #document(CODE HELP)
                        //     return ;
                        // }
                        while(curscroll.tagName != "LYTE-WORMHOLE" && curscroll.tagName != 'HTML' && curscroll.nodeName != "#document"){
                            curscroll = curscroll.parentElement
                        }
                        if(curscroll.tagName == 'LYTE-WORMHOLE' && curscroll.isEqualNode(ele)){
                            return ;
                        }
                        // console.log("didnt return");
                        ele._callee.component.computeOffsetImpl();
                        if(ele._callee.component.getData('ltPropForceScroll')){
                            continue;
                        }

                        var par = document.querySelector(ele._callee.ltProp('originElem'));
                        var screl = event.target
                        var pbcr = par.getBoundingClientRect();

                        var boundary = ele._callee.ltProp("boundary");
                        var popoverElem = ele.querySelector('.lytePopover');
                        var windowSpacing = ele._callee.getData('windowSpacing');
                        if(!(Object.keys(boundary).length === 0 && boundary.constructor === Object)){
                            if(boundary.top && popoverElem.getBoundingClientRect().top < parseFloat(boundary.top)){
                                ele._callee.ltProp('show',false);
                            }
                            else if(boundary.bottom && popoverElem.getBoundingClientRect().bottom > parseFloat(boundary.bottom)){
                                ele._callee.ltProp('show',false);
                            }
                            else if(boundary.left && popoverElem.getBoundingClientRect().left < parseFloat(boundary.left)){
                                ele._callee.ltProp('show',false);
                            }
                            else if(boundary.right && popoverElem.getBoundingClientRect().right > parseFloat(boundary.right)){
                                ele._callee.ltProp('show',false);
                            }
                        }
                        // console.log("for moving up",sbcr.top,pbcr.top)
                        // console.log("for moving down",(sbcr.top+sbcr.height),(pbcr.top+pbcr.height))
                        if(screl.contains(par)){
                            var arrowEle = ele.querySelector('#lytePopoverArrow');
                            if(arrowEle && arrowEle.classList.contains('lytePopoverArrowBottom') && ((pbcr.top+(pbcr.height/2)) > window.innerHeight)){
                                ele._callee.ltProp('show',false);
                            }
                            if((arrowEle &&
                                    (arrowEle.classList.contains('lytePopoverArrowLeft') || arrowEle.classList.contains('lytePopoverArrowRight')) &&
                                    ((arrowEle.getBoundingClientRect().bottom >= ele.querySelector('.lytePopover').getBoundingClientRect().bottom) ||
                                        (arrowEle.getBoundingClientRect().top <= ele.querySelector('.lytePopover').getBoundingClientRect().top))
                                )){
                                ele._callee.ltProp('show',false);
                            }
                            if(screl.nodeName == "#document"){     //This probably happens because scrollIntoView is used to focus the dropdown which is open at the start so the event.target is #document(CODE HELP)
                                // console.log("pbcr.top ==> ",pbcr.top,"   pbcr.bottom ==> ",pbcr.bottom);
                                var winH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                                var winW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                                if(pbcr.top < windowSpacing.top || (pbcr.bottom+3) >= (winH - windowSpacing.bottom)){
                                    ele._callee.ltProp('show',false);
                                }
                                // console.log("pbcr.left ==> ",pbcr.left,"   pbcr.right ==> ",pbcr.right);
                                if(pbcr.left < windowSpacing.left || (pbcr.right+3) >= (winW - windowSpacing.right)){
                                    ele._callee.ltProp('show',false);
                                }
                            }
                            else{
                                var sbcr = screl.getBoundingClientRect();
                                if((sbcr.top + windowSpacing.top) > pbcr.top || (sbcr.top + sbcr.height - windowSpacing.bottom) < (pbcr.top + pbcr.height)){
                                    ele._callee.ltProp('show',false);
                                }
                                if((sbcr.left + windowSpacing.left) > pbcr.left || (sbcr.left + sbcr.width - windowSpacing.right) < (pbcr.left + pbcr.width)){
                                    ele._callee.ltProp('show',false);
                                }
                            }
                        }

                    }
                }
            }
        }


    },true);

    window.addEventListener("resize",function(event){
        if(LytePopup._lytePopoverRTId){
            // console.log(LytePopup._lytePopoverRTId);
            clearTimeout(LytePopup._lytePopoverRTId);
            LytePopup._lytePopoverRTId = false;
        }
        for(var i = LytePopup.components.length - 1 ; i >= 0 ; i--){
          var thDiv = LytePopup.components[i].$node.component
          // if((thDiv.$node.ltProp("height") === "auto" || thDiv.$node.ltProp("width") === "auto")){
          //   thDiv.setData('modalElemWidth' , thDiv.actualModalDiv.getBoundingClientRect().width)
          //   thDiv.setData('modalElemHeight' , thDiv.actualModalDiv.getBoundingClientRect().height)
          // }
        }
        LytePopup._lytePopoverRTId = setTimeout(function(){
            for(var i = LytePopup.components.length - 1 ; i >= 0 ; i--){
                if(LytePopup.components[i].$node && LytePopup.components[i].$node.nodeName == "LYTE-POPOVER" && LytePopup.components[i].childComp.style.visibility == "visible" && LytePopup.components[i].childComp.querySelector('.lytePopover')){
                    LytePopup.components[i].$node.component.setData('resize', true);
                    LytePopup.components[i].$node.component.updateScrollHandling(event);

                    /*  Commented calling these functions from here and called them from inside updateScrollHandling
                        so that the functions gets called in a synchronised manner and doesnt overlap each other. */

                    // LytePopup.components[i].$node.component.computeOffsetImpl();
                    // LytePopup.components[i].$node.component.callOnResize(event);
                    // var origElemPosition = document.querySelector(LytePopup.components[i].$node.ltProp('originElem')).getBoundingClientRect();
                    // var winH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    // if(origElemPosition.bottom + 3 >= winH){
                    //     LytePopup.components[i].$node.ltProp("show",false);
                    // }
                }
            }
            LytePopup._lytePopoverRTId = false;
        },100);
    },true);

};

/**
 * @syntax yielded
 * <lyte-popover>
 *     <template is = "registerYield" yield-name = "popover">
 *         <lyte-popover-header> Create Profile </lyte-popover-header>
 *         <lyte-popover-content>
 *             //Some Content
 *         </lyte-popover-content>
 *         <lyte-popover-footer class = "right">
 *             //Some button
 *         </lyte-popover-footer>
 *     </template>
 * </lyte-popover>
 */
