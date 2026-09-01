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
  `/images/team/${name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-")}.jpg`;

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

export const TEAMS: { team: string; members: StudentMember[] }[] = [
  {
    team: "Technical",
    members: [
      { name: "Vedant Giri", role: "Coordinator", year: "4th ME", photo: getPhoto("Vedant Giri") },
    ],
  },
  {
    team: "Finance and Sponsorship",
    members: [
      { name: "Sakhi Ghugare", role: "Coordinator", year: "4th ME", photo: getPhoto("Sakhi Ghugare") },
      { name: "Harshal Mate", role: "Co-Coordinator", year: "4th ME", photo: getPhoto("Harshal Mate") },
    ],
  },
  {
    team: "Promotion",
    members: [
      { name: "Yash Wadnere", role: "Coordinator", year: "4th ME", photo: getPhoto("Yash Wadnere") },
      { name: "Aboli Gajbhiye", role: "Co-Coordinator", year: "3rd ME", photo: getPhoto("Aboli Gajbhiye") },
    ],
  },
  {
    team: "Documentation",
    members: [
      { name: "Tushar Kamble", role: "Coordinator", year: "4th ME", photo: getPhoto("Tushar Kamble") },
      { name: "Jeeya Deshmukh", role: "Co-Coordinator", year: "4th ME", photo: getPhoto("Jeeya Deshmukh") },
    ],
  },
  {
    team: "Inauguration & Anchoring",
    members: [
      { name: "Priyanka Kakde", role: "Coordinator", year: "4th ME", photo: getPhoto("Priyanka Kakde") },
    ],
  },
  {
    team: "Discipline",
    members: [
      { name: "Tushar Dandhare", role: "Coordinator", year: "4th ME", photo: getPhoto("Tushar Dandhare") },
      { name: "Girish Gade", role: "Co-Coordinator", year: "4th ME", photo: getPhoto("Girish Gade") },
    ],
  },
  {
    team: "Physical Arrangement",
    members: [
      { name: "Nayan Khapekar", role: "Coordinator", year: "4th ME", photo: getPhoto("Nayan Khapekar") },
      { name: "Vivek Bhelkar", role: "Co-Coordinator", year: "3rd ME", photo: getPhoto("Vivek Bhelkar") },
    ],
  },
  {
    team: "Media",
    members: [
      { name: "Kshitij Shelke", role: "Coordinator", year: "4th ME", photo: getPhoto("Kshitij Shelke") },
    ],
  },
];
