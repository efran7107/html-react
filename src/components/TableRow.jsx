import "../css/TableRow.css";
function TableRow({ char, index }) {
  return (
    <tr className={(index + 1) % 2 === 0 ? "light" : "dark"}>
      <td>{char.name}</td>
      <td>{char.skillset.join(", ")}</td>
      <td>{char.votes}</td>
    </tr>
  );
}

export default TableRow;
