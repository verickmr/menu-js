const Nav = (props) => {
    return ( <div className="navegacao">
        <input type="radio" name="option-page" id="page-0" defaultChecked onClick={() => props.setPageOn(0)}/>
        <label htmlFor="page-0">Pratos Principais</label>
        <input type="radio" name="option-page" id="page-1" onClick={() => props.setPageOn(1)} />
        <label htmlFor="page-1">Sobremesas</label>
        <input type="radio" name="option-page" id="page-2" onClick={() => props.setPageOn(2)}/>
        <label htmlFor="page-2">Bebidas</label>
    </div> );
}
 
export default Nav; 