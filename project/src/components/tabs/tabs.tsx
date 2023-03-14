import { useState } from 'react';
import TabsItem from '../tabs-item/tabs-item';

function Tabs(): JSX.Element {
  const cities = [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ];

  const [isActive,] = useState([false, false, false, true, false, false]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Array.isArray(cities) && cities.length > 0 && cities.map((city, index) => (
              <TabsItem
                key={String(city) + String(index)}
                city={city}
                isActive={isActive[index]}
              />
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default Tabs;