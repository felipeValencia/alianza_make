'use strict';


angular.module('mean.system').config(['$compileProvider', function($compileProvider) {
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|tel|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0|chrome-extension):/);
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|tel|ftp|file|blob|ms-appx|x-wmapp0|chrome-extension):|data:image\//);

}]);

angular.module('mean.system',['ui.bootstrap','colorpicker.module']).controller('IndexController', ['$scope', 'Global', '$modal','$timeout',
  function($scope, Global, $modal,$timeout) {

    $scope.global = Global;
    this.front = false;
    this.right = false;
    this.left = false;
    this.back = false;
    this.bottom=false;
    $scope.color = '#ffffff';
    $scope.selected='mif-question';
    $scope.items = [
          'mif-calculator2',
          'mif-barbell',
          'mif-3d-rotation',
          'mif-alarm',
          'mif-alarm-on',
          'mif-favorite',
          'mif-settings-ethernet',
          'mif-settings-power',
          'mif-settings-voice',
          'mif-shopping-basket',
          'mif-contacts-dialer',
          'mif-contacts-mail',
          'mif-drafts',
          'mif-mail',
          'mif-brightness-auto',
          'mif-multitrack-audio',
          'mif-widgets',
          'mif-usb',
          'mif-money',
          'mif-vertical-align-bottom',
          'mif-vertical-align-center',
          'mif-vertical-align-top',
          'mif-file-download',
          'mif-file-upload',
          'mif-keyboard-return',
          'mif-security',
          'mif-looks',
          'mif-palette',
          'mif-layers',
          'mif-layers-clear',
          'mif-local-airport',
          'mif-florist',
          'mif-gas-station',
          'mif-hotel',
          'mif-local-service',
          'mif-map2',
          'mif-traff',
          'mif-apps',
          'mif-chevron-left',
          'mif-chevron-right',
          'mif-expand-less',
          'mif-expand-more',
          'mif-menu',
          'mif-more-horiz',
          'mif-more-vert',
          'mif-unfold-less',
          'mif-unfold-more',
          'mif-not',
          'mif-drive-eta',
          'mif-event-available',
          'mif-event-busy',
          'mif-folder-special',
          'mif-sd-card',
          'mif-sync-disabled',
          'mif-sync-problem',
          'mif-vpn-lock',
          'mif-vpn-publ',
          'mif-school',
          'mif-file-binary',
          'mif-mail-read',
          'mif-quote',
          'mif-home',
          'mif-pencil',
          'mif-eyedropper',
          'mif-paint',
          'mif-image',
          'mif-images',
          'mif-camera',
          'mif-headphones',
          'mif-music',
          'mif-film',
          'mif-video-camera',
          'mif-dice',
          'mif-books',
          'mif-file-empty',
          'mif-files-empty',
          'mif-file-text',
          'mif-file-picture',
          'mif-file-music',
          'mif-file-play',
          'mif-file-video',
          'mif-file-zip',
          'mif-stack',
          'mif-folder',
          'mif-folder-open',
          'mif-folder-plus',
          'mif-folder-minus',
          'mif-folder-download',
          'mif-folder-upload',
          'mif-tag',
          'mif-tags',
          'mif-barcode',
          'mif-qrcode',
          'mif-cart',
          'mif-credit-card',
          'mif-calculator',
          'mif-help',
          'mif-envelop',
          'mif-location',
          'mif-compass',
          'mif-compass2',
          'mif-map',
          'mif-history',
          'mif-bell',
          'mif-calendar',
          'mif-printer',
          'mif-keyboard',
          'mif-download',
          'mif-upload',
          'mif-floppy-disk',
          'mif-drive',
          'mif-database',
          'mif-undo',
          'mif-redo',
          'mif-bubble',
          'mif-bubbles',
          'mif-user',
          'mif-users',
          'mif-user-plus',
          'mif-user-minus',
          'mif-user-check',
          'mif-hour-glass',
          'mif-search',
          'mif-zoom-in',
          'mif-zoom-out',
          'mif-enlarge',
          'mif-shrink',
          'mif-enlarge2',
          'mif-shrink2',
          'mif-key',
          'mif-wrench',
          'mif-equalizer',
          'mif-equalizer-v',
          'mif-cog',
          'mif-cogs',
          'mif-magic-wand',
          'mif-bug',
          'mif-trophy',
          'mif-gift',
          'mif-spoon-fork',
          'mif-rocket',
          'mif-meter',
          'mif-hammer',
          'mif-fire',
          'mif-lab',
          'mif-bin',
          'mif-truck',
          'mif-target',
          'mif-power',
          'mif-switch',
          'mif-power-cord',
          'mif-clipboard',
          'mif-list-numbered',
          'mif-list',
          'mif-list2',
          'mif-tree',
          'mif-cloud',
          'mif-cloud-download',
          'mif-cloud-upload',
          'mif-download2',
          'mif-upload2',
          'mif-earth',
          'mif-link',
          'mif-flag',
          'mif-attachment',
          'mif-eye',
          'mif-bookmark',
          'mif-bookmarks',
          'mif-contrast',
          'mif-brightness',
          'mif-star-empty',
          'mif-star-half',
          'mif-star-full',
          'mif-heart',
          'mif-heart-broken',
          'mif-warning',
          'mif-notification',
          'mif-question',
          'mif-plus',
          'mif-minus',
          'mif-info',
          'mif-cancel',
          'mif-blocked',
          'mif-cross',
          'mif-checkmark',
          'mif-spell-check',
          'mif-enter',
          'mif-exit',
          'mif-arrow-up-left',
          'mif-arrow-up',
          'mif-arrow-up-right',
          'mif-arrow-right',
          'mif-arrow-down-right',
          'mif-arrow-down',
          'mif-arrow-down-left',
          'mif-arrow-left',
          'mif-tab',
          'mif-move-up',
          'mif-move-down',
          'mif-sort-asc',
          'mif-sort-desc',
          'mif-command',
          'mif-shift',
          'mif-crop',
          'mif-filter',
          'mif-bold',
          'mif-underline',
          'mif-italic',
          'mif-strikethrough',
          'mif-page-break',
          'mif-superscript',
          'mif-subscript',
          'mif-table',
          'mif-insert-template',
          'mif-pilcrow',
          'mif-ltr',
          'mif-rtl',
          'mif-section',
          'mif-paragraph-left',
          'mif-paragraph-center',
          'mif-paragraph-right',
          'mif-paragraph-justify',
          'mif-indent-increase',
          'mif-indent-decrease',
          'mif-embed',
          'mif-embed2',
          'mif-share',
          'mif-feed3',
          'mif-chevron-thin-down',
          'mif-chevron-thin-left',
          'mif-chevron-thin-right',
          'mif-chevron-thin-up',
          'mif-flow-branch',
          'mif-flow-cascade',
          'mif-flow-line',
          'mif-flow-parallel',
          'mif-flow-tree',
          'mif-air',
          'mif-medal',
          'mif-paper-plane',
          'mif-shareable',
          'mif-shop',
          'mif-shopping-basket2',
          'mif-thumbs-down',
          'mif-thumbs-up',
          'mif-traffic-cone',
          'mif-water',
          'mif-cabinet',
          'mif-suitcase',
          'mif-gamepad',
          'mif-lock',
          'mif-unlock',
          'mif-tools',
          'mif-pin',
          'mif-discout',
          'mif-profile',
          'mif-dollar',
          'mif-dollars',
          'mif-coins',
          'mif-male',
          'mif-female',
          'mif-piano',
          'mif-anchor'];

    $scope.ButtonClicked = function($event,classSel) {    
        if(classSel=='front'){
          this.front=true;
          this.right = false;
          this.left = false;
          this.back = false;
          this.bottom=false;
        }
        if(classSel=='left'){
          this.front=false;
          this.right = false;
          this.left = true;
          this.back = false;
          this.bottom=false;
        }
        if(classSel=='back'){
          this.front=false;
          this.right = false;
          this.left = false;
          this.back = true;
          this.bottom=false;
        }
        if(classSel=='right'){
          this.front=false;
          this.right = true;
          this.left = false;
          this.back = false;
          this.bottom=false;
        }
         if(classSel=='bottom'){
          this.front=false;
          this.right = false;
          this.left = false;
          this.back = false;
          this.bottom=true;
        }
    };

      $scope.animationsEnabled = true;
      $scope.open = function () {

        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: '/system/views/modal.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
          //console.log($scope.selected);
        }, function () {
          console.log('Modal dismissed at: ' + new Date());
        });
      };

      /* var startimg="/system/assets/img/back/1.jpg";
        $scope.image=startimg;
        $scope.textOverlay="Lalala";
 
        var canvas = document.getElementById('tempCanvas');
        var context = canvas.getContext('2d');

        var source =  new Image();
        source.src = startimg;
        source.onload = function(){
          context.drawImage(source,0,0);  
          context.font = "100px impact";
          var textWidth = context.measureText('Keep The Calm').width;

          /*if (textWidth > canvas.offsetWidth) {
              context.font = "40px impact";
          }*/
         /* context.textAlign = 'center';
          context.fillStyle = 'white';

          context.fillText($scope.textOverlay,canvas.width/2,canvas.height*0.8);
          
          var canvasDiv = document.getElementById('canvasDiv');       
          canvasDiv.appendChild(canvas);
          if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
          }
          context = canvas.getContext("2d"); 
        }      */

     


   }
]);


angular.module('mean.system').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  if(!$scope.selected){
      $scope.selected = {
      item: $scope.items[0]
    };  
  }  

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

 