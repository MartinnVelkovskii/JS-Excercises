let students = [
  { name: "Ivan", socre: 5 },
  { name: "Dimitar", socre: 5.5 },
  { name: "Kristian", socre: 4 },
  { name: "Valentin", socre: 6 },
  { name: "Veselin", socre: 3 },
  { name: "Genadi", socre: 5 },
  { name: "Yavor", socre: 3 },
  { name: "Marin", socre: 5.5 },
  { name: "Kalin", socre: 3 },
  { name: "Yavor", socre: 6 },
];

const StudentsWithGradesAbove = students.filter(
  (student) => student.socre > 5.5
);
