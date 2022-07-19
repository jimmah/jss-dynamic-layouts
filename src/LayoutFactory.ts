import { RouteData } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';
import * as layouts from './layouts';
import { LayoutProps } from './layouts/types';

class LayoutFactory {
  configuredLayouts: Map<string, React.FunctionComponent<LayoutProps>>;

  constructor() {
    this.configuredLayouts = new Map();
    this.configuredLayouts.set('{A72576AC-6A0A-4513-A79F-50AB676E8325}', layouts.TestLayout);
  }

  resolveLayout(routeData: RouteData): React.FunctionComponent<LayoutProps> {
    const layoutId = `{${routeData?.layoutId?.toUpperCase()}}`;
    const layout = this.configuredLayouts.get(layoutId);

    return layout || layouts.DefaultLayout;
  }
}

const layoutFactory = new LayoutFactory();
Object.freeze(layoutFactory);
export default layoutFactory;
