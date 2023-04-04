class DropdownRegistry {
  constructor() {
    this.links = [];
    this.currentFocusIndex = -1;
  }

  addChild(child) {
    this.links.push(child);
  }

  removeChild(child) {
    this.links.splice(this.links.indexOf(child), 1);
  }

  focusChildAt(index) {
    if (this.links[index]) {
      this.links[index].focus();
    }
  }

  focusNext() {
    this.focusChildAt(this.currentFocusIndex + 1);
  }

  focusPrev() {
    this.focusChildAt(this.currentFocusIndex - 1);
  }

  setFocusedChild(child) {
    this.currentFocusIndex = this.links.indexOf(child);
  }

  removeFocusedChild() {
    this.currentFocusIndex = -1;
  }
}

export default DropdownRegistry;
