import React from 'react';
import StatBlock from './StatBlock';
import renderer from 'react-test-renderer';


const mockFn = () => {
    return {
        stats: {
            str:9,
            dex:9,
            con:19,
            int:20,
            wiz:15,
            cha:18
        }
    }
};
const mockRoll = {
    stats: {
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
      <StatBlock onRoll={mockFn} activeRoll={mockRoll}></StatBlock>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
  
