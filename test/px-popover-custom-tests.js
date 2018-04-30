/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
