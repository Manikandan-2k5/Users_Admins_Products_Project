/**
 * Renders a kanbanview
 * @component lyte-kanbanview
 * @version 3.1.0
 * @dependencies lyte-card,lyte-board
 * /components/lyte-card.js
 * /theme/compiledCSS/default/ltr/lyte-ui-card.css
 * /components/lyte-board.js
 * /theme/compiledCSS/default/ltr/lyte-ui-board.css
 * @methods onDragSelectForBoard, onDragSelectBoards, onBodyScroll, onDragSelectForCard, onRecordDropForBoard, onRecordDrop,onDragSelectCard
 */
 Lyte.Component.register( 'lyte-kanbanview' , {
_template:"<template tag-name=\"lyte-kanbanview\"> <div class=\"lyteKanbanviewScrollDivSelector {{dummyId}}\" onscroll=\"{{action('onBodyScroll',event)}}\"> <template is=\"for\" items=\"{{ltPropBoardDetails}}\" item=\"item\" index=\"dataIndex\"> <div class=\"lyteKanbanViewItem\"> <lyte-yield yield-name=\"kanbanYield\" lyte-board-item=\"{{item}}\" lyte-index=\"{{dataIndex}}\" lyte-kanban-id=\"{{dummyId}}\"></lyte-yield> </div> </template> </div> </template>",
_dynamicNodes : [{"type":"attr","position":[1]},{"type":"attr","position":[1,1]},{"type":"for","position":[1,1],"dynamicNodes":[{"type":"attr","position":[1,1]},{"type":"insertYield","position":[1,1]}]}],
_observedAttributes :["ltPropBoardDetails","ltPropSortable","ltPropMoreStageRecord","ltPropId","ltPropPreventBoardDetailObserver","ltPropViewPort","ltPropBoardScrollStopDuration","ltPropAria","ltPropAriaAttributes","ltPropSortableCancel","dummyId"],

	data : function(){
		return {
			/** 
			 * @componentProperty {array} ltPropBoardDetails=[]
			 * @version 3.1.0
			 */

			'ltPropBoardDetails' : Lyte.attr( 'array', {
				'default': []
			} ), 
			/** 
			 * @typedef {object} sortable
			 * @property {boolean} board
			 * @property {boolean} card
			*/
			/** 
			 * @componentProperty {sortable} ltPropSortable={"board" : true, "card" : true }
			 * @version 3.1.0
			 */
			'ltPropSortable' : Lyte.attr( 'object', {
				'default': {"board" : true, "card" : true }

			} ) ,
			/** 
			 * @componentProperty {boolean} ltPropMoreStageRecord=false
			 * @version 3.1.0
			 */
			'ltPropMoreStageRecord' : Lyte.attr( 'boolean', {
				'default': false
			} ),
			/** 
			 * @componentProperty {string} ltPropId
			 * @version 3.1.0
			 */
			'ltPropId' : Lyte.attr( 'string'),
			/** 
			 * @componentProperty {boolean} ltPropPreventBoardDetailObserver
			 * @version 3.1.0
			 */
			'ltPropPreventBoardDetailObserver' : Lyte.attr('boolean',{
				'default':false
			}),
			/** 
			 * @componentProperty {boolean} ltPropViewPort
			 * @version 3.1.0
			 */
			'ltPropViewPort' : Lyte.attr('boolean',{
				'default':true
			}),
			/** 
			 * @componentProperty {number} ltPropBoardScrollStopDuration=250
			 * @version 3.1.0
			 */
			'ltPropBoardScrollStopDuration' : Lyte.attr('number',{
				'default':250
			}),
			/** 
			 * @componentProperty {boolean} ltPropAria
			 * @version 3.1.0
			 */
			'ltPropAria' : Lyte.attr('boolean',{
				'default':false
			}),
			/** 
			 * @componentProperty {object} ltPropAriaAttributes
			 * @version 3.1.0
			 */
			'ltPropAriaAttributes' : Lyte.attr('object',{
				default:{}
			}), 
			/**
            * @componentProperty string ltPropSortableCancel
			* @version 3.1.0
            */
			'ltPropSortableCancel' : Lyte.attr('string'),
			/**
            * @experimental dummyId
            */
			'dummyId' : Lyte.attr( 'string', {
				'default' : ''
			} )
		}		
	},
	didDestroy : function() {
		clearTimeout(this.timeout2);
		clearTimeout(this.debounceTimeout)
		clearTimeout(this.viewPortTimeOut)

	},
	didConnect : function() {
		var kanbanviewList = document.querySelectorAll('lyte-kanbanview')
		this._dir = _lyteUiUtils.getRTL();

		if(this.getData('ltPropId') == undefined){
			var pos = Object.values(kanbanviewList).indexOf(this.$node)
			this.setData('dummyId', 'dummyId'+pos)
		}
		else{
			this.setData('dummyId',this.getData('ltPropId'))
		}
		this.doBoardSortable()
		if(!this.getData('ltPropViewPort')){
			this.doCardSortable()
		}
		this.$node.getVisibleBoard =function(){
			var scrollDiv = this.$node.querySelector( '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') )
			if(scrollDiv.scrollWidth<scrollDiv.clientWidth){
				return this.getData('ltPropBoardDetails')
			}
			return this.getVisibleNode()
		}.bind(this)
	},
	ariaObs : function(){
		if(this.getData('ltPropAria')){
			_lyteUiUtils.setAttribute( this.$node.querySelector('.lyteKanbanviewScrollDivSelector'), this.getData( 'ltPropAriaAttributes' ) || {}, {} );
		}
	}.observes('ltPropAriaAttributes').on('didConnect'),
	getVisibleNode : function(){
        // return;
        var bcr=this.$node.getBoundingClientRect(),
        originalRows = Array.from( this.$node.getElementsByTagName( 'lyte-board' ) ),
        tValue = Math.max( bcr.left + (this._dir?0:10) , -10 ),
        bValue = Math.min( window.innerWidth + 10, bcr.right  - (this._dir?10:0)),
        visible = [],boardDetails = this.getData('ltPropBoardDetails');


        for( var i = 0; i < originalRows.length; i++ ){
            var row = originalRows[ i ],
            _bcr = row.getBoundingClientRect();
            if( _bcr.right > tValue && _bcr.left <bValue ){
				if(originalRows[i].component.getMethods('onBoardVisible')){
					originalRows[i].component.executeMethod('onBoardVisible', boardDetails,boardDetails[i])
				}

                visible.push( boardDetails[i] );
                
            }
        }

        return visible;
    
	},
	callOnBoardVisible : function(){

		var originalRows = Array.from( this.$node.getElementsByTagName( 'lyte-board' ) )
		for( var i = 0 ; i < originalRows.length ; i++) {
			if( originalRows[i].component.getMethods( 'onBoardVisible' ) ) {
				originalRows[i].component.executeMethod( 'onBoardVisible' , this.getData('ltPropBoardDetails') ,  this.getData('ltPropBoardDetails')[i])
			}
		}
	},
	boardObs : function() {
		if( this.getData('ltPropSortable').board ) {
			this.addSortableForNewBoards()
		}
		if(!this.getData('ltPropPreventBoardDetailObserver') && this.getData('ltPropSortable').card){
			// $L( '.lyteKanbanviewScrollDivSelector ', this.$node ).sortable("destroy")
			clearTimeout(this._sortableTimeout)
			this._sortableTimeout = setTimeout(function(){
				this.setupSortableForCard()
			}.bind(this),100)
			
		}
	}.observes( 'ltPropBoardDetails.[]' ),
	doCardSortable : function() {
		clearTimeout(this._cardSortableTimeout)
		this._cardSortableTimeout =setTimeout( function(){
			if( this.getData( 'ltPropBoardDetails' ).length > 0 && this.getData( 'ltPropSortable' ).card ) {
				this.setupSortableForCard()
			}
		}.bind(this),100)
		
	},
	doBoardSortable : function() {
		if( this.getData( 'ltPropBoardDetails' ).length > 0 && this.getData( 'ltPropSortable' ).board ) {
			this.setupSortableForBoard()
		}
	},
	hasSameColumnReordered : function( source, destination ) {
		var sourceIndex = source.getAttribute( 'index' ),
		destinationIndex = destination.getAttribute( 'index' )

		if( sourceIndex == destinationIndex ) {
			return true
		}
		return false
	},
	onRecordDropForBoard : function( boardDetails, droppedElement, fromIndex, toIndex, source, destination, draggedElement ){
		
		if( this.getMethods( 'onRecordDropForBoard') ) {
			this.executeMethod( 'onRecordDropForBoard', droppedElement, source, destination, fromIndex, toIndex ,boardDetails ,draggedElement[0] )
		}
	},
	onRecordDrop : function( boardDetails, sourceArray, destArray, draggedElement, fromIndex, toIndex, source, destination,droppedElement) {
		var sourceIndex = source.getAttribute( 'index' ),
		destinationIndex = destination.getAttribute( 'index' ),
		board,card


		board = this.$node.querySelectorAll( 'lyte-board' );
		card = droppedElement.querySelector( 'lyte-card' )
		if( !this.hasSameColumnReordered( source, destination ) ) {
			boardDetails[ sourceIndex ].cards = sourceArray; 
			board[ sourceIndex ].setData( 'ltPropContent' , sourceArray );
		}
		boardDetails[ destinationIndex ].cards = destArray; 
		board[ destinationIndex ].setData('ltPropContent' , destArray);

		if( this.getMethods( 'onRecordDrop') ) {
			this.executeMethod( 'onRecordDrop', card, board[ sourceIndex ], board[ destinationIndex ], fromIndex, toIndex,parseInt(sourceIndex),parseInt(destinationIndex),boardDetails,draggedElement[0] ) 
		}
	},
	addSortableForCard : function(){
		//debounce
		clearTimeout(this.viewPortTimeOut)
		this.viewPortTimeOut = setTimeout(function(){
			// this.setupSortableForCard()
			
			this.setUpCard()
		}.bind(this),250)
	},
	setUpCard : function(){
		var boardWithoutSortable = this.$node.querySelectorAll( '.lyteKanbanNestedSortable:not(.sortable-parent)' )
		var boardWithSortable = this.$node.querySelectorAll( '.lyteKanbanNestedSortable.sortable-parent' )

		if( boardWithoutSortable.length > 0 && boardWithSortable.length > 0 ){
			var self=this  ;
			var sortableObject = {
				scrollDivX  :  '.lyteKanbanviewScrollDivSelector.'+self.getData('dummyId') , 
				isSameClass : true, 
				dblTouchEvent : true,
				onReady : function(sortableElem) {
					var board = $L(sortableElem)[0].closest("lyte-board")
					if( self.getMethods( 'onReadyForCard' ) ){
						return self.executeMethod( 'onReadyForCard', sortableElem, board); 
					}
				},
				onSelect  : function( currentElem, fromIndex, source, event ) { 
					if($L(currentElem).hasClass('lyteKanbanNoResultMsg')){
						return false;
					}
					var	card = currentElem.querySelector( 'lyte-card' )

					if( self.getMethods( 'onDragSelectForCard' ) ){
						return self.executeMethod( 'onDragSelectForCard', card, fromIndex, source, event ); 
					}
					
					return true;
				},
				onDrag  : function ( draggableElement , belowElem, event, placeholder ){ 
					self.prevent =true
					var	card = draggableElement.querySelector( 'lyte-card' )
					if( self.getMethods( 'onDragForCard' ) ){
							self.executeMethod( 'onDragForCard', card, belowElem, event, placeholder ); 
					}
				},
				onEnter : function(event, obj){
					console.log("onEnter")
					var element = arguments[1].sortable,
					boardDetails=self.getData( 'ltPropBoardDetails' )

					if(element.getAttribute('cards-length')==0){
						var div=element.nextElementSibling
						if($L(div).hasClass('lyteKanbanNoResultMsg')){
							div.classList.add('lyteHide')
						}
					}
					if( self.getMethods( 'onEnterForCard' ) ){
						return self.executeMethod( 'onEnterForCard', boardDetails, event, obj); 
					}
				},
				onLeave : function ( event , obj) {
					var element = arguments[1].sortable,
					boardDetails=self.getData( 'ltPropBoardDetails' )

					if(element.getAttribute('cards-length')==0){
						var div=element.nextElementSibling
						if($L(div).hasClass('lyteKanbanNoResultMsg')){
							div.classList.remove('lyteHide')
						}
					}
					if( self.getMethods( 'onLeaveForCard' ) ){
						return self.executeMethod( 'onLeaveForCard',boardDetails, event, obj); 
					}
				},
				onBeforeDrop : function ( droppableElement , belowElement , placeholderElement , fromIndex , toIndex , source , destination ) {
					var sourceIndex = source.getAttribute( 'index' ),
					destinationIndex = destination.getAttribute( 'index' ),
					boardDetails=self.getData( 'ltPropBoardDetails' ),
					sourceArray=boardDetails[ sourceIndex ].cards,
					destArray=boardDetails[ destinationIndex ].cards,
					flag = true;
					if( self.getMethods( 'onBeforeDropForCard' ) ){
						flag = self.executeMethod( 'onBeforeDropForCard', boardDetails, sourceArray, destArray, droppableElement, belowElement, placeholderElement, fromIndex, toIndex, source, destination ); 
					}
					return flag;
				},
				onDrop  : function( droppedElement , destination , belowElement , fromIndex , toIndex , source ) {
					var sourceIndex = source.getAttribute( 'index' ),
					destinationIndex = destination.getAttribute( 'index' ),
					boardDetails=self.getData( 'ltPropBoardDetails' ),
					sourceArray=boardDetails[ sourceIndex ].cards,
					destArray=boardDetails[ destinationIndex ].cards,
					draggedElement
					if(destArray.length==0){
						toIndex=0;
					}
					draggedElement = ( self.hasSameColumnReordered( source, destination ) ? Lyte.arrayUtils( destArray, 'splice', fromIndex, 1 ) : Lyte.arrayUtils( sourceArray, 'splice', fromIndex, 1 ) )
					Lyte.arrayUtils( destArray, 'splice', toIndex, 0, draggedElement[ 0 ] )
					delete self.prevent

					self.onRecordDrop( boardDetails, sourceArray, destArray, draggedElement, fromIndex, toIndex, source, destination ,droppedElement)

				}  
			}
			if( this.getData('ltPropSortableCancel') ){
				sortableObject.cancel = this.getData('ltPropSortableCancel')

			}
			boardWithSortable.forEach(function(element){
				element.addToConnectedWith(
					boardWithoutSortable,sortableObject);
			})
			
		} 
		if(boardWithSortable.length == 0){
			this.setupSortableForCard()
		}
	},
	setupSortableForBoard : function() {
		var self=this  ;
		var sortableObject =  {  
			scrollDivX  :  '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') ,  
			dblTouchEvent: true ,
			onReady : function(sortableElem) {
				if( self.getMethods( 'onReadyForBoard' ) ){
					return self.executeMethod( 'onReadyForBoard', sortableElem, this); 
				}
			},
			onSelect  : function( currentElem, fromIndex, source, event ) { 
					var	board = currentElem.querySelector( 'lyte-board' )
					
					if( self.getMethods( 'onDragSelectForBoard' ) ){
						return self.executeMethod( 'onDragSelectForBoard', board, fromIndex, source, event ); 
					}
					
					return true;
			},
			onDrag  : function ( draggableElement , belowElem, event, placeholder ){ 
				self.prevent =true
				var	board = draggableElement.querySelector( 'lyte-board' )

				if( self.getMethods( 'onDragForBoard' ) ){
						 self.executeMethod( 'onDragForBoard', board, belowElem, event, placeholder ); 
				}
			},
			onEnter : function ( event , obj) {
				var boardDetails=self.getData( 'ltPropBoardDetails' )

				if( self.getMethods( 'onEnterForBoard' ) ){
					self.executeMethod( 'onEnterForBoard',boardDetails, event, obj); 
		   		}
			},
			onLeave : function ( event , obj) {
				var boardDetails=self.getData( 'ltPropBoardDetails' )

				if( self.getMethods( 'onLeaveForBoard' ) ){
					self.executeMethod( 'onLeaveForBoard', boardDetails, event, obj); 
		   		}
			},
			onBeforeDrop : function ( droppableElement , belowElement , placeholderElement , fromIndex , toIndex , source , destination ) {
				var boardDetails=self.getData( 'ltPropBoardDetails' ),
				board = droppableElement.querySelector( 'lyte-board' ),
				flag = true;
				if( self.getMethods( 'onBeforeDropForBoard' ) ){
					flag = self.executeMethod( 'onBeforeDropForBoard', boardDetails, droppableElement, belowElement, placeholderElement, fromIndex, toIndex, source, destination ); 
				}
				return flag;
			},
			onDrop  : function( droppedElement , destination , belowElement , fromIndex , toIndex , source ) {
				var boardDetails=self.getData( 'ltPropBoardDetails' ),
				draggedElement, board = droppedElement.querySelector( 'lyte-board' )



				draggedElement = Lyte.arrayUtils( boardDetails, 'splice', fromIndex, 1 )
				Lyte.arrayUtils( boardDetails, 'splice', toIndex, 0, draggedElement[ 0 ] )
				delete self.prevent

				self.setData('ltPropBoardDetails',boardDetails)
				self.onRecordDropForBoard( boardDetails, board , fromIndex, toIndex, source, destination, draggedElement)

				
		 	} 
 		}
		if( this.getData('ltPropSortableCancel') ){
			sortableObject.cancel = this.getData('ltPropSortableCancel')

		}
		$L( '.lyteKanbanviewScrollDivSelector ', this.$node ).sortable(sortableObject); 
	},
	setupSortableForCard : function(){
		var self=this;
		// if($L( '.lyteKanbanNestedSortable', this.$node )){
		var sortableObject = {  
			scrollDivX  : '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') ,  
			connectedWith  : '.lyteKanbanNestedSortable.'+this.getData('dummyId') , 
			isSameClass : true,
			dblTouchEvent: true ,
			onReady : function(sortableElem) {
				var board = $L(sortableElem)[0].closest("lyte-board")
				if( self.getMethods( 'onReadyForCard' ) ){
					return self.executeMethod( 'onReadyForCard', sortableElem, board); 
				}
			},
			onSelect  : function( currentElem, fromIndex, source, event ) { 
					if($L(currentElem).hasClass('lyteKanbanNoResultMsg')){
						return false;
					}
					var	card = currentElem.querySelector( 'lyte-card' )

					if( self.getMethods( 'onDragSelectForCard' ) ){
						return self.executeMethod( 'onDragSelectForCard', card, fromIndex, source, event ); 
					}
					
					return true;
			},
			onDrag  : function ( draggableElement , belowElem, event, placeholder ){ 
				self.prevent =true
				var	card = draggableElement.querySelector( 'lyte-card' )
				if( self.getMethods( 'onDragForCard' ) ){
						 self.executeMethod( 'onDragForCard', card, belowElem, event, placeholder ); 
				}
			},
			onEnter : function(event, obj){
				var element = arguments[1].sortable,
				boardDetails=self.getData( 'ltPropBoardDetails' )

				if(element.getAttribute('cards-length')==0){
					var div=element.nextElementSibling
					if($L(div).hasClass('lyteKanbanNoResultMsg')){
						div.classList.add('lyteHide')
					}
				}
				if( self.getMethods( 'onEnterForCard' ) ){
					return self.executeMethod( 'onEnterForCard', boardDetails, event, obj); 
				}
			},
			onLeave : function ( event , obj) {
				var element = arguments[1].sortable,
				boardDetails=self.getData( 'ltPropBoardDetails' )

				if(element.getAttribute('cards-length')==0){
					var div=element.nextElementSibling
					if($L(div).hasClass('lyteKanbanNoResultMsg')){
						div.classList.remove('lyteHide')
					}
				}
				if( self.getMethods( 'onLeaveForCard' ) ){
					return self.executeMethod( 'onLeaveForCard',boardDetails, event, obj); 
				}
			},
			onBeforeDrop : function ( droppableElement , belowElement , placeholderElement , fromIndex , toIndex , source , destination ) {
				var sourceIndex = source.getAttribute( 'index' ),
				destinationIndex = destination.getAttribute( 'index' ),
				boardDetails=self.getData( 'ltPropBoardDetails' ),
				sourceArray=boardDetails[ sourceIndex ].cards,
				destArray=boardDetails[ destinationIndex ].cards,
				flag = true;
				if( self.getMethods( 'onBeforeDropForCard' ) ){
					flag = self.executeMethod( 'onBeforeDropForCard', boardDetails, sourceArray, destArray, droppableElement, belowElement, placeholderElement, fromIndex, toIndex, source, destination ); 
				}
				return flag;
			},
			onDrop  : function( droppedElement , destination , belowElement , fromIndex , toIndex , source ) {
				var sourceIndex = source.getAttribute( 'index' ),
				destinationIndex = destination.getAttribute( 'index' ),
				boardDetails=self.getData( 'ltPropBoardDetails' ),
				sourceArray=boardDetails[ sourceIndex ].cards,
				destArray=boardDetails[ destinationIndex ].cards,
				draggedElement
				if(destArray.length==0){
					toIndex=0;
				}
				draggedElement = ( self.hasSameColumnReordered( source, destination ) ? Lyte.arrayUtils( destArray, 'splice', fromIndex, 1 ) : Lyte.arrayUtils( sourceArray, 'splice', fromIndex, 1 ) )
				Lyte.arrayUtils( destArray, 'splice', toIndex, 0, draggedElement[ 0 ] )
				delete self.prevent

				self.onRecordDrop( boardDetails, sourceArray, destArray, draggedElement, fromIndex, toIndex, source, destination ,droppedElement)

			 } 
		 }
		 if(this.getData('ltPropSortableCancel')){
			sortableObject.cancel =this.getData('ltPropSortableCancel')

		}
			$L( '.lyteKanbanNestedSortable', this.$node ).sortable( sortableObject );
		// }
		 
	},
	isDragging : function(){
		if(this.prevent){
			return true
		}
		return false
	},
	hasScrollEndReached : function(event) {
		var scrollDiv = this.$node.querySelector( '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') ),
			boardDetails = this.getData( 'ltPropBoardDetails' ),
			clientRect=this.$node.getBoundingClientRect(),
			lastClient=scrollDiv.lastElementChild.getBoundingClientRect()
			if((!this._dir && lastClient.right-3 < clientRect.right)||(this._dir&& lastClient.left+3>Math.min(window.innerWidth,clientRect.left))){
					if( this.getMethods( 'onBodyScroll' ) ) {
					this.executeMethod( 'onBodyScroll', this, boardDetails,event );
					
					}
			}
         
	},
	addSortableForNewBoards : function() {
		var sortableClass = this.$node.querySelectorAll( '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') )[ 0 ].getSortableClass(),
		boardWithoutSortable = this.$node.querySelectorAll( '.lyteKanbanViewItem:not(.'+sortableClass+')' )

		$L(boardWithoutSortable).addClass("sortable-element "+sortableClass );
	},
	executeScrollStop : function(event){
		
		var visible,boardDetails=this.getData('ltPropBoardDetails'),
		scrollDiv = this.$node.querySelector( '.lyteKanbanviewScrollDivSelector.'+this.getData('dummyId') )
		if(scrollDiv.scrollWidth > scrollDiv.clientWidth){
			visible = this.getVisibleNode()
		}
		else{
			visible = boardDetails
			this.callOnBoardVisible()

		}	
		if( this.getMethods( 'onBodyScrollStop' ) ) {
			this.executeMethod( 'onBodyScrollStop', boardDetails, visible, this, scrollDiv.scrollLeft,event );
		}
	},
	actions :{
		onBodyScroll : function( ev ) {
			this.timeout2 = setTimeout( function() {
				this.hasScrollEndReached(ev)
			}.bind( this ), 10 );
			clearTimeout(this.debounceTimeout)
			this.debounceTimeout = setTimeout( function(){
				this.executeScrollStop(ev)
			}.bind(this),this.getData('ltPropBoardScrollStopDuration'))
		}
	}
});
/**
 * 
 * @syntax yielded 
 *	<lyte-kanbanview lt-prop-id="kanbanview">
 *   <template is="registerYield" yield-name="kanbanYield">
 *      <lyte-board lt-prop-kanban-id="kanbanview">
 *           <template is="registerYield" yield-name="headerItem">
 *           Board 1
 *           </template>
 *           <template is="registerYield" yield-name="contentItem">
 *               <lyte-card >
 *                   <template is="registerYield" yield-name="yield">
 *                       <lyte-card-body>
 *		    					Card 1
 *                       </lyte-card-body>
 *                   </template>
 *				</lyte-card>
 *				<lyte-card >
 *                   <template is="registerYield" yield-name="yield">
 *                       <lyte-card-body>
 *		    					Card 2
 *                       </lyte-card-body>
 *                   </template>
 *               </lyte-card>
 *          </template>
 *       </lyte-board>
 *       <lyte-board lt-prop-kanban-id="kanbanview">
 *           <template is="registerYield" yield-name="headerItem">
 *           Board 2
 *           </template>
 *           <template is="registerYield" yield-name="contentItem">
 *               <lyte-card >
 *                   <template is="registerYield" yield-name="yield">
 *                       <lyte-card-body>
 *		    					Card 1
 *                       </lyte-card-body>
 *                   </template>
 *				</lyte-card>
 *				<lyte-card >
 *                   <template is="registerYield" yield-name="yield">
 *                       <lyte-card-body>
 *		    					Card 2
 *                       </lyte-card-body>
 *                   </template>
 *               </lyte-card>
 *          </template>
 *       </lyte-board>
 *   </template>
 *   </lyte-kanbanview>
 */
