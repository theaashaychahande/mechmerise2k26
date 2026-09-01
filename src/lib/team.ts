export type FacultyMember = {
  name: string;
  role: string;
  department: string;
};

export type StudentMember = {
  name: string;
  role: string;
  year: string;
  team?: string;
};

export const FACULTY: FacultyMember[] = [
  {
    name: "Dr. S. S. Satputaley",
    role: "HOD, ME Dept.",
    department: "Mechanical Engineering",
  },
  {
    name: "Dr. M. S. Khan",
    role: "Co-curricular In-charge",
    department: "Mechanical Engineering",
  },
  {
    name: "Dr. V. C. Sontakke",
    role: "Faculty Coordinator",
    department: "Mechanical Engineering",
  },
];

export const TEAM_LEAD: StudentMember[] = [
  {
    name: "Ansheel Salodkar",
    role: "Coordinator",
    team: "Lead Team",
    year: "4th ME",
  },
  {
    name: "Aashay Chahande",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
  },
  {
    name: "Riya Chipate",
    role: "Co-Coordinator",
    team: "Lead Team",
    year: "3rd ME",
  },
];

export const TEAMS: { team: string; members: StudentMember[] }[] = [
  {
    team: "Technical",
    members: [{ name: "Vedant Giri", role: "Coordinator", year: "4th ME" }],
  },
  {
    team: "Finance and Sponsorship",
    members: [
      { name: "Sakhi Ghugare", role: "Coordinator", year: "4th ME" },
      { name: "Harshal Mate", role: "Co-Coordinator", year: "4th ME" },
    ],
  },
  {
    team: "Promotion",
    members: [
      { name: "Yash wadnere ", role: "Coordinator", year: "4th ME" },
      { name: "Aboli Gajbhiye", role: "Co-Coordinator", year: "3rd ME" },
    ],
  },
  {
    team: "Documentation",
    members: [
      { name: "Tushar Kamble", role: "Coordinator", year: "4th ME" },
      { name: "Jeeya Deshmukh", role: "Co-Coordinator", year: "4th ME" },
    ],
  },
  {
    team: "Inauguration & Anchoring",
    members: [{ name: "Priyanka Kakde", role: "Coordinator", year: "4th ME" }],
  },
  {
    team: "Discipline",
    members: [
      { name: "Tushar Dandhare", role: "Coordinator", year: "4th ME" },
      { name: "Girish Gade", role: "Co-Coordinator", year: "4th ME" },
    ],
  },
  {
    team: "Physical Arrangement",
    members: [
      { name: "Nayan Khapekar", role: "Coordinator", year: "4th ME" },
      { name: "Vivek Bhelkar", role: "Co-Coordinator", year: "3rd ME" },
    ],
  },
  {
    team: "Media",
    members: [{ name: "Kshitij Shelke", role: "Coordinator", year: "4th ME" }],
  },
];
