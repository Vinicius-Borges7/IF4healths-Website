export default function renderLinks(data){
    let list = [];
    let res = {
        list: undefined,
        tittle: undefined
    };
    
    let i = 0;
    data.forEach((e) => {
        console.log(e.links)
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a>asd</a>
                    </h5>
                </div>
            </div>
        );  
        i += 1;
        res.tittle = e.tittle;
    });
    res.list = list;
    console
    return res;
}