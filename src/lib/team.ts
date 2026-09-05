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

export const FACULTY: FacultyMember[] = [
  {
    name: "Dr. S. S. Satputaley",
    role: "HOD, ME Dept.",
    department: "Mechanical Engineering",
    photo: "/Team/HOD.png",
  },
  {
    name: "Dr. M. S. Khan",
    role: "Co-curricular In-charge",
    department: "Mechanical Engineering",
    photo: "/Team/Dr. V. C. Sontakke.png",
  },
  {
    name: "Dr. V. C. Sontakke",
    role: "Faculty Coordinator",
    department: "Mechanical Engineering",
    photo: "/Team/Dr. M. S. Khan.png",
  },
];

export const TEAM_LEAD: StudentMember[] = [
  {
    name: "Ansheel Salodkar",
    role: "Coordinator",
    team: "Lead Team",
    year: "4th ME",
    photo: "/Team/Ansheel Salodkar.jpeg",
  },
  {
    name: "Aashay Chahande",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
    photo: "/Team/Aashay Chahande.jpeg",
  },
  {
    name: "Riya Chipate",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
    photo: "/Team/Riya Chipate.jpeg",
  },
];
