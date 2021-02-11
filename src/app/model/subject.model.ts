export class Subject {
    _id: string;
    code_subject: string;
    name: string;
    period: string;
    active: boolean;
    grades: [{
        _id: string;
        id_grade: string;
        name: string;
        grade_value: number;
        date: Date;
    }]

}