import React from 'react';

import './studentRatingsPreferences.css';

interface StudentRaitingPreferencesProps {
  description: string;
  valueRatingPreferences: string;
}

export const SingleStudentPreferences = (
  props: StudentRaitingPreferencesProps,
) => {
  return (
    <div className="singleStudentRatingsPreferences">
      <p className="descriptionRatingsPreferences">{props.description}</p>
      <p className="displayStudentRatingsPreferences">
        <span className="displayRatingsPreferences">
          {props.valueRatingPreferences}
        </span>
      </p>
    </div>
  );
};
