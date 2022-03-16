import styled from "styled-components";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';

export const MyPaper = styled(Paper)`
    margin-top: 20px;
    padding: 20px;
`;

export const YearSelectorWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: spart;
`;

export const YearSelector = styled.div`
    display: inline-block;
    width: 200px;
`;

export const MyTypography = styled(Typography)`
    padding-right: 20px;
`;

export const MySelect = styled(Select)`
    div {
        padding: 5px
    }
`;

export const StatusReportBody = styled.div`
`;

export const ChangeStatus = styled.div`
    padding: 20px 0;
    button {
        margin-right: 10px;
    }
`;