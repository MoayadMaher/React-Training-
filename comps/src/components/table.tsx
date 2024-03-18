function Table({ data }: any) {
  const rederedRow = data.map((fruit: any) => {
    return (
      <tr className="border" key={fruit.name}>
        <td className="p-3">{fruit.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${fruit.color}`}></div>
        </td>
        <td>{fruit.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody> {rederedRow} </tbody>
    </table>
  );
}

export default Table;
