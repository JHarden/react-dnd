import React from 'react';
import Stat from './Stat';
import renderer from 'react-test-renderer';

test('Stat component test', () => {
    const component = renderer.create(
      <Stat name="test" value={12}></Stat>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
