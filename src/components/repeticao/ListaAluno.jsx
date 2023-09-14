import alunos from '../../data/alunos'

export default function ListaAluno(props) {
    const lis = alunos.map((aluno) => {
        return(
            <li key={aluno.id}>
                { aluno.id }) { aluno.nome } -&gt; { aluno.nota }
            </li>
        );
    });
    return(
        <div>
            <ul>
                { lis }
            </ul>
        </div>
    )
}