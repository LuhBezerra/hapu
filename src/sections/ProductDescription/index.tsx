import React from 'react';

import { PRODUCT_DESCRIPTION } from './constants';
import './styles.css';

export function ProductDescriptionSection() {
  return (
    <section id="product-description">
      <div className="container">
        <div className="product-description-content">
          <img
            className="product-description-image-content"
            src={PRODUCT_DESCRIPTION.image}
            alt="nanny information selected on the map"
          />

          <div className="product-description-text-content">
            <h2>{PRODUCT_DESCRIPTION.title}</h2>
            <p>{PRODUCT_DESCRIPTION.description}</p>

            <a href="/">{PRODUCT_DESCRIPTION.link}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
