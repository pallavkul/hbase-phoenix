define('ember-bootstrap/components/bs-dropdown-menu', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;

  /**
   Component for the dropdown menu.
  
   See [Components.Dropdown](Components.Dropdown.html) for examples.
  
   @class DropdownMenu
   @namespace Components
   @extends Ember.Component
   @public
   */
  exports['default'] = _ember['default'].Component.extend({

    /**
     * Defaults to a `<ul>` tag. Change for other types of dropdown menus.
     *
     * @property tagName
     * @type string
     * @default ul
     * @public
     */
    tagName: 'ul',
    classNames: ['dropdown-menu'],
    classNameBindings: ['alignClass'],

    /**
     * @property ariaRole
     * @default menu
     * @type string
     * @protected
     */
    ariaRole: 'menu',

    /**
     * Alignment of the menu, either "left" or "right"
     *
     * @property align
     * @type string
     * @default left
     * @public
     */
    align: 'left',

    alignClass: computed('align', function () {
      if (this.get('align') !== 'left') {
        return 'dropdown-menu-' + this.get('align');
      }
    })
  });
});