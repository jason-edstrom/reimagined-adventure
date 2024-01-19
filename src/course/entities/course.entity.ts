import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';



@Entity({ name: 'courses' })
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  systemId: number;

  @Column()
  subject: string;

  @Column()
  courseCode: string;

  @Column()
  section: string;

  @Column()
  title: string;

  @Column()
  credits: number;
}
