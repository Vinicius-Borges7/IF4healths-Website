export default function renderLinks(data){
    let list = [];
    let res = {
        list: undefined,
        NAME: undefined
    };

    let i = 0;
    data.forEach((e) => {
        list.push(
            <div key={e._id}>
                <div className="card card-body mb-3">
                    <h5 className="card-title">
                        <a href={e.name}>{e.name}</a>
                    </h5>
                </div>
            </div>
        );  
        i += 1;
        res.tittle = e.name;
    });
    console.log(res)
    res.list = list;
    return res;
}