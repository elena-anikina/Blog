import React from 'react';
import './loader.module.scss';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader: React.FC = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48, color: '#1890ff' }} spin />;
  return <Spin indicator={antIcon} />;
};

export default Loader;
