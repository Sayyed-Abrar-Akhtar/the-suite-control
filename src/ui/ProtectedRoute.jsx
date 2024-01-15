import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100dvh;
  background-color: var() (--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable react/prop-types */
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load authenticated User
  const { isLoading, isAuthenticated } = useUser();
  // const isAuthenticated = user?.role === 'authenticated';
  // console.log(isAuthenticated, isLoading);
  useEffect(
    function () {
      // 3. If there is NO authenticated user redirect to login
      if (!isAuthenticated && !isLoading) {
        navigate('/login');
      }
    },
    [isAuthenticated, isLoading, navigate]
  );
  // 2. While loading show a Spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
