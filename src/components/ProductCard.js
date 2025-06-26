import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Outer container to add spacing from left/right
const CardContainer = styled.div`
  padding: 0 10px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const CardWrapper = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  display: block;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }

  .card-content {
    padding: 1rem;

    h3 {
      margin: 0 0 0.5rem 0;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.text};
    }

    p {
      margin: 0.4rem 0;
      color: ${({ theme }) => theme.text};
    }

    .price {
      font-weight: bold;
      color: ${({ theme }) => theme.secondary};
      font-size: 1.1rem;
      margin-top: 10px;
    }

    .quantity {
      font-size: 0.95rem;
    }

    .new-tag {
      color: red;
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
`;

const ProductCard = ({ product }) => {
  const imageSrc = product.imageUrl.startsWith('http')
    ? product.imageUrl
    : process.env.PUBLIC_URL + product.imageUrl;

  return (
    <CardContainer>
      <CardWrapper to={`/products/${product._id}`}>
        <img src={imageSrc} alt={product.name} />
        <div className="card-content">
          <h3>{product.name}</h3>
          <p>{product.description.substring(0, 100)}...</p>
          <p className="quantity">
            <strong>
              {Array.isArray(product.quantity)
                ? product.quantity.map(q => `${q}kg`).join(', ')
                : `${product.quantity}kg`}
            </strong>
          </p>
          {product.isNewLaunch && <span className="new-tag">New!</span>}
        </div>
      </CardWrapper>
    </CardContainer>
  );
};

export default ProductCard;
