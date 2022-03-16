import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
    MyPaper, 
    YearSelectorWrapper, 
    YearSelector, 
    MyTypography, 
    MySelect, 
    StatusReportBody, 
    ChangeStatus 
} from './styles-list';
import ReportSituationTable from '../ReportSituationTable';

export default function ReportStatus() {
    const [age, setAge] = React.useState(2022);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box>
        <Accordion elevation={8}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div>
                    <Typography>
                        Farg'ona Viloyati Kasb-Hunar Ta'limi Hududiy Boshqarmasi Tasarrufidagi Farg'ona Tumani Qurilish Sanoat Kasb-Hunar Kolleji
                    </Typography>
                    <Typography style={{fontSize: 13}}><b>STIR:</b> 200197177, <b>KTUT:</b> 31097097</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>

                <i>OPF kodi:</i>
                <Typography>
                    <b>270</b> - Учреждение
                </Typography>

                <br/>
                <i>SOOGU kodi:</i>
                <Typography>
                    <b>79994</b> - Субъекты предпринимательства, не вошедшие в структуры органов государственного и хозяйственного управления
                </Typography>

                <br/>
                <i>IFUT kodi:</i>
                <Typography>
                    <b>85320</b> - Техническое и профессиональное среднее образование
                </Typography>

                <br/>
                <i>SOATO kodi:</i>
                <Typography>
                    <b>1730233575</b> - Farg'ona viloyati, Farg'ona tumani, Mindon shaharchasi
                </Typography>

                <br/>
                <i>Manzili:</i>
                <Typography>
                    Mindon ko'chasi, 318-uy
                </Typography>

                <br/>
                <i>Elektron pochta manzili:</i>
                <Typography>
                    -
                </Typography>

                <br/>
                <i>Telefon kontaktlari:</i>
                <Typography>
                    +99899 999-99-99
                </Typography>
            </AccordionDetails>
        </Accordion>
        <MyPaper elevation={8}>
            <YearSelectorWrapper>
                <MyTypography component="p"><b>Hisobot yili:</b></MyTypography>
                <YearSelector>
                    <FormControl fullWidth>
                        <MySelect
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem  value={2020}>2020</MenuItem>
                            <MenuItem  value={2021}>2021</MenuItem>
                            <MenuItem  value={2022}>2022</MenuItem>
                            <MenuItem  value={2023}>2023</MenuItem>
                        </MySelect>
                    </FormControl>
                </YearSelector>
            </YearSelectorWrapper>
            <StatusReportBody>
                <ChangeStatus>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Qoralamalar
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Jo'natilgan
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Ko'rib chiqish jarayyonida
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Qabul qilingan
                    </Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Rad etilgan
                    </Button>
                </ChangeStatus>
                <ReportSituationTable/>
            </StatusReportBody>
        </MyPaper>
    </Box>
  )
}