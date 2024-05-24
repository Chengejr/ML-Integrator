// src/components/EducationalResources.js
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const EducationalResources = () => {
  const { state, fetchResources } = useContext(GlobalContext);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  return (
    <div>
      <h1>Educational Resources</h1>
      <ul>
        {state.resources.map(resource => (
          <li key={resource.id}>{resource.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalResources;
