import TableGD from '../../Component/TableGD/TableGD';

const TABLE_HEADER = [
  { id: '1', label: 'Product Name', mapping: 'name' },
  { id: '2', label: 'Price', mapping: 'price' },
  { id: '3', label: 'Description', mapping: 'description' },
  { id: '5', label: 'Rating', mapping: 'rating' },
  { id: '4', label: 'Manufacture Date', mapping: 'manufactureDate' },
];

const List = (props) => {
  console.log('List Rendering');
  return <TableGD thead={TABLE_HEADER} tboday={props.list} />;
};

export default List;
