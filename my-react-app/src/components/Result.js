
function  Result(props){
    
    let total=(props.phy-0)+(props.che-0)+(props.math-0);
    let percentage=total/3;
    let phy=(props.phy-0);
    let che=Number(props.che);
    let math=Number(props.math);
    
    let passaurfail="";
    let outputphy="";
    let outputche="";
    let outputmath="";
    if(total<120){
        passaurfail="fail";
    }
    else{
        passaurfail="pass"
    }
    if(phy<33){
        outputphy="fail";

    }
    else{
        outputphy="pass";
    }
    if(che<33){
        outputche="fail";
    }
    else{
        outputche="pass"
    }
    if(math<33){
        outputmath="fail";
    }
    else{
        outputmath="pass";
    }
    // let total={Number(props.phy)/3+Number(props.che)/3+Number(props.math)/3};
    // let percentage={Number(props.phy)/3+Number(props.che)/3+Number(props.math)/3};
    return<p>
        <table border="2">
            <tr>
            <th>Name</th>
       <th>RollNo</th>
       <th>Phy</th>
       <th>Che</th>
       <th>Math</th>
       <th>Total</th>
       <th>percentage</th>
       <th>Result</th>
       <th>outputphy</th>
       <th>outputche</th>
       <th>outputmath</th>
       
       </tr>
       <tr>
       
       <td>{props.name}</td>
        <td>{props.rollno}</td>
        <td>{props.phy}</td>
        <td>{props.che}</td>
        <td>{props.math}</td>
        <td>{total}</td>
        <td>{percentage}</td>
        <td>{passaurfail}</td>
        <td>{outputphy}</td>
        <td>{outputche}</td>
        <td>{outputmath}</td>
       
       
       </tr>

       </table>
      

       
    </p>;
}
export default Result;