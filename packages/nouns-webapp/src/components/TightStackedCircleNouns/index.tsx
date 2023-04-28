import React from 'react';
import TightStackedCircleNoun, { TightStackedCircleNounCell } from '../TightStackedCircleNoun';

interface StackedCircleNounsProps {
  nounIds: Array<number>;
  isNounsDAOProp?: boolean;
  isCell?: boolean;
}

const MAX_NOUNS_PER_STACK = 3;

const TightStackedCircleNouns: React.FC<StackedCircleNounsProps> = props => {
  const { nounIds, isNounsDAOProp, isCell } = props;

  const shift = 3;

  const square = 55;

  return (
    <svg width={square} height={square}>
      {nounIds
        .slice(0, MAX_NOUNS_PER_STACK)
        .map((nounId: number, i: number) => {
          return  <TightStackedCircleNoun
          nounId={nounId}
          index={i}
          square={square}
          shift={shift}
          isNounsDAOProp={isNounsDAOProp}
        />;
        })
        .reverse()}
    </svg>
  );
};

export default TightStackedCircleNouns;



export const TightStackedCircleNounsCells: React.FC<StackedCircleNounsProps> = props => {
  const { nounIds, isNounsDAOProp, isCell } = props;

  const shift = 3;

  const square = 55;

  return (
    <svg width={square} height={square}>
      {nounIds
        .slice(0, MAX_NOUNS_PER_STACK)
        .map((nounId: number, i: number) => {
          return <TightStackedCircleNounCell
          nounId={nounId}
          index={i}
          square={square}
          shift={shift}
          isNounsDAOProp={isNounsDAOProp}
        />;
        })
        .reverse()}
    </svg>
  );
};


