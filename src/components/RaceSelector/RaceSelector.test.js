import React from 'react';
import RaceSelector from './RaceSelector';
import renderer from 'react-test-renderer';

const mock = () => {}

const mockRaceData = {}

test('RaceSelector component test', () => {
    const component = renderer.create(
      <RaceSelector _initRaceState={mock} _raceData={mockRaceData}></RaceSelector>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
