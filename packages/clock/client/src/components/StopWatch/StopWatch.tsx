import { useStopWatch } from '@client/use-stop-watch';
import React from 'react';
import tw, { css } from 'twin.macro';

import { msToTimeString } from '@/utils/time.ts';

import { Button } from '../Button/index.ts';

export function StopWatch() {
  const { state, recordData, currentTime, handleSectionRecord, handleStart, handleContinue, handlePause, handleInit } =
    useStopWatch();

  const buttons = (() => {
    switch (state) {
      case 'init':
        return (
          <>
            <Button disabled>Record</Button>
            <Button onClick={handleStart}>Start</Button>
          </>
        );
      case 'progress':
        return (
          <>
            <Button onClick={handleSectionRecord}>Record</Button>
            <Button onClick={handlePause}>Pause</Button>
          </>
        );
      case 'pause':
        return (
          <>
            <Button onClick={handleInit}>Init</Button>
            <Button onClick={handleContinue}>Continue</Button>
          </>
        );
    }
  })();

  return (
    <div css={tw`h-full bg-neutral-200`}>
      <div tw="w-80 mx-auto flex flex-col gap-2">
        <div>{msToTimeString(currentTime)}</div>
        <div
          css={css`
            ${tw`flex gap-2`}
            > * {
              ${tw`w-20`}
            }
          `}>
          {buttons}
        </div>
        <StopWatchRecordDataView recordData={recordData.reverse()} />
      </div>
    </div>
  );
}

function StopWatchRecordDataView({ recordData }: { recordData: ReturnType<typeof useStopWatch>['recordData'] }) {
  const minTime = Math.min(
    ...recordData.map(({ sectionRecord }) => {
      return sectionRecord;
    }),
  );
  const maxTime = Math.max(
    ...recordData.map(({ sectionRecord }) => {
      return sectionRecord;
    }),
  );

  return (
    <div>
      {recordData.length ? (
        <div
          css={css`
            ${tw`grid gap-2`}
          `}>
          <div
            css={css`
              ${RecordDataStyle}
              ${tw`border-b-2 border-gray-500`}
            `}>
            <div>Index</div>
            <div>Record</div>
            <div>Full Time</div>
          </div>
          <div tw="overflow-auto h-56">
            {recordData.map(({ fullTime, index, sectionRecord }) => {
              const isMinSectionRecord = minTime === sectionRecord;
              const isMaxSectionRecord = maxTime === sectionRecord;
              return (
                <div css={RecordDataStyle} key={index}>
                  <div
                    css={css`
                      ${isMinSectionRecord && tw`text-red-500`}
                      ${isMaxSectionRecord && tw`text-blue-500`}
                    `}>
                    {index}
                  </div>
                  <div>{msToTimeString(sectionRecord)}</div>
                  <div>{msToTimeString(fullTime)}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

const RecordDataStyle = tw`grid [grid-template-columns: 1fr 2fr 2fr] text-center`;
