import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Context as ResponsiveContext } from "react-responsive";

export const renderWithResponsiveContext = (component: React.ReactElement, contextValue: { width: number }) => {
  return render(
    <ResponsiveContext.Provider value={contextValue}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </ResponsiveContext.Provider>
  );
};
