import React from 'react';
import StatBlock from './StatBlock';
import renderer from 'react-test-renderer';

const mockFn = () => {}

const mockCharacterStats = {
    attributes: {
        str:10,
        dex:8,
        con:16,
        int:12,
        wiz:18,
        cha:8
    } 
}
test('Stat component test', () => {
    const component = renderer.create(
      <StatBlock onRoll={mockFn} characterStats={mockCharacterStats} onNameChange={mockFn}></StatBlock>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
  
