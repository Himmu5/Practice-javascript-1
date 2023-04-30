import { FC } from "react";

type P = {};

const ArrayPractice: FC<P> = () => {
    const data = [
      "Himanshu , Chauhan",
      "Akhil , Tiwari",
      "Aman , Rawat",
      "Arnav , gowswami",
    ];

  const investor = [
    { first: "Himanshu", last: "Chauhan", year: 2022, pass: 12345 },
    { first: "Akhil", last: "Tiwari", year: 1980, pass: 12345 },
    { first: "Aman", last: "rawat", year: 1975, pass: 12345 },
    { first: "Pravesh", last: "Singh", year: 2000, pass: 12345 },
    { first: "isha", last: "Bisht", year: 1986, pass: 12345 },
    { first: "Badal", last: "Bhardwaj", year: 1995, pass: 12345 },
    { first: "Bhaskar", last: "rawat", year: 1990, pass: 12345 },
    { first: "Sagar", last: "Singh", year: 2000, pass: 12345 },
    { first: "Balram", last: "Tiwari", year: 2010, pass: 12345 },
  ];

  //Only people who born in between 1900 to 2000

  const filteredData = investor.filter((user) => {
    return user.year > 1900 && user.year < 2000;
  });

  console.table(filteredData);

  // only first and last name will be in object

  const firstAndLastName = investor.map((user) => {
    return { First: user.first, Last: user.last };
  });

  console.table(firstAndLastName);

  //sort by DOB lowest to highest

  const sortByDOB = investor.sort((x, y) => {
    return x.year > y.year ? 1 : -1;
  });

  console.table(sortByDOB);

  //Total passed year

  const totalYears = investor.reduce((prev, current) => {
    return prev + current.pass;
  }, 0);

  console.table(totalYears);

  //Sort By Last Name

  const temp = data.sort(( prev , current)=>{
    const data = prev.split(' , ');
    const tempdata = current.split(' , ');
    
    return data[0] > tempdata[0] ? 1 : -1 ;

  })
  console.log(temp);


  return <div></div>;
};

export default ArrayPractice;
