import { useState } from 'react';
import tw from 'twin.macro';
// import { Button, Input } from '@client/design';

// TODO: 디자인 시스템을 만들고 디자인 시스템 컴포넌트를 이용하게 수정

type TabState = 'timer' | 'stopwatch';
const tabs: TabState[] = ['timer', 'stopwatch'];

function App() {
  const [currentTab, setCurrentTab] = useState<TabState>('timer');

  return (
    <div css={tw`max-w-3xl mx-auto`}>
      <h1 css={tw`flex justify-center p-10 text-5xl font-bold`}>TIMER</h1>
      <div css={tw`flex flex-col`}>
        <ul css={tw`flex w-full`}>
          {tabs.map((tab) => {
            const isSelected = currentTab === tab;
            return (
              <li
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
        {currentTab === 'timer' ? <Timer /> : <StopWatch />}
      </div>
    </div>
  );
}

export default App;

function Timer() {
  return <div css={tw`w-full h-96 bg-neutral-200`}>Timer</div>;
}

function StopWatch() {
  return <div css={tw`w-full h-96 bg-neutral-200`}>StopWatch</div>;
}
