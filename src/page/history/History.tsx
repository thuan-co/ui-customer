import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import SkeletonTableHistory from "../../components/history/SkeletonTableHistory";
import { historyActions } from "../../features/redux-saga/Order/historySlice";
import { HistoryItem } from "../../model/history";

interface TablePaginationActionsProps {
    count: number,
    page: number,
    rowsPerPage: number
    onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {

    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    
    const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    }

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };
    
    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return(
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="trang đầu tiên"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>

            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="trang trước"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>

            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="trang kế"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>

            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="trang cuối"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    )
}

export default function History() {

    const selector = useAppSelector((state:RootState)=>state.orderedHistory)
    const [result, setResult] = useState<HistoryItem[]>([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [loading, setLoading] = useState(true)

    const handle = () => {
        
        console.log("get selector: ", selector)

        for(let x of selector) {

            var tmp:HistoryItem; 

            for (let y of x.itemsResponse) {
                tmp = {
                    id: x.id,
                    time: x.time,
                    status: x.status,
                    nameItem: y.name,
                    price: y.totalPrice,
                    quantity: y.quantity,
                }
                result.push(tmp)
                setResult(result)
            }
            
        }
        setLoading(false)
        console.log("Chuyen doi", result)
    }

    const dispatch = useAppDispatch()

    useEffect(() => {

        if(result.length === 0) {
            dispatch(historyActions.fetchHistory(sessionStorage.getItem('email') as string))
            handle()
        }

    })

    // useEffect(()=>{
    //     // console.log("hello world...", selector)
    //     if (result.length) { handle() }
    // }, [result])

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - result.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = ( event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <section className="max-w-screen-xl mx-auto ">
            
            <div className="my-4">
                <h3>Những gì bạn đã mua</h3>
            </div>
            {
                selector.map((value) => (
                    <p>{value.id}</p>
                ))
            }
            {
                (loading) ? <SkeletonTableHistory /> : 
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã đơn hàng</TableCell>
                            <TableCell align="center">Tên sản phẩm</TableCell>
                            <TableCell align="center">Số lượng</TableCell>
                            <TableCell align="center">Giá&nbsp;(VNĐ)</TableCell>
                            <TableCell align="center">Ngày mua</TableCell>
                            <TableCell align="center">Trạng thái</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {(rowsPerPage > 0 
                        ? result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
                        : result).map((row) => (
                        <TableRow
                            key={row.nameItem}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                            <TableCell align="center">{row.nameItem}</TableCell>
                            <TableCell align="center">{row.quantity}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">{row.time}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={5} />
                        </TableRow>
                    )}
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                count={result.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            }
    
        </section>
    )
}