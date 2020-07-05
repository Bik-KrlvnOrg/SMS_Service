import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("es_questionbank", { schema: "school" })
export class EsQuestionbank {
  @PrimaryGeneratedColumn({ type: "int", name: "q_id" })
  qId: number;

  @Column("int", { name: "chapter_id" })
  chapterId: number;

  @Column("text", { name: "question" })
  question: string;

  @Column("text", { name: "choice_1" })
  choice_1: string;

  @Column("text", { name: "choice_2" })
  choice_2: string;

  @Column("text", { name: "choice_3" })
  choice_3: string;

  @Column("text", { name: "choice_4" })
  choice_4: string;

  @Column("enum", { name: "answer", enum: ["A", "B", "C", "D"] })
  answer: "A" | "B" | "C" | "D";

  @Column("varchar", { name: "feed_dis", length: 255 })
  feedDis: string;

  @Column("text", { name: "correct_ans" })
  correctAns: string;

  @Column("text", { name: "wrong_ans" })
  wrongAns: string;

  @Column("date", { name: "created_on" })
  createdOn: string;

  @Column("enum", { name: "user_type", enum: ["admin", "staff"] })
  userType: "admin" | "staff";

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("enum", { name: "status", enum: ["active", "inactive"] })
  status: "active" | "inactive";
}
