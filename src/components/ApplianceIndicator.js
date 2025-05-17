import React from 'react';

const applianceIcons = {
  Stove: '🔥',
  Oven: '🍞',
  Microwave: '🌀',
  Mixer: '🌀',
  Blender: '🌀',
  Pan: '🍳',
  Pot: '🍲',
  Grill: '🔥',
  'Wok or Pan': '🍳',
};

const ApplianceIndicator = ({ appliances }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75em',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <span style={{ fontWeight: '600', marginRight: '0.5em' }}>Needs:</span>
      {appliances.map((appliance) => (
        <span
          key={appliance}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3em',
            padding: '0.25em 0.6em',
            backgroundColor: '#f0f0f0',
            borderRadius: '0.5em',
            fontSize: '1.1rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            userSelect: 'none',
          }}
        >
          <span role="img" aria-label={appliance}>
            {applianceIcons[appliance] || '⚙️'}
          </span>{' '}
          {appliance}
        </span>
      ))}
    </div>
  );
};

export default ApplianceIndicator;
