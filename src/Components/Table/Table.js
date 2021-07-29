import React from 'react';
import data from '../DummyData/DummyData.json'





const Table = () => {


    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Compliance Documents Table</h2>
            <table style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                <thead style={{ border: "solid", color: "#333" }}>
                    <tr >
                        <th style={{ border: "solid", color: "#333" }}>Record</th>
                        <th style={{ border: "solid", color: "#333" }}>Review of</th>
                        <th style={{ border: "solid", color: "#333" }}>Physical Records Kept fopr 7 year</th>
                        <th style={{ border: "solid", color: "#333" }}>Electronic Records Kept fopr 7 year</th>
                        <th style={{ border: "solid", color: "#333" }}>Responsible Department</th>
                        <th style={{ border: "solid", color: "#333" }}>Frequency</th>
                        <th style={{ border: "solid", color: "#333" }}>Next Due Date</th>
                        <th style={{ border: "solid", color: "#333" }}>Compliance Officer Signature and Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td style={{ border: "solid", color: "#333" }}>{item.record}</td>
                                <td style={{ border: "solid", color: "#333" }}>{item.reviewOf} </td>
                                <td style={{ border: "solid", color: "#333" }}>{item.physical} </td>
                                <td style={{ border: "solid", color: "#333" }}>{item.electronic} </td>
                                <td style={{ border: "solid", color: "#333" }}>{item.resposibleDepartment} </td>
                                <td style={{ border: "solid", color: "#333" }}>{item.frequency} </td>
                                <td style={{ border: "solid", color: "#333" }}> {item.DueDate}</td>
                                <td style={{ border: "solid", color: "#333" }}> Place Holder</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )

}

export default Table
