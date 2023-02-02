import "./RedesSociais.css"
function RedesSociais() {

    const redes = [
        {id: 1, urlNome: "instagram", url: "https://www.instagram.com/joao_scarpim/"},
        {id: 2, urlNome: "YouTube", url: "https://www.youtube.com/@joaoscarpim2212/featured"},
        
        
    ]
    return (
        < >
           {redes.map((rede) => (
            <div key={rede.id} className="link_container">
                <a href={rede.url}>{rede.urlNome}</a>
            </div>
           ))}

        </>
    )
}


export default RedesSociais