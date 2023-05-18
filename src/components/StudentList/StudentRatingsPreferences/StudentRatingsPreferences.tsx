// @ts-ignore
import { StudentShortDetails } from 'types';
import { SingleStudentRatings } from './SingleStudentRatings';
import { SingleStudentPreferences } from './SingleStudentPreferences';

import './studentRatingsPreferences.css';

interface StudentRatingsPreferencesProps {
  student: StudentShortDetails;
}

export const StudentRatingsPreferences = (
  props: StudentRatingsPreferencesProps,
) => {
  return (
    <div className="studentRatingsPreferences">
      <SingleStudentRatings
        description="Ocena przejścia kursu"
        valueRatingPreferences={props.student.courseCompletion.toString()}
      />
      <SingleStudentRatings
        description="Ocena aktywności i zaangażowania na kursie"
        valueRatingPreferences={props.student.courseEngagement.toString()}
      />
      <SingleStudentRatings
        description="Ocena kodu w projekcie własnym"
        valueRatingPreferences={props.student.projectDegree.toString()}
      />
      <SingleStudentRatings
        description="Ocena pracy w zespole w Scrum"
        valueRatingPreferences={props.student.teamProjectDegree.toString()}
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
        description="Oczekiwany typ kontraktu"
        valueRatingPreferences={props.student.expectedContractType}
      />
      <SingleStudentPreferences
        description="Oczekiwane wynagrodzenie miesięczne netto"
        valueRatingPreferences={props.student.expectedSalary}
      />
      <SingleStudentPreferences
        description="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
        valueRatingPreferences={
          props.student.canTakeApprenticeship ? 'tak' : 'nie'
        }
      />
      <SingleStudentPreferences
        description="Komercyjne doświadczenie w programowaniu"
        valueRatingPreferences={props.student.monthsOfCommercialExp.toString()}
      />
    </div>
  );
};
