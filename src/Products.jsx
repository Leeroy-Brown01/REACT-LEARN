function Products(){

    const bricks1 = "Common bricks"
    const bricks2 = "Face bricks"
    const stones1 ="19mm Stones"
    const stones2 ="13mm Stones"
    const mix ="crusher run"
    const dust ="quarry dust"
    const h1="Our Products at Tiger"


    return(
        <div>
            <h1>{h1.toUpperCase()}</h1>
            <ul>
                <li>Half bricks</li>
                <li>{bricks1}</li>
                <li>{bricks2}</li>
                <li>{stones1}</li>
                <li>{stones2}</li>
                <li>{mix}</li>
                <li>{dust}</li>
            </ul>
        </div>
    
    );

}

export default Products;