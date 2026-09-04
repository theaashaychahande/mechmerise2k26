export type FacultyMember = {
  name: string;
  role: string;
  department: string;
  photo: string;
};

export type StudentMember = {
  name: string;
  role: string;
  year: string;
  team?: string;
  photo: string;
};

const getPhoto = (name: string) =>
  `/Team/${name}.jpeg`;

export const FACULTY: FacultyMember[] = [
  {
    name: "Dr. S. S. Satputaley",
    role: "HOD, ME Dept.",
    department: "Mechanical Engineering",
    photo: getPhoto("Dr. S. S. Satputaley"),
  },
  {
    name: "Dr. M. S. Khan",
    role: "Co-curricular In-charge",
    department: "Mechanical Engineering",
    photo: getPhoto("Dr. M. S. Khan"),
  },
  {
    name: "Dr. V. C. Sontakke",
    role: "Faculty Coordinator",
    department: "Mechanical Engineering",
    photo: getPhoto("Dr. V. C. Sontakke"),
  },
];

export const TEAM_LEAD: StudentMember[] = [
  {
    name: "Ansheel Salodkar",
    role: "Coordinator",
    team: "Lead Team",
    year: "4th ME",
    photo: getPhoto("Ansheel Salodkar"),
  },
  {
    name: "Aashay Chahande",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
    photo: getPhoto("Aashay Chahande"),
  },
  {
    name: "Riya Chipate",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
    photo: getPhoto("Riya Chipate"),
  },
];
