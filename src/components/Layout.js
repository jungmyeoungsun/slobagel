
import React from 'react';

export const Container = ({ children, className, style }) => (
  <div className={className} style={{ margin: '0 auto', padding: '0 20px', width: '100%', boxSizing: 'border-box', ...style }}>
    {children}
  </div>
);

export const Row = ({ children, className, style }) => (
  <div className={className} style={{ display: 'flex', flexWrap: 'wrap', ...style }}>
    {children}
  </div>
);

export const Col = ({ children, style, className }) => (
  <div className={className} style={{ ...style }}>
    {children}
  </div>
);