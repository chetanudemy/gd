import axios from 'axios';
import { useState, useEffect } from 'react';
import TableGD from '../../Component/TableGD/TableGD';

const TABLE_HEADER = [
  { id: '1', label: 'Product Name', mapping: 'name' },
  { id: '2', label: 'Price', mapping: 'price' },
  { id: '3', label: 'Description', mapping: 'description' },
  { id: '5', label: 'Rating', mapping: 'rating' },
  { id: '4', label: 'Manufacture Date', mapping: 'manufactureDate' },
];

const List = (props) => {
  const [list, setList] = useState([]);
  console.log('List Rendering');

  useEffect(() => {
    axios
      .get(
        'https://expensetracker-f61d7-default-rtdb.firebaseio.com/Products.json'
      )
      .then((response) => {
        if (response.data) {
          let tableData = [];
          for (const [key, value] of Object.entries(response.data)) {
            tableData.push({
              id: key,
              ...value,
            });
          }
          setList(tableData);
        }
      })
      .catch((error) => {
        console.log('error');
      });
  }, [props.newProduct]);

  return <TableGD thead={TABLE_HEADER} tboday={list} />;
};

export default List;
