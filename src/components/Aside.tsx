import { SvgIcon, Paper, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Search } from '../components/Search'
import { ReactComponent as Codeigniter } from '../images/courses_item/1.svg';
import { ReactComponent as Right } from '../images/Right.svg';

export function Aside() {
    const progressListData = [
        { icon: <Codeigniter />, path: "#", title: 'Build Your First Application', text: 'Codeigniter', id: 1},
        { icon: <Codeigniter />, path: "#", title: 'Build something beautiful', text: 'Sketch', id: 2},
        { icon: <Codeigniter />, path: "#", title: 'Firebase on Android: Cloud Fire', text: 'Firebase', id: 3},
        { icon: <Codeigniter />, path: "#", title: 'Creating Custom Animations', text: 'Principle', id: 4},
    ]

    return (
        <Box sx={{width: 506, bgcolor: '#F5FBFF', borderRadius: '0px 24px 24px 0px'}}>
            <Search />
            <Typography variant='h6' sx={{ml: '39px', mb: '24px'}}>
                Course In Progress
            </Typography>
            <Box sx={{ml: '24px', mb: '53px'}}>
                {progressListData.map((item) => (
                    <Accordion key={item.id} sx={{mb: '8px', width: 444, borderRadius: '16px'}} elevation={0}>
                    <AccordionSummary
                        expandIcon={<Right />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                        sx={{ display: 'flex', alignItems: 'center', px: '24px'}}
                    >
                        <Paper sx={{width: 56, height: 56, borderRadius: '16px',bgcolor: '#FFA2C0', mr: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        {/* <SvgIcon component={item.icon}  sx={{fill: 'none', width: '32px', height: '32px'}} inheritViewBox /> */}
                            {item.icon}
                        </Paper>
                        <Box>
                            <Typography  sx={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter', color: '#11142D', }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{fontSize: 13, fontWeight: 600, fontFamily: 'Inter', color: '#808191'}}>
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
            <Typography variant='h5' sx={{ml: '24px', mb: '16px'}}>
                Your learning point 
            </Typography>
            <Paper sx={{width: 444, height: 187, borderRadius: '24px', bgcolor: '#DDEDFF', ml: '24px' }} elevation={0} />
        </Box>   
    )
}

