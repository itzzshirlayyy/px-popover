describe('<px-popover>', function() {
  let popoverFixture, popover, dropdown, popoverContent;

  beforeEach(function(done) {
    popoverFixture = fixture('popover-fixture'),
    popover = Polymer.dom(popoverFixture.root).querySelector('#popover');
    dropdown = Polymer.dom(popover.root).querySelector('#dropdown');
    popoverContent = Polymer.dom(popover.root).querySelector('#popover');
    flush(function() {
      done();
    });
  });

  it('reflects the "for" property', function() {
    assert.equal(popover.for, "btn");
  });

  it('reflects the "orientation" property', function() {
    assert.equal(popover.orientation, "bottom");
  });

  it('reflects the "popover-title" property', function() {
    assert.equal(popover.popoverTitle, "Popover");
  });

  it('reflects the "popover-body" property', function() {
    assert.equal(popover.popoverBody, "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod.");
  });

  it('hides popover before click', function() {
    assert.equal(dropdown.style.display, 'none');
  });

  it('shows popover after click', function() {
    document.querySelector('#btn').click();
    flush(function(done) {
      assert.equal(dropdown.style.display, '');
      assert.isTrue(popoverContent.classList.contains('bottom'));
      assert.equal(dropdown.horizontalAlign, 'center');
      assert.equal(dropdown.verticalAlign, 'top');
      done();
    });
  });

  it('popover closes again after click outside', function() {
    document.querySelector('#popover').click();
    flush(function(done) {
      assert.equal(dropdown.style.display, 'none');
      done();
    });
  });

});
