import React, { useState } from 'react';
import Form from './Form';

const ProjectBanner = () => {
  const [showForm, setShowForm] = useState(false);


  return (
    <>
      <div className="project-banner">
        <h2>We'd love to hear about your project</h2>
        <div className="btn-start" onClick={() => setShowForm(true)}>
          START A PROJECT
        </div>
      </div>

      {showForm && <div className="form">
        <Form />
      </div>}
    </>
  );
};

export default ProjectBanner;

