import React from 'react';
import { Link } from 'react-router-dom';

interface RouteLinkProps {
  title: string;
  route: string;
}

const RouteLink: React.FC<RouteLinkProps> = ({ title, route }) => {
  return (
    <>
      <div style={{ padding: '5px' }}>
        <Link to={route}>{title}</Link>
      </div>
    </>
  );
};

export default RouteLink;
