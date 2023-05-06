import React from 'react';
// eslint-disable-next-line import/extensions
import { GetOneStudentResponse } from 'head-hunter-backend/src/student/dto/student.dto';
import { SingleStudentRatings } from './SingleStudentRatings';
import { SingleStudentPreferences } from './SingleStudentPreferences';

import './studentRatingsPreferences.css';

interface GetOneStudentProps {
  student: GetOneStudentResponse;
}

export const StudentRatingsPreferences = (props: GetOneStudentProps) => {
  return (
    <div className="studentRatingsPreferences">
      <SingleStudentRatings
        description="Ocena przejścia Kursu"
        valueRatingPreferences={props.student.courseCompletion}
      />
      <SingleStudentRatings
        description="Ocena aktywności i zaangażowania na kursie"
        valueRatingPreferences={props.student.courseEngagement}
      />
      <SingleStudentRatings
        description="Ocena kodu w projekcie własnym"
        valueRatingPreferences={props.student.projectDegree}
      />
      <SingleStudentRatings
        description="Ocena pracy w zespole Scrum"
        valueRatingPreferences={props.student.teamProjectDegree}
      />
      <SingleStudentPreferences
        description="Preferowane miejsce pracy"
        valueRatingPreferences={props.student.expectedTypeWork}
      />
      <SingleStudentPreferences
        description="Docelowe miasto, gdzie chce pracować kandydant"
        valueRatingPreferences={props.student.targetWorkCity}
      />
      <SingleStudentPreferences
        description="Oczekiwania, typ kontraktu"
        valueRatingPreferences={props.student.expectedContractType}
      />
      <SingleStudentPreferences
        description="Oczekiwane wynagrodzenie miesięczne netto"
        valueRatingPreferences={props.student.expectedSalary}
      />
      <SingleStudentPreferences
        description="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
        valueRatingPreferences={props.student.canTakeApprenticeship}
      />
      <SingleStudentPreferences
        description="Komercyjne doświadczenie w programowaniu"
        valueRatingPreferences={props.student.monthsOfCommercialExp}
      />
    </div>
  );
};
