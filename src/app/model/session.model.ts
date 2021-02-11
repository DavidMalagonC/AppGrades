import { Student } from "./student.model";
import { Subject } from "./subject.model";
import { User } from "./user.model";

export class Session {
  user: User;
  subject: Subject[];
  student: Student;
}
