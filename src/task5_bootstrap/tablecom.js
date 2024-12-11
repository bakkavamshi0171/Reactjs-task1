import  React,{ Component } from "react";
import Table from "react-bootstrap/Table";
import "./table.css";

class TableCom extends Component {
  render() {
    return (
      <div style={{padding:"50px"}}>
        <h1 style={{ textAlign: "center", margin: "50px" }}>Task6 Tables 27-11-2024</h1>
        <div>
          <Table responsive="sm" style={{border:"1px solid black"}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Moblie No</th>
                <th>Percentage</th>
                <th>Skills</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Vamshi</td>
                <td>BSC</td>
                <td>9557354051</td>
                <td>83%</td>
                <td>FrontEnd Dev</td>
                <td>Kukatpally</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Shiva</td>
                <td>EEE</td>
                <td>8754612390</td>
                <td>80%</td>
                <td>Full Stack Developer</td>
                <td>Nizambad</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Santu</td>
                <td>BSC(multi Media)</td>
                <td>9557846321</td>
                <td>90%</td>
                <td>Full Stack</td>
                <td>Srikakulam</td>
              </tr>
              <tr>
                <td>4</td>
                <td>BharadWaj</td>
                <td>EEE</td>
                <td>6305754821</td>
                <td>90%</td>
                <td>Full Stack</td>
                <td>Nizambad</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default TableCom;
