import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const createData = (guest, mobileNumber, confirmation, checkInDate, checkOutDate, room, bookedOn, bookingAmount) => ({
    guest,
    mobileNumber,
    confirmation,
    checkInDate,
    checkOutDate,
    room,
    bookedOn,
    bookingAmount,
    action: <Button variant="contained"><EditIcon /></Button>
});

const columns = [
    { width: 150, label: 'Guest', dataKey: 'guest' },
    { width: 150, label: 'Mobile Number', dataKey: 'mobileNumber' },
    { width: 150, label: 'Confirmation', dataKey: 'confirmation' },
    { width: 150, label: 'Check-in Date', dataKey: 'checkInDate' },
    { width: 150, label: 'Check-out Date', dataKey: 'checkOutDate' },
    { width: 100, label: 'Room', dataKey: 'room' },
    { width: 150, label: 'Booked On', dataKey: 'bookedOn' },
    { width: 150, label: 'Booking Amount', dataKey: 'bookingAmount' },
    { width: 100, label: 'Action', dataKey: 'action' },
];

const initialRows = [
    createData('John Doe', '1234567890', 'Confirmed', '2023-10-01', '2023-10-05', '101', '2023-09-25', '$500'),
    createData('Jane Smith', '0987654321', 'Pending', '2023-10-02', '2023-10-06', '102', '2023-09-26', '$400'),
    // Add more rows as needed
];

const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
    TableRow,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

VirtuosoTableComponents.Scroller.displayName = 'Scroller';
VirtuosoTableComponents.Table.displayName = 'Table';
VirtuosoTableComponents.TableHead.displayName = 'TableHead';
VirtuosoTableComponents.TableBody.displayName = 'TableBody';

export default function ReactVirtualizedTable() {
    const [rows, setRows] = React.useState(initialRows);
    const [totalBookingAmount, setTotalBookingAmount] = React.useState(0);

    React.useEffect(() => {
        const total = rows.reduce((sum, row) => sum + parseFloat(row.bookingAmount.replace('$', '')), 0);
        setTotalBookingAmount(total);
    }, [rows]);

    const handleRowChange = (index, key, value) => {
        const newRows = [...rows];
        newRows[index][key] = value;
        setRows(newRows);
    };

    const handleAddRow = () => {
        setRows([...rows, createData('', '', '', '', '', '', '', '')]);
    };

    const handleClearRows = () => {
        if (window.confirm('Are you sure you want to clear the table?')) {
            setRows([]);
        }
    };

    const fixedHeaderContent = () => (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align="left"
                    style={{ width: column.width, fontWeight: 'bold' }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );

    const rowContent = (_index, row) => (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align="left"
                >
                    {column.dataKey === 'confirmation' ? (
                        <Select
                            value={row[column.dataKey]}
                            onChange={(e) => handleRowChange(_index, column.dataKey, e.target.value)}
                        >
                            <MenuItem value="Confirmed">Confirmed</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                        </Select>
                    ) : ['guest', 'mobileNumber', 'room', 'bookingAmount'].includes(column.dataKey) ? (
                        <TextField
                            value={row[column.dataKey]}
                            onChange={(e) => handleRowChange(_index, column.dataKey, e.target.value)}
                        />
                    ) : ['checkInDate', 'checkOutDate', 'bookedOn'].includes(column.dataKey) ? (
                        <input
                            type="date"
                            value={row[column.dataKey]}
                            onChange={(e) => handleRowChange(_index, column.dataKey, e.target.value)}
                        />
                    ) : (
                        row[column.dataKey]
                    )}
                </TableCell>
            ))}
        </React.Fragment>
    );

    return (
        <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
                data={rows}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={(index, row) => rowContent(index, row)}
            />
            <TableRow>
                <TableCell colSpan={columns.length} align="center">
                    <Button
                        variant="contained"
                        onClick={handleAddRow}
                        startIcon={<AddIcon />}
                    >
                        Add Row
                    </Button>
                </TableCell>

                <TableCell colSpan={columns.length} align="right">
                    <Button
                        variant="contained"
                        onClick={() => {
                            // Add your save functionality here
                            console.log('Save button clicked!');
                        }}
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        Save
                    </Button>
                </TableCell>

                <TableCell colSpan={columns.length} align="right">
                    <Button
                        variant="contained"
                        onClick={handleClearRows}
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Clear
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={columns.length} align="right" style={{ fontWeight: 'bold' }}>
                    Total Booking Amount: ${totalBookingAmount}
                </TableCell>
            </TableRow>
        </Paper>
    );
}