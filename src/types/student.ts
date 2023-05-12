import {
  ExpectedContractType,
  ExpectedTypeWork,
} from '../components/FilterModal/enums';

export type Student = {
  id: string;
  email: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  bonusProjectUrls: string[];
  githubUsername: string;
  firstName: string;
  lastName: string;
  projectUrls: string[];
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string;
  expectedContractType: ExpectedContractType;
  expectedSalary: string;
  canTakeApprenticeship: boolean;
  monthsOfCommercialExp: number;
};
