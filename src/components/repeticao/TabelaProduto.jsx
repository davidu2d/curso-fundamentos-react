import produtos from '../../data/produtos'
import './TabelaProduto.css'

const TabelaProduto = () =>{
    const produtosJsx = produtos.map((produto, i) => {
        return(
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td> {produto.id }</td>
                <td>{ produto.descricao }</td>
                <td>{ produto.preco }</td>
            </tr>
        )
    })
    return (
        <table className='TabelaProduto'>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Descrição</th>
                    <th>Preço(R$)</th>
                </tr>
            </thead>
            <tbody>
                { produtosJsx }
            </tbody>
        </table>
    )
}

export default TabelaProduto