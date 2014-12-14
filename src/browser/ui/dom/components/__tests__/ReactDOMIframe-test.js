/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

"use strict";

/*jshint evil:true */

var mocks = require('mocks');

describe('ReactDOMIframe', function() {
  var React;
  var ReactTestUtils;

  var onLoad = mocks.getMockFunction();

  beforeEach(function() {
    React = require('React');
    ReactTestUtils = require('ReactTestUtils');
  });

  it('should support onLoad event', function() {
    onLoad.mockClear();
    var iframe = ReactTestUtils.renderIntoDocument((
      <iframe src='about:blank' onLoad={onLoad} />
    ));
    ReactTestUtils.Simulate.load(iframe.getDOMNode());
    expect(onLoad.mock.calls.length).toBe(1);
  });

});
