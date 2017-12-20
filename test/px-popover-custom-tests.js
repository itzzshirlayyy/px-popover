describe('<px-popover>', function() {
  let popoverFixture, popover, wrapper;

  beforeEach(function() {
    popoverFixture = fixture('popover-fixture'),
    popover = Polymer.dom(popoverFixture.root).querySelector('#popover');
    wrapper = Polymer.dom(popover.root).querySelector('#popover__wrapper');
  });

  it('reflects the "for" property', function() {
      assert.equal(popover.for, "btn");
  });

  it('reflects the "orientation" property', function() {
      assert.equal(popover.orientation, "top");
  });

  it('reflects the "popover-title" property', function() {
      assert.equal(popover.popoverTitle, "Popover");
  });

  it('reflects the "popover-body" property', function() {
      assert.equal(popover.popoverBody, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.");
  });

  it('hides popover before click', function() {
      expect(wrapper.classList.contains('fadeFromHidden')).to.equal(false);
  });

  it('shows popover after click', function() {
      document.querySelector('#btn').click();
      expect(wrapper.classList.contains('fadeFromHidden')).to.equal(true);
  });

  it('popover closes again after click outside', function() {
      document.querySelector('#popover').click();
      expect(wrapper.classList.contains('fadeFromHidden')).to.equal(false);
  });

});
