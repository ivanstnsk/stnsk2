import React from 'react';

import { useStyles } from './styles';


type RowTableProps = {
  rows: [string, string][];
}

export const RowTable: React.FC<RowTableProps> = ({
  rows,
}) => {
  const classes = useStyles();

  return (
    <table className={classes.table}>
      <tr>
        {rows.map(([title, text]) => (
          <td
            className={classes.cell}
            key={title}
          >
            <div className={classes.cellTitle}>{title}</div>
            <div className={classes.cellText}>{text}</div>
          </td>
        ))}
      </tr>
    </table>
  );
};
