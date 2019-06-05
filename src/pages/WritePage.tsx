import * as React from 'react';
import styled from 'styled-components';

import ActiveEditor from '../containers/write/ActiveEditor';
import PublishScreen from '../containers/write/PublishScreen';

const WritePageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

interface WritePageProps {}

const WritePage: React.SFC<WritePageProps> = () => {
  return (
    <WritePageBlock>
      <ActiveEditor />
      <PublishScreen />
    </WritePageBlock>
  );
};

export default WritePage;