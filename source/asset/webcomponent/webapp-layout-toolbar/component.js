"use strict";{

  class Element extends Polymer.Element {
    static get is() {return 'webapp-layout-toolbar';}
    static get properties() {
      return {
        route: Object,
        app: Object,
        page: {
          type: Object,
          notify: true,
          reflectToAttribute: true,
          observer: '_pageChanged' } };








    }

    static get observers() {return [];
    }

    constructor() {
      super();
    }

    connectedCallback() {
      super.connectedCallback();
    }

    ready() {
      super.ready();
      if ('ontouchstart' in window) this.$.drawer.swipeOpen = true;
    }

    _pageChanged(page, oldView) {

      if (page.selectorName != null) {
        console.log(page.selectorName);

        let resolvedPageUrl = this.resolveUrl(`../${page.file}`);
        let callbackError = this._showPage404;
        Polymer.importHref(resolvedPageUrl, null, callbackError, true);
      }

      if (!this.$.drawer.persistent) {
        this.$.drawer.close();
      }
    }










    _showPage404() {
      this.page.selectorName = 'viewState404';
    }}



  customElements.define(Element.is, Element);

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NvdXJjZS9hc3NldC93ZWJjb21wb25lbnQvd2ViYXBwLWxheW91dC10b29sYmFyL2NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiUG9seW1lciIsImlzIiwicHJvcGVydGllcyIsInJvdXRlIiwiT2JqZWN0IiwiYXBwIiwicGFnZSIsInR5cGUiLCJub3RpZnkiLCJyZWZsZWN0VG9BdHRyaWJ1dGUiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImNvbnN0cnVjdG9yIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJyZWFkeSIsIndpbmRvdyIsIiQiLCJkcmF3ZXIiLCJzd2lwZU9wZW4iLCJfcGFnZUNoYW5nZWQiLCJvbGRWaWV3Iiwic2VsZWN0b3JOYW1lIiwiY29uc29sZSIsImxvZyIsInJlc29sdmVkUGFnZVVybCIsInJlc29sdmVVcmwiLCJmaWxlIiwiY2FsbGJhY2tFcnJvciIsIl9zaG93UGFnZTQwNCIsImltcG9ydEhyZWYiLCJwZXJzaXN0ZW50IiwiY2xvc2UiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJtYXBwaW5ncyI6ImFBQUE7O0FBRUksUUFBTUEsT0FBTixTQUFzQkMsT0FBTyxDQUFDRCxPQUE5QixDQUFzQztBQUN0QyxlQUFXRSxFQUFYLEdBQWdCLENBQUUsT0FBTyx1QkFBUCxDQUFpQztBQUNuRCxlQUFXQyxVQUFYLEdBQXdCO0FBQ3BCLGFBQU87QUFDUEMsUUFBQUEsS0FBSyxFQUFFQyxNQURBO0FBRVBDLFFBQUFBLEdBQUcsRUFBRUQsTUFGRTtBQUdQRSxRQUFBQSxJQUFJLEVBQUU7QUFDRkMsVUFBQUEsSUFBSSxFQUFFSCxNQURKO0FBRUZJLFVBQUFBLE1BQU0sRUFBRSxJQUZOO0FBR0ZDLFVBQUFBLGtCQUFrQixFQUFFLElBSGxCO0FBSUZDLFVBQUFBLFFBQVEsRUFBRSxjQUpSLEVBSEMsRUFBUDs7Ozs7Ozs7O0FBZ0JIOztBQUVELGVBQVdDLFNBQVgsR0FBdUIsQ0FBRSxPQUFPLEVBQVA7QUFDdEI7O0FBRUhDLElBQUFBLFdBQVcsR0FBRztBQUNWO0FBQ0g7O0FBRURDLElBQUFBLGlCQUFpQixHQUFHO0FBQ2hCLFlBQU1BLGlCQUFOO0FBQ0g7O0FBRURDLElBQUFBLEtBQUssR0FBRztBQUNKLFlBQU1BLEtBQU47QUFDQSxVQUFHLGtCQUFrQkMsTUFBckIsRUFBNkIsS0FBS0MsQ0FBTCxDQUFPQyxNQUFQLENBQWNDLFNBQWQsR0FBMEIsSUFBMUI7QUFDaEM7O0FBRURDLElBQUFBLFlBQVksQ0FBQ2IsSUFBRCxFQUFPYyxPQUFQLEVBQWdCOztBQUV4QixVQUFJZCxJQUFJLENBQUNlLFlBQUwsSUFBcUIsSUFBekIsRUFBK0I7QUFDM0JDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZakIsSUFBSSxDQUFDZSxZQUFqQjs7QUFFQSxZQUFJRyxlQUFlLEdBQUcsS0FBS0MsVUFBTCxDQUFpQixNQUFLbkIsSUFBSSxDQUFDb0IsSUFBSyxFQUFoQyxDQUF0QjtBQUNBLFlBQUlDLGFBQWEsR0FBRyxLQUFLQyxZQUF6QjtBQUNBNUIsUUFBQUEsT0FBTyxDQUFDNkIsVUFBUixDQUFtQkwsZUFBbkIsRUFBb0MsSUFBcEMsRUFBMENHLGFBQTFDLEVBQXlELElBQXpEO0FBQ0g7O0FBRUQsVUFBSSxDQUFDLEtBQUtYLENBQUwsQ0FBT0MsTUFBUCxDQUFjYSxVQUFuQixFQUErQjtBQUMzQixhQUFLZCxDQUFMLENBQU9DLE1BQVAsQ0FBY2MsS0FBZDtBQUNIO0FBQ0o7Ozs7Ozs7Ozs7O0FBV0RILElBQUFBLFlBQVksR0FBRztBQUNYLFdBQUt0QixJQUFMLENBQVVlLFlBQVYsR0FBeUIsY0FBekI7QUFDSCxLQS9EcUM7Ozs7QUFtRXRDVyxFQUFBQSxjQUFjLENBQUNDLE1BQWYsQ0FBc0JsQyxPQUFPLENBQUNFLEVBQTlCLEVBQWtDRixPQUFsQzs7QUFFSCIsInNvdXJjZXNDb250ZW50IjpbIntcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdXZWJDb21wb25lbnRzUmVhZHknLCBmdW5jdGlvbigpIHtcbiAgICBjbGFzcyBFbGVtZW50IGV4dGVuZHMgUG9seW1lci5FbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IGlzKCkgeyByZXR1cm4gJ3dlYmFwcC1sYXlvdXQtdG9vbGJhcic7IH1cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7IC8qIHByb3BlcnRpZXMgbWV0YWRhdGEgKi8gXG4gICAgICAgIHJvdXRlOiBPYmplY3QsXG4gICAgICAgIGFwcDogT2JqZWN0LFxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ19wYWdlQ2hhbmdlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNob3dzcGlubmVyOiB7XG4gICAgICAgIC8vICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAvLyAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICAvLyAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICAvLyAgICAgb2JzZXJ2ZXI6ICd0b2dnbGVTcGlubmVyJyxcbiAgICAgICAgLy8gfSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkgeyByZXR1cm4gWyAvKiBvYnNlcnZlciBkZXNjcmlwdG9ycyAqL1xuICAgIF0gfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgICAgIGlmKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgdGhpcy4kLmRyYXdlci5zd2lwZU9wZW4gPSB0cnVlIC8vIGFsbG93IG9wZW4gc3dpcGUgb24gZHJhd2VyIGZvciB0b3VjaHNjcmVlbiBkZXZpY2VzLlxuICAgIH1cblxuICAgIF9wYWdlQ2hhbmdlZChwYWdlLCBvbGRWaWV3KSB7XG4gICAgICAgIC8vIExvYWQgcGFnZSBpbXBvcnQgb24gZGVtYW5kLiBTaG93IDQwNCBwYWdlIGlmIGZhaWxzXG4gICAgICAgIGlmIChwYWdlLnNlbGVjdG9yTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlLnNlbGVjdG9yTmFtZSlcbiAgICAgICAgICAgIC8vIGxldCBjYWxsYmFja09ubG9hZCA9IHRoaXMuaGlkZVNwaW5uZXI7XG4gICAgICAgICAgICBsZXQgcmVzb2x2ZWRQYWdlVXJsID0gdGhpcy5yZXNvbHZlVXJsKGAuLi8ke3BhZ2UuZmlsZX1gKTtcbiAgICAgICAgICAgIGxldCBjYWxsYmFja0Vycm9yID0gdGhpcy5fc2hvd1BhZ2U0MDQ7XG4gICAgICAgICAgICBQb2x5bWVyLmltcG9ydEhyZWYocmVzb2x2ZWRQYWdlVXJsLCBudWxsLCBjYWxsYmFja0Vycm9yLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy4kLmRyYXdlci5wZXJzaXN0ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiQuZHJhd2VyLmNsb3NlKCk7ICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhpZGVTcGlubmVyKCkge1xuICAgIC8vICAgdGhpcy5zaG93c3Bpbm5lciA9IGZhbHNlO1xuICAgIC8vIH1cblxuICAgIC8vIHRvZ2dsZVNwaW5uZXIobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLiQuc3Bpbm5lcilcbiAgICAvLyAgIChuZXdWYWx1ZSA9PSB0cnVlKSA/IHRoaXMuJC5zcGlubmVyLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgXCJcIikgOiB0aGlzLiQuc3Bpbm5lci5yZW1vdmVQcm9wZXJ0eShcImFjdGl2ZVwiKTtcbiAgICAvLyB9XG5cbiAgICBfc2hvd1BhZ2U0MDQoKSB7XG4gICAgICAgIHRoaXMucGFnZS5zZWxlY3Rvck5hbWUgPSAndmlld1N0YXRlNDA0JztcbiAgICB9XG5cbiAgICB9XG4gICAgLy8gUmVnaXN0ZXIgY3VzdG9tIGVsZW1lbnQgZGVmaW5pdGlvbiB1c2luZyBzdGFuZGFyZCBwbGF0Zm9ybSBBUElcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoRWxlbWVudC5pcywgRWxlbWVudCk7XG4vLyB9KVxufVxuIl19