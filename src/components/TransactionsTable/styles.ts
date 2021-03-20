import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    @media screen and (max-width: 768px) {
        font-size: 0.75rem;
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;

      @media screen and (max-width: 768px) {
        padding: 0 0.5rem 0 0.5rem;
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      @media screen and (max-width: 768px) {
        padding: 0 0.5rem 0 0.5rem;
      }
      

      &:first-child {
        color: var(--text-title);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }
`;