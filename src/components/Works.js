import React, { useState } from 'react';

const Works = () => {
  const brands = [
    {
      title: 'Herbal Beauty Salon',
      description: 'BRANDING AND IDENTITY',
      categories: ['web', 'branding', 'design']
    },
    {
      title: 'Tailoring Interior',
      description: 'BRANDING AND BROCHURE',
      categories: ['web', 'branding', 'design']
    },
    {
      title: 'Pixflow Studio',
      description: 'BRANDING AND IDENTITY',
      categories: ['advertising', 'branding', 'photography']
    },
    {
      title: 'Design Blast Inc.',
      description: 'WEB AND PHOTOGRAPHY',
      categories: ['web', 'advertising', 'design']
    },
    {
      title: 'Harddot Stone',
      description: 'BRANDING AND IDENTITY',
      categories: ['web', 'branding', 'design']
    },
    {
      title: 'Educamp School',
      description: 'BRANDING AND IDENTITY',
      categories: ['web', 'advertising', 'branding', 'design', 'photography']
    },
    {
      title: 'Branding and Identity',
      description: 'BRANDING AND BROCHURE',
      categories: ['web', 'advertising', 'branding', 'design', 'photography']
    },
    {
      title: 'Violator Series',
      description: 'WEB AND PHOTOGRAPHY',
      categories: ['web', 'advertising', 'branding', 'design', 'photography']
    }
  ];



  const [filter, setFilter] = useState('all');

  return (
    <div className="works">

      <div className="filter-row">
        <div className={`filter ${filter === 'all' ? 'selected' : ''}`} onClick={() => setFilter('all')}>
          ALL
        </div>
        <div className={`filter ${filter === 'web' ? 'selected' : ''}`} onClick={() => setFilter('web')}>
          WEB
        </div>
        <div className={`filter ${filter === 'advertising' ? 'selected' : ''}`} onClick={() => setFilter('advertising')}>
          ADVERTISING
        </div>
        <div className={`filter ${filter === 'branding' ? 'selected' : ''}`} onClick={() => setFilter('branding')}>
          BRANDING
        </div>
        <div className={`filter ${filter === 'design' ? 'selected' : ''}`} onClick={() => setFilter('design')}>
          DESIGN
        </div>
        <div className={`filter ${filter === 'photography' ? 'selected' : ''}`} onClick={() => setFilter('photography')}>
          PHOTOGRAPHY
        </div>
      </div>

      <div className="brands">
        {
          brands.map((brand) => {
            return (
              (filter === 'all' || brand.categories.includes(filter)) &&
              <div className="brand" key={brand.title}>
                <h2>{brand.title}</h2>
                <h3>{brand.description}</h3>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Works;

