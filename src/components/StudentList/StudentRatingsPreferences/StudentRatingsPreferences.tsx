// eslint-disable-next-line import/extensions
import { GetOneStudentResponse } from 'types';
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
        description="Ocena pracy w zespole Scrum"
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
        description="Oczekiwania, typ kontraktu"
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
