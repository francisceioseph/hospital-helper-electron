export function toPlainValues(rows, associations) {
  let values;
  if (rows instanceof Array) {
    // call this method on every element of the given array of rows
    values = [];
    for (let i = 0; i < rows.length; ++i) {
      // recurse
      values[i] = toPlainValues(rows[i], associations);
    }
  } else if (rows) {
    // only one row
    values = rows.dataValues;

    // get values from associated rows
    if (values && associations) {
      for (let i = 0; i < associations.length; ++i) {
        const association = associations[i];
        const propName = association.as;

        // recurse
        values[propName] = toPlainValues(values[propName], association.include);
      }
    }
  }

  return values;
}
