export class Teacher {
    code: string;
    name: string;
    lastname: string;
    birthdate: Date;
    degree: string;
    email: string;
    password: string;
    id_rol: string;
    image_location: string;
    location: {
      latitud: number;
      longitud: number;
    };
    subjects: [
      {
        code_subject: string;
        name: string;
        period: string;
        active: boolean;
        grades: [
          {
            id_grade: string;
            name: string;
            grade_value: number;
            date: Date;
          }
        ]
      }
    ]
  
  };