
type Student = {
    name: string;
    grades: number[];
  };
  
  const students: Student[] = [
    { name: "Alice", grades: [85, 90, 78] },
    { name: "Bob", grades: [70, 75, 80] },
    { name: "Charlie", grades: [95, 90, 92] },
  ];

  
  function calculateAverage(grades: number[]): number {
    
    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;

  }
  
  const sortedStudents = students.sort((a, b) => {

    const avgA = calculateAverage(a.grades);
    const avgB = calculateAverage(b.grades);
    return avgB - avgA;

  });
  
  console.log("Students sorted by average grade:");
  sortedStudents.forEach((student) => {
    console.log(`${student.name}: ${calculateAverage(student.grades).toFixed(2)}`);
  });
  