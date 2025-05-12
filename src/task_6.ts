function isLeapYear(year: number): boolean {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }

  }
  
  // Example Year
  const year = 2025;
  
  if (isLeapYear(year)) {
    console.log("Happy New Year! 🎉 It's a leap year.");
  } else {
    console.log("Happy New Year! 🎉 But it's not a leap year.");
  }
  