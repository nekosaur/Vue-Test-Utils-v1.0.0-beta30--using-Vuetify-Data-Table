const employeesList = [
  {
    displayName: 'Samuel Michael',
    department : 'Marketing',
    login: '003',
    _id: '004'        
  },
  {
    displayName: 'Florian Mueller',
    department : 'Advertising',
    login: '004',
    _id: '005'
  },
];

export default async (PartialName) => {
  return employeesList.filter(u => u.displayName.indexOf(PartialName) !== -1);
};
