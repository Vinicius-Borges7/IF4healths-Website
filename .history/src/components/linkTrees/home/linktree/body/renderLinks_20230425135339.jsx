export default function renderLinks(data){
    let list = [];
    let res = {
        list: undefined,
        tittle: undefined
    };
    
    let i = 0;
    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a>link</a>
                    </h5>
                </div>
            </div>
        );  
        i = i + 1;
        res.tittle = e.tittle;
    });
    res.list = list;
    return res;
}