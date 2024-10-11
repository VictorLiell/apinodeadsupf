import { randomUUID } from "crypto"
import sql from "./db.js"
export class DatabasePostgres {

    

    async select() {
        let alunos
        alunos = await sql`select * from students`
        return alunos
      
    }

    async insert (aluno) {
        const alunoId = randomUUID()
        const {name, email, age} = aluno
        await sql`insert into students (id, name, email, age) values (${alunoId}, ${name}, ${email}, ${age})`      
    }

    async update(id, aluno){
        const {name, email, age} = aluno
        await sql`update students set name = ${name}, email = ${email}, age = ${age} where id = ${id}`
        
    }

    async delete(id) {
        await sql`delete from students where id = ${id}`
        
    }
 
}