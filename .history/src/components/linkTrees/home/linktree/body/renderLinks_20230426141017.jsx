export default function renderLinks(data){
    let list = [];
    let res = {
        list: undefined,
        tittle: undefined
    };

    let i = 0;
    data.forEach((e) => {
        console.log(e)
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a href="https://developers.google.com/identity/protocols/oauth2?hl=pt-br">{e.name}</a>
                    </h5>
                </div>
            </div>
        );  
        i += 1;
        res.tittle = e.name;
    });
    res.list = list;
    return res;
}