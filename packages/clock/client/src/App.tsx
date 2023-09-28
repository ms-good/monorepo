import { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { StopWatch } from './components/StopWatch/index.ts';
import { Timer } from './components/Timer/index.ts';

// TODO: 디자인 시스템을 만들고 디자인 시스템 컴포넌트를 이용하게 수정

type TabState = 'timer' | 'stopwatch';
const tabs: TabState[] = ['timer', 'stopwatch'];

function App() {
  const [currentTab, setCurrentTab] = useState<TabState>('stopwatch');

  return (
    <div css={tw`max-w-3xl mx-auto`}>
      <h1 css={tw`flex justify-center p-10 text-5xl font-bold`}>CLOCK</h1>
      <div css={tw`flex flex-col`}>
        <ul css={tw`flex w-full`}>
          {tabs.map((tab) => {
            const isSelected = currentTab === tab;
            return (
              <li
                key={tab}
                css={[
                  tw`w-1/2 text-center text-xl cursor-pointer text-gray-500 border-b-0 border-gray-500`,
                  isSelected && tw`text-blue-500 border-b-2 border-blue-500`,
                ]}
                onClick={() => setCurrentTab(tab)}>
                {tab}
              </li>
            );
          })}
        </ul>
        <InnerLayout>{currentTab === 'timer' ? <Timer /> : <StopWatch />}</InnerLayout>
      </div>
    </div>
  );
}

export default App;

const InnerLayout = styled.div`
  ${tw`w-full h-96`}
`;
