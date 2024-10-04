import React from 'react';
import { LeftFloated, RightFloated, ClearFloat, Links } from '@site/docs/bio/bio/_components';
import Logo from '@site/src/components/brand/Logo/Logo';

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  LeftFloated,
  RightFloated,
  ClearFloat,
  Links,
  Logo
};

export default ReactLiveScope;
