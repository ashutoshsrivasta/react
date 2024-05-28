function SubItem(props)
{
	return <p>
	
	<h2>ASHU ITEM</h2>
    <h3>{props.a}</h3>
    <h4>{props.b}</h4>
	<h5>{Number(props.a)-Number(props.b)}</h5>
    
	
	</p>;
}
export default SubItem;