// modules //

const bucketUrl = "http://localhost:8080/";

export default function renderLinks(data){
    let list = [];

    data.forEach((e) => {

        list.push(<div className={"position-relative"}>
                <div style={{left: "1000px"}}>
                    <h1>Meu Título</h1>
                    <p>Meu conteúdo</p>
                </div>
            </div>
        );  
    });
    return list;
}