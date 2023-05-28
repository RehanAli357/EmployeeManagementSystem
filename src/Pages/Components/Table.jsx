import React from "react";

const Table = ({ heading, data }) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            {heading.map((data, index) => {
              return <th key={index}>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.position}</td>
              <td>{data.sales}</td>
              <td>{data.level}</td>
              <td>{data.salary}</td>
              <td>
                <button>🖊️</button>
                <button>🗑️</button>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
