
import ImageSubItem from './ImageSubItem';

function ImageItem(props)
{
	
	return <p className="vsj">
	<ImageSubItem message="Sub Item"/>
	<h2>{props.message}</h2>
	<ImageSubItem message="Hi"></ImageSubItem>
    
	</p>;
}
export default ImageItem;