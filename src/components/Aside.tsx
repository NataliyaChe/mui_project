import { Paper, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Search } from '../components/Search';
import { ReactComponent as Right } from '../images/Right.svg';
import { progressList } from '../data/ProgressListData';

export function Aside() {

    return (
        <Box sx={{width: 506, bgcolor: 'secondary.main', borderRadius: '0px 24px 24px 0px'}}>
            <Search />
            <Typography variant='h6' sx={{ml: '39px', mb: '24px', color: 'secondary.contrastText'}}>
                Course In Progress
            </Typography>
            <Box sx={{ml: '24px', mb: '53px', bg: 'transparent'}}>
                {progressList.map((item) => (
                    <Accordion key={item.id} sx={{mb: '8px', width: 444, borderRadius: '16px', bgcolor: 'warning.main'}} elevation={0}>
                    <AccordionSummary
                        expandIcon={<Right />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                        sx={{ display: 'flex', alignItems: 'center', px: '24px'}}>
                        <Paper sx={{width: 56, height: 56, borderRadius: '16px',bgcolor: item.bgcolor, mr: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            {item.icon}
                        </Paper>
                        <Box>
                            <Typography  sx={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter', color: 'secondary.contrastText', }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{fontSize: 13, fontWeight: 600, fontFamily: 'Inter', color: 'primary.contrastText'}}>
                                {item.text}
                            </Typography>
                        </Box>  
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='h6' sx={{color: '#808191'}}>
                            Continue course
                        </Typography>
                        <Typography variant='h6' sx={{color: '#808191'}}>
                            Finish course
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                ))}
            </Box>
            <Typography variant='h5' sx={{ml: '24px', mb: '16px', color: 'success.contrastText'}}>
                Your learning point 
            </Typography>
            <Paper sx={{width: 444, height: 187, borderRadius: '24px', bgcolor: 'success.main', ml: '24px' }} elevation={0} />
        </Box>   
    )
}

