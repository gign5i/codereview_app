import ESpecialization from "@/shared/const/ESpecialization";

interface ISpecializationsProps {
  id: number;
  label: string;
  type: ESpecialization;
}

export const specializations: ISpecializationsProps[] = [
  {
    id: 1,
    label: "Python",
    type: ESpecialization.PYTHON,
  },
  {
    id: 2,
    label: "Java",
    type: ESpecialization.JAVA,
  },
  {
    id: 3,
    label: "JavaScript",
    type: ESpecialization.JAVASCRIPT,
  },
  {
    id: 4,
    label: "Data Science",
    type: ESpecialization.DATA_SCIENCE,
  },
  {
    id: 5,
    label: "QA",
    type: ESpecialization.QUALITY_ASSURANCE,
  },
  {
    id: 6,
    label: "C#",
    type: ESpecialization.C_SHARP,
  },
];
