export interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

export interface Department {
    id: number;
    departmentName: string;
    employees: Employee[];
}

const departmentData: Department[] = [
  {
    id: 1,
    departmentName: "Engineering",
    employees: [
      { id: 1, name: "Alice Johnson", position: "Software Engineer", salary: 75000 },
      { id: 2, name: "Bob Smith", position: "DevOps Engineer", salary: 72000 },
      { id: 3, name: "Ethan Carter", position: "Frontend Developer", salary: 70000 },
      { id: 4, name: "Sophia Miller", position: "Backend Developer", salary: 73000 },
      { id: 5, name: "Liam Anderson", position: "QA Engineer", salary: 68000 },
    ],
  },
  {
    id: 2,
    departmentName: "Human Resources",
    employees: [
      { id: 6, name: "Carol White", position: "HR Manager", salary: 65000 },
      { id: 7, name: "Emma Wilson", position: "HR Executive", salary: 55000 },
      { id: 8, name: "James Taylor", position: "Recruiter", salary: 52000 },
      { id: 9, name: "Olivia Thomas", position: "Talent Specialist", salary: 58000 },
      { id: 10, name: "Noah Harris", position: "HR Coordinator", salary: 50000 },
    ],
  },
  {
    id: 3,
    departmentName: "Finance",
    employees: [
      { id: 11, name: "David Brown", position: "Accountant", salary: 60000 },
      { id: 12, name: "Ava Martin", position: "Financial Analyst", salary: 67000 },
      { id: 13, name: "Lucas Garcia", position: "Auditor", salary: 62000 },
      { id: 14, name: "Mia Rodriguez", position: "Tax Consultant", salary: 64000 },
      { id: 15, name: "Benjamin Lee", position: "Finance Manager", salary: 80000 },
    ],
  },
  {
    id: 4,
    departmentName: "Marketing",
    employees: [
      { id: 16, name: "Charlotte Clark", position: "Marketing Manager", salary: 70000 },
      { id: 17, name: "Henry Lewis", position: "Content Strategist", salary: 58000 },
      { id: 18, name: "Amelia Walker", position: "SEO Specialist", salary: 56000 },
      { id: 19, name: "Daniel Hall", position: "Social Media Manager", salary: 60000 },
      { id: 20, name: "Grace Allen", position: "Brand Executive", salary: 59000 },
    ],
  },
  {
    id: 5,
    departmentName: "Sales",
    employees: [
      { id: 21, name: "Michael Young", position: "Sales Manager", salary: 78000 },
      { id: 22, name: "Ella King", position: "Sales Executive", salary: 55000 },
      { id: 23, name: "Alexander Wright", position: "Business Development Executive", salary: 62000 },
      { id: 24, name: "Harper Scott", position: "Account Manager", salary: 65000 },
      { id: 25, name: "Jack Green", position: "Sales Representative", salary: 50000 },
    ],
  },
  {
    id: 6,
    departmentName: "IT Support",
    employees: [
      { id: 26, name: "Matthew Adams", position: "IT Support Engineer", salary: 55000 },
      { id: 27, name: "Sofia Baker", position: "System Administrator", salary: 70000 },
      { id: 28, name: "Logan Nelson", position: "Network Engineer", salary: 72000 },
      { id: 29, name: "Chloe Carter", position: "Help Desk Specialist", salary: 48000 },
      { id: 30, name: "William Perez", position: "Cybersecurity Analyst", salary: 85000 },
    ],
  },
];

export default departmentData;