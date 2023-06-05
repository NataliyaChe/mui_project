import { Paper, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Search } from '../components/Search';
import { ReactComponent as Right } from '../images/Right.svg';
import { progressList } from '../data/ProgressListData';
import { useTheme } from '@mui/material';

export function Aside() {
    const theme = useTheme();

    return (
        <Box sx={{width: 506, bgcolor: 'background.paper'}}>
            <Search />
            <Typography variant='h6' sx={{ml: '39px', mb: '24px', color: 'text.primary'}}>
                Course In Progress
            </Typography>
            <Box sx={{ml: '24px', mb: '53px', bg: 'transparent'}}>
                {progressList.map((item) => (
                    <Accordion key={item.id} sx={{mb: '8px', width: 444, borderRadius: '16px', bgcolor: 'secondary.main'}} elevation={0}>
                    <AccordionSummary
                        expandIcon={<Right />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                        sx={{ display: 'flex', alignItems: 'center', px: '24px', stroke: theme.palette.text.primary}}>
                        <Paper sx={{width: 56, height: 56, borderRadius: '16px',bgcolor: item.bgcolor, mr: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            {item.icon}
                        </Paper>
                        <Box>
                            <Typography  variant='h6' sx={{color: 'text.primary'}}>
                                {item.title}
                            </Typography>
                            <Typography variant='caption' sx={{color: 'secondary.contrastText'}}>
                                {item.text}
                            </Typography>
                        </Box>  
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant='h6' sx={{color: 'secondary.contrastText'}}>
                            Continue course
                        </Typography>
                        <Typography variant='h6' sx={{color: 'secondary.contrastText'}}>
                            Finish course
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                ))}
            </Box>
            <Typography variant='h5' sx={{ml: '24px', mb: '16px', color: 'text.secondary'}}>
                Your learning point 
            </Typography>
            <Paper sx={{width: 444, height: 187, borderRadius: '24px', bgcolor: '#ddedff', ml: '24px' }} elevation={0} />
        </Box>   
    )
}

