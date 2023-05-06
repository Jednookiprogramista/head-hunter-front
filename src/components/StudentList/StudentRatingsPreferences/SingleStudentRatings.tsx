import React from 'react';

import './studentRatingsPreferences.css';

interface StudentRaitingPreferencesProps {
  description: string;
  valueRatingPreferences: string;
}

export const SingleStudentRatings = (props: StudentRaitingPreferencesProps) => {
  return (
    <div className="singleStudentRatingsPreferences">
      <p className="descriptionRatingsPreferences">{props.description}</p>
      <div className="displayStudentRatingsPreferences">
        <span className="displayRatingsPreferences">
          {props.valueRatingPreferences}
        </span>
        <span className="range">/5</span>
      </div>
    </div>
  );
};
