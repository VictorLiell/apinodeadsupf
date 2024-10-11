import { randomUUID } from "crypto"

export class DatabaseFake {

    #alunos = new Map()

    select() {
        console.log(this.#alunos);
        
        return Array.from (this.#alunos.values())
    }

    insert (aluno) {
        const alunoId = randomUUID()
        this.#alunos.set(alunoId, aluno)

    }

    update(id, aluno){
        this.#alunos.set(id,aluno)
    }

    delete(id) {
        this.#alunos.delete(id)
    }
 
}