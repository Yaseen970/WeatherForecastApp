import React from 'react';
import { useHistory } from 'react-router-dom';

interface NavigationManagerProps {
  children: (navigateToCity: (cityId: number) => void) => React.ReactNode;
}

const NavigationManager: React.FC<NavigationManagerProps> = ({ children }) => {
  const history = useHistory();

  const navigateToCity = (cityId: number) => {
    history.push(`/city/${cityId}`);
  };

  return <>{children(navigateToCity)}</>;
};

export default NavigationManager;
