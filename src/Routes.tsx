import { Navigate, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy, ReactNode } from 'react';
import { Processing } from './components/emptyState';
import Authentication from './components/Authentication';

const SubscriptionInventoryPage = lazy(() => import('./pages/SubscriptionInventoryPage'));
const OopsPage = lazy(() => import('./pages/OopsPage'));
const NoPermissionsPage = lazy(() => import('./pages/NoPermissionsPage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage'));

export const InventoryRoutes: ReactNode = () => (
  <div className="inventory">
    <Suspense fallback={<Processing />}>
      <Authentication>
        <Routes>
          <Route path="/" element={SubscriptionInventoryPage} />
          <Route path="/oops" element={OopsPage} />
          <Route path="/no-permissions" element={NoPermissionsPage} />
          <Route path="/:SKU" element={DetailsPage} />
          {/* Finally, catch all unmatched routes */}
          <Route>
            <Navigate to="/oops" />
          </Route>
        </Routes>
      </Authentication>
    </Suspense>
  </div>
);
