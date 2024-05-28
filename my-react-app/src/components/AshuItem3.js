
import AshuSubItem from './AshuSubItem';

function AshuItem3(props)
{
	
	return <p className="vsj">
	<AshuSubItem message="Sub Item"/>
	<h2>{props.message}</h2>
	<AshuSubItem message="Hi"></AshuSubItem>
	</p>;
}
export default AshuItem3;