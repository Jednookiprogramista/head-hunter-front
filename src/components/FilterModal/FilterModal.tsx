import { Dialog, DialogActions, DialogContent } from '@mui/material';
import { Form, Formik } from 'formik';
import { PrimaryButton } from '../Button/PrimaryButton';
import { SecondaryButton } from '../Button/SecondaryButton';
import { TextButton } from '../Button/TextButton';
import { ExpectationField } from './ExpectationField/ExpectationField';
import { InternshipForm } from './InternshipForm/InternshipForm';
import { MonthField } from './MonthField/MonthField';
import { SalaryField } from './SalaryField/SalaryField';
import { StarsScoreField } from './StarScoreField/StarsScoreField';
import { ExpectedContractType, ExpectedTypeWork } from './enums';
import './filterModal.css';

type FilterModalProps = {
  isOpen: boolean;
  onCancel: () => void;
};

type FormValues = {
  courseCompletion: number | null;
  courseEngagement: number | null;
  projectDegree: number | null;
  teamProjectDegree: number | null;
  expectedTypeWork?: ExpectedTypeWork[];
  expectedContractType?: ExpectedContractType[];
  expectedSalary: { min: number | string; max: number | string };
  canTakeApprenticeship: boolean | null;
  monthsOfCommercialExp: number | string;
};

const initialValues: FormValues = {
  courseCompletion: null,
  courseEngagement: null,
  projectDegree: null,
  teamProjectDegree: null,
  expectedSalary: { min: '', max: '' },
  canTakeApprenticeship: null,
  monthsOfCommercialExp: '',
};

export const FilterModal = ({ isOpen, onCancel }: FilterModalProps) => {
  const handleClose = () => {
    onCancel();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <div className="dialog-container">
        <Formik<FormValues>
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <DialogContent className="dialog-content">
              <div className="dialog-header">
                Filtrowanie
                <SecondaryButton type="reset">
                  Wyczyść wszystkie
                </SecondaryButton>
              </div>
              <StarsScoreField
                title="Ocena przejścia kursu"
                name="courseCompletion"
              />
              <StarsScoreField
                title="Ocena aktywności i zaangażowania na kursie"
                name="courseEngagement"
              />
              <StarsScoreField
                title="Ocena kodu w projekcie własnym"
                name="projectDegree"
              />
              <StarsScoreField
                title="Ocena pracy w zespole w Scrum"
                name="teamProjectDegree"
              />
              <ExpectationField
                title="Preferowane miejsce pracy"
                options={[
                  { label: 'Praca zdalna', value: ExpectedTypeWork.REMOTE },
                  { label: 'Praca w biurze', value: ExpectedTypeWork.ON_SITE },
                ]}
                name="expectedTypeWork"
              />
              <ExpectationField
                title="Oczekiwany typ kontraktu"
                options={[
                  {
                    label: 'Umowa o pracę',
                    value: ExpectedContractType.EMPLOYMENT_CONTRACT,
                  },
                  { label: 'B2B', value: ExpectedContractType.B2B },
                  {
                    label: 'Umowa zlecenie',
                    value: ExpectedContractType.SERVICE_CONTRACT,
                  },
                  {
                    label: 'Umowa o dzieło',
                    value: ExpectedContractType.WORK_CONTRACT,
                  },
                ]}
                name="expectedContractType"
              />
              <SalaryField
                title="Oczekiwane wynagrodzenie miesięczne netto"
                nameMin="expectedSalary.min"
                nameMax="expectedSalary.max"
              />
              <InternshipForm
                title="Zgoda na odbycie bezpłatnych praktyk/stażu na początek"
                name="canTakeApprenticeship"
              />
              <MonthField
                title="Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu"
                name="monthsOfCommercialExp"
              />
            </DialogContent>
            <DialogActions
              className="dialog-actions"
              style={{ padding: '20px 24px' }}
            >
              <TextButton onClick={handleClose}>Anuluj</TextButton>
              <PrimaryButton type="submit">Pokaż wyniki</PrimaryButton>
            </DialogActions>
          </Form>
        </Formik>
      </div>
    </Dialog>
  );
};
